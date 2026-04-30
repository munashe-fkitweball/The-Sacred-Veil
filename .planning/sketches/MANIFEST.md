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

5 visually-distinct registers stress-testing the leading hypothesis from genuinely different traditions.

### 01 — Schematic / GM planning-room (the leading hypothesis)
**Tradition:** Polished GM back-room cork-board / wargame planning surface. Typographic primitives, fixed-width annotations, faint coordinate-grid wash.
**Why include:** Locked-in leading hypothesis from PROJECT.md "Key Decisions." Aligns with the "back-end view but polished" original framing AND the visual-primitives discipline hard rule.
**Visual cues:** Faint coordinate-grid blue wash; gold + brown stroke shapes for districts; fixed-width annotation font for labels; capital marker as a purple star with gold halo; foothills as dashed contour lines.

### 02 — Illuminated-manuscript / blackletter cartulary
**Tradition:** Medieval ecclesiastical manuscript map. UnifrakturCook titles already in the site's font stack — leans into the "Catching a Falling Knife" succession-crisis dread.
**Why include:** Stress-tests register #01 from a high-formality, sacred-text direction. Different visual world entirely.
**Visual cues:** Heavy UnifrakturCook display labels; ornamental flourishes drawn as primitive strokes (not blur or gradient); districts as bordered enclosures with hand-shaped (but primitive-stroke) edges; gold leaf simulated only via solid gold fills on crisp shapes, NOT via gradient.

### 03 — Brutalist-typographic / atlas-as-text
**Tradition:** Information-design brutalism. Massimo Vignelli subway-map energy. The map IS its labels.
**Why include:** Stress-tests #01 from the opposite direction — push typographic-primitive discipline to its limit; if a place has no label, it's not on the map.
**Visual cues:** Districts rendered as named blocks of fixed-width text or Cinzel-uppercase wordmarks; roads as solid/dashed straight-line connectors between named nodes; the foothill edge of the Massif as a stack of `^` glyphs along an axis; capital marker still a purple star but rendered tiny against the typographic field.

### 04 — Hand-drawn pen-and-ink (primitive-stroke version)
**Tradition:** Cartographer's pen-and-ink atlas, but rendered with primitive SVG strokes (no faked stroke variation, no inked texture). Honest about the medium.
**Why include:** Stress-tests #01 from a more pictorial, less schematic direction — does the kingdom feel more "real" or just less polished? User decides.
**Visual cues:** District silhouettes as closed paths with hand-shaped (jagged or wavy) edges, all in the same stroke weight; foothills as overlapping `<` chevron primitives; road as a single dashed stroke; capital as the purple star, no halo flourish.

### 05 — Constellation / star-map register
**Tradition:** Celestial atlas. Districts as named star-clusters connected by faint lines; roads as constellation-edges.
**Why include:** Genuinely different visual world. Tests whether the lore's "fading sun-god" theme reads better as a sky than as a planning surface.
**Visual cues:** Districts as clusters of small gold dots with a single named center; the capital marker as a brighter star at the centroid; roads and foothills as dashed connector lines; everything floats on the deep `--bg-deep` field with occasional `--purple` halos.

(User may request additional registers, drop registers, or pivot the menu before any sketch is drawn.)

## Sketches

(Will be filled in once Task 2 produces them.)

## Iteration Log

- **Round 1:** 2026-04-30 — register menu drafted; awaiting user review.

## Lock-In

(Once the user picks a winner, this section gets a `**Chosen register:** <name>` marker and a one-line user-quote rationale. Until then, this stays empty.)
