<!-- refreshed: 2026-04-29 -->
# Architecture

**Analysis Date:** 2026-04-29

## System Overview

```text
┌─────────────────────────────────────────────────────────────────────┐
│                       BROWSER (static, no build)                    │
│                                                                     │
│   index.html             wiki page shell             party/index.html
│   (special home)         (kingdom/places.html, …)    (special standalone)
│   inline CSS,            sets SV_CURRENT_PAGE,       inline CSS + JS,
│   reads SV_HUBS only     loads 7 fixed scripts       no wiki engine
│                                                                     │
└────┬───────────────────────────┬──────────────────────────┬─────────┘
     │                           │                          │
     │ <script src="…">          │ <script src="…">         │ (loads no
     │  (page_configs.js)        │  (data + tooltips +      │   shared JS)
     │                           │   page_configs + app)    │
     ▼                           ▼                          │
┌─────────────────────────────────────────────────────────┐ │
│              REGISTRIES (window globals)                │ │
│  window.SV_HUBS         8-entry archbar manifest        │ │
│  window.SV_PAGES        page_key → page config          │ │
│  window.SV_DATA         { meta, entities[] }            │ │
│  window.SV_SECTIONS     section objects (file 1)        │ │
│  window.SV_SECTIONS_2   section objects (file 2)        │ │
│  window.SV_SECTIONS_3   section objects (file 3)        │ │
│  window.SV_TOOLTIPS     id → { kind, name, text }       │ │
└────────────────┬────────────────────────────────────────┘ │
                 │                                          │
                 ▼                                          │
┌─────────────────────────────────────────────────────────┐ │
│                       app.js (wiki engine)              │ │
│  - reads window.SV_CURRENT_PAGE                         │ │
│  - looks up PAGE = SV_PAGES[key]                        │ │
│  - merges all SV_SECTIONS_* into one corpus             │ │
│  - if PAGE.fullHero → cinematic shell                   │ │
│    else             → standard wiki shell               │ │
│  - replaces document.body.innerHTML wholesale           │ │
│  - hydrates: parallax, search, tooltips, scroll-spy     │ │
└─────────────────────────────────────────────────────────┘ │
                                                            │
                                                            ▼
                                              (party/index.html bypasses
                                               app.js entirely; loads its
                                               own Vanta fog + scroll JS.)
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| Page shell | Set `SV_CURRENT_PAGE`, load 7 scripts in fixed order, render `<noscript>` fallback | `kingdom/places.html`, `houses/vane.html`, `rules.html`, `glossary.html`, etc. |
| Hub manifest | Ordered list of 8 numbered hubs that drive the home tiles and the sticky archbar | `page_configs.js` (`window.SV_HUBS`) |
| Page registry | Per-page config: hub, parent, href, title, subtitle, hero/fullHero/sigil, sections[], children[], groups[] | `page_configs.js` (`window.SV_PAGES`) |
| Entity registry | Auto-link aliases for prose; canonical id → display name + aliases[] | `data.js` (`window.SV_DATA.entities`) |
| Section registry | The actual page content as data: `{ id, group?, title, subtitle?, body?, blocks[] }` | `data_sections_1.js`, `data_sections_2.js`, `data_sections_3.js` |
| Tooltips | Hover-card payload for entity refs | `tooltips.js` (`window.SV_TOOLTIPS`) |
| Renderer | Builds DOM from PAGE config + sections; resolves links; mounts chrome | `app.js` |
| Stylesheet | All visual rules for wiki chrome and block primitives | `style.css` |
| Home page | Sigil + 8 nav tiles; reads only `SV_HUBS`, has its own inline CSS, no chrome | `index.html` |
| Standalone page | Bypasses the wiki engine entirely; ships its own CSS, JS, and assets | `party/index.html` |
| Cinematic page | Wiki page with `fullHero` flag — engine renders a full-bleed hero outside the container | `campaign/hook.html` (config in `page_configs.js`) |
| GM gate | Password-gated GM-only page; shares `style.css` chrome but does NOT set `SV_CURRENT_PAGE` and does NOT load the wiki engine | `gm.html` |

## Pattern Overview

**Overall:** Data-driven static wiki — every wiki page is a near-empty HTML shell that hands off to a single client-side renderer (`app.js`) which reads the page's config from `window.SV_PAGES` and the page's content from `window.SV_SECTIONS_*`, then rewrites `document.body.innerHTML` with chrome + sections. Content is fully separated from layout: there is one renderer, one stylesheet, and one shape of page object.

**Key Characteristics:**
- No build step, no framework, no bundler, no package manager. Plain HTML + CSS + ES2017-class JS, served as static files (GitHub Pages).
- Single source of truth for navigation: `window.SV_HUBS` drives both the home tiles (`index.html`) and the sticky archbar (`app.js → renderArchBar`).
- Single source of truth for content: section objects keyed by `id`. The same section can appear in multiple pages by being listed in their `sections: []`. The first page to claim an id "owns" the anchor (`entityToPage` map in `app.js:27-31`).
- Internal links use a custom `[[id:Display Text]]` micro-syntax resolved at render time. Auto-linking also matches entity aliases anywhere in prose.
- Three escape hatches from the standard chrome: (1) `fullHero` for cinematic-hero wiki pages, (2) `standalone` flag for pages that opt out entirely, (3) inline-CSS pages that never load the engine at all (the home page, the party hub).

## Layers

**Layer 1 — Page shell (HTML on disk):**
- Purpose: Identify which page this is, request the engine + data.
- Location: One `.html` per page. Root for the 7 hubs that don't nest (`rules.html`, `glossary.html`, `gm.html`, `index.html`, `party.html`-legacy); one-deep `<hub>/<page>.html` for everything else.
- Contains: `<head>` with title + favicon + OG meta + `<link rel="stylesheet">`; `<body>` with a `<noscript>` block and 7 `<script>` tags in a strict order.
- Depends on: `style.css`, `data.js`, `data_sections_1.js`, `data_sections_2.js`, `data_sections_3.js`, `tooltips.js`, `page_configs.js`, `app.js` (in that order — each later file may reference earlier globals).
- Used by: The browser. The shell is what the user actually requests; everything else loads from it.

**Layer 2 — Configuration (`page_configs.js`):**
- Purpose: Static manifest of every page in the wiki.
- Location: `page_configs.js`
- Contains: `window.SV_HUBS` (8 entries) and `window.SV_PAGES` (one entry per page key).
- Depends on: nothing.
- Used by: `app.js`, `index.html` (home tiles).

**Layer 3 — Content (`data.js`, `data_sections_*.js`, `tooltips.js`):**
- Purpose: All prose, all entity aliases, all hover summaries, as plain JS object literals.
- Location: `data.js`, `data_sections_1.js`, `data_sections_2.js`, `data_sections_3.js`, `tooltips.js`
- Contains: Section objects keyed by `id`, entity records with aliases, tooltip records.
- Depends on: nothing.
- Used by: `app.js`.

**Layer 4 — Renderer (`app.js`):**
- Purpose: Translate config + content into a hydrated DOM.
- Location: `app.js`
- Contains: rendering functions (`renderBlocks`, `renderSection`, `renderArchBar`, `renderBreadcrumbs`, `renderPeerSidebar`, `renderPageToC`, `renderPageHeader`, `renderCinematicHero`, `renderCinematicFooter`, `render`); link resolution (`linkHref`, `linkHTML`, `renderInline`); plus IIFEs for parallax, sticky-height tracking, right rail, search, tooltips, scroll-spy, anchor-click smoothing, mobile TOC toggle.
- Depends on: all `window.SV_*` globals.
- Used by: every wiki shell (not by `index.html`, not by `party/index.html`, not by `gm.html`).

**Layer 5 — Style (`style.css`):**
- Purpose: All visual rules for the wiki chrome (sticky bars, sidebars, sections, tables, facts, defs, figures, tooltips, search, child-card grid, cinema hero, responsive breakpoints).
- Location: `style.css`
- Used by: every shell that loads it. Standalone pages (`index.html`, `party/index.html`, `campaign/hook.html`, `gm.html`) inline their own CSS instead.

## Data Flow

### Primary Request Path (a normal wiki page, e.g. `kingdom/places.html`)

1. Browser requests `kingdom/places.html` — a 44-line file (`kingdom/places.html:1-44`).
2. Shell sets `window.SV_CURRENT_PAGE = 'kingdom/places'` (`kingdom/places.html:34`).
3. Shell loads scripts in order: `data.js` → `data_sections_1.js` → `data_sections_2.js` → `data_sections_3.js` → `tooltips.js` → `page_configs.js` → `app.js` (`kingdom/places.html:35-41`).
4. `app.js` IIFE starts (`app.js:8`): looks up `PAGE = window.SV_PAGES['kingdom/places']` (`app.js:11-13`). Aborts with a `console.error` if the key is missing.
5. Computes `PAGE_DEPTH` from the number of slashes in `PAGE.href` and builds `TO_ROOT = '../'` × depth so all asset/href references can be made site-relative (`app.js:16-23`).
6. Builds the cross-page link map: walks every entry in `SV_PAGES` and records the first page that claims each section id (`app.js:26-31`). This drives `[[id:Display]]` cross-page resolution.
7. Merges `SV_SECTIONS`, `SV_SECTIONS_2`, `SV_SECTIONS_3` into a single `sectionById` map and slices out only the sections this page owns, in the order listed in `PAGE.sections` (`app.js:34-44`).
8. Builds the auto-link `AUTO_REGEX` from every entity alias in `SV_DATA.entities`, longest-first so multi-word aliases match before their single-word substrings (`app.js:47-59`).
9. Calls `render()` (`app.js:354-405`) which:
   - Decides cinema vs standard layout based on `!!PAGE.fullHero`.
   - Builds the sticky-top `<header>` + archbar (`renderArchBar` iterates `SV_HUBS`).
   - Renders the cinema hero outside the container if cinema, otherwise renders the page header (numeral + title + subtitle + hero figure) inside.
   - Renders breadcrumbs by walking `parent` chain (`renderBreadcrumbs`, `app.js:217-232`).
   - Renders the left aside: peer sidebar (children list for hubs; sibling list under parent for leaves) plus in-page ToC (`renderPeerSidebar`, `renderPageToC`).
   - Renders each section via `renderSection` (`app.js:279-295`), which dispatches each block to a per-`type` branch in `renderBlocks` (`app.js:113-182`).
   - Replaces `document.body.innerHTML` wholesale (`app.js:358-404`).
10. Post-render IIFEs hydrate behavior: parallax for `.sv-parallax` figures (`app.js:414-449`), sticky-top measurement → `--sticky-top-h` CSS var (`app.js:454-466`), right rail of cross-page mentions built from `[data-sv-external="1"]` anchors (`app.js:469-497`), search corpus + UI (`app.js:500-548`), tooltip hover (`app.js:551-586`), scroll-spy active-anchor highlighting (`app.js:589-627`), smooth anchor scrolling (`app.js:630-645`), and mobile TOC toggle (`app.js:648-652`).

### Inline link resolution (`[[id:Display Text]]`)

1. `renderInline(text)` (`app.js:90-110`) is called for every block's text.
2. First pass — explicit refs: regex `/\[\[([a-z0-9-]+):([^\]]+)\]\]/gi` is replaced via `linkHTML(id, display)`.
3. `linkHref(targetId)` (`app.js:68-79`) chooses the destination:
   - If `id` is in the hard-coded `GLOSSARY_IDS` set (`app.js:62-66`) → `glossary.html#id`.
   - Else if the section is on this page (`seen.has(id)`) → `#id` (in-page anchor).
   - Else if `entityToPage.has(id)` → resolve to that page's href + `#id`.
   - Else → `#id` (orphan fallback).
