# Coding Conventions

**Analysis Date:** 2026-04-29

This is a static, no-build, vanilla HTML+CSS+JS wiki for a D&D / Symbaroum
homebrew campaign ("The Sacred Veil"). There is no framework, no bundler, no
TypeScript, no transpilation. Everything is plain ES5/ES6 in `<script>` tags
loaded directly from disk and rendered client-side by `app.js`.

The interesting "conventions" in this codebase are therefore not lint rules —
they are the visual language tokens, the section/block data shape, and the
internal-link grammar that every new page must conform to in order to feel
like part of The Sacred Veil rather than a stranger.

## Visual Language Tokens

All tokens are defined as CSS custom properties in `style.css` (lines 22-41,
inside `:root`). Use these — never hard-code colour hex values inside a new
component.

### Palette

| Token | Value | Use |
|-------|-------|-----|
| `--gold` | `#d8c99b` | Primary text on dark, link colour, base "warm parchment" tone |
| `--gold-bright` | `#f2d98c` | Active links, hover, page titles, hero titles, "lit" gold |
| `--gold-dim` | `rgba(200,160,80,0.55)` | Numerals, eyebrows, inactive labels, subtle borders |
| `--gold-faint` | `rgba(200,160,80,0.20)` | Background washes, faint glows |
| `--bg` | `#060309` | Page background (near-black with a faint violet shift) |
| `--bg-deep` | `#030106` | Even darker — used for cinematic hero behind images |
| `--bg-elev` | `#0c0614` | Elevated surfaces (search results, sticky bars) |
| `--purple` | `rgba(95,55,130,0.30)` | Violet glow accent (the "fading sun-god / blight" tint) |
| `--text` | `#f0e4bc` | Body text — lifted from `#e3d4a6` for legibility on dark bg |
| `--text-dim` | `rgba(240,228,188,0.85)` | Subtitles, secondary nav |
| `--text-faint` | `rgba(240,228,188,0.60)` | Tertiary labels, placeholder text |
| `--border` | `rgba(180,140,70,0.25)` | Default section/card borders, dim brown |
| `--border-bright` | `rgba(220,180,100,0.5)` | Hover borders, chip accent |

Layout-only tokens:

- `--sticky-top-h` — measured at runtime by `app.js` (lines 454-466).
  Anything that needs to clear the sticky bar (sidebar `top:`, `scroll-margin-top`)
  must read this var, never use a magic number.
- `--sticky-gap: 20px` — the breathing room between the sticky bars and what sits below.

### Glow Stacks (the look)

The "Sacred Veil" feel comes from layered `drop-shadow` glows in warm gold and
occasional violet. The canonical example is the home-page sigil
(`index.html` lines 46-61), which animates between two glow stacks:

```css
filter:
  drop-shadow(0 0 30px rgba(215,170,85,0.45))   /* close warm */
  drop-shadow(0 0 60px rgba(215,170,85,0.25))   /* mid warm */
  drop-shadow(0 0 120px rgba(95,55,130,0.35));  /* far violet halo */
```

Use the same pattern for any new "important" element (sigil, big title,
ornament). Three layers, warm-warm-violet. The violet is what reads as
"the dying sun-god," and it is rare on purpose — do not paint everything
with it.

For text, the sibling pattern is `text-shadow` rather than `drop-shadow`,
typically warm gold close + black far for legibility:

```css
text-shadow:
  0 0 24px rgba(215,170,85,0.35),   /* gold halo */
  0 0 30px rgba(0,0,0,0.98),        /* black soft */
  0 0 60px rgba(0,0,0,0.6);         /* black wide */
```

See `.sv-page-title` (line 276), `.sv-hero-title` (243-247), `.sv-cinema-title`
(800-809).

### Brown sidebar accent

Sidebars and table headers use the dim brown `rgba(180,140,70,...)` rather
than pure gold so they recede. See `.sv-rail` (304), `.sv-toc-group h4` (363),
table `th` background (428).

## Fonts

All three fonts are loaded from a single Google Fonts `@import` at the top of
`style.css` (line 19):

```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=UnifrakturCook:wght@700&display=swap');
```

| Font | Weights | Use |
|------|---------|-----|
| `'Cinzel', serif` | 400-700 | Small-caps eyebrows, archbar labels, table headers, sidebar headings, breadcrumbs, GM/Glossary chrome links, fact keys, def terms, search-result kind labels, CTA kicker. Anything with `letter-spacing` and `text-transform:uppercase` is Cinzel. |
| `'UnifrakturCook', serif` | 700 only | All major titles and Roman numerals: page titles, hero titles, cinema titles, section h1s, CTA titles, hub numerals, sigil mark text, the home-page numerals on the 8 entry tiles. Blackletter = important. |
| `'Cormorant Garamond', serif` | 400, 500, italic 400 | Body text, subtitles (italic), figure captions (italic), search input, tooltip body, fact values, def descriptions. Default `body` font. |

