# Codebase Concerns

**Analysis Date:** 2026-04-29

This is a static, no-build, vanilla HTML+CSS+JS wiki site deployed via GitHub Pages. Concerns below are calibrated for that reality: nothing about CI, Dockerfiles, or test runners — everything below is a real risk to a solo author shipping a small site of cinematic, hand-tuned pages.

The most important framing for upcoming work (the SVG kingdom atlas page): the site has **two completely different page archetypes**, and confusing them will break delivery. See "Two architectures, one repo" below.

---

## Two architectures, one repo (read this first)

The codebase contains two parallel page archetypes that share almost nothing:

**Archetype A — Wiki pages (the engine).** 35 of 39 HTML files. Each is a near-empty stub that sets `window.SV_CURRENT_PAGE = '<key>'` and loads 7 scripts (`data.js`, `data_sections_1/2/3.js`, `tooltips.js`, `page_configs.js`, `app.js`). `app.js` then *replaces* `document.body.innerHTML` with a generated scaffold (`render()` at `app.js:354`). Page must have a matching entry in `window.SV_PAGES` (`page_configs.js`) or the page is silently blank (`app.js:13`).

**Archetype B — Standalone cinematic pages.** Three files: `index.html` (home), `campaign/hook.html`, `party/index.html`. These do NOT load `app.js`, do NOT use `SV_PAGES`, and bring all their CSS and JS inline. They share *only* `assets/sigil.png`, fonts, and the visual vocabulary (gold, UnifrakturCook, fog/embers).

