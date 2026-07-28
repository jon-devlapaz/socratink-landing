import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const html = await readFile(new URL("./index.html", import.meta.url), "utf8");

// The folio: one sheet of paper where source ink becomes the next reconstruction page.
const folioRegions = html.match(/\bdata-folio(?:\s|=|>)/g) ?? [];
assert.equal(folioRegions.length, 1, "one folio region must exist");
assert.match(html, /data-folio[^>]*data-stage="later"/, "the no-JavaScript state must be the fully written page, ending at the later attempt");
assert.match(html, /<button class="folio__press"[^>]*data-folio-press[^>]*type="button"[^>]*hidden/, "the abstract paper surface must be a native button, hidden without JavaScript");
assert.match(html, /data-folio-press[^>]*>\s*<span class="sr-only">Open the illustrative source page<\/span>/, "the paper button must carry an accessible name");
assert.match(html, /<svg class="folio__art"[^>]*aria-hidden="true"/, "the abstract ink art must stay out of the accessibility tree");
assert.match(html, /<button class="folio__verb"[^>]*data-folio-verb[^>]*type="button"/, "the single written verb must be a native button");
assert.match(html, /data-folio-live[^>]*aria-live="polite"[^>]*aria-atomic="true"/);
assert.equal((html.match(/aria-live="polite"/g) ?? []).length, 1, "the experience must use one polite live region");
assert.match(html, /\.js \.folio:not\(\[data-folio-ready\]\) \{ visibility: hidden; \}/, "the folio must stay stable until the script takes over");
assert.match(html, /min-height: 44px;[\s\S]*?\.folio__verb|\.folio__verb \{[\s\S]*?min-height: 44px;/, "the verb must keep a 44px interaction target");

// Rejected vocabularies must not return.
assert.doesNotMatch(html, /data-serving-/, "no Serving Field hooks");
assert.doesNotMatch(html, /Serve what matters now|Why this page\?|>Replay</, "no Serve, Why, or Replay interface");
assert.doesNotMatch(html, /<circle\b/, "no circle or node imagery in the hero art");
assert.doesNotMatch(html, /data-ink-recall|ink-button|ink-cover|Reveal Attempt/, "no banded Ink Recall widget chrome");
assert.doesNotMatch(html, /scrollIntoView/, "activation must not move the scroll position");

// The product loop must stay on the page, in order.
const loopHooks = [
  "data-folio-source",
  "data-folio-capability",
  "data-folio-attempt",
  "data-folio-caret",
  "data-folio-gap",
  "data-folio-repair",
  "data-folio-later",
];

let lastIndex = -1;
for (const hook of loopHooks) {
  const boundary = new RegExp(`\\b${hook}(?:\\s|=|>)`, "g");
  const hits = html.match(boundary) ?? [];
  assert.equal(hits.length, 1, `${hook} must occur exactly once in markup`);
  const index = html.search(new RegExp(`\\b${hook}(?:\\s|=|>)`));
  assert.ok(index > lastIndex, `${hook} must appear after the previous loop moment`);
  lastIndex = index;
}

// The demo practices one concrete study note, not slogans and not AI marketing.
assert.match(html, /calls an election<\/span> <mark[^>]*>when heartbeats stop<\/mark> <span[^>]*>and votes for itself\./, "the source sentence must keep its marked trigger phrase");
assert.match(html, /Explain when a Raft follower<\/span>[\s\S]*?calls an election\./, "the served capability must stay source-linked");
assert.match(html, /A follower calls an election<\/span><span class="folio__caret"/, "the gap caret must sit inside the unchanged attempt sentence");
assert.match(html, /Missing: the stopped heartbeats\./, "the gap must name the exact missing content");
assert.equal((html.match(/<mark[^>]*>when heartbeats stop<\/mark>/g) ?? []).length, 2, "the marked phrase must appear in the source and rebuilt in the later attempt");
assert.doesNotMatch(html, /step \d · /, "no numbered step narration on the card");
const folioBody = html.slice(html.indexOf("data-folio-source"), html.indexOf("data-folio-note"));
assert.doesNotMatch(folioBody, /Close the source|Explain it|what survives/, "the written page must not echo the headline promise");
assert.match(html, /context, not proof/, "the repair must stay labeled as context, not proof");
assert.match(html, /illustrative/, "the page must admit the trace is illustrative");
assert.match(html, /const stageOrder = \["ink", "source", "prompt", "attempt", "gap", "repair", "later"\];/, "the script must walk the full loop in order");

// Material pass: ink and paper are physical, without heavyweight runtimes.
assert.match(html, /<filter id="ink-wobble"[\s\S]*?feTurbulence[\s\S]*?feDisplacementMap/, "hand wobble filter must exist");
assert.match(html, /<filter id="ink-bleed"[\s\S]*?feComponentTransfer/, "ink bleed threshold filter must exist");
assert.match(html, /data-folio-travel/, "the traveling ink element must exist");
assert.doesNotMatch(html, /<canvas\b|webgl|three\.js/i, "no canvas or WebGL runtimes");

// Page-level invariants.
assert.match(html, /<h1 class="sr-only">socratink<\/h1>/);
assert.match(html, /href="https:\/\/app\.socratink\.ai\/"/);
assert.match(html, /href="mailto:jon@socratink\.ai"/);
assert.match(html, /href="\/privacy\.html"/);
assert.match(html, /@media \(prefers-reduced-motion: reduce\)/);
assert.match(html, />Open Socratink with a source<\/a>/);
assert.match(html, /@media \(max-width: 520px\)[\s\S]*?\.hero-secondary\s*\{\s*display:\s*none;/);

const classicScripts = [...html.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*\btype="module")[^>]*>([\s\S]*?)<\/script>/g)];
assert.ok(classicScripts.length > 0, "index.html must contain a classic inline script");

for (const [, source] of classicScripts) {
  new Function(source);
}

console.log("Folio source contract passed.");