Stylistic rules implied by the codebase:

- **Never put body prose in Cinzel** — it's only for short, high-letter-spacing labels.
- **Never put a heading in Cormorant Garamond** unless it's a subtitle/eyebrow that
  is *deliberately* italic and lower-case.
- **Numerals are always UnifrakturCook**, not Cinzel — both hub numerals (`I`, `II`…)
  and the page numeral block (`.sv-page-num`, `.sv-cinema-eyebrow`).
- Italic Cormorant is the default for subtitles, captions, the noscript fallback,
  the home-page sub, and any "atmospheric" inline text.

## Section Data Shape

Every page on the wiki is rendered by `app.js` from a list of section records.
Sections live in `data_sections_1.js`, `data_sections_2.js`, `data_sections_3.js`
on the globals `window.SV_SECTIONS`, `SV_SECTIONS_2`, `SV_SECTIONS_3`. They are
merged into a single corpus at `app.js:34-40`.

A section record has this shape:

```js
{
  id: "ash-kadesh",                         // kebab-case, globally unique
  group: "Cities",                          // optional — eyebrow shown above title
  title: "Ash-Kadesh",                      // display string
  subtitle: "The capital of K'naan",        // optional — italic line under title
  body: `Verbatim prose, italic, with a `   // optional — single para in left-rule callout
        + `gold left border`,               //  (rendered as <p class="sv-section-body">)
  chip: { motto: "...", arms: "..." },      // optional — house chip block (used on house pages,
                                            //  rendered separately via the page template,
                                            //  not as a `block`)
  blocks: [
    { type: "p", text: "..." },
    // …
  ],
}
```

Sections are referenced from `page_configs.js` by `id` only (in `sections: [...]`)
and resolved via `sectionById` in `app.js`. A section may appear in multiple
pages' `sections` arrays, but `entityToPage` (app.js:26-31) records the *first*
page that owns an `id` so cross-page links know where to route.

### Block Types (complete list)

The renderer's switch is at `app.js:113-181`. Eight types exist today —
do not invent new ones without adding a renderer case.

| `type` | Shape | Renders |
|--------|-------|---------|
| `p` | `{ type:"p", text:"…" }` | `<p>` with inline-link expansion |
| `h3` | `{ type:"h3", text:"…" }` | Cinzel uppercase subheading inside a section (gold underline) |
| `ul` | `{ type:"ul", items:["…","…"] }` | `<ul>` with gold marker; items get inline-link expansion |
| `table` | `{ type:"table", headers:[…], rows:[[…],[…]] }` | `.sv-table` with Cinzel `th`s; cells get inline-link expansion |
| `facts` | `{ type:"facts", items:[ ["Key","Value"], … ] }` | `.sv-facts` grid card; key in dim Cinzel uppercase, value in Cormorant |
| `defs` | `{ type:"defs", items:[ ["Term","Definition"], … ] }` | `<dl>` with 180px term column, dotted dividers |
| `image-slot` | see below | `<figure class="sv-figure">` with `assets/art/{file}`, `onerror` removes the figure |
| `cta-link` | `{ type:"cta-link", to:"page-key-or-id", kicker:"Continue to", label:"…", subtitle:"…" }` | Large title-like block-link with hover violet glow |
| `children-grid` | `{ type:"children-grid", children:["page/key", …] }` | Grid of `.sv-child-card` tiles using each page's `sigil` + `title` + `subtitle` |

`image-slot` extras (see app.js:134-158 and style.css:472-562):

```js
{
  type: "image-slot",
  file: "silt-mere.webp",          // resolved as assets/art/{file}
  alt: "…",                        // alt text
  caption: "…",                    // optional figcaption
  cinematic: true,                 // bleeds wider, applies parallax + edge blur
  overlay: "Some quote",           // optional UnifrakturCook quote layered over image
  parallaxSpeed: 0.5,              // optional, only meaningful when cinematic:true
}
```

If the asset 404s, the figure's `onerror` adds `.missing` and CSS hides it
(`style.css:484`). Image-slot is therefore *safe to leave authored before the
art exists* — the page just renders without it.

### `chip` (house arms block)

