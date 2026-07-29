import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
const heroStart = html.indexOf('<div class="folio ink-bridge"');
const heroEnd = html.indexOf("</section>", heroStart);

assert.ok(heroStart > -1 && heroEnd > heroStart, "the Ink Bridge hero must exist");
const hero = html.slice(heroStart, heroEnd);

// One static proof object: exact attempts first, enhancement second.
assert.equal((html.match(/\bdata-folio(?:\s|=|>)/g) ?? []).length, 1, "one folio region must exist");
assert.match(hero, /data-bridge-state="aligned"/, "the no-JavaScript state must show the aligned proof");
assert.match(hero, /<button class="ink-bridge__control"[^>]*data-ink-bridge-control[^>]*type="button"[^>]*hidden[^>]*aria-pressed="true"/, "the enhanced proof must use one native button");
assert.match(hero, /data-ink-bridge-live[^>]*aria-live="polite"[^>]*aria-atomic="true"/);
assert.equal((html.match(/aria-live="polite"/g) ?? []).length, 1, "the experience must use one polite live region");
assert.match(html, /\.js \.folio:not\(\[data-folio-ready\]\) \{ visibility: hidden; \}/, "the folio must stay stable until the script takes over");
assert.match(html, /\.ink-bridge__control \{[\s\S]*?min-height: 44px;/, "the proof control must keep a 44px interaction target");

for (const hook of [
  "data-ink-bridge-first",
  "data-ink-bridge-gap",
  "data-ink-bridge-later",
  "data-ink-bridge-gain",
  "data-ink-bridge-thread",
]) {
  assert.equal((hero.match(new RegExp(`\\b${hook}(?:\\s|=|>)`, "g")) ?? []).length, 1, `${hook} must occur exactly once`);
}

assert.match(hero, /attempt 01 · source closed/);
assert.match(hero, /A follower calls an election[\s\S]*?and votes for itself\./, "the first attempt must remain exact");
assert.match(hero, /attempt 02 · later, without help/);
assert.match(hero, /After an election timeout passes without a heartbeat,[\s\S]*?the follower becomes a candidate, votes for itself, and asks peers for votes\./, "the later attempt must remain exact");
assert.match(hero, /what triggers it\?/, "the first attempt must expose the missing causal connection");
assert.match(hero, /one connection · rebuilt later/, "the bridge must name the proof, not the workflow");
assert.match(hero, /illustrative/, "the proof must admit that its trace is illustrative");
assert.doesNotMatch(hero, /data-folio-(?:source|capability|attempt|caret|gap|repair|later|travel|press|verb)/, "the full product loop must stay out of the hero");
assert.doesNotMatch(html, /const stageOrder = /, "the hero must not hide its proof behind a staged tour");
assert.doesNotMatch(html, /scrollIntoView/, "activation must not move the scroll position");

// Material pass: paper, two ink registrations, no heavyweight runtime.
assert.match(hero, /<filter id="ink-wobble"[\s\S]*?feTurbulence[\s\S]*?feDisplacementMap/, "hand wobble filter must exist");
assert.match(hero, /<filter id="ink-bleed"[\s\S]*?feComponentTransfer/, "ink bleed threshold filter must exist");
assert.equal((hero.match(/class="ink-bridge__thread-path/g) ?? []).length, 2, "separated and aligned ink paths must exist");
assert.doesNotMatch(hero, /<circle\b/, "no node or aperture imagery");
assert.doesNotMatch(html, /<canvas\b|webgl|three\.js|motion\//i, "native HTML and CSS are enough for this proof");

// Progressive enhancement and motion boundaries.
assert.match(html, /function setBridgeState\(aligned, announce\)/);
assert.match(html, /control\.addEventListener\("click", toggleBridge\)/);
assert.match(html, /control\.setAttribute\("aria-pressed", String\(aligned\)\)/);
assert.match(html, /window\.matchMedia\("\(prefers-reduced-motion: reduce\)"\)/);
assert.match(html, /@media \(prefers-reduced-motion: reduce\)/);
assert.doesNotMatch(html, /transition:\s*all\b/, "motion properties must stay explicit");

// Page-level invariants.
assert.match(html, /<h1 class="sr-only">socratink<\/h1>/);
assert.match(html, /href="https:\/\/app\.socratink\.ai\/"/);
assert.match(html, /href="mailto:jon@socratink\.ai"/);
assert.match(html, /href="\/privacy\.html"/);
assert.match(html, />Open Socratink with a source<\/a>/);
assert.match(html, /@media \(max-width: 520px\)[\s\S]*?\.hero-secondary\s*\{\s*display:\s*none;/);

const classicScripts = [...html.matchAll(/<script(?![^>]*\bsrc=)(?![^>]*\btype="module")[^>]*>([\s\S]*?)<\/script>/g)];
assert.ok(classicScripts.length > 0, "index.html must contain a classic inline script");

for (const [, source] of classicScripts) new Function(source);

console.log("Ink Bridge contract passed.");
