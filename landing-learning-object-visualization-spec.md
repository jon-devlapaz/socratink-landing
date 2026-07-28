# Socratink landing visualization: The Serving Field

**Status:** Handoff specification, 28 July 2026

**Surface:** Landing-page hero

**Implementation status:** Not implemented

**Acceptance status:** Ready for a bounded prototype; rendered taste approval remains pending

## Objective

Make one hidden product capability visible:

> Socratink does not merely organize source material. It forms traceable learning objects, then serves the object that the learner's current goal, reconstruction evidence, and elapsed time make most useful now.

The visualization must preserve Socratink's evidence boundary. The AI can choose what to serve; only a learner's source-hidden reconstruction can become evidence of what survived.

## Five-second understanding

A visitor should be able to infer, without reading an explanation:

1. messy source material contains several learnable objects;
2. Socratink distinguishes among those objects;
3. one object is selected and brought forward now;
4. that object becomes something the learner must reconstruct.

One supporting sentence may make the selection logic explicit:

> Your source becomes many things you could learn. Socratink serves what your evidence calls for next.

Do not claim that the AI knows the learner's mind, guarantees the optimal lesson, or establishes mastery.

## Problem classification

This is an **EXTEND** problem. It adds a missing explanation of adaptive serving to the existing hero and Ink Recall demonstration.

Selected reasoning:

- **Separation of concerns:** source transformation, serving intelligence, and learner evidence must remain visibly distinct.
- **Backward compatibility:** the accepted paper-and-ink language, current hero promise, and existing Ink Recall sequence remain the foundation.

## Scope

### MUST

| Capability | Acceptance criterion |
| --- | --- |
| Show raw source becoming multiple learning objects | A first-time viewer can point to the raw material and at least two distinct candidate objects before anything is selected. |
| Show the AI serving one object rather than merely sorting all objects | Exactly one candidate becomes dominant and moves into the reading position; the others remain available but recede. |
| Make the decision causal and truthful | Activating **Why this page?** reveals a reason grounded in the illustrative goal, prior attempt, or elapsed time—not an unexplained score or mastery claim. |
| Connect the served object to learner action | The selected object expands into the existing Ink Recall source-open state; the next dominant action remains **Close source**. |
| Work without motion, hover, or fine pointer control | The complete meaning remains available with reduced motion, keyboard navigation, touch, and a static fallback. |
| Preserve the existing landing contract | The app URL, contact, privacy link, heading semantics, focus behavior, and evidence framing remain intact. |

### SHOULD

- Let the visitor reveal the selection reason without leaving the hero.
- Provide a quiet replay control after the transition settles.
- Reuse the existing illustrative verifier example so the serving reason and reconstruction gap agree.
- Preserve the current hero headline and primary app CTA during the prototype slice.

### WON'T — this version

- Accept or analyze real visitor content.
- Call a model, API, personalization service, or backend.
- Simulate a full learner profile or calculate a real optimal sequence.
- Add a new page section, dashboard, graph, chat interface, avatar, particle system, 3D scene, or ambient animation loop.
- Replace the existing source-hidden reconstruction demonstration.
- Add a runtime animation dependency, canvas engine, or video asset.
- Redesign the rest of the landing page.

**The cut line:** this version is done when one deterministic, clearly labeled illustrative sequence makes `raw source → candidate learning objects → one evidence-grounded object served now → source-hidden reconstruction` understandable and operable in the existing hero.

## Product truth

The visualization may communicate that Socratink:

- identifies reconstructable capabilities and relationships in source material;
- keeps each learning object traceable to its source;
- considers the learner's stated goal;
- considers exact source-hidden attempts;
- considers elapsed time and prior encounters;
- selects a next object and learning move;
- can explain the basis of that selection.

It must not communicate that:

- reading, AI output, completion, confidence, or time spent proves understanding;
- a generated learning object is learner evidence;
- a single ranking is objectively optimal;
- the AI has inferred private traits or inaccessible mental state;
- the illustrated selection is happening live on the landing page.

The demonstration is always labeled **Illustrative**.

### Product capability gate