`chip` is a top-of-section "coat of arms" card (`.sv-chip`), used on the eight
house-detail sections. It is not a block — it sits on the section record itself
as `{ chip: { motto, arms } }`. See `data_sections_2.js:275, 291, 306, 322, …`
for the eight house chips. (Note: the current `app.js` `renderSection` does not
yet emit chips — they are authored in the data and currently show only because
of the per-section template; verify before relying.)

## Internal-Link Convention: `[[id:Label]]`

Anywhere a string of body text appears (`p.text`, `ul.items[i]`, `table.rows[i][j]`,
`facts.items[i][1]`, `defs.items[i][1]`, `image-slot.caption`, `cta-link.subtitle`,
even section `subtitle` and `body`), use:

```
[[entity-id:Display Label]]
```

The renderer (`app.js:90-110`, `renderInline`) does two passes:

1. **Explicit pass.** Regex `/\[\[([a-z0-9-]+):([^\]]+)\]\]/gi` rewrites every
   `[[id:Label]]` into `<a class="sv-link" href="…" data-sv-ref="id">Label</a>`.
2. **Auto-link pass.** Any literal mention of an entity name or alias from
   `window.SV_DATA.entities` (defined in `data.js`) is also wrapped, *unless*
   it is already inside an `<a>` tag.

Routing is decided by `linkHref` (app.js:68-79):

- If the id is in `GLOSSARY_IDS` (a hard-coded set in app.js:62-66, e.g.
  `abomination`, `iron-teeth`, `tempcor`, `crown-shelf`), link to
  `glossary.html#id`.
- If the id matches a section on the current page (`seen.has(id)`), link to
  `#id` in-page.
- Otherwise look up `entityToPage.get(id)` and link to the owning page's
  href + anchor.
- Fallback: `#id` (an orphaned anchor on the current page).

External cross-page links get a `data-sv-external="1"` attribute, which CSS
(style.css:574-579) turns into a small `↗` glyph after the link. They also get
collected into the right-hand "Mentions" rail (app.js:469-497).

Hover tooltips: every link with `data-sv-ref="id"` triggers a `.sv-tip` card,
populated from `window.SV_TOOLTIPS[id]` in `tooltips.js`. The tooltip schema:

```js
"some-id": { kind: "House", name: "Display Name", text: "Two or three sentences." }
```

If `SV_TOOLTIPS` has no entry for an id, the tooltip silently no-ops
(`showTip` returns early on line 556) — **so every new clickable id should
also get a tooltips.js entry**, otherwise hover does nothing.

### Conventions for using `[[id:Label]]`

- **Use the actual entity id**, not a guess. The id corpus = section ids in
  `data_sections_*.js` ∪ `GLOSSARY_IDS` ∪ tooltip-only ids in `tooltips.js`.
- **Display label is human-readable** — apostrophes, possessives, and case are
  fine: `[[ash-kadesh:K'naan]]`, `[[house-jannin:House Jannin's]]`,
  `[[seraphs-marrow:Seraph's Marrow]]`.
- **Don't link the same entity in every paragraph.** The first mention in a
  section is the strong link; subsequent prose mentions can stay plain (the
  auto-linker may still wrap them, which is fine).
- **Inside table cells and facts values, links are great** — use them liberally,
  the design handles it.
- **HTML is allowed in text strings** — `<b>`, `<i>` are common. Just don't
  paste an `<a>` tag; use `[[id:Label]]` so the href stays correct.

## Naming

| Thing | Convention | Examples |
|-------|------------|----------|
| Section / entity ids | `kebab-case`, lowercase, hyphenated | `ash-kadesh`, `bet-seraphim`, `silt-mere`, `seraphs-marrow`, `house-vane`, `liturgy-of-truth` |
| Page keys (`SV_PAGES`) | `kebab-case`; child pages use `parent/child` | `kingdom`, `kingdom/places`, `faith/heralds-of-the-ash` |
| Hub keys (`SV_HUBS[].key`) | Single short word, no slashes | `kingdom`, `faith`, `magic`, `houses`, `guilds`, `rules`, `party`, `campaign` |
| Display titles | Display strings (Title Case, apostrophes, ampersands OK) | `"The Kingdom & Its People"`, `"K'naan"`, `"Seraph's Marrow"` |
| File names (HTML) | `kebab-case.html` mirroring the page key's tail | `kingdom/places.html`, `faith/heralds-of-the-ash.html` |
| Asset filenames | `kebab-case.{png,jpg,webp}` under `assets/art/` | `hero-kingdom.jpg`, `silt-mere.webp`, `vane-sigil.png` |
| Tooltip ids | Match the section/entity id exactly | `"silt-mere"`, `"house-vane"` |
| Glossary-only ids | Listed in `app.js` `GLOSSARY_IDS` set | `tempcor`, `permcor`, `threshold`, `crown-shelf`, `the-mourn` |
| CSS classes | `sv-` prefix, hyphenated, BEM-ish modifiers with `--` | `.sv-section`, `.sv-page-hero--full`, `.sv-figure--cinematic`, `.sv-layout--no-rail` |

