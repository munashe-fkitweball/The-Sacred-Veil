# CLAUDE.md — The Sacred Veil

This repo is the **Sacred Veil** website — a Symbaroum-homebrew companion site for Munashe's D&D campaign. It's also a GSD-managed project (see `.planning/`).

## Read on entry

Before doing any work in this repo, read in this order:

1. **`.planning/PROJECT.md`** — what we're building, core value, hard constraints, key decisions
2. **`.planning/ROADMAP.md`** — the 5 phases, dependencies, success criteria, project-level constraints
3. **`.planning/REQUIREMENTS.md`** — the 50 v1 requirements with REQ-IDs (FOUND, LORE, BUILD, ANIM, POLISH)
4. **`.planning/codebase/ARCHITECTURE.md`** — how the existing static-wiki engine works (page_configs.js + data_sections + app.js); critical for understanding what the atlas page does and does NOT inherit
5. **`.planning/codebase/CONVENTIONS.md`** — visual tokens, fonts, block types, `[[id:Label]]` link convention
6. **`.planning/codebase/CONCERNS.md`** — known fragilities (cache-bust drift, ID collisions, orphan link refs)

The current milestone is the **Atlas** — a full-bleed scrollable+zoomable SVG atlas of the Kingdom of K'naan, integrated as a new page (`kingdom/atlas.html`).

## Hard rules (load-bearing — do not violate)

These are repeated in `.planning/ROADMAP.md` § "Project-Level Constraints" so every planner inherits them. Surfaced here too because they kill bad work early:

1. **Standalone-cinematic page pattern.** The atlas does NOT inherit `app.js` chrome. Shape is `party/index.html` (inline `<style>`, inline `<script>`, no wiki engine load), NOT `kingdom/places.html`. See `.planning/codebase/CONCERNS.md` § "Two architectures, one repo."
2. **No animation without lore.** Every animation that ships must justify itself in one sentence about the world. Decoration-for-decoration's-sake doesn't ship.
3. **Visual primitives discipline.** Prefer dots, characters/glyphs, dashed lines, simple stroke shapes over rendered/blurred/gradient effects. Smoke is a column of glyphs. Mist is a sparse character field. Embers are small dots. **This isn't a constraint — it IS the aesthetic.**
4. **Hand-authored only.** All work is hand-authored SVG / CSS / JS. No animation libraries (no GSAP, anime.js, Lottie, three.js, Vanta). No build pipeline. No package manager. Match the existing site's discipline.
5. **Lore is geographic source-of-truth.** The user's hand-drawn sketch is rough topology, not canon. Conflicts resolve in favor of lore — Sacred-Veil GitHub repo for content; the Averium Obsidian vault at `/Users/munashe-calebmanyumbu/Documents/Hellig DND Campaign Stuff/2. Averium` for grounding context only — never for content shipped on the public atlas.
6. **Performance ceiling.** Atlas page total weight ≤ 800KB ideal / 1.5MB hard cap. SVG node count ≤ ~5,000 simultaneously rendered (LOD culls aggressively).

## GSD workflow

This project uses GSD (Get Shit Done):

- **Phases** drive the work. Current shape: 5 phases (FOUND → LORE → BUILD → ANIM → POLISH).
- **Mode:** interactive — confirm at gates.
- **Granularity:** coarse.
- **Workflow agents on:** research-before-each-phase, plan-checker, verifier.
- **Models:** all GSD agents pinned to **opus** via `.planning/config.json` `model_overrides`.
- **Branching:** `none` — work directly on the current branch.

To start work on the next phase: `/gsd-discuss-phase <N>` then `/gsd-plan-phase <N>` then `/gsd-execute-phase <N>`.

To check progress: `/gsd-progress`.

## User context

- **Munashe** is the user. Solo, not writing code himself for this milestone — every line of SVG/CSS/JS is Claude-authored.
- He values deep stories + cinematic feel. Story craft AND technical craft both non-negotiable.
- No AI-generated visuals/music/prose ships. Hand-authored SVG (Claude code) is fine; generative-image output is not.
- For creative deliverables: ALWAYS ask discovery questions first. Reading files ≠ asking him.
- When he doesn't yet know what he wants, prefer routing to a structured GSD flow (new-project, discuss-phase, spec-phase) over ad-hoc open-ended discovery questions.