4. Cross-page links get `data-sv-external="1"` so the post-render rail picks them up.
5. Second pass — auto-link: prose is split on tags, and inside text-only chunks (not inside an `<a>`), `AUTO_REGEX` matches any entity alias and wraps the match in a link to its canonical id.

### Cinematic page flow (e.g. `campaign/hook.html` as a wiki page would be)

The Sacred Veil has TWO distinct "cinematic" patterns. Do not confuse them:

1. **Engine-cinematic (`fullHero` flag):** The page is still a wiki page (loads the full script chain) but has `fullHero: '<file>'` in its `SV_PAGES` entry. `app.js` detects this (`app.js:356`) and:
   - Renders `renderCinematicHero()` (`app.js:322-339`) OUTSIDE `.sv-container` so the hero spans full viewport width.
   - Suppresses the standard `renderPageHeader()`.
   - Suppresses the left ToC aside and the right rail (`app.js:385-395`).
   - Adds `sv-container--cinema` and `sv-layout--cinema` classes for CSS overrides.
   - In `renderSection`, suppresses the first section's `<h1>` to avoid duplicating the title that's already in the cinema hero (`app.js:283`).
   - Appends `renderCinematicFooter()` (a "← Return to <parent>" link) under the main content.
   - **Currently configured for:** `campaign/hook` only. The shipped `campaign/hook.html` is a hand-rolled standalone with audio, embers, and parallax, NOT actually rendered by `app.js`. The `fullHero` config exists in `page_configs.js:46` but the live file overrides it.