The `sv-` prefix is universal in the styled chrome and content. Home-page-only
classes use `home-` (`index.html` is a one-off).

## Page Config Conventions

Every page is registered in `page_configs.js` under `window.SV_PAGES` with a
unique key. Two archetypes exist: **hub** (top-level, sits on the archbar) and
**child** (sits under a parent).

### Hub page

```js
'kingdom': {
  hub: 'kingdom',                         // self
  href: 'kingdom/index.html',             // root-relative
  numeral: 'II',                          // shown in hero/page-num — required for hubs
  title: 'The Kingdom & Its People',
  subtitle: 'Geography, places, races, and those who shape them',
  hero: 'hero-kingdom.jpg',               // assets/art/{hero}, optional
  sigil: 'kingdom-sigil.png',             // assets/art/{sigil}, used on parent's child cards
  sections: ['kingdom-overview'],         // section ids rendered into the page
  children: ['kingdom/geography',         // sub-pages — drives child-cards & hub-toc sidebar
             'kingdom/places', …],
},
```

### Child page

```js
'kingdom/places': {
  hub: 'kingdom',                         // which archbar tab to highlight
  parent: 'kingdom',                      // which page to breadcrumb back to
  href: 'kingdom/places.html',
  title: 'Places of K\'naan',
  subtitle: 'Cities, seats, and strongholds',
  sections: ['places-intro', 'ash-kadesh', 'har-moloch', …],
  childPages: ['kingdom/minor-places'],   // optional — pages that breadcrumb under THIS page
                                          //  but aren't direct hub children
},
```

### Optional fields

| Field | Effect | Where used |
|-------|--------|-----------|
| `numeral` | Roman numeral shown in `.sv-page-num` / `.sv-cinema-eyebrow`. Required on hubs. | All hub pages |
| `hero` | Filename in `assets/art/`. Renders the masked-edge banner under the title. Missing files self-remove. | Hub pages |
| `fullHero` | Filename in `assets/art/`. Switches the page to the **cinematic** template: full-bleed hero with overlaid title, narrow reading column, parallax, return-to-parent footer. Mutually exclusive with `hero` for layout purposes. | `campaign/hook` |
| `standalone` | Truthy: page bypasses the wiki engine entirely (currently `party`). | `party` |
| `sigil` | Filename in `assets/art/`. Used by the parent's `children-grid` cards. Missing files fall back to a faint glow disc. | All houses, hubs |
| `groups` | `[{ label, ids: [sectionId, …] }]` — sub-headed grouping in the left ToC instead of one flat list. | `kingdom/people` |
| `childPages` | Other page keys that should breadcrumb under this page even though they aren't in `children`. | `kingdom/peoples` → `kingdom/outcasts`, `kingdom/places` → `kingdom/minor-places` |

### Page-config rules of thumb

- **Hubs are exactly the eight `SV_HUBS` entries.** Don't add a ninth hub
  without also adding a sigil, hero, numeral, and updating the archbar.
- **Every page key must match its `href` directory.** `kingdom/places` lives
  at `kingdom/places.html`. The renderer derives `TO_ROOT` from the slash count.
- **Sections are owned by exactly one page** for cross-link routing — even
  though a section *can* appear in multiple `sections:` arrays, the first
  registration wins for `entityToPage`. So if you want `ash-kadesh` to be
  the link target of `[[ash-kadesh:…]]`, make sure `kingdom/places` is the
  page that owns it.
- **`hero` vs `fullHero`** is the lever between "wiki page with sidebars" and
  "cinematic single-column read." Don't set both.
- **Sigils are nice-to-have, not required.** Missing sigils render the
  `--empty` glow tile rather than a broken image.

## Chrome Conventions

Every wiki page (i.e. anything that isn't `index.html`, `gm.html`, `party.html`,
or `glossary.html`) ships the *same* shell because `app.js` rebuilds
`document.body.innerHTML` from scratch (line 358). The HTML file itself is a
~40-line stub that:

1. Sets a `<title>` and OG/Twitter meta block (the `<!-- OG_START -->` /
   `<!-- OG_END -->` markers are deliberate so the meta block can be
   regenerated across all pages).
