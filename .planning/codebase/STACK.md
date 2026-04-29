# Technology Stack

**Analysis Date:** 2026-04-29

> **Honest framing:** This is a static, no-build, vanilla-web wiki for a D&D / Symbaroum homebrew campaign ("The Sacred Veil"). There is no `package.json`, no `node_modules/`, no bundler, no transpiler, no test framework, no CI. Every file in the repo is shipped as-is by GitHub Pages. The "stack" below is the actual platform surface — browser primitives, Google Fonts, two CDN libraries used on a single page, and the GitHub Pages host. Nothing more.

## Languages

**Primary:**
- HTML5 — every entry-point page (`index.html`, hub `index.html` files in `campaign/`, `kingdom/`, `faith/`, `magic/`, `houses/`, `guilds/`, `party/`, plus `glossary.html`, `gm.html`, `party.html`, `rules.html`, and the leaf pages under each hub directory)
- Vanilla JavaScript (browser-side, ES2017+ syntax — `const`/`let`, arrow functions, template literals, `Map`, `Set`, optional chaining; no modules, no `import`/`export`) — `app.js` (~653 lines), `tooltips.js` (~146 lines), `page_configs.js` (~334 lines), `data.js` (~150 lines), `data_sections_1.js` (~560 lines), `data_sections_2.js` (~1013 lines), `data_sections_3.js` (~280 lines)
- CSS3 — `style.css` (~879 lines, ~34 KB) is the global stylesheet; `index.html`, `campaign/hook.html`, and `party/index.html` carry their own large `<style>` blocks inline (these three pages are intentionally self-contained / cinematic and do not load `style.css`)

**Secondary:**
- Not detected — no TypeScript, no SCSS/Less, no JSX, no template language

## Runtime

**Environment:**
- Modern evergreen browser (Chromium/Firefox/Safari/Edge). Server-side runtime: none. Pages are plain files served by GitHub Pages' static file server.
- `<noscript>` blocks in the wiki pages explicitly tell users the site requires JavaScript (e.g. `glossary.html:28-33`, `rules.html:28-33`, `party.html:28-33`, `campaign/index.html:28-33`). The home page (`index.html`) and the cinematic pages (`campaign/hook.html`, `party/index.html`) also require JS.

**Package Manager:**
- None. There are no JavaScript dependencies installed locally. The two third-party libraries used (three.js and Vanta) are loaded directly from public CDNs at runtime — see INTEGRATIONS.md.
- Lockfile: not applicable (no `package.json`, no `package-lock.json`, no `yarn.lock`, no `pnpm-lock.yaml`)

## Frameworks

**Core:**
- None. The wiki rendering "engine" is a hand-rolled vanilla-JS module — `app.js` reads `window.SV_CURRENT_PAGE`, looks up the page config in `window.SV_PAGES` (`page_configs.js`), pulls section content from `window.SV_SECTIONS` / `_2` / `_3` (`data_sections_*.js`), and renders the scaffold (arch bar, breadcrumbs, hero, sidebars, sections, tooltips, search, scroll-spy) directly into the DOM via `innerHTML` template strings. No React, Vue, Svelte, Astro, Next, etc.

**Testing:**
- None. No `*.test.*`, `*.spec.*`, no Jest/Vitest/Mocha config, no Playwright/Cypress.

**Build/Dev:**
- None. There is no build step. Files are edited and committed as-is. Cache-busting is done manually with `?v=25` query strings appended to every `<script src=...>` and `<link href="style.css?v=25">` reference (see e.g. `campaign/index.html:35-41`); bumping the number invalidates the browser cache after a deploy.

## Key Dependencies

**Critical (loaded on every wiki page, in this exact order — see `campaign/index.html:34-41` for the canonical pattern):**
- `data.js` — `window.SV_DATA` (entity registry: houses, guilds, NPCs, places, concepts, glossary terms, with `id`/`name`/`aliases` for auto-linking)
- `data_sections_1.js` — `window.SV_SECTIONS` (campaign opening, kingdom intro, etc.)
- `data_sections_2.js` — `window.SV_SECTIONS_2` (largest content file; faith doctrine, places, magic, houses, guilds, law, etc.)
- `data_sections_3.js` — `window.SV_SECTIONS_3` (additional sections — faith children, etc.)
- `tooltips.js` — `window.SV_TOOLTIPS` (one short summary object per entity id, used by the hover-tooltip layer in `app.js`)
- `page_configs.js` — `window.SV_HUBS` (the 8 top-level hubs / arch-bar entries) and `window.SV_PAGES` (per-page metadata: `hub`, `parent`, `href`, `title`, `subtitle`, `hero`, `sigil`, `sections`, `groups`, `children`, `standalone`, `fullHero`)
- `app.js` — the rendering engine; defines an IIFE that runs immediately on every page