2. **Fully standalone (no wiki engine at all):** The HTML file does NOT set `SV_CURRENT_PAGE` and does NOT load `app.js`. It ships its own `<style>` block and `<script>` block.
   - `party/index.html` is the canonical example: 488 lines, Vanta fog background, Three.js CDN, scroll-pinned character stages, fade-on-nav.
   - The `'party'` entry in `SV_PAGES` (`page_configs.js:315-322`) carries `standalone: true` — but **`app.js` never reads this flag**. It exists purely as documentation. The page is standalone because the file `party/index.html` chooses not to load the engine.
   - The hub still appears in the archbar of every other page because `SV_HUBS` lists it.
   - `index.html` (the home) and `gm.html` (the GM gate) are also fully standalone in this sense.

### Search

1. `buildSearchCorpus()` (`app.js:500-516`) walks every `SV_PAGES` entry, then every section id within it, and records `{ title, page, hub, anchor }`.
2. Input handler runs a case-insensitive `includes` against section titles, caps at 12 hits (`app.js:521-539`).
3. Press `/` anywhere on the page (outside an input) to focus the search box (`app.js:543-548`).

**State Management:**
- All state is in module-scope closures inside the IIFE in `app.js:8`. No `localStorage` is used by the wiki itself. (`gm.html` uses `localStorage` for its session unlock, separately.)
- Page state is read once at boot from `window.SV_CURRENT_PAGE` and never changes — the renderer rewrites the DOM exactly once.

