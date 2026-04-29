# Requirements: The Sacred Veil — Atlas

**Defined:** 2026-04-29
**Core Value:** Make the player feel they're seeing a *crafted* artifact, not a rendered one.

## v1 Requirements

Each requirement is atomic, testable, and user-centric. Categories mirror the 5-phase shape locked in PROJECT.md: **FOUND** (Foundations & Visual Direction), **LORE** (Lore-Faithful Geography Spec), **BUILD** (Build the static Atlas), **ANIM** (Animations), **POLISH** (Polish & Ship).

### Foundations & Visual Direction (FOUND)

- [ ] **FOUND-01**: A new page exists at `kingdom/atlas.html` and loads in a browser without JS errors.
- [ ] **FOUND-02**: The page is registered as a child of the Kingdom hub in `page_configs.js` (`window.SV_PAGES['kingdom/atlas']` exists, with `hub: 'kingdom'`, `parent: 'kingdom'`).
- [ ] **FOUND-03**: A reader can reach the atlas from `kingdom/index.html` (children grid) and from `kingdom/geography.html` (a "View the atlas →" link in the geography intro section).
- [ ] **FOUND-04**: The atlas page is full-bleed — no archbar, sidebar, breadcrumbs, or footer chrome competing with the map. Standalone-cinematic pattern (does not inherit `app.js` chrome).
- [ ] **FOUND-05**: Visual register is locked via a `/gsd-sketch` round that produces 3–4 distinct stylistic variants, the user picks one (or kills all and re-sketches), and the winner is documented in `.planning/sketches/MANIFEST.md`.
- [ ] **FOUND-06**: The 6 atlas-relevant orphan `[[id:Label]]` references are resolved with real section entries in the data files (or stubs that link to the most-relevant existing section): `silveldt`, `the-drift`, `the-rot`, `third-furnace`, `tide-reach-wharf`, `anvilhold`. Verified by the existing tooltip system rendering them as live links, not dead ones.

### Lore-Faithful Geography Spec (LORE)

The atlas must reflect the canonical lore, at least roughly. The user's hand-drawn sketch is rough topology — it is *not* the source of truth for geography. The lore is. This phase produces a spec doc that BUILD then implements; user explicitly approves the spec before BUILD touches a single SVG path.

- [ ] **LORE-01**: A spec document exists at `.planning/spec/atlas-geography.md` capturing the canonical spatial layout of K'naan derived from lore. Format is human-readable markdown with structured sections per region and per place.
- [ ] **LORE-02**: The spec is grounded in a comprehensive read of: (a) all of `data_sections_2.js` and `data_sections_3.js` from the Sacred-Veil repo (Places + Regions + intros), (b) the Averium Obsidian vault's `01 Locations` and adjacent directories at `/Users/munashe-calebmanyumbu/Documents/Hellig DND Campaign Stuff/2. Averium`, used **for additional grounding context only — not as a content source for what ships on the map**. Every spatial claim in the spec carries an inline citation to its source (`[ash-kadesh §Crown-Shelf]` or `[Averium/01 Locations/Bet-Seraphim.md]`).
- [ ] **LORE-03**: The spec specifies for each of the 4 regions: rough shape (oblong / wedge / kidney / etc.), approximate area share of the kingdom, neighbour relationships, edges (where one region transitions to another), and key features (silt-flat boundaries, peak heights, river presence, forest density gradient, etc.).
- [ ] **LORE-04**: The spec specifies for each of the 6 major places + Grendel's Reach: position relative to its containing region, position relative to other places (with directional + distance hints from lore), elevation/topography (e.g. "Ash-Kadesh on a long ridge"), built form (e.g. "Har-Moloch under permanent grey haze, Iron Teeth slag-stack skyline"), and the lesser holdings inside.
- [ ] **LORE-05**: The spec includes a rough scale chart deriving distance-per-unit from lore (e.g. "Bet-Seraphim is three days' ride from Ash-Kadesh → ~90 miles assuming 30mi/day cavalry pace") so the SVG executor can place things at consistent scale.
- [ ] **LORE-06**: The spec calls out every material conflict between the user's hand-drawn sketch and the lore, and resolves each in favor of lore with a one-line rationale per conflict (e.g. "Sketch puts Amarsgate north-east of Har-Moloch; lore puts Amarsgate at the foot of the Eastern Massif which is east of the kingdom — atlas follows lore, places Amarsgate south-east of Har-Moloch on the Massif foothills").
- [ ] **LORE-07**: **The user reviews and approves the spec document before BUILD begins.** Approval is captured (a "Approved by user on [date]" marker at the top of the spec or via an explicit commit message). BUILD does not start until this gate passes.
- [ ] **LORE-08**: Anything sourced *only* from the Averium vault and not present in the Sacred-Veil repo is segregated into a clearly-labeled "GM-only context (DO NOT SHIP)" appendix in the spec. The BUILD executor treats that section as background-only and never sources atlas content from it.

