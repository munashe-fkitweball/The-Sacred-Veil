# Roadmap: The Sacred Veil — Atlas

**Created:** 2026-04-29
**Granularity:** coarse (5 phases — locked by user during discovery, not derived)
**Coverage:** 51 / 51 v1 requirements mapped (100%)
**Mode:** interactive (user approval gates between phases)

## Core Value

**Make the player feel they're seeing a *crafted* artifact, not a rendered one.**
Every animation, every zoom level, every label placement either earns the *"all of this is just SVG?"* reaction — or it doesn't ship.

## Project-Level Constraints (apply to every phase)

These constraints are inherited by every plan and every executor in this milestone. Surfaced here so they don't have to be re-derived in each `/gsd-plan-phase` call.

- **Standalone-cinematic page pattern.** The atlas does NOT inherit `app.js` chrome. The shape is `party/index.html` (inline `<style>`, inline `<script>`, no wiki engine load), NOT `kingdom/places.html`. Trying to render the atlas through `app.js` fights `body.innerHTML = ...`, the layout grid, and the sticky offsets. See `codebase/CONCERNS.md` § "Two architectures, one repo."
- **No animation without lore (HARD RULE).** Every animation that ships must justify itself in one sentence about the world. Decoration-for-decoration's-sake doesn't ship — it's the slop SVG should refuse.
- **Visual primitives discipline (HARD RULE).** Prefer geometric primitives — dots, characters/glyphs, dashed lines, simple stroke shapes — over rendered/blurred/gradient effects. Smoke is a column of glyphs. Mist is a sparse character field. Embers are small dots. Falling leaves are typographic marks. **This isn't a constraint — it IS the aesthetic.**
- **Hand-authored only.** All work is hand-authored SVG / CSS / JS. No animation libraries (no GSAP, anime.js, Lottie, three.js, Vanta). No build pipeline. No package manager. Match the existing site's discipline.
- **Lore is geographic source-of-truth.** The user's hand-drawn sketch is rough topology, not canon. Conflicts resolve in favor of lore (Sacred-Veil GitHub repo for content; Averium Obsidian vault for grounding context only — never for content).
- **Performance ceiling.** Atlas page total weight ≤ 800KB ideal / 1.5MB hard cap. SVG node count ≤ ~5,000 simultaneously rendered (LOD culls aggressively).
- **All planning agents on opus.** Per `.planning/config.json` `model_overrides` — every GSD agent (planner, executor, verifier, checkers, auditors, doc-writer) is pinned to opus. Craft-as-deliverable project, max model quality across the board.

## Phases

- [ ] **Phase 1: Foundations & Visual Direction** — Atlas page exists in the right place with no chrome competing with the map; visual register is locked via a sketch round; orphan link targets are repaired so the atlas won't ship broken.
- [ ] **Phase 2: Lore-Faithful Geography Spec** — A user-approved geography spec at `.planning/spec/atlas-geography.md` exists, citing every spatial claim to lore, before any SVG drawing begins. **Hard gate: LORE-07.**
- [ ] **Phase 3: Build the Atlas — static** — The static atlas ships as a craft-quality SVG of K'naan: pan/zoom, LOD, all 4 regions, all 6 major places + Grendel's Reach, all named lesser holdings, hover tooltips, click-through to wiki, campaign-state encoding (Amarsgate burnt, Drowned Moot mystery). No motion yet.
- [ ] **Phase 4: Animations** — Narrative-justified motion is layered onto the static atlas: the capital breathes, Amarsgate smoulders, the Dead Rowan drops a leaf, the White-Blind hangs, Iron Teeth smokes, hover affordances + trade-route highlights animate. Every animation passes the one-sentence lore test.
- [ ] **Phase 5: Polish & Ship** — Cinematic intro plays once per session, mobile shows a graceful fallback, accessibility minima are met, the site is cache-busted to `?v=26`, the atlas is wired into the Kingdom hub-grid, and the page ships to GitHub Pages.

## Phase Details