## Key Abstractions

**Hub:**
- Purpose: One of the 8 numbered top-level sections of the wiki, each represented as a tile on the home page and an entry in the sticky archbar.
- Examples: `{ key: 'kingdom', numeral: 'II', short: 'Kingdom', homeLabel: 'The Kingdom', href: 'kingdom/index.html' }` (`page_configs.js:13-22`).
- Pattern: Ordered list `window.SV_HUBS`. The order IS the numbering. Adding a hub means appending here AND adding the matching `SV_PAGES` entry AND creating the shell file.

**Page:**
- Purpose: A renderable URL — either a hub landing page, a child page under a hub, a standalone, or the glossary.
- Examples: `'kingdom/places'` (`page_configs.js:89-97`), `'houses/vane'` (`page_configs.js:251`), `'campaign/hook'` (`page_configs.js:40-48`).
- Pattern: Object keyed by `page_key` (a slash-separated path that mirrors the file path minus the `.html`). Required: `hub`, `href`, `title`. Optional and meaningful: `parent` (for breadcrumbs + sidebar), `numeral` (hub pages only), `subtitle`, `hero` (standard top-of-page figure), `sigil` (used in child-card grids), `sections` (ordered list of section ids to render), `children` (for hub pages — list of child page keys, drives the children-grid block AND the sidebar), `groups` (for grouped in-page ToC like `kingdom/people`), `fullHero` (engine-cinematic mode), `standalone` (documentation only — does not affect renderer), `childPages` (declared on `kingdom/peoples` and `kingdom/places` but never read by `app.js` — appears to be a planning placeholder).

