# State: The Sacred Veil — Atlas

**Initialized:** 2026-04-29
**Last updated:** 2026-04-29 (after roadmap creation)

## Project Reference

**Core Value**: Make the player feel they're seeing a *crafted* artifact, not a rendered one. Every animation, every zoom level, every label placement either earns the *"all of this is just SVG?"* reaction — or it doesn't ship.

**Current Focus**: Roadmap is created and approved. Ready to plan Phase 1 (Foundations & Visual Direction). The first plan in Phase 1 should be the `/gsd-sketch` round — visual register must lock before page-shell work begins.

**Milestone**: Atlas v1 — a craft-surprise SVG atlas of K'naan integrated as a page on the existing Sacred Veil Symbaroum-homebrew companion site.

## Current Position

- **Phase**: 1 (Foundations & Visual Direction) — not started
- **Plan**: none yet
- **Status**: Roadmap complete; awaiting `/gsd-plan-phase 1`
- **Progress**: ▱▱▱▱▱ 0/5 phases complete

## Performance Metrics

| Metric | Target | Current |
|--------|--------|---------|
| v1 requirements | 50 | 0 complete |
| Page weight (HTML+SVG+CSS+JS) | ≤ 800KB ideal / 1.5MB cap | n/a |
| SVG nodes simultaneously rendered | ≤ ~5,000 | n/a |
| Atlas-relevant orphan `[[id:Label]]` refs | 0 | 6 |
| Site cache-bust query string | `?v=26` (after ship) | `?v=25` |

## Accumulated Context

### Decisions

(See `PROJECT.md` § Key Decisions for the full list. Highlights surfaced here so they're visible at-a-glance during execution.)

- **5-phase shape locked by user**, not derived. Phases are: Foundations & Visual Direction → Lore-Faithful Geography Spec → Build (static) → Animations → Polish & Ship.
- **Lore is geographic source-of-truth, not the user's hand-drawn sketch.** Sketch is rough topology; conflicts resolve in favor of lore (Sacred-Veil repo for content, Averium vault for context only — never for content).
- **Standalone-cinematic page pattern.** Atlas does NOT inherit `app.js` chrome. Shape is `party/index.html`, not `kingdom/places.html`.
- **No third-party libs.** Pure SVG + CSS + tiny inline JS for pan/zoom. No GSAP, anime.js, Lottie, three.js, Vanta.
- **No animation without lore (HARD RULE).** Every animation must justify itself in one sentence about the world.
- **Visual primitives discipline (HARD RULE).** Dots, glyphs, dashed lines, simple stroke shapes — no faked smoke/blur/gradient. The discipline IS the aesthetic.
- **Visual register resolved via `/gsd-sketch` round at start of Phase 1.** Schematic / GM planning-room with typographic primitives is the leading hypothesis but free to be killed if a sketch lands harder.
- **All planning agents pinned to opus** (config: `model_overrides`). Craft-as-deliverable; max model quality across the board.
- **LORE-07 is a HARD GATE.** User explicitly approves `.planning/spec/atlas-geography.md` before Phase 3 begins.

### Open Todos

None yet — these accumulate during plan execution.

### Blockers

None.

### Recent Activity

- 2026-04-29: PROJECT.md and REQUIREMENTS.md initialized (50 v1 reqs).
- 2026-04-29: Codebase mapped (`codebase/ARCHITECTURE.md`, `codebase/CONVENTIONS.md`, `codebase/CONCERNS.md`).
- 2026-04-29: ROADMAP.md created — 5 phases, 100% requirement coverage, dependencies mapped.
- 2026-04-29: STATE.md initialized.

## Session Continuity

**Next action**: `/gsd-plan-phase 1` to plan Foundations & Visual Direction. The first plan in that phase should be the `/gsd-sketch` round (3–4 visual variants for the user to pick from), since the rest of Phase 1 (and all later phases' visual decisions) depends on the chosen register.

**Files to read on session resume**:
1. `.planning/PROJECT.md` — core value, requirements, constraints, key decisions.
2. `.planning/ROADMAP.md` — the 5-phase shape and per-phase success criteria.
3. `.planning/REQUIREMENTS.md` — the 50 v1 requirements with phase mappings (see Traceability table at bottom).
4. `.planning/codebase/ARCHITECTURE.md` + `CONVENTIONS.md` + `CONCERNS.md` — what already exists and what's fragile.
5. This file — current position + accumulated context.

**Watch for**:
- LORE-07 approval gate before Phase 3 starts.
- Cache-bust to `?v=26` happens in Phase 5, not earlier — but Phase 1's `kingdom/atlas.html` shell should ship at `?v=25` if it's wired through `page_configs.js` (so it doesn't pre-empt the Phase 5 sweep).
- Orphan `[[id:Label]]` repairs in Phase 1 (FOUND-06) need real section entries (or deliberate stubs that link to the most-relevant existing section), not just empty placeholders.

---
*State initialized: 2026-04-29*
