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
  ]);

  function linkHref(targetId) {
    if (GLOSSARY_IDS.has(targetId)) {
      return rel('glossary.html') + '#' + targetId;
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
    const external = !seen.has(id) && !GLOSSARY_IDS.has(id) && entityToPage.has(id);
    const isGlossary = GLOSSARY_IDS.has(id) && PAGE_KEY !== 'glossary';
    const extAttr = (external || isGlossary) ? ' data-sv-external="1"' : '';
    return `<a class="sv-link" href="${href}" data-sv-ref="${safeId}"${extAttr}>${display}</a>`;
  }

  function renderInline(text) {
    if (!text) return '';
    let out = text.replace(/\[\[([a-z0-9-]+):([^\]]+)\]\]/gi, (m, id, disp) => linkHTML(id, disp));
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
          return '<dl class="sv-defs">' +
            b.items.map(([k,v]) => `<div class="sv-def"><dt>${renderInline(k)}</dt><dd>${renderInline(v)}</dd></div>`).join('') +
            '</dl>';
        case 'image-slot':
          // Render an optional image. Fails silently if the asset doesn't exist.
          return `<figure class="sv-figure" data-slot="${b.file}"><img src="${rel('assets/art/' + b.file)}" alt="" onerror="this.closest('figure').classList.add('missing')"/>${b.caption?`<figcaption>${renderInline(b.caption)}</figcaption>`:''}</figure>`;
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
  function renderSection(s) {
    const group = s.group ? `<div class="sv-section-group">${s.group}</div>` : '';
    const subtitle = s.subtitle ? `<div class="sv-subtitle">${renderInline(s.subtitle)}</div>` : '';
    const body = s.body ? `<p class="sv-section-body">${renderInline(s.body)}</p>` : '';
    return `<section class="sv-section" id="${s.id}">
      ${group}
      <h1>${renderInline(s.title)}</h1>
      ${subtitle}
      ${body}
      ${renderBlocks(s.blocks)}
    </section>`;
  }

  // ── Page header (title block + hero image) ──
  function renderPageHeader() {
    const numeral = PAGE.numeral ? `<div class="sv-page-num">${PAGE.numeral}</div>` : '';
    const sub = PAGE.subtitle ? `<div class="sv-page-sub">${PAGE.subtitle}</div>` : '';
    // Use a real <img> with onerror. If the file is missing, the parent figure
    // removes itself entirely — no empty reserved space on the page.
    const hero = PAGE.hero
      ? `<figure class="sv-page-hero"><img src="${rel('assets/art/'+PAGE.hero)}" alt="" onerror="this.parentElement.remove();"/></figure>`
      : '';
    return `
      ${hero}
      <div class="sv-page-head">
        ${numeral}
        <h1 class="sv-page-title">${PAGE.title}</h1>
        ${sub}
        <div class="sv-page-rule"></div>
      </div>
    `;
  }

  // ── Layout scaffold ──
  function render() {
    const sigilImg = rel('assets/sigil.png');
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
          <a class="sv-gm-link" href="${rel('gm.html')}">GM</a>
        </header>

        <nav class="sv-archbar" aria-label="Main sections">${renderArchBar()}</nav>
      </div>

      <div class="sv-container">
        ${renderBreadcrumbs()}

        ${renderPageHeader()}

        <div class="sv-layout">
          <aside class="sv-toc" id="sv-toc">
            ${renderPeerSidebar()}
            ${renderPageToC()}
          </aside>

          <main class="sv-main">
            ${PAGE_SECTIONS.map(renderSection).join('')}
          </main>

          <aside class="sv-rail" id="sv-rail"></aside>
        </div>
      </div>

      <div class="sv-tip" id="sv-tip">
        <div class="sv-tip-kind"></div>
        <div class="sv-tip-name"></div>
        <div class="sv-tip-body"></div>
      </div>
    `;
  }

  render();

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
  function updateActive() {
    if (suppressIO) return;
    const stickyH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sticky-top-h')) || 108;
    const readLine = stickyH + 30;
    let active = sectionEls[0]?.id;
    for (const el of sectionEls) {
      const top = el.getBoundingClientRect().top;
      if (top <= readLine) active = el.id;
      else break;
    }
    const last = sectionEls[sectionEls.length - 1];
    if (last && last.getBoundingClientRect().bottom < readLine) active = last.id;
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
  window.addEventListener('resize', onScroll);
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
