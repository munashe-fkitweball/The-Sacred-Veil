// Offline integrity check for The Sacred Veil wiki data files.
// Evals all data files, then verifies sections, children, page configs,
// [[id:label]] links, glossary IDs, tooltips, and entity aliases resolve.
const fs = require('fs');
const P = '/Users/munashe-calebmanyumbu/Documents/GitHub/The-Sacred-Veil/';
const window = {};
for (const f of ['data.js','data_sections_1.js','data_sections_2.js','data_sections_3.js','tooltips.js','page_configs.js']) {
  eval(fs.readFileSync(P + f, 'utf8'));
}

const sections = [
  ...(window.SV_SECTIONS || []),
  ...(window.SV_SECTIONS_2 || []),
  ...(window.SV_SECTIONS_3 || []),
];
const pages = window.SV_PAGES || {};
const tooltips = window.SV_TOOLTIPS || {};
const entities = (window.SV_DATA && window.SV_DATA.entities) || [];

// Extract GLOSSARY_IDS from app.js source
const appSrc = fs.readFileSync(P + 'app.js', 'utf8');
const gm = appSrc.match(/GLOSSARY_IDS = new Set\(\[([\s\S]*?)\]\)/);
const glossaryIds = new Set(gm ? [...gm[1].matchAll(/'([^']+)'/g)].map(m => m[1]) : []);

const sectionIds = new Set();
const dupSections = [];
for (const s of sections) {
  if (sectionIds.has(s.id)) dupSections.push(s.id);
  sectionIds.add(s.id);
}
const entityIds = new Set(entities.map(e => e.id));
const pageKeys = new Set(Object.keys(pages));
const tooltipIds = new Set(Object.keys(tooltips));

function defSlug(term) { return term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
const defSlugs = new Set();
for (const s of sections) for (const b of (s.blocks || [])) {
  if (b.type === 'defs') for (const [term] of b.items) defSlugs.add(defSlug(term));
}

const problems = [];

// 1. Duplicate section ids
for (const d of dupSections) problems.push(`DUPLICATE section id: ${d}`);

// 2. Page config sections exist
for (const [key, cfg] of Object.entries(pages)) {
  for (const sid of (cfg.sections || [])) if (!sectionIds.has(sid)) problems.push(`PAGE ${key}: missing section '${sid}'`);
  for (const ch of (cfg.children || [])) if (!pageKeys.has(ch)) problems.push(`PAGE ${key}: missing child page '${ch}'`);
}

// 3. Every section is used by some page
const usedSections = new Set();
for (const cfg of Object.values(pages)) for (const sid of (cfg.sections || [])) usedSections.add(sid);
for (const sid of sectionIds) if (!usedSections.has(sid)) problems.push(`ORPHAN section (no page uses it): ${sid}`);

// 4. children-grid targets exist
for (const s of sections) for (const b of (s.blocks || [])) {
  if (b.type === 'children-grid') for (const ch of (b.children || [])) if (!pageKeys.has(ch)) problems.push(`SECTION ${s.id}: children-grid missing page '${ch}'`);
}

// 5. [[id:label]] links resolve (entity | glossary | section | page key)
function checkLinks(text, where) {
  if (typeof text !== 'string') return;
  for (const m of text.matchAll(/\[\[([a-z0-9\/_-]+):/gi)) {
    const id = m[1];
    if (!entityIds.has(id) && !glossaryIds.has(id) && !sectionIds.has(id) && !pageKeys.has(id) && !tooltipIds.has(id)) {
      problems.push(`BROKEN LINK [[${id}:...]] in ${where}`);
    }
  }
}
for (const s of sections) {
  checkLinks(s.body, `section ${s.id} body`);
  for (const b of (s.blocks || [])) {
    checkLinks(b.text, `section ${s.id}`);
    for (const it of (b.items || [])) {
      if (Array.isArray(it)) it.forEach(x => checkLinks(x, `section ${s.id} defs/items`));
      else checkLinks(it, `section ${s.id} items`);
    }
    for (const row of (b.rows || [])) row.forEach(c => checkLinks(c, `section ${s.id} table`));
  }
}

// 6. Glossary IDs: each should have a tooltip AND a defs anchor on the glossary page
for (const gid of glossaryIds) {
  if (!tooltipIds.has(gid)) problems.push(`GLOSSARY id '${gid}' has no tooltip`);
  if (!defSlugs.has(gid)) problems.push(`GLOSSARY id '${gid}' has no matching defs anchor on glossary page`);
}

// 7. Entity/alias duplicate detection
const aliasSeen = new Map();
for (const e of entities) {
  for (const a of [e.name, ...(e.aliases || [])]) {
    const k = a.toLowerCase();
    if (aliasSeen.has(k) && aliasSeen.get(k) !== e.id) problems.push(`ALIAS COLLISION '${a}': ${aliasSeen.get(k)} vs ${e.id}`);
    aliasSeen.set(k, e.id);
  }
}

// 8. New constitution ids sanity list
for (const id of ['crown-charters','sun-charter','crown-charter','the-ascendance','the-kindling','dawn-heir']) {
  const inSections = sectionIds.has(id), inGlossary = glossaryIds.has(id), inTooltips = tooltipIds.has(id), inEntities = entityIds.has(id);
  console.log(`  [new] ${id}: section=${inSections} glossary=${inGlossary} tooltip=${inTooltips} entity=${inEntities}`);
}

console.log(`\nSections: ${sectionIds.size} | Pages: ${pageKeys.size} | Entities: ${entityIds.size} | Tooltips: ${tooltipIds.size} | Glossary IDs: ${glossaryIds.size}`);
if (problems.length) { console.log(`\n${problems.length} PROBLEM(S):`); problems.forEach(p => console.log('  ✗ ' + p)); process.exit(1); }
console.log('\nALL CHECKS PASSED ✓');
