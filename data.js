// ============================================================================
// SACRED VEIL — content data
// All prose lifted verbatim from:
//   - The Sacred Veil: Symbaroum Homebrew Document (canonical PDF)
//   - CONTENT_DELTA.txt (GM-approved additions)
// Do not add, rewrite, or invent content here without GM approval.
// ============================================================================

window.SV_DATA = {
  meta: {
    title: "The Sacred Veil",
    subtitle: "a Symbaroum Homebrew Document",
    kingdom: "K'naan",
    world: "Averium",
  },

  // Entities that get auto-linked wherever their name appears in prose.
  // key = canonical id (matches section id or anchor), aliases = alt spellings.
  entities: [
    // Houses
    { id: "house-vane", name: "House Vane", aliases: ["Vane", "the Architects of War"] },
    { id: "house-chancel", name: "House Chancel", aliases: ["Chancel", "the Marrow-Keepers"] },
    { id: "house-kaelen", name: "House Kaelen", aliases: ["Kaelen", "the Masters of the Silt"] },
    { id: "house-morbray", name: "House Morbray", aliases: ["Morbray", "the Frontier Keepers"] },
    { id: "house-thorne", name: "House Thorne", aliases: ["Thorne", "the House of Whispers"] },
    { id: "house-valerius", name: "House Valerius", aliases: ["Valerius", "the Minor Major"] },
    { id: "house-grendel", name: "House Grendel", aliases: ["Grendel", "the Frayed"] },
    { id: "house-jannin", name: "House Jannin", aliases: ["Jannin"] },

    // Guilds
    { id: "covenant-of-coin", name: "The Covenant of Coin", aliases: ["Covenant of Coin"] },
    { id: "chainmakers", name: "The Chainmakers", aliases: ["Chainmakers"] },
    { id: "silt-strider-collective", name: "The Silt-Strider Collective", aliases: ["Silt-Strider Collective", "Silt-Striders"] },
    { id: "ordo-magicka", name: "The Ordo Magicka", aliases: ["Ordo Magicka", "Ordo"] },

    // Criminal
    { id: "noose-holders", name: "The Noose Holders", aliases: ["Noose Holders"] },
    { id: "iron-spire", name: "The Iron Spire", aliases: ["Iron Spire"] },
    { id: "silent-scrivener", name: "The Silent Scrivener", aliases: ["Silent Scrivener"] },
    { id: "silt-eaters", name: "The Silt-Eaters", aliases: ["Silt-Eaters"] },
    { id: "bandits", name: "Bandits" },

    // Religion
    { id: "orthodoxy", name: "The Orthodoxy", aliases: ["Orthodoxy", "the Prevailing Church", "Sun-Church of Prios"] },
    { id: "heralds-of-the-ash", name: "Heralds of the Ash", aliases: ["Heralds"] },

    // Children / Angels
    { id: "anari", name: "Anari", aliases: ["The Weeping Daughter"] },
    { id: "valeres", name: "Valeres", aliases: ["The Iron Apostle", "The First Son"] },
    { id: "iriel", name: "Iriel", aliases: ["The Scorned Daughter", "The Burning Eye"] },
    { id: "samael", name: "Samael" },
    { id: "zachriel", name: "Zachriel" },
    { id: "cassiel", name: "Cassiel" },
    { id: "oriel", name: "Oriel" },
    { id: "tariel", name: "Tariel" },
    { id: "moriel", name: "Moriel" },

    // NPCs
    { id: "silas-vane", name: "Silas Vane", aliases: ["Lord Commander Silas Vane"] },
    { id: "isolde-vane", name: "Isolde Vane", aliases: ["Miss Isolde Vane"] },
    { id: "vespera", name: "Vespera", aliases: ["High Abbotess Vespera"] },
    { id: "tybalt", name: "Tybalt", aliases: ["Brother-Captain Tybalt"] },
    { id: "olenna-kaelen", name: "Olenna Kaelen", aliases: ["Lady-Regent Olenna Kaelen"] },
    { id: "fenris-morbray", name: "Fenris Morbray", aliases: ["Lord-Captain Fenris Morbray"] },
    { id: "malachi-thorne", name: "Malachi Thorne", aliases: ["Lord Chancellor Malachi Thorne"] },
    { id: "arkin-valerius", name: "Arkin Valerius", aliases: ["Lord Arkin Valerius"] },
    { id: "dennin-grendel", name: "Dennin Grendel", aliases: ["Lord Dennin Grendel"] },
    { id: "malagant", name: "Malagant", aliases: ["Sun-Speaker Malagant"] },
    { id: "amar-jannin", name: "Lord Amar Jannin", aliases: ["Amar Jannin", "Lord Amar", "Lord Amar the 13th", "Amar the 13th", "Lord Amar, 13th of that name"] },
    { id: "naviel-jannin", name: "Naviel Jannin", aliases: ["Naviel", "Lord-Elect Naviel Jannin"] },
    { id: "fidarel", name: "Sovereign Fidarel", aliases: ["Fidarel"] },
    { id: "velis", name: "Scribe-Mother Velis", aliases: ["Velis"] },
    { id: "gest-harrow", name: "Gest Harrow", aliases: ["Gest"] },

    // Places
    { id: "ash-kadesh", name: "Ash-Kadesh" },
    { id: "har-moloch", name: "Har-Moloch" },
    { id: "bet-seraphim", name: "Bet-Seraphim" },
    { id: "gath-mere", name: "Gath-Mere" },
    { id: "raven-garron", name: "Raven-Garron" },
    { id: "hollow-sun", name: "The Hollow Sun", aliases: ["Hollow Sun"] },
    { id: "thorne-archive", name: "Thorne Archive" },
    { id: "iron-gavel", name: "The Iron Gavel", aliases: ["Iron Gavel"] },
    { id: "argent-academy", name: "Argent Academy" },
    { id: "golden-weights", name: "The Golden Weights", aliases: ["Golden Weights"] },
    { id: "the-spike", name: "The Spike" },
    { id: "grendels-reach", name: "Grendel's Reach" },
    { id: "amarsgate", name: "Amarsgate" },
    { id: "great-forge", name: "The Great Forge", aliases: ["Great Forge"] },
    { id: "drowned-moot", name: "The Drowned Moot", aliases: ["Drowned Moot"] },
    { id: "anvilhold", name: "Anvilhold" },
    { id: "third-furnace", name: "Third Furnace" },
    { id: "the-drift", name: "The Drift" },
    { id: "tide-reach-wharf", name: "Tide-Reach Wharf" },
    { id: "silveldt", name: "Silveldt" },
    { id: "the-rot", name: "The Rot" },
    { id: "dusk-knell", name: "Dusk-Knell" },
    { id: "silt-mere", name: "Silt-Mere" },
    { id: "eastern-massif", name: "Eastern Massif" },
    { id: "gorse-barrens", name: "Gorse-Barrens" },
    { id: "white-blind", name: "White-Blind" },

    // Concepts
    { id: "seraphs-marrow", name: "Seraph's Marrow", aliases: ["Seraph\u2019s Marrow", "Marrow", "Wound-Marrow"] },
    { id: "corruption", name: "Corruption", aliases: ["TempCor", "PermCor", "TotalCor", "Stigma"] },
    { id: "theurgs", name: "Theurgs", aliases: ["Theurg", "Theurgy"] },
    { id: "wizards", name: "Wizards", aliases: ["Wizard", "Wizardry"] },
    { id: "witches", name: "Witches", aliases: ["Witch"] },
    { id: "sorcerers", name: "Sorcerers", aliases: ["Sorcery", "Sorcerer"] },
    { id: "inquisitors", name: "Inquisitors of the Brand", aliases: ["Inquisitor", "Inquisitors"] },
    { id: "cloistered-scribes", name: "The Cloistered Scribes", aliases: ["Cloistered Scribes"] },
    { id: "high-theurgs", name: "The High Theurgs", aliases: ["High Theurgs"] },
    { id: "sun-speaker", name: "The Sun-Speaker", aliases: ["Sun-Speaker"] },
    { id: "witchsight", name: "Witchsight" },
    { id: "cauterisation", name: "Ritual of Cauterisation", aliases: ["Cauterisation", "Cauterised"] },
    { id: "vigil", name: "Vigil of Absolute Disclosure", aliases: ["Vigil"] },
    { id: "liturgy-of-truth", name: "Liturgy of Truth" },
    { id: "prios", name: "Prios", aliases: ["dying sun-god", "Stabbed Father", "Sun-God"] },
    { id: "sun-taxes", name: "Sun-Taxes" },
    { id: "silence-of-god", name: "The Silence of God", aliases: ["Silence of God"] },
    { id: "true-quality-steel", name: "True Quality Steel", aliases: ["Quality Steel"] },
    { id: "high-council", name: "High Council of Electors", aliases: ["High Council"] },
    { id: "magistracy", name: "Magistracy", aliases: ["the Watch"] },

    // Glossary-only terms (have no full section; linkable everywhere in the wiki)
    { id: "abomination", name: "Abomination" },
    { id: "iron-teeth", name: "Iron Teeth" },
    { id: "resolute", name: "Resolute" },
    { id: "stigma", name: "Stigma" },
    { id: "void-chime", name: "Void-Chime" },
    { id: "wound-marrow", name: "Wound-Marrow" },
    { id: "knaan", name: "K'naan", aliases: ["K\u2019naan"] },
    { id: "averium", name: "Averium" },
    { id: "lord-of-lords", name: "Lord of Lords" },
    { id: "tempcor", name: "TempCor" },
    { id: "permcor", name: "PermCor" },
    { id: "totalcor", name: "TotalCor" },
    { id: "threshold", name: "Threshold" },
    { id: "milestone-xp", name: "Milestone XP" },
    { id: "crown-shelf", name: "Crown-Shelf" },
    { id: "ledger-ward", name: "Ledger-Ward" },
    { id: "the-mourn", name: "The Mourn", aliases: ["the Mourn"] },
    { id: "dusk-knell", name: "Dusk-Knell" },

    // New full sections — also need entities so they auto-link
    { id: "fringe-folk", name: "Fringe-Folk", aliases: ["Fringe Folk"] },
    { id: "great-forests", name: "The Great Forests", aliases: ["Great Forests"] },
    { id: "reeve", name: "Reeve", aliases: ["Reeves"] },
    { id: "warden", name: "Warden", aliases: ["Wardens"] },
  ],
};
