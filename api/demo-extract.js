import { GoogleGenerativeAI } from "@google/generative-ai";

export const config = { maxDuration: 10 };

// Simple in-memory rate limiter: IP → { count, windowStart }
const rateLimits = new Map();
const LIMIT = 10;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

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

const SYSTEM_PROMPT = `You are a study engine. Given raw study text, extract 2-4 causal mechanism claims (not topic labels — each must state HOW or WHY something works). Then generate ONE Socratic question that targets the deepest mechanism in the text — something that requires the learner to explain a causal chain, not just recall a definition. Respond ONLY with valid JSON, no markdown fences.

JSON shape:
{
  "mechanisms": [
    { "claim": "one-sentence mechanism claim", "mechanism": "the how/why explanation" }
  ],
  "question": "the Socratic question string",
  "topic": "short topic label"
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

  const { text } = req.body || {};

  if (!text || typeof text !== "string" || text.trim().length < 50) {
    return res.status(400).json({ error: "Text too short to extract from." });
  }
  if (text.length > 2000) {
    return res.status(400).json({ error: "Text exceeds 2000 character limit." });
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

    const result = await model.generateContent(text.slice(0, 2000));
    const raw = result.response.text().trim();

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return res.status(502).json({ error: "Analysis failed. Try different text." });
    }

    if (!parsed.mechanisms || !parsed.question) {
      return res.status(502).json({ error: "Analysis failed. Try different text." });
    }

    return res.status(200).json(parsed);
  } catch (e) {
    console.error('[demo-extract]', e?.message ?? e);
    return res.status(502).json({ error: "Analysis failed. Try different text." });
  }
}
