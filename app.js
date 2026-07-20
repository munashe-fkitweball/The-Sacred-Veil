// ============================================================================
// SACRED VEIL — Wiki engine
// Runs on every page. Reads window.SV_CURRENT_PAGE to know which page it's on,
// pulls that page's config from SV_PAGES, renders the scaffold, and hydrates
// auto-linking, tooltips, search, and scroll-spy.
// ============================================================================

(function () {
  'use strict';

  const PAGE_KEY   = window.SV_CURRENT_PAGE;
  const PAGE       = window.SV_PAGES[PAGE_KEY];
  if (!PAGE) { console.error('No SV_PAGES entry for', PAGE_KEY); return; }

  const HUB        = PAGE.hub;
  const PAGE_DEPTH = (PAGE.href.match(/\//g) || []).length;  // 0 = root, 1 = one-deep, etc.
  const TO_ROOT    = '../'.repeat(PAGE_DEPTH);               // relative prefix to site root

  // ── Resolve a site-relative href to one usable from this page ──
  function rel(siteRelativeHref) {
    // siteRelativeHref is root-relative, e.g. "kingdom/geography.html" or "rules.html"
    return TO_ROOT + siteRelativeHref;
  }

  // ── Build entity → page map so [[entity:Display]] links route cross-page ──
  const entityToPage = new Map();
  Object.entries(window.SV_PAGES).forEach(([key, cfg]) => {
    (cfg.sections || []).forEach(sid => {
      if (!entityToPage.has(sid)) entityToPage.set(sid, key);
    });
  });

  // ── Sections corpus (merge all data_sections_*.js exports) ──
  const ALL_SECTIONS = [].concat(
    window.SV_SECTIONS || [],
    window.SV_SECTIONS_2 || [],
    window.SV_SECTIONS_3 || []
  );
  const sectionById  = new Map();
  ALL_SECTIONS.forEach(s => sectionById.set(s.id, s));

  const pageIds       = (PAGE.sections || []).filter(id => sectionById.has(id));
  const PAGE_SECTIONS = pageIds.map(id => sectionById.get(id));
  const seen          = new Set(pageIds);

  // ── Entity auto-linking ──
  const entityMap = new Map();
  (window.SV_DATA && window.SV_DATA.entities || []).forEach(e => {
    const all = [e.name, ...(e.aliases || [])];
    all.forEach(alias => {
      const key = alias.toLowerCase();
      if (!entityMap.has(key)) entityMap.set(key, { id: e.id, name: e.name });
    });
  });
  const aliasKeys = [...entityMap.keys()].sort((a, b) => b.length - a.length);
  function escapeReg(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  const AUTO_REGEX = aliasKeys.length
    ? new RegExp('\\b(' + aliasKeys.map(escapeReg).join('|') + ')\\b', 'gi')
    : null;

  // ── Glossary-only IDs (these route to glossary.html) ──
  const GLOSSARY_IDS = new Set([
    'abomination','iron-teeth','resolute','stigma','void-chime','wound-marrow',
    'knaan','averium','lord-of-lords','tempcor','permcor','totalcor','threshold',
    'milestone-xp','crown-shelf','ledger-ward','the-mourn','dusk-knell','witchsight',
    'valley-of-woe',
    'sun-charter','crown-charter','the-ascendance','the-kindling','dawn-heir',
  ]);

  function linkHref(targetId) {
    if (GLOSSARY_IDS.has(targetId)) {
      return rel('glossary.html') + '#' + targetId;
    }
    // Whole-page link, e.g. [[faith/hierarchy:full hierarchy page]] — targetId
    // is a SV_PAGES key (contains a slash), so link to that page.
    if (window.SV_PAGES && window.SV_PAGES[targetId]) {
      return rel(window.SV_PAGES[targetId].href);
    }
    if (seen.has(targetId)) return '#' + targetId;
    const pageKey = entityToPage.get(targetId);
    if (pageKey) {
      const pageCfg = window.SV_PAGES[pageKey];
      if (pageCfg) return rel(pageCfg.href) + '#' + targetId;
    }
    return '#' + targetId;  // fallback for orphans
  }

  function linkHTML(id, display) {
    const safeId = id.replace(/"/g, '&quot;');
    const href = linkHref(id);
    const isPageLink = !!(window.SV_PAGES && window.SV_PAGES[id]);
    const external = isPageLink || (!seen.has(id) && !GLOSSARY_IDS.has(id) && entityToPage.has(id));
    const isGlossary = GLOSSARY_IDS.has(id) && PAGE_KEY !== 'glossary';
    const extAttr = (external || isGlossary) ? ' data-sv-external="1"' : '';
    return `<a class="sv-link" href="${href}" data-sv-ref="${safeId}"${extAttr}>${display}</a>`;
  }

  function renderInline(text) {
    if (!text) return '';
    let out = text.replace(/\[\[([a-z0-9/-]+):([^\]]+)\]\]/gi, (m, id, disp) => linkHTML(id, disp));
    if (!AUTO_REGEX) return out;
    const parts = out.split(/(<[^>]+>)/g);
    let insideAnchor = 0;
    for (let i = 0; i < parts.length; i++) {
      const chunk = parts[i];
      if (chunk.startsWith('<')) {
        if (/^<a\b/i.test(chunk)) insideAnchor++;
        else if (/^<\/a\s*>/i.test(chunk)) insideAnchor = Math.max(0, insideAnchor - 1);
        continue;
      }
      if (insideAnchor > 0) continue;
      parts[i] = chunk.replace(AUTO_REGEX, (match) => {
        const hit = entityMap.get(match.toLowerCase());
        return hit ? linkHTML(hit.id, match) : match;
      });
    }
    return parts.join('');
  }

  // ── Block rendering ──
  function renderBlocks(blocks) {
    if (!blocks) return '';
    return blocks.map(b => {
      switch (b.type) {
        case 'h3':  return `<h3>${renderInline(b.text)}</h3>`;
        case 'p':   return `<p>${renderInline(b.text)}</p>`;
        case 'ul':  return '<ul>' + b.items.map(i => `<li>${renderInline(i)}</li>`).join('') + '</ul>';
        case 'table':
          return '<div class="sv-table-wrap"><table class="sv-table"><thead><tr>' +
            b.headers.map(h => `<th>${renderInline(h)}</th>`).join('') +
            '</tr></thead><tbody>' +
            b.rows.map(r => '<tr>' + r.map(c => `<td>${renderInline(c)}</td>`).join('') + '</tr>').join('') +
            '</tbody></table></div>';
        case 'facts':
          return '<div class="sv-facts">' +
            b.items.map(([k,v]) => `<div class="sv-fact"><div class="sv-fact-k">${renderInline(k)}</div><div class="sv-fact-v">${renderInline(v)}</div></div>`).join('') +
            '</div>';
        case 'defs':
          // Each definition gets an anchor id (slug of its term) so glossary
          // links and search results can land on the exact entry.
          return '<dl class="sv-defs">' +
            b.items.map(([k,v]) => `<div class="sv-def" id="${defSlug(k)}"><dt>${renderInline(k)}</dt><dd>${renderInline(v)}</dd></div>`).join('') +
            '</dl>';
        case 'image-slot': {
          // Render an optional image. Fails silently if the asset doesn't exist.
          // If cinematic:true, the figure renders wider/taller with stronger fade,
          // edge-blur halo, parallax scroll, and can carry an overlay quote.
          const figCls = b.cinematic ? 'sv-figure sv-figure--cinematic' : 'sv-figure';
          const src = rel('assets/art/' + b.file);
          const overlay = b.overlay
            ? `<div class="sv-figure-overlay">${renderInline(b.overlay)}</div>`
            : '';
          const caption = b.caption ? `<figcaption>${renderInline(b.caption)}</figcaption>` : '';
          if (b.cinematic) {
            // Two stacked images: a blurred backdrop fills the frame; a sharp
            // foreground sits on top with a fade mask so its edges dissolve
            // into the blurred copy underneath. Both translateY in sync via JS
            // for parallax (data-parallax-speed = fraction of scroll speed).
            const speed = b.parallaxSpeed != null ? b.parallaxSpeed : 0.5;
            return `<figure class="${figCls}" data-slot="${b.file}">
              <div class="sv-parallax" data-parallax-speed="${speed}">
                <img class="sv-parallax-blur" src="${src}" alt="" aria-hidden="true" onerror="this.closest('figure').classList.add('missing')"/>
                <img class="sv-parallax-img"  src="${src}" alt="${b.alt || ''}"/>
              </div>${overlay}${caption}
            </figure>`;
          }
          return `<figure class="${figCls}" data-slot="${b.file}"><img src="${src}" alt="${b.alt || ''}" onerror="this.closest('figure').classList.add('missing')"/>${overlay}${caption}</figure>`;
        }
        case 'cta-link': {
          // Large, title-like call-to-action link to another page (or section).
          //   { type: "cta-link", to: "campaign/hook", kicker: "Continue to",
          //     label: "The Hook", subtitle: "The night the keep falls" }
          // If `to` matches a page key in SV_PAGES, links straight to that page
          // (no anchor) so the user lands at the top, e.g. to see a cinematic hero.
          // Otherwise falls back to section/entity linking.
          let href;
          if (b.to && window.SV_PAGES[b.to]) {
            href = rel(window.SV_PAGES[b.to].href);
          } else {
            href = linkHref(b.to);
          }
          const kicker = b.kicker ? `<div class="sv-cta-kicker">${b.kicker}</div>` : '';
          const sub = b.subtitle ? `<div class="sv-cta-sub">${b.subtitle}</div>` : '';
          return `<a class="sv-cta-link" href="${href}">${kicker}<div class="sv-cta-title">${b.label}</div>${sub}</a>`;
        }
        case 'children-grid':
          // Renders child-page cards for hub pages
          return renderChildrenGrid(b.children);
        default: return '';
      }
    }).join('\n');
  }

  function renderChildrenGrid(childKeys) {
    const cards = childKeys.map(k => {
      const c = window.SV_PAGES[k];
      if (!c) return '';
      // Use a real <img> with onerror so a missing file falls back to the --empty glow
      // instead of leaving a blank disc.
      const sigilImg = c.sigil
        ? `<div class="sv-child-card-sigil"><img src="${rel('assets/art/'+c.sigil)}" alt="" onerror="this.parentElement.classList.add('sv-child-card-sigil--empty');this.remove();"/></div>`
        : `<div class="sv-child-card-sigil sv-child-card-sigil--empty"></div>`;
      const sub = c.subtitle ? `<div class="sv-child-card-sub">${c.subtitle}</div>` : '';
      return `<a class="sv-child-card" href="${rel(c.href)}">
        ${sigilImg}
        <div class="sv-child-card-body">
          <div class="sv-child-card-title">${c.title}</div>
          ${sub}
        </div>
      </a>`;
    }).filter(Boolean).join('');
    return `<div class="sv-children-grid">${cards}</div>`;
  }

  // ── Top arch bar ──
  function renderArchBar() {
    return window.SV_HUBS.map(h => {
      const active = h.key === HUB ? ' is-active' : '';
      return `<a class="sv-arch${active}" href="${rel(h.href)}" title="${h.short}">
        <span class="sv-arch-num">${h.numeral}</span>
        <span class="sv-arch-name">${h.short}</span>
      </a>`;
    }).join('');
  }

  // ── Breadcrumbs ──
  function renderBreadcrumbs() {
    const trail = [];
    let cur = PAGE;
    while (cur) {
      trail.unshift(cur);
      if (!cur.parent) break;
      cur = window.SV_PAGES[cur.parent];
    }
    // Always prefix Home
    const home = `<a href="${rel('index.html')}">Home</a>`;
    const items = trail.map((p, i) => {
      if (i === trail.length - 1) return `<span>${p.title}</span>`;
      return `<a href="${rel(p.href)}">${p.title}</a>`;
    });
    return `<nav class="sv-breadcrumbs">${home}${items.map(x => ' <span class="sv-sep">›</span> ' + x).join('')}</nav>`;
  }

  // ── Peer sidebar: on leaf/index pages, shows siblings; on hub pages, shows children ──
  function renderPeerSidebar() {
    // Hub pages: show their children as the sidebar
    if (PAGE.children && PAGE.children.length) {
      const items = PAGE.children.map(k => {
        const c = window.SV_PAGES[k];
        if (!c) return '';
        return `<li><a href="${rel(c.href)}">${c.title}</a></li>`;
      }).join('');
      return `<div class="sv-hub-toc"><h4>In this section</h4><ul>${items}</ul></div>`;
    }
    // Non-hub pages: show peer list under parent
    if (!PAGE.parent) return '';
    const parent = window.SV_PAGES[PAGE.parent];
    if (!parent || !parent.children) return '';
    const items = parent.children.map(k => {
      const c = window.SV_PAGES[k];
      if (!c) return '';
      const active = k === PAGE_KEY ? ' class="is-active"' : '';
      return `<li><a href="${rel(c.href)}"${active}>${c.title}</a></li>`;
    }).join('');
    return `<div class="sv-peer-nav"><h4><a href="${rel(parent.href)}">${parent.title}</a></h4><ul>${items}</ul></div>`;
  }

  // ── In-page ToC (sections within current page) ──
  function renderPageToC() {
    if (PAGE_SECTIONS.length < 2) return '';
    const groups = PAGE.groups;
    if (groups && groups.length) {
      return groups.map(g => {
        const items = g.ids.map(id => {
          const s = sectionById.get(id);
          if (!s) return '';
          return `<a href="#${s.id}" data-sv-toc="${s.id}">${s.title}</a>`;
        }).join('');
        return `<div class="sv-toc-group"><h4>${g.label}</h4><div class="sv-toc-flat">${items}</div></div>`;
      }).join('');
    }
    const items = PAGE_SECTIONS.map(s =>
      `<a href="#${s.id}" data-sv-toc="${s.id}">${s.title}</a>`
    ).join('');
    return `<div class="sv-toc-group"><h4>On this page</h4><div class="sv-toc-flat">${items}</div></div>`;
  }

  // ── Section rendering ──
  function renderSection(s, index) {
    // On cinematic pages (PAGE.fullHero), the hero already displays the page
    // title prominently. Suppress the h1 of the first section so it isn't
    // duplicated directly below the hero.
    const suppressHeading = !!PAGE.fullHero && index === 0;
    const group = s.group ? `<div class="sv-section-group">${s.group}</div>` : '';
    const heading = suppressHeading ? '' : `<h1>${renderInline(s.title)}</h1>`;
    const subtitle = s.subtitle ? `<div class="sv-subtitle">${renderInline(s.subtitle)}</div>` : '';
    const body = s.body ? `<p class="sv-section-body">${renderInline(s.body)}</p>` : '';
    return `<section class="sv-section" id="${s.id}">
      ${group}
      ${heading}
      ${subtitle}
      ${body}
      ${renderBlocks(s.blocks)}
    </section>`;
  }

  // ── Page header (title block + hero image) ──
  // Normal pages only. Cinematic pages (PAGE.fullHero) are handled by
  // render() directly so the hero can break out of the container.
  function renderPageHeader() {
    // Use a real <img> with onerror. If the file is missing, the parent figure
    // removes itself entirely — no empty reserved space on the page.
    const hero = PAGE.hero
      ? `<figure class="sv-page-hero"><img src="${rel('assets/art/'+PAGE.hero)}" alt="" onerror="this.parentElement.remove();"/></figure>`
      : '';
    return `
      ${hero}
      <div class="sv-page-head">
        <h1 class="sv-page-title">${PAGE.title}</h1>
        <div class="sv-page-rule"></div>
      </div>
    `;
  }

  // ── Cinematic hero: full-bleed image with title overlay.
  //    Rendered OUTSIDE the normal container so it spans the viewport width. ──
  function renderCinematicHero() {
    const src = rel('assets/art/' + PAGE.fullHero);
    return `
      <section class="sv-cinema-hero" id="sv-cinema-hero">
        <img class="sv-cinema-hero-img"
             src="${src}" alt=""
             onerror="document.getElementById('sv-cinema-hero').classList.add('is-missing')"/>
        <div class="sv-cinema-hero-fade"></div>
        <div class="sv-cinema-hero-content">
          <h1 class="sv-cinema-title">${PAGE.title}</h1>
        </div>
      </section>
    `;
  }

  // ── Footer link back to the parent on cinematic pages ──
  function renderCinematicFooter() {
    if (!PAGE.parent) return '';
    const parent = window.SV_PAGES[PAGE.parent];
    if (!parent) return '';
    return `
      <nav class="sv-cinema-footer">
        <a class="sv-cinema-return" href="${rel(parent.href)}">&larr; Return to ${parent.title}</a>
      </nav>
    `;
  }

  // ── Plain image hero: a full-viewport image fixed behind the page, with NO
  //    text over it. The content sheet scrolls up and progressively covers it,
  //    the image blending into the page background at its lower edge. ──
  function renderImageHero() {
    const src = rel('assets/art/' + PAGE.imageHero);
    return `
      <div class="sv-imghero" id="sv-imghero" aria-hidden="true">
        <img class="sv-imghero-img" src="${src}" alt=""
             onerror="document.getElementById('sv-imghero').classList.add('is-missing')"/>
        <div class="sv-imghero-veil"></div>
        <div class="sv-imghero-dim" id="sv-imghero-dim"></div>
      </div>
    `;
  }

  // ── Centered hero title for image-hero pages: numeral + title + subtitle
  //    centred in the first viewport over the clear image, with a very subtle
  //    oval scrim behind it for legibility. ──
  function renderImageHeroTitle() {
    return `
      <div class="sv-imghero-title">
        <div class="sv-imghero-titlebox">
          <h1 class="sv-imghero-h1">${PAGE.title}</h1>
        </div>
      </div>
    `;
  }

  // ── Layout scaffold ──
  function render() {
    const sigilImg = rel('assets/sigil.png');
    const isCinema = !!PAGE.fullHero;
    const isImgHero = !!PAGE.imageHero;

    document.body.innerHTML = `
      <div class="sv-sticky-top">
        <header class="sv-head">
          <a class="sv-mark" href="${rel('index.html')}">
            <img src="${sigilImg}" alt="" class="sv-mark-sigil"/>
            <span class="sv-mark-text">The Sacred Veil</span>
          </a>
          <button class="sv-toc-toggle" id="sv-toc-toggle" aria-label="Menu">☰</button>
          <div class="sv-head-search-wrap">
            <input class="sv-search" id="sv-search" placeholder="Search the archive…" autocomplete="off"/>
            <div class="sv-search-results" id="sv-search-results" hidden></div>
          </div>
          <a class="sv-glossary-link" href="${rel('glossary.html')}">Glossary</a>
        </header>

        <nav class="sv-archbar" aria-label="Main sections">${renderArchBar()}</nav>
      </div>

      ${isCinema ? renderCinematicHero() : ''}
      ${isImgHero ? renderImageHero() : ''}

      ${isImgHero ? '<div class="sv-imghero-sheet">' + renderImageHeroTitle() + '<div class="sv-imghero-body">' : ''}
      <div class="sv-container${isCinema ? ' sv-container--cinema' : ''}${isImgHero ? ' sv-container--imghero' : ''}">
        ${renderBreadcrumbs()}

        ${(isCinema || isImgHero) ? '' : renderPageHeader()}

        <div class="sv-layout${isCinema ? ' sv-layout--cinema' : ''}">
          ${isCinema ? '' : `<aside class="sv-toc" id="sv-toc">
            ${renderPeerSidebar()}
            ${renderPageToC()}
          </aside>`}

          <main class="sv-main">
            ${PAGE_SECTIONS.map(renderSection).join('')}
            ${isCinema ? renderCinematicFooter() : ''}
          </main>

          ${isCinema ? '' : `<aside class="sv-rail" id="sv-rail"></aside>`}
        </div>
      </div>
      ${isImgHero ? '</div></div>' : ''}

      <div class="sv-tip" id="sv-tip">
        <div class="sv-tip-kind"></div>
        <div class="sv-tip-name"></div>
        <div class="sv-tip-body"></div>
      </div>
    `;
    if (isImgHero) {
      document.body.classList.add('has-imghero');
      document.documentElement.classList.add('has-imghero');
    }
  }

  render();

  // ── Auto-condensing top bar (site-wide) ──
  //   Expanded (brand row + arch bar) only at the very top of the page.
  //   Scroll down → the brand row folds away leaving the slim arch bar.
  //   Back to the top → it opens up again. Hysteresis avoids flicker.
  (function initCondenseBar() {
    const CONDENSE_AT = 90, EXPAND_AT = 24;
    let ticking = false;
    function apply() {
      ticking = false;
      const y = window.scrollY;
      const condensed = document.body.classList.contains('sv-condensed');
      if (!condensed && y > CONDENSE_AT) document.body.classList.add('sv-condensed');
      else if (condensed && y < EXPAND_AT) document.body.classList.remove('sv-condensed');
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(apply); ticking = true; }
    }, { passive: true });
    apply();
  })();

  // ── Image-hero scroll darkening ──
  //   The fixed hero image dims progressively as you scroll: from START (a
  //   faint dim so it reads as a backdrop from the outset) to END (nearly
  //   covered) once you've scrolled roughly one viewport. It never fully
  //   hides, lingering as a ghost behind the page content.
  (function initImageHeroDim() { return;
    const dim = document.getElementById('sv-imghero-dim');
    if (!dim) return;
    const START = 0.00;   // fully clear at the very top
    const END   = 0.82;   // darkened but still slightly viewable once ~one screen scrolled
    let ticking = false;
    function apply() {
      ticking = false;
      const p = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
      dim.style.opacity = (START + (END - START) * p).toFixed(3);
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(apply); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', apply, { passive: true });
    apply();
  })();

  // ── Parallax for .sv-parallax inside cinematic figures.
  //    Each frame, position the inner images so they translate at a fraction
  //    of scroll speed (data-parallax-speed, default 0.5 → image moves at 50%
  //    of page scroll, drifting more slowly than the surrounding text).
  //    Skipped when the user has prefers-reduced-motion set.
  (function initParallax() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const frames = Array.from(document.querySelectorAll('.sv-parallax'));
    if (!frames.length) return;
    let ticking = false;
    function update() {
      ticking = false;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const viewCenter = vh / 2;
      frames.forEach(frame => {
        const rect = frame.getBoundingClientRect();
        // Skip frames far off-screen — saves transform thrash.
        if (rect.bottom < -vh || rect.top > vh * 2) return;
        const speed = parseFloat(frame.dataset.parallaxSpeed) || 0.5;
        const elCenter = rect.top + rect.height / 2;
        // delta>0 when frame center is above viewport center (we've scrolled past it).
        const delta = viewCenter - elCenter;
        // Image translates by delta*(1-speed) so its net visual scroll is `speed` * page scroll.
        const y = delta * (1 - speed);
        const t = `translate3d(0, ${y.toFixed(1)}px, 0)`;
        const sharp = frame.querySelector('.sv-parallax-img');
        const blur  = frame.querySelector('.sv-parallax-blur');
        if (sharp) sharp.style.transform = t;
        // Blur layer scales slightly + translates a touch faster for depth.
        if (blur)  blur.style.transform  = `translate3d(0, ${(y * 1.15).toFixed(1)}px, 0) scale(1.08)`;
      });
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  })();

  // ── Measure the sticky top (header + archbar) and expose its height as a
  //    CSS variable so sidebar offsets and section scroll-margins stay exact.
  //    Re-measures on resize and whenever its contents reflow.
  (function trackStickyHeight() {
    const top = document.querySelector('.sv-sticky-top');
    if (!top) return;
    const apply = () => {
      const h = Math.round(top.getBoundingClientRect().height);
      if (h > 0) document.documentElement.style.setProperty('--sticky-top-h', h + 'px');
    };
    apply();
    window.addEventListener('resize', apply);
    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(apply).observe(top);
    }
  })();

  // ── Populate right rail with cross-page mentions ──
  (function populateRail() {
    const rail = document.getElementById('sv-rail');
    if (!rail) return;
    // Find all links on this page that point to other pages (data-sv-external)
    const extLinks = Array.from(document.querySelectorAll('.sv-main a[data-sv-external="1"]'));
    // Dedupe by ref and collect
    const seenRefs = new Set();
    const items = [];
    extLinks.forEach(a => {
      const ref = a.dataset.svRef;
      if (seenRefs.has(ref)) return;
      seenRefs.add(ref);
      items.push({ ref, text: a.textContent.trim(), href: a.href });
    });
    if (!items.length) {
      // No mentions — remove the rail entirely so the grid collapses cleanly.
      rail.remove();
      // Switch the layout grid to a 2-column template when the rail is gone.
      const layout = document.querySelector('.sv-layout');
      if (layout) layout.classList.add('sv-layout--no-rail');
      return;
    }
    // Group by target hub if possible
    items.sort((a, b) => a.text.localeCompare(b.text));
    const listHtml = items.map(it =>
      `<li><a href="${it.href}" data-sv-ref="${it.ref}">${it.text} <span class="sv-rail-ext">↗</span></a></li>`
    ).join('');
    rail.innerHTML = `<h5>Mentions</h5><ul>${listHtml}</ul>`;
  })();

  // ── Search ──
  function defSlug(term) {
    return term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }
  function buildSearchCorpus() {
    const corpus = [];
    Object.values(window.SV_PAGES).forEach(cfg => {
      const hub = window.SV_HUBS.find(h => h.key === cfg.hub);
      (cfg.sections || []).forEach(sid => {
        const s = sectionById.get(sid);
        if (!s) return;
        corpus.push({
          title: s.title,
          page: cfg,
          hub: hub,
          anchor: '#' + s.id,
        });
        // Also index every defs term (glossary entries etc.) so terms without
        // their own section — e.g. Valley of Woe, TempCor — are searchable.
        (s.blocks || []).forEach(b => {
          if (b.type !== 'defs') return;
          b.items.forEach(([term]) => {
            corpus.push({
              title: term,
              page: cfg,
              hub: hub,
              anchor: '#' + defSlug(term),
            });
          });
        });
      });
    });
    return corpus;
  }
  const CORPUS = buildSearchCorpus();
  const searchInput = document.getElementById('sv-search');
  const searchResults = document.getElementById('sv-search-results');

  function runSearch(q) {
    q = q.toLowerCase().trim();
    if (q.length < 2) { searchResults.hidden = true; return; }
    const hits = CORPUS.filter(item =>
      item.title.toLowerCase().includes(q)
    ).slice(0, 12);
    if (!hits.length) {
      searchResults.innerHTML = '<div class="sv-sr-empty">No matches.</div>';
      searchResults.hidden = false;
      return;
    }
    searchResults.innerHTML = hits.map((item, i) => {
      const prefix = item.hub ? `${item.hub.numeral} · ${item.hub.short.toUpperCase()}` : '';
      return `<a href="${rel(item.page.href) + item.anchor}" data-sv-sr="${i}"${i===0?' class="active"':''}>
        <span class="sv-sr-kind">${prefix}</span>${item.title}
      </a>`;
    }).join('');
    searchResults.hidden = false;
  }
  searchInput.addEventListener('input', () => runSearch(searchInput.value));
  searchInput.addEventListener('focus', () => { if (searchInput.value.length >= 2) runSearch(searchInput.value); });
  searchInput.addEventListener('blur', () => setTimeout(() => searchResults.hidden = true, 200));
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput && !e.target.matches('input,textarea')) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // ── Tooltips ──
  const tip = document.getElementById('sv-tip');
  let tipHideTimer = null;
  function showTip(el) {
    const ref = el.dataset.svRef;
    const t = (window.SV_TOOLTIPS || {})[ref];
    if (!t) return;
    tip.querySelector('.sv-tip-kind').textContent = t.kind || '';
    tip.querySelector('.sv-tip-name').textContent = t.name || '';
    tip.querySelector('.sv-tip-body').textContent = t.text || '';
    const r = el.getBoundingClientRect();
    tip.style.visibility = 'visible';
    tip.classList.add('is-open');
    // Position
    const tipRect = tip.getBoundingClientRect();
    let top = r.bottom + 8;
    let left = r.left;
    if (left + tipRect.width > window.innerWidth - 12) left = window.innerWidth - tipRect.width - 12;
    if (top + tipRect.height > window.innerHeight - 12) top = r.top - tipRect.height - 8;
    tip.style.top = top + 'px';
    tip.style.left = Math.max(12, left) + 'px';
  }
  function hideTip() {
    tip.classList.remove('is-open');
    tipHideTimer = setTimeout(() => { tip.style.visibility = 'hidden'; }, 200);
  }
  document.addEventListener('mouseover', (e) => {
    const t = e.target.closest('[data-sv-ref]');
    if (!t) return;
    clearTimeout(tipHideTimer);
    showTip(t);
  });
  document.addEventListener('mouseout', (e) => {
    const t = e.target.closest('[data-sv-ref]');
    if (!t) return;
    hideTip();
  });

  // ── Scroll-spy ──
  const tocLinks = new Map();
  document.querySelectorAll('[data-sv-toc]').forEach(a => tocLinks.set(a.dataset.svToc, a));
  let currentId = null;
  let suppressIO = false;
  let suppressTimer = null;
  const sectionEls = Array.from(document.querySelectorAll('.sv-section'));

  function setActive(id) {
    if (!id || id === currentId) return;
    currentId = id;
    tocLinks.forEach(a => a.classList.remove('active'));
    const act = tocLinks.get(id);
    if (act) act.classList.add('active');
  }
  // Cache section offsets so scrolling never forces layout reads — positions
  // are re-measured only on resize/load, not per scroll frame.
  let spyTops = [], spyStickyH = 108;
  function measureSpy() {
    spyStickyH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sticky-top-h')) || 108;
    const sy = window.scrollY;
    spyTops = sectionEls.map(el => {
      const r = el.getBoundingClientRect();
      return { id: el.id, top: r.top + sy, bottom: r.bottom + sy };
    });
  }
  function updateActive() {
    if (suppressIO) return;
    const readLine = window.scrollY + spyStickyH + 30;
    let active = sectionEls[0]?.id;
    for (const s of spyTops) {
      if (s.top <= readLine) active = s.id;
      else break;
    }
    const last = spyTops[spyTops.length - 1];
    if (last && last.bottom < readLine) active = last.id;
    setActive(active);
  }
  let scrollFrame = null;
  function onScroll() {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = null;
      updateActive();
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { measureSpy(); updateActive(); });
  window.addEventListener('load', () => { measureSpy(); updateActive(); });
  measureSpy();
  updateActive();

  // ── Click handler for #anchor links ──
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute('href');
    if (hash === '#' || hash.length < 2) return;
    const id = hash.slice(1);
    const tgt = document.getElementById(id);
    if (!tgt) return;
    e.preventDefault();
    suppressIO = true;
    clearTimeout(suppressTimer);
    suppressTimer = setTimeout(() => { suppressIO = false; }, 900);
    setActive(id);
    tgt.scrollIntoView({ behavior: 'smooth', block: 'start' });
    try { history.replaceState(null, '', hash); } catch(_) {}
  });

  // ── Mobile TOC toggle ──
  const tocToggle = document.getElementById('sv-toc-toggle');
  const tocEl     = document.getElementById('sv-toc');
  if (tocToggle && tocEl) {
    tocToggle.addEventListener('click', () => tocEl.classList.toggle('is-open'));
  }
})();

