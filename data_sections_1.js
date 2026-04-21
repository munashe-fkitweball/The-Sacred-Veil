// ============================================================================
// SACRED VEIL — section content (verbatim from source + delta)
// ============================================================================
// Every .body string is verbatim prose from the canonical doc or CONTENT_DELTA.
// Structural headings, table cells, and section titles are derived directly
// from the source's own headings/labels — no invented language.
// ============================================================================

window.SV_SECTIONS = [

// ───────────────────────── INTRODUCTION / HOOK ─────────────────────────
{
  id: "introduction",
  group: "Opening",
  title: "Introduction",
  subtitle: "Your reference for the world of the Sacred Veil",
  body: `This wiki is the canonical record for the world of the Sacred Veil — the kingdom, its Houses, its faith, its magic, and the rules that govern them. If something appears here, treat it as established fact. If something feels missing, contradictory, or simply unclear, ask — it is always better to pause for a question than to build or play a character around an assumption that turns out to be wrong. The wiki grows with the campaign: pages will be added and revised between sessions, so check back when something becomes relevant.`,
  blocks: [
    { type: "h3", text: "What is Symbaroum?" },
    { type: "p", text: `Symbaroum is a dark fantasy TTRPG created by Free League Publishing. It is defined by its grim, evocative style - a world where nature is not just a setting, but a vengeful force. It balances a "player-facing" mechanical system (where only players roll dice, for the most part!) with a deep, haunting lore centered on the ruins of a lost empire and the corruption that festers within the overgrown wilds of Davokar.` },
    { type: "p", text: `This campaign homebrews the setting and system almost entirely to fit a world and long-term saga of its own. The campaigns do not take place within the world of Davokar. While we use the core engine of Symbaroum, please keep the following in mind:` },
    { type: "ul", items: [
      `<b>Early Changes:</b> Because this is the GM's (my) first time running this system, certain mechanics may be adjusted over the first few sessions or the first campaign to better suit the world. Changes will be kept transparent and minimal.`,
      `<b>Milestone Progression:</b> We will be using Milestone XP rather than set amounts for every individual challenge as Symbaroum normally uses.`,
      `<b>Refined Corruption:</b> One major change is how [[corruption:Corruption]] works — made into a more interesting, long-term mechanical and narrative threat rather than a quick "game over" stat.`,
      `<b>Lore & Names:</b> Most terminology and names are kept the same where appropriate, but do not rely on the sourcebooks as gospel truth. If you have a query about whether a piece of lore, a specific ability, or a world-rule is being retained, just ask — better to be on the same page than to build a character around a book rule that does not exist in this version of the world.`,
    ]},
    { type: "p", text: `Below is an outline of the world as a whole, but before that…` },
  ],
},

{
  id: "the-hook",
  group: "Opening",
  title: "The Hook",
  headless: true,
  blocks: [
    { type: "p", text: `Long before the events you experienced in Helligvarld, there existed the equally ancient world of Averium. Here, in the kingdom of [[ash-kadesh:K'naan]], noble houses play a dangerous game of succession.` },
    { type: "p", text: `You are household guards for [[house-jannin:House Jannin]], a minor but affluent family whose fortune flows from a silver mine and vast herds of sheep, cattle, and goats. The Jannin seat is [[amarsgate:Amarsgate]], a small fortified town at the foot of the [[eastern-massif:Eastern Massif]], built around the mouth of the silver mine. On the ridge above the mine stands Keep Amar, where you have served for years — and by a custom older than House Jannin itself, the lord who holds the keep takes its name. Your master is not the man after whom the keep was named: the keep named the man. He is [[amar-jannin:Lord Amar, 13th of that name]]; his father bore the title before him, and his father's father before that, further back than most in K'naan can follow.` },
    { type: "p", text: `You serve [[amar-jannin:Lord Amar]] - a man as wise as he is wealthy, deeply respected, and the patriarch of a large family. Among all his children, the people's favourite is [[naviel-jannin:Naviel]].` },
    { type: "p", text: `Despite being one of many potential candidates for the throne, Naviel has never been one for courtly politics. While he partook of the [[seraphs-marrow:Seraph's Marrow]], a dangerous chemical reserved for nobles and those with unendingly deep pockets that transforms the user physically, he cared little for these politics and rarely for combat — he spent his time in a library, or on long walks, or with the poor and destitute. But, as the son of one of the few quietly respected lords in the region, he commanded an unexpectedly large and diverse base of support, and was rumoured to be well liked and well received even within some of the greatest houses and their heirs.` },
    { type: "image-slot", file: "hook-scene-the-fall.jpg", cinematic: true,
      alt: "Keep Amar burns. Through the smoke, mercenaries drag a captive toward a waiting transport at the gate, watched by survivors from the rubble.",
      caption: "Keep Amar, the night of the sack." },
    { type: "p", text: `Then, one night, a deafening roar shook the halls of the Jannin keep. Hoards of mercenaries descended upon your home, shattering your keep's ancient walls, then the overwhelming swarm of armored mercenaries. Through the ringing in your ears and the smoke choking the courtyard, you heard them shouting: <b>"FIND NAVIEL! FIND NAVIEL!"</b> You were helpless to stop what happened next. You watched Lord Amar and his wife fall mercilessly to mercenary blades. You watched Naviel dragged unconscious across the bloody stone courtyard toward a transport. You even saw one of the attackers try to rip the lavender pendant from Naviel's neck, only to recoil with a confused yelp. As the transport makes haste you hear their commander snarl, <b>"Leave it! We'll cut it off him later!"</b>` },
    { type: "p", text: `When we roll our first dice, the keep is lost. The roof is collapsing, your employers are dead, and your ward is gone. Amarsgate below is burning. Your immediate goal is simple: fight your way out of the burning ruins alive. Your long-term goal? Track down the men who took Naviel, and figure out why.` },
  ],
},

{
  id: "central-tensions",
  group: "Opening",
  title: "The Central Tensions",
  blocks: [
    { type: "p", text: `The death of the Lord of Lords, [[fidarel:Sovereign Fidarel]], broke the foundations of the kingdom. Peace - where it still exists in Averium - now teeters on the edge of a blade, defined by three escalating crises:` },
    { type: "h3", text: "The Vultures' Feud" },
    { type: "p", text: `With the sovereign gone, the Great Houses no longer hide their ambition behind courtly masks. Alliances are broken daily, and the voting process for the next Sovereign has turned into a series of bloody skirmishes that threaten to ignite a full-scale civil war.` },
    { type: "h3", text: "The Collapse of Order" },
    { type: "p", text: `In K'naan, the crown is traditionally a birthright, passed from the Sovereign to his eldest legitimate son. However, while Sovereign Fidarel was a master of ruling his people, he was a failure at ruling his own household. He sired a legion of sons through illicit affairs, but not a single legitimate heir.` },
    { type: "p", text: `By the ancient laws of the realm, the throne cannot pass to a bastard. Instead, the crown must be awarded through a grueling elective process among the noble and minor houses that share even a drop of Fidarel's blood. Because this voting process is long, bitter, and prone to sabotage, the "High Sovereign's Law" has effectively vanished. In this vacuum of power, guilds and criminal syndicates have become the de facto rulers of the streets. Open warfare between these factions has become a daily terror, and the common folk are increasingly caught in the crossfire of a kingdom with no head.` },
    { type: "h3", text: "The Shadow of the Arcane" },
    { type: "p", text: `Desperate times have led to desperate measures. The illicit use of magic is surging as lords and outlaws alike seek shortcuts to power. But in K'naan, magic is never free - and the more it is wielded, the faster the world seems to wither.` },
  ],
},

{
  id: "tone-scope",
  group: "Opening",
  title: "Tone & Scope",
  blocks: [
    { type: "h3", text: "Tone: Catching a Falling Knife" },
    { type: "p", text: `You are not starting as untouchable legends; you are starting as fragile Ambrians - skilled, certainly, but mortal and vulnerable. In the unforgiving world of Averium, death is a constant possibility for the careless, and survival must be your first priority. K'naan itself is currently in a free-fall; trying to save it is like trying to catch a falling knife - it is fast, terrifying, and likely to be extremely painful. There is no time for perfect plans or long debates. You must act on your instincts and pray that your grip finds the hilt rather than the edge - that your arms are strong enough to keep the steel from your throat for as long as the world demands.` },
    { type: "p", text: `Expect very little "black and white" in this world. You will be pushed into constant moral grey areas where the "right" choice is often just the one you can live with, and your character's beliefs and loyalties will be tested at every turn. Our story will balance the grounded weight of a historical drama of sorts with the dramatic flair of a dark epic. You should expect blood on the floor and mud on your boots, but also moments of haunting beauty and cinematic scale.` },
    { type: "h3", text: "Scope: From the Heart of K'naan to the Ends of Averium" },
    { type: "p", text: `While Averium is a vast world, your immediate focus is local, centred on a kingdom isolated by a geography that often feels designed to break travellers. To the northwest, the coast is dominated by the [[silt-mere:Silt-Mere]], a humongous inland lake whose cold expanse defines the horizon. To the east, the land rises into the jagged, impassable peaks of the [[eastern-massif:Eastern Massif]]. Between these landmarks, K'naan is a realm that makes every mile a struggle to traverse. Whether consequently or in spite of that, to most who live here, this kingdom is the only world that matters.` },
    { type: "p", text: `Your immediate task is personal and urgent: Find Naviel. Whether he is alive, dead, or something else entirely, your duty is to track the transport and recover your ward. If you survive long enough, the choices you make in this first arc will dictate the future of House Jannin and your own place in a changing world.` },
    { type: "h3", text: "Be the change you want to see…or not" },
    { type: "p", text: `You have the agency to change the world. If you find Naviel, perhaps you will seek to place him on the throne of the Lord of Lords. Perhaps you will attempt to carve out power and land for yourselves. Or perhaps you will simply try to flee the coming storm. Whatever path you choose, the world will react.` },
  ],
},

// ───────────────────────── MAGIC ─────────────────────────
{
  id: "state-of-magic",
  group: "Magic & Corruption",
  title: "The State of Magic",
  blocks: [
    { type: "p", text: `In K'naan there are three sources of magic and such; potions/chemicals, devotion to a tradition (or the rogue use of spells and magic as a sorcerer), and magic items. All three are rare and feared by the general populace.` },
    { type: "p", text: `Of particular note is a chemical known as [[seraphs-marrow:Seraph's Marrow]].` },
  ],
},

{
  id: "seraphs-marrow",
  group: "Magic & Corruption",
  title: "Seraph's Marrow",
  blocks: [
    { type: "p", text: `When administered carefully by trained members of [[house-chancel:House Chancel]] over time, the Marrow forces violent biological mutations. It often grants immense physical size, unnatural strength, and occasionally, strange, terrifying supernatural abilities. However, the process is agonizing and not without risk, sometimes leaving the user with severe physical or mental burdens. Because the chemical is staggeringly expensive to refine, most noble houses can only afford to "anoint" their ruling Lord and perhaps one or two promising heirs at most.` },
    { type: "p", text: `The ancient edicts of the realm dictate that the High Sovereign shall command the lion's share of the kingdom's precious yields. Once the Electors have concluded their arduous deliberations and anointed a successor, the Sovereign typically utilizes the Marrow to maintain a towering, almost monstrous physical stature. This divine vitalization further empowers them to sustain a private regiment of several thousand hulking, mutated ultra-soldiers who serve as the ultimate, terrifying enforcers of the crown. The magnitude of this standing army is entirely contingent upon the fluctuating prosperity of the K'naanian economy, the collection of tribute, and the seasonal harvest of the rare flora required to distil the Marrow.` },
  ],
},

{
  id: "magic-traditions",
  group: "Magic & Corruption",
  title: "Magic and Magical Traditions in K'naan",
  blocks: [
    { type: "p", text: `Magic in the kingdom of K'naan is a guttering candle in an encroaching dark - strictly regulated, heavily feared, and inherently dangerous. To weave the fabric of reality is to invite [[corruption:Corruption]], a spiritual blight that withers the soul and eventually twists the flesh. Only those who follow a disciplined Tradition have any [both vain and illusory] hope of survival.` },
  ],
},

{
  id: "theurgs",
  group: "Magic & Corruption",
  title: "Theurgy",
  blocks: [
    { type: "p", text: `The Theurgs are faithful adherents and students of the Dying Sun-God, [[prios:Prios]]. They believe every miracle performed is a spark of Prios's own fading life force, used to hold back the encroaching night. As his sons, daughters, and angels have died out or fallen silent, his followers have become increasingly desperate.` },
    { type: "p", text: `Divine magic is a heavy burden. It is either thrust upon "pre-ordained" individuals without warning (rare) or earned through years of studious, costly dedication to a god who may not be listening for much longer.` },
    { type: "h3", text: "Two Callings" },
    { type: "p", text: `The Church distinguishes between two routes into the order:` },
    { type: "ul", items: [
      `<b>The Ordained</b> — rare. Chosen through traumatic visitation — visions in moments of extremity, voices, fever-dreams that wake them into unexplained miracle. Church treats them as both precious and suspect; watched for decades before trusted with rites of consequence.`,
      `<b>The Scholar-Monks</b> — common. Enter young, study under a High Theurg, ascend through rites. Do the diplomatic, administrative, and inquisitorial work of the [[orthodoxy:Orthodoxy]].`,
    ]},
  ],
},

{
  id: "wizards",
  group: "Magic & Corruption",
  title: "Wizardry and the Ordo Magicka",
  blocks: [
    { type: "p", text: `The [[ordo-magicka:Ordo]] represents those permitted by the ruling class to study magic for the betterment and protection of K'naanian society. These are the academics, the tacticians, and the advisors to the High Lords.` },
    { type: "p", text: `This is magic as a science and a service. To walk this path, a player must be "signed off" by a sanctioned faction. It is arguably the safest way to wield power, though the Ordo's leash is short and heavy, and everyone knows no study of magic is ever truly safe.` },
  ],
},

{
  id: "witches",
  group: "Magic & Corruption",
  title: "Witches",
  blocks: [
    { type: "p", text: `Witches follow an ancient, primal tradition that is both hated and feared by the common man. While technically illegal, they are often politely ignored by the nobility because they are simply too useful.` },
    { type: "p", text: `A Witch is a tool for the shadows. Whether it is a curse for a rival or a cure for a "shameful" ailment, many a noble denounces Witches by day while seeking their counsel by night. They are rare to encounter, but their influence is felt everywhere.` },
  ],
},

{
  id: "sorcerers",
  group: "Magic & Corruption",
  title: "Sorcery (Rogue Magic)",
  blocks: [
    { type: "p", text: `Then there are those who refuse all traditions—the Sorcerers. They seek power without the "slow" discipline of the schools, bending the world to their will through raw, unchanneled desire.` },
    { type: "p", text: `This is the most dangerous and strictly illegal path. A Sorcerer can reach heights of power that would take a Wizard decades to master, but they pay for it in blood and soul. They meet their ends quickly, consumed by the very Corruption they thought they could outrun.` },
  ],
},

{
  id: "corruption",
  group: "Magic & Corruption",
  title: "Corruption",
  blocks: [
    { type: "p", text: `In K'naan, no magic is wielded without price. Corruption is brutal, and just spending time in certain areas of Averium (and even K'naan, especially the places you'll likely end up going) will risk temporarily or even permanently dealing you corruption.` },
    { type: "h3", text: "The usual rules of corruption are as follows:" },
    { type: "ul", items: [
      `You can gain temporary or permanent corruption (TempCor or PermCor).`,
      `Your total corruption (TotalCor) is equal to your TempCor plus PermCor.`,
      `You mainly gain TempCor from casting spells or taking damage from blighted creatures. In Symbaroum traditionally this washes off at the end of a "scene".`,
      `You mainly gain PermCor from learning magic, binding magical items, or pushing yourself too far (going over half your Maximum Corruption). PermCor never* goes away.`,
      `<b>The Threshold (Resolute / 2):</b> If your TotalCor ever goes above half your Resolute score, two things happen instantly: you gain a physical "Stigma" (a dark mark, like weeping black tears or a smell of rot), and you take 1d4 PermCor.`,
      `<b>Maximum Corruption (Resolute):</b> If your TotalCor ever equals your total Resolute score, you instantly turn into an Abomination. The character is gone forever. The GM takes control of the monster.`,
    ]},
    { type: "p", text: `<i>*kinda</i>` },
  ],
},

{
  id: "corruption-house-rules",
  group: "Magic & Corruption",
  title: "House Rules for Corruption",
  blocks: [
    { type: "p", text: `We will follow the usual rules of corruption within Symbaroum, but with the following changes:` },
    { type: "ul", items: [
      `You will not necessarily be able to automatically clear corruption at the end of a scene. More to come on this. Safe areas, rest, and the like…`,
    ]},
    { type: "h3", text: "The Threshold is a Gamble" },
    { type: "p", text: `Your [[threshold:Threshold]] — half your Resolute score — no longer scars you on contact. When your TotalCor goes above it, you don't mutate instantly. Instead, you must immediately roll Resolute.` },
    { type: "ul", items: [
      `<b>Success:</b> You hold it back. Nothing happens, but you must roll again the next time you gain any corruption.`,
      `<b>Failure:</b> You transform 1d4 TempCor into PermCor and gain a physical Stigma.`,
    ]},
    { type: "h3", text: "Maximum Corruption is a Last Stand, not instant transformation" },
    { type: "p", text: `If your TotalCor fills your maximum limit, you immediately transform 1d4 TempCor into PermCor. Furthermore, every round you remain at max, and every time you gain new corruption, you must roll Resolute:` },
    { type: "ul", items: [
      `<b>Success:</b> You fight it off, decreasing TotalCor by 1.`,
      `<b>Failure:</b> You transform another 1d4 TempCor into PermCor.`,
      `<b>Critical Success (Natural 1):</b> Desperate clarity! You instantly decrease TotalCor by 1d4 (removing TempCor first, then PermCor if all TempCor is gone).`,
      `<b>Critical Failure (Natural 20):</b> Failing any miracle, in 1 minute or at the end of your next turn (whichever comes sooner), you will turn into an Abomination.`,
      `<b>Giving In:</b> You may choose to willingly fail this roll and give in to the corruption. This yields completely unpredictable results - it could end VERY well or VERY badly for you, but fate will be totally out of your hands once you give over to it.`,
    ]},
    { type: "h3", text: "Traditions Only Protect the Skilled" },
    { type: "p", text: `Traditions normally reduce spell costs to 1 TempCor. Now, this only applies on a successful cast.` },
    { type: "ul", items: [
      `<b>Wizards, Witches, & Sorcerers:</b> If you fail your casting roll, you take 1d4 TempCor.`,
      `<b>Theurgs:</b> Before rolling your 1d4 for a failed spell, you must declare how you bear it. You can take the full 1d4 as TempCor, OR ask Prios to shield you and take half the result (rounded up) as physical Toughness damage instead.`,
    ]},
    { type: "h3", text: "The Price of Permanent Corruption" },
    { type: "p", text: `If your PermCor alone ever reaches your Threshold (Resolute / 2), the wilderness claims you.` },
    { type: "ul", items: [
      `<b>Wizards, Witches, & Sorcerers:</b> You automatically gain the Dark Blood and Bestial traits. You cannot refuse this. Have fun with your new powers and the tail of witch-hunters!`,
      `<b>Theurgs:</b> Due to your devotion to the dying sun-god Prios, the effects vary in wildly different ways. The divine burden will manifest uniquely, and the GM will reveal the consequences when the time comes.`,
    ]},
    { type: "h3", text: "The \"Strong Gift\" Boon is Rebalanced" },
    { type: "p", text: `If you take this boon to protect yourself, the math is adjusted:` },
    { type: "ul", items: [
      `<b>Novice:</b> Works as intended (guaranteed to only take 1 TempCor on a failed cast).`,
      `<b>Adept:</b> Your Threshold increases to your full Resolute value, but your Maximum Corruption is calculated as Resolute + 5 (rather than Resolute * 2).`,
    ]},
  ],
},

// ───────────────────────── GEOGRAPHY ─────────────────────────
{
  id: "geography",
  group: "Geography",
  title: "The K'naanian Geography & Environment",
  blocks: [
    { type: "h3", text: "The Broken Landscape" },
    { type: "p", text: `The world of K'naan is not a passive backdrop; it is a jagged, obstructive force that dictates the pace of every journey. To the northwest, the kingdom is defined by the [[silt-mere:Silt-Mere]], a massive inland sea of brackish, shallow water where the tides are unpredictable and the mud-flats can swallow a horse whole. To the east, the [[eastern-massif:Eastern Massif]] provides a wall of grey stone and thin air, its peaks so steep and shattered that only a handful of high passes are even remotely traversable.` },
    { type: "p", text: `Between the Silt-Mere and the Eastern Massif sprawl myriad treacherous terrains, from noisome bogs that vent combustible, acrid gases to great, desolate swathes of mire-choked earth, churned relentlessly by the passage of desperate pilgrims, grasping merchants, and brigands alike. The realm boasts rolling hills, sparse settlements, and choking, dense towns, and perhaps no feature is more imposing and rightfully feared than the Great Forests. These malignant woods draw the keenest ire, for they are the haven of the most wicked, foulest creatures and Ambrians, including the nefarious [[witches:Witches]]. The land, though seemingly vast, offers no true sanctuary; its very extent ensures that one is never far enough removed from the malicious territory claimed by these vile things.` },
    { type: "h3", text: "Atmosphere and Scarcity" },
    { type: "p", text: `The weather in K'naan offers no respite, often manifesting as [[white-blind:The White-Blind]]—a thick, salty mist that rolls off the Silt-Mere and blankets the [[gorse-barrens:Gorse-Barrens]] (the term commonly used to describe much of the land that stretches between the imposing Silt-Mere and the Eastern Massif) for minutes, hours, or days at a time. This fog is more than a visual hurdle; it carries a heavy brine that rusts iron, rots leather, and chokes the lungs, forcing travellers to hunker down or risk wandering blindly into the cliffs and ravines that honeycomb the landscape.` },
    { type: "p", text: `Because of this harsh climate, Quality Steel is a desperate rarity. For example, while [[house-jannin:House Jannin]]'s silver mines provided the wealth to hire mercenaries and buy influence, they could not produce the high-grade ore required for true masterwork arms. Most soldiers in the region make do with bronze-shod gear or brittle, low-grade iron that is prone to snapping in the cold. In K'naan, a sturdy steel blade is not just a weapon - it is a symbol of extreme status and a target for every desperate soul you meet on the road.` },
    { type: "p", text: `Beyond the known settlements, the "Frontier" isn't a line on a map, but the point where the roads simply end, swallowed by the Barrens or the encroaching mists of the Mere.` },
    { type: "h3", text: "A Note on the Silt-Mere" },
    { type: "p", text: `The Mere remains a vast, hostile expanse, largely unmapped beyond the immediate coast. To gaze west is to stare at the edge of the known world, defined by a false horizon that never yields and 'islands' that are merely shifting mounds of silt and bone. Though trade across its expanse is lucrative, the passage is treacherous, especially since the [[silt-strider-collective:Silt-Strider Collective]] began reporting horrific tales of monstrous entities and hostile barbarians. Consequently, few souls risk the crossing, and those who do - outside of the Collective and the specialized merchants who are brave enough to work with them - are often permanently barred from returning to K'naan.` },
  ],
},

// ───────────────────────── REGIONS & ENVIRONMENT ─────────────────────────
{
  id: "silt-mere",
  group: "Regions",
  title: "The Silt-Mere",
  subtitle: "The inland sea that defines the west",
  blocks: [
    { type: "p", text: `A massive inland sea of brackish, shallow water in K'naan's northwest. The tides are unpredictable; the mud-flats can swallow a horse whole. West of the coast the Mere becomes largely unmapped — a false horizon that never yields, and 'islands' that are merely shifting mounds of silt and bone.` },
    { type: "p", text: `Trade across it is lucrative but treacherous. The [[silt-strider-collective:Silt-Strider Collective]] holds the de-facto monopoly on safe passage. Those who cross without them are frequently barred from returning.` },
  ],
},

{
  id: "eastern-massif",
  group: "Regions",
  title: "The Eastern Massif",
  subtitle: "Wall of grey stone, eastern edge of the kingdom",
  blocks: [
    { type: "p", text: `A wall of grey stone and thin air to K'naan's east. Peaks so steep and shattered that only a handful of high passes are remotely traversable. Beyond the Massif lies the proper Frontier — lands beyond the kingdom's effective reach.` },
  ],
},

{
  id: "gorse-barrens",
  group: "Regions",
  title: "The Gorse-Barrens",
  subtitle: "The land between",
  blocks: [
    { type: "p", text: `The common name for much of the land stretching between the [[silt-mere:Silt-Mere]] and the [[eastern-massif:Eastern Massif]]. Rolling, sparse, windswept and lawless — noisome bogs venting combustible, acrid gases; mire-choked earth churned by the passage of pilgrims, merchants, and brigands; dense towns clustered against the roads.` },
    { type: "p", text: `Periodically blanketed by [[white-blind:the White-Blind]]. The "Frontier" in K'naan is not a line on a map — it is the point where the roads simply end, swallowed by the Barrens or the encroaching mists of the Mere.` },
  ],
},

{
  id: "great-forests",
  group: "Regions",
  title: "The Great Forests",
  subtitle: "Haven of the foulest things",
  blocks: [
    { type: "p", text: `Dense, malignant woods that honeycomb the land between the major roads. Feared more than any single feature of the landscape — the haven of the most wicked, foulest creatures and rogue Ambrians, including the nefarious [[witches:Witches]]. Most travellers go miles out of their way to avoid them.` },
  ],
},

{
  id: "white-blind",
  group: "Regions",
  title: "The White-Blind",
  subtitle: "The mist that rots iron",
  blocks: [
    { type: "p", text: `A thick, salty mist that rolls off the [[silt-mere:Silt-Mere]] and blankets the [[gorse-barrens:Gorse-Barrens]] for minutes, hours, or days at a time. More than a visual hurdle: the heavy brine rusts iron, rots leather, and chokes the lungs. Travellers caught in it hunker down or risk wandering blindly into cliffs and ravines.` },
    { type: "p", text: `Combat inside the White-Blind without a light source triggers the [[fighting-blind:Fighting Blind]] rule.` },
  ],
},

// ───────────────────────── FACTIONS ─────────────────────────
{
  id: "power-architecture",
  group: "Factions",
  title: "The Architecture of Power in K'naan",
  blocks: [
    { type: "p", text: `K'naan operates under a brutal, neo-feudal patriarchy. The kingdom is theoretically ruled with absolute authority by the Lord of Lords, but in practice, power is held in a tense gridlock by the [[high-council:High Council of Electors]] - an assembly of the most powerful noble houses as well as a few important minor houses.` },
    { type: "p", text: `There is little centralised "state" infrastructure. The judiciary, the police (often called the Watch or the [[magistracy:Magistracy]]), and the military are almost entirely composed of the private, sworn levies of these noble houses. Justice and law are not blind in K'naan; they are directly dictated by whoever can afford to put the most steel in the room. However, there remains a High Court by which, in theory, any man, woman, or child may appeal the judgement of the Houses' own judiciary, and each Sovereign certainly does take a different approach to this centralisation and much can change from ruler to ruler.` },
    { type: "p", text: `Guilds also possess immense power, although between the Houses and the state religion they are largely kept in check - though perhaps that now begins to change.` },
  ],
},

// ───── HOUSES ─────
{
  id: "houses-index",
  group: "Houses",
  title: "Notable Houses of K'naan",
  blocks: [
    { type: "table", headers: ["House", "Epithet", "Motto", "Arms"], rows: [
      ["[[house-vane:Vane]]", "the Architects of War", "\"Iron in the Earth, Iron in the Blood.\"", "Black anvil on rust-red"],
      ["[[house-chancel:Chancel]]", "the Marrow-Keepers", "\"We Bleed that He Might Shine.\"", "Weeping golden eye over a chalice"],
      ["[[house-kaelen:Kaelen]]", "the Masters of the Silt", "\"We Provide.\"", "Silver eel coiled around a trident"],
      ["[[house-morbray:Morbray]]", "the Frontier Keepers", "\"The First to Bleed.\"", "Severed wolf's head on grey"],
      ["[[house-thorne:Thorne]]", "the House of Whispers", "\"Truth is the Truest Coin.\"", "Silver owl holding a gold coin"],
      ["[[house-valerius:Valerius]]", "the Minor Major", "\"Steel is Law.\"", "Vertical sword breaking a chain"],
      ["[[house-grendel:Grendel]]", "the Frayed", "\"Deep Roots, Dark Waters.\"", "Black reed on murky green"],
      ["[[house-jannin:Jannin]]", "—", "\"None Lost Under Our Watch\"", "Shepherd's crook on forest green, silver gem"],
    ]},
  ],
},

{
  id: "house-vane",
  group: "Houses",
  title: "House Vane",
  subtitle: "the Architects of War",
  chip: { motto: "Iron in the Earth, Iron in the Blood.", arms: "A black anvil on a field of rust-red." },
  blocks: [
    { type: "p", text: `The most powerful house in K'naan. They are unthinkably wealthy and hold a total monopoly over the iron and coal mines, making them the only faction capable of producing the unbelievably valuable high-grade steel. They are industrial, cold, and currently hold the most leverage in the succession crisis.` },
    { type: "facts", items: [
      ["Notable members", "[[silas-vane:Lord Commander Silas Vane]], [[isolde-vane:Miss Isolde Vane]]"],
      ["Seat", "[[har-moloch:Har-Moloch]] — Anvilhold keep"],
      ["Tied guild", "[[chainmakers:The Chainmakers]]"],
    ]},
  ],
},

{
  id: "house-chancel",
  group: "Houses",
  title: "House Chancel",
  subtitle: "the Marrow-Keepers",
  chip: { motto: "We Bleed that He Might Shine.", arms: "A weeping golden eye over a chalice." },
  blocks: [
    { type: "p", text: `The second most powerful house, yet permanently banned from ever ascending to the throne. They command the entire production and refinement of [[seraphs-marrow:Seraph's Marrow]]. As a zealous, prophetic house, they are profoundly devoted to the worship of [[prios:Prios]] and largely detached from standard governance. It is unknown how wealthy they are, but of whatever wealth they have much of it is dispensed in alms; some suggest this is out of genuine kindness, while others contend it is a shrewd strategy to maintain the hearts of the people, the only source of true power accessible to them in the absence of their ability to climb the traditional political poles.` },
    { type: "facts", items: [
      ["Notable members", "[[vespera:High Abbotess Vespera]], [[tybalt:Brother-Captain Tybalt]]"],
      ["Seat", "[[bet-seraphim:Bet-Seraphim]]"],
    ]},
  ],
},

{
  id: "house-kaelen",
  group: "Houses",
  title: "House Kaelen",
  subtitle: "the Masters of the Silt",
  chip: { motto: "We Provide.", arms: "A silver eel coiled around a trident." },
  blocks: [
    { type: "p", text: `Based on the shores of the [[silt-mere:Silt-Mere]], they control the grain and the fisheries. They are the second wealthiest house in terms of liquid coin, essentially acting as the kingdom's pantry.` },
    { type: "facts", items: [
      ["Notable members", "[[olenna-kaelen:Lady-Regent Olenna Kaelen]]"],
      ["Seat", "[[gath-mere:Gath-Mere]] — Silveldt manor"],
      ["Tied guild", "[[silt-strider-collective:The Silt-Strider Collective]]"],
    ]},
  ],
},

{
  id: "house-morbray",
  group: "Houses",
  title: "House Morbray",
  subtitle: "the Frontier Keepers",
  chip: { motto: "The First to Bleed.", arms: "A severed wolf's head on a grey shield." },
  blocks: [
    { type: "p", text: `A grim, militaristic house and the pre-eminent power among the various lords tasked with holding the frontier. While several houses share the burden of watching the roads and the [[gorse-barrens:Gorse-Barrens]], House Morbray is the largest and most significant, commanding a battle-hardened cavalry that is feared across the kingdom. They treat their border-lands like an armed camp, and their loyalty is often as expensive as their steel.` },
    { type: "facts", items: [
      ["Notable members", "[[fenris-morbray:Lord-Captain Fenris Morbray]]"],
      ["Seat", "[[raven-garron:Raven-Garron]]"],
    ]},
  ],
},

{
  id: "house-thorne",
  group: "Houses",
  title: "House Thorne",
  subtitle: "the House of Whispers",
  chip: { motto: "Truth is the Truest Coin.", arms: "A silver owl holding a gold coin." },
  blocks: [
    { type: "p", text: `The kingdom's record-keepers and diplomats. They operate the [[magistracy:Magistracy]] and oversee the collection of taxes. They are rarely physically imposing but are the most informed people in K'naan.` },
    { type: "facts", items: [
      ["Notable members", "[[malachi-thorne:Lord Chancellor Malachi Thorne]]"],
      ["Seat", "[[thorne-archive:Thorne Archive]], Ledger-Ward"],
    ]},
  ],
},

{
  id: "house-valerius",
  group: "Houses",
  title: "House Valerius",
  subtitle: "the Minor Major",
  chip: { motto: "Steel is Law.", arms: "A vertical sword breaking a chain." },
  blocks: [
    { type: "p", text: `A minor house that has clawed its way into relevance by providing the bulk of the "[[magistracy:Magistracy]]" officers for the capital. They are obsessed with legalism and the harsh application of the Lord of Lords' old laws.` },
    { type: "facts", items: [
      ["Notable members", "[[arkin-valerius:Lord Arkin Valerius]]"],
      ["Seat", "[[iron-gavel:The Iron Gavel]], Ash-Kadesh"],
    ]},
  ],
},

{
  id: "house-grendel",
  group: "Houses",
  title: "House Grendel",
  subtitle: "the Frayed",
  chip: { motto: "Deep Roots, Dark Waters.", arms: "A black reed on a murky green field." },
  blocks: [
    { type: "p", text: `A minor, somewhat shunned house that lives in the marshy fringes of the [[silt-mere:Silt-Mere]]. They are known for being hardy and quiet, though other houses whisper that they spend too much time with [[witches:Witches]].` },
    { type: "facts", items: [
      ["Notable members", "[[dennin-grendel:Lord Dennin Grendel]]"],
      ["Seat", "[[grendels-reach:Grendel's Reach]] — The Rot"],
    ]},
  ],
},

{
  id: "house-jannin",
  group: "Houses",
  title: "House Jannin",
  chip: { motto: "None Lost Under Our Watch", arms: "A simple shepherd's crook, slightly worn, set over a field of deep forest green, with a small silver gem set near the crook's head." },
  blocks: [
    { type: "p", text: `An ancient and storied family. They are one of a few minor houses tasked for generations with the defence of K'naan's eastern frontier, and own a small silver mine as well as many large flocks of goats, mutton, and cattle. [[amar-jannin:Lord Amar, 13th of that name]] was the heart of the house — a man of iron will and deep pockets who kept the silver flowing and the borders secure. By the custom of Keep Amar, his was a borrowed name: the lord who holds the keep takes its name, and so his father and grandfather were Lord Amar too. [[naviel-jannin:Naviel]] is his favourite son and appointed heir. Following the brutal attack on the keep and the death of Amar, the house is currently leaderless. You are the survivors of his personal guard, left with a broken motto and a missing heir.` },
    { type: "p", text: `<i>True for four generations. Not true tonight.</i>` },
    { type: "facts", items: [
      ["Members", "Lord Amar, 13th of that name (Amar Jannin, now deceased); Lord-Elect Naviel Jannin"],
      ["Seat", "[[amarsgate:Amarsgate]]"],
    ]},
  ],
},

// ───── GUILDS ─────
{
  id: "guilds-index",
  group: "Guilds",
  title: "Notable Guilds",
  blocks: [
    { type: "p", text: `Guilds are formal professional organisations that hold immense economic and social power within K'naan. While historically kept in check by the ruling Houses and the strict doctrines of the [[orthodoxy:Orthodoxy]], the vacuum of power created by [[fidarel:Sovereign Fidarel]]'s death has allowed them to rapidly assert themselves as the de facto rulers of the streets. The following entries represent a selection of the kingdom's most powerful and relevant guilds in the current crisis, but this list is not exhaustive.` },
    { type: "table", headers: ["Guild", "Purpose", "Aligned with"], rows: [
      ["[[covenant-of-coin:Covenant of Coin]]", "Legal coin, credit, and high-value trade", "— (pragmatic)"],
      ["[[chainmakers:Chainmakers]]", "Master smiths, engineers, armourers", "[[house-vane:House Vane]]"],
      ["[[silt-strider-collective:Silt-Strider Collective]]", "Safe passage across the Silt-Mere", "[[house-kaelen:House Kaelen]]"],
      ["[[ordo-magicka:Ordo Magicka]]", "Sanctioned academic wizardry", "The High Lords"],
    ]},
  ],
},

{
  id: "covenant-of-coin",
  group: "Guilds",
  title: "The Covenant of Coin",
  blocks: [
    { type: "p", text: `This is the non-criminal arm of finance in K'naan, holding the keys to liquid wealth and legal trade. The Covenant controls currency exchange, large-scale loaning, and the movement of legitimate trade goods both within K'naan and across its borders, making them the silent economic backbone of the realm. They are utterly pragmatic, viewing the civil war as a mere market correction and a chance to buy influence from desperate Noble Houses at bargain rates.` },
    { type: "facts", items: [
      ["Purpose", "Controls the flow of legal coin, credit, and high-value trade between K'naan and the wider world."],
      ["Influence", "Maintains a tense, mutually beneficial relationship with the [[noose-holders:Noose Holders]], exchanging access to legal trade channels for silence and security against street theft."],
      ["Membership", "Composed of the wealthiest and most trusted merchant families, currency exchangers, and bonded caravan masters. They view the current succession crisis as an economic opportunity."],
      ["Ethos", "Purely transactional. Their loyalty is to profit, viewing the squabbles of the Noble Houses as mere noise that disrupts the market."],
      ["Counting-house", "[[golden-weights:The Golden Weights]]"],
    ]},
  ],
},

{
  id: "chainmakers",
  group: "Guilds",
  title: "The Chainmakers",
  blocks: [
    { type: "p", text: `The sanctioned and most powerful artisan guild, The Chainmakers hold the monopoly on manufacturing, high-grade engineering, and the production of quality arms, which are desperately rare in K'naan. While they are technically a professional guild, they are inextricably tied to [[house-vane:House Vane]] due to the House's absolute control over the high-grade iron and coal supply, meaning their loyalty and product are rarely for sale to outsiders.` },
    { type: "facts", items: [
      ["Purpose", "The sanctioned and immensely powerful guild of master smiths, engineers, and armourers, holding the technical knowledge required to process the rare high-grade steel owned by House Vane."],
      ["Influence", "Directly aligned with (and effectively subservient to) House Vane, acting as the kingdom's de facto armaments factory. They are the only legitimate source of [[true-quality-steel:Quality Steel]] weaponry and siege engines."],
      ["Membership", "Highly skilled artisans, metallurgists, and industrial foremen, protected fiercely by Vane mercenaries. Recruitment is strict, bordering on indentured servitude."],
      ["Ethos", "Pragmatic, industrial, and secretive. Their value lies in what they know and what they can build, making them politically neutral so long as their workshops remain funded and protected."],
      ["Works", "[[great-forge:The Great Forge]] in Har-Moloch"],
    ]},
  ],
},

{
  id: "silt-strider-collective",
  group: "Guilds",
  title: "The Silt-Strider Collective",
  blocks: [
    { type: "p", text: `The Silt-Strider Collective is the primary guild of navigators, pilots, and logistics experts specialized in traversing the treacherous [[silt-mere:Silt-Mere]]. While the noble houses control the resources, the Collective controls the knowledge of how to move them through the shifting mud-flats and unpredictable tides. They are a fiercely independent group, often operating on the fringes of the law to ensure the flow of trade remains uninterrupted by the region's environmental hazards. They are the only group capable of making safe passage across the Silt-Mere to what lies beyond.` },
    { type: "facts", items: [
      ["Purpose", "Provides safe passage, specialized skiffs, and navigation charts for the Silt-Mere, acting as the essential bridge between the coastal settlements and the inland markets."],
      ["Influence", "Holds significant leverage over and a deep relationship with [[house-kaelen:House Kaelen]], as their expertise is required to export grain and fish through the silt-choked waterways."],
      ["Membership", "Seasoned pilots, tide-readers, and swamp-scouts who have spent their lives on the Mere. They are often recognizable by their waterproof gear and specialized silt-boots."],
      ["Ethos", "Resilient and clannish. They believe that the Mere is a living entity that must be respected and understood, rather than conquered."],
      ["HQ", "[[tide-reach-wharf:Tide-Reach Wharf]], Gath-Mere"],
    ]},
  ],
},

{
  id: "ordo-magicka",
  group: "Guilds",
  title: "The Ordo Magicka",
  blocks: [
    { type: "p", text: `The Ordo is less a traditional guild and more a state-sanctioned school for sorcerers and academics who study the arcane as a science and a service. They are the most visible and tolerated face of magic in K'naan, providing advisors, tacticians, and sanctioned research to the High Lords. Their greatest power lies in their institutional knowledge, which allows them to track and mitigate the spread of rogue [[sorcerers:Sorcery]] and [[corruption:Corruption]] within the kingdom.` },
    { type: "facts", items: [
      ["Purpose", "The state-sanctioned academic and tactical guild of Wizards, permitted by the ruling class to study, wield, and contain magic for the protection and betterment of K'naanian society."],
      ["Influence", "They serve as advisors and tacticians to the High Lords. Their authority comes from their monopoly on sanctioned magical learning, acting as the 'safest' path for arcane power, provided one accepts their short and heavy leash."],
      ["Membership", "Academics, scholars, and those who study the arcane as a science. Their ranks include most of K'naan's legitimate cartographers and historians outside the church."],
      ["Ethos", "Clinical and conservative. They treat magic as a tool, valuing control and discipline above all else. They view Sorcerers as reckless anarchists and Theurgs as dangerous zealots."],
      ["Seat", "[[argent-academy:Argent Academy]], Ledger-Ward"],
    ]},
  ],
},

// ───── CRIMINAL ─────
{
  id: "crime-index",
  group: "Crime",
  title: "Notable Criminal Enterprises",
  blocks: [
    { type: "table", headers: ["Syndicate", "Domain", "Signifier"], rows: [
      ["[[noose-holders:Noose Holders]]", "Debt, extortion, smuggling outside the capital", "Tarred rope over the shoulder"],
      ["[[iron-spire:Iron Spire]]", "Wound-Marrow trade inside the capital", "—"],
      ["[[silent-scrivener:Silent Scrivener]]", "Information, forgery, blackmail", "Missing page, false seal"],
      ["[[silt-eaters:Silt-Eaters]]", "Coastal raids, cult of the Mere", "Oily silt on the body, marine mutations"],
      ["[[bandits:Bandits]]", "Leaderless banditry across the realm", "—"],
    ]},
  ],
},

{
  id: "noose-holders",
  group: "Crime",
  title: "The Noose Holders",
  blocks: [
    { type: "p", text: `The Noose Holders are a historical and deeply entrenched criminal organisation that long predates the death of [[fidarel:Sovereign Fidarel]]. They are not common street thugs, but powerful fixers who operate in the shadows of the [[high-council:High Council]], acting as the kingdom's de facto silent rulers. They disdain getting their own hands dirty, preferring to roll with the powerful and manage the underground economy through layers of intermediaries and debt. Their influence is absolute across K'naan's smaller cities and towns, covering everything from usury to protection rackets, but their authority stops abruptly at the Capital and the environs surrounding [[house-chancel:House Chancel]]'s refinement stronghold.` },
    { type: "facts", items: [
      ["Methods", "Masters of high-level debt, extortion, and laundering for the nobility, focusing on psychological servitude rather than simple theft."],
      ["Assets", "Control all major non-Marrow smuggling operations, including the Silt-Mere dockyards and human chattel traffic."],
      ["Signifier", "Recognisable by a thick, tarred rope coiled over the shoulder, symbolising the debt they carry and enforce."],
      ["Brutality", "Prefer public humiliation and crippling of debtors over killing to serve as a devastating warning to others, though they have no qualms about lethal force if it becomes necessary."],
      ["Motto", "\"All debts are paid whether by food or flesh\"."],
    ]},
  ],
},

{
  id: "iron-spire",
  group: "Crime",
  title: "The Iron Spire",
  blocks: [
    { type: "p", text: `The Iron Spire is a vertically integrated, immensely powerful syndicate that controls the criminal underworld in the Capital and the territory surrounding the [[house-chancel:House Chancel]] operations where [[seraphs-marrow:Seraph's Marrow]] is refined. Unlike the cautious [[noose-holders:Noose Holders]], the Spire is militant and overtly dangerous, dealing exclusively in the illicit trade of Marrow derivatives.` },
    { type: "facts", items: [
      ["Control", "Absolute criminal rule within the Capital and the one location where Seraph's Marrow is produced."],
      ["Product", "Deals in Wound-Marrow, a volatile and dangerously addictive variant of Seraph's Marrow. It is slightly less potent than the true chemical but is known to accelerate the corruption process in users, often resulting in immediate, unpredictable, and monstrous mutations."],
      ["Structure", "Composed largely of Marrow-dosed veterans and enforcers who are themselves addicted to the volatile product, making them unpredictable and ruthlessly efficient."],
      ["Conflict", "The Iron Spire and Noose Holders maintain a tense working relationship. The Noose Holders handle distribution outside the Iron Spire's territory (the Capital and House Chancel environs). While their ground forces sometimes erupt into violence, the leadership works to resolve these issues and the organizations generally keep their distance."],
      ["Stronghold", "[[the-spike:The Spike]], in The Mourn"],
    ]},
  ],
},

{
  id: "silent-scrivener",
  group: "Crime",
  title: "The Silent Scrivener",
  blocks: [
    { type: "p", text: `The Silent Scrivener is a highly exclusive and subtle syndicate that deals in the kingdom's most dangerous currency: information. Unlike the violent street gangs, the Scrivener operates entirely within the labyrinthine bureaucracy of K'naan, targeting the records, confessions, and secrets held by the Church and [[house-thorne:House Thorne]]. Their members are not strongmen, but highly placed, poorly paid clerks, archivists, and minor [[theurgs:Theurgs]] who are willing to sell the political and personal ruin of the noble houses to the highest bidder. They are ghosts in the machine, capable of erasing debts, fabricating land claims, or destroying a noble's lineage with a single stroke of ink. They rarely kill, as a living person can be blackmailed or misdirected; a dead person's records are useless.` },
    { type: "facts", items: [
      ["Methods", "Data theft, forgery of legal and religious documents, high-level blackmail, and manipulation of the succession process through historical records."],
      ["Assets", "A vast, unseen network of informants embedded in the [[magistracy:Magistracy]], House Thorne (who they often collaborate with), and the [[cloistered-scribes:Cloistered Scribes]] of the Orthodoxy."],
      ["Signifier", "No common physical marker. Instead, their operations are signalled by the inexplicable, sudden disappearance of a specific page from a highly protected court record, or a letter stamped with an archaic, non-existent seal."],
      ["Brutality", "They inflict political and social death, ruining entire families by exposing ancient heresies or manufacturing legal proof of bastardy. Physical violence is only used to silence a loose-tongued member."],
    ]},
  ],
},

{
  id: "silt-eaters",
  group: "Crime",
  title: "The Silt-Eaters",
  blocks: [
    { type: "p", text: `The Silt-Eaters are less of a traditional criminal enterprise and more of a creeping, territorial horror that has risen from the noxious [[silt-mere:Silt-Mere]]. They are a loose collective of heavily corrupted, monstrous cultists and outcast [[witches:Witches]] who worship the environmental blight itself, believing the Mere is a spiritual force that is reclaiming the world from the dying sun-god. They prey on the isolated settlements of [[house-kaelen:House Kaelen]] and the poor souls who attempt to cross the Barrens alone. Their power is drawn from the Mere's corrupted geography; their leaders are often warped by bizarre, liquid mutations, gaining unnatural strength and toxic resilience. They have no interest in coin or politics, only in spreading the Mere's dark influence.` },
    { type: "facts", items: [
      ["Methods", "Coastal raids, kidnapping to perform horrific purification rites, and selling captured victims to the [[noose-holders:Noose Holders]] for human chattel traffic (a pragmatic, if temporary, alliance)."],
      ["Assets", "Absolute control over the unmapped regions of the Silt-Mere, including hidden, silt-choked settlements and a small fleet of silent, flat-bottomed skiffs."],
      ["Signifier", "Members' bodies are often covered in thick, oily silt that never washes off. Many also bear mutations that make them physically resemble the marine life of the Mere (gills, dark scales, etc.)."],
      ["Brutality", "Extreme and ritualistic. They leave victims' corpses submerged in the mere or dissolved in the acrid bogs as offerings, turning death into a macabre territorial marker."],
      ["Ritual site", "[[drowned-moot:The Drowned Moot]]"],
    ]},
  ],
},

{
  id: "bandits",
  group: "Crime",
  title: "Bandits",
  blocks: [
    { type: "p", text: `K'naan is plagued by countless unaligned bandits and disparate groups of outlaws who lack any formal hierarchy or shared allegiance. These common thieves and shady miscreants generally operate as small, leaderless cells, preying upon vulnerable travellers and isolated settlements for survival. While some may occasionally form temporary bands to tackle more significant targets, they rarely possess the discipline or long-term vision required to transform into a sophisticated criminal enterprise. They remain a constant but fragmented threat, representing the chaotic underbelly of a realm where the traditional rule of law has begun to crumble.` },
  ],
},

// ───────────────────────── LAW ─────────────────────────
{
  id: "magistracy",
  group: "Law",
  title: "The Magistracy",
  subtitle: "The Watch",
  blocks: [
    { type: "p", text: `The kingdom's police force. Nominally commanded by the [[lord-of-lords:Lord of Lords]]; in the Sovereign's absence, day-to-day direction falls to the [[high-council:High Council]] and the houses that staff it.` },
    { type: "p", text: `Operated by [[house-thorne:House Thorne]] (administration, records, warrants) and staffed in the capital largely by [[house-valerius:House Valerius]]'s sworn levies.` },
    { type: "h3", text: "Footprint" },
    { type: "ul", items: [
      `<b>[[ash-kadesh:Ash-Kadesh]] (capital):</b> heavy, visible, routine patrols. The Magistracy's proper shape.`,
      `<b>Larger cities:</b> a Reeve and three to five Wardens under them, supplemented by whatever the local house chooses to lend.`,
      `<b>Towns and villages:</b> a single Reeve, sometimes with a Warden or two. Often the same person who handles the tax ledger.`,
      `<b>The Barrens and the deep country:</b> effectively no presence. If something happens past the roads, it is dealt with by the nearest house levy, or not at all.`,
    ]},
    { type: "h3", text: "Reeves & Wardens" },
    { type: "p", text: `A <b>Reeve</b> is the ranking Magistracy officer of a given jurisdiction — appointed by [[house-thorne:House Thorne]], answerable to the Lord of Lords in principle, to the local house lord in practice. Reeves carry writ authority: they can arrest, they can seize, they can summon the Watch's levy if one exists.` },
    { type: "p", text: `<b>Wardens</b> serve under a Reeve. They walk the beat, serve summons, and escort prisoners. In most small jurisdictions, wardens are half-pay men — reliable enough, but not well-equipped and not incorruptible.` },
    { type: "p", text: `In the capital, the hierarchy is denser: senior Reeves command districts, junior Reeves command wards, and Wardens are organised in regular watch-patrols. Outside Ash-Kadesh, things are thinner and the titles do more work than the uniforms.` },
  ],
},
];
