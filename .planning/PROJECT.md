# The Sacred Veil — Atlas

## What This Is

A new full-bleed scrollable + zoomable SVG atlas of the Kingdom of K'naan, integrated as a page on the existing **Sacred Veil** Symbaroum-homebrew companion site. The whole webpage *is* the SVG — readers pan and zoom around an absurdly detailed, narrative-saturated map, with hover tooltips and clicks that bridge them into the existing wiki lore.

The audience is the people the rest of the site already serves: the GM (Munashe), his players, and anyone curious who wanders in. The wow target is craft surprise — *"wait, holy crap, all of this is just SVG?"*

## Core Value

**Make the player feel they're seeing a *crafted* artifact, not a rendered one.** Every animation, every zoom level, every label placement either earns the "all of this is SVG?" reaction — or it doesn't ship.

## Requirements

### Validated

<!-- Inferred from the existing Sacred-Veil site, which is shipped and live. -->

- ✓ Static, no-build, vanilla HTML/CSS/JS site deployable to GitHub Pages — existing
- ✓ Page-config-driven nav and chrome via `page_configs.js` (`window.SV_HUBS` / `window.SV_PAGES`) — existing
- ✓ Section data registry with `[[id:Label]]` internal-link convention rendered by `tooltips.js` + `app.js` — existing
- ✓ Established visual language: `#030106` background, gold tokens (`#d8c99b`, `#f2d98c`, `--gold-dim`), occasional violet glow, fonts Cinzel + Cormorant Garamond + UnifrakturCook — existing
- ✓ Standalone-cinematic page pattern (precedent: `party/index.html`, `campaign/hook.html`, home `index.html`) for pages that need to escape the wiki chrome — existing

### Active

<!-- Hypotheses for the Atlas milestone. -->

- [ ] **ATLAS-01**: A new page lives at `kingdom/atlas.html`, registered in `page_configs.js` under hub II (Kingdom), and linked from `kingdom/index.html` and `kingdom/geography.html`. Site-nav users can find it.
- [ ] **ATLAS-02**: The page is the SVG — full-bleed, no chrome competing with the map. Standalone-cinematic pattern (does not inherit `app.js` chrome).
- [ ] **ATLAS-03**: A reader can pan the map smoothly with mouse drag and scroll-wheel. Implementation: SVG `viewBox` manipulation + a small inline JS pan/zoom helper. **No third-party animation/zoom libraries** unless a clear case is made.
- [ ] **ATLAS-04**: A reader can zoom in and out smoothly. Multiple Levels of Detail (LOD) reveal: at low zoom, regions + 6 major places + main roads are legible; at deeper zoom, district silhouettes, lesser holdings, and notable buildings appear without overcrowding lower zoom.
- [ ] **ATLAS-05**: Every named location on the map has a hover tooltip and a clickable link that navigates to the existing wiki page or section. Implementation reuses or follows the `[[id:Label]]` pattern wherever practical so links never rot independently of section data.
- [ ] **ATLAS-06**: All four regions present and visually distinct: **Silt-Mere** (NW inland sea + silt-flats), **Eastern Massif** (E mountain wall), **Gorse-Barrens** (mire-choked moor between the two), **Great Forests** (two large masses).
- [ ] **ATLAS-07**: All six major places present, with district-level silhouette where lore supports it: **Ash-Kadesh** (Crown-Shelf / Ledger-Ward / The Mourn districts), **Har-Moloch** (Iron Teeth slag-stack silhouette), **Bet-Seraphim** (abbey-refinery + The Drift), **Gath-Mere** (port + Tide-Reach Wharf shore strip + Silveldt manor), **Raven-Garron** (Morbray keep + Dead Rowan), **Amarsgate** (mining town + Keep Amar above).
- [ ] **ATLAS-08**: Lesser holdings present where they sit inside one of the six places, named and clickable: Anvilhold, Third Furnace, Great Forge (in Har-Moloch); Hollow Sun, Thorne Archive, Iron Gavel, Argent Academy, Golden Weights, The Spike (in Ash-Kadesh); The Rot (Grendel's keep, in Grendel's Reach). Plus **Grendel's Reach** itself as a stilt-village in the southern silt-flats.
- [ ] **ATLAS-09**: Campaign-state encoding: **Amarsgate is freshly burnt** (the campaign opens with it on fire). The map reflects this in its current state — not active fire, post-burn smolder.
- [ ] **ATLAS-10**: Mystery encoding: **The Drowned Moot** is marked with deliberate "location unknown" treatment — a fixed-width `[LOCATION UNKNOWN]` annotation appears on hover instead of a normal tooltip.
- [ ] **ATLAS-11**: Compass and a one-line legend present on the map at all zoom levels, in keeping with the cartographic conventions the user's hand-drawn sketch established (solid line = main road, dashed = unmaintained).
- [ ] **ATLAS-12**: A short cinematic intro plays once on first visit per session: a soft fade-in of the kingdom from black, ~1–1.5s, skippable, suppressed on subsequent visits via `sessionStorage`. **No camera pull-back** — the loud cinematic interpretation. Soft fade only.
- [ ] **ATLAS-13**: Ambient micro-interactions ship as part of v1, narrative-justified per the **"no animation without lore"** rule (see Constraints):
  - Capital star at Ash-Kadesh: gentle breathing, echoing the homepage sigil — *because the city is the kingdom's heart*
  - Embers over Amarsgate: occasional warm-gold dot rising and fading — *because the campaign opens with it burning*
  - Falling leaf at Raven-Garron's Dead Rowan: a single typographic glyph drifting down a hand-authored path once every 60–90s — *because the Rowan is the Morbray memorial*
  - White-Blind: sparse static character field over the Gorse-Barrens — *because the kingdom's signature weather lives here*
  - Smoke from Har-Moloch's Iron Teeth: vertical column of grey glyphs at the chimney axes, drifting upward slowly — *because the forge-city is described as under "permanent grey haze"*