### Phase 1: Foundations & Visual Direction
**Goal**: A reader can navigate to a working `kingdom/atlas.html` page that loads cleanly with no chrome competing for attention; the visual register the atlas will ship in is locked (chosen from 3–4 sketched variants); and the atlas-relevant orphan links the future map will rely on are repaired so they resolve to live tooltip + click targets.
**Depends on**: Nothing (first phase).
**Requirements**: FOUND-01, FOUND-02, FOUND-03, FOUND-04, FOUND-05, FOUND-06
**Success Criteria** (what must be TRUE):
  1. A reader can type `kingdom/atlas.html` in the address bar (or click into it from `kingdom/index.html` and `kingdom/geography.html`) and land on a full-bleed, chrome-free page that loads with no JS errors in the console.
  2. The user has previewed 3–4 distinct stylistic variants from a `/gsd-sketch` round, picked a winner (or rejected all and re-sketched), and the chosen visual register is documented in `.planning/sketches/MANIFEST.md`.
  3. Hovering over `silveldt`, `the-drift`, `the-rot`, `third-furnace`, `tide-reach-wharf`, or `anvilhold` anywhere on the existing wiki produces a real tooltip and clicks resolve to a live section anchor (no dead `#id` fallbacks).
  4. The atlas page is registered as a child of the Kingdom hub in `page_configs.js` (`hub: 'kingdom'`, `parent: 'kingdom'`) so site-nav users can find it through the normal information architecture.
**Plans**: 6 plans
  - [ ] 01-01-PLAN.md — Sketch round: curate 5+ register menu, draw sketches, user lock-in
  - [ ] 01-02-PLAN.md — Orphan audit: per-orphan Mechanism A/B classification (gates orphan repair)
  - [ ] 01-03-PLAN.md — Page shell: kingdom/atlas.html standalone-cinematic + page_configs.js entry
  - [ ] 01-04-PLAN.md — Entry-point links: cta-link on kingdom hub + inline link in geography
  - [ ] 01-05-PLAN.md — Orphan repairs: execute Mechanism A lifts and Mechanism B alias indirection
  - [ ] 01-06-PLAN.md — Phase verification: goal-backward smoke test against ROADMAP success criteria
**UI hint**: yes

### Phase 2: Lore-Faithful Geography Spec
**Goal**: A user-approved geography spec at `.planning/spec/atlas-geography.md` exists that captures the canonical spatial layout of K'naan — every region shape, every place position, every distance estimate, every conflict between the user's hand-drawn sketch and the lore — with inline citations to source. The user explicitly approves this spec before any SVG drawing begins, so lore-fidelity bugs surface at the cheap-to-fix spec stage rather than the expensive-to-fix SVG stage.
**Depends on**: Phase 1 (the sketch winner from FOUND-05 is the topology baseline that this spec then reconciles against the lore; conflicts get resolved in favor of lore here, not later in BUILD).
**Requirements**: LORE-01, LORE-02, LORE-03, LORE-04, LORE-05, LORE-06, LORE-07, LORE-08
**Success Criteria** (what must be TRUE):
  1. The user can open `.planning/spec/atlas-geography.md` and read a structured per-region + per-place breakdown of K'naan's geography where every spatial claim carries an inline citation (`[ash-kadesh §Crown-Shelf]` or `[Averium/01 Locations/Bet-Seraphim.md]`).
  2. The user can read a "Conflicts" section that names every material disagreement between the hand-drawn sketch and the lore and shows how each was resolved in favor of lore with a one-line rationale.
  3. The user reviews the spec end-to-end and signals approval (a "Approved by user on [date]" marker at the top of the spec or via an explicit commit message) — this is a HARD GATE; Phase 3 does not start until this is true.
  4. Anything sourced only from the Averium vault (and not present in the public Sacred-Veil repo) lives in a clearly-labeled "GM-only context (DO NOT SHIP)" appendix that the BUILD executor will treat as background-only.
  5. A rough scale chart (e.g. "Bet-Seraphim is three days' ride from Ash-Kadesh → ~90 miles assuming 30mi/day cavalry pace") exists so the SVG executor can place things at consistent scale, not eyeball-relative.
**Plans**: TBD

