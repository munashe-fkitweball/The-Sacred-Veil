# Codebase Structure

**Analysis Date:** 2026-04-29

## Directory Layout

```
The-Sacred-Veil/
├── index.html                  # Special inline-CSS home page (sigil + 8 nav tiles)
├── app.js                      # The wiki renderer (~650 lines)
├── style.css                   # All visual rules for the wiki chrome
├── data.js                     # SV_DATA: meta + entities[] (auto-link aliases)
├── data_sections_1.js          # SV_SECTIONS: intro, magic, houses sections
├── data_sections_2.js          # SV_SECTIONS_2: religion, angels, places, NPCs
├── data_sections_3.js          # SV_SECTIONS_3: hub overviews, index intros
├── tooltips.js                 # SV_TOOLTIPS: short hover summaries per entity
├── page_configs.js             # SV_HUBS + SV_PAGES — the page manifest
│
├── glossary.html               # Wiki shell — glossary page
├── gm.html                     # GM gate (password-protected, special)
├── rules.html                  # Wiki shell — Hub VII (Homebrew Rules)
├── party.html                  # LEGACY shell at root (v=15) — superseded by party/index.html
│
├── campaign/                   # Hub I
│   ├── index.html              # Wiki shell — campaign hub landing
│   └── hook.html               # Standalone cinematic (audio, embers, smoke; ~800 lines)
│
├── kingdom/                    # Hub II
│   ├── index.html              # Wiki shell — kingdom hub landing
│   ├── geography.html          # Wiki shell — sections: silt-mere, eastern-massif, …
│   ├── peoples.html            # Wiki shell — sections: ambrians, fringe-folk
│   ├── outcasts.html           # Wiki shell — sections: ogres, goblins, changelings
│   ├── places.html             # Wiki shell — sections: ash-kadesh, har-moloch, …
│   ├── minor-places.html       # Wiki shell — sections: hollow-sun, thorne-archive, …
│   └── people.html             # Wiki shell — grouped sidebar (House Jannin, Crown, …)
│
├── faith/                      # Hub III
│   ├── index.html              # Wiki shell — faith hub landing
│   ├── orthodoxy.html
│   ├── doctrine.html
│   ├── hierarchy.html
│   ├── children.html
│   ├── angels.html
│   └── heralds-of-the-ash.html
│
├── magic/                      # Hub IV
│   ├── index.html
│   ├── seraphs-marrow.html
│   ├── traditions.html
│   └── corruption.html
│
├── houses/                     # Hub V
│   ├── index.html
│   ├── chancel.html
│   ├── grendel.html
│   ├── jannin.html
│   ├── kaelen.html
│   ├── morbray.html
│   ├── thorne.html
│   ├── valerius.html
│   └── vane.html
│
├── guilds/                     # Hub VI
│   ├── index.html
│   ├── guilds.html
│   ├── crime.html
│   └── law.html
│
├── party/                      # Hub VIII
│   └── index.html              # FULLY STANDALONE cinematic (Vanta fog + scroll stages)
│
├── assets/
│   ├── sigil.png               # Site sigil — used by home page + every wiki header
│   ├── social-preview.png      # OG card image (referenced from every shell's <meta>)
│   ├── social-hook.png         # OG card image specific to campaign/hook
│   ├── art/
│   │   ├── eastern-massif.webp
│   │   ├── gorse-barrens.webp
│   │   ├── hook-scene-the-fall.jpg
│   │   ├── silt-mere.webp
│   │   └── party/
│   │       ├── arthur.webp
│   │       ├── brandon.webp
│   │       └── gawain.webp
│   └── audio/
│       ├── hook-ambience.mp3
│       └── hook-music.mp3
│
└── .planning/
    └── codebase/               # This directory — codebase maps for GSD planning
```

## Directory Purposes

**Project root (flat):**
- Purpose: All shared JS, the global stylesheet, and the standalone HTML files (home, glossary, rules, gm, legacy party) live here.
- Contains: Shared engine + data files + root-level shells.
- Key files: `app.js`, `style.css`, `page_configs.js`, `data.js`, `data_sections_1.js`, `data_sections_2.js`, `data_sections_3.js`, `tooltips.js`, `index.html`.