- [ ] **ATLAS-14**: Hover affordances ship as part of v1: marker glow + label nudge on every named location; trade-route highlight when hovering Ash-Kadesh (the routes literally redraw via dash-array animation, briefly).
- [ ] **ATLAS-15**: A vignette tightens at deep zoom to focus attention; LOD labels fade in/out at zoom band boundaries (no popping).
- [ ] **ATLAS-16**: Visual register is resolved via a sketch round at the start of phase 1 (3–4 stylistic variants previewed in `/gsd-sketch`), with the **schematic / GM planning-room with typographic primitives** register flagged as the leading hypothesis — but free to be killed if a sketch lands harder.

### Out of Scope

<!-- Explicit boundaries with reasoning to prevent re-adding. -->

- **GM-only overlay layer** — the Sacred-Veil GitHub repo is the boundary of player-knowable lore. The Averium Obsidian vault has GM-only material that must NOT leak onto the public atlas. One public atlas, no toggle, no GM/player split.
- **Touch / mobile pan-zoom** — desktop-first for v1. Mobile gets a graceful "best viewed on a wider screen" notice or a static fallback. Touch zoom + pan UX is its own design problem; deferred.
- **Zoom-out beyond K'naan to wider Averium** — the world is bigger than K'naan, but the campaign and the existing wiki are scoped to K'naan. Wider Averium is a v2 idea at best.
- **Fog-of-war / discovered-vs-undiscovered toggle** — the wiki publishes everything openly; the atlas matches that openness. The Drowned Moot's "location unknown" is *lore*, not a UI state.
- **Dynamic / data-driven map (sessions, NPC positions, in-progress quest pins)** — the atlas is a static authored artifact, not a campaign tracker. Updates ship via git like the rest of the wiki.
- **Animation libraries (GSAP, anime.js, Lottie, three.js, Vanta)** — pure CSS + native SVG `<animate>` is plenty for the calibrated motion budget. The party page reaching for three.js is a precedent, not a license.
- **Hand-inked Tolkien-pen aesthetic** — Claude can approximate stroke variation but won't match a human cartographer's hand. If the sketch round shows the user wants this register, we'll re-scope honestly rather than ship a half-faked version.
- **High-density organic detail** (hundreds of individual trees inside the Great Forests, individual buildings rendered architecturally inside cities) — patterns and silhouettes only. Authoring 200 unique tree paths is not the wow this map is going for.