Before this appears on the public landing page, the product owner must confirm that the alpha can—or is explicitly being presented as a preview of a committed capability that will—form source-linked learning objects and use goal, reconstruction evidence, or elapsed time to choose what to serve.

If that is not true, keep the visualization as an internal prototype. Do not solve the mismatch with softer animation, vague copy, or an **Illustrative** label.

## Experience thesis

For a working professional deciding whether an AI learning tool can guide difficult technical study, the hero should feel **quietly intelligent** and **causally magical** because the value is not content organization but choosing the right reconstruction at the right moment, and it should make the relationship between source, learner evidence, and the served page dominant.

Observable consequences:

- **Quietly intelligent:** intelligence is expressed through selective behavior, not an AI character, glowing core, explanatory dashboard, or visible scoring machinery.
- **Causally magical:** every movement has a traceable cause. Ink drawn from the source forms candidates; evidence threads tighten around one candidate; that candidate becomes the page.
- **Dominant relationship:** one continuous ink thread visibly survives the entire transformation from source fragment to served page.
- **Learner agency:** the animation resolves into a learner action. The AI's choice never becomes the final state.

## Chosen direction: The Serving Field

The existing Ink Recall paper becomes the destination of a compact transformation staged inside the current hero.

```text
RAW SOURCE                  SERVING FIELD                    SERVED PAGE

loose ink strokes     →     several paper objects     →     one object opens
                              ↑       ↑       ↑                into Ink Recall
                            goal   evidence   time
```

The three zones form one continuous composition, not three labeled boxes.

### Visual signature

A single hand-drawn ink line begins inside the raw source, touches several candidate objects, then tightens around one object and draws it forward. When the object opens, that same line becomes the underline or margin rule of the existing work capability.

This is the project-specific signal. The line is not decorative: it carries source provenance, the serving decision, and the transition into reconstruction.

### What the AI looks like

Nothing.

There is no AI orb, brain, sparkle, avatar, cursor, portal, or central machine. The intelligence is legible only through what the field does:

- it preserves source relationships;
- it forms meaningful candidates;
- it lets several candidates remain possible;
- it chooses one;
- it can reveal why;
- it yields the page to the learner.

### Composition

#### Raw source

- Irregular blue-black ink strokes with varied density.
- Fragments suggest clauses, diagrams, and relationships without becoming readable paragraphs.
- The source remains visibly paper-bound; avoid a generic cloud of particles.
- One or two strokes continue into the serving field.

#### Candidate learning objects

- Four or five imperfect paper loops or slips formed from the source strokes.
- Each has a distinct internal mark: relationship, sequence, exception, or application.
- Candidates overlap slightly but remain individually countable.
- They are not cards in a grid and do not display titles before selection.

#### Serving decision

- Thin provenance threads connect source fragments to candidates.
- Three subtle evidence knots influence the field: goal, prior reconstruction, and elapsed time.
- These signals may receive short labels only when focused or when **Why this page?** is open.
- One candidate gains a complete ink boundary; the others lose contrast and settle backward.

#### Served page

- The selected object moves into the reading position and unfolds into the existing Ink Recall paper.
- Text appears only after the object has become a page.
- The page displays the existing work capability:

  > Explain how verification keeps an AI agent from acting on a bad tool result.

- The next dominant action is the existing **Close source** control.

## Rejected direction: The Knowledge Conveyor

An alternative would show messy information entering a funnel and emerging as a tidy row of learning-object cards.

Reject it because:

- immediately, it reads as summarization, extraction, or document processing;
- next, equal cards imply organization rather than an adaptive decision;
- eventually, the interface becomes a generic AI productivity diagram and shifts attention from reconstruction evidence to generated output.

Also reject the knee-jerk opposite: a freeform ink playground whose strokes react to the pointer but do not explain a product decision. It creates spectacle without product proof and introduces hover, motion, accessibility, and performance costs.

## Interaction choreography

The still composition must already communicate the full left-to-right relationship. Motion deepens understanding; it does not contain essential meaning.

