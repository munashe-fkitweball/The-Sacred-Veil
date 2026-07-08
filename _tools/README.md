# _tools — wiki maintenance scripts

Small offline utilities for the Sacred Veil wiki. Run from the repo root.

## `wiki-integrity.js` — link & structure checker
```
node _tools/wiki-integrity.js
```
Evals all data files and verifies: no duplicate section ids, every page's `sections`/`children` resolve, `children-grid` targets exist, every `[[id:label]]` link resolves (entity / glossary / section / page / tooltip), glossary ids have a tooltip + a matching defs anchor, and no alias collisions. Exit 1 + a problem list on failure. (Note: some long-standing legacy quirks are known — see any open cleanup task.)

## `make_tiles.py` — map tile pyramid generator
```
python3 _tools/make_tiles.py
```
Slices the 16383×10923 K'naan map WebP into a Leaflet z/x/y tile pyramid at `map/tiles/{z}/{x}/{y}.webp` (z0–6, 256px, q82). Needs Pillow (`PIL`). Source path + output path are constants at the top — edit them if the master image or target changes. Re-run only when the base map art changes.
