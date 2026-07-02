# Archive — SVG Attempt (2026-04-30)

The first run at Phase 1 was scoped as a **pure SVG** atlas. After the
first sketch round (7 SVGs at varying registers) the user clarified that
they had actually wanted **ANSI / Unicode / box-drawing ASCII art** the
entire time — the word "SVG" in the original framing was a
misunderstanding, not the actual intent.

The whole project pivoted on 2026-05-11 to an ASCII/Unicode atlas with
"functional verisimilitude" as the wow north star (accuracy, usefulness,
hover tooltips, epic cinematic size and detail) — replacing the previous
"all of this is just SVG?" medium-as-spectacle bet.

## What's preserved here

- `sketches/01-cartographers-draft.svg` — coord-grid + ruled districts + fixed-width annotations
- `sketches/02-heraldic-blazoned.svg` — single shield, chief/fess/base, jewel-crown capital
- `sketches/03-typographic-labels-are-the-map.svg` — Cinzel wordmarks as districts
- `sketches/04-glyph-terrain.svg` — characters rendered inside an SVG wrapper (closest to the new direction; useful as a starting point for the ASCII round)
- `sketches/05-constellation.svg` — gold-dot star-clusters per district
- `sketches/06-royal-survey.svg` — strict cartographic survey, concentric-circle capital convention
- `sketches/07-geomantic-chart.svg` — radial divinatory wheel, textPath labels
- `sketches/MANIFEST.md` — register menu, iteration log, sketch index

## What carried forward into the ASCII reframing

- The 6 places + 1 capital + 4 regions + roads + Massif edge fragment definition
- The orphan-repair plan (Mechanism A/B) — medium-agnostic, kept
- The codebase intel (`.planning/codebase/`) — unchanged
- The standalone-cinematic page-shell architecture (`party/index.html` shape)
- All project rules (`ask_first`, `lift_dont_embellish`, `ai_empowers_humans`, `no_ai_slop`)
- The hand-drawn topology sketch as the layout source-of-truth
- The 5-phase shape, though Phases 3 and 4 are rewritten for ASCII

## Git reference

Tag `pre-pivot-svg-attempt` marks the last commit before the pivot. Run
`git show pre-pivot-svg-attempt` to see the SVG-era state.