## Context

- **Existing site (brownfield):** Mapped in `.planning/codebase/`. Static, no-build, vanilla HTML+CSS+JS, deployed to GitHub Pages. Single source of truth for nav is `page_configs.js`. Section content lives across `data.js` + `data_sections_1.js` + `_2.js` + `_3.js`. The `app.js` renderer reads `window.SV_PAGES` and lays sections into the standard archbar/sidebar/breadcrumb chrome — but **`app.js` does not need to render the atlas**; the atlas follows the standalone-cinematic precedent set by `party/index.html` and `campaign/hook.html`.
- **Setting:** Kingdom of K'naan in the World of Averium. Symbaroum (Free League) is the system; Sacred Veil is the world. Ongoing succession crisis, dying sun-god (Prios), one motto broken, throne empty. "Catching a Falling Knife" tone. The atlas should feel of-a-piece with that dread + craft tone.
- **Authoring constraint:** The user (Munashe) is solo and not writing any code himself for this milestone. Every line of SVG, CSS, and JS is Claude-authored. He evaluates by looking at the result.
- **Concerns from the codebase map worth honoring (or fixing as part of this milestone):**
  - **10 orphan `[[id:Label]]` references** in existing data files. Five are atlas-relevant: `silveldt`, `the-drift`, `the-rot`, `third-furnace`, `tide-reach-wharf`, `anvilhold`. The atlas will link these — they need real section entries (or stub entries) so the atlas links don't rot. Likely a small early task in phase 1.
  - **Cache-bust drift:** every script tag uses `?v=25` and adding the atlas requires another version bump on every page. Easy to forget; needs to be in the executor's checklist.
  - **`page_configs.js` is a single point of failure.** Editing it carelessly breaks every page. The atlas entry must be added cleanly without touching unrelated entries.
- **Lore source-of-truth ranking:**
  1. **The Sacred-Veil GitHub repo** (this codebase) — the public, player-facing canon. Anything that ships on the atlas must be derivable from here.
  2. **The Averium Obsidian vault** at `/Users/munashe-calebmanyumbu/Documents/Hellig DND Campaign Stuff/2. Averium` — deeper GM lore, *for context only*. Must not leak onto the atlas.
  3. **The user's hand-drawn sketch** — establishes approximate spatial relationships and the kingdom's overall shape. The finished atlas does not have to be a faithful trace; it should preserve the sketch's *topology* (Silt-Mere NW, Eastern Massif E, Ash-Kadesh central with Bet-Seraphim adjacent, etc.).

## Constraints