**Section:**
- Purpose: A top-level `<section>` with its own anchor, title, optional subtitle/body, and an array of blocks. Sections are the unit of content reuse — the same id can appear in multiple pages' `sections[]`.
- Examples: `{ id: 'silt-mere', group: 'Regions & Environment', title: 'The Silt-Mere', subtitle: 'Humongous inland lake', blocks: [...] }` (`data_sections_2.js:637-647`).
- Pattern: Stored in one of three flat arrays (`SV_SECTIONS`, `SV_SECTIONS_2`, `SV_SECTIONS_3`) split for file-size manageability. The split is editorial (file 1 = intro/magic/houses, file 2 = religion/angels/places/NPCs, file 3 = hub overviews). Lookup is by id, not by file.

**Block:**
- Purpose: A typed content primitive inside a section's `blocks[]` array. The `type` field selects a renderer branch.
- Block types currently in use (count from `data_sections_*.js`):
  - `p` (214) — paragraph. `{ type: 'p', text: '…' }`.
  - `h3` (44) — sub-heading inside a section.
  - `facts` (22) — `[label, value]` pairs rendered as a small key/value grid. `{ type: 'facts', items: [['Great temple', 'The Hollow Sun'], ['Head', 'Sun-Speaker Malagant']] }`.
  - `ul` (18) — bulleted list. `{ type: 'ul', items: ['…', '…'] }`.
  - `table` (15) — `{ type: 'table', headers: [...], rows: [[...], ...] }`. Wrapped in `.sv-table-wrap` for horizontal scroll on mobile.
  - `defs` (6) — `[term, definition]` pairs as a `<dl>`.
  - `children-grid` (5) — only used in hub overviews. `{ type: 'children-grid', children: ['kingdom/geography', ...] }`. Renders a card per child page using each child's `sigil` + `title` + `subtitle`.
  - `image-slot` (3) — `{ type: 'image-slot', file: 'silt-mere.webp', alt: '…', cinematic: true, parallaxSpeed?: 0.5, overlay?: '…', caption?: '…' }`. With `cinematic: true`, renders a stacked blurred backdrop + sharp foreground that get parallax-translated by the boot IIFE. `onerror` removes the figure if the asset is missing.
  - `cta-link` (1) — `{ type: 'cta-link', to: 'campaign/hook', kicker: 'Continue to', label: 'The Hook', subtitle: '…' }`. Links straight to a page key (no anchor) so the destination's hero loads from the top.
- Pattern: All blocks are dispatched in `renderBlocks` (`app.js:113-182`). New block types are added by adding a `case` there. Unknown types render as empty string.

**Internal-link micro-syntax (`[[id:Display Text]]`):**
- Purpose: Author-facing inline link that resolves at render time to either a section anchor on the same page, a section anchor on another page, or the glossary.
- Examples: `[[house-vane:House Vane]]`, `[[corruption:Corruption]]`, `[[campaign/hook:the Hook page]]` (page-key form works too because page keys can also be passed to `linkHref` indirectly via `cta-link.to`).
- Pattern: The id MUST be lowercase hyphen-case, `/^[a-z0-9-]+$/`. The display text can be anything except `]`. Resolution is centralised in `linkHref` (`app.js:68-79`).

