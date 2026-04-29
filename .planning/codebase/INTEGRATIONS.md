# External Integrations

**Analysis Date:** 2026-04-29

> **Honest framing:** This is a static GitHub Pages site with effectively two outside dependencies: Google Fonts (the typography that defines the visual identity) and GitHub Pages itself (the host). One additional page — `party/index.html` — pulls two CDN-hosted libraries (three.js and Vanta) for its animated fog backdrop. There are no APIs, no databases, no auth, no analytics, no telemetry, no webhooks, no backend of any kind.

## APIs & External Services

**Typography:**
- **Google Fonts** — the only "always-on" external service. Loaded via `@import url(...)` in CSS or `<link href="...">` in HTML. Three families are pulled:
  - `Cinzel` (weights 400, 500, 600, 700) — display caps used for the arch bar, eyebrows, button labels, and small-caps elements
  - `Cormorant Garamond` (italic + weights 400, 500; on the cinematic pages also 600) — body serif used for prose and italic captions
  - `UnifrakturCook` (weight 700) — blackletter used for the home title, large numerals, and section drop-caps
  - Reference points: `style.css:19`, `index.html:9`, `campaign/index.html` and every other hub `index.html` (via `style.css`), `campaign/hook.html:8-10` (uses explicit `<link rel="preconnect">` to `fonts.googleapis.com` and `fonts.gstatic.com`), `party/index.html:16` (inline `@import` in its standalone style block).
  - SDK/Client: none — plain CSS `@import` / `<link>` requests.
  - Auth: none required. Google Fonts is a public, unauthenticated CDN.

**3D / Animation (single page only):**
- **three.js (r134)** — loaded from `cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js` at `party/index.html:466`. Sole purpose: provide the WebGL scaffolding Vanta needs.
- **Vanta** (`vanta.fog.min.js`, `latest` tag) — loaded from `cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js` at `party/index.html:467`. Used to render the animated fog backdrop on `#fog-bg` (configured inline at `party/index.html:469-483` with custom palette and motion settings).
- These two are scoped to `party/index.html` only. They are not loaded by any other page.
- SDK/Client: the libraries themselves attach `THREE` and `VANTA` to `window`. No npm install — they ship straight from the CDN.
- Auth: none required.

## Data Storage

**Databases:**
- None. There is no database. All "content" lives as plain JS object literals on `window.*` globals in committed source files (`data.js`, `data_sections_1.js`, `data_sections_2.js`, `data_sections_3.js`, `tooltips.js`, `page_configs.js`).

**File Storage:**
- Local filesystem only — every asset (sigil, social previews, hero art, character portraits, MP3 ambience/music) lives under `assets/` in the repo and is served as-is by GitHub Pages.
  - `assets/sigil.png`, `assets/social-preview.png`, `assets/social-hook.png`
  - `assets/art/*.webp` (kingdom heroes), `assets/art/hook-scene-the-fall.jpg` (cinematic)
  - `assets/art/party/*.webp` and `assets/art/party/mask.png` (party portraits + fade mask)
  - `assets/audio/hook-ambience.mp3`, `assets/audio/hook-music.mp3`

**Caching:**
- Browser cache only. There is no service worker (no `sw.js`, no `navigator.serviceWorker.register(...)` calls in any of the JS files). Cache busting is manual via `?v=25` query strings on every `<script>` and `<link>` (e.g. `campaign/index.html:35-41`); bump that number after a deploy to force-refresh clients.

## Authentication & Identity

**Auth Provider:**
- None. The site is fully public, read-only, and unauthenticated. There is no login, no session, no per-user state. The `gm.html` "GM area" link in the bottom-right of the home page (`index.html:221`) is just a regular page — security-by-obscurity, not authentication.

## Monitoring & Observability

**Error Tracking:**
- None. No Sentry, no Bugsnag, no Rollbar, no Datadog RUM, no Honeycomb, no LogRocket, no FullStory. There is no `window.onerror` handler in `app.js` either.

**Logs:**
- The only logging is one defensive `console.error('No SV_PAGES entry for', PAGE_KEY)` at `app.js:13`. No analytics events, no remote log shipping.

**Analytics:**
- None. No Google Analytics / GA4, no Plausible, no Fathom, no Cloudflare Web Analytics, no Hotjar, no Mixpanel, no Segment, no Posthog. No `<script>` tags pointing to any analytics vendor anywhere in the repo (verified across all `.html`, `.js`, `.css`).

## CI/CD & Deployment

**Hosting:**
- **GitHub Pages** — repo `https://github.com/munashe-fkitweball/The-Sacred-Veil.git` (per `.git/config`), served at `https://munashe-fkitweball.github.io/The-Sacred-Veil/` (per the canonical `og:url` in `index.html:190`).
- No custom domain (`CNAME` file is absent).
- No `.nojekyll` file, but no Jekyll-conflicting paths exist (no `_layouts/`, no leading-underscore directories), so Jekyll's default behaviour passes everything through unchanged.

**CI Pipeline:**
- None. No `.github/workflows/` directory exists. Deploys rely on GitHub Pages' built-in "publish from `main` branch" mode — `git push origin main` triggers a GitHub-managed Pages build of the static files. There is no test step, no lint step, no deploy script, no preview environment.

## Environment Configuration

**Required env vars:**
- None. The site has no server-side runtime and no environment-dependent behaviour. There are no `process.env.*` references, no `import.meta.env`, no `.env` file (and none would be readable from a static page anyway).

**Secrets location:**
- Not applicable. There are no API keys, OAuth client IDs, signing secrets, or credentials of any kind in the repo. Google Fonts and the two CDN libraries are unauthenticated.

## Webhooks & Callbacks

**Incoming:**
- None. No server, no endpoints.

**Outgoing:**
- None. No `fetch()`, no `XMLHttpRequest`, no `axios`, no `navigator.sendBeacon` calls in `app.js`, `tooltips.js`, `page_configs.js`, or anywhere else (verified via grep across all JS files). The only outbound network requests the browser makes from these pages are:
  1. The Google Fonts CSS + WOFF2 font files (every page)
  2. The three.js and Vanta libraries (`party/index.html` only)
  3. Same-origin requests for the site's own assets, scripts, and images

## Social / Sharing Surface

**Open Graph & Twitter Card meta:**
- Every HTML entry point ships a populated `<!-- OG_START --> ... <!-- OG_END -->` block (see `index.html:184-200`, `campaign/index.html:9-25`, `campaign/hook.html:12-28`, plus all hub and leaf pages). These declare:
  - `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`
  - `og:image` (1200×630), `og:image:width`, `og:image:height`, `og:image:alt`
  - `twitter:card` (set to `summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`
  - `theme-color` for mobile browser chrome
- Two distinct social-preview images are used: `assets/social-preview.png` for the wiki at large, and `assets/social-hook.png` specifically for `campaign/hook.html` (the cinematic opening).
- These are not "integrations" in the API sense — they are static metadata consumed by social platforms (Discord, Twitter/X, iMessage, Slack) when someone pastes a URL.

## Audio Surface

**HTML5 `<audio>` (single page only):**
- `campaign/hook.html:503-504` declares two `<audio>` elements pointing at `../assets/audio/hook-ambience.mp3` (loop) and `../assets/audio/hook-music.mp3` (one-shot). The state machine that fades them in/out lives in the inline script starting at `campaign/hook.html:588`. No third-party audio CDN, no streaming service, no DRM — just same-origin MP3 files.

---

*Integration audit: 2026-04-29*
