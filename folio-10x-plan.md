# Folio 10x Plan

Goal: take the folio hero from "clean and convincing" to "frontier craft" — the same singular idea (one sheet, one ink, one verb at a time), executed with material realism and one sacred signature moment. No new dependencies, no canvas/WebGL, static page.

Sourced from current UI alpha (July 2026): award-page analysis (restraint + 1–2 strong motion moments, live hero demos, Lighthouse 90+ as table stakes), editorial ink design languages (material evidence: grain, bleed, hand registration as structural cues), SVG ink-realism techniques (feTurbulence/feDisplacementMap wobble, blur+feComponentTransfer bleed, fractalNoise paper tooth), and compositor-native CSS motion (scroll-driven `animation-timeline`, transform/opacity only).

## Diagnosis: what separates current from 10x

1. The ink is geometrically perfect. Every stroke, underline, and caret is a clean vector — the single biggest "generic interactive graphic" tell left.
2. The press-to-source transformation is a crossfade. The marked line fades out; the underline fades in. The ink identity is implied, not witnessed traveling.
3. Writing has no cadence. Each sentence arrives as one uniform clip-path wipe; real writing is fast-slow-fast, word by word.
4. The annotations stack instead of flow. Gap, repair, and later appear as blocks; nothing is visibly *drawn from* the caret.
5. The hero's ink grammar stops at the hero. Downstream sections use a different visual language.

## Phase 1 — Material pass (ink becomes physical)

Biggest believability jump per unit of work. All native SVG filters, scoped to the hero only.

- **Hand wobble**: one reusable filter (`feTurbulence type="fractalNoise" baseFrequency≈0.035, numOctaves 3` → `feDisplacementMap scale 4–6`) applied to the abstract script, marked line, underlines, and caret. Kills vector perfection.
- **Paper tooth**: one very-low-opacity fractalNoise grain overlay on the sheet (`baseFrequency≈0.04, numOctaves 5`), plus the existing dog-ear. Grain as structural cue, not background wash.
- **Ink bleed on the proof ink**: subtle `blur(≈0.4px)` + `feComponentTransfer` discrete-threshold on `mark` phrases and margin notes so accent ink reads slightly wet/absorbed. Scoped small; measure paint cost.
- **Stroke taper**: pen-lift tapers on the marked line and underlines (overlapping stroke widths or short taper segments).
- **Imperfect registration**: a second offset hairline on the sheet border (pseudo-element, 2px offset) — printed-stock feel.

Gate: side-by-side screenshot vs current; the resting frame must read as "someone's page," not an illustration. Verify paint cost (no jank on mid-tier mobile), Lighthouse mobile ≥ 90.

## Phase 2 — Signature moment (the transformation is witnessed)

One sacred motion moment: the marked line *becomes* the underline.

- **Traveling ink**: on press, a single absolutely-positioned proof-ink stroke animates (transform only, FLIP-measured once) from the marked line's position to beneath the arriving source sentence, then hands off to the real underline. The viewer watches the ink move, not swap.
- **Writing cadence**: split each written sentence into 3–4 word-group spans with staggered clip-path wipes and ±0.3° per-group rotation — fast-slow-fast rhythm instead of one uniform wipe.
- **Caret strike**: the gap caret lands with a small overshoot spring (`cubic-bezier(.34,1.56,.64,1)`) — a pen strike, not a fade.
- **Drawn connections**: a thin proof-ink connector stroke draws from the caret down to the margin gap note (pathLength draw), and from the repair into the later line's inserted clause. Gap → repair → later becomes visibly *drawn*, not stacked.
- **Verb arrival**: the verb's underline draws itself (pathLength) as the label settles, replacing the plain fade.

Gate: 5-second test on a fresh viewer — "the next page came out of the source" without reading any copy. Reduced motion still reaches every state instantly.

## Phase 3 — Editorial detail pass

- **Mono folio labels**: move the micro-labels ("source open", "attempt 01 · exact") to a ui-monospace stack — the mono-label + serif-title contrast is the current editorial annotation grammar.
- **"illustrative" as a stamp**: slight rotation, uneven ink (noise mask), still quiet — honesty rendered in the material language.
- **Pen cursor**: custom ink-pen cursor over the pressable sheet (`cursor: url(...)`, SVG data URI) — the paper reads as directly manipulable.
- **Pointer-proximity ink**: strokes nearest the cursor deepen slightly in the resting state (earned, local, no perpetual motion).

## Phase 4 — Page coherence (the ink flows downstream)

- **One grammar everywhere**: section headings get the same drawn proof-ink underline on viewport entry via CSS scroll-driven animation (`animation-timeline: view()`, `animation-range: entry`), with the existing IntersectionObserver as the Firefox fallback.
- **Proof runway migration (optional, larger)**: move the scroll-scrubbed proof band from the JS scroll handler to `animation-timeline: scroll()` where supported — compositor-thread smoothness, less main-thread work.
- **Full-page audit**: Lighthouse mobile ≥ 90, zero horizontal overflow, contract checks extended (filters present, no canvas/WebGL, forbidden vocabularies).

## Constraints that hold through all phases

- One visual noun (the sheet), one ink identity, one verb at a time.
- Motion only transform/opacity/clip-path/stroke-dashoffset; everything honors `prefers-reduced-motion`; no-JS keeps the full written page.
- No packages, no runtime assets beyond inline SVG/CSS, no WebGL/canvas.
- Every phase ends with rendered-browser screenshot review at 1440×900, 390×844, 320×800 plus `node check-ink-recall.mjs`, lint, build.

## Order and expected payoff

| Phase | Effort | Payoff |
| --- | --- | --- |
| 1 Material | medium | largest — removes the "vector graphic" tell |
| 2 Signature moment | medium-high | the "magical" beat; makes causality witnessed |
| 3 Editorial detail | low | compounding credibility |
| 4 Page coherence | medium | carries the hero's promise through the page |

Recommended start: Phase 1 + the traveling-ink piece of Phase 2 in one pass, then re-run the fresh-context critic before continuing.