**Entity auto-link:**
- Purpose: Automatic linking of canonical names and aliases anywhere in prose, without requiring authors to write `[[…]]` for every mention.
- Examples: Writing "House Vane" anywhere in a paragraph automatically links to `#house-vane` because `data.js:20` declares `{ id: 'house-vane', name: 'House Vane', aliases: ['Vane', 'the Architects of War'] }`.
- Pattern: Aliases are sorted longest-first to prevent shadowing ("House Vane" matches before "Vane"). Matching is whole-word (`\b…\b`), case-insensitive. Skipped inside existing `<a>` tags. Code at `app.js:47-110`.

**Glossary-only ids:**
- Purpose: Concept ids that have no full section page — they live ONLY in `glossary.html`.
- Pattern: Hard-coded set in `app.js:62-66`. Any `[[id:…]]` whose id is in this set always routes to `glossary.html#id`. Adding a new glossary-only term means: add an entity in `data.js`, add a section in `data_sections_*.js` with that id and a glossary entry, add the page where it's listed in `sections[]` (the `'glossary'` page in `page_configs.js:325-332`), AND add the id to `GLOSSARY_IDS` in `app.js:62`.

## Entry Points

**Home (`index.html`):**
- Location: `index.html`
- Triggers: User opens the site root.
- Responsibilities: Show sigil + title + 8 numbered nav tiles. Loads ONLY `page_configs.js` (no engine, no content) and uses an inline 12-line `<script>` to render tiles from `SV_HUBS` (`index.html:223-235`). Has its own ~180-line inline `<style>` block — does NOT use `style.css`. Footer corner links to `glossary.html` and `gm.html`.

**Wiki shell (`<hub>/index.html`, `<hub>/<page>.html`, `rules.html`, `glossary.html`):**
- Location: 30+ files. Examples: `kingdom/index.html`, `kingdom/geography.html`, `houses/vane.html`, `rules.html`, `glossary.html`.
- Triggers: User clicks an archbar tile, sidebar link, breadcrumb, in-page ToC link, search result, child-card, or `[[…]]`/auto-link.
- Responsibilities: Set `window.SV_CURRENT_PAGE` to the page key, link `style.css`, load the 7 scripts in order, hand off to `app.js`. The shell itself contains no visible content; everything is generated.

**Cinematic standalone (`party/index.html`):**
- Location: `party/index.html`
- Triggers: User clicks the "VIII · The Party" tile/archbar entry.
- Responsibilities: Render a self-contained scroll-driven character spotlight. Owns its CSS (255 lines inline), owns its JS (118 lines inline + Vanta + Three.js from CDN). Provides a single "← Back to The Sacred Veil" link. **Does NOT load `style.css`, `app.js`, or any of the data files.**

**Cinematic-prose standalone (`campaign/hook.html`):**
- Location: `campaign/hook.html`
- Triggers: User reaches it via the `cta-link` in the introduction section, the campaign hub's children grid, or the archbar/sidebar.
- Responsibilities: Render the opening "the keep burns" cinematic — full-bleed background image, drifting smoke, embers, film grain, ambient + music audio with mute toggle, "press to enter" gate, parallax. ~800 lines, all inline. **Does NOT load the wiki engine.** The `'campaign/hook'` entry in `SV_PAGES` (`page_configs.js:40-48`) carries `fullHero: 'hook-scene-the-fall.jpg'` which would render via the engine cinematic mode if this file were a normal shell — but the live file is hand-rolled and overrides that path entirely.

**GM gate (`gm.html`):**
- Location: `gm.html`
- Triggers: Footer link "GM" on every page (and the home page).
- Responsibilities: Password-gated GM-only notes page. Uses `style.css` for the chrome variables but does NOT load the wiki engine and does NOT set `SV_CURRENT_PAGE`. Independent state and storage logic.

