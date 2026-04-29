# Testing Patterns

**Analysis Date:** 2026-04-29

## Test Framework

**Runner:**
- None. There is no test framework, no test runner, no `package.json`, no
  `npm test`, no CI workflow. This is a static, no-build, vanilla
  HTML+CSS+JS site.

**Assertion Library:**
- None.

**Run Commands:**
- None. Open the files in a browser. That is the whole loop.

## What Serves as Quality Control

Quality control on Sacred Veil is **manual and visual**. The interesting
"correctness" of a wiki page isn't behavioural — it's "does this look right,
does the tone hold, do all the `[[id:Label]]` links land somewhere, does
the sigil glow render, does the hero fade cleanly into the dark page."
That's a human-eyeball check, not an assertion.

The current loop, in practice:

1. **Edit a `data_sections_*.js` file or add a page-config entry** in
   `page_configs.js`.
2. **Open the page in a browser.** Either:
   - Open `kingdom/places.html` (or whatever) directly via `file://`.
     Most things work — `app.js` builds the DOM client-side from globals,
     no server needed.
   - Or push to GitHub and view the GitHub Pages preview at
     `https://munashe-fkitweball.github.io/The-Sacred-Veil/...` (the canonical
     OG/Twitter URLs in every page point at this host).
3. **Eyeball it.** Check: hero loads, title typography is right, internal
   links route correctly, hover tooltips show the right kind+name+text,
   the right-hand "Mentions" rail populates, breadcrumbs trail back to
   home, the archbar tab is highlighted, mobile/responsive doesn't break.
4. **Bump the cache-bust query param** (`?v=25` → `?v=26`) on every
   `<script>` / `<link>` in changed HTML files when shipping new assets,
   otherwise GitHub Pages will serve stale files to returning visitors.

## What Catches Regressions Today

There is no automated regression net. The codebase relies on a handful of
**self-healing fallbacks** that quietly absorb small mistakes so a missing
asset or a typo'd id doesn't crash the page:

| Failure | Fallback | File:line |
|---------|----------|-----------|
| JS disabled | `<noscript>` block on every page renders a styled "JavaScript required" card | every wiki HTML stub; `style.css:58-65` |
| Missing hero image | `<img onerror>` removes the parent `<figure>` entirely — no blank slot | `app.js:307` |
| Missing inline image (`image-slot`) | `<img onerror>` adds `.missing` to the figure; CSS hides it | `app.js:152, 157`, `style.css:484` |
| Missing child sigil | `<img onerror>` switches the parent to `.sv-child-card-sigil--empty` (faint glow disc) | `app.js:191`, `style.css:646-648` |
| Missing cinematic full-hero | `is-missing` class on `.sv-cinema-hero`, CSS hides it | `app.js:330`, `style.css:762` |
| Unknown `[[id:Label]]` | Renders as `<a href="#id">Label</a>` — broken anchor on current page, but the page still renders | `app.js:78` |
| Tooltip id with no `SV_TOOLTIPS` entry | Tooltip silently no-ops on hover | `tooltips.js` (data) + `app.js:556` |
| No external mentions on a page | Right rail removes itself; layout collapses to a 2-column grid | `app.js:483-489`, `style.css:310-313` |
| `prefers-reduced-motion: reduce` | Parallax updater bails; cinema-hero drift animation disabled | `app.js:415`, `style.css:877-879` |
| Unknown `SV_CURRENT_PAGE` | `console.error` logged; render aborted (page stays empty body) | `app.js:13` |

These are the closest thing the codebase has to defensive tests — they all
fail-safe rather than crashing the page.

## Deployment Sanity Check

Because the site ships via GitHub Pages with no preview branch / staging
environment by convention, the pragmatic check before merging anything is:

1. Open the home page (`index.html`). All 8 archbar tiles must load.
2. Click into the page you changed. Eyeball as above.
3. Click one `[[id:Label]]` link in the new content — confirm it routes
   (in-page anchor, cross-page anchor, or glossary).
4. Hover the same link — confirm a tooltip card opens with the expected
   `kind` / `name` / `text`.
5. On mobile width (DevTools responsive mode at <900px): confirm the
   sidebar collapses, the archbar still scrolls, the hero shrinks.

## Things Worth Adding (but not yet present)

If automated checks ever become useful, the cheap wins would be:

- A node script that walks `data_sections_*.js`, extracts every
  `[[id:Label]]`, and asserts each `id` resolves either to a known
  section, a `GLOSSARY_IDS` member, or a `SV_TOOLTIPS` entry. (This is
  the single most likely place to introduce a silent bug today.)
- A node script that asserts every `SV_PAGES[key].sections[]` id exists
  in one of the three `SV_SECTIONS*` arrays.
- A node script that asserts every `page_configs.js` `hero` / `sigil` /
  `fullHero` filename exists under `assets/art/`.

None of these exist today. None are blockers for the current scope.

---

*Testing analysis: 2026-04-29*