| State | Visitor sees | Visitor can do | Feedback | Recovery |
| --- | --- | --- | --- | --- |
| `rest` | Raw ink, several faint candidates, and one quiet empty reading position | Activate **Serve what matters now** | The continuous provenance line becomes slightly darker | Continue scrolling; the static composition remains understandable |
| `forming` | Source strokes gather into four or five candidate objects | Wait; **Serve what matters now** temporarily reads **Serving…** and is disabled | Candidate boundaries complete from source-linked strokes | Reduced motion skips directly to `served` |
| `weighing` | Goal, evidence, and time subtly pull on different candidates | Wait | One candidate holds while the others release | If interrupted, settle deterministically on the selected candidate |
| `served` | One object opens into the existing work-capability page | Activate **Why this page?** or continue with **Close source** | Live status announces which object was served; the original action becomes **Replay** | **Replay** returns to `rest`; **Close source** continues the current demo |
| `reason-open` | The selected object remains fixed; three causal threads and one sentence become legible | Close the reason or continue with **Close source** | Reason text receives focus without moving the page | Closing returns focus to **Why this page?** |
| `ink-recall` | Existing source-open Ink Recall state | Close source, reveal attempt, compare, repair, revisit | Existing status and focus behavior | Existing reopen and reset controls |
| `static-fallback` | Final served composition and reason sentence | Continue with **Close source** | No animation-dependent feedback | No JavaScript is required to understand the claim |

### Trigger

- The still state does not autoplay or react to scrolling.
- One native button labeled **Serve what matters now** starts the sequence.
- Click, tap, Enter, and Space run the same deterministic sequence.
- Do not restart on pointer movement.
- Do not loop.
- Do not pin the hero or map animation progress to scroll distance.
- Once settled, motion stops completely.

### Timing

For motion-enabled visitors:

1. source strokes gather: `360–480ms`;
2. candidate boundaries complete: `260–360ms`;
3. the selected boundary tightens: `220–300ms`;
4. the selected object opens into the page: `360–480ms`.

Total active choreography should remain under `1.4s`.

Use one easing family, favoring a restrained ease-out. Avoid springs, overshoot, elastic movement, simulated fluid, and perpetual drift.

### Selection reason

The reason is progressive disclosure, not a permanent annotation layer.

Control:

> Why this page?

Illustrative reason:

> Your last explanation kept the tool action but lost the verifier's check. Rebuild that connection next.

Signal labels revealed with it:

- `Goal`
- `What survived`
- `Time to revisit`

The reason must be visually attached to the selected object, not displayed as a tooltip floating elsewhere.

## Copy budget

The visual carries most of the message. Inside the visualization, use only:

- `Illustrative`
- `Serve what matters now`
- `Serving…`
- `Replay`
- `Served now`
- the work capability;
- `Why this page?`
- the one-sentence reason;
- existing Ink Recall controls and status.

Do not add stage titles such as “AI processing,” percentages, rankings, confidence meters, object counts, explanatory legends, or feature bullets.

## Visual grammar

Preserve the current system:

- warm paper field;
- carbon and graphite text;
- one proof-ink accent;
- Instrument Serif for learner/source language;
- Manrope for controls and metadata;
- square, paper-like edges;
- hairline rules;
- generous blank paper.

Add no new accent color.

Hierarchy:

1. selected learning object / served page;
2. continuous provenance line;
3. raw source and remaining candidates;
4. optional reason;
5. metadata.

The selected object must remain identifiable without color through position, complete boundary, scale, and the continuous source line.

## Responsive behavior

### Wide: 1440 × 900

- Retain the existing two-column hero.
- The Serving Field occupies the current Ink Recall footprint.
- Raw source begins on the left third of the field; candidates occupy the middle; the served page opens toward the right.
- The primary app CTA remains visible and does not compete with an in-field CTA.

### Narrow: 390 × 844

- The field becomes a vertical sequence: raw source at top, candidates in the middle, served page below.
- The continuous ink line bends downward rather than being replaced by arrows.
- The selected object and its primary action must both fit in one viewport after the transition settles.
- **Why this page?** follows the selected object in document order.
- No essential interaction depends on hover.

### Minimum: 320 × 800

- Use three candidates rather than five if needed for legibility.
- Preserve the same selected candidate and reason.
- Do not shrink controls below a 44px target.
- No horizontal overflow, clipped ink, overlapping labels, or off-screen focus.