### Phase 3: Build the Atlas — static
**Goal**: A reader who lands on `kingdom/atlas.html` sees the static Kingdom of K'naan — all four regions, all six major places (with district silhouettes where lore supports it), Grendel's Reach, every named lesser holding, the road network with the sketch's solid/dashed convention, the Amarsgate-freshly-burnt visual, and the Drowned Moot mystery treatment — pan-and-zoomable with at least 3 LOD bands, every named location hover-tooltipped and click-through-able to the wiki. Looks shippable BEFORE any motion is layered on top. Largest phase by far; many parallelizable plans.
**Depends on**: Phase 2 (the user-approved geography spec is the source-of-truth this phase implements; BUILD-19 enforces the lore-fidelity gate and rejects any SVG that invents geography not in the spec).
**Requirements**: BUILD-01, BUILD-02, BUILD-03, BUILD-04, BUILD-05, BUILD-06, BUILD-07, BUILD-08, BUILD-09, BUILD-10, BUILD-11, BUILD-12, BUILD-13, BUILD-14, BUILD-15, BUILD-16, BUILD-17, BUILD-18, BUILD-19
**Success Criteria** (what must be TRUE):
  1. A reader can pan the map smoothly with mouse drag and zoom in/out smoothly with the scroll-wheel (centered on the cursor) plus `+`/`-` keyboard shortcuts, with min/max zoom clamped sensibly.
  2. At low zoom the reader sees only the four regions, the six major places, and the main roads; zooming in reveals district silhouettes and lesser holdings; zooming deeper reveals the densest detail (typographic-glyph fields, ornamental marks, fixed-width annotations) — labels fade in/out at band boundaries, never pop.
  3. Every named location on the map shows a hover tooltip on hover and navigates to the corresponding wiki page or section anchor on click (e.g. clicking Ash-Kadesh navigates to `kingdom/places.html#ash-kadesh`).
  4. The reader can identify Ash-Kadesh's three districts (Crown-Shelf high / Ledger-Ward middle / The Mourn low) at mid+ zoom; sees Har-Moloch's Iron Teeth slag-stack silhouette; sees Bet-Seraphim's walled abbey-refinery with The Drift around it; sees Gath-Mere's port + Tide-Reach Wharf shore strip + inland Silveldt manor; sees Raven-Garron's keep with the Dead Rowan in the courtyard at deep zoom; sees Amarsgate as **freshly-burnt** (blackened silhouettes / scorched ground tint, the morning after — not actively burning); and sees Grendel's Reach as a stilt-village with The Rot tower in the southern silt-flats.
  5. Hovering somewhere in the deep Silt-Mere (or hovering an explicit `?` marker) reveals a fixed-width `[LOCATION UNKNOWN]` annotation for The Drowned Moot, instead of a normal tooltip — the mystery is encoded as lore, not as missing UI.
**Plans**: TBD
**UI hint**: yes

### Phase 4: Animations
**Goal**: The static atlas comes alive with narrative-justified motion. The capital star breathes (the city is the kingdom's heart). Amarsgate smoulders with rising embers (the campaign opens with it burning). A leaf drifts down the Dead Rowan once a minute (it's the Morbray memorial). The White-Blind hangs over the Gorse-Barrens (signature weather). Iron Teeth chimneys smoke (permanent grey haze). Hover affordances and trade-route highlights animate cleanly. Every animation passes the one-sentence lore test.
**Depends on**: Phase 3 (the static atlas must look shippable on its own first — locking the foundation before layering motion lets the user evaluate the static map cleanly and decide whether the calibrated animation list is right or needs further trimming).
**Requirements**: ANIM-01, ANIM-02, ANIM-03, ANIM-04, ANIM-05, ANIM-06, ANIM-07, ANIM-08, ANIM-09
**Success Criteria** (what must be TRUE):
  1. The reader can sit on the atlas for two minutes and witness all five ambient lore-justified animations: Ash-Kadesh's capital star breathing, ember dots rising over Amarsgate, a typographic glyph drifting down the Dead Rowan path (~once per 60–90s), the White-Blind sparse-glyph field over the Gorse-Barrens, and the vertical column of grey glyphs rising from Har-Moloch's Iron Teeth chimneys.
  2. Hovering any named-location marker produces a marker glow + a 1–2px label nudge upward + label brighten — no bouncing, no jumping, no scale > 1.05.
  3. Hovering Ash-Kadesh briefly highlights the trade routes from the capital to Har-Moloch and Bet-Seraphim via SVG dash-array animation (~600ms, the path appears to redraw) — making the lore-claim that Ash-Kadesh sits at "the confluence of three trade roads" visible.
  4. At deep zoom a vignette tightens (radial dim from the edges) to focus attention; this is a pure CSS transition on a viewport overlay, not a re-render.
  5. Hovering the Drowned Moot mystery marker plays a fade + 1-char-at-a-time typewriter reveal of `[LOCATION UNKNOWN]` (~300ms total) — the UI-mirrors-lore animation that doubles as the mystery's signature.
