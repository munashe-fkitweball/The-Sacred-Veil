# Phase 1: Foundations & Visual Direction — Context

**Gathered:** 2026-04-30
**Status:** Ready for planning

<domain>
## Phase Boundary

Phase 1 delivers two things: (1) a **locked visual register** for the atlas, chosen from a sketch round of 5+ visually-distinct SVG variants of a single test fragment, with iteration allowed before lock-in; and (2) the **plumbing pass** that follows the lock — `kingdom/atlas.html` exists as a standalone-cinematic shell, is registered in `page_configs.js`, is reachable from `kingdom/index.html` and `kingdom/geography.html`, and the 6 atlas-relevant orphan `[[id:Label]]` references are repaired so the future atlas's links don't ship broken.

The plumbing only happens **after** the sketch winner is locked. Phase 2 (Lore-Faithful Geography Spec) and Phase 3 (Build the static atlas) remain unchanged.

Requirements covered: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, FOUND-06.

</domain>

<decisions>
## Implementation Decisions

### Sketch round design
- **D-01:** Run **at least 5 sketch variants**, not 3-4 (FOUND-05 originally said 3-4 — this is a deliberate spec adjustment, not a roadmap renegotiation; the count is non-binding, the principle is "show enough variants to narrow down the vibes").
- **D-02:** All variants are **visually distinct registers** — different visual worlds set against each other (e.g. GM-planning-room/schematic, illuminated-manuscript, hand-drawn pen-and-ink, brutalist-typographic, etc.), not close-cousin variations on a single hypothesis. The leading-hypothesis register from PROJECT.md ("schematic / GM planning-room with typographic primitives") is one of the 5; the others stress-test it from genuinely different directions.
- **D-03:** **Iteration is expected**, not exceptional. The first batch of 5 may not be the final pick — additional rounds with refinements or new directions are first-class expected behavior, not failure. Sketch round ends when the user is satisfied, not when a fixed number of variants have been produced.
- **D-04:** All variants render the **same test fragment** (apples-to-apples comparison). The fragment is **Ash-Kadesh + its 3 districts (Crown-Shelf high / Ledger-Ward middle / The Mourn low) + the purple-star capital marker + a road heading south + the foothill edge of the Eastern Massif.** Most lore-saturated diagnostic fragment available.
- **D-05:** All variants are **static images** (frozen views). No pan/zoom, no hover interaction, no motion. Evaluation is purely on the still image. Motion behavior is a Phase 4 concern; testing it during sketch round would slow per-variant production and isn't necessary to pick a register.
- **D-06:** **No HTML page-shell work happens during the sketch round.** Sketches are SVG art, evaluated as art. The page-shell + nav wiring + entry-point links + orphan repairs all happen in a strictly-sequenced second pass *after* the visual register is locked.

