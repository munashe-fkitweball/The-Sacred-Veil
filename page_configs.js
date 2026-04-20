// ============================================================================
// SACRED VEIL — Wiki page configuration
//
// - Each page has a `key` (unique), `href` (relative URL from site root),
//   `numeral` (for hub pages), `title`, `subtitle`, optional `hero` image
//   filename, a `sections` array of section IDs it contains, and optional
//   `groups` for sidebar sub-structure.
// - The top arch bar iterates SV_HUBS.
// - Hub pages also define a `children` array (other pages under them) which is
//   used for breadcrumbs and the "children index" rendered on the hub itself.
// ============================================================================

window.SV_HUBS = [
  { key: 'campaign', numeral: 'I',    short: 'Campaign', href: 'campaign.html' },
  { key: 'kingdom',  numeral: 'II',   short: 'Kingdom',  href: 'kingdom/index.html' },
  { key: 'faith',    numeral: 'III',  short: 'Faith',    href: 'faith/index.html' },
  { key: 'magic',    numeral: 'IV',   short: 'Magic',    href: 'magic/index.html' },
  { key: 'houses',   numeral: 'V',    short: 'Houses',   href: 'houses/index.html' },
  { key: 'guilds',   numeral: 'VI',   short: 'Guilds',   href: 'guilds/index.html' },
  { key: 'rules',    numeral: 'VII',  short: 'Rules',    href: 'rules.html' },
  { key: 'glossary', numeral: 'VIII', short: 'Glossary', href: 'glossary.html' },
];

