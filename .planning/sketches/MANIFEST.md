# Atlas Sketch Round — Visual Register Selection

**Phase:** 01-foundations-and-visual-direction (FOUND-05)
**Started:** 2026-04-30
**Status:** Round 1 (register menu drafted, awaiting user approval before sketches drawn)

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

(Will be filled in once Task 2 produces them.)

## Iteration Log

- **Round 1 v1:** 2026-04-30 — register menu drafted; awaiting user review.
- **Round 1 v2:** 2026-04-30 — user corrections applied before any sketch was drawn: (1) all registers must be player-facing, never framed as a GM tool — register #01 reframed from "GM planning-room" to "cartographer's draft" (visual DNA preserved, in-world framing fixed); (2) all registers must be described in terms of the SVG primitives they contain, not as analog mediums — registers #02 (was "illuminated-manuscript"), #04 (was "pen-and-ink"), and the others rewritten as in-world framing + SVG vocabulary instead of medium-imitation. Visual-primitives discipline strengthened across the board. Awaiting user review.
- **Round 1 v3:** 2026-04-30 — user expanded the menu by 2 (5 → 7 registers): added #06 Royal Survey (strict / professional / accurate cartographic baseline — note: deliberately bends the project's purple-star capital-marker default for cartographic-standard symbology), and #07 Geomantic chart (Claude's pick, radial composition, divinatory in-world framing). Awaiting user review.

## Lock-In

(Once the user picks a winner, this section gets a `**Chosen register:** <name>` marker and a one-line user-quote rationale. Until then, this stays empty.)