- **Tech stack**: Vanilla HTML/CSS/JS, no build pipeline. Match the existing site's discipline. — *Why:* the site is already shipped this way and the user wants to keep deployment as zero-friction as `git push` to GitHub Pages.
- **Visual language**: Locked palette and fonts (background `#030106`, golds `#d8c99b` / `#f2d98c`, occasional violet, Cinzel + Cormorant Garamond + UnifrakturCook). The atlas may extend this (faint coordinate-grid blue, schematic line-greys, fixed-width annotation font like JetBrains Mono or IBM Plex Mono if needed) but never *contradicts* it. — *Why:* visual coherence with the rest of the site is non-negotiable; the atlas must feel like part of the same artifact.
- **No animation without lore (HARD RULE)**: Every animation that ships must justify itself in one sentence about the world. Decoration-for-decoration's-sake doesn't ship — it's the slop SVG should refuse. — *Why:* protects against the "tacky moving map" failure mode the user explicitly called out.
- **Visual primitives discipline (HARD RULE)**: Prefer geometric primitives — dots, characters/glyphs, dashed lines, simple stroke shapes — over rendered/blurred/gradient effects. The atlas is honest about being SVG and proud of it. Smoke is a column of glyphs. Mist is a sparse character field. Embers are small dots. Falling leaves are typographic marks. **This isn't a constraint — it IS the aesthetic.** — *Why:* the wow north star is medium-vs-effort juxtaposition; faking textures undercuts that wow.
- **Lore boundary**: Atlas content sources from the Sacred-Veil GitHub repo only. The Averium vault is for context, never for content. — *Why:* keeps player canon clean and prevents accidental spoilers.
- **No AI-generated visuals/music/prose ships** (project-wide standard, see `feedback_ai_empowers_humans.md` in user memory). Atlas SVG is hand-authored by Claude (which is human-directed code generation, not generative-image output). — *Why:* the user's broader values commitment for everything Vigil-adjacent.
- **Authoring asymmetry**: User does not write code. Claude must produce work that is high enough quality to ship without an engineer pass. — *Why:* practical reality of the engagement; sets the bar for executor outputs.
- **Performance ceiling**: Atlas page total weight (HTML + inline SVG + inline CSS + inline JS) ≤ 800KB ideal, 1.5MB hard cap. SVG node count ≤ ~5,000 simultaneously rendered (LOD culls aggressively). — *Why:* GitHub Pages serves it cold; the existing site is admirably small and the atlas shouldn't be the page that breaks that discipline.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Atlas lives at `kingdom/atlas.html` under hub II (Kingdom) | Natural taxonomic home: it's a kingdom-level artifact, not a campaign- or faith-level one | — Pending |
| Standalone-cinematic page pattern (does not inherit `app.js` chrome) | The atlas IS the page; standard wiki chrome would compete with the map | — Pending |
| Pure SVG + CSS + tiny inline JS for pan/zoom; no third-party libs | Existing site discipline is admirably lean; pan/zoom is a 50-line problem, not a library | — Pending |
| Reuse `[[id:Label]]` + tooltips.js convention for links and tooltips | Existing readers already know the pattern; future lore edits update both wiki and atlas links uniformly | — Pending |
| Visual register resolved via sketch round at start of phase 1 | User cannot pick visual register from text descriptions alone; sketch lets him compare 3–4 directions side-by-side | — Pending |
| **Schematic / GM planning-room with typographic primitives** flagged as leading register hypothesis | Aligns with the user's "back-end view but polished" original framing AND with the "visual primitives discipline" hard rule that emerged in discovery | — Pending |
| Detail scope: Level 2 baseline + Level 3 selectively for ~6–8 marquee landmarks | Honest match to Claude's SVG authoring capability without over-promising; keeps scope shippable | — Pending |
| Soft fade-in cinematic intro instead of camera pull-back | Fade is humbler, fits SVG-as-craft; pull-back risks reading as loud / try-hard | — Pending |
| Fix the 5 atlas-relevant orphan `[[id:Label]]` references (`silveldt`, `the-drift`, `the-rot`, `third-furnace`, `tide-reach-wharf`, `anvilhold`) as part of phase 1 | Atlas links to these locations; without real targets, the atlas ships broken on day one. Cheap fix, big payoff. | — Pending |
| Cache-bust to `?v=26` site-wide when shipping atlas | Adding a section file or modifying `app.js` requires bumping every HTML's `?v=` query string; current is `?v=25` | — Pending |
| **4-phase shape: Foundations & Visual Direction → Build (static) → Animations → Polish & Ship** | User's explicit instinct: each phase boundary should produce something testable on its own. Locking "the static map looks amazing" *before* layering any motion lets him evaluate the foundation cleanly and decide whether the calibrated animation list is right or needs further trimming. | — Pending |
| **Opus on every GSD agent** (config: `model_profile: "quality"` + `model_overrides` pins every agent including executor / verifier / checkers / auditors to opus) | Craft-as-deliverable project. User explicitly chose to pay higher token cost for max model quality across the board, not just the Quality-profile defaults. Revisit if cost becomes a concern. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-29 after initialization*