/* ═══ Floating hero title — drifts up at half scroll-speed, shrinks, and docks
   at the top instead of vanishing. Child pages open already mid-scroll (scroll
   UP for the full image, DOWN to read); hub pages open full. Driven by the
   browser's compositor (ScrollTimeline) with a rAF fallback for older engines. ═══ */
(function initHeroTitle(){
  if(!document.documentElement.classList.contains('has-imghero')) return;
  var hero=document.getElementById('sv-imghero');
  var img=hero?hero.querySelector('.sv-imghero-img'):null;
  var dim=document.getElementById('sv-imghero-dim');
  var orig=document.querySelector('.sv-imghero-title');
  var titleText=(orig&&orig.querySelector('.sv-imghero-h1'))?orig.querySelector('.sv-imghero-h1').textContent:document.title;
  var subText=(window.SV_PAGES&&window.__SV_KEY__&&SV_PAGES[window.__SV_KEY__])?(SV_PAGES[window.__SV_KEY__].subtitle||''):'';
  if(orig){ orig.classList.add('sv-d2-spacer'); orig.style.visibility='hidden'; }
  var ft=document.createElement('div'); ft.className='sv-d2-title';
  ft.innerHTML='<h1 class="sv-imghero-h1">'+titleText+'</h1>'+(subText?'<div class="sv-d2-sub">'+subText+'</div>':'');
  document.body.appendChild(ft);
  var h=ft.querySelector('h1'), sub=ft.querySelector('.sv-d2-sub');
  var bodyEl=document.querySelector('.sv-imghero-body');
  var hint=document.createElement('div'); hint.className='sv-d2-hint'; hint.textContent='▲ scroll up for the full scene';
  document.body.appendChild(hint);
  if('scrollRestoration' in history) history.scrollRestoration='manual';
  /* Escape hatch: append ?nopara to the URL to freeze the hero image (no parallax) */
  var noPara=/nopara/.test(location.search);
  function lerp(a,b,p){return a+(b-a)*p;}
  /* Native scroll-linked animations: the compositor moves the title/image in
     lockstep with scroll — no one-frame JS lag. Falls back to the rAF path. */
  var native=!!window.ScrollTimeline, nativeLive=false, anims=[];
  function cancelAnims(){ anims.forEach(function(a){ try{a.cancel();}catch(e){} }); anims=[]; }
  function buildNative(){
    if(!native) return;
    cancelAnims();
    try{
      /* create the timeline fresh each build — early-created ones can stick inactive */
      var tl=new ScrollTimeline({source:document.scrollingElement,axis:'block'});
      var vh=innerHeight;
      var driftEnd=Math.max(1,vh*0.84-144);   /* scroll depth where the title docks */
      function add(el,kf,end){ if(!el)return; anims.push(el.animate(kf,{timeline:tl,fill:'both',easing:'linear',rangeStart:'0px',rangeEnd:end.toFixed(1)+'px'})); }
      add(ft,[{transform:'translate3d(0,'+(vh*0.42).toFixed(1)+'px,0)'},{transform:'translate3d(0,72px,0)'}],driftEnd);
      add(h,[{transform:'scale(1)'},{transform:'scale(0.7115)'}],driftEnd);
      if(!noPara) add(img,[{transform:'translate3d(0,0,0)'},{transform:'translate3d(0,'+(vh*0.11).toFixed(1)+'px,0)'}],vh*0.9167);
      add(dim,[{opacity:0},{opacity:0.5}],vh);
    }catch(e){ cancelAnims(); native=false; nativeLive=false; }
  }
  /* Build, then verify the timeline actually went live; retry a few frames and
     fall back to the JS-driven path for good if it never does. */
  var __armTries=0;
  function armNative(){
    if(!native) return;
    buildNative();
    requestAnimationFrame(function(){
      if(!native) return;
      if(anims.length&&anims[0].timeline&&anims[0].timeline.currentTime!==null){ nativeLive=true; lastY=-1; return; }
      if(++__armTries<=90){ armNative(); }
      else { cancelAnims(); native=false; nativeLive=false; lastY=-1; }
    });
  }
  var hH=0, bodyTop=0;
  function measure(){
    hH=h.offsetHeight;
    if(bodyEl) bodyTop=bodyEl.getBoundingClientRect().top+window.scrollY;
  }
  function on(y,vh){
    var startY=vh*0.42,top=72;
    var ty=Math.max(top,startY-y*0.5);
    var np=Math.min(Math.max((startY-ty)/(startY-top),0),1);
    var sc=lerp(1,74/104,np);
    if(!nativeLive){
      ft.style.transform='translate3d(0,'+ty.toFixed(2)+'px,0)';
      h.style.transform='scale('+sc.toFixed(4)+')';
      if(img&&!noPara) img.style.transform='translate3d(0,'+Math.min(y*0.12,vh*0.11).toFixed(1)+'px,0)';
      if(dim) dim.style.opacity=(Math.min(y/vh,1)*0.5).toFixed(3);
    }
    if(sub) sub.style.opacity=(1-Math.min(np*1.9,1)).toFixed(2);
    var g=(bodyTop-y)-(ty+hH*sc);   /* pure arithmetic — no layout reads per frame */
    ft.style.opacity=Math.max(0,Math.min(1,g/160)).toFixed(2);
    hint.style.opacity=(y<vh*0.22)?'0':(y<vh*0.85?'0.75':'0');
  }
  var lastY=-1,lastVh=-1;
  function frame(){
    var y=window.scrollY,vh=innerHeight;
    if(y!==lastY||vh!==lastVh){ lastY=y; lastVh=vh; on(y,vh); }
    requestAnimationFrame(frame);
  }
  var __isChild=(function(){try{var pn=location.pathname;for(var k in (window.SV_PAGES||{})){var hz=SV_PAGES[k].href||'';if(hz&&pn.slice(-hz.length)===hz)return !!SV_PAGES[k].parent;}}catch(e){}return true;})();
  var __userScrolled=false;
  function land(){
    var target=__isChild?Math.round(innerHeight*0.55):0;
    var de=document.documentElement, prev=de.style.scrollBehavior;
    de.style.scrollBehavior='auto';           /* kill site-wide smooth scroll for this jump */
    window.scrollTo(0,target);
    de.style.scrollBehavior=prev;
    if(target>90){                             /* land already past the condense threshold: */
      document.body.classList.add('sv-condensed','sv-no-anim');   /* bar starts minimal… */
      requestAnimationFrame(function(){ requestAnimationFrame(function(){
        document.body.classList.remove('sv-no-anim');             /* …and animates again after */
      }); });
    }
    lastY=window.scrollY; lastVh=innerHeight;
    on(lastY,lastVh);                          /* paint the correct state immediately */
  }
  window.addEventListener('scroll',function(){__userScrolled=true;},{passive:true});
  window.addEventListener('resize',function(){ measure(); if(native){ __armTries=0; armNative(); } lastY=-1; });
  window.addEventListener('load',function(){ measure(); lastY=-1; if(!__userScrolled) land(); });
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(function(){ measure(); lastY=-1; });
  measure(); land();
  armNative();
  requestAnimationFrame(frame);
})();
