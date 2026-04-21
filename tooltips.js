// ============================================================================
// SACRED VEIL — tooltip summaries
// Short (2-3 sentence) hover summaries for entities. Summaries are paraphrased
// or lifted from the canonical doc + CONTENT_DELTA. Header gives category.
// ============================================================================

window.SV_TOOLTIPS = {
  // ── Houses ──
  "house-vane":        { kind: "House",  name: "Vane",        text: "The most powerful house in K'naan — industrial, cold, unthinkably wealthy. Holds a total monopoly over iron and coal, and is the only faction capable of producing high-grade steel." },
  "house-chancel":     { kind: "House",  name: "Chancel",     text: "The Marrow-Keepers. Permanently banned from the throne; command the entire production and refinement of Seraph's Marrow. Zealous, prophetic, devoted to Prios." },
  "house-kaelen":      { kind: "House",  name: "Kaelen",      text: "The Masters of the Silt — control the grain and the fisheries from the shores of the Silt-Mere. Second wealthiest house in liquid coin; essentially the kingdom's pantry." },
  "house-morbray":     { kind: "House",  name: "Morbray",     text: "The Frontier Keepers. A grim, militaristic house holding the Gorse-Barrens pass with feared cavalry. Treat their border-lands like an armed camp." },
  "house-thorne":      { kind: "House",  name: "Thorne",      text: "The House of Whispers — record-keepers and diplomats. Operate the Magistracy and oversee taxes. Rarely physically imposing, but the most informed people in K'naan." },
  "house-valerius":    { kind: "House",  name: "Valerius",    text: "The Minor Major. Clawed into relevance by providing the bulk of the capital's Magistracy officers. Obsessed with legalism and the harsh application of old laws." },
  "house-grendel":     { kind: "House",  name: "Grendel",     text: "The Frayed — shunned minor house of the marshy Silt-Mere fringes. Hardy and quiet; whispered to spend too much time with Witches." },
  "house-jannin":      { kind: "House",  name: "Jannin",      text: "The PCs' employers. An ancient minor house on the eastern frontier; silver mine and large flocks. Leaderless since Lord Amar's death and Naviel's abduction." },

  // ── Guilds ──
  "covenant-of-coin":      { kind: "Guild",  name: "Covenant of Coin",      text: "Non-criminal arm of finance. Controls currency exchange, large-scale loans, and legal trade — the silent economic backbone of the realm. View the civil war as a market correction." },
  "chainmakers":           { kind: "Guild",  name: "Chainmakers",           text: "Sanctioned artisan guild, holding the monopoly on manufacturing, engineering, and quality arms. Inextricably tied to House Vane — the kingdom's de facto armaments factory." },
  "silt-strider-collective": { kind: "Guild", name: "Silt-Strider Collective", text: "Pilots, navigators, and logistics experts of the treacherous Silt-Mere. Fiercely independent; the only group capable of safe passage across the Mere." },
  "ordo-magicka":          { kind: "Guild",  name: "Ordo Magicka",          text: "State-sanctioned school for academic wizards. Clinical, conservative, on a short and heavy leash. The 'safest' legitimate path for arcane power." },

  // ── Crime ──
  "noose-holders":  { kind: "Syndicate", name: "Noose Holders",  text: "Historical, deeply entrenched crime org predating Fidarel's death. Powerful fixers in the shadows of the High Council; masters of high-level debt, extortion, and laundering." },
  "iron-spire":     { kind: "Syndicate", name: "Iron Spire",     text: "Militant syndicate ruling the capital's underworld. Deals in Wound-Marrow, a volatile Marrow derivative. Enforcers are Marrow-dosed, addicted, and ruthlessly efficient." },
  "silent-scrivener": { kind: "Syndicate", name: "Silent Scrivener", text: "Exclusive, subtle syndicate dealing in information. Clerks and archivists selling political ruin to the highest bidder. They rarely kill — a living person can be blackmailed." },
  "silt-eaters":    { kind: "Syndicate", name: "Silt-Eaters",    text: "Corrupted cultists and outcast Witches worshipping the Silt-Mere's blight. Leaders warped by liquid mutations. No interest in coin — only in spreading the Mere's dark influence." },
  "bandits":        { kind: "Threat",    name: "Bandits",        text: "Unaligned outlaws in small, leaderless cells. A constant fragmented threat across the realm, preying on vulnerable travellers and isolated settlements." },

  // ── Religion ──
  "orthodoxy":         { kind: "Institution", name: "The Orthodoxy",        text: "The state religion — a rigid, legalistic bureaucracy that equates the Lord of Lords' Law with Divine Will. Absolute and mandatory; to openly deny it is treason." },
  "heralds-of-the-ash": { kind: "Splinter Cult", name: "Heralds of the Ash", text: "A nihilistic underground sect who believe the sun is a celestial cadaver. Preach the Heresy of Pure Desire; gather in absolute darkness and chime Void-Chime bells. Strictly illegal." },
  "prios":             { kind: "Deity",       name: "Prios",                text: "The dying sun-god. A father who has been stabbed, slowly bleeding out in the dark. Rarely speaks to his clerics — his silence has caused the faith to splinter." },

  "anari":   { kind: "Deity — Child of Prios", name: "Anari",   text: "The Weeping Daughter; caught her father's spilling blood in a golden cup. Patron of mercy, hope, and the realm's primary healers and sanctuaries." },
  "valeres": { kind: "Deity — Child of Prios", name: "Valeres", text: "The First Son, the Iron Apostle — drew his blade a heartbeat too late. Patron of K'naan's military and Morbray knights; secretly the patron of House Thorne." },
  "iriel":   { kind: "Deity — Child of Prios", name: "Iriel",   text: "The Scorned Daughter, the Burning Eye. Rode out to hunt her father's killers. Patron of zealous Inquisitors and celebrants of the Vigil of Absolute Disclosure." },

  "samael":   { kind: "Angel", name: "Samael",   text: "Angel of the Severed Rot — patron of the purge, of cutting away a corrupted limb to save the body. Soldiers, inquisitors, and doctors pray to him." },
  "zachriel": { kind: "Angel", name: "Zachriel", text: "Angel of the Brand — patron of the Ritual of Cauterisation, with hands and eyes of white-hot iron. Followed by those who believe salvation is forged in suffering." },
  "cassiel":  { kind: "Angel", name: "Cassiel",  text: "Angel of the Vault — silent watcher, angel of locked doors, sealed lips, and preserved resources. Followed by monks, reliquary-keepers, and the Cloistered Scribes." },
  "oriel":    { kind: "Angel", name: "Oriel",    text: "Angel of the Embers — keeper of the fading warmth. Invoked by common folk during the White-Blind. Apart from Anari, the closest thing the religion has to a comforting figure." },
  "tariel":   { kind: "Angel", name: "Tariel",   text: "Angel of the Spilled Chalice — patron of holy blood and the toll Seraph's Marrow takes on flesh. Fiercely revered by House Chancel and the Marrow-anointed." },
  "moriel":   { kind: "Angel", name: "Moriel",   text: "Angel of the Final Breath — rarely spoken of aloud. Invoked only when a blighted Abomination must be granted absolute final death. It is a dark omen to look upon his shrine." },

  "sun-speaker":       { kind: "Office",   name: "The Sun-Speaker",       text: "The absolute head of the Orthodoxy. Holds a seat on the High Council; his vote can break a deadlock. Currently Malagant." },
  "high-theurgs":      { kind: "Council",  name: "The High Theurgs",      text: "Twelve senior priests overseeing the major regions of K'naan. The only individuals legally permitted to authorise the Vigil on a noble — deeply feared by the secular lords." },
  "inquisitors":       { kind: "Militant", name: "Inquisitors of the Brand", text: "The militant arm of the Church, devoted to Iriel and Zachriel. Operate outside local House Watches — even a ruling Lord must submit their household to inspection." },
  "cloistered-scribes": { kind: "Order",   name: "Cloistered Scribes",    text: "Monks devoted to Cassiel who record confessions and maintain the Church's vast, secret libraries. No political power, but they hold the records that keep the powerful in line." },
  "theurgs":           { kind: "Tradition", name: "Theurgs",              text: "Living conduits of a fading divinity. Either traumatic visitation (rare) or decades of scholar-monk study. Possess power that eclipses common folk, bought with agonising dedication." },
  "wizards":           { kind: "Tradition", name: "Wizards",              text: "Academics of the Ordo Magicka. Treat magic as a tool, valuing control above all. The arguably safest path to arcane power — though no study of magic is ever truly safe." },
  "witches":           { kind: "Tradition", name: "Witches",              text: "Practitioners of an ancient, primal tradition. Technically illegal but politely ignored by the nobility — too useful. Denounced by day, consulted by night." },
  "sorcerers":         { kind: "Tradition", name: "Sorcerers",            text: "Those who refuse all traditions. Bend the world through raw, unchanneled desire. The most dangerous path — strictly illegal; consumed quickly by the Corruption they thought they could outrun." },

  // ── NPCs ──
  "silas-vane":     { kind: "NPC — House Vane",     name: "Silas Vane",     text: "Lord Commander. Quiet, late sixties. Burn scars on both forearms from tapping a runaway furnace at seventeen. Rarely travels; presides from Anvilhold's cast-iron throne." },
  "isolde-vane":    { kind: "NPC — House Vane",     name: "Isolde Vane",    text: "The Vane seen most often in the capital. Heir? Offering? Or just Silas's best negotiator? Dark colours, no marrow-glow. Younger nobles find her exhausting; older nobles find her useful." },
  "vespera":        { kind: "NPC — House Chancel",  name: "High Abbotess Vespera", text: "Head of Chancel. Has not left the central sanctum of Bet-Seraphim in seventeen years. Conducts all business in writing, via Tybalt. Voice: a low, breathy whisper." },
  "tybalt":         { kind: "NPC — House Chancel",  name: "Brother-Captain Tybalt", text: "Was a soldier before he was a cleric; still trains at arms every morning. Carries a broad-headed Chainmaker spear openly in the capital — legal for his rank, a statement." },
  "olenna-kaelen":  { kind: "NPC — House Kaelen",   name: "Olenna Kaelen",  text: "Lady-Regent. Runs the port, keeps the ledgers, feeds the kingdom. Most competent head of house in K'naan — and most personally boring. Takes Silveldt's flooding as a personal insult." },
  "fenris-morbray": { kind: "NPC — House Morbray",  name: "Fenris Morbray", text: "Lord-Captain. Has not left Raven-Garron's walls in eleven years. Broad, grey-bearded, limps from a Barrens engagement decades past — lost a horse, walked back five days." },
  "malachi-thorne": { kind: "NPC — House Thorne",   name: "Malachi Thorne", text: "Lord Chancellor. Small, neat, grey-templed. Never seen out of an out-of-fashion black wool robe. Writes left-handed; reads four times faster than any other man in the kingdom." },
  "arkin-valerius": { kind: "NPC — House Valerius", name: "Arkin Valerius", text: "Grey-eyed, grey-humoured, in his fifties. Reputation for tedious consistency. Not loved, but trusted. Leading authority on pre-Fidarel High Sovereign's Law." },
  "dennin-grendel": { kind: "NPC — House Grendel",  name: "Dennin Grendel", text: "Thin, quiet, grey-green eyes. Rarely leaves his marsh-village. Rumoured to keep a Witch in a back room of The Rot. Says only: \"Deep roots need dark water.\"" },
  "malagant":       { kind: "NPC — Orthodoxy",      name: "Sun-Speaker Malagant", text: "Head of the Orthodoxy. Conducts the midday rite on certain holy days; officiates ascensions. Does not claim to hear Prios — claims to perfectly understand the Lord of Lords' Law." },
  "velis":          { kind: "NPC — Orthodoxy",      name: "Scribe-Mother Velis",  text: "Malagant's secretary — the true face of the Orthodoxy's day-to-day business. Personal devotion to Cassiel; wears a plain grey scribe's robe while wielding Malagant's authority." },
  "gest-harrow":    { kind: "NPC — Chainmaker",     name: "Gest Harrow",    text: "Half-deaf veteran foreman of the Third Furnace, Har-Moloch. Thirty-one years in the post. One of perhaps six people in the kingdom who truly understand the metallurgy of True Quality Steel." },
  "amar-jannin":    { kind: "NPC — House Jannin",   name: "Lord Amar, 13th of that name", text: "Deceased patriarch. Born Amar Jannin; took the borrowed name 'Amar' when he assumed Keep Amar, as twelve lords of that keep had done before him. Wise, wealthy, deeply respected. Killed with his wife at the siege." },
  "naviel-jannin":  { kind: "NPC — House Jannin",   name: "Naviel Jannin",  text: "Lord-Elect, missing. Favourite son of Lord Amar. Rugged, humble, wears dusty travel clothes and a shepherd's crook, more at home with his father's flocks than at court. Wears a lavender pendant that seems to protect itself." },
  "fidarel":        { kind: "NPC — Deceased",       name: "Sovereign Fidarel", text: "Deceased prior Lord of Lords. Master of ruling his people, failure at ruling his household. Sired a legion of sons through illicit affairs, no legitimate heir. His death broke the kingdom." },

  // ── Places ──
  "ash-kadesh":    { kind: "City",       name: "Ash-Kadesh",    text: "The capital of K'naan. Built on a long ridge above the confluence of three trade roads. Three districts: Crown-Shelf (nobility), Ledger-Ward (institutions), and The Mourn (underworld)." },
  "har-moloch":    { kind: "City",       name: "Har-Moloch",    text: "'Mount of the Devourer.' House Vane's forge-city under permanent grey haze, skyline dominated by smelting towers and slag-heaps called the Iron Teeth." },
  "bet-seraphim":  { kind: "Stronghold", name: "Bet-Seraphim",  text: "House Chancel's walled abbey-refinery three days' ride from the capital. Part cathedral, part chemical works. The reek of refinement carries for miles." },
  "gath-mere":     { kind: "City",       name: "Gath-Mere",     text: "House Kaelen's port-city on the inland edge of the Silt-Mere. Grain silos and fish-drying racks dominate the skyline." },
  "raven-garron":  { kind: "Stronghold", name: "Raven-Garron",  text: "House Morbray's fortress-town. Black-walled keep guarding the only reliably traversable Gorse-Barrens pass. Courtyard contains an ancient Dead Rowan Tree." },
  "hollow-sun":    { kind: "Temple",     name: "The Hollow Sun", text: "Orthodoxy's great temple in Ledger-Ward. Dome-roofed cathedral; unlit except for a single oculus through which sun falls on the altar for exactly one hour at midday." },
  "thorne-archive": { kind: "Seat",      name: "Thorne Archive", text: "House Thorne's seat in Ledger-Ward. Narrow tall dark-stone building, six storeys. Visitors searched at every landing. Malachi's office on the top floor." },
  "iron-gavel":    { kind: "Seat",       name: "The Iron Gavel", text: "House Valerius's courthouse-barracks in Ash-Kadesh. Courtyard contains the Scaffold-Stone — used for sentencing and execution for nine consecutive generations." },
  "argent-academy": { kind: "Seat",      name: "Argent Academy", text: "Ordo Magicka's seat in Ledger-Ward. No windows on the ground floor; exactly thirteen windows on each floor above, no explanation given. Dry fountain in the courtyard." },
  "golden-weights": { kind: "Seat",      name: "The Golden Weights", text: "Covenant of Coin's counting-house. Unremarkable facade in Ledger-Ward; brass scales on the doorposts. Vaults extend further underground than the building rises above." },
  "the-spike":     { kind: "Stronghold", name: "The Spike",     text: "Iron Spire's stronghold in The Mourn. Tenement-warren camouflaged by guild notices and penitent prayers. Leadership meets in a converted chapel. The Magistracy does not enter." },
  "grendels-reach": { kind: "Village",   name: "Grendel's Reach", text: "House Grendel's stilt-village in the Mere marshes. Houses raised a full storey above the water on stilts, connected by rope bridges." },
  "amarsgate":     { kind: "Town",       name: "Amarsgate",     text: "House Jannin's silver-mining town (the PCs' home). Small fortified town at the foot of the Eastern Massif, built around the mine. Burning when the campaign begins." },
  "great-forge":   { kind: "Works",      name: "The Great Forge", text: "Chainmakers' works inside Har-Moloch. Largest single building in the city; chimney stack visible from three days' ride on a clear day. True Quality Steel is made on the upper level." },
  "drowned-moot":  { kind: "Ritual site", name: "The Drowned Moot", text: "The Silt-Eaters' ritual site. Location unknown. Recovered bodies come from sites deep in the Silt-Mere marked by spirals of broken pottery and human bone." },
  "anvilhold":     { kind: "Keep",       name: "Anvilhold",     text: "House Vane's keep inside Har-Moloch. Walls of black slag-glass, cast-iron throne, no natural light in the throne-room." },
  "third-furnace": { kind: "Works post", name: "Third Furnace", text: "The most feared post in Har-Moloch. Foreman: Gest Harrow, thirty-one years in the job — no other foreman has lasted more than eleven there." },
  "the-drift":     { kind: "Town",       name: "The Drift",     text: "The town around Bet-Seraphim: pilgrims, indentured refiners, the alms-poor." },
  "tide-reach-wharf": { kind: "Wharf",   name: "Tide-Reach Wharf", text: "Silt-Strider Collective HQ in Gath-Mere, stretching roughly a mile along the shore." },
  "silveldt":      { kind: "Manor",      name: "Silveldt",      text: "Olenna Kaelen's manor. Pale-stone hall raised above the flood-plain; ground floor floods some years." },
  "the-rot":       { kind: "Keep",       name: "The Rot",       text: "Grendel's keep at Grendel's Reach. Squat, algae-slicked dark-stone tower whose lower floors are periodically underwater." },
  "dusk-knell":    { kind: "Bell",       name: "Dusk-Knell",    text: "Single bell cast from Vane steel, rung at twilight in Ash-Kadesh. Closes Crown-Shelf to commoners without a signed writ. The most-feared sound in K'naan." },
  "silt-mere":     { kind: "Geography",  name: "The Silt-Mere", text: "Humongous inland lake of brackish, shallow water; the northwestern edge of the known world. Tides unpredictable, mud-flats can swallow a horse whole." },
  "eastern-massif": { kind: "Geography", name: "Eastern Massif", text: "A wall of grey stone and thin air on the eastern edge of K'naan, its peaks so steep only a handful of high passes are even remotely traversable." },
  "gorse-barrens": { kind: "Geography",  name: "Gorse-Barrens", text: "The desolate stretch between the Silt-Mere and the Eastern Massif. Blanketed periodically by the White-Blind fog." },
  "white-blind":   { kind: "Weather",    name: "White-Blind",   text: "A thick, salty mist rolling off the Silt-Mere. Carries heavy brine that rusts iron, rots leather, and chokes the lungs. Forces travellers to hunker down or wander blindly into ravines." },

  // ── Concepts ──
  "seraphs-marrow":    { kind: "Chemical",  name: "Seraph's Marrow", text: "A dangerous chemical reserved for nobles. Forces violent biological mutations: immense size, unnatural strength, occasional supernatural abilities. Agonising and expensive to refine." },
  "corruption":        { kind: "System",    name: "Corruption",      text: "A spiritual blight that withers the soul and eventually twists the flesh. Gained from casting, blighted damage, learning magic, or pushing too far. At Threshold, you gain a Stigma." },
  "witchsight":        { kind: "Ability",   name: "Witchsight",      text: "The ability to see through a Changeling's stolen face instantly. Possessed by most Theurgs, many senior Ordo wizards, some Inquisitors, and at least one dangerous figure in every High Council session." },
  "cauterisation":     { kind: "Ritual",    name: "Ritual of Cauterisation", text: "When a citizen is found 'tainted,' they are branded with holy irons to 'burn out' the shadow. A public, agonising ceremony designed to remind the populace that the Sun demands a price." },
  "vigil":             { kind: "Ritual",    name: "Vigil of Absolute Disclosure", text: "Mandatory private rite for high officials and noble aspirants. Three days' fast, then a night in the crypt dictating every secret. If one is withheld, the Divining of the Lie follows." },
  "liturgy-of-truth":  { kind: "Doctrine",  name: "Liturgy of Truth", text: "The doctrinal core of the Orthodoxy: secrecy is heresy, and a Changeling's false face is its ultimate manifestation." },
  "sun-taxes":         { kind: "Tribute",   name: "Sun-Taxes",        text: "Tributes owed to the Orthodoxy by K'naanian citizens. Paying them — and confessing one's sins — affords the basic protections of the law." },
  "true-quality-steel": { kind: "Rule",     name: "True Quality Steel", text: "All weapons and armour in K'naan are low-grade by default — the kingdom's metalwork goes Brittle (weapons, damage die → 1d4) or Shoddy (armour, Tier −1) on a natural 20. True Quality Steel is the exception: 10× the price, forged only by House Vane, never Brittle or Shoddy, smith-repair only." },
  "high-council":      { kind: "Institution", name: "High Council of Electors", text: "An assembly of the most powerful noble houses and a few important minor houses. In the Sovereign's absence, holds the kingdom in tense gridlock." },
  "magistracy":        { kind: "Office",    name: "Magistracy",       text: "The Watch — police of K'naan. Operated by House Thorne and staffed in the capital largely by House Valerius. Composed of private sworn levies of the noble houses." },

  // ── Glossary-only terms — hover cards throughout the wiki ──
  "abomination":       { kind: "State",     name: "Abomination",      text: "What a Corrupted soul becomes when TotalCor fills their maximum limit; under Sacred Veil's homebrew rules, a last stand rather than instant transformation." },
  "fringe-folk":       { kind: "People",    name: "Fringe-Folk",      text: "Humans born outside the immediate grip of the largest cities and towns. Hardier and superstitious. The Orthodoxy views them as uncultured and borderline heathen, but they are still tolerated as human." },
  "iron-teeth":        { kind: "Landmark",  name: "Iron Teeth",       text: "The skyline of smelting towers and slag-heaps in Har-Moloch." },
  "resolute":          { kind: "Attribute", name: "Resolute",         text: "Symbaroum attribute used to set Corruption Threshold (Resolute / 2) and Maximum Corruption (Resolute)." },
  "stigma":            { kind: "Mark",      name: "Stigma",           text: "A physical mark gained when TotalCor crosses the Threshold. Weeping black tears, smell of rot, etc." },
  "void-chime":        { kind: "Relic",     name: "Void-Chime",       text: "Hollowed iron bells used by the Heralds of the Ash in the Ritual of Snuffing. Produce a sound meant to mimic the ringing silence of the grave." },
  "wound-marrow":      { kind: "Drug",      name: "Wound-Marrow",     text: "A volatile and dangerously addictive variant of Seraph's Marrow sold by the Iron Spire. Slightly less potent, but accelerates corruption — often resulting in immediate, monstrous mutations." },
  "dusk-knell":        { kind: "Landmark",  name: "Dusk-Knell",       text: "A single bell cast from Vane steel, rung at twilight in Ash-Kadesh. Closes Crown-Shelf to commoners without a signed writ; violators thrown from the Shelf. The most-feared sound in K'naan." },
  "gorse-barrens":     { kind: "Region",    name: "Gorse-Barrens",    text: "The desolate stretch between the Silt-Mere and the Eastern Massif. Blanketed periodically by the White-Blind." },
  "white-blind":       { kind: "Weather",   name: "White-Blind",      text: "A thick, salty mist that rolls off the Silt-Mere and blankets the Gorse-Barrens for minutes, hours, or days at a time. Carries a heavy brine that rusts iron, rots leather, and chokes the lungs." },
  "silt-mere":         { kind: "Region",    name: "Silt-Mere",        text: "The massive inland sea of brackish, shallow water in K'naan's northwest. Tides unpredictable; the mud-flats can swallow a horse whole." },
  "eastern-massif":    { kind: "Region",    name: "Eastern Massif",   text: "The wall of grey stone and thin air to K'naan's east. Peaks so steep and shattered that only a handful of high passes are even remotely traversable." },
  "knaan":             { kind: "Kingdom",   name: "K'naan",           text: "The kingdom in which Sacred Veil takes place. Grim, neo-feudal, ruled by the High Council of Electors in the absence of a sitting Sovereign." },
  "averium":           { kind: "World",     name: "Averium",          text: "The broader world K'naan is part of." },
  "lord-of-lords":     { kind: "Title",     name: "Lord of Lords",    text: "The historic title of the reigning Sovereign of K'naan. Currently vacant — the throne sits empty since Fidarel's death." },
  "silence-of-god":    { kind: "Doctrine",  name: "The Silence of God", text: "The doctrinal term for Prios's near-total failure to speak to his clerics. The cause of the Orthodoxy's internal fracture and the rise of the Children-cults." },
  "tempcor":           { kind: "System",    name: "TempCor",          text: "Temporary corruption — recovers with rest." },
  "permcor":           { kind: "System",    name: "PermCor",          text: "Permanent corruption — does not recover." },
  "totalcor":          { kind: "System",    name: "TotalCor",         text: "TempCor + PermCor — compared against Threshold and Maximum Corruption." },
  "threshold":         { kind: "System",    name: "Threshold",        text: "Half your Resolute score (Resolute ÷ 2). 'Threshold' is just shorthand for that number. When TotalCor goes above it, you risk gaining a Stigma." },
  "milestone-xp":      { kind: "Rule",      name: "Milestone XP",     text: "The progression model in use — XP granted at meaningful story points rather than per-challenge." },

  // ── Ash-Kadesh districts ──
  "crown-shelf":       { kind: "District",  name: "Crown-Shelf",      text: "The high district of Ash-Kadesh — noble residences, Thorne Archive, Iron Gavel." },
  "ledger-ward":       { kind: "District",  name: "Ledger-Ward",      text: "The middle district of Ash-Kadesh — Magistracy, counting-houses, the Hollow Sun, the Argent Academy, the Golden Weights." },
  "the-mourn":         { kind: "District",  name: "The Mourn",        text: "The low district of Ash-Kadesh — where the Iron Spire and Silent Scrivener operate openly." },

  // ── Sections (short tooltip teasers; click goes to the full section) ──
  "fringe-folk":       { kind: "Race",      name: "Fringe-Folk",      text: "Humans of the kingdom's edges — Symbaroum's Barbarians under a K'naanian name. Mechanically identical to Ambrians, culturally hardier and more superstitious." },
  "great-forests":     { kind: "Region",    name: "The Great Forests", text: "The most imposing feature of K'naan — the haven of the foulest creatures, including the Witches. The realm offers no true sanctuary from them." },
  "reeve":             { kind: "Office",    name: "Reeve",            text: "The Magistracy's senior officer in a given settlement outside the capital. One alone in a village; several in a larger city, each with their own wardens." },
  "warden":            { kind: "Office",    name: "Warden",           text: "Rank-and-file officers of the Magistracy, serving under a Reeve." },
};