### Long content

If a capability wraps to three lines, the page grows vertically. The source and evidence line remain anchored; text must not overlap the reason or controls.

## Accessibility and operability

- Wrap the experience in a named region.
- The visual SVG is `aria-hidden`; equivalent meaning exists in semantic DOM.
- **Serve what matters now** is a native button adjacent to the figure—not a clickable `div`.
- Keep the selected capability as real text.
- Announce state changes in one polite live region:
  - “Five source-linked learning objects formed.”
  - “Served now: explain how verification prevents action on a bad tool result.”
- Keyboard order:
  1. **Serve what matters now** / **Replay**;
  2. **Why this page?**;
  3. **Close source**;
  4. existing Ink Recall controls.
- Enter and Space activate the same transitions as tap.
- Focus never moves to hidden content.
- Opening the reason moves focus to its heading or first sentence; closing it returns focus to the trigger.
- Escape closes the reason if open.
- Selection is not conveyed by color alone.
- Decorative ink strokes do not enter the accessibility tree.

### Reduced motion

When `prefers-reduced-motion: reduce` is active:

- render the final served composition immediately;
- do not draw paths, move candidates, unfold paper, auto-scroll, or animate opacity over time;
- retain **Why this page?**, **Close source**, and the complete semantic explanation;
- change state synchronously after activation.

## Static implementation boundary

The prototype should use:

- existing `index.html`, tokens, typography, and Ink Recall markup;
- semantic HTML for copy, controls, and served content;
- one inline SVG for provenance paths and abstract source marks;
- CSS transforms, masks, stroke reveal, and state selectors;
- a small deterministic JavaScript state machine.

Do not use:

- runtime AI;
- canvas;
- WebGL;
- new packages;
- remote images, video, or animation files;
- randomized physics;
- pointer-following effects.

Progressive enhancement:

- the no-JavaScript state is `served`, not an empty or broken field;
- the reason sentence is present in the DOM;
- static content preserves the source-to-object-to-page relationship.

Performance budget:

- zero new network requests;
- zero new dependencies;
- no continuous animation frame loop;
- stop all work once the sequence settles.

## Visualization domain model

These are product concepts, not database tables.

### Entities and invariants

- **Source fragment:** a bounded part of source material; it always retains a source reference.
- **Learning object:** one reconstructable capability, relationship, procedure, application, or edge; it always references at least one source fragment.
- **Learner evidence:** an exact learner-authored, source-hidden attempt; AI text, reading, clicks, and completion can never become learner evidence.
- **Serving signal:** goal, learner evidence, elapsed time, or source dependency used to compare candidates; it always names its origin.
- **Serving decision:** one selected learning object plus a reason; it always distinguishes estimate from proof.
- **Served page:** the learner-facing reconstruction opportunity created from one serving decision; it always leads to a learner action.

### Relationships and ownership

- A source owns `1:N` source fragments.
- A learning object references `1:N` source fragments; it does not own or rewrite them.
- A learner session owns `0:N` learner-evidence records.
- A serving decision references `1:N` candidate learning objects and selects exactly one.
- A serving decision references `1:N` serving signals and owns its displayed reason.
- A served page belongs to exactly one serving decision and references exactly one selected learning object.

The selected object is a recommendation, not an irreversible lock. Unselected candidates remain present in the visual field.

### Forbidden states

- A learning object without a source reference.
- A serving decision with zero or multiple selected objects.
- A serving reason that cites a signal the demonstration does not possess.
- AI-generated text displayed as learner evidence.
- Reading or completion displayed as mastery.
- A served page with no learner action.
- A visual change to Attempt 01 after comparison or repair.

For the landing prototype, these are enforced by deterministic content and state transitions. A production serving system would require separate runtime and persistence guards.

## Illustrative scenario

Use the existing verifier example end to end.

### Source

> A verifier checks the tool result before the agent continues.

### Candidate learning objects

Visually imply several possible objects:

1. the agent chooses a tool;
2. the tool produces a result;
3. the verifier checks the result;
4. the agent continues only after verification;
5. verification protects the downstream action.

