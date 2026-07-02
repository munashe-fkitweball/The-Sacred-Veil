# Atlas Sketch Round — Visual Register Selection

**Phase:** 01-foundations-and-visual-direction (FOUND-05)
**Started:** 2026-04-30
**Status:** Round 1 — sketches drawn, awaiting user lock-in or iteration request.

## Locked Test Fragment (D-04)

Every sketch renders the same content for apples-to-apples comparison:
- Ash-Kadesh + 3 districts (Crown-Shelf high / Ledger-Ward middle / The Mourn low)
- Purple-star capital marker at the city's center
- A road heading south out of the city
- Foothill edge of the Eastern Massif to the east

## Locked Constraints

- All sketches are **static SVG** (no pan/zoom, no hover, no animation — D-05)
- All sketches stay inside the locked palette + fonts (CONVENTIONS.md § Visual Language Tokens), may EXTEND but never CONTRADICT
- All sketches honor the **visual primitives discipline** (HARD RULE): dots, glyphs, dashed lines, simple stroke shapes — no faked smoke/blur/gradient/raster textures
- Hand-inked Tolkien-pen aesthetic is **out of scope** per PROJECT.md (Claude won't fake it)

## Round 1 Register Menu (proposed — awaiting user approval)

Every register is **player-facing** — an in-world artifact a player encounters, never a GM-tool framing. Every register is described as the SVG primitives it actually contains, not as the analog medium it might evoke. The medium IS honest SVG; the *"all of this is just SVG?"* reaction is the wow north star.

7 visually-distinct registers in this round.

### 01 — Cartographer's draft (revised leading hypothesis)
**In-world framing:** The official kingdom atlas as a working draft. Disciplined, ruled, annotated — the cartographer hasn't quite signed off yet. The player feels like they're reading a document that exists in K'naan, not a UI screen.
**SVG vocabulary:** `<line>` coord-grid wash (very faint, `--gold-faint` or a thin schematic blue), `<polygon>` and `<rect>` for the three district outlines (gold strokes, no fill or muted fill), `<polyline>` for the south road, dashed `<line>` runs along the Massif foothill edge, `<text>` in fixed-width annotation font (JetBrains Mono / similar) for callouts, `<circle>` + `<polygon>` 5-point star for the capital marker (gold body + faint `--purple` halo).
**Why include:** Locked-in leading-hypothesis visual DNA from PROJECT.md, with the GM-tool framing dropped. Most aligned with the visual-primitives discipline hard rule.

### 02 — Heraldic / blazoned
**In-world framing:** A page from K'naan's own armorial — the kingdom rendered as it would describe itself in heraldry. Each district wears a banner; the capital wears a crown.
**SVG vocabulary:** `<rect>` banded shields for each of the three districts (different ordinaries — chief, fess, bend — using only locked palette), `<polygon>` crown-shaped capital marker, a single bold `<line>` for the south road, `<polyline>` chevrons for the Massif edge, `<text>` in Cinzel for district names rendered as banner labels above each shield. Solid fills only — gold-on-dark, never gradient.
**Why include:** Stress-tests #01 from a formal-symbolic direction. Tests whether the kingdom's "succession crisis" tone reads stronger as heraldry than as draft cartography.

### 03 — Typographic / labels-are-the-map
**In-world framing:** A players' atlas where the words *are* the geography. Vignelli subway-map energy applied to a fantasy kingdom. If a place doesn't have a name, it's not on the map.
**SVG vocabulary:** Large `<text>` wordmarks (Cinzel uppercase, UnifrakturCook for hierarchy) positioned as district shapes — the type fills the district silhouette. Thin `<line>` connectors for roads between named nodes. Foothills as a stacked column of `^` `<text>` glyphs along an axis. Capital as a small `<polygon>` star sitting between the wordmarks.
**Why include:** Pushes the typographic-primitive discipline to its limit — opposite extreme from #01's drafted register, same constraint family.

### 04 — Glyph-terrain / character-cartographic
**In-world framing:** A players' atlas seen through pure type — the kingdom rendered as if a scribe had laid out its terrain entirely from the alphabet. Mountains are `^^^`, marshes are `:` and `.`, roads are `——`, crossroads are `+`. The atoms of the map are characters.
**SVG vocabulary:** Almost entirely `<text>` glyphs — `^` columns for the Massif foothills, dot-character grids for terrain texture, `—` and `+` characters for roads and crossings, place names in Cinzel/Cormorant rendered between the glyph fields. Capital as a `<polygon>` star (the one non-text element, deliberately).
**Why include:** Most-honest-about-medium of any register — pure characters and lines. Tests whether ASCII-style cartography reads as craft or as kitsch.

### 05 — Constellation / star-chart
**In-world framing:** The kingdom as a celestial chart — districts as named star-clusters, the capital as the brightest star, roads as constellation-edges connecting bright points. Player feels like they're reading the kingdom from the night sky.
**SVG vocabulary:** Many small `<circle>` gold dots clustered into named groups (one cluster per district, varying density), `<line>` faint connector strokes within and between clusters, `<polygon>` star for the capital (brighter, larger, central), dashed `<line>` for the south road as a constellation-edge, `<text>` in Cormorant Garamond italic for cluster names. Deep `--bg-deep` field; occasional `--purple` halo around the capital.
**Why include:** Genuinely different visual world from the other four. Tests whether the lore's "fading sun-god" theme reads better as a sky than as a drafted document or armorial.

### 06 — Royal Survey (strict / professional / accurate)
**In-world framing:** The Crown's commissioned cartographic survey of K'naan — the most measured, most accurate rendering the kingdom owns. No romance. Designed for navigation and administration, not for ceremony. Player-facing as *"this is the working reference; every other map is interpretation."*
**SVG vocabulary:** Precise 1px gold `<polygon>` district boundaries (no fills or restrained `<rect>` density patterns for hierarchy). Cartographic-standard symbology: capital as a `<circle>` with an inscribed concentric `<circle>` (international "national capital" convention), other markers as plain circles. `<text>` labels in small restrained Cinzel uppercase. A `<line>` scale bar in the corner with tick marks (`0   5   10 leagues`) and a `<polygon>` north arrow. Foothills as evenly-spaced contour `<polyline>` runs at consistent intervals (proper topographic convention). Bordered `<rect>` map frame with `<text>` dimension callouts in fixed-width annotation font. **No purple halos, no flourishes** — even the capital marker uses cartographic-standard symbology, not the project's signature purple-star treatment.
**Why include:** Stress-tests every other register from the opposite pole — does the kingdom read stronger when *stripped of romance entirely*? Also a useful baseline: if a richer register can't beat the sober survey on craft surprise, we ship the survey. **Note:** this register deliberately bends one project default — the purple-star capital marker becomes a cartographic dot. If chosen, the project's capital-marker convention gets revisited for the full atlas.

### 07 — Geomantic chart / divinatory wheel
**In-world framing:** A divinatory map of K'naan — the kingdom rendered as the casting-wheel of an in-world geomancer or myth-priest of the fading sun-god. The land is read as a chart of fate; districts sit on a ringed wheel, the capital is the figure-of-state at the centre being cast about. The player feels like they've found something a witch or seer authored.
**SVG vocabulary:** Concentric `<circle>` rings (outer / middle / inner) divided by `<line>` radial spokes into named segments. Districts and outlying places live on the rim as named segments; outer ring carries the cardinal directions and major roads; middle ring carries the districts; inner ring is empty space framing the capital. Capital as a `<polygon>` 5-point star at dead centre with a `<circle>` `--purple` halo. South road as a `<line>` radial spoke escaping the wheel southward. Massif edge as a dense arc of small `<polygon>` triangle marks along one rim segment. `<text>` labels are radial — Cormorant Garamond italic on curved baselines via `<textPath>` along the ring `<circle>`s.
**Why include:** Genuinely different visual world from the other six — none use radial composition. Tests whether the lore's mystical / fading-sun-god / succession-crisis weight reads stronger as a divinatory artifact than as a map. Maps the locked palette elegantly (gold radials on `--bg-deep`, `--purple` for the centre halo).

(User may request additional registers, drop registers, or pivot the menu before any sketch is drawn.)

## Sketches

### Sketch 01 — Cartographer's Draft
- **File:** `01-cartographers-draft.svg`
- **Register:** Cartographer's draft (revised leading hypothesis)
- **viewBox:** `0 0 1600 1000`
- **One-line summary:** A working draft of the kingdom's atlas — faint coord-grid wash, ruled district outlines, fixed-width annotations with leader lines, scale bar + north arrow + sheet header. Disciplined, restrained, unfinished by design. *(Extension token used: schematic-blue rgba(120,150,200,0.10) for grid wash, documented inline in the SVG.)*

### Sketch 02 — Heraldic / Blazoned
- **File:** `02-heraldic-blazoned.svg`
- **Register:** Heraldic / blazoned
- **viewBox:** `0 0 1600 1000`
- **One-line summary:** A page from K'naan's own armorial — Ash-Kadesh as a single shield divided into chief / fess / base for the three districts (crown charges, scales, and a single tear), banner above with the city name, jewel-crown housing the purple-star capital marker, heraldic chevrons stacked for the Eastern Massif, and a vertical pale descending for the south road.

### Sketch 03 — Typographic / Labels-Are-The-Map
- **File:** `03-typographic-labels-are-the-map.svg`
- **Register:** Typographic / labels-are-the-map
- **viewBox:** `0 0 1600 1000`
- **One-line summary:** The kingdom told as a text composition — district names as huge Cinzel uppercase wordmarks stacked vertically (Crown-Shelf brightest, The Mourn dimmest), thin dashed connectors implying geometry, the purple-star capital marker tucked beside Ledger-Ward, a column of `^` glyphs for the Massif, an `[WEST · UNNAMED]` mark on the empty side. Vignelli energy, taken seriously.

### Sketch 04 — Glyph-Terrain / Character-Cartographic
- **File:** `04-glyph-terrain.svg`
- **Register:** Glyph-terrain / character-cartographic
- **viewBox:** `0 0 1600 1000`
- **One-line summary:** The kingdom rendered almost entirely as type characters — Crown-Shelf as `/` and `#` blocks (roof + stone), Ledger-Ward as `=` and `|` ledger-bands, The Mourn as sparse `.` and `:` (decay), the Eastern Massif as a dense field of `^`, the south road as `|` columns descending into `↓`. The capital marker is the lone polygon star — deliberately the only non-text element. Includes a glyph legend.

### Sketch 05 — Constellation / Star-Chart
- **File:** `05-constellation.svg`
- **Register:** Constellation / star-chart
- **viewBox:** `0 0 1600 1000`
- **One-line summary:** The kingdom as a celestial chart — three named star-clusters per district (Crown-Shelf as a high arc, Ledger-Ward as a dense administrative grid, The Mourn as a thinner trailing field), the capital as the brightest gold star at the centre with a double `--purple` halo, the south road as a column of small dots, the Eastern Massif as a chain of brighter dots along the east arc. Outer celestial ring with N / E / S / W ticks and sparse decorative star-field.

### Sketch 06 — Royal Survey
- **File:** `06-royal-survey.svg`
- **Register:** Royal Survey (strict / professional / accurate)
- **viewBox:** `0 0 1600 1000`
- **One-line summary:** The Crown's commissioned cartographic survey — bordered double-line frame with degree tick marks, district boundaries as thin gold polygons with cartographic-standard hatch / grid / stipple density patterns, contour-line foothills at consistent 50m intervals with spot-height annotations, mile-post marks along the surveyed road, kilometre-banded scale bar, restrained Cinzel labels, a small legend with cartographic symbology. **Capital marker uses concentric-circle convention (NO purple-star)** — register's deliberate divergence from project default.

### Sketch 07 — Geomantic Chart / Divinatory Wheel
- **File:** `07-geomantic-chart.svg`
- **Register:** Geomantic chart / divinatory wheel
- **viewBox:** `0 0 1000 1000` (square — radial composition warrants it)
- **One-line summary:** The kingdom as a casting-wheel — five concentric rings on `--bg-deep`, twelve radial spokes dividing them into segments, district names on curved baselines via `<textPath>` (Crown-Shelf on the upper rim, The Mourn on the lower, Ledger-Ward bracketing east-west), the Eastern Massif as a dense triangle-arc on the eastern rim, the south road as a single radial spoke escaping the wheel southward with mile-tick marks, four geomantic dot-figures at the cardinals (Populus N / Caput E / Via S / Cauda W) inside the inner ring, the capital as a five-point gold star at dead centre with a double `--purple` halo.

## Iteration Log

- **Round 1 v1:** 2026-04-30 — register menu drafted; awaiting user review.
- **Round 1 v2:** 2026-04-30 — user corrections applied before any sketch was drawn: (1) all registers must be player-facing, never framed as a GM tool — register #01 reframed from "GM planning-room" to "cartographer's draft" (visual DNA preserved, in-world framing fixed); (2) all registers must be described in terms of the SVG primitives they contain, not as analog mediums — registers #02 (was "illuminated-manuscript"), #04 (was "pen-and-ink"), and the others rewritten as in-world framing + SVG vocabulary instead of medium-imitation. Visual-primitives discipline strengthened across the board. Awaiting user review.
- **Round 1 v3:** 2026-04-30 — user expanded the menu by 2 (5 → 7 registers): added #06 Royal Survey (strict / professional / accurate cartographic baseline — note: deliberately bends the project's purple-star capital-marker default for cartographic-standard symbology), and #07 Geomantic chart (Claude's pick, radial composition, divinatory in-world framing). Approved by user.
- **Round 1 sketches drawn:** 2026-05-02 — 7 SVGs at `.planning/sketches/0[1-7]-*.svg`. Verify gate passed (viewBox present on all; no `<animate>` / `<script>` / `<image>` / `<linearGradient>` / `<radialGradient>` / `<filter>` / `filter=` patterns — all visual-primitives discipline holds). File sizes 4–11KB each, well under the ~80KB soft cap. Awaiting user review against the D-07 rubric.

## Lock-In

(Once the user picks a winner, this section gets a `**Chosen register:** <name>` marker and a one-line user-quote rationale. Until then, this stays empty.)
