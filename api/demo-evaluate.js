import { GoogleGenerativeAI } from "@google/generative-ai";

export const config = { maxDuration: 10 };

const rateLimits = new Map();
const LIMIT = 10;
const WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimits.get(ip);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    rateLimits.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (entry.count >= LIMIT) return true;
  entry.count++;
  return false;
}

const SYSTEM_PROMPT = `You are evaluating a student's answer to a Socratic question about causal mechanisms. Classify the gap:
- 'none': Answer demonstrates causal understanding of the mechanism
- 'shallow': Answer is correct but surface-level (missing depth)
- 'deep': Answer misses the core causal chain entirely
- 'misconception': Answer contains a confidently stated wrong model

Respond ONLY with valid JSON, no markdown fences.

JSON shape:
{
  "gapType": "none" | "shallow" | "deep" | "misconception",
  "verdict": "one sentence, direct, no praise",
  "missing": "the specific concept gap",
  "hint": "directional nudge without revealing the answer"
}`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";

  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: "Demo limit reached. Join the waitlist for unlimited access.",
    });
  }

  const { question, answer, mechanisms } = req.body || {};

  if (!answer || typeof answer !== "string" || answer.trim().length < 10) {
    return res.status(200).json({
      gapType: "shallow",
      verdict: "You skipped the hard part.",
      missing: "Any attempt at explanation",
      hint: "Try explaining it out loud first, then type what you said.",
    });
  }

  if (!question || !mechanisms) {
    return res.status(400).json({ error: "Missing question or mechanisms." });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(503).json({ error: "Demo temporarily unavailable." });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const prompt = `Question: ${question}\n\nStudent answer: ${answer}\n\nRelevant mechanisms: ${JSON.stringify(mechanisms)}`;
    const result = await model.generateContent(prompt);
    const raw = result.response.text().trim();

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return res.status(502).json({ error: "Evaluation failed. Try again." });
    }

    if (!parsed.gapType || !parsed.verdict) {
      return res.status(502).json({ error: "Evaluation failed. Try again." });
    }

    return res.status(200).json(parsed);
  } catch {
    return res.status(502).json({ error: "Evaluation failed. Try again." });
  }
}
