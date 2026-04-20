// ============================================================================
// SACRED VEIL — Hub overviews & index intros (v2)
// These are new sections added for the nested wiki structure.
// Hub overview pages use tables to summarise children with links out.
// ============================================================================

window.SV_SECTIONS_3 = [

// ═══════════════════════════════════════════════════════════════════════
// HUB OVERVIEWS — substantive content with linked tables
// ═══════════════════════════════════════════════════════════════════════

{
  id: "kingdom-overview",
  title: "The Kingdom & Its People",
  subtitle: "A land that makes every mile a struggle",
  blocks: [
    { type: "p", text: `The kingdom of [[knaan:K'naan]] sits in the wider world of [[averium:Averium]] — a small, grim, neo-feudal realm ruled in name by a [[lord-of-lords:Lord of Lords]] and, in the Sovereign's absence, held in tense gridlock by the [[high-council:High Council of Electors]]. Its geography is obstructive, its people hardy, its politics brittle. Everything below is there to support play — who lives where, why they matter, and what a traveller can expect to find.` },
    { type: "h3", text: "What's on this page" },
    { type: "ul", items: [
      `<b>Geography & Environment</b> — the regions and weather that shape every journey.`,
      `<b>The Peoples</b> — who is considered human enough to be tolerated, and who is not.`,
      `<b>Places</b> — the cities, seats, and strongholds worth visiting (or avoiding).`,
      `<b>Notable People</b> — the individuals most likely to appear across a campaign.`,
    ]},
    { type: "children-grid", children: ['kingdom/geography', 'kingdom/peoples', 'kingdom/outcasts', 'kingdom/places', 'kingdom/minor-places', 'kingdom/people'] },
  ],
},

{
  id: "faith-overview",
  title: "The Faith of Prios",
  subtitle: "A desperate, collective effort to keep a dying flame from going out",
  body: `To understand the Faith of the Dying Sun-God, one must first accept a terrible truth: Prios is no longer an all-powerful creator. He is a father who has been stabbed, and he is slowly bleeding out in the dark. Because of this, religion in K'naan is never a comfort; it is a desperate struggle to understand why the sun-god is dying and what must be done to fix it.`,
  blocks: [
    { type: "p", text: `There is no room for celebration in the chapels of K'naan. Only the urgent, heavy duty of the living to hold the dark at bay. Faith here is not warmth — it is vigilance.` },

    { type: "h3", text: "The three forces of the faith" },
    { type: "p", text: `The long-standing [[silence-of-god:Silence of God]] has caused the Orthodoxy to splinter into three pillars of worship, each filling the vacuum his fading voice has left.` },

    { type: "h3", text: "The Orthodoxy's hierarchy" },
    { type: "p", text: `The Church is a rigid, legalistic bureaucracy that equates the Lord of Lords' law with divine will. See the [[faith/hierarchy:full hierarchy page]] for each rank.` },
    { type: "table", headers: ["Rank", "Role"], rows: [
      ["[[sun-speaker:The Sun-Speaker]]",      "Absolute head of the Orthodoxy; holds a High Council seat."],
      ["[[high-theurgs:The High Theurgs]]",    "Twelve senior priests overseeing the regions; authorise Vigils on nobles."],
      ["[[inquisitors:Inquisitors of the Brand]]", "Militant arm, devoted to Iriel and Zachriel; may inspect any household."],
      ["[[theurgs-priesthood:Theurgs]]",       "Living conduits of the fading divinity; the priesthood proper."],
      ["[[cloistered-scribes:Cloistered Scribes]]", "Monks of Cassiel; keepers of the Church's secret libraries."],
    ]},

    { type: "h3", text: "The Three Children of the Sun" },
    { type: "p", text: `As the father fades, his three children are increasingly the face of devotion. Each commands a following of their own. See the [[faith/children:Children of the Sun page]] for the full stories.` },
    { type: "table", headers: ["Name", "Epithet", "Patronage"], rows: [
      ["[[anari:Anari]]",   "The Weeping Daughter",    "Mercy, hope, healers, sanctuaries."],
      ["[[valeres:Valeres]]", "The First Son, the Iron Apostle", "Military, knights, the faithful sword — and secretly House Thorne."],
      ["[[iriel:Iriel]]",   "The Scorned Daughter, the Burning Eye", "Inquisitors, the Vigil, zealous justice."],
    ]},

    { type: "h3", text: "The Six Angels of the Decline" },
    { type: "p", text: `Where the Children inspire the living, the Six Angels govern the rites, brands, and silences. Most common folk pray to them more often than to Prios himself. See the [[faith/angels:Angels page]] for each in detail.` },
    { type: "table", headers: ["Angel", "Domain"], rows: [
      ["[[samael:Samael]]",   "The Severed Rot — purging the corrupted."],
      ["[[zachriel:Zachriel]]","The Brand — the holy iron, cauterisation."],
      ["[[cassiel:Cassiel]]", "The Vault — silence, sealed lips, preservation."],
      ["[[oriel:Oriel]]",     "The Embers — fading warmth, the White-Blind."],
      ["[[tariel:Tariel]]",   "The Spilled Chalice — blood, the toll of Marrow."],
      ["[[moriel:Moriel]]",   "The Final Breath — the rite of absolute final death."],
    ]},

    { type: "h3", text: "The heretical fringe" },
    { type: "p", text: `Outside the Orthodoxy, the [[heralds-of-the-ash:Heralds of the Ash]] preach that the sun is already a cadaver — a nihilistic cult strictly illegal and hunted by Inquisitors wherever it is found.` },
    { type: "children-grid", children: ['faith/orthodoxy', 'faith/doctrine', 'faith/hierarchy', 'faith/children', 'faith/angels', 'faith/heralds-of-the-ash'] },
  ],
},

{
  id: "magic-overview",
  title: "Magic & Corruption",
  subtitle: "The art that costs a piece of you",
  body: `In K'naan there are three sources of magic and the like: potions and chemicals, devotion to a tradition (or the rogue use of spells and magic as a [[sorcerers:sorcerer]]), and magic items. All three are rare and feared by the general populace.`,
  blocks: [
    { type: "p", text: `Of particular note is a chemical known as [[seraphs-marrow:Seraph's Marrow]] — reserved almost entirely for the nobility, capable of remaking the body at an agonising price.` },

    { type: "p", text: `Magic proper in K'naan is a guttering candle in an encroaching dark — strictly regulated, heavily feared, and inherently dangerous. To weave the fabric of reality is to invite [[corruption:Corruption]], a spiritual blight that withers the soul and eventually twists the flesh. Only those who follow a disciplined Tradition have any hope of surviving its touch. For Sacred Veil's homebrew on how Corruption actually progresses — including the "Last Stand" at Maximum — see [[magic/corruption:the Corruption page]].` },

    { type: "h3", text: "The four paths" },
    { type: "p", text: `A practitioner of magic walks one of four paths. Three are accepted (if watched); one is strictly illegal. See [[magic/traditions:Magical Traditions]] for the full page on each.` },
    { type: "table", headers: ["Tradition", "Legal?", "In short"], rows: [
      ["[[theurgs:Theurgs]]",   "Yes",  "Living conduits of [[prios:Prios]]. Power bought with decades of scholar-monk study, or rare visitation."],
      ["[[wizards:Wizards]]",   "Yes",  "Academics of the [[ordo-magicka:Ordo Magicka]]. Clinical, conservative, on a heavy state leash."],
      ["[[witches:Witches]]",   "Technically no",  "An ancient, primal tradition. Denounced by day, quietly consulted by night."],
      ["[[sorcerers:Sorcerers]]", "No", "No tradition — raw, unchannelled desire. The fastest path. Consumed by corruption."],
    ]},
    { type: "children-grid", children: ['magic/seraphs-marrow', 'magic/traditions', 'magic/corruption'] },
  ],
},

{
  id: "houses-overview",
  title: "Houses & the High Council",
  subtitle: "Eight Houses. Seven mottos. One empty throne.",
  body: `Since the death of [[fidarel:Sovereign Fidarel]], the throne of the [[lord-of-lords:Lord of Lords]] sits empty. Authority that was once the Sovereign's now rests, in tense gridlock, with the [[high-council:High Council of Electors]] — an assembly of the most powerful noble Houses and a few important minor ones.`,
  blocks: [
    { type: "p", text: `Neither armies nor laws are primarily the Crown's any longer. The Magistracy, the tax collectors, and the military are almost entirely composed of the private, sworn levies of these Houses. To know K'naan is to know who holds what, who owes what, and who wants the throne.` },

    { type: "h3", text: "The Eight Houses" },
    { type: "table", headers: ["House", "Known as", "At a glance"], rows: [
      ["[[house-vane:Vane]]",      "Architects of War",    "Iron and coal. Only producer of high-grade steel. The wealthiest House in the realm."],
      ["[[house-chancel:Chancel]]",  "Marrow-Keepers",       "The Marrow-refiners. Banned from the throne by old compact. Zealous to Prios."],
      ["[[house-kaelen:Kaelen]]",    "Masters of the Silt",  "Grain, fisheries, shoreline trade. Second-wealthiest in liquid coin."],
      ["[[house-morbray:Morbray]]",  "Frontier Keepers",     "The Gorse-Barrens pass. Feared cavalry. Militaristic and grim."],
      ["[[house-thorne:Thorne]]",    "House of Whispers",    "Record-keepers and diplomats. Operate the Magistracy. The most informed House in K'naan."],
      ["[[house-valerius:Valerius]]","The Minor Major",      "Clawed into relevance by providing Magistracy officers. Legalistic and harsh."],
      ["[[house-grendel:Grendel]]",  "The Frayed",           "Shunned minor House of the Silt-Mere fringe. Whispered to treat with Witches."],
      ["[[house-jannin:Jannin]]",    "—",                    "The PCs' employers. An ancient minor House on the eastern frontier. Leaderless."],
    ]},
    { type: "children-grid", children: ['houses/vane', 'houses/chancel', 'houses/kaelen', 'houses/morbray', 'houses/thorne', 'houses/valerius', 'houses/grendel', 'houses/jannin'] },
  ],
},

{
  id: "guilds-overview",
  title: "Guilds, Crime & Law",
  subtitle: "The trades above, the syndicates beneath, and the Watch between",
  body: `Guilds are formal professional organisations that hold immense economic and social power within K'naan. While historically kept in check by the ruling Houses and the strict doctrines of the Orthodoxy, the vacuum of power created by Sovereign Fidarel's death has allowed them to rapidly assert themselves as the de facto rulers of the streets.`,
  blocks: [
    { type: "p", text: `Where guilds hold power openly, criminal enterprises hold it in the shadows. And between them, the [[magistracy:Magistracy]] — such Watch as the kingdom keeps — tries, with sparse presence and inconsistent authority, to hold a line.` },

    { type: "h3", text: "The Guilds" },
    { type: "table", headers: ["Guild", "Purpose", "Aligned with"], rows: [
      ["[[covenant-of-coin:Covenant of Coin]]",             "Legal coin, credit, and high-value trade",       "— (pragmatic)"],
      ["[[chainmakers:Chainmakers]]",                       "Master smiths, engineers, armourers",           "[[house-vane:House Vane]]"],
      ["[[silt-strider-collective:Silt-Strider Collective]]", "Safe passage across the [[silt-mere:Silt-Mere]]", "[[house-kaelen:House Kaelen]]"],
      ["[[ordo-magicka:Ordo Magicka]]",                     "Sanctioned academic [[wizards:wizardry]]",      "The High Lords"],
    ]},

    { type: "h3", text: "Criminal Enterprises" },
    { type: "table", headers: ["Syndicate", "Trade"], rows: [
      ["[[noose-holders:Noose Holders]]",     "Old, entrenched. High-level debt, extortion, laundering."],
      ["[[iron-spire:Iron Spire]]",           "Militant. [[wound-marrow:Wound-Marrow]] trade. Addicted enforcers."],
      ["[[silent-scrivener:Silent Scrivener]]", "Information brokers. Political ruin to the highest bidder."],
      ["[[silt-eaters:Silt-Eaters]]",         "Corrupted cultists of the Silt-Mere's blight. No interest in coin."],
      ["[[bandits:Bandits]]",                 "Unaligned outlaws. Fragmented, constant, everywhere."],
    ]},

    { type: "h3", text: "Law & the Watch" },
    { type: "table", headers: ["Office", "Role"], rows: [
      ["[[magistracy:The Magistracy]]", "K'naan's police, capital-heavy. Nominally the Lord of Lords'; currently the High Council's."],
      ["[[reeve:Reeve]]",               "Senior Magistracy officer in a settlement outside the capital."],
      ["[[warden:Warden]]",             "Rank-and-file officer under a Reeve."],
    ]},
    { type: "children-grid", children: ['guilds/guilds', 'guilds/crime', 'guilds/law'] },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// INDEX-PAGE INTROS — short paragraphs for non-hub collection pages
// ═══════════════════════════════════════════════════════════════════════

{
  id: "geography-intro",
  title: "Geography & Environment",
  subtitle: "The regions that shape every journey",
  blocks: [
    { type: "p", text: `K'naan is not a passive backdrop. Its geography is jagged and obstructive, dictating the pace of every journey and cutting the kingdom into regions that have evolved in near-isolation from one another. What follows are the major regions, plus the weather phenomenon — [[white-blind:the White-Blind]] — that haunts the worst of them.` },
  ],
},
{
  id: "peoples-intro",
  title: "The Peoples of K'naan",
  subtitle: "Those the Orthodoxy tolerates as human",
  blocks: [
    { type: "p", text: `K'naan is a human kingdom. The Orthodoxy permits two cultural variants of humanity — the urbane [[ambrians:Ambrians]] of the cities, and the [[fringe-folk:Fringe-Folk]] of the edges. Mechanically they are the same people. Non-human races — Ogres, Goblins, Changelings — are covered separately on the [[kingdom/outcasts:Outcasts page]].` },
  ],
},
{
  id: "outcasts-intro",
  title: "The Outcasts",
  subtitle: "Those the Orthodoxy does not",
  blocks: [
    { type: "p", text: `Non-human PCs in K'naan do not exist comfortably. To walk the realm as Ogre, Goblin, or Changeling is to live a life the Orthodoxy has already marked for grief. All non-human PCs must take the [[pariah-burden:Pariah Burden]] at character creation.` },
  ],
},
{
  id: "places-intro",
  title: "Places of K'naan",
  subtitle: "Cities, seats, and strongholds",
  blocks: [
    { type: "p", text: `Six major places shape the kingdom: the seat of the Council and Orthodoxy in the capital, the industrial heart of the realm, the Marrow-abbey of the faith, the grain-and-skiff port of the Silt-Mere, the black-walled fortress of the eastern pass, and the small silver-mining town where the campaign begins in fire. Lesser holdings — halls, archives, waypoints, and the like — are gathered on the [[kingdom/minor-places:Notable Buildings page]].` },
  ],
},
{
  id: "minor-places-intro",
  title: "Notable Buildings & Lesser Holdings",
  subtitle: "Halls, archives, and waypoints",
  blocks: [
    { type: "p", text: `These are not cities in their own right but buildings, institutions, and small settlements of enough importance to name. Most sit within or adjacent to one of the six major places — a cathedral in Ash-Kadesh, a guild hall in Har-Moloch, a hidden moot in the Silt-Mere.` },
  ],
},
{
  id: "people-intro",
  title: "Notable People",
  subtitle: "The individuals most likely to appear across a campaign",
  blocks: [
    { type: "p", text: `Fifteen figures worth knowing. Each sits at the head of a House, a Church office, or a Guild — and each is someone the PCs are likely to meet, negotiate with, or cross at some point. Entries are grouped by affiliation.` },
  ],
},
{
  id: "doctrine-intro",
  title: "Doctrine & Practice",
  subtitle: "What the faithful are taught and what they owe",
  blocks: [
    { type: "p", text: `Three doctrinal pillars define daily life under the [[orthodoxy:Orthodoxy]]: the fact of Prios's silence, the Liturgy that makes secrecy a heresy, and the Sun-Taxes that every citizen owes in tribute and confession.` },
  ],
},
{
  id: "hierarchy-intro",
  title: "Ecclesiastical Hierarchy",
  subtitle: "The ranks of the Orthodoxy",
  blocks: [
    { type: "p", text: `The Orthodoxy's power runs from Sun-Speaker down through High Theurgs, Inquisitors, the Theurg priesthood, and the Cloistered Scribes who keep the Church's records. In theory the chain is clean; in practice, the Inquisitors answer to no one in the field.` },
  ],
},
{
  id: "children-intro",
  title: "The Children of the Sun",
  subtitle: "The three heirs of Prios",
  blocks: [
    { type: "p", text: `As the father fades, his three children have drawn their own followings. Each has a domain, an epithet, and a temperament. Each, quietly, has a cult.` },
  ],
},
{
  id: "angels-intro",
  title: "The Six Angels of the Decline",
  subtitle: "The watchers of a fading god",
  blocks: [
    { type: "p", text: `Six angels stand around the dying sun. Some carry out his cruel rites, some tend his fading warmth, and one is invoked only when an Abomination must be granted final death.` },
  ],
},
{
  id: "traditions-intro",
  title: "Magical Traditions",
  subtitle: "The four paths a practitioner can walk",
  blocks: [
    { type: "p", text: `Three of the four traditions are legal (to varying degrees); one is strictly not. All four invite [[corruption:corruption]] with every cast.` },
  ],
},
{
  id: "guilds-page-intro",
  title: "The Guilds",
  subtitle: "Sanctioned trades of K'naan",
  blocks: [
    { type: "p", text: `Four guilds dominate the sanctioned economy of K'naan — finance, arms, Silt-Mere passage, and academic magic. Each has its own relationship with the great Houses. Each, since Fidarel's death, has begun to act as its own kind of power.` },
  ],
},
{
  id: "crime-intro",
  title: "Criminal Enterprises",
  subtitle: "Old shadows, bolder since the throne fell",
  blocks: [
    { type: "p", text: `These syndicates are not new. All five predate [[fidarel:Sovereign Fidarel]]'s death and have long operated in the shadows of the [[high-council:High Council]]. What has changed is their boldness: the vacuum of authority that followed the Sovereign's death has emboldened them to assert themselves openly as de facto rulers of the streets. They are not common street thugs — they are powerful fixers, cult-leaders, and information brokers who no longer feel the need to hide.` },
  ],
},
{
  id: "law-intro",
  title: "Law & the Watch",
  subtitle: "Such justice as the kingdom keeps",
  blocks: [
    { type: "p", text: `The [[magistracy:Magistracy]] is the Watch of K'naan. Its writ is strong in the capital, thin in the towns, and largely theoretical on the roads between. [[reeve:Reeves]] hold its senior rank outside the capital; [[warden:Wardens]] serve beneath them.` },
  ],
},
{
  id: "rules-intro",
  title: "Homebrew Rules",
  subtitle: "Subject to change",
  blocks: [
    { type: "p", text: `The house rules below adjust Symbaroum to match Sacred Veil's tone. They are the starting point for the campaign and may be tuned as we play. A [[glossary:glossary]] of mechanical terms sits at the end of the wiki.` },
  ],
},
];