**Why this matters for the SVG atlas page:** A full-bleed scrollable kingdom atlas does not fit Archetype A — the wiki engine forces a sticky header, archbar, breadcrumbs, sidebar TOC, and reading-column max-width via `.sv-container` / `.sv-layout`. None of that wants to host a full-bleed scrollable canvas. The right precedent is `party/index.html`: a self-contained file with inline CSS and a thin `<a href="../index.html">← Back</a>` nav. `page_configs.js` even has a marker for this pattern — the `party` entry has `standalone: true` (`page_configs.js:321`), though nothing currently reads that flag (it's documentation-by-convention, not a behavior switch).

If you instead try to render the atlas through `app.js`, you'll fight `body.innerHTML = ...` (it nukes anything you put in the body), fight the layout grid, and fight the sticky offsets. Don't. Start from the `party/index.html` shape.

---

## Tech Debt

**Cache-bust version drift across HTML files:**
- Issue: 37 of 39 HTML files use `?v=25`. **`party.html` is stuck at `?v=15`** — 10 versions stale on every script and stylesheet (`party.html:8, 35-41`). When you bump the data files, `party.html`'s 8 fetches will keep handing back the cached old versions to anyone with a warm cache.
- Files: `party.html` (v=15 throughout); `index.html`, `campaign/hook.html`, `party/index.html` correctly need no bump (different archetypes — see above).
- Impact: The `party.html` stub is unreachable from the home archbar (which uses `party/index.html`), so this only bites if anyone has a stale link or bookmark. It probably should just be deleted to avoid the drift entirely.
- Fix approach: Either (a) delete `party.html` (the canonical Party page is `party/index.html`), or (b) bump it to `?v=25` and add a process note: when bumping, grep the repo for the *old* version string, not just for `?v=`.

**Cache-bust process is manual and fragile:**
- Issue: There are 275 `?v=25` occurrences across 37 files. Bumping them safely requires `sed -i '' 's/?v=25/?v=26/g' **/*.html` and trusting yourself to remember every time. There's no helper script and no template.
- Files: every wiki HTML file (37 of them).
- Impact: One missed file = stale users on that page until they hard-reload. Not catastrophic but exactly the kind of thing that bites at the worst moment (you ship a fix, someone reports it's "still broken").
- Fix approach: A 5-line shell script `bump-version.sh` at the repo root. Or — the deeper fix — drop the cache-bust entirely and rely on GitHub Pages' default `Cache-Control` (it serves with `max-age=600` for HTML and the data files; not ideal but survivable). Easiest improvement: `bump-version.sh` that takes the new number and runs the `sed` over every HTML file at once.

**Section ID collisions in the data corpus:**
- Issue: Four section IDs are defined twice within `data_sections_2.js`: `liturgy-of-truth` (lines 244 & 724), `sun-taxes` (lines 255 & 735), `silence-of-god` (lines 266 & 713), `fringe-folk` (lines 299 & 698). The merge in `app.js:34-40` uses a Map, so **the second definition silently wins** for both rendering and entity routing. The first version is dead code.
- Files: `data_sections_2.js`.
- Impact: One canonical version of each of these four entries is being rendered nowhere on the site. The other version is being shadowed and is misleading future-you when you go to edit the "wrong" one. Since the duplicates have *different* prose and *different* group labels (e.g. `"Doctrine"` vs `"Doctrine & Practice"`), you genuinely can't tell which one is canon without diffing them.
- Fix approach: Pick the canon version of each and delete the other. Add a one-time check: a 10-line node script (or just the bash one-liner used to find these: `grep -hoE 'id:\s*"[a-z0-9-]+"' data_sections_*.js | sort | uniq -c | sort -rn | awk '$1>1'`) you can re-run before commits.

**Internal-link rot — broken `[[id:Label]]` references:**
- Issue: `app.js:78` falls back to `'#' + targetId` for unknown IDs — broken anchors with no warning. 10 IDs are referenced in `[[id:Label]]` syntax but have no matching section anywhere: `anvilhold`, `cauterisation`, `high-council`, `prios`, `silveldt`, `the-drift`, `the-rot`, `third-furnace`, `tide-reach-wharf`, `vigil`. All 10 are *also* declared as entities in `data.js` (so they auto-link from prose too), which makes them feel real but they go nowhere.
- Files: `data.js:90-122` (entity declarations); `data_sections_1.js`, `data_sections_2.js`, `data_sections_3.js` (the dead refs).
- Impact: A reader clicking on "Vigil of Absolute Disclosure" or "Prios" lands on a `#vigil` anchor on the same page, which doesn't exist. Page doesn't move, looks broken. This is the worst class of bug for a wiki — the link looks live, hover-tooltip might even fire (if there's a tooltip entry), and the click does nothing.
- Fix approach: For each of the 10, decide: (a) write the section, (b) add to `GLOSSARY_IDS` in `app.js:62-66` and add a glossary entry, or (c) remove the entity and the `[[id:Label]]` refs. Long-term: a build-time check that walks `[[id:` refs and warns on orphans. The grep is trivial; you have it now in this report.

**`data.js` has a stale duplicate-removal comment:**
- Issue: `data.js:142` says `// dusk-knell already declared in Places above; duplicate removed 2026-04-23`. This is the right kind of note to leave behind, but it's a clue that this entity list has been hand-deduped before, and is at risk of drifting again.
- Files: `data.js:142`.
- Impact: Low — just a marker that this file has had to be defended manually before.
- Fix approach: One-line check `node -e "const e=require('./data.js'); ..."` is awkward because it's a `window.X = ...` script not a module. A better quick check: `grep -oE 'id:\s*"[a-z0-9-]+"' data.js | sort | uniq -d` — should return nothing.

**`page_configs.js` is a single point of failure for the wiki:**
- Issue: Every wiki page (Archetype A) hard-references `page_configs.js`, and `app.js:13` immediately bails if `SV_PAGES[PAGE_KEY]` is missing. A typo, a syntax error, or a missed entry means a totally blank wiki page (just the `<noscript>` fallback shows). There's no soft fallback — no "page not found" rendering, no auto-discovery.
- Files: `page_configs.js`; consumed in `app.js:11-13`.
- Impact: When you add the SVG atlas page (if you choose to register it in SV_PAGES at all — for a standalone, you wouldn't), forgetting the entry = blank screen with a console error nobody sees. The home archbar, sidebar TOC, breadcrumbs, search corpus, and entity routing all derive from this file. One bad edit and the whole wiki dark-mode reverts to "JavaScript required."
- Fix approach: Worth it to add a sanity guard at the top of `app.js`: `if (!window.SV_PAGES) { document.body.innerHTML = '<p>Site config failed to load.</p>'; return; }` — at least the user sees something. Also worth: keep a copy of the last-known-good `page_configs.js` in git history (which it is) and lean on `git diff` before commits to catch typos.

**Hard-coded list of section files in `app.js`:**
- Issue: `app.js:34-38` hard-references `SV_SECTIONS`, `SV_SECTIONS_2`, `SV_SECTIONS_3`. If you ever add `data_sections_4.js`, you must remember to add `window.SV_SECTIONS_4` to this concat AND add a `<script src="data_sections_4.js?v=25">` to every wiki HTML file.
- Files: `app.js:34-38`.
- Impact: The next data-file split (when `data_sections_2.js` outgrows manageable size — it's already 1013 lines) will be a multi-step manual edit across ~37 files plus `app.js`. Easy to half-finish.
- Fix approach: Long-term, switch to a single global like `window.SV_SECTIONS_REGISTRY = []; window.SV_SECTIONS_REGISTRY.push(...)` so each new file just pushes itself onto the registry. Then `app.js` does `(window.SV_SECTIONS_REGISTRY || []).flat()` and the script-tag list per HTML file is the only thing that needs updating per add.

**Confusable filename pair: `kingdom/people.html` vs `kingdom/peoples.html`:**
- Issue: Two real pages, one URL letter apart. `people.html` = NPCs ("Notable People"). `peoples.html` = humanoid races ("The Peoples of K'naan"). Both exist as real files; both linked from the kingdom hub.
- Files: `kingdom/people.html`, `kingdom/peoples.html`; `page_configs.js:72-119`.
- Impact: Future-you (or me) will mistype this in a `[[]]` ref and send a reader to the wrong page. The breadcrumb & title saves it (you'll notice you're on the wrong page) but it's an ambient cost.
- Fix approach: Rename `kingdom/people.html` to `kingdom/notable-people.html` (or `kingdom/npcs.html`). This is a multi-file rename: HTML file, `page_configs.js` key + href, every cross-page link in data_sections, and add a redirect or just accept that old GitHub Pages URLs break. Probably not worth doing alone — bundle it with another structural pass.

**Committed `.DS_Store` files, no `.gitignore`:**
- Issue: `.DS_Store` exists at the repo root and in `assets/`. No `.gitignore` file exists.
- Files: `.DS_Store`, `assets/.DS_Store`.
- Impact: Cosmetic — bloats `git status`, leaks Finder metadata. Not a security or perf risk on a public wiki repo.
- Fix approach: Add a 4-line `.gitignore`:
  ```
  .DS_Store
  **/.DS_Store
  Thumbs.db
  ```
  Then `git rm --cached .DS_Store assets/.DS_Store`.

---

## Known Bugs

None observed in working pages. The orphan-link issues above are functional bugs in user experience but the code does not throw.

---

## Security Considerations

**`gm.html` is client-side gated:**
- Risk: `gm.html` has a "gate" requiring a passphrase before showing GM-only content. Whatever check this performs runs in the browser, which means the passphrase logic and any "private" content are visible in source / Network tab.
- Files: `gm.html` (lines 157+ define the gate UI; the gate-check logic continues past line 200).
- Current mitigation: Obscurity. The page exists, but isn't linked from the home grid (only from a small "GM" pill bottom-right of `index.html`).
- Recommendations: Treat anything in `gm.html` as public-readable by anyone willing to View Source. For genuine secrecy, GM-only content has to live somewhere that requires actual auth (a private repo, a Notion link, etc.) — there is no path to a real secret on a static GitHub Pages site. This is a known limitation, not a bug to fix; just don't put anything truly sensitive there.

**No other auth surfaces.** Static site, no forms-that-submit, no embedded API keys. Clean.

---

## Performance Bottlenecks

**Every wiki page loads ~225 KB of JS + CSS upfront:**
- Problem: Each Archetype A page synchronously loads, in order, `data.js` (8.7 KB), `data_sections_1.js` (52 KB), `data_sections_2.js` (66 KB), `data_sections_3.js` (20 KB), `tooltips.js` (28 KB), `page_configs.js` (16 KB), `app.js` (27 KB), plus `style.css` (34 KB). Total ~225 KB of source — most of which is data the current page won't display.
- Files: every wiki HTML (`script` block at end of each).
- Cause: The corpus is fully merged into a single `Map` so cross-page entity links and the search index can resolve. There's no per-page slicing.
- Impact: On a fast connection, irrelevant — first paint is fast because `<noscript>` is shown until the body is replaced. On slow mobile (the audience for a player reading mid-session), the all-or-nothing load is felt. Also: `body.innerHTML = ...` happens after every `<script>` parses, so there's a clear flash-of-empty-page before the wiki appears.
- Improvement path: Realistically, none worth doing for a homebrew wiki of this scale. Worth knowing if the corpus doubles. If it ever matters: split the corpus by hub (`data_kingdom.js`, `data_faith.js`, etc.) and only load the current hub's data + a small `entityIndex.js` that maps every entity → which file to lazy-load.

**Two heavy ~1 MB PNGs at the root of `assets/`:**
- Problem: `assets/sigil.png` is 1.1 MB and `assets/social-hook.png` is 1.0 MB. The sigil is loaded on *every* page (it's the favicon AND the home centrepiece AND the sticky-bar mark). The browser caches it after first hit, but the first hit is heavy.
- Files: `assets/sigil.png`, `assets/social-hook.png`.
- Cause: Probably a high-res master PNG with no resized variants.
- Improvement path: Resize the favicon copy to 64×64 PNG (~5 KB), keep the 1024px master only for the home-page hero. Same trick for `social-hook.png` — it's only used as the OG image; it can be ~150 KB without losing quality. This is the highest-ROI perf change available, and it's a one-time `cwebp` / `pngquant` job, not a code change.

**`hook-ambience.mp3` is 4.3 MB and starts loading on first interaction:**
- Problem: `campaign/hook.html` declares `<audio preload="auto">` for both ambience (4.3 MB) and music (3.2 MB). The browser starts fetching them as soon as the page loads, before the user clicks "enter."
- Files: `campaign/hook.html:503-504`; `assets/audio/hook-ambience.mp3`, `assets/audio/hook-music.mp3`.
- Cause: `preload="auto"` is required for the cinematic timing to work (audio must be ready by the time the user clicks the gate, otherwise there's a stutter between "Press to enter" and the ambience fading in).
- Improvement path: Acceptable as-is — the cinematic experience justifies it. If you want a small win: `preload="metadata"` instead, then `audio.load()` on the first interaction; you trade ~500ms of "first dramatic moment" delay for not pre-loading 7.5 MB on every visit.

---

## Fragile Areas

**The whole Archetype A page is a single `body.innerHTML = ...`:**
- Files: `app.js:358-404` inside `render()`.
- Why fragile: There's no incremental DOM update. The entire body is template-stringed and assigned. If `render()` throws partway through (e.g. `PAGE.title` is undefined because of a page-config typo), the user sees a blank page with no graceful error UI. Also: anything you put inside the `<body>` of a wiki HTML file (other than `<noscript>` and the `<script>` tags) gets discarded the moment `app.js` loads.
- Safe modification: To add anything that should appear on every wiki page, put it inside the `render()` template string in `app.js`, not in the HTML files. To add a one-off banner to one wiki page, the cleanest path is to extend the `SV_PAGES` entry with a custom field and have `render()` check for it.
- Test coverage: None. There's no test runner. Manual smoke-test by opening 3-4 representative pages after each edit.

**Entity auto-linking traverses every text block on every page:**
- Files: `app.js:55-110` (`AUTO_REGEX` build + `renderInline`).
- Why fragile: Adds a regex-replace pass with ~100+ alternates over every prose chunk. The implementation is careful (it skips inside `<a>` tags, line 99) but performance scales O(text × aliases). For a wiki of this size it's fine; if entities triple, this gets noticeable on large pages like `kingdom/people.html`.
- Safe modification: When adding entities, prefer specific `aliases` over short generic words (e.g. "Vane" is fine because it's a surname; don't add "Crown" as an alias of `crown-shelf` — every "the crown" in prose would become a link).
- Test coverage: None.

---

## Scaling Limits

**`page_configs.js` is approaching the limit of what's comfortable to hand-edit:**
- Current capacity: 27 page entries, 334 lines, ~16 KB.
- Limit: At ~50 entries this becomes painful to scan. The hub-level scoping (`II · THE KINGDOM`, `III · FAITH`, etc.) helps, but the structure is flat.
- Scaling path: Split per hub if it grows: `pages_campaign.js`, `pages_kingdom.js`, etc., each setting `Object.assign(window.SV_PAGES, {...})`. Same loading cost, easier human navigation. Worth doing at ~40 entries.

**`data_sections_2.js` is the largest file in the corpus (1013 lines, 66 KB):**
- Current capacity: It already covers religion, races, places, AND NPCs. That's why the duplicate IDs happened — content for the same conceptual area was added in two passes and the new pass wasn't merged.
- Limit: At ~1500 lines a single-file open in an editor becomes harder; harder to spot duplicates, harder to find the right entry.
- Scaling path: Split out by topic (e.g. `data_sections_npcs.js`). But see "Hard-coded list of section files in `app.js`" above — this requires a paired edit.

---

## Dependencies at Risk

**Vanta + three.js (CDN, latest tag) on `party/index.html`:**
- Risk: `party/index.html:466-467` loads `three.js r134` from cdnjs and `vanta@latest` from jsDelivr. The `@latest` tag means the next time Vanta ships a breaking change to its `FOG` API, the party page silently breaks for new visitors.
- Impact: Background fog stops rendering. Page is still readable (text is on a black background) but the cinematic intent is gone.
- Migration plan: Pin to a specific Vanta version (e.g. `vanta@0.5.24`) and update intentionally. Or download both `three.min.js` and `vanta.fog.min.js` to `assets/vendor/` and serve self-hosted — adds ~200 KB to the repo but makes the page bulletproof.

**Google Fonts inline `@import` on every page:**
- Risk: Every page imports Cinzel, Cormorant Garamond, and UnifrakturCook from `fonts.googleapis.com`. Google Fonts is unusually reliable, but: (a) it's a third-party request that GDPR-conscious EU users may have blocked; (b) `@import` inside a `<style>` blocks style resolution while the font CSS loads (vs. `<link rel="preconnect">` + `<link rel="stylesheet">`).
- Files: every HTML file's `<style>` or top of `style.css`.
- Migration plan: Self-host the woff2 files. Download once via google-webfonts-helper, drop in `assets/fonts/`, and ship a `fonts.css` that uses `@font-face` with `font-display: swap`. ~100-200 KB to the repo, and fully offline-capable. Worth doing for the "no AI slop, real craft" framing — third-party CDN dependencies are a small but real piece of jank.

---

## Missing Critical Features

**No build-time integrity check for the wiki graph:**
- Problem: Nothing automatically catches: orphan `[[id:Label]]` refs, duplicate section IDs, page entries that reference missing section IDs, or `page_configs.js` entries pointing at nonexistent HTML files. All four of these classes of bug are present right now (see Tech Debt) and were found by ad-hoc grep, not by tooling.
- Blocks: Confidence when adding new content. Right now, every cross-page link change is a "hope I didn't typo" moment.
- Recommendation: A single `check.sh` at the repo root, ~30 lines of bash, that runs four greps and prints any findings. Not a pre-commit hook (overkill for a solo author) — just a thing you run before you push. Concretely:
  ```bash
  # Section ID dupes
  grep -hoE 'id:\s*"[a-z0-9-]+"' data_sections_*.js | sort | uniq -d
  # Orphan [[id:Label]] refs
  # ...etc (see grep recipes throughout this report)
  ```

**No "page not found" UX:**
- Problem: GitHub Pages serves a generic 404 for unknown paths; broken in-site `[[id:Label]]` refs land on dead anchors with zero feedback.
- Blocks: Reader trust when something's wrong.
- Recommendation: A custom `404.html` at the root with the site visual language and a "return to The Sacred Veil" link. Low priority; nice polish.

---

## Test Coverage Gaps

**No tests at all** — appropriate for the project's scale, but it means every change is a manual smoke test. The risks worth knowing:

- What's not tested: Wiki page rendering after edits to `page_configs.js` or any `data_sections_*.js`. Internal `[[id:Label]]` link resolution. Cross-page entity routing. Search results. Tooltip data-binding. Mobile drawer TOC. Reduced-motion media-query coverage of cinematic pages.
- Files: All of `app.js`, all of the data files.
- Risk: A change that breaks `render()` produces a blank page. A change that silently breaks one entity link is invisible.
- Priority: Low for actual unit tests. Medium for a 30-line `check.sh` integrity script (see "No build-time integrity check" above). The integrity script would catch >80% of the classes of bug you'd realistically introduce.

---

## Specific notes for the SVG kingdom atlas page

Direct, actionable concerns for the upcoming work:

1. **Use the `party/index.html` shape, not the wiki shape.** Inline `<style>`, inline `<script>`, no `app.js`, no `SV_PAGES` entry needed (or set `standalone: true` for documentation, and add the link to `SV_HUBS` if it should appear in the archbar).

2. **If you DO want it in the home grid:** Add a 9th entry to `SV_HUBS` in `page_configs.js:13-22` with a roman numeral and an `href`. The `index.html` home-grid script (`index.html:226-234`) iterates `SV_HUBS` and will pick it up automatically. The home grid responsive CSS at `index.html:175` says `grid-template-columns:repeat(2, 1fr)` on mobile — 9 entries reflows cleanly.

3. **The `<noscript>` fallback in `index.html` is missing.** The home grid is JS-generated from `SV_HUBS`. If `page_configs.js` 404s, or JS is disabled, the home page has no nav at all. Same issue exists in `gm.html:140` for the GM archbar. Worth a 4-line `<noscript>` block with a static `<ul>` of links to the 8 hubs.

4. **Cache-busting:** The atlas page (Archetype B) shouldn't need `?v=` on its own assets — it's standalone, and inline CSS/JS doesn't cache separately. The only cross-cutting thing it'll load is `assets/sigil.png` (already cached) and any new SVG file you reference. Plan the asset name with versioning in the filename if you'll iterate (`atlas-v1.svg` → `atlas-v2.svg`) so you bypass the cache problem entirely.

5. **`page_configs.js` won't break the new page.** Standalone pages don't read it, so an oversight in registering the atlas there has zero effect on the atlas page itself. It only affects whether the page shows up in the archbar / home grid.

6. **Avoid the "broken `[[id:Label]]`" trap if you cross-link from the atlas back into the wiki.** Your atlas SVG will probably hyperlink regions to wiki sections. If you write `<a href="../kingdom/places.html#ash-kadesh">`, that's safe — direct anchor, no engine resolution. If you somehow mix in `[[ash-kadesh:Ash-Kadesh]]` syntax, that won't work because the `[[]]` syntax is only processed by `app.js`'s `renderInline()`, which won't run on a standalone page.

---

*Concerns audit: 2026-04-29*