## Architectural Constraints

- **Threading:** Single-threaded browser main loop. All rendering happens in one synchronous `render()` call followed by post-render IIFEs that listen on `scroll`, `resize`, `mouseover`, `keydown`, `click`, `visibilitychange`. Parallax is `requestAnimationFrame`-throttled.
- **Global state:** Heavy reliance on `window.*` globals as the IPC between files (`SV_CURRENT_PAGE`, `SV_HUBS`, `SV_PAGES`, `SV_DATA`, `SV_SECTIONS`, `SV_SECTIONS_2`, `SV_SECTIONS_3`, `SV_TOOLTIPS`). Script load order matters: `app.js` MUST be last, `page_configs.js` and `data*.js`/`tooltips.js` MUST precede it. Every shell hard-codes the same 7-script sequence — drift between shells is a real risk.
- **Cache busting:** Every `<script>` and `<link>` carries a `?v=NN` query string (currently `?v=25` for most files; `party.html` legacy is at `?v=15`). All shells SHOULD bump together.
- **`document.body.innerHTML = …`:** The renderer destroys and rebuilds the entire body. Anything injected before `render()` runs is wiped. The `<noscript>` block is fine because it lives in body but only activates without JS.
- **No build, no transpile:** All JS must run as-is in evergreen browsers. Uses ES2017+ (template literals, classes, `const/let`, arrow functions, `Map`, `Set`, optional chaining is avoided in favor of explicit checks).
- **No router:** Navigation is real page loads. Every page is a separate file. Anchors within a page are real `#id` fragments — `app.js` smooths their scroll but does not intercept routing.
- **Asset pathing:** All asset references in section data are relative to the project root (`assets/art/<file>`). `app.js` rewrites them through `rel()` based on the page's depth so the same data string works from `kingdom/places.html` and `index.html` alike.

## Anti-Patterns

### Adding a page without a `SV_PAGES` entry

**What happens:** A new shell file sets `SV_CURRENT_PAGE = 'foo/bar'` but `page_configs.js` has no `'foo/bar'` key. `app.js:13` logs `console.error('No SV_PAGES entry for', PAGE_KEY)` and aborts. The user sees a blank `<body>` (the `<noscript>` is hidden because JS ran).

**Why it's wrong:** The renderer cannot proceed without a config. There is no graceful fallback.

**Do this instead:** Always create the `SV_PAGES` entry FIRST and verify the page key matches the file's `SV_CURRENT_PAGE` exactly.

### Inventing a new block type without updating `app.js`

**What happens:** Author adds `{ type: 'callout', text: '…' }` to a section. `renderBlocks` (`app.js:115-181`) hits the `default: return ''` branch and the block silently disappears.

**Why it's wrong:** Block types are not extensible from data — every type needs a matching `case` in the switch.

**Do this instead:** Either compose the effect from existing types (`p` + `ul` + `facts`) or add the new branch to `renderBlocks` AND any matching CSS to `style.css`.

### Putting a new "cinematic" page in `page_configs.js` and expecting visual parity with `campaign/hook.html`

**What happens:** Author adds `fullHero: 'something.jpg'` and creates a normal shell. The result is the engine's cinema layout from `app.js:322-351`: a full-bleed image with title overlay, breadcrumbs above, sections below, return-to-parent footer. **No audio, no embers, no smoke, no enter-gate, no parallax background, no fade-on-nav.**

**Why it's wrong:** The shipped `campaign/hook.html` is hand-rolled inline HTML — it predates or supersedes the `fullHero` engine path. Its visual richness lives in ~800 lines of inline CSS and JS, not in the engine.

**Do this instead:** Decide explicitly: (a) "I want a cinematic-but-data-driven wiki page" → use `fullHero` and accept the engine's plainer cinema layout; (b) "I want full creative control" → ship a fully standalone HTML file like `party/index.html` or `campaign/hook.html` with no engine load.