window.SV_PAGES = {

  // ═══════════════════════════════════════════════════════════════════════
  // I · THE CAMPAIGN
  // ═══════════════════════════════════════════════════════════════════════
  'campaign': {
    hub: 'campaign',
    href: 'campaign.html',
    numeral: 'I',
    title: 'The Campaign',
    subtitle: 'What you are walking into',
    hero: 'hero-campaign.jpg',
    sigil: 'campaign-sigil.png',
    sections: ['introduction', 'the-hook', 'central-tensions', 'tone-scope'],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // II · THE KINGDOM
  // ═══════════════════════════════════════════════════════════════════════
  'kingdom': {
    hub: 'kingdom',
    href: 'kingdom/index.html',
    numeral: 'II',
    title: 'The Kingdom & Its People',
    subtitle: 'Geography, places, races, and those who shape them',
    hero: 'hero-kingdom.jpg',
    sigil: 'kingdom-sigil.png',
    sections: ['kingdom-overview'],
    children: ['kingdom/geography', 'kingdom/peoples', 'kingdom/outcasts', 'kingdom/places', 'kingdom/minor-places', 'kingdom/people'],
  },
  'kingdom/geography': {
    hub: 'kingdom',
    parent: 'kingdom',
    href: 'kingdom/geography.html',
    title: 'Geography & Environment',
    subtitle: 'The regions of K\'naan',
    sections: ['geography-intro', 'silt-mere', 'eastern-massif', 'gorse-barrens', 'great-forests'],
  },
  'kingdom/peoples': {
    hub: 'kingdom',
    parent: 'kingdom',
    href: 'kingdom/peoples.html',
    title: 'The Peoples of K\'naan',
    subtitle: 'Those the Orthodoxy tolerates as human',
    sections: ['peoples-intro', 'ambrians', 'fringe-folk'],
    childPages: ['kingdom/outcasts'],
  },
  'kingdom/outcasts': {
    hub: 'kingdom',
    parent: 'kingdom',
    href: 'kingdom/outcasts.html',
    title: 'The Outcasts',
    subtitle: 'Those the Orthodoxy does not',
    sections: ['outcasts-intro', 'ogres', 'goblins', 'changelings'],
  },
  'kingdom/places': {
    hub: 'kingdom',
    parent: 'kingdom',
    href: 'kingdom/places.html',
    title: 'Places of K\'naan',
    subtitle: 'Cities, seats, and strongholds',
    sections: ['places-intro', 'ash-kadesh', 'har-moloch', 'bet-seraphim', 'gath-mere', 'raven-garron', 'amarsgate'],
    childPages: ['kingdom/minor-places'],
  },
  'kingdom/minor-places': {
    hub: 'kingdom',
    parent: 'kingdom/places',
    href: 'kingdom/minor-places.html',
    title: 'Notable Buildings & Lesser Holdings',
    subtitle: 'Halls, archives, and waypoints',
    sections: ['minor-places-intro', 'hollow-sun', 'thorne-archive', 'iron-gavel', 'argent-academy', 'golden-weights', 'great-forge', 'the-spike', 'grendels-reach', 'drowned-moot'],
  },
  'kingdom/people': {
    hub: 'kingdom',
    parent: 'kingdom',
    href: 'kingdom/people.html',
    title: 'Notable People',
    subtitle: 'Those who shape the kingdom',
    sections: ['people-intro',
      'amar-jannin', 'naviel-jannin', 'fidarel',
      'silas-vane', 'isolde-vane',
      'vespera', 'tybalt',
      'olenna-kaelen', 'fenris-morbray',
      'malachi-thorne', 'arkin-valerius', 'dennin-grendel',
      'malagant', 'velis', 'gest-harrow',
    ],
    groups: [
      { label: 'House Jannin', ids: ['amar-jannin', 'naviel-jannin'] },
      { label: 'The Crown',    ids: ['fidarel'] },
      { label: 'House Vane',    ids: ['silas-vane', 'isolde-vane'] },
      { label: 'House Chancel', ids: ['vespera', 'tybalt'] },
      { label: 'House Kaelen',  ids: ['olenna-kaelen'] },
      { label: 'House Morbray', ids: ['fenris-morbray'] },
      { label: 'House Thorne',  ids: ['malachi-thorne'] },
      { label: 'House Valerius',ids: ['arkin-valerius'] },
      { label: 'House Grendel', ids: ['dennin-grendel'] },
      { label: 'The Orthodoxy', ids: ['malagant', 'velis'] },
      { label: 'Chainmakers',   ids: ['gest-harrow'] },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // III · FAITH
  // ═══════════════════════════════════════════════════════════════════════
  'faith': {
    hub: 'faith',
    href: 'faith/index.html',
    numeral: 'III',
    title: 'The Faith of Prios',
    subtitle: 'The dying sun-god and his Orthodoxy',
    hero: 'hero-faith.jpg',
    sigil: 'faith-sigil.png',
    sections: ['faith-overview'],
    children: ['faith/orthodoxy', 'faith/doctrine', 'faith/hierarchy', 'faith/children', 'faith/angels', 'faith/heralds-of-the-ash'],
  },
  'faith/orthodoxy': {
    hub: 'faith',
    parent: 'faith',
    href: 'faith/orthodoxy.html',
    title: 'The Orthodoxy',
    subtitle: 'The state religion of K\'naan',
    sections: ['orthodoxy'],
  },
  'faith/doctrine': {
    hub: 'faith',
    parent: 'faith',
    href: 'faith/doctrine.html',
    title: 'Doctrine & Practice',
    subtitle: 'What the faithful are taught and what they owe',
    sections: ['doctrine-intro', 'silence-of-god', 'liturgy-of-truth', 'sun-taxes'],
  },
  'faith/hierarchy': {
    hub: 'faith',
    parent: 'faith',
    href: 'faith/hierarchy.html',
    title: 'Ecclesiastical Hierarchy',
    subtitle: 'The ranks of the Orthodoxy',
    sections: ['hierarchy-intro', 'sun-speaker', 'high-theurgs', 'inquisitors', 'theurgs-priesthood', 'cloistered-scribes'],
  },
  'faith/children': {
    hub: 'faith',
    parent: 'faith',
    href: 'faith/children.html',
    title: 'The Children of the Sun',
    subtitle: 'The three heirs of Prios',
    sections: ['children-intro', 'anari', 'valeres', 'iriel'],
  },
  'faith/angels': {
    hub: 'faith',
    parent: 'faith',
    href: 'faith/angels.html',
    title: 'The Six Angels of the Decline',
    subtitle: 'The watchers of a fading god',
    sections: ['angels-intro', 'samael', 'zachriel', 'cassiel', 'oriel', 'tariel', 'moriel'],
  },
  'faith/heralds-of-the-ash': {
    hub: 'faith',
    parent: 'faith',
    href: 'faith/heralds-of-the-ash.html',
    title: 'The Heralds of the Ash',
    subtitle: 'The heretical cult of the cadaver-sun',
    sections: ['heralds-of-the-ash'],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // IV · MAGIC & CORRUPTION
  // ═══════════════════════════════════════════════════════════════════════
  'magic': {
    hub: 'magic',
    href: 'magic/index.html',
    numeral: 'IV',
    title: 'Magic & Corruption',
    subtitle: 'The art that costs a piece of you',
    hero: 'hero-magic.jpg',
    sigil: 'magic-sigil.png',
    sections: ['magic-overview'],
    children: ['magic/seraphs-marrow', 'magic/traditions', 'magic/corruption'],
  },
  'magic/seraphs-marrow': {
    hub: 'magic',
    parent: 'magic',
    href: 'magic/seraphs-marrow.html',
    title: 'Seraph\'s Marrow',
    subtitle: 'The chemical that makes monsters of men',
    sections: ['seraphs-marrow'],
  },
  'magic/traditions': {
    hub: 'magic',
    parent: 'magic',
    href: 'magic/traditions.html',
    title: 'Magical Traditions',
    subtitle: 'The four paths a practitioner can walk',
    sections: ['traditions-intro', 'theurgs', 'wizards', 'witches', 'sorcerers'],
  },
  'magic/corruption': {
    hub: 'magic',
    parent: 'magic',
    href: 'magic/corruption.html',
    title: 'Corruption',
    subtitle: 'The cost of every cast',
    sections: ['corruption', 'corruption-house-rules'],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // V · HOUSES
  // ═══════════════════════════════════════════════════════════════════════
  'houses': {
    hub: 'houses',
    href: 'houses/index.html',
    numeral: 'V',
    title: 'Houses & The High Council',
    subtitle: 'Eight Houses. Seven mottos. One empty throne.',
    hero: 'hero-houses.jpg',
    sigil: 'houses-sigil.png',
    sections: ['houses-overview'],
    children: ['houses/vane', 'houses/chancel', 'houses/kaelen', 'houses/morbray', 'houses/thorne', 'houses/valerius', 'houses/grendel', 'houses/jannin'],
  },
  'houses/vane':     { hub:'houses', parent:'houses', href:'houses/vane.html',     title:'House Vane',     sigil:'vane-sigil.png',     sections:['house-vane'] },
  'houses/chancel':  { hub:'houses', parent:'houses', href:'houses/chancel.html',  title:'House Chancel',  sigil:'chancel-sigil.png',  sections:['house-chancel'] },
  'houses/kaelen':   { hub:'houses', parent:'houses', href:'houses/kaelen.html',   title:'House Kaelen',   sigil:'kaelen-sigil.png',   sections:['house-kaelen'] },
  'houses/morbray':  { hub:'houses', parent:'houses', href:'houses/morbray.html',  title:'House Morbray',  sigil:'morbray-sigil.png',  sections:['house-morbray'] },
  'houses/thorne':   { hub:'houses', parent:'houses', href:'houses/thorne.html',   title:'House Thorne',   sigil:'thorne-sigil.png',   sections:['house-thorne'] },
  'houses/valerius': { hub:'houses', parent:'houses', href:'houses/valerius.html', title:'House Valerius', sigil:'valerius-sigil.png', sections:['house-valerius'] },
  'houses/grendel':  { hub:'houses', parent:'houses', href:'houses/grendel.html',  title:'House Grendel',  sigil:'grendel-sigil.png',  sections:['house-grendel'] },
  'houses/jannin':   { hub:'houses', parent:'houses', href:'houses/jannin.html',   title:'House Jannin',   sigil:'jannin-sigil.png',   sections:['house-jannin'] },

  // ═══════════════════════════════════════════════════════════════════════
  // VI · GUILDS, CRIME & LAW
  // ═══════════════════════════════════════════════════════════════════════
  'guilds': {
    hub: 'guilds',
    href: 'guilds/index.html',
    numeral: 'VI',
    title: 'Guilds, Crime & Law',
    subtitle: 'The trades above, the syndicates beneath, and the Watch between',
    hero: 'hero-guilds.jpg',
    sigil: 'guilds-sigil.png',
    sections: ['guilds-overview'],
    children: ['guilds/guilds', 'guilds/crime', 'guilds/law'],
  },
  'guilds/guilds': {
    hub: 'guilds',
    parent: 'guilds',
    href: 'guilds/guilds.html',
    title: 'The Guilds',
    subtitle: 'Sanctioned trades of K\'naan',
    sections: ['guilds-page-intro', 'covenant-of-coin', 'chainmakers', 'silt-strider-collective', 'ordo-magicka'],
  },
  'guilds/crime': {
    hub: 'guilds',
    parent: 'guilds',
    href: 'guilds/crime.html',
    title: 'Criminal Enterprises',
    subtitle: 'Those who rose when the throne fell',
    sections: ['crime-intro', 'noose-holders', 'iron-spire', 'silent-scrivener', 'silt-eaters', 'bandits'],
  },
  'guilds/law': {
    hub: 'guilds',
    parent: 'guilds',
    href: 'guilds/law.html',
    title: 'Law & the Watch',
    subtitle: 'Such justice as the kingdom keeps',
    sections: ['law-intro', 'magistracy', 'reeve', 'warden'],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // VII · HOMEBREW RULES
  // ═══════════════════════════════════════════════════════════════════════
  'rules': {
    hub: 'rules',
    href: 'rules.html',
    numeral: 'VII',
    title: 'Homebrew Rules',
    subtitle: 'Subject to change',
    sigil: 'rules-sigil.png',
    sections: ['rules-intro', 'brittle-weapons', 'shoddy-armour', 'true-quality-steel', 'fighting-blind', 'pariah-burden', 'ogre-custom-armour', 'changeling-disguise'],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // VIII · GLOSSARY
  // ═══════════════════════════════════════════════════════════════════════
  'glossary': {
    hub: 'glossary',
    href: 'glossary.html',
    numeral: 'VIII',
    title: 'Glossary',
    subtitle: 'Terms without their own section',
    sigil: 'glossary-sigil.png',
    sections: ['glossary'],
  },

};