**Plans**: TBD
**UI hint**: yes

### Phase 5: Polish & Ship
**Goal**: The atlas ships. A soft fade-in cinematic intro plays once per session; mobile gets a graceful fallback (touch UX is explicitly v2); accessibility minima are met (keyboard reachability, ARIA labels, `:focus-visible`, `<noscript>`); page weight stays inside the perf ceiling; canonical names match the wiki; the atlas card appears in the Kingdom hub-grid; the entire site is cache-busted to `?v=26` so the new content actually serves; OG/Twitter metadata is in place. Also: while we're in the repo, the 4 duplicate section ID collisions in `data_sections_2.js` get cleaned up (POLISH-09 — folded in per user request, unrelated to atlas content but worth fixing). Small phase, but it ships-the-thing.
**Depends on**: Phase 4 (animations must be live and stable before final polish — cache-bust + intro framing + mobile fallback all assume the atlas they're framing is the real, animated, shippable atlas).
**Requirements**: POLISH-01, POLISH-02, POLISH-03, POLISH-04, POLISH-05, POLISH-06, POLISH-07, POLISH-08, POLISH-09
**Success Criteria** (what must be TRUE):
  1. The reader's first visit to `kingdom/atlas.html` in a session opens with a soft ~1–1.5s fade-in of the kingdom from black (no camera pull-back, fade only); subsequent visits in the same session skip the intro (gated by `sessionStorage`).
  2. A reader on a < ~720px wide viewport sees a graceful "Best viewed on a wider screen" fallback page (a flat overview SVG with no pan/zoom) instead of a broken pan/zoom experience — touch UX is explicitly out of scope for v1.
  3. A keyboard-only reader can Tab through every interactive marker in spatial reading order, sees `:focus-visible` states on each, and screen-reader users get ARIA labels; a JS-disabled reader sees the `<noscript>` fallback that every other wiki page already has.
  4. A `grep ?v=25` across the repo returns zero results in committed files (every script tag in every HTML file has been bumped to `?v=26` so the new atlas page and its sibling pages serve fresh).
  5. A reader who lands on the Kingdom hub (`kingdom/index.html`) sees the atlas as a card in the hub's children-grid, alongside Geography, Peoples, Places, etc. — the atlas is discoverable through normal site navigation, and the page meta (description, OG/Twitter card, OG image) matches the metadata pattern of `kingdom/geography.html`.
  6. Running `grep -E "^\s*id:\s*['\"][a-z-]+['\"]" data_sections_*.js | awk '{print $2}' | sort | uniq -c | sort -rn | head` returns max count of 1 per ID — the 4 duplicate section ID collisions in `data_sections_2.js` (lines 244/724, 255/735, 266/713, 299/698) are resolved with no content silently lost.
**Plans**: TBD
**UI hint**: yes

## Cross-Phase Dependency Diagram

```
Phase 1 (FOUND)      ──► Phase 2 (LORE)      ──► Phase 3 (BUILD)      ──► Phase 4 (ANIM)      ──► Phase 5 (POLISH)
Page shell + sketch       Spec + USER GATE        Static atlas             Motion layer            Ship-the-thing
locks visual register     (LORE-07 approves       implements LORE          on top of BUILD         (cache-bust, intro,
+ fixes orphan refs       before BUILD draws)     spec faithfully                                  mobile, a11y, hub-grid)
```

Each arrow is a hard dependency: Phase N+1 cannot start its first plan until Phase N's success criteria are met AND (for the LORE→BUILD edge) the user has explicitly approved the spec.

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundations & Visual Direction | 0/6 | Not started | — |
| 2. Lore-Faithful Geography Spec | 0/? | Not started | — |
| 3. Build the Atlas — static | 0/? | Not started | — |
| 4. Animations | 0/? | Not started | — |
| 5. Polish & Ship | 0/? | Not started | — |

---
*Roadmap created: 2026-04-29*
*Last updated: 2026-04-30 after Phase 1 plan-phase*
