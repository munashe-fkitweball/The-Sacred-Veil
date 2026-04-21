// ============================================================================
// SACRED VEIL — section content part 2: religion, angels, races, places, NPCs
// ============================================================================

window.SV_SECTIONS_2 = [

// ───────────────────────── RELIGION ─────────────────────────
{
  id: "religion-intro",
  group: "Religion",
  title: "The Faith of the Dying Sun-God, Prios",
  blocks: [
    { type: "h3", text: "The Stabbed Father" },
    { type: "p", text: `To understand the faith of K'naan, one must first accept a terrible truth: [[prios:Prios]] is no longer an all-powerful creator. He is a father who has been stabbed, and he is slowly bleeding out in the dark. Because of this, religion in K'naan is never a comfort; it is a desperate, collective effort to keep a dying flame from going out. In this world, "Sin" is not merely a moral failing - it is a physical weight that drags a god closer to his grave.` },
    { type: "h3", text: "The Silence of God" },
    { type: "p", text: `While the Sun-Church of Prios remains the dominant power, the long-standing "Silence of God" has caused the faith to splinter. It has become common knowledge that Prios now rarely speaks to his clerics, leaving his followers to interpret his fading heartbeat through the legends of his various Angels and the deeds of his Children. This has turned the religion into a frantic, often violent struggle to understand why the sun-god is dying - and, more importantly, what must be done to fix it.` },
    { type: "p", text: `There is no room for celebration in the chapels of K'naan. There is only the urgent, heavy duty of the living to sustain the dying, lest the light fail entirely and leave the world to the cold.` },
  ],
},

{
  id: "orthodoxy",
  group: "Religion",
  title: "The Orthodoxy",
  subtitle: "The Prevailing Church of the sun-god, Prios",
  blocks: [
    { type: "p", text: `This is the state religion, the bedrock of K'naanian society. It is a rigid, legalistic bureaucracy that equates the Lord of Lords' Law with Divine Will.` },
    { type: "h3", text: "The Core Belief" },
    { type: "p", text: `Prios gave his life to create the world, and now the world (and the humans within it) must give their lives to sustain him. Every act of [[corruption:Corruption]], every unsanctioned spell, and every broken law is a literal wound upon the Sun.` },
    { type: "h3", text: "Moral Code" },
    { type: "p", text: `The Orthodoxy demands "Purity through Penance," a rigorous doctrine where every individual must atone for the inherent stain of existence to sustain the fading life of the stabbed father. To obey the Lord of Lords' Law is to enact Divine Will, as the Sovereign's decrees are the only remaining echoes of a dying god's command. In this guttering light, silence is considered holy, yet secrecy is branded the ultimate heresy; to harbour a secret is to provide a sanctuary for the encroaching dark, denying the Sun-God the transparency he requires to remain anchored to the world.` },
    { type: "h3", text: "Rituals" },
    { type: "ul", items: [
      `<b>[[cauterisation:The Ritual of Cauterisation]]:</b> When a citizen is found "tainted" (often just meaning they have a minor Stigma), they are not always killed. Instead, they are "Cauterised" - branded with holy irons to "burn out" the shadow. It is a public, agonizing ceremony designed to remind the populace that the Sun demands a price.`,
      `<b>[[vigil:The Vigil of Absolute Disclosure]]:</b> Rooted in the doctrine that secrecy is heresy, this private rite is mandatory for all high-ranking officials and noble aspirants, but also used on anyone the church deems a potential enemy or heretic. The participant must fast for three days, then spend a night in the chapel's deepest crypt. There, before a silent Theurg, they must dictate every secret, every ambition, and every sin they have ever committed, often aided by potent incense that forces lucidity. If a single secret is purposefully withheld, the officiating Theurg performs the ritual of Divining the Lie, and the ensuing physical trauma is intended to cleanse the dark intent from the official's soul, though it often leaves them permanently weakened.`,
    ]},
    { type: "h3", text: "Popularity" },
    { type: "p", text: `Absolute and mandatory. To openly deny Orthodoxy is to commit treason against the crown.` },
    { type: "facts", items: [
      ["Great temple", "[[hollow-sun:The Hollow Sun]], Ledger-Ward"],
      ["Head", "[[malagant:Sun-Speaker Malagant]]"],
    ]},
  ],
},

{
  id: "ecclesiastical-hierarchy",
  group: "Religion",
  title: "Ecclesiastical Hierarchy",
  subtitle: "The Voices of the Dying God",
  blocks: [
    { type: "p", text: `With [[prios:Prios]] silent, the Church is run not by prophets, but by bureaucrats and politicians. The hierarchy is rigid, and its power over the secular lords is immense, primarily because the Church controls the definition of "Heresy" and the deployment of [[cauterisation:the Ritual of Cauterisation]].` },
  ],
},

{
  id: "sun-speaker",
  group: "Religion",
  title: "The Sun-Speaker",
  subtitle: "The High Priest",
  blocks: [
    { type: "p", text: `The absolute head of the [[orthodoxy:Orthodoxy]]. Currently, the position is held by [[malagant:Sun-Speaker Malagant]]. He does not claim to hear [[prios:Prios]]; rather, he claims to perfectly understand the Lord of Lords' Law, which he enforces with terrifying exactness. He holds a seat on the [[high-council:High Council]] and his vote can often break a deadlock between the major Houses.` },
  ],
},

{
  id: "high-theurgs",
  group: "Religion",
  title: "The High Theurgs",
  subtitle: "The Arch-Bishops",
  blocks: [
    { type: "p", text: `A council of twelve senior priests who oversee the major regions of K'naan. They are the only individuals legally permitted to authorise the [[vigil:Vigil of Absolute Disclosure]] on a noble. Because of this, they hold immense blackmail material and are deeply feared by the secular lords.` },
  ],
},

{
  id: "inquisitors",
  group: "Religion",
  title: "The Inquisitors of the Brand",
  blocks: [
    { type: "p", text: `The militant arm of the Church, devoted to [[iriel:Iriel]] and [[zachriel:Zachriel]]. They operate outside the jurisdiction of the local House Watches. If an Inquisitor arrives in a town, even the ruling Lord must submit their household to inspection.` },
  ],
},

{
  id: "theurgs-priesthood",
  group: "Religion",
  title: "Theurgs (as priesthood)",
  blocks: [
    { type: "p", text: `[[theurgs:Theurgs]] are the living conduits of a fading divinity, ranging from scholar-monks who demonstrated a formidable aptitude for the celestial arts to those rare, wretched souls chosen through a traumatic and miraculous visitation from the dying sun-god. Somehow, within the rigid confines of the [[orthodoxy:Orthodoxy]], they have ascended through the ranks to secure a measure of grim notoriety and political leverage. Each Theurg acts as the spiritual lynchpin for a congregation, though many are dispatched as wandering missionaries and clerics to the most desolate corners of K'naan. The most unfortunate amongst their order are sent on perilous, one-way voyages across the silt-choked expanse of the Mere, into the suffocating depths of the Great Forests, across the windswept and lawless [[gorse-barrens:Gorse-Barrens]] and Great Plains, or even to attempt a desperate trek over the jagged [[eastern-massif:Eastern Massif]] to proselytise to the heathen and the monstrous. Whilst they possess power that far eclipses that of the common folk, such influence is bought with decades of absolute, agonizing dedication to a deity that may already be beyond the reach of prayer.` },
  ],
},

{
  id: "cloistered-scribes",
  group: "Religion",
  title: "The Cloistered Scribes",
  blocks: [
    { type: "p", text: `The lowest, but perhaps most vital, rung of the true hierarchy. These are the monks devoted to [[cassiel:Cassiel]] who record the confessions and maintain the Church's vast, secret libraries. They have no political power, but they hold the physical records that keep the powerful in line.` },
  ],
},

// ───── CHILDREN ─────
{
  id: "children-of-the-sun",
  group: "Religion",
  title: "The Children of the Sun",
  subtitle: "The Three Siblings",
  blocks: [
    { type: "p", text: `The Children of [[prios:Prios]] are not viewed as joyous, triumphant demigods. They are the surviving heirs of a dying estate, each representing a different tragic response to their father's murder.` },
    { type: "table", headers: ["Child", "Epithet", "Patron of"], rows: [
      ["[[anari:Anari]]", "The Weeping Daughter", "Mercy & hope; healers, sanctuaries"],
      ["[[valeres:Valeres]]", "The First Son / Iron Apostle", "Military, Morbray knights; (covertly) House Thorne"],
      ["[[iriel:Iriel]]", "The Scorned Daughter / Burning Eye", "Inquisitors, celebrants of the Vigil"],
    ]},
  ],
},

{
  id: "anari",
  group: "Religion",
  title: "Anari, The Weeping Daughter",
  subtitle: "The Bringer of Mercy and Hope",
  blocks: [
    { type: "p", text: `When Prios was struck, his sons drew their swords, but Anari fell to her knees to catch his spilling blood in a golden cup. While she represents the burden of grief, she is also the vessel of his enduring love for the world. In the darkest moments of the god-slaying, it was her touch that promised his light would never truly vanish so long as one heart still beats with compassion.` },
    { type: "p", text: `The Sect of the Weeping Daughters are a massive, tolerated sub-sect of the [[orthodoxy:Orthodoxy]]. They believe Prios cannot be saved by steel or strict laws alone, but by humanity's shared suffering and acts of radical love. Her followers often practice extreme asceticism, but they are also the realm's primary healers and providers of sanctuary. To them, every act of kindness is a stitch in the father's wounds, offering a flicker of hope that the sun may one day be restored through the collective devotion of his children.` },
  ],
},

{
  id: "valeres",
  group: "Religion",
  title: "Valeres, The First Son",
  subtitle: "The Iron Apostle",
  blocks: [
    { type: "p", text: `Valeres is the Iron Apostle, the general who drew his blade a heartbeat too late to save his father. He is consumed by the crushing shame of this failure, a spiritual debt he seeks to repay through the violent and uncompromising defence of whatever light remains in a dying world.` },
    { type: "p", text: `He is the divine patron of K'naan's military, the Marrow-dosed ultra-soldiers, and the steel-clad knights of [[house-morbray:House Morbray]]. His followers believe that true purity is not found in prayer, but achieved through overwhelming physical might and the relentless, blood-soaked slaughter of blighted creatures. To them, every suit of heavy armour is a walking cathedral, and a sword swung in righteous anger against the encroaching dark is the only form of worship that matters.` },
    { type: "p", text: `Unknown to the common masses, he is also the patron of [[house-thorne:House Thorne]]. They look beyond his fury to see the mind of a master tactician - a trait valued by those who understand that some wars are won by the precision of intellect and the whispers of shadows rather than the simple brutality of face-to-face combat.` },
  ],
},

{
  id: "iriel",
  group: "Religion",
  title: "Iriel, The Scorned Daughter",
  subtitle: "The Burning Eye",
  blocks: [
    { type: "p", text: `Iriel did not stay to mourn or defend the body; she rode out into the dark to hunt the ones who held the knife. She represents the harsh, unforgiving glare of the midday sun - the light that exposes, burns, and blinds.` },
    { type: "p", text: `Iriel stands as the divine sovereign and patron of the Church's most zealous [[inquisitors:inquisitors]] and the grim-faced celebrants who oversee the harrowing [[vigil:Vigil of Absolute Disclosure]]. Her devotees are whispered of with a shuddering dread, notorious for an absolute and chilling lack of pity; in their fevered devotion, they maintain that the systematic rooting out and ceremonial burning of heretics is the sole path to avenging their martyred father. While more moderate voices in K'naan suggest their fervour has veered into the realm of the excessive, there are those - hidden in the shadows - who claim their blades have not yet cut deep enough.` },
  ],
},

// ───── ANGELS ─────
{
  id: "angels-index",
  group: "Religion",
  title: "The Six Angels of the Decline",
  blocks: [
    { type: "p", text: `In the old texts there remain many angels. Now, the Church only officially acknowledges the six who are necessary to manage the end of the world. They are not messengers of peace; they are the wardens of a dying realm.` },
    { type: "table", headers: ["Angel", "Title", "Domain"], rows: [
      ["[[samael:Samael]]", "Angel of the Severed Rot", "The purge; necessary amputation"],
      ["[[zachriel:Zachriel]]", "Angel of the Brand", "The Ritual of Cauterisation"],
      ["[[cassiel:Cassiel]]", "Angel of the Vault", "Silence, sealed records, reliquaries"],
      ["[[oriel:Oriel]]", "Angel of the Embers", "Surviving the cold; hearth-keepers"],
      ["[[tariel:Tariel]]", "Angel of the Spilled Chalice", "Seraph's Marrow; the toll on flesh"],
      ["[[moriel:Moriel]]", "Angel of the Final Breath", "Final death; the salted ground"],
    ]},
  ],
},

{
  id: "samael",
  group: "Religion",
  title: "Samael, Angel of the Severed Rot",
  blocks: [
    { type: "p", text: `The patron of the purge, Samael is depicted as a towering, emaciated figure draped in tattered grey robes, holding a jagged, rust-stained saw rather than a sword. He represents the agonising necessity of cutting away a corrupted limb to save the body. His following is born of cold pragmatism and fear; soldiers and inquisitors pray to him before marching into the [[silt-mere:Silt-Mere]] or the [[gorse-barrens:Gorse-Barrens]], asking for the steel-nerved resolve to strike down even their own kin if they show signs of Stigma; doctors and nurses pray to him for the wisdom to cut out only what is needed. Temples (and hospitals!) dedicated to Samael are stark, clinical spaces of cold stone, often smelling of caustic lye and pungent herbs, where the only decoration is the rhythmic, mechanical ticking of clocks and the sharp gleam of surgical tools.` },
  ],
},

{
  id: "zachriel",
  group: "Religion",
  title: "Zachriel, Angel of the Brand",
  blocks: [
    { type: "p", text: `The patron of [[cauterisation:the Ritual of Cauterisation]], Zachriel is envisioned with hands and eyes of white-hot, glowing iron that never cools. He represents the harsh, literal truth that pain is the only fire hot enough to cleanse the creeping shadow from a soul. He is followed by those who believe that salvation is forged in suffering; the torturers and the priests who wield the branding irons consider themselves the mortal hands of Zachriel. His chapels are typically circular, soot-blackened chambers built around a central, eternal forge. The air is always shimmering with intense heat, and the walls are lined with bronze plaques recording the names of those whose "impurities" were successfully burned away.` },
  ],
},

{
  id: "cassiel",
  group: "Religion",
  title: "Cassiel, Angel of the Vault",
  blocks: [
    { type: "p", text: `The silent watcher, Cassiel represents the jealous hoarding of the sun's remaining life force. He is the angel of locked doors, sealed lips, and preserved resources, often depicted with multiple wings folded tightly around his body like a shroud of feathers. He is followed by the secretive and the disciplined; the monks who guard the Church's reliquaries and the scribes who record the harrowing confessions of the nobles pray to Cassiel for the strength of absolute silence. Temples of Cassiel are often subterranean vaults or windowless towers where sound is swallowed by heavy velvet hangings. Visitors must communicate through gesture alone, and the only light comes from the dim, flickering glow of oil lamps that are never allowed to fail.` },
  ],
},

{
  id: "oriel",
  group: "Religion",
  title: "Oriel, Angel of the Embers",
  blocks: [
    { type: "p", text: `The keeper of the fading warmth, Oriel is the angel invoked by the common folk during the freezing, brine-heavy weeks of [[white-blind:the White-Blind]]. She is depicted as a weary woman shielding a tiny, guttering flame with her palms. She represents the desperate attempt to keep the hearth fires lit when the wood is wet and the coal is scarce. She is followed out of a primal need for survival; apart from [[anari:Anari]], she is the closest thing the religion has to a comforting figure, though her comfort is merely the avoidance of the grave. Shrines to Oriel are small, humble, and overcrowded, found in the kitchens of peasant hovels or the basements of tenements, always built around a communal fireplace where the desperate huddle together for shared warmth.` },
  ],
},

{
  id: "tariel",
  group: "Religion",
  title: "Tariel, Angel of the Spilled Chalice",
  blocks: [
    { type: "p", text: `The patron of the holy blood and the physical toll it takes on the mortal form, Tariel is depicted holding a cracked cup, his hands and forearms stained a permanent, oily black. He represents the terrible necessity of using the Father's own essence - the [[seraphs-marrow:Seraph's Marrow]] - to fight his wars. He is the angel most fiercely revered by [[house-chancel:House Chancel]] and those who must endure the warping, monstrous mutations of the Marrow. His followers seek him for the endurance to survive a medicine that is just as likely to kill or madness-strike them as it is to save them. Temples to Tariel are opulent yet grotesque, featuring fountains that flow with thick, dark oils and stained-glass windows that depict the violent biological transformations of the anointed in vivid, clashing colours.` },
  ],
},

{
  id: "moriel",
  group: "Religion",
  title: "Moriel, Angel of the Final Breath",
  blocks: [
    { type: "p", text: `The angel no one wants to see, Moriel is rarely spoken of aloud. He is the angel of the threshold, depicted as a featureless, towering shadow standing over Prios's bed with a heavy, leaden burial shroud. He represents the finality of the end. [[theurgs:Theurgs]] only invoke Moriel when a blighted Abomination is beyond saving and must be granted an absolute, final death. He is followed only by those whose duty it is to manage the dead and the damned. His "temples" are the ossuaries and the execution grounds of K'naan - cold, desolate places where the earth is salted and no birds sing. It is considered a dark omen to even look upon a shrine of Moriel, which usually consists of a single, unadorned slab of black basalt.` },
  ],
},

{
  id: "heralds-of-the-ash",
  group: "Religion",
  title: "The Heralds of the Ash",
  subtitle: "Splinter Cult",
  blocks: [
    { type: "p", text: `Whilst the [[orthodoxy:Orthodoxy]] desperately strives to sustain the sun, a radical, underground sect has emerged that believes the battle is already lost. Known as the Heralds of the Ash, they operate in the darkest fringes of society, driven by a nihilistic conviction that the end is not merely coming, but has already occurred.` },
    { type: "ul", items: [
      `<b>The Deceased Sun:</b> Where the Orthodoxy sees a dying god, the Heralds see a flickering corpse. They preach that the sun in the sky is a celestial cadaver, and that the "miracles" performed by [[theurgs:Theurgs]] are nothing more than the final, autonomic twitches of a god long since dead. They further claim that the warmth of the sun is now a mocking illusion, masking the true, encroaching cold of the void.`,
      `<b>The Heresy of Pure Desire:</b> Because the cosmic judge is dead, the Heralds teach that all moral and secular laws have been rendered void. They encourage followers to embrace "Pure Desire" and actively seek out [[corruption:Corruption]], arguing that the shifting, chaotic nature of the dark is the only honest reality left. Some even seek to "catalyse" their own transformation, believing that the abominable state is the next logical step in a world without light.`,
      `<b>The Ritual of Snuffing:</b> Their primary communal activity involves gathering in absolute blackness to "prepare" their souls for the eternal night. During these sessions, they meditate on the sensation of sensory deprivation, training their minds to navigate a world where sight and light no longer exist. They often use "Void-Chime" bells—hollowed iron instruments that produce a sound meant to mimic the ringing silence of the grave.`,
      `<b>Whispered Proselytising:</b> Members spend their days infiltrating the desperate peasantry and disillusioned soldiers, subtly undermining the [[sun-taxes:Sun-Taxes]] and the Church's authority. They often leave small piles of grey ash on the doorsteps of those who have suffered recent tragedies—a silent invitation to join a faith that does not demand hope in exchange for survival.`,
    ]},
    { type: "p", text: `These activities are strictly illegal, and discovery by the Church leads to immediate execution by fire. Nevertheless, their influence continues to swell amongst the downtrodden who are tired of praying to a father who never answers.` },
  ],
},

// ───────────────────────── DOCTRINE & PRACTICE ─────────────────────────
{
  id: "liturgy-of-truth",
  group: "Doctrine",
  title: "The Liturgy of Truth",
  subtitle: "Secrecy is heresy",
  blocks: [
    { type: "p", text: `The doctrinal core of the [[orthodoxy:Orthodoxy]]. To be anything other than the form the dying sun-god made is the most profound heresy; to wear a false face is its ultimate manifestation. The Church's most visible stance follows directly: [[changelings:Changelings]] cannot be permitted to exist.` },
    { type: "p", text: `Human form, human honesty, human confession — the Liturgy binds them together. Secrecy is a violent heresy against the dying sun. It is the doctrinal argument behind both the [[vigil:Vigil of Absolute Disclosure]] and the [[cauterisation:Ritual of Cauterisation]].` },
  ],
},

{
  id: "sun-taxes",
  group: "Doctrine",
  title: "Sun-Taxes",
  subtitle: "The price of belonging",
  blocks: [
    { type: "p", text: `Tributes owed to the [[orthodoxy:Orthodoxy]] by every K'naanian citizen. Paying them, and confessing one's sins at the appointed times, is what affords the basic protections of the law. To refuse is not merely impiety; it is to place oneself outside the civic community entirely.` },
    { type: "p", text: `The Sun-Taxes are not small. The Orthodoxy is a wealthy institution in large part because of them.` },
  ],
},

{
  id: "silence-of-god",
  group: "Doctrine",
  title: "The Silence of God",
  subtitle: "Why the faith splintered",
  blocks: [
    { type: "p", text: `The doctrinal term for [[prios:Prios]]'s near-total failure to speak to his clerics. Though the [[orthodoxy:Orthodoxy]] remains the dominant power, the long-standing Silence has caused the faith to splinter — common knowledge now that Prios rarely speaks to anyone, leaving his followers to interpret his fading heartbeat through the legends of his various Angels and the deeds of his Children.` },
    { type: "p", text: `This is why religion in K'naan feels frantic rather than comforting. There is no room for celebration in the chapels of K'naan. There is only the urgent, heavy duty of the living to keep the faith from going out.` },
  ],
},

// ───────────────────────── RACES ─────────────────────────
{
  id: "races",
  group: "Races",
  title: "The Races & Origins in K'naan",
  blocks: [
    { type: "p", text: `K'naan is a realm built by humans, for humans, under the dying light of a human-centric god. The Church preaches that the human form is the only vessel capable of bearing the [[liturgy-of-truth:Liturgy of Truth]]. To be anything else in this world is to live a life of brutal subjugation, constant paranoia, or immediate peril.` },
  ],
},

{
  id: "ambrians",
  group: "Races",
  title: "Humans",
  subtitle: "Ambrians — the default",
  blocks: [
    { type: "p", text: `Most players, especially those starting as guards for a noble house like Jannin, will fall into this category.` },
    { type: "p", text: `The standard citizens of the realm: common folk, merchants, nobles, and the bulk of the house levies. Afforded the basic protections of the law, provided they pay their [[sun-taxes:Sun-Taxes]] and confess their sins.` },
    { type: "p", text: `Mechanically identical to Symbaroum's Ambrians — Ambrian is simply the Symbaroum-canon name that K'naanians use internally for themselves.` },
  ],
},

{
  id: "fringe-folk",
  group: "Races",
  title: "Fringe-Folk",
  subtitle: "Barbarians, renamed",
  blocks: [
    { type: "p", text: `Humans born outside the immediate grip of the largest cities and towns — hailing from the edges of the [[gorse-barrens:Gorse-Barrens]] or the isolated [[silt-mere:Silt-Mere]] villages. Hardier and more superstitious than their lowland cousins.` },
    { type: "p", text: `The [[orthodoxy:Orthodoxy]] views them as uncultured and borderline heathen, but they remain tolerated as human — they pay their [[sun-taxes:Sun-Taxes]] and their civic obligations, and that is enough.` },
    { type: "p", text: `Mechanically identical to Symbaroum's Barbarians — Fringe-Folk is simply the K'naanian name for the same stock. Use the Barbarian stat block from the core rulebook.` },
  ],
},

{
  id: "outcasts",
  group: "Races",
  title: "The Outcasts",
  subtitle: "The \"Hard Mode\" Options",
  blocks: [
    { type: "p", text: `Choosing these races means accepting a campaign where the Church and the law are active, lethal antagonists to your very existence.` },
  ],
},

{
  id: "ogres",
  group: "Races",
  title: "Ogres",
  blocks: [
    { type: "p", text: `In a kingdom ruled by nobles who use [[seraphs-marrow:Seraph's Marrow]] to turn themselves into towering giants, natural Ogres are viewed with intense disgust as "blighted" or bastardised Marrow-mutants. They are tolerated only as expendable shock-troopers or brute labour. Because custom-sized steel armour is completely unaffordable, an Ogre in K'naan will spend their life fighting in boiled leather, heavy furs, or bare-chested, relying entirely on their natural Robust trait to survive.` },
  ],
},

{
  id: "goblins",
  group: "Races",
  title: "Goblins",
  blocks: [
    { type: "p", text: `Viewed as little more than vermin. They are the miserable, expendable workforce used in the most dangerous environments - tunnel rats in [[house-vane:House Vane]]'s deepest coal mines, or mud-scavengers dragging nets through the [[silt-mere:Silt-Mere]]. A goblin guard in [[house-jannin:House Jannin]] would be the absolute lowest rung of the household, subjected to constant mockery and given the worst rations.` },
  ],
},

{
  id: "changelings",
  group: "Races",
  title: "Changelings",
  subtitle: "The Ultimate Blasphemy",
  blocks: [
    { type: "p", text: `To play a Changeling in K'naan is to invite death. The [[orthodoxy:Orthodoxy]] is built upon the [[liturgy-of-truth:Liturgy of Truth]], which dictates that secrecy is a violent heresy against the dying sun. To physically wear a false face is the most profound, unforgivable lie a creature can tell.` },
    { type: "p", text: `A Changeling cannot simply exist in society; they must remain perfectly hidden. If they are discovered, they are not merely shunned. The [[inquisitors:Inquisitors of the Brand]] will hunt them down. It is vital to understand that a Changeling's physical disguise is entirely useless against high-ranking Church officials - any Inquisitor or [[theurgs:Theurg]] possessing the [[witchsight:Witchsight]] ability will instantly see through the stolen face to the shifting, unnatural aura beneath.` },
    { type: "p", text: `If caught, there is no trial. The Church considers Changelings to be literal manifestations of the encroaching dark. They will be dragged to the nearest forge and subjected to a fatal, prolonged variant of [[cauterisation:the Ritual of Cauterisation]], burned alive to "cleanse the lie" from the earth. A player choosing this race must be prepared for a life of constant, suffocating paranoia.` },
  ],
},

// ═════════════════════════════════════════════════════════════════════════
// ═════════════════════════  HOMEBREW RULES  ══════════════════════════════
// ═════════════════════════════════════════════════════════════════════════

{
  id: "house-rules",
  group: "Homebrew Rules",
  title: "Homebrew Rules",
  blocks: [
    { type: "p", text: `These are subject to potential change, but they are the starting point for Sacred Veil's homebrew and important to know.` },
  ],
},

{
  id: "true-quality-steel",
  group: "Homebrew Rules",
  title: "True Quality Steel",
  subtitle: "The steel rule — and what happens to everyone who can't afford it",
  body: `In K'naan, every weapon, shield and suit of armour is assumed to be low-grade by default — bronze-shod, brittle iron, cracked hide, boiled leather, rust under lacquer. True Quality Steel is the exception: rare, expensive, and the only gear that will reliably not fail you. A piece may also be exempt if the GM explicitly says so (magical origin, ancient relic, a specific heirloom) but the default assumption is that nothing you carry is dependable.`,
  blocks: [
    { type: "h3", text: "True Quality Steel" },
    { type: "facts", items: [
      ["Source", "Officially forged only by [[house-vane:House Vane]], through the [[chainmakers:Chainmakers]]' [[great-forge:Great Forge]] in [[har-moloch:Har-Moloch]]."],
      ["Cost", "10× the standard price for its class."],
      ["Properties", "Never becomes Brittle. Armour never becomes Shoddy. See below for what those are."],
      ["Repair", "Only a smith can repair it — no field patches, no tavern fixes."],
    ]},
    { type: "p", text: `Players start the campaign with none of it. Acquiring even a single True Steel piece is a story beat, not a shopping trip.` },

    { type: "h3", text: "Everything else — the default" },
    { type: "p", text: `Because almost everything on your character sheet is low-grade, the kingdom's metalwork has a habit of betraying its wielder at the worst moment. "Brittle" and "Shoddy" aren't properties you can buy, enchant, or pick off a table — they're descriptions of what happens to the default, and what the kingdom assumes will happen, sooner or later, to anyone who can't afford Vane steel.` },
    { type: "defs", items: [
      ["Brittle (weapons)", "On a natural 20 on an attack roll with a low-grade weapon, the weapon becomes Brittle: its damage die drops permanently to 1d4 until a smith repairs it. You can keep swinging it — it just stops reliably killing people."],
      ["Shoddy (armour)", "On a natural 20 on a defense roll while wearing low-grade armour, the armour becomes Shoddy: its Armour Tier drops by one. At Tier 0, the piece is destroyed. A smith can repair Shoddy armour, but the fix is never as good as the original."],
    ]},
    { type: "p", text: `Exceptions to the default — magical arms, relics, gifts from the Chancel — are rare enough that when one comes up, the GM will tell you.` },
  ],
},

{
  id: "fighting-blind",
  group: "Homebrew Rules",
  title: "Fighting Blind",
  blocks: [
    { type: "facts", items: [
      ["Trigger", "Combat inside [[white-blind:the White-Blind]] mist or in pitch darkness with no light source."],
      ["Effect", "Roll disadvantage."],
      ["Remedy", "A carried torch or shuttered lantern removes the penalty."],
      ["Free-hand requirement", "Carrying a torch or lantern requires a free hand."],
    ]},
  ],
},

{
  id: "pariah-burden",
  group: "Homebrew Rules",
  title: "Pariah Burden",
  blocks: [
    { type: "facts", items: [
      ["Applies to", "Non-human PCs (Ogre, Goblin, Changeling)."],
      ["Mechanic", "The Pariah burden must be taken at character creation."],
    ]},
  ],
},

{
  id: "ogre-custom-armour",
  group: "Homebrew Rules",
  title: "Ogre Custom Armour",
  blocks: [
    { type: "facts", items: [
      ["Cost", "5× to 10× standard price."],
    ]},
  ],
},

{
  id: "changeling-disguise",
  group: "Homebrew Rules",
  title: "Changeling Disguise",
  blocks: [
    { type: "facts", items: [
      ["vs. [[witchsight:Witchsight]]", "No mechanical protection. No roll. No resistance."],
      ["Consequence of detection", "Immediate execution."],
    ]},
  ],
},

// ───── PLACES ─────
{
  id: "places-index",
  group: "Places",
  title: "Cities, Seats & Strongholds",
  blocks: [
    { type: "p", text: `Named locations across the kingdom of K'naan.` },
    { type: "table", headers: ["Place", "Type", "Tied to"], rows: [
      ["[[ash-kadesh:Ash-Kadesh]]", "Capital city", "— (the crown)"],
      ["[[har-moloch:Har-Moloch]]", "Forge-city", "[[house-vane:House Vane]]"],
      ["[[bet-seraphim:Bet-Seraphim]]", "Abbey-refinery", "[[house-chancel:House Chancel]]"],
      ["[[gath-mere:Gath-Mere]]", "Port-city", "[[house-kaelen:House Kaelen]]"],
      ["[[raven-garron:Raven-Garron]]", "Fortress-town", "[[house-morbray:House Morbray]]"],
      ["[[amarsgate:Amarsgate]]", "Mining town", "[[house-jannin:House Jannin]]"],
      ["[[grendels-reach:Grendel's Reach]]", "Stilt-village", "[[house-grendel:House Grendel]]"],
    ]},
  ],
},

{
  id: "ash-kadesh",
  group: "Places",
  title: "Ash-Kadesh",
  subtitle: "Capital of K'naan",
  blocks: [
    { type: "p", text: `Built on a long ridge above the confluence of three trade roads.` },
    { type: "h3", text: "Three districts" },
    { type: "ul", items: [
      `<b>Crown-Shelf (high):</b> noble residences, [[thorne-archive:Thorne Archive]], [[iron-gavel:Iron Gavel]].`,
      `<b>Ledger-Ward (middle):</b> Magistracy, counting-houses, [[hollow-sun:the Hollow Sun]], [[argent-academy:the Argent Academy]], [[golden-weights:the Golden Weights]].`,
      `<b>The Mourn (low):</b> [[iron-spire:Iron Spire]] and [[silent-scrivener:Silent Scrivener]] operate openly.`,
    ]},
    { type: "h3", text: "The Dusk-Knell" },
    { type: "p", text: `A single bell cast from Vane steel, rung at twilight. Closes Crown-Shelf to commoners without a signed writ; violators thrown from the Shelf. The most-feared sound in K'naan.` },
  ],
},

{
  id: "har-moloch",
  group: "Places",
  title: "Har-Moloch",
  subtitle: "\"Mount of the Devourer\" — House Vane's forge-city",
  blocks: [
    { type: "p", text: `Tens of thousands under permanent grey haze. Skyline of smelting towers and slag-heaps called the <b>Iron Teeth</b>.` },
    { type: "ul", items: [
      `<b>[[anvilhold:Anvilhold]]</b> — Vane's keep. Walls of black slag-glass, cast-iron throne, no natural light in the throne-room.`,
      `<b>[[third-furnace:Third Furnace]]</b> — most feared post in the city. Foreman: [[gest-harrow:Gest Harrow]].`,
      `<b>[[great-forge:The Great Forge]]</b> — Chainmakers' works. Largest single building in the city.`,
    ]},
  ],
},

{
  id: "bet-seraphim",
  group: "Places",
  title: "Bet-Seraphim",
  subtitle: "House Chancel's walled abbey-refinery",
  blocks: [
    { type: "p", text: `Three days' ride from the capital. Part cathedral, part chemical works. Reek of refinement carries for miles.` },
    { type: "ul", items: [
      `<b>[[the-drift:The Drift]]</b> — the town around it: pilgrims, indentured refiners, alms-poor.`,
      `<b>Refinement vats</b> three storeys tall, lit only by specific narrow windows — refiners say the light has to be right or the Marrow does not "take."`,
    ]},
  ],
},

{
  id: "gath-mere",
  group: "Places",
  title: "Gath-Mere",
  subtitle: "House Kaelen's port-city",
  blocks: [
    { type: "p", text: `Coastal, on the inland edge of the [[silt-mere:Silt-Mere]]. Grain silos and fish-drying racks dominate the skyline.` },
    { type: "ul", items: [
      `<b>[[tide-reach-wharf:Tide-Reach Wharf]]</b> — Silt-Strider Collective HQ, stretches roughly a mile along the shore.`,
      `<b>[[silveldt:Silveldt]]</b> — Olenna Kaelen's manor. Pale-stone hall raised above the flood-plain; ground floor floods some years.`,
    ]},
  ],
},

{
  id: "raven-garron",
  group: "Places",
  title: "Raven-Garron",
  subtitle: "House Morbray's fortress-town",
  blocks: [
    { type: "p", text: `Black-walled keep guarding the only reliably traversable [[gorse-barrens:Gorse-Barrens]] pass. Town below exists to service the cavalry.` },
    { type: "p", text: `The courtyard contains a single ancient <b>Dead Rowan Tree</b> — never cut down. Said to have grown from the grave of the first Morbray to hold the pass. Every new recruit is walked past it on day one with no explanation; they are expected to ask.` },
  ],
},

{
  id: "hollow-sun",
  group: "Places",
  title: "The Hollow Sun",
  subtitle: "Orthodoxy's great temple, Ledger-Ward",
  blocks: [
    { type: "p", text: `Dome-roofed cathedral. Interior unlit except for a single oculus in the dome through which sun falls onto the central altar for exactly one hour at midday. Rest of the day kept in near-total darkness — "the watch of the dying light."` },
    { type: "p", text: `Deep vault of crypts and confession-cells beneath the nave, used for [[vigil:Vigils]].` },
  ],
},

{
  id: "thorne-archive",
  group: "Places",
  title: "Thorne Archive",
  subtitle: "House Thorne's seat, Ledger-Ward",
  blocks: [
    { type: "p", text: `Narrow tall dark-stone building. Three rooms wide at ground level, rising six storeys. Visitors searched at every landing. [[malachi-thorne:Malachi]]'s office on the top floor, reached by a single winding staircase. Vaults beneath hold original deeds and contracts.` },
  ],
},

{
  id: "iron-gavel",
  group: "Places",
  title: "The Iron Gavel",
  subtitle: "House Valerius's courthouse-barracks, Ash-Kadesh",
  blocks: [
    { type: "p", text: `Courtyard contains the <b>Scaffold-Stone</b> — low granite block used for sentencing and execution for nine consecutive generations.` },
  ],
},

{
  id: "argent-academy",
  group: "Places",
  title: "Argent Academy",
  subtitle: "Ordo Magicka's seat, Ledger-Ward",
  blocks: [
    { type: "p", text: `Low, square. No windows on the ground floor; exactly thirteen windows on each floor above (no explanation given). Small courtyard with a dry fountain — students pass through in silence.` },
  ],
},

{
  id: "golden-weights",
  group: "Places",
  title: "The Golden Weights",
  subtitle: "Covenant of Coin's counting-house",
  blocks: [
    { type: "p", text: `Unremarkable facade in Ledger-Ward. Brass scales worked into the doorposts. Vaults extend further underground than the building rises above. Appointments required.` },
  ],
},

{
  id: "the-spike",
  group: "Places",
  title: "The Spike",
  subtitle: "Iron Spire's stronghold in The Mourn",
  blocks: [
    { type: "p", text: `Tenement-warren. Outer walls plastered with guild notices and penitent prayers for camouflage. Leadership meets in a converted chapel where the old altar has been replaced with a long iron table. [[magistracy:Magistracy]] does not enter.` },
  ],
},

{
  id: "grendels-reach",
  group: "Places",
  title: "Grendel's Reach",
  subtitle: "House Grendel's stilt-village",
  blocks: [
    { type: "p", text: `Houses raised a full storey above the water on stilts, connected by rope bridges.` },
    { type: "ul", items: [
      `<b>[[the-rot:The Rot]]</b> — Grendel's keep. Squat, algae-slicked dark-stone tower whose lower floors are periodically underwater.`,
    ]},
  ],
},

{
  id: "amarsgate",
  group: "Places",
  title: "Amarsgate",
  subtitle: "House Jannin's silver-mining town (the PCs' home)",
  blocks: [
    { type: "p", text: `Small fortified town at the foot of the [[eastern-massif:Eastern Massif]], built around the silver mine. Keep Amar stands on the ridge above the mine — by tradition older than House Jannin, whoever holds the keep takes its name, so the lord who sits there is always "Lord Amar." When the campaign begins, most of the town is burning or burned. The mine itself was not taken.` },
  ],
},

{
  id: "great-forge",
  group: "Places",
  title: "The Great Forge",
  subtitle: "Chainmakers' works inside Har-Moloch",
  blocks: [
    { type: "p", text: `Largest single building in the city; chimney stack visible from three days' ride away on a clear day. Three working levels. The upper level, reached by a single iron stair, is where [[true-quality-steel:True Quality Steel]] is actually made; outside the inner guild, no one has been inside it in three generations.` },
  ],
},

{
  id: "drowned-moot",
  group: "Places",
  title: "The Drowned Moot",
  subtitle: "Silt-Eaters' ritual site",
  blocks: [
    { type: "p", text: `Location unknown. Recovered bodies come from sites deep in the [[silt-mere:Silt-Mere]] marked by spirals of broken pottery and human bone with standing water at the centre.` },
  ],
},

// ═════════════════════════════════════════════════════════════════════════
// ═════════════════════  REGIONS & ENVIRONMENT  ═══════════════════════════
// ═════════════════════════════════════════════════════════════════════════

{
  id: "silt-mere",
  group: "Regions & Environment",
  title: "The Silt-Mere",
  subtitle: "Humongous inland lake",
  blocks: [
    { type: "p", text: `A massive inland sea of brackish, shallow water that defines K'naan's northwestern horizon. The tides are unpredictable and the mud-flats can swallow a horse whole.` },
    { type: "p", text: `Crossing the Mere safely is the monopoly of the [[silt-strider-collective:Silt-Strider Collective]]. [[house-kaelen:House Kaelen]] controls the grain, fisheries and shoreline trade. [[house-grendel:House Grendel]] occupies its marshy fringes.` },
  ],
},

{
  id: "eastern-massif",
  group: "Regions & Environment",
  title: "The Eastern Massif",
  subtitle: "Wall of grey stone",
  blocks: [
    { type: "p", text: `A wall of grey stone and thin air forming K'naan's eastern boundary. Its peaks are so steep and shattered that only a handful of high passes are even remotely traversable.` },
    { type: "p", text: `[[house-morbray:House Morbray]] holds the single reliable pass; [[raven-garron:Raven-Garron]] exists to guard it.` },
  ],
},

{
  id: "gorse-barrens",
  group: "Regions & Environment",
  title: "The Gorse-Barrens",
  subtitle: "Between Mere and Massif",
  blocks: [
    { type: "p", text: `The common name for the broad land that stretches between the [[silt-mere:Silt-Mere]] and the [[eastern-massif:Eastern Massif]]. Noisome bogs, mire-choked earth, sparse settlements, and dense towns all fall within it. Frequently blanketed by [[white-blind:the White-Blind]].` },
  ],
},

{
  id: "great-forests",
  group: "Regions & Environment",
  title: "The Great Forests",
  subtitle: "Haven of the foulest things",
  blocks: [
    { type: "p", text: `Perhaps no feature of K'naan is more imposing or rightfully feared. The Great Forests are the haven of the most wicked and foulest creatures, including the nefarious [[witches:Witches]]. The land, though seemingly vast, offers no true sanctuary — its very extent ensures that no one is ever far enough removed from the malicious territory the forests claim.` },
  ],
},

{
  id: "white-blind",
  group: "Regions & Environment",
  title: "The White-Blind",
  subtitle: "The kingdom's weather",
  blocks: [
    { type: "p", text: `A thick, salty mist that rolls off the [[silt-mere:Silt-Mere]] and blankets the [[gorse-barrens:Gorse-Barrens]] for minutes, hours, or days at a time. It carries a heavy brine that rusts iron, rots leather, and chokes the lungs.` },
    { type: "p", text: `For the homebrew rule on combat in the White-Blind, see [[fighting-blind:Fighting Blind]].` },
  ],
},

// ═════════════════════════════════════════════════════════════════════════
// ══════════════════════  FRINGE-FOLK (Races)  ════════════════════════════
// ═════════════════════════════════════════════════════════════════════════

{
  id: "fringe-folk",
  group: "Races",
  title: "Fringe-Folk",
  subtitle: "The hardier humans of the edges",
  blocks: [
    { type: "p", text: `Humans born outside the immediate grip of the largest cities and towns — the population of the [[gorse-barrens:Gorse-Barrens]], the isolated [[silt-mere:Silt-Mere]] villages, and the scattered settlements of the deep interior. Mechanically they are identical to [[ambrians:Ambrians]]; they are Symbaroum's "Barbarians" under a K'naanian name. They are hardier by habit and superstitious by inheritance.` },
    { type: "p", text: `The [[orthodoxy:Orthodoxy]] views them as uncultured and borderline heathen, but they are still tolerated as human — which, in K'naan, is the line that matters most.` },
  ],
},

// ═════════════════════════════════════════════════════════════════════════
// ════════════════════  DOCTRINE & PRACTICE (Faith)  ══════════════════════
// ═════════════════════════════════════════════════════════════════════════

{
  id: "silence-of-god",
  group: "Doctrine & Practice",
  title: "The Silence of God",
  subtitle: "Why the faith has splintered",
  blocks: [
    { type: "p", text: `While the [[orthodoxy:Sun-Church of Prios]] remains the dominant power, the long-standing "Silence of God" has caused the faith to splinter. It has become common knowledge that [[prios:Prios]] now rarely speaks to his clerics, leaving his followers to interpret his fading heartbeat through the legends of his various Angels and the deeds of his Children.` },
    { type: "p", text: `The Silence is the pressure under which every other doctrine bends. It is why the [[children-of-the-sun:Children of the Sun]] gather their own cults. It is why the [[angels-index:Six Angels of the Decline]] receive more prayers than the dying father. It is why the [[heralds-of-the-ash:Heralds of the Ash]] find listeners.` },
  ],
},

{
  id: "liturgy-of-truth",
  group: "Doctrine & Practice",
  title: "The Liturgy of Truth",
  subtitle: "Secrecy is heresy",
  blocks: [
    { type: "p", text: `The doctrinal core of the [[orthodoxy:Orthodoxy]]: that the human form is the only vessel capable of bearing truth, and that secrecy — the wearing of any false face, literal or otherwise — is a violent heresy against the dying sun.` },
    { type: "p", text: `In practice, the Liturgy justifies the [[inquisitors:Inquisitors of the Brand]], the [[vigil:Vigil of Absolute Disclosure]], and the [[cauterisation:Ritual of Cauterisation]]. A [[changelings:Changeling]]'s stolen face is, to the Church, the Liturgy's ultimate violation and is met with immediate execution.` },
  ],
},

{
  id: "sun-taxes",
  group: "Doctrine & Practice",
  title: "Sun-Taxes",
  subtitle: "The tribute of the faithful",
  blocks: [
    { type: "p", text: `Tributes owed to the [[orthodoxy:Orthodoxy]] by every citizen of K'naan. Paying one's Sun-Taxes — and confessing one's sins — is what affords the basic protections of the law. Those who fail to pay lose, in doctrine and often in practice, their standing as citizens.` },
    { type: "p", text: `Collection is overseen by [[house-thorne:House Thorne]] alongside the Orthodoxy's own scribes.` },
  ],
},

// ═════════════════════════════════════════════════════════════════════════
// ═══════════════════  MAGISTRACY (Guilds & Crime)  ═══════════════════════
// ═════════════════════════════════════════════════════════════════════════

{
  id: "magistracy",
  group: "Law",
  title: "The Magistracy",
  subtitle: "The Watch of K'naan",
  blocks: [
    { type: "p", text: `The Magistracy is K'naan's police force and the kingdom's primary instrument of law enforcement. It answers, in theory, to the Lord of Lords; with the throne vacant it answers in practice to the [[high-council:High Council]], with day-to-day administration in the hands of [[house-thorne:House Thorne]]. The bulk of the officer corps in the capital is drawn from [[house-valerius:House Valerius]].` },
    { type: "h3", text: "Presence across the kingdom" },
    { type: "p", text: `The Magistracy is a capital institution first. Outside [[ash-kadesh:Ash-Kadesh]], its presence is sparse:` },
    { type: "ul", items: [
      `<b>Villages and small towns:</b> a single [[reeve:Reeve]], occasionally with a [[warden:Warden]] or two under them.`,
      `<b>Larger towns and cities:</b> three to five Reeves, each with their own wardens, answering to the senior Reeve of the region.`,
      `<b>Capital:</b> full Magistracy, with counting-houses, courts, standing officer corps, and the weight of [[house-thorne:Thorne]] administration behind it.`,
    ]},
    { type: "p", text: `Between settlements, the Magistracy's writ is largely theoretical. The roads are watched, where they are watched at all, by house levies and the occasional patrol — not by the Watch.` },
  ],
},

{
  id: "reeve",
  group: "Law",
  title: "Reeves",
  subtitle: "The Magistracy's hand outside the capital",
  blocks: [
    { type: "p", text: `A Reeve is the Magistracy's senior officer in a given settlement or region outside the capital. In a village, one Reeve stands alone; in a larger city, several share the burden, each with a handful of [[warden:Wardens]] beneath them.` },
    { type: "p", text: `A Reeve's authority is the Lord of Lords' authority delegated — which, in the current interregnum, means the High Council's and, day-to-day, [[house-thorne:House Thorne]]'s. Their powers in their own region are wide; their recourse when those powers are defied is often thin.` },
  ],
},

{
  id: "warden",
  group: "Law",
  title: "Wardens",
  subtitle: "Rank and file of the Watch",
  blocks: [
    { type: "p", text: `Wardens are the Magistracy's rank-and-file officers, serving under a [[reeve:Reeve]]. In a small settlement they may be the only uniformed presence for a day's ride; in the capital they form the standing body of the Watch itself.` },
  ],
},

// ───── NPCs ─────
{
  id: "npcs-index",
  group: "NPCs",
  title: "Persons of Note",
  blocks: [
    { type: "table", headers: ["Name", "Role", "Affiliation"], rows: [
      ["[[silas-vane:Silas Vane]]", "Lord Commander", "[[house-vane:House Vane]]"],
      ["[[isolde-vane:Isolde Vane]]", "Heir? / Negotiator", "[[house-vane:House Vane]]"],
      ["[[vespera:High Abbotess Vespera]]", "Head of house", "[[house-chancel:House Chancel]]"],
      ["[[tybalt:Brother-Captain Tybalt]]", "Cleric-soldier", "[[house-chancel:House Chancel]]"],
      ["[[olenna-kaelen:Olenna Kaelen]]", "Lady-Regent", "[[house-kaelen:House Kaelen]]"],
      ["[[fenris-morbray:Fenris Morbray]]", "Lord-Captain", "[[house-morbray:House Morbray]]"],
      ["[[malachi-thorne:Malachi Thorne]]", "Lord Chancellor", "[[house-thorne:House Thorne]]"],
      ["[[arkin-valerius:Arkin Valerius]]", "Head of house", "[[house-valerius:House Valerius]]"],
      ["[[dennin-grendel:Dennin Grendel]]", "Head of house", "[[house-grendel:House Grendel]]"],
      ["[[malagant:Sun-Speaker Malagant]]", "Head of Orthodoxy", "[[orthodoxy:The Orthodoxy]]"],
      ["[[velis:Scribe-Mother Velis]]", "Malagant's secretary", "[[orthodoxy:The Orthodoxy]]"],
      ["[[gest-harrow:Gest Harrow]]", "Foreman, Third Furnace", "[[chainmakers:Chainmakers]]"],
      ["[[amar-jannin:Lord Amar, 13th of that name]]", "Patriarch (deceased)", "[[house-jannin:House Jannin]]"],
      ["[[naviel-jannin:Naviel Jannin]]", "Lord-Elect (missing)", "[[house-jannin:House Jannin]]"],
      ["[[fidarel:Sovereign Fidarel]]", "Prior Lord of Lords (deceased)", "—"],
    ]},
  ],
},

{
  id: "naviel-jannin",
  group: "NPCs",
  title: "Naviel Jannin",
  subtitle: "Lord-Elect, missing, favourite son",
  blocks: [
    { type: "p", text: `[[house-jannin:House Jannin]]'s favourite son and appointed heir. Rarely involved in courtly politics; spent his time in a library, on long walks, or with the poor and destitute. Despite this, commanded an unexpectedly large and diverse base of support.` },
    { type: "p", text: `At the siege that opened the campaign, one attacker tried to rip the lavender pendant from Naviel's neck, only to recoil with a confused yelp. The commander snarled, <i>"Leave it! We'll cut it off him later!"</i> Added flavour: the pendant's protective behaviour is consistent across the campaign.` },
  ],
},

{
  id: "amar-jannin",
  group: "NPCs",
  title: "Lord Amar, 13th of that name",
  subtitle: "Amar Jannin — deceased patriarch of House Jannin",
  blocks: [
    { type: "p", text: `A man as wise as he is wealthy, deeply respected, and the patriarch of a large family. The heart of the house — a man of iron will and deep pockets who kept the silver flowing and the borders secure. Killed alongside his wife at the siege of the keep.` },
    { type: "p", text: `"Lord Amar" was his office, not his birth name. By a custom older than House Jannin, whoever holds Keep Amar takes the keep's name while they hold it. Twelve lords bore the title before him; he was the thirteenth, and the first to die at the gate of his own keep.` },
    { type: "p", text: `His letters to his surviving children, found later, are brief, affectionate, concerned almost entirely with the health of his flocks.` },
  ],
},

{
  id: "fidarel",
  group: "NPCs",
  title: "Sovereign Fidarel",
  subtitle: "Deceased prior Lord of Lords",
  blocks: [
    { type: "p", text: `A master of ruling his people, but a failure at ruling his own household. Sired a legion of sons through illicit affairs but not a single legitimate heir. His death broke the foundations of the kingdom.` },
    { type: "p", text: `[[silent-scrivener:The Silent Scrivener]] has circulated multiple contradictory accounts of his death. No senior house privately accepts the official "long illness" story.` },
  ],
},

{
  id: "silas-vane",
  group: "NPCs",
  title: "Silas Vane",
  subtitle: "Lord Commander of House Vane",
  blocks: [
    { type: "p", text: `Quiet, late sixties. Burn scars on both forearms from tapping a runaway furnace at seventeen (he doesn't deny the story). Rarely travels; presides from the [[anvilhold:Anvilhold]]'s cast-iron throne. Has not publicly declared a succession candidate.` },
  ],
},

{
  id: "isolde-vane",
  group: "NPCs",
  title: "Isolde Vane",
  blocks: [
    { type: "p", text: `The Vane seen most often in the capital. Whether she is a rising heir, a sacrificial offering, or simply [[silas-vane:Silas]]'s best negotiator is unclear. Dresses in dark colours, wears no marrow-glow. Younger nobles find her exhausting; older nobles find her useful.` },
  ],
},

{
  id: "vespera",
  group: "NPCs",
  title: "High Abbotess Vespera",
  subtitle: "Head of House Chancel",
  blocks: [
    { type: "p", text: `Has not left the central sanctum of [[bet-seraphim:Bet-Seraphim]] in seventeen years. Conducts all business in writing, via [[tybalt:Tybalt]]. Letters sealed with a wax impression of a weeping golden eye. Voice reported as a low, breathy whisper — quieter than ordinary but perfectly audible.` },
  ],
},

{
  id: "tybalt",
  group: "NPCs",
  title: "Brother-Captain Tybalt",
  blocks: [
    { type: "p", text: `Was a soldier before he was a cleric; still trains at arms every morning. Carries a broad-headed Chainmaker spear openly, even in the capital — legal for his rank, a statement.` },
  ],
},

{
  id: "olenna-kaelen",
  group: "NPCs",
  title: "Olenna Kaelen",
  subtitle: "Lady-Regent of House Kaelen",
  blocks: [
    { type: "p", text: `Runs the port, keeps the ledgers, feeds the kingdom. Widely agreed to be the most competent head of house AND the most personally boring. Takes the periodic flooding of [[silveldt:Silveldt]] as a personal insult from the river.` },
  ],
},

{
  id: "fenris-morbray",
  group: "NPCs",
  title: "Fenris Morbray",
  subtitle: "Lord-Captain of House Morbray",
  blocks: [
    { type: "p", text: `Has not left [[raven-garron:Raven-Garron]]'s walls in eleven years. Broad, grey-bearded, walks with a slight limp from a Barrens engagement decades past in which he lost a horse and survived five days on foot to walk back.` },
  ],
},

{
  id: "malachi-thorne",
  group: "NPCs",
  title: "Malachi Thorne",
  subtitle: "Lord Chancellor of House Thorne",
  blocks: [
    { type: "p", text: `Small, neat, grey-templed. Never seen out of a half-generation-out-of-fashion black wool robe. Writes left-handed. Reads approximately four times faster than any other man in the kingdom. Conducts business from the top floor of the [[thorne-archive:Thorne Archive]], reached by a single winding staircase.` },
  ],
},

{
  id: "arkin-valerius",
  group: "NPCs",
  title: "Arkin Valerius",
  subtitle: "Head of House Valerius",
  blocks: [
    { type: "p", text: `Grey-eyed, grey-humoured, in his fifties. Reputation for tedious consistency. Not loved, but trusted. Leading authority on pre-Fidarel High Sovereign's Law. Presides personally over all noble trials. Has refused several informal invitations from [[silent-scrivener:the Silent Scrivener]] to "discuss" obscure procedural points.` },
  ],
},

{
  id: "dennin-grendel",
  group: "NPCs",
  title: "Dennin Grendel",
  subtitle: "Head of House Grendel",
  blocks: [
    { type: "p", text: `Thin, quiet, grey-green eyes. Rarely leaves his marsh-village. Has not attended a [[high-council:High Council]] session in years. Rumoured to keep a [[witches:Witch]] in a back room of [[the-rot:The Rot]] and consult her daily. When asked about Witches, answers only: <i>"Deep roots need dark water."</i> Has been saying this for so many years that nobody is sure whether it is an admission or a refusal.` },
  ],
},

{
  id: "malagant",
  group: "NPCs",
  title: "Sun-Speaker Malagant",
  subtitle: "Head of Orthodoxy",
  blocks: [
    { type: "p", text: `Conducts the midday rite on certain holy days in the oculus-hour of [[hollow-sun:the Hollow Sun]]; officiates the ascension of a new Lord of Lords. Beyond those two functions, effectively invisible. Defining line: he does not claim to hear [[prios:Prios]] — he claims to perfectly understand the Lord of Lords' Law.` },
  ],
},

{
  id: "velis",
  group: "NPCs",
  title: "Scribe-Mother Velis",
  subtitle: "Malagant's secretary; Orthodoxy",
  blocks: [
    { type: "p", text: `The true face of the Orthodoxy's day-to-day business. A writ signed by Velis carries the same force as one signed by the [[sun-speaker:Sun-Speaker]]; she signs far more of them. Small, in her fifties. Personal devotion to [[cassiel:Cassiel]] — wears the plain grey robe of a Cassiel scribe even while wielding [[malagant:Malagant]]'s authority.` },
    { type: "p", text: `Correspondence with [[malachi-thorne:Lord Chancellor Malachi Thorne]] conducted in a private cipher that neither will confirm exists.` },
  ],
},

{
  id: "gest-harrow",
  group: "NPCs",
  title: "Gest Harrow",
  subtitle: "Foreman of the Third Furnace, Har-Moloch; Chainmaker",
  blocks: [
    { type: "p", text: `Half-deaf veteran. Rasping voice only the works-born can parse. Thirty-one years in the post — no other foreman has lasted more than eleven there. The [[chainmakers:Chainmakers]] refuse to promote him and refuse to replace him. He refuses to retire. Communicates on the works floor through a hand-signal system of his own devising that every [[third-furnace:Third Furnace]] apprentice must learn.` },
    { type: "p", text: `<b>Rare expertise:</b> one of maybe six people in the kingdom who actually understand the metallurgy of [[true-quality-steel:True Quality Steel]].` },
    { type: "p", text: `Quietly follows a minor pre-Prios forge-figure the Orthodoxy does not recognise. Says, when pressed: <i>"The fire don't care what you call it."</i>` },
  ],
},

// ───── GLOSSARY ─────
{
  id: "glossary",
  group: "Glossary",
  title: "Glossary",
  subtitle: "Terms without their own section",
  blocks: [
    { type: "p", text: `Brief definitions only. Major concepts (houses, guilds, rituals, places, NPCs, rules, etc.) have their own sections and are linked inline across the wiki — they are not duplicated here.` },

    { type: "h3", text: "Kingdom & Title" },
    { type: "defs", items: [
      ["K'naan", `The kingdom in which Sacred Veil takes place.`],
      ["Averium", `The broader world K'naan is part of.`],
      ["Lord of Lords", `Title of the reigning Sovereign of K'naan. Currently vacant since [[fidarel:Fidarel]]'s death.`],
    ]},

    { type: "h3", text: "Mechanics" },
    { type: "defs", items: [
      ["Resolute", `Symbaroum attribute. Sets Corruption [[threshold:Threshold]] (Resolute / 2) and Maximum Corruption (Resolute).`],
      ["Threshold", `Half your Resolute score (Resolute ÷ 2) — that is all "Threshold" means. The term is shorthand. When TotalCor rises above this value, a character is at risk of gaining their first [[stigma:Stigma]]. "Above Threshold" and "crossing the Threshold" both refer to TotalCor exceeding half Resolute.`],
      ["TempCor", `Temporary [[corruption:corruption]] — recovers with rest.`],
      ["PermCor", `Permanent [[corruption:corruption]] — does not recover.`],
      ["TotalCor", `TempCor + PermCor. Compared against [[threshold:Threshold]] and Maximum Corruption.`],
      ["Stigma", `A physical mark gained when [[totalcor:TotalCor]] crosses the [[threshold:Threshold]]. A dark mark such as weeping black tears.`],
      ["Abomination", `What a Corrupted soul becomes when [[totalcor:TotalCor]] fills their maximum. Under Sacred Veil's Corruption homebrew, a last stand rather than instant transformation.`],
      ["Milestone XP", `The progression model in use — XP granted at meaningful story points rather than per-challenge.`],
    ]},

    { type: "h3", text: "Faith & Orthodoxy" },
    { type: "defs", items: [
      ["Witchsight", `Ability to see through a [[changelings:Changeling]]'s stolen face instantly. Held by most [[theurgs:Theurgs]], many senior [[ordo-magicka:Ordo]] wizards, some [[inquisitors:Inquisitors]].`],
    ]},

    { type: "h3", text: "Underworld & Relics" },
    { type: "defs", items: [
      ["Wound-Marrow", `Volatile, addictive variant of [[seraphs-marrow:Seraph's Marrow]] sold by the [[iron-spire:Iron Spire]].`],
      ["Void-Chime", `Hollowed iron bells used by the [[heralds-of-the-ash:Heralds of the Ash]] in the Ritual of Snuffing.`],
    ]},

    { type: "h3", text: "Landmarks" },
    { type: "defs", items: [
      ["Iron Teeth", `The skyline of smelting towers and slag-heaps in [[har-moloch:Har-Moloch]].`],
    ]},
  ],
},

];
