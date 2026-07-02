# Topology Source — Hand-Drawn Reference Map

**Provided by user:** 2026-05-11
**Format:** PNG attached in chat (drop the file at `.planning/reference/topology-sketch.png` when convenient)
**Role:** **Layout source-of-truth** for the atlas. Lore wins on *content*; this sketch wins on *spatial arrangement*. Phase 2 (Lore-Faithful Geography Spec) reconciles the two and the user signs off before any rendering begins.

## What the reference shows

A schematic kingdom layout sketched by hand, with:

### Terrain
- **Silt-Mere** — NW corner, large blue inland sea
- **Silt-flats** — orange wavy lines curling around the SW shore of the Silt-Mere and trailing south
- **The Great Forests** — two green blobs, one centre-west, one larger in the SW corner
- **Eastern Massif** — brown wavy mountain ridge running the entire east edge of the map, top-to-bottom

### Places (red squares unless noted)
- **Gath-Mere** — top-left, port on the Silt-Mere shore
- **Silveldt** — inland from Gath-Mere, central-north (Olenna Kaelen's manor, a Gath-Mere-region holding per the orphan list)
- **Har-Moloch** — NE, west of the Eastern Massif foothills
- **Amarsgate** — NE, right against the Eastern Massif (the freshly-burnt one)
- **Ash-Kadesh** (capital) — centre, marked with a purple six-point star (NOT a red square — capital marker convention)
- **Bet-Seraphim** — directly east of Ash-Kadesh, very close — abbey-refinery
- **Raven-Garron** — far east, sitting against the Eastern Massif (keep with the Dead Rowan)
- **Grendel's Reach** — south of centre, stilt-village in the silt-flats

### Roads
- **Solid black line** = main road
- **Dashed black line** = unmaintained road
- The road network connects: Gath-Mere → (junction) → Ash-Kadesh; Ash-Kadesh → Bet-Seraphim → Raven-Garron; Ash-Kadesh → Har-Moloch → Amarsgate (NE branch); Ash-Kadesh → south through forests → Grendel's Reach; various secondary connections including a dashed Bet-Seraphim → Raven-Garron route (the dotted-purple one near Ash-Kadesh suggests an unmaintained road around the capital outskirts)

### Annotations on the sketch
- Compass (gold cross) at the bottom-right
- Legend (gold box) bottom-right: "- - - is unmaintained road / solid line is main road"

## What's deliberately approximate

- **Distances** — the sketch is not to scale. Phase 2 produces a scale chart based on travel-time citations in the lore (e.g. "Bet-Seraphim is three days' ride from Ash-Kadesh") and the build-phase atlas places things at consistent scale, not at sketch positions.
- **Exact shapes of terrain** — the Silt-Mere blob, the forest blobs, the Massif ridge are gestural. The atlas can refine their silhouettes against lore descriptions (e.g. if the Silt-Mere is described as horseshoe-shaped, follow that, not the blob).
- **The Drowned Moot** — not on this sketch. It lives somewhere in the deep Silt-Mere as a *mystery* (encoded as `[LOCATION UNKNOWN]` on hover, not a normal place marker). Phase 2 spec confirms its approximate region.
- **Gorse-Barrens** — REQUIREMENTS.md mentions this as a fourth region ("mire-choked moor between the two"). Not visible on the sketch but should be inferred from the lore as the moor-belt between the Silt-Mere lowlands and the Eastern Massif foothills.
- **Districts inside places** — e.g. Ash-Kadesh's Crown-Shelf / Ledger-Ward / The Mourn — are not visible at this scale; they emerge at deeper zoom.

## What's not negotiable from this sketch

- The **N–S–E–W orientation** of the four regions: Silt-Mere NW, Eastern Massif E, Great Forests W/SW, the central plains around Ash-Kadesh
- The **relative position** of every named place (which is north of which, which is on the coast, etc.) — even if exact distance shifts in the spec
- The **purple-star marker** for the capital (red squares for non-capital places)
- The **solid / dashed** road-type convention
- The **compass + legend** affordances at corner