**`campaign/` (Hub I):**
- Purpose: Pages under the "I · Campaign" hub.
- Contains: `index.html` (hub landing), `hook.html` (standalone cinematic).
- Special: `hook.html` is hand-rolled inline; not a wiki shell.

**`kingdom/` (Hub II):**
- Purpose: Pages under the "II · Kingdom" hub. Largest hub by page count (7).
- Contains: hub `index.html` plus `geography`, `peoples`, `outcasts`, `places`, `minor-places`, `people`.
- Key files: `kingdom/people.html` is the only page using grouped sidebar (`groups: [...]` in `page_configs.js:120-132`).

**`faith/` (Hub III):**
- Purpose: Pages under the "III · Faith" hub.
- Contains: 7 wiki shells.

**`magic/` (Hub IV):**
- Purpose: Pages under the "IV · Magic & Corruption" hub.
- Contains: 4 wiki shells.

**`houses/` (Hub V):**
- Purpose: One shell per noble house (8) plus the hub landing.
- Contains: 9 wiki shells, all very thin — each leaf carries one section (`'house-vane'`, `'house-chancel'`, etc.).

**`guilds/` (Hub VI):**
- Purpose: Pages under the "VI · Guilds, Crime & Law" hub.
- Contains: 4 wiki shells.

**`party/` (Hub VIII):**
- Purpose: The Party hub. Currently single-page.
- Contains: `index.html` only — fully standalone (488 lines, Vanta fog, scroll-pinned stages).
- Special: The directory exists to keep the URL `party/index.html` clean and to leave room for future pages, but no page here uses the wiki engine.

**`assets/`:**
- Purpose: All static media.
- Contains: `sigil.png` (site mark), social preview images, `art/` (in-content images including the `party/` portrait subset), `audio/` (only used by `campaign/hook.html`).
- Key files: `sigil.png` is referenced from every shell's `<link rel="icon">` and from the home + wiki headers.

**`.planning/codebase/`:**
- Purpose: GSD planning artifacts (this map).
- Generated: Yes (by `/gsd-map-codebase`).
- Committed: Yes.

## Key File Locations

**Entry Points:**
- `index.html`: Site root. Reads only `SV_HUBS` to render 8 numbered tiles.
- Any `<hub>/index.html` (e.g. `kingdom/index.html`): Hub landing — renders the hub-overview section + a `children-grid` of child pages.
- Any leaf `<hub>/<page>.html`: Wiki shell that renders one or more sections from the data files.
- `party/index.html`: Standalone cinematic — bypasses the engine.
- `campaign/hook.html`: Standalone cinematic — bypasses the engine despite having a `fullHero` config.
- `gm.html`: Standalone GM-only page with its own password gate.

**Configuration:**
- `page_configs.js`: The single manifest. Both `SV_HUBS` (archbar + home tiles) and `SV_PAGES` (every page key → config) live here.

**Core Logic:**
- `app.js`: The renderer + all hydration (parallax, search, tooltips, scroll-spy, mobile TOC, sticky-height tracking, right rail).

**Content:**
- `data.js`: Entity registry for auto-linking.
- `data_sections_1.js`: Sections for intro/hook, magic & corruption, magic-traditions, magic-house-rules.
- `data_sections_2.js`: Sections for religion, angels, races, places, NPCs, regions, environment.
- `data_sections_3.js`: Hub-overview sections + collection-page intros.
- `tooltips.js`: Hover summary per entity id.

**Style:**
- `style.css`: Shared wiki chrome. Standalone pages inline their own styles.

## Naming Conventions