### Build the Atlas — static (BUILD)

- [ ] **BUILD-01**: A reader can pan the map smoothly with mouse drag (left-button drag translates the SVG `viewBox`).
- [ ] **BUILD-02**: A reader can zoom in/out smoothly with scroll-wheel and `+` / `-` keyboard shortcuts. Zoom is centered on the cursor position when scrolling. Min and max zoom are clamped sensibly.
- [ ] **BUILD-03**: At least 3 LOD bands are implemented: at low zoom, only regions + 6 major places + main roads are visible; at mid zoom, district silhouettes + lesser holdings + named buildings appear; at deep zoom, the densest detail (typographic-glyph fields, ornamental marks, fixed-width annotations) appears. Labels fade in/out at band boundaries, never pop.
- [ ] **BUILD-04**: Every named location on the map shows a hover tooltip. Implementation reuses or follows the `[[id:Label]]` + `tooltips.js` convention so tooltips stay in sync with section data.
- [ ] **BUILD-05**: Every named location is clickable and navigates to the corresponding wiki page or section anchor (e.g. clicking Ash-Kadesh navigates to `kingdom/places.html#ash-kadesh`).
- [ ] **BUILD-06**: All four regions are present and visually distinct: **Silt-Mere** (NW inland sea + silt-flats), **Eastern Massif** (E mountain wall), **Gorse-Barrens** (mire-choked moor between the two), **Great Forests** (two large masses, central-west and SW). Spatial topology matches the user's hand-drawn sketch.
- [ ] **BUILD-07**: **Ash-Kadesh** is rendered as the central capital with three distinct district silhouettes visible at mid+ zoom: Crown-Shelf (high), Ledger-Ward (middle), The Mourn (low). Capital marker (the purple star from the user's sketch) is visible at low zoom.
- [ ] **BUILD-08**: **Har-Moloch** is rendered with the Iron Teeth slag-stack silhouette visible at mid+ zoom. Lesser holdings (Anvilhold, Third Furnace, Great Forge) are labeled and clickable inside the city footprint.
- [ ] **BUILD-09**: **Bet-Seraphim** is rendered as a walled abbey-refinery, with The Drift (the surrounding pilgrim/refiner town) labeled and clickable at mid+ zoom.
- [ ] **BUILD-10**: **Gath-Mere** is rendered as a coastal port on the inland edge of the Silt-Mere, with Tide-Reach Wharf as a ~1-mile shore strip and Silveldt (Olenna Kaelen's manor) as a separate inland holding visible at mid+ zoom.
- [ ] **BUILD-11**: **Raven-Garron** is rendered as a black-walled keep guarding the Eastern Massif's only reliable pass, with the Dead Rowan tree marked in the courtyard at deep zoom.
- [ ] **BUILD-12**: **Amarsgate** is rendered with Keep Amar visible on the ridge above the silver mine, at the foot of the Eastern Massif.
- [ ] **BUILD-13**: **Grendel's Reach** is rendered as a stilt-village in the southern silt-flats, with The Rot (Grendel's algae-slicked tower keep) visible at mid+ zoom.
- [ ] **BUILD-14**: Lesser holdings inside Ash-Kadesh are labeled and clickable at mid+ zoom: Hollow Sun (Ledger-Ward), Thorne Archive (Crown-Shelf), Iron Gavel (Crown-Shelf), Argent Academy (Ledger-Ward), Golden Weights (Ledger-Ward), The Spike (The Mourn).
- [ ] **BUILD-15**: Roads are rendered: solid lines = main roads, dashed = unmaintained roads, matching the user's sketch legend convention. Topology connects the major places sensibly.
- [ ] **BUILD-16**: Compass and one-line legend are present at all zoom levels in the page chrome (not in the SVG itself, so they don't pan/zoom with the map).
- [ ] **BUILD-17**: **Amarsgate is rendered as freshly-burnt** — visual treatment encodes the campaign-opening state (e.g. blackened building silhouettes, scorched ground tint). Not actively burning; the morning after.
- [ ] **BUILD-18**: **The Drowned Moot** receives the deliberate-mystery treatment — it is NOT placed on the map at a known location. Hovering somewhere in the deep Silt-Mere (or hovering an explicit "?" marker) reveals a fixed-width `[LOCATION UNKNOWN]` annotation instead of a normal tooltip.
- [ ] **BUILD-19**: **Lore fidelity gate.** Every spatial decision in the SVG (positions, sizes, neighbours, distances, sub-region layout, built form per location) traces back to the user-approved `.planning/spec/atlas-geography.md` (LORE-01..08). Any deviation must be flagged and re-approved before commit. The atlas does not invent geography that isn't in the spec.

### Animations (ANIM)

All animations obey the **"no animation without lore"** hard rule from PROJECT.md and the **visual-primitives discipline** (dots/glyphs/dashed lines, no faked smoke/blur/gradient).

- [ ] **ANIM-01**: The capital star at Ash-Kadesh breathes — gentle scale + opacity oscillation echoing the homepage `sigil-breathe` keyframe. *Justified: the city is the kingdom's heart.*
- [ ] **ANIM-02**: Embers drift over Amarsgate — small warm-gold dots rising slowly and fading, sparse cadence (1–3 visible at any time). *Justified: the campaign opens with it burning.*
- [ ] **ANIM-03**: A typographic glyph (e.g. `❦` or `*`) drifts down a hand-authored path at Raven-Garron's Dead Rowan, once every 60–90 seconds. *Justified: the Rowan is the Morbray memorial.*
- [ ] **ANIM-04**: The White-Blind is rendered as a static or near-static sparse field of `·` `~` `‧` glyphs scattered across the Gorse-Barrens region. *Justified: the kingdom's signature weather lives here.*
- [ ] **ANIM-05**: Smoke from Har-Moloch's Iron Teeth is rendered as a vertical column of grey glyphs (`·` `°` `:`) at each chimney axis, drifting upward slowly. *Justified: the forge-city is described in lore as under "permanent grey haze."*
- [ ] **ANIM-06**: On hover of any named-location marker, the marker glows and the label nudges 1–2px upward and brightens. No bouncing, no jumping, no scale > 1.05.
- [ ] **ANIM-07**: On hover of Ash-Kadesh, the trade routes from the capital to Har-Moloch and Bet-Seraphim briefly highlight via SVG dash-array animation (the path appears to redraw, ~600ms). *Justified: explains why Ash-Kadesh sits at "the confluence of three trade roads."*
- [ ] **ANIM-08**: A vignette tightens (radial dim from edges) at deep zoom, focusing attention on the visible region. Pure CSS transition on a viewport overlay element.
- [ ] **ANIM-09**: A fixed-width `[LOCATION UNKNOWN]` annotation animates in (fade + 1-char-at-a-time typewriter, ~300ms total) on hover of the Drowned Moot mystery marker. *Justified: lore says the location is unknown — UI mirrors lore.*

### Polish & Ship (POLISH)

- [ ] **POLISH-01**: A soft fade-in cinematic intro plays on first visit per session (~1–1.5s, eases the kingdom from black, then chrome fades in just behind). Subsequent visits in the same session skip the intro (gated by `sessionStorage`). No camera pull-back / no zoom animation in the intro — fade only.
- [ ] **POLISH-02**: Mobile / narrow viewport (< ~720px wide) shows a graceful fallback page or message — "Best viewed on a wider screen" plus a low-fidelity static fallback (e.g. a flat overview SVG with no pan/zoom). Touch zoom UX is explicitly out of scope.
- [ ] **POLISH-03**: Site cache-bust query string is bumped from `?v=25` to `?v=26` on every script tag in every HTML file across the repo. Verified by greping the repo for `?v=25` and confirming zero remaining references in committed files.
- [ ] **POLISH-04**: A hub-grid card for the atlas is added to `kingdom/index.html`'s `kingdom-overview` children-grid block (in `data_sections_3.js:26`), so the atlas appears alongside Geography, Peoples, Places, etc. when a reader lands on the Kingdom hub.
- [ ] **POLISH-05**: Accessibility minima are met: all interactive markers are keyboard-reachable (Tab cycles through them in spatial reading order), have ARIA labels, and have `:focus-visible` states. `<noscript>` fallback present on the atlas page (since the existing site has them on every other wiki page).
- [ ] **POLISH-06**: All atlas-rendered location names match canonical wiki names (case + spelling), verified by a one-off check against `data_sections_*.js` IDs and titles. No "Ashkadesh" vs "Ash-Kadesh" drift.
- [ ] **POLISH-07**: Page weight (HTML + inline SVG + inline CSS + inline JS, gzip-uncompressed) is ≤ 800KB ideal / 1.5MB hard cap. SVG node count ≤ ~5,000 simultaneously rendered (LOD culls aggressively).
- [ ] **POLISH-08**: A `<meta>` description, OG/Twitter card, and OG image present on the atlas page, matching the metadata pattern in `kingdom/geography.html` and other site pages. (Atlas-specific copy, not a copy-paste of the homepage's.)

## v2 Requirements

Acknowledged but not in v1 scope. Tracked here so they don't get lost.

### Mobile / Touch (MOBILE)

- **MOBILE-01**: Touch-pan and pinch-zoom on phones and tablets, with a UX tuned for thumb interaction.
- **MOBILE-02**: Adaptive LOD that adjusts based on viewport size, not just zoom level.

### Wider Averium (WORLD)

- **WORLD-01**: A zoom-out beyond K'naan to the wider World of Averium (one extra zoom band, kingdom is one of several).

### GM Layer (GM)

- **GM-01**: A GM-only overlay toggle (linked only from `gm.html`) that reveals GM-only annotations: cult sites, hidden routes, NPC bases. Architecture: client-side toggle plus a separate `gm-atlas-data.js` that's never linked publicly (security-by-obscurity is honest about its limits).

### Dynamic Atlas (DYNAMIC)

- **DYNAMIC-01**: Session-tracked PC positions, in-progress quest pins, fog-of-war for un-discovered places. Effectively a campaign tracker built on top of the atlas.

## Out of Scope

| Feature | Reason |
|---------|--------|
| GM-only overlay (v1) | Sacred-Veil GitHub repo is the boundary of player-knowable lore. Averium vault is GM-only and must NOT leak. One public atlas, no toggle. (See v2 GM-01 if revisited.) |
| Touch / mobile pan-zoom (v1) | Desktop-first for v1. Touch zoom UX is its own design problem. (See v2 MOBILE-01.) |
| Zoom-out beyond K'naan to wider Averium (v1) | Wider Averium isn't in the existing wiki yet. (See v2 WORLD-01.) |
| Fog-of-war / discovered toggle | Wiki publishes everything openly; atlas matches. The Drowned Moot's "location unknown" is *lore*, not a UI state. |
| Dynamic / data-driven atlas | The atlas is a static authored artifact, not a campaign tracker. Updates ship via git like the rest of the wiki. |
| Animation libraries (GSAP, anime.js, Lottie, three.js, Vanta) | Pure CSS + native SVG `<animate>` covers the calibrated motion budget. The party page reaching for three.js is a precedent, not a license. |
| Hand-inked Tolkien-pen aesthetic | Claude can approximate stroke variation but won't match a human cartographer's hand. If sketch round shows the user wants this register, we'll re-scope honestly rather than ship a half-faked version. |
| High-density organic detail (hundreds of unique trees, individual buildings architecturally rendered) | Patterns and silhouettes only. Authoring 200 unique tree paths is not the wow this map is going for. |
| AI-generated visuals (raster fantasy art, generative textures) | Project-wide constraint. Atlas is hand-authored SVG only. |

## Traceability

Each requirement-prefix maps 1:1 to a phase (the prefix scheme was designed alongside the phase shape during discovery). All 50 v1 requirements are mapped; no orphans.

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 | Phase 1: Foundations & Visual Direction | Pending |
| FOUND-02 | Phase 1: Foundations & Visual Direction | Pending |
| FOUND-03 | Phase 1: Foundations & Visual Direction | Pending |
| FOUND-04 | Phase 1: Foundations & Visual Direction | Pending |
| FOUND-05 | Phase 1: Foundations & Visual Direction | Pending |
| FOUND-06 | Phase 1: Foundations & Visual Direction | Pending |
| LORE-01 | Phase 2: Lore-Faithful Geography Spec | Pending |
| LORE-02 | Phase 2: Lore-Faithful Geography Spec | Pending |
| LORE-03 | Phase 2: Lore-Faithful Geography Spec | Pending |
| LORE-04 | Phase 2: Lore-Faithful Geography Spec | Pending |
| LORE-05 | Phase 2: Lore-Faithful Geography Spec | Pending |
| LORE-06 | Phase 2: Lore-Faithful Geography Spec | Pending |
| LORE-07 | Phase 2: Lore-Faithful Geography Spec | Pending (HARD GATE — user approval required before Phase 3) |
| LORE-08 | Phase 2: Lore-Faithful Geography Spec | Pending |
| BUILD-01 | Phase 3: Build the Atlas — static | Pending |
| BUILD-02 | Phase 3: Build the Atlas — static | Pending |
| BUILD-03 | Phase 3: Build the Atlas — static | Pending |
| BUILD-04 | Phase 3: Build the Atlas — static | Pending |
| BUILD-05 | Phase 3: Build the Atlas — static | Pending |
| BUILD-06 | Phase 3: Build the Atlas — static | Pending |
| BUILD-07 | Phase 3: Build the Atlas — static | Pending |
| BUILD-08 | Phase 3: Build the Atlas — static | Pending |
| BUILD-09 | Phase 3: Build the Atlas — static | Pending |
| BUILD-10 | Phase 3: Build the Atlas — static | Pending |
| BUILD-11 | Phase 3: Build the Atlas — static | Pending |
| BUILD-12 | Phase 3: Build the Atlas — static | Pending |
| BUILD-13 | Phase 3: Build the Atlas — static | Pending |
| BUILD-14 | Phase 3: Build the Atlas — static | Pending |
| BUILD-15 | Phase 3: Build the Atlas — static | Pending |
| BUILD-16 | Phase 3: Build the Atlas — static | Pending |
| BUILD-17 | Phase 3: Build the Atlas — static | Pending |
| BUILD-18 | Phase 3: Build the Atlas — static | Pending |
| BUILD-19 | Phase 3: Build the Atlas — static | Pending |
| ANIM-01 | Phase 4: Animations | Pending |
| ANIM-02 | Phase 4: Animations | Pending |
| ANIM-03 | Phase 4: Animations | Pending |
| ANIM-04 | Phase 4: Animations | Pending |
| ANIM-05 | Phase 4: Animations | Pending |
| ANIM-06 | Phase 4: Animations | Pending |
| ANIM-07 | Phase 4: Animations | Pending |
| ANIM-08 | Phase 4: Animations | Pending |
| ANIM-09 | Phase 4: Animations | Pending |
| POLISH-01 | Phase 5: Polish & Ship | Pending |
| POLISH-02 | Phase 5: Polish & Ship | Pending |
| POLISH-03 | Phase 5: Polish & Ship | Pending |
| POLISH-04 | Phase 5: Polish & Ship | Pending |
| POLISH-05 | Phase 5: Polish & Ship | Pending |
| POLISH-06 | Phase 5: Polish & Ship | Pending |
| POLISH-07 | Phase 5: Polish & Ship | Pending |
| POLISH-08 | Phase 5: Polish & Ship | Pending |

**Coverage:**
- v1 requirements: 50 total (6 FOUND + 8 LORE + 19 BUILD + 9 ANIM + 8 POLISH)
- Mapped to phases: 50 / 50 (100%)
- Unmapped: 0
- Per-phase counts: Phase 1 = 6, Phase 2 = 8, Phase 3 = 19, Phase 4 = 9, Phase 5 = 8

---
*Requirements defined: 2026-04-29*
*Traceability populated: 2026-04-29 by gsd-roadmapper*