2. Loads `style.css?v=25` (cache-bust query param).
3. Provides a `<noscript><div class="sv-noscript">…</div></noscript>` fallback —
   **every page must include this**; it's the only reader-facing fallback
   when JS is off.
4. Sets `window.SV_CURRENT_PAGE = '<page-key>';`.
5. Loads, in order: `data.js`, `data_sections_1.js`, `_2.js`, `_3.js`,
   `tooltips.js`, `page_configs.js`, `app.js`.

See `kingdom/index.html` and `kingdom/places.html` — they are byte-identical
except for `<title>`, the OG block, and `SV_CURRENT_PAGE`.

### The shell `app.js` builds

```
.sv-sticky-top
  .sv-head           ← sigil mark + search + Glossary + GM
  .sv-archbar        ← 8 numerals from SV_HUBS, one per hub, active highlighted
[.sv-cinema-hero]    ← only when PAGE.fullHero — full-bleed, overlaid title
.sv-container
  .sv-breadcrumbs    ← Home › Hub › … › current page
  [.sv-page-hero + .sv-page-head]   ← only on non-cinematic pages
  .sv-layout (3-col → 2-col when rail is empty → 1-col on mobile)
    aside.sv-toc
      .sv-hub-toc          ← hub pages only: list of children
      .sv-peer-nav         ← child pages only: siblings under same parent
      .sv-toc-flat[group]  ← in-page section ToC (with optional groups)
    main.sv-main
      <section.sv-section> per section …
      [.sv-cinema-footer ← cinematic pages only: "Return to Parent"]
    aside.sv-rail   ← cross-page mentions (auto-removed if empty)
.sv-tip                    ← floating tooltip card
```

### When to match the archetype vs intentionally diverge

**Match** for any new wiki page (the future Atlas page included):

- Add a `page_configs.js` entry under the right hub.
- Add an HTML stub identical to existing kingdom pages.
- Add sections to `data_sections_*.js` (any of the three — there's no rule
  about which file gets which content, they're just sharded for editor speed).
- Use `[[id:Label]]` for every clickable place / person / concept.
- Add a tooltip in `tooltips.js` for any new id.

**Intentionally diverge** when the page is a one-off dramatic surface:

- `index.html` (home) ships its own `<style>` block and home-only classes
  (`home-sigil`, `home-nav`, etc.) and pulls only `page_configs.js` to
  generate the eight tiles.
- `party.html` is `standalone: true` and doesn't use the wiki shell at all.
- `gm.html` and `glossary.html` are also self-contained.

For the upcoming Atlas page: it should almost certainly match the shell
(archbar + breadcrumbs + sigil watermark + sidebar) so the kingdom map
feels like a wiki page. Use `[[id:Label]]` on hotspots — the hover tooltips
+ click-to-page routing already work for free.

## Code Style (JS / CSS)

There is no linter, no formatter, no build step. The existing code is
self-consistent enough to follow by eye:

- **CSS**: 2-space indent; multi-property selectors use `;`-separated lines
  on a single physical line for short rules, multi-line for long ones; numbered
  comment banners (`/* ─── 1. … ─── */`) divide the file into 11 sections;
  custom-property names are `--lower-kebab`.
- **JS**: 2-space indent; semicolons; single quotes; `'use strict';` at the
  top of the IIFE in `app.js`; `const` / `let`, no `var` (except `index.html`'s
  inline script). All globals are explicitly assigned to `window.*`
  (`SV_HUBS`, `SV_PAGES`, `SV_SECTIONS`, `SV_SECTIONS_2`, `SV_SECTIONS_3`,
  `SV_TOOLTIPS`, `SV_DATA`, `SV_CURRENT_PAGE`).
- **No JSDoc.** Comments are prose paragraphs above functions, often
  explaining the *why* (`// Hide rail when JS leaves it empty`,
  `// Skipped when the user has prefers-reduced-motion set`).
- **Cache-busting**: every external script and stylesheet load uses
  `?v=25`. Bump this when shipping new assets so GitHub Pages serves fresh.

## Accessibility & Reduced-Motion

- `<noscript>` block on every wiki page.
- `prefers-reduced-motion: reduce` is honoured in two places:
  the parallax updater (`app.js:415`) and the cinematic-hero drift animation
  (`style.css:877-879`).
- Decorative images carry empty `alt=""` and `aria-hidden="true"`; content
  images carry the section's caption-equivalent in `alt`.
- Archbar `<nav aria-label="Main sections">`, mobile toggle has
  `aria-label="Menu"`.

---

*Convention analysis: 2026-04-29*