**Files:**
- HTML shells: `kebab-case.html`. Hubs are always named `<hub>/index.html`. Multi-word leaf pages use hyphens: `minor-places.html`, `seraphs-marrow.html`, `heralds-of-the-ash.html`.
- JS modules: `kebab_case.js` is NOT used. The codebase uses `snake_case` for the `data_sections_N.js` series and dotless for everything else (`page_configs.js`, `tooltips.js`, `data.js`, `app.js`, `style.css`).
- Asset files: `kebab-case.webp` / `.jpg` / `.mp3` / `.png`. The `art/` filenames mirror the section id where possible (`silt-mere.webp` ↔ section id `silt-mere`).

**Directories:**
- Hub directories: lowercase, single word matching the hub `key` in `SV_HUBS` (`campaign`, `kingdom`, `faith`, `magic`, `houses`, `guilds`, `party`). The Hub VII (Rules) and Glossary do NOT have directories — they live at root as single-file pages.

**Page keys (in `SV_PAGES`):**
- Hub landing: just the hub key, no slash. E.g. `'kingdom'`, `'faith'`.
- Child pages: `<hub>/<leaf>` matching the file path minus `.html`. E.g. `'kingdom/places'`, `'houses/vane'`, `'campaign/hook'`.
- Root-level wiki pages: just the filename minus `.html`. E.g. `'rules'`, `'glossary'`.

**Section ids:**
- Lowercase hyphen-case: `^[a-z0-9-]+$`. Examples: `silt-mere`, `house-vane`, `seraphs-marrow`, `corruption-house-rules`, `heralds-of-the-ash`.
- The same regex is enforced by the link-resolution regex in `app.js:92`: `/\[\[([a-z0-9-]+):([^\]]+)\]\]/gi`.
- Section ids are GLOBAL — they collide across files at the merge step (`app.js:34-40`), and the first one wins. Treat them as unique across the entire wiki.

**Entity ids:**
- Same convention as section ids. An entity id often matches a section id (so the auto-link resolves to a real anchor), but it doesn't have to — glossary-only entities resolve to `glossary.html#id`.

**Asset references in section data:**
- `image-slot.file` is just the filename; the renderer prepends `assets/art/`. Example: `{ type: 'image-slot', file: 'silt-mere.webp', … }` (`data_sections_2.js:643`).

## Where to Add New Code

**A new wiki page (the common case — 99% of additions):**

Use this path when your page is a normal data-driven wiki page that should match the rest of the wiki visually.

1. **Add a section (or sections) in one of `data_sections_*.js`.** Pick by editorial fit (file 2 is the busiest "places & people"). Each section is `{ id, group?, title, subtitle?, body?, blocks: [...] }`. Use existing block types (`p`, `h3`, `ul`, `table`, `facts`, `defs`, `image-slot`, `cta-link`, `children-grid`).
2. **Add an entry to `window.SV_PAGES` in `page_configs.js`.** The key is the future page path (e.g. `'kingdom/atlas'`). Required: `hub`, `parent`, `href`, `title`, `sections`. Optional: `subtitle`, `hero`, `sigil`, `groups`, `fullHero`.
3. **If the page should appear in the parent hub's sidebar/grid**, add its key to the parent's `children: [...]` array.
4. **Create the shell file** at the path matching `href`. Copy any sibling shell verbatim (e.g. for `kingdom/atlas.html`, copy `kingdom/places.html`) and change ONLY:
   - The `<title>` tag.
   - The OG/Twitter `<meta>` `og:title`, `og:url`, `twitter:title`.
   - The `<script>window.SV_CURRENT_PAGE = '<your key>';</script>` line.
5. **If you add an entity that should auto-link**, add it to `window.SV_DATA.entities` in `data.js` and (optionally) a hover summary to `window.SV_TOOLTIPS` in `tooltips.js`.
6. **Bump `?v=NN`** if you want to invalidate the GitHub Pages cache for visitors.