### Sketch evaluation rubric (default — user can override at sketch-review time)
- **D-07:** Variants are judged on:
  1. **Craft surprise** — does it earn the *"all of this is just SVG?"* reaction?
  2. **Lore-tone fit** — does it carry the *"Catching a Falling Knife"* dread + craft + succession-crisis weight?
  3. **Visual-primitives discipline** — primitives only (dots, glyphs, dashed lines, simple stroke shapes); no faked smoke/blur/gradient/raster textures. This isn't a constraint, it's the aesthetic.
  4. **Cohesion with Sacred Veil's existing visual language** — palette `#030106` / golds / occasional violet, fonts Cinzel + Cormorant Garamond + UnifrakturCook + (optional addition) a fixed-width annotation font. Atlas may EXTEND this language but never CONTRADICTS it.
  5. **Implied band-survivability** — does the label and marker vocabulary look like it would survive 3 LOD bands without falling apart? (Judged by feel since static snippet doesn't show all bands.)

### Plumbing pass (post-sketch-lock)
- **D-08:** `kingdom/atlas.html` follows the **standalone-cinematic shape from `party/index.html`** — inline `<style>`, inline `<script>`, no `app.js` load, no `style.css` load, no `data*.js` / `tooltips.js` / `page_configs.js` runtime dependence. The page is its own artifact.
- **D-09:** When visited during Phase 1, `kingdom/atlas.html` shows the **chosen sketch's snippet inside the locked-in standalone shell** (the Ash-Kadesh slice on the locked black background, with locked fonts, with the chosen visual register applied), plus a small return-to-Kingdom anchor in a corner. Phase 3 then replaces the embedded snippet with the full atlas.
- **D-10:** **Cache-busting:** the standalone page does not load shared scripts/stylesheets; cache-bust query strings are irrelevant to it. Any future shared-script reference (none currently planned for Phase 1) sticks at `?v=25`. The site-wide bump to `?v=26` is owned by Phase 5 (POLISH-03).
- **D-11:** The `SV_PAGES` entry for `kingdom/atlas` is added to `page_configs.js` with `hub: 'kingdom'`, `parent: 'kingdom'`, `standalone: true` (documentation-only flag, per `app.js` not consuming it), and minimum required fields (`href`, `title`, `subtitle`). The entry exists so future readers/search/breadcrumbs can find the atlas, but the page itself doesn't depend on it at runtime.
- **D-12:** Entry-point links: a `cta-link` block in `kingdom/index.html`'s overview content (data_sections_3.js) plus a "View the atlas →" inline link inside `kingdom/geography.html`'s intro section. **No children-grid card on `kingdom/index.html` in Phase 1** — that upgrade is owned by Phase 5 (POLISH-04). Adding it now would step on POLISH-04's deliverable.

### Orphan repair strategy
- **D-13:** **Lift verbatim from existing canon if it's there; never embellish or invent.** Per the project-wide content rule (see user memory `feedback_lift_dont_embellish.md`, refined during this discussion 2026-04-30): if existing lore (in `data_sections_*.js`, `tooltips.js`, or anywhere in the Sacred-Veil repo) already describes an orphan with material prose, lifting that exact text into a section entry is allowed and preferred. If the orphan is only namedropped without description, fall back to alias indirection — do NOT write new prose to fill the gap, even one sentence. Per-orphan decision based on what canon actually supports.
- **D-14:** **Two-mechanism repair:**

  **Mechanism A — verbatim section entry** (when existing canon describes the orphan):
  - Researcher audits each orphan against the data files and tooltips.js for verbatim source material.
  - If material prose exists, planner creates a real section in the appropriate `data_sections_*.js` file: `id` matches the orphan; `title` and `subtitle` lifted from existing references; `blocks` are exactly the lifted prose with a `// lifted verbatim from <source>` comment. No new sentences. No transitions or smoothing.
  - The new section is added to its parent place's page in `page_configs.js` (e.g. silveldt → kingdom/places sections list, since Gath-Mere lives there).

  **Mechanism B — alias indirection** (when canon only namedrops):
  - The orphan id is removed as a standalone entity in `data.js`; its display name is added as an `aliases` entry on the existing parent place's entity.
  - Auto-link (`app.js:55-110`) sorts aliases longest-first and routes prose mentions to the parent's anchor.
  - `[[id:Label]]` references in the data files are rewritten from `[[silveldt:Silveldt]]` form to `[[gath-mere:Silveldt]]` form — display text preserved, anchor retargeted.

  **Per-orphan choice is made by researcher's lore audit, not pre-decided here.** Both mechanisms involve zero new prose; A is preferred when canon supports it because the resulting section feels more first-class than a redirect.

- **D-15:** **Per-orphan parent assignments** (used by either mechanism):
  | Orphan id | Parent (for Mechanism A's section grouping or Mechanism B's alias target) | Lore basis |
  |-----------|------------|------------|
  | `silveldt` | `gath-mere` | Olenna Kaelen's manor, a Gath-Mere-region holding |
  | `the-drift` | `bet-seraphim` | The pilgrim/refiner town surrounding Bet-Seraphim's abbey |
  | `the-rot` | `grendels-reach` | Grendel's algae-slicked tower keep, in Grendel's Reach |
  | `third-furnace` | `har-moloch` | Lesser holding inside Har-Moloch |
  | `tide-reach-wharf` | `gath-mere` | The shore strip at Gath-Mere |
  | `anvilhold` | `har-moloch` | Lesser holding inside Har-Moloch |

  *Researcher must (a) verify each parent-section id exists in the data files; (b) for each orphan, audit the data files and tooltips.js for verbatim material describing it; (c) classify each orphan as Mechanism A or Mechanism B before planner writes tasks. The audit is the gate, not a rubber-stamp — if researcher is uncertain whether something counts as "material description" vs "namedrop," surface to user.*

### Discoverability (locked default)
- **D-16:** `kingdom/geography.html` link: a one-line "View the atlas →" inside the geography intro section, styled per the existing pattern. `kingdom/index.html` link: a `cta-link` block at the bottom of the kingdom-overview section in `data_sections_3.js`. Neither pre-empts Phase 5's hub-grid card upgrade (POLISH-04).

### Claude's discretion
- **The exact set of 5+ register directions** for the sketch round. Researcher should propose the 5 candidate registers with brief rationale per register (what visual tradition each draws from, why it's worth comparing). User reviews the proposed register list before sketches are drawn — this is a small additional checkpoint, not a full discuss-phase loop.
- **The proportions and focal point of the test-fragment snippet** — the fragment scope is locked (Ash-Kadesh + districts + capital marker + road south + Eastern Massif foothill), but the exact viewport ratio, label density, and how much of the road / how much of the Massif edge to show within each variant is up to the executor as long as all 5 stay consistent.
- **The exact wording of the "View the atlas →" link copy** in geography.html and the cta-link block on the kingdom hub.
- **Page subtitle / OG meta** for the `kingdom/atlas.html` SV_PAGES entry — Claude can draft, user reviews on commit.

</decisions>

<specifics>
## Specific Ideas

- **Leading-hypothesis register** (must be one of the 5): "schematic / GM planning-room with typographic primitives" — the polished GM back-room cork-board direction. Free to be killed if a different register lands harder.
- **Test fragment is the marquee**: Ash-Kadesh is the most lore-saturated and structurally-complex location on the atlas (3 nested district silhouettes + capital marker + multi-direction road network + foothill terrain transition). If a register survives this fragment, it survives the kingdom.
- **The wow north star is medium-vs-effort juxtaposition.** "Faking" textures (raster-style smoke, blurred fog, gradient fills) actively undercuts the wow. The aesthetic *is* honest SVG primitives.
- **Reference precedent for page shape**: `party/index.html` is the canonical standalone-cinematic precedent (488 lines, inline everything, scroll-pinned cinematic). The atlas page follows this shape, NOT the wiki-engine shape (`kingdom/places.html` etc.). Trying to render the atlas through `app.js` fights `body.innerHTML = ...` and the layout grid (per `codebase/CONCERNS.md` § "Two architectures, one repo").

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project context
- `.planning/PROJECT.md` — core value (craft-as-deliverable), tech stack, visual language, hard rules (no animation without lore; visual primitives discipline; no AI-generated content; lore as geographic source-of-truth).
- `.planning/PROJECT.md` § Key Decisions — locked-in decisions including the 5-phase shape, opus-on-every-agent, sketch-round-at-start-of-phase-1.
- `.planning/REQUIREMENTS.md` § Foundations & Visual Direction (FOUND) — the 6 v1 requirements this phase delivers.
- `.planning/ROADMAP.md` § Phase 1 — phase goal, depends-on (none, first phase), success criteria.
- `.planning/STATE.md` — current focus + watch-fors (LORE-07 hard gate; cache-bust at `?v=25` for Phase 1; orphan repair guidance on stubs vs entries).

### Codebase intelligence (must-read before plumbing pass plans)
- `.planning/codebase/ARCHITECTURE.md` § Two architectures, one repo — wiki-engine vs standalone-cinematic shapes.
- `.planning/codebase/ARCHITECTURE.md` § Cinematic page flow — distinction between `fullHero` engine-cinematic mode and fully-standalone pages; atlas takes the fully-standalone path.
- `.planning/codebase/ARCHITECTURE.md` § Internal-link micro-syntax — how `[[id:Label]]` resolution works (`app.js:68-79` `linkHref` chain). Critical for orphan-alias-repair correctness.
- `.planning/codebase/CONCERNS.md` § Two architectures, one repo — explicit warning about `app.js` and the atlas (don't try).
- `.planning/codebase/CONCERNS.md` § Internal-link rot — the 10 orphan ids (6 of which are atlas-relevant) and why they matter.
- `.planning/codebase/CONCERNS.md` § Specific notes for the SVG kingdom atlas page — six pre-written notes specifically for this work, including the cache-bust note (#4) and the `[[id:Label]]` cross-link warning (#6).
- `.planning/codebase/CONVENTIONS.md` — site coding/styling conventions the executor must match.

### External references (lore source-of-truth)
- The Sacred-Veil GitHub repo's `data.js`, `data_sections_1.js`, `data_sections_2.js`, `data_sections_3.js`, `tooltips.js`, `page_configs.js` — the full source of public canon. **Lore-faithful** atlas content sources from these only.
- `/Users/munashe-calebmanyumbu/Documents/Hellig DND Campaign Stuff/2. Averium` — Averium Obsidian vault. **Grounding context only** (not for atlas content). Phase 1 may consult for sketch-round register inspiration but not for prose to ship.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- **`party/index.html`** — canonical standalone-cinematic precedent. Atlas page-shell copies its structural shape (inline `<style>` + inline `<script>` + no engine load + thin "← Back" anchor). Copy the discipline, not the Vanta/Three.js dependencies — atlas is pure SVG.
- **`page_configs.js` `SV_PAGES['party']` entry (`page_configs.js:315-322`)** — has `standalone: true` documentation flag. Atlas's entry mirrors this shape (`hub: 'kingdom'`, `parent: 'kingdom'`, `standalone: true`).
- **`data.js` entity records (`data.js:20+`)** — orphan repair (D-14) extends existing entries' `aliases: []` arrays. No schema invention; reuse the existing entity-alias mechanism as documented in `ARCHITECTURE.md` § Entity auto-link.
- **`data_sections_3.js:26`** — kingdom-overview section, where the Phase 1 `cta-link` block lives. Phase 5's hub-grid card (POLISH-04) targets the same section's `children-grid` block — different blocks, no collision.

### Established Patterns
- **`[[id:Label]]` micro-syntax** (`app.js:68-79`) — used by every wiki page for internal links. Atlas as a standalone page will NOT process this syntax (`app.js` doesn't run on the atlas). Cross-links FROM the atlas TO the wiki must use direct anchor hrefs (`<a href="../kingdom/places.html#ash-kadesh">`), not `[[ash-kadesh:Ash-Kadesh]]` notation.
- **Auto-link entity matching** (`app.js:47-110`) — wiki pages auto-link entity names mentioned in prose. Orphan-repair (D-14) leverages this: aliases on the parent entity make all prose mentions of the orphan name resolve to the parent's anchor without any new section content.
- **Cache-bust `?v=NN` query string** — every shared script/stylesheet on every wiki page. Standalone pages (atlas included) don't participate. Site-wide bump from `?v=25` to `?v=26` is Phase 5's job (POLISH-03), not Phase 1's.

### Integration Points
- **`page_configs.js`** — single point of failure for the wiki (per CONCERNS.md). Atlas's entry must be added cleanly without disturbing unrelated entries. Verify the SV_PAGES key matches the file path (`'kingdom/atlas'`).
- **`kingdom/index.html`** (rendered via app.js from `page_configs.js`) — the Phase 1 `cta-link` block goes into the `data_sections_3.js` overview section. This is the same section Phase 5's children-grid card will target — Phase 1 must NOT pre-emptively add a child-card here.
- **`kingdom/geography.html`** — the "View the atlas →" link goes into the geography intro section as inline prose (`[[kingdom/atlas:View the atlas]]` form, since geography.html IS rendered through `app.js` so the syntax works).
- **`data.js` entity list** — orphan repair removes 6 entries (`silveldt`, `the-drift`, `the-rot`, `third-furnace`, `tide-reach-wharf`, `anvilhold`) and adds their display names as `aliases` to the corresponding parent place's entity.

</code_context>

<deferred>
## Deferred Ideas

*Ideas that surfaced or were touched in discussion but belong in other phases.*

- **Children-grid card for the atlas on `kingdom/index.html`** — owned by Phase 5 (POLISH-04). Phase 1 uses a `cta-link` block instead.
- **Mobile / narrow-viewport fallback for the atlas page** — owned by Phase 5 (POLISH-02). Phase 1's standalone shell ships desktop-only with no fallback yet.
- **OG/Twitter meta + atlas-specific SEO** — owned by Phase 5 (POLISH-08). Phase 1's `SV_PAGES` entry can carry a minimum subtitle; full meta is later.
- **Cache-bust to `?v=26` site-wide** — owned by Phase 5 (POLISH-03). Phase 1 stays at `?v=25` (the standalone atlas page is unaffected anyway).
- **Hand-inked Tolkien-pen aesthetic register in the sketch round** — explicitly out of scope per PROJECT.md "Out of Scope" ("Claude won't match a human cartographer's hand"). If user wants this register after seeing sketches, we re-scope honestly rather than ship a half-faked version.
- **Pan/zoom interaction in sketches** — Phase 4's domain (animations + interaction). Phase 1 sketches are static.
- **Lore-faithful geography spec** — Phase 2 (LORE-01..08). Sketch round does NOT need geographic accuracy at this stage; it's about visual register, not lore fidelity. Phase 2's spec then constrains what Phase 3 actually draws.

</deferred>

---

*Phase: 01-foundations-and-visual-direction*
*Context gathered: 2026-04-30*