### Trusting `standalone: true` to do anything

**What happens:** Setting `standalone: true` in a `SV_PAGES` entry has no effect on `app.js`. `grep` for `standalone` in `app.js` returns zero matches.

**Why it's wrong:** The flag is documentation, not behavior. The actual standalone behavior of `party/index.html` comes from the file simply not loading `app.js`.

**Do this instead:** If a page must be standalone, build the file standalone and treat the `SV_PAGES` entry as a stub so the archbar/breadcrumbs/search corpus still know about it. Keep the `standalone: true` flag in the config for future readers, but understand it is a comment.

### Reusing a section id across pages without intending the link to point to the first one

**What happens:** Two pages list the same section id in their `sections[]`. `entityToPage` (`app.js:26-31`) records only the FIRST page seen. All cross-page `[[id:…]]` links to that id route to the first page.

**Why it's wrong:** The "second" page becomes unreachable by id-based links from elsewhere in the wiki — only by direct URL or sidebar.

**Do this instead:** Treat section ids as globally unique. If you need the same content in two places, either keep one canonical home and link to it, or create a separate id with its own content.

### Hard-coding asset paths in section data

**What happens:** Writing `{ type: 'image-slot', file: '../assets/art/foo.webp' }` or any path with `../` breaks on pages at different depths because `rel()` will prepend its own depth-based prefix.

**Why it's wrong:** The whole point of `rel()` is to take a site-relative path and adapt it per page.

**Do this instead:** `image-slot.file` should be just the filename within `assets/art/` (e.g. `silt-mere.webp`). The renderer prepends `assets/art/` and `rel()` handles the rest (`app.js:140`).

## Error Handling

**Strategy:** Fail soft for content issues, fail loud for config issues. The renderer continues with whatever it can resolve and lets missing pieces degrade silently.

**Patterns:**
- Missing `SV_PAGES` entry → loud `console.error` and abort (`app.js:13`).
- Missing section id in a page's `sections[]` → silently filtered out (`app.js:42`).
- Unknown block type → empty string (`app.js:179`).
- Missing image asset → `onerror` either removes the parent figure entirely (page hero, `app.js:307`) or marks it `.missing` (in-section figure, `app.js:152, 157`) or swaps the child-card sigil to an empty glow disc (`app.js:191`).
- Orphan `[[id:…]]` link (no matching section, no matching glossary id, no entity match) → renders as `<a href="#id">` (broken anchor) but visually still a link (`app.js:78`).
- Missing tooltip data for a hover → `showTip` returns early, no tip shown (`tooltips.js`-driven, `app.js:553-557`).
- No script support → `<noscript>` block in every shell shows a "JavaScript required" message in `style.css`'s `.sv-noscript` style.

## Cross-Cutting Concerns

**Logging:** `console.error` for fatal config miss (`app.js:13`); `console.warn` only used inside the standalone `campaign/hook.html` for audio play failures. No production logging.

**Validation:** None at runtime. The data files are trusted. There is no schema, no JSON Schema, no TypeScript. Authors are expected to follow the conventions in `page_configs.js`'s header comment (`page_configs.js:1-11`).

**Authentication:** None for the wiki itself. `gm.html` has its own client-side password gate (not a security boundary — the file ships with the password in the source).

**Asset loading:** All assets live under `assets/`. Images are resolved by `rel('assets/art/' + file)`. Audio for the hook page is resolved relatively in the inline JS of `campaign/hook.html`. The home sigil is at `assets/sigil.png`. CDN dependencies: Google Fonts (UnifrakturCook, Cinzel, Cormorant Garamond) used everywhere; Vanta + Three.js used only in `party/index.html`.

**Cache busting:** `?v=NN` query param on every shared script and stylesheet. Currently `v=25` across all shells except the legacy root `party.html` (`v=15`). Bump in lockstep when shipping changes.

---

*Architecture analysis: 2026-04-29*