**For the upcoming Atlas page (`kingdom/atlas.html`):**
- Place: under Hub II (Kingdom) → the new file goes at `kingdom/atlas.html`.
- Page key: `'kingdom/atlas'`.
- Add to `SV_PAGES['kingdom'].children` array (`page_configs.js:62`) so it appears in the kingdom hub's sidebar AND children-grid.
- Add the matching `'kingdom/atlas'` config under the `// II · THE KINGDOM` block (`page_configs.js:50-133`). Set `hub: 'kingdom'`, `parent: 'kingdom'`, `href: 'kingdom/atlas.html'`.
- The hub's children-grid is rendered from the `children-grid` block in the `kingdom-overview` section (`data_sections_3.js:26`) — update that array too so the atlas card appears.
- Decide rendering mode based on what Atlas needs to be:
  - **If a normal map page with prose + an interactive `<svg>` or `<img>`:** Use a normal wiki shell. The map markup goes in a new section's blocks. If `image-slot` and existing blocks aren't enough (e.g. you need clickable hotspots), either compose with HTML strings inside `p` blocks (limited) or add a new block type to `app.js:113-182` and wire matching CSS.
  - **If a full-bleed cinematic map experience:** You have two options. (a) Engine-cinema: set `fullHero: 'atlas-hero.jpg'` in the config and accept the engine's plain cinema layout (full-bleed image + sections below + return-to-parent footer). (b) Full standalone: build `kingdom/atlas.html` like `party/index.html` — own CSS, own JS, own assets — and reduce the `SV_PAGES` entry to a stub. The `standalone: true` flag is documentation only; behavior comes from the file not loading the engine.

**A new hub (rare — would be Hub IX+):**
1. Append to `window.SV_HUBS` in `page_configs.js`. Pick the next Roman numeral.
2. Add the hub landing entry to `SV_PAGES` (with `numeral`, `hero`, `sigil`, `children`).
3. Create `<hub>/index.html` shell.
4. Add a hub-overview section in `data_sections_3.js` keyed by `<hub>-overview` to populate the landing with the children-grid + summary tables.
5. The home page tile (`index.html`) and archbar (`app.js`) will both pick it up automatically because they iterate `SV_HUBS`.

**A new section on an existing page:**
- Add the section object to one of `data_sections_*.js`. Add the new section's id to the page's `sections: [...]` array in `page_configs.js`. Done — no shell change needed.

**A new block type (only when existing types can't compose the layout):**
- Add a `case` to `renderBlocks` in `app.js:115-181`.
- Add matching CSS to `style.css` (sections 7+ for content; new selector for new visuals).
- Document it in this file's "Block types" list (under ARCHITECTURE.md → Key Abstractions → Block).

**A new utility / shared helper:**
- The codebase has no `utils/` directory. Helpers live inline in `app.js`. Add small helpers to the IIFE at `app.js:8-653`. Avoid adding new top-level scripts unless absolutely necessary — every shell would need to load them.

**A new asset:**
- Images in `assets/art/`. If hub-specific, you can subdivide (`assets/art/party/` exists for the party portraits). Audio in `assets/audio/` (currently only used by the hook page). Reference from section data with just the filename (`{ file: 'foo.webp' }`).

## Special Directories

**`.planning/codebase/`:**
- Purpose: Codebase maps consumed by GSD planning commands (this file lives here).
- Generated: Yes (by `/gsd-map-codebase`).
- Committed: Yes.

**`.planning/` (parent):**
- Purpose: GSD planning artifacts more broadly. Currently only contains `codebase/`.
- Committed: Yes.

**`.git/`:**
- Purpose: Git internals.
- Committed: No.

## File Inventory by Type

- **HTML shells (wiki engine):** 30 — all `<hub>/*.html` files, plus root `glossary.html`, `rules.html`, and the legacy `party.html`.
- **HTML standalone (no engine):** 4 — `index.html`, `gm.html`, `party/index.html`, `campaign/hook.html`.
- **JS files:** 7 — `app.js`, `data.js`, `data_sections_1.js`, `data_sections_2.js`, `data_sections_3.js`, `tooltips.js`, `page_configs.js`.
- **CSS files:** 1 — `style.css`. Standalone pages inline their styles.
- **Image assets:** 5 in `assets/` root + 4 in `assets/art/` + 3 in `assets/art/party/`.
- **Audio assets:** 2 in `assets/audio/` (used only by `campaign/hook.html`).

---

*Structure analysis: 2026-04-29*