All of these are loaded as plain `<script src="...?v=25">` tags. Order matters because everything is attached to `window.*` globals — `app.js` must run last because it consumes the others.

**Third-party (loaded on ONE page only — `party/index.html:466-467`):**
- `three.js` r134 — via `https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js`. Required by Vanta.
- `vanta@latest` (`vanta.fog.min.js`) — via `https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js`. Renders the animated fog background behind the party-page composition (configured at `party/index.html:469-483`).

These are the *only* runtime JavaScript dependencies anywhere in the repo. They are not used by the wiki engine and are scoped entirely to `party/index.html`.

**Infrastructure:**
- Git LFS is enabled on the repo (`.git/config` has a `[lfs]` section), but no files appear to be tracked in LFS yet (no `.gitattributes` at the project root). The large `assets/sigil.png` (~1.2 MB) and `assets/social-hook.png` (~1.0 MB) are committed as regular blobs.

## Configuration

**Environment:**
- No environment variables. No `.env` file. The site has no server-side runtime, no secrets, and no configuration that varies by environment.
- The single piece of "config" is hard-coded into the canonical OG meta block of every page: `https://munashe-fkitweball.github.io/The-Sacred-Veil/` (see `index.html:190-191`, `campaign/index.html:15-16`, etc.). Hosting somewhere else would require search-replace across all `.html` files.

**Build:**
- No build config files. No `tsconfig.json`, no `vite.config.*`, no `webpack.config.*`, no `.babelrc`, no `.eslintrc*`, no `.prettierrc*`, no `.nvmrc`. Manual `?v=NN` cache-busting is the only deployment-related convention.

## Platform Requirements

**Development:**
- A text editor and a local file server (or just opening files via `file://`, though some browsers block module/CDN behaviour on `file://`). There is nothing to install. `git` is the only required tool.

**Production:**
- GitHub Pages (the repo is `https://github.com/munashe-fkitweball/The-Sacred-Veil.git` per `.git/config`, served at `https://munashe-fkitweball.github.io/The-Sacred-Veil/` per the OG meta tags). No `.nojekyll`, no `CNAME`, no `_config.yml` — Jekyll's default pass-through is fine because every URL on the site is an explicit `.html` file (no underscore-prefixed dirs, no `_layouts`, etc.).
- No GitHub Actions workflow under `.github/workflows/` — deploys happen via the default GitHub Pages "build from `main` branch" mode (push to `main`, GitHub Pages serves it).

## Asset Pipeline

**Images:**
- `assets/sigil.png` (~1.2 MB) — the central wiki sigil; used as favicon (`<link rel="icon">` on every page) and as the large home-page glow (`index.html:45`)
- `assets/social-preview.png` (~256 KB) — 1200×630 OG/Twitter card image for the wiki
- `assets/social-hook.png` (~1.0 MB) — 1200×630 OG/Twitter card image specifically for `campaign/hook.html`
- `assets/art/*.webp` — page heroes (`eastern-massif.webp`, `gorse-barrens.webp`, `silt-mere.webp`) and one cinematic JPG (`hook-scene-the-fall.jpg`). WebP chosen for smaller payload on hero images.
- `assets/art/party/*.webp` — character portraits (`arthur.webp`, `brandon.webp`, `gawain.webp`, `hero.webp`) plus a fade `mask.png`

**Audio:**
- `assets/audio/hook-ambience.mp3` (~4.6 MB) and `assets/audio/hook-music.mp3` (~3.4 MB) — used by `campaign/hook.html` only (`<audio>` elements at `campaign/hook.html:503-504`, with a JS state machine starting at `campaign/hook.html:588`)

**Video:**
- None.

**Asset references in app.js:**
- `app.js:139` builds image URLs as `rel('assets/art/' + b.file)` for `image-slot` blocks
- `app.js:191` builds child-card sigil URLs as `rel('assets/art/' + c.sigil)`
- `app.js:307` builds page hero URLs as `rel('assets/art/' + PAGE.hero)`
- All image tags use `onerror="this.parentElement.remove()"` (or a similar fallback) so missing assets don't leave empty boxes

---

*Stack analysis: 2026-04-29*