### Serving inputs

- **Goal:** explain why verification makes an AI agent safer at work.
- **What survived:** the learner previously recalled tool use and continuation.
- **Gap:** the verifier's check was missing.
- **Time:** the connection is ready to reconstruct again.

### Served object

> Explain how verification keeps an AI agent from acting on a bad tool result.

### Why this page

> Your last explanation kept the tool action but lost the verifier's check. Rebuild that connection next.

The served object then opens into the current Ink Recall source-open state.

## Rendered acceptance

The prototype is not accepted from source inspection alone.

### Message

- In a five-second test, at least four of five representative viewers describe the sequence as “source becomes several learnable things and the AI chooses what to practice next,” or an equivalent reconstruction.
- No viewer describes the output primarily as a summary, note organizer, mind map, or course.
- After opening the reason, viewers can identify at least one concrete basis for the choice.

### Product truth

- The served reason matches the illustrated attempt gap.
- The selected learning object remains source-linked.
- The learner still closes the source and attempts before help appears.
- No reading, AI output, completion, or confidence is presented as mastery evidence.
- The demo is visibly labeled **Illustrative**.
- The product capability gate has an explicit owner sign-off before publication.

### Interaction

- The complete path works with pointer, touch, and keyboard:
  `rest → forming → weighing → served → reason-open → Ink Recall`.
- Every state has visible feedback and a recovery path.
- The sequence never loops.
- Focus remains visible and lands only on visible native controls.
- The static fallback communicates the same proposition.

### Visual

- Exactly one learning object is dominant after serving.
- The continuous provenance line remains traceable from raw source to served page.
- No avatar, orb, glow, particles, dashboard, card grid, or generic funnel appears.
- Once the state settles, all motion stops.
- The selected page is more prominent than the AI's selection machinery.

### Responsive and accessibility

- Inspect at `1440×900`, `390×844` with touch, and `320×800`.
- No horizontal overflow, clipped source line, overlapping copy, or off-screen focused control.
- Test `prefers-reduced-motion: reduce`.
- Verify logical headings, accessible names, live status, contrast, and source-hidden semantics.

### Runtime

- `npm run lint`
- `npm run build`
- `git diff --check`
- no console errors;
- zero new dependencies and network requests;
- app, contact, and privacy links remain correct.

## Taste gate before promotion

The specification provides design rationale but cannot supply rendered evidence. The implementation must pass:

- **Intentionality:** every major mark and transition supports source, selection, reason, or learner action.
- **Coherence:** current paper, type, ink, spacing, and motion rules remain one system.
- **Specificity:** the continuous provenance line and evidence-grounded serving reason cannot be replaced by generic AI decoration.
- **Reflex rejection:** reject both the AI dashboard/funnel and the decorative ink playground.
- **Restraint:** remove any motion or mark that does not clarify cause.
- **Fitness:** wide, narrow, keyboard, touch, long copy, contrast, semantics, focus, and reduced motion have no blocker.
- **Learner agency:** the sequence resolves into **Close source**, not an AI answer.
- **System coherence:** every illustrated state maps to a stated Socratink capability and evidence class.

Until rendered evidence exists, the direction is **ready to prototype but blocked from visual acceptance**.

## Smallest implementation slice

For the main implementation chat:

1. Preserve the current hero copy and current Ink Recall flow.
2. Add the Serving Field only inside the existing Ink Recall footprint.
3. Implement `rest`, `served`, and `reason-open` first.
4. Use the final served composition as the no-JavaScript and reduced-motion state.
5. Connect the served page to the existing source-open Ink Recall state.
6. Prove the complete interaction at wide, narrow, keyboard, touch, and reduced motion.
7. Stop for the human taste judgment before adding intermediate choreography.

Intermediate `forming` and `weighing` states are SHOULD-level polish. Add them only if the three-state slice communicates the proposition and the motion clarifies causality.

## Human taste question

After the first rendered slice, ask:

> Does the ink appear to discover and serve the page your evidence calls for—or does it still look like information being sorted?

Do not promote the visualization until the first reading is “served for me,” not merely “organized for me.”
