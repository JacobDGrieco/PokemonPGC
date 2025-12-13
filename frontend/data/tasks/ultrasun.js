// Gen & Game
const gen = 7;
const game = "ultrasun";

// Local wrappers
const alolaDex = (...args) => _dex(game + "-alola", "regional", ...args);
const melemeleDex = (...args) => _dex(game + "-melemele", "regional", ...args);
const akalaDex = (...args) => _dex(game + "-akala", "regional", ...args);
const ulaulaDex = (...args) => _dex(game + "-ulaula", "regional", ...args);
const poniDex = (...args) => _dex(game + "-poni", "regional", ...args);
const baseSprite = (id) => _sprite(game, id);
const shinySprite = (id) => _sprite(game, id, true);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const megaStone = (stone) => _megaStone(gen, stone);
const typing = (type) => _typing(type);
const zCrystal = (crystal) => _zCrystal(crystal);
const hm = (type) => _hm(gen, type);
const tm = (type) => _tm(gen, type);

// Categories
const catching = game + "-catching";
const story = game + "-story";
const sideQuests = game + "-side-quests";
const activities = game + "-activities";
const battle = game + "-battle";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const megaStones = game + "-mega-stones";
const zCrystals = game + "-zcrystals";
const fashion = game + "-fashion";
const thms = game + "-thms";
const distributions = game + "-distributions";
const extraCredit = game + "-extra-credit";

// Data
PPGC.register({
	sections: {
		[game]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: story, title: "Main Story" },
			{ id: sideQuests, title: "Side Quests" },
			{ id: activities, title: "Activities" },
			{ id: battle, title: "Battle" },
			{ id: upgrades, title: "Upgrades" },
			{ id: collectables, title: "Collectables" },
			{ id: megaStones, title: "Mega Stones" },
			{ id: zCrystals, title: "Z-Crystals" },
			{ id: fashion, title: "Fashion" },
			{ id: thms, title: "TMs/RPs" },
			{ id: distributions, title: "Distributions" },
			{ id: extraCredit, title: "Extra Credit" },
		],
	},
	tasks: {
		[catching]: [
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Catch Solgaleo", img: baseSprite(791), dexSync: [alolaDex(389)], },
					{ id: catching + "-1-02", text: "Trade for Lunala", img: baseSprite(792), dexSync: [alolaDex(390)], },
					{ id: catching + "-1-03", text: "Catch Necrozma", img: baseSprite(800), dexSync: [alolaDex(400)], },
				],
			},
		],
		[megaStones]: [
			{ id: megaStones + "-01", text: "Venusaurite", img: [baseSprite("003-m"), megaStone("venusaurite")], },
			{ id: megaStones + "-02", text: "Charizardite X", img: [baseSprite("006-mx"), megaStone("charizardite-x")], },
			{ id: megaStones + "-03", text: "Charizardite Y", img: [baseSprite("006-my"), megaStone("charizardite-y")], },
			{ id: megaStones + "-04", text: "Blastoisinite", img: [baseSprite("009-m"), megaStone("blastoisinite")], },
			{ id: megaStones + "-05", text: "Beedrillite", img: [baseSprite("015-m"), megaStone("beedrillite")], },
			{ id: megaStones + "-06", text: "Pidgeotite", img: [baseSprite("018-m"), megaStone("pidgeotite")], },
			{ id: megaStones + "-07", text: "Alakazite", img: [baseSprite("065-m"), megaStone("alakazite")], },
			{ id: megaStones + "-08", text: "Slowbronite", img: [baseSprite("080-m"), megaStone("slowbronite")], },
			{ id: megaStones + "-09", text: "Gengarite", img: [baseSprite("094-m"), megaStone("gengarite")], },
			{ id: megaStones + "-10", text: "Kangaskhanite", img: [baseSprite("115-m"), megaStone("kangaskhanite")], },
			{ id: megaStones + "-11", text: "Pinsirite", img: [baseSprite("127-m"), megaStone("pinsirite")], },
			{ id: megaStones + "-12", text: "Gyaradosite", img: [baseSprite("130-m"), megaStone("gyaradosite")], },
			{ id: megaStones + "-13", text: "Aerodactylite", img: [baseSprite("142-m"), megaStone("aerodactylite")], },
			{ id: megaStones + "-14", text: "Mewtwonite X", img: [baseSprite("150-mx"), megaStone("mewtwonite-x")], },
			{ id: megaStones + "-15", text: "Mewtwonite Y", img: [baseSprite("150-my"), megaStone("mewtwonite-y")], },
			{ id: megaStones + "-16", text: "Ampharosite", img: [baseSprite("181-m"), megaStone("ampharosite")], },
			{ id: megaStones + "-17", text: "Steelixite", img: [baseSprite("208-m"), megaStone("steelixite")], },
			{ id: megaStones + "-18", text: "Scizorite", img: [baseSprite("212-m"), megaStone("scizorite")], },
			{ id: megaStones + "-19", text: "Heracronite", img: [baseSprite("214-m"), megaStone("heracronite")], },
			{ id: megaStones + "-20", text: "Houndoominite", img: [baseSprite("229-m"), megaStone("houndoominite")], },
			{ id: megaStones + "-21", text: "Tyranitarite", img: [baseSprite("248-m"), megaStone("tyranitarite")], },
			{ id: megaStones + "-22", text: "Sceptilite", img: [baseSprite("254-m"), megaStone("sceptilite")], },
			{ id: megaStones + "-23", text: "Blazikenite", img: [baseSprite("257-m"), megaStone("blazikenite")], },
			{ id: megaStones + "-24", text: "Swampertite", img: [baseSprite("260-m"), megaStone("swampertite")], },
			{ id: megaStones + "-25", text: "Gardevoirite", img: [baseSprite("282-m"), megaStone("gardevoirite")], },
			{ id: megaStones + "-26", text: "Sablenite", img: [baseSprite("302-m"), megaStone("sablenite")], },
			{ id: megaStones + "-27", text: "Mawilite", img: [baseSprite("303-m"), megaStone("mawilite")], },
			{ id: megaStones + "-28", text: "Aggronite", img: [baseSprite("306-m"), megaStone("aggronite")], },
			{ id: megaStones + "-29", text: "Medichamite", img: [baseSprite("308-m"), megaStone("medichamite")], },
			{ id: megaStones + "-30", text: "Manectite", img: [baseSprite("310-m"), megaStone("manectite")], },
			{ id: megaStones + "-31", text: "Sharpedonite", img: [baseSprite("319-m"), megaStone("sharpedonite")], },
			{ id: megaStones + "-32", text: "Cameruptite", img: [baseSprite("323-m"), megaStone("cameruptite")], },
			{ id: megaStones + "-33", text: "Altarianite", img: [baseSprite("334-m"), megaStone("altarianite")], },
			{ id: megaStones + "-34", text: "Banettite", img: [baseSprite("354-m"), megaStone("banettite")], },
			{ id: megaStones + "-35", text: "Absolite", img: [baseSprite("359-m"), megaStone("absolite")], },
			{ id: megaStones + "-36", text: "Glalitite", img: [baseSprite("362-m"), megaStone("glalitite")], },
			{ id: megaStones + "-37", text: "Salamenceite", img: [baseSprite("373-m"), megaStone("salamencite")], },
			{ id: megaStones + "-38", text: "Metagrossite", img: [baseSprite("376-m"), megaStone("metagrossite")], },
			{ id: megaStones + "-39", text: "Latiasite", img: [baseSprite("380-m"), megaStone("latiasite")] },
			{ id: megaStones + "-40", text: "Latiosite", img: [baseSprite("381-m"), megaStone("latiosite")] },
			{ id: megaStones + "-41", text: "Lopunnite", img: [baseSprite("428-m"), megaStone("lopunnite")], },
			{ id: megaStones + "-42", text: "Garchompite", img: [baseSprite("445-m"), megaStone("garchompite")], },
			{ id: megaStones + "-43", text: "Lucarionite", img: [baseSprite("448-m"), megaStone("lucarionite")], },
			{ id: megaStones + "-44", text: "Abomasite", img: [baseSprite("460-m"), megaStone("abomasite")], },
			{ id: megaStones + "-45", text: "Galladite", img: [baseSprite("475-m"), megaStone("galladite")], },
			{ id: megaStones + "-46", text: "Audinite", img: [baseSprite("531-m"), megaStone("audinite")], },
		],
		[zCrystals]: [
			{
				id: zCrystals + "-1", text: "Collect all Typing Z-Crystals", children: [
					{ id: zCrystals + "-1-01", text: "Buginium Z", img: [typing("bug"), zCrystal("buginiumz")], },
					{ id: zCrystals + "-1-02", text: "Darkinium Z", img: [typing("dark"), zCrystal("darkiniumz")], },
					{ id: zCrystals + "-1-03", text: "Dragonium Z", img: [typing("dragon"), zCrystal("dragoniumz")], },
					{ id: zCrystals + "-1-04", text: "Electrium Z", img: [typing("electric"), zCrystal("electriumz")], },
					{ id: zCrystals + "-1-05", text: "Fairium Z", img: [typing("fairy"), zCrystal("fairiumz")], },
					{ id: zCrystals + "-1-06", text: "Fightinium Z", img: [typing("fighting"), zCrystal("fightiniumz")], },
					{ id: zCrystals + "-1-07", text: "Firium Z", img: [typing("fire"), zCrystal("firiumz")], },
					{ id: zCrystals + "-1-08", text: "Flyinium Z", img: [typing("flying"), zCrystal("flyiniumz")], },
					{ id: zCrystals + "-1-09", text: "Ghostium Z", img: [typing("ghost"), zCrystal("ghostiumz")], },
					{ id: zCrystals + "-1-10", text: "Grassium Z", img: [typing("grass"), zCrystal("grassiumz")], },
					{ id: zCrystals + "-1-11", text: "Groundium Z", img: [typing("ground"), zCrystal("groundiumz")], },
					{ id: zCrystals + "-1-12", text: "Icium Z", img: [typing("ice"), zCrystal("iciumz")], },
					{ id: zCrystals + "-1-13", text: "Normalium Z", img: [typing("normal"), zCrystal("normaliumz")], },
					{ id: zCrystals + "-1-14", text: "Poisonium Z", img: [typing("posion"), zCrystal("poisoniumz")], },
					{ id: zCrystals + "-1-15", text: "Psychium Z", img: [typing("psychic"), zCrystal("psychiumz")], },
					{ id: zCrystals + "-1-16", text: "Rockium Z", img: [typing("rock"), zCrystal("rockiumz")], },
					{ id: zCrystals + "-1-17", text: "Steelium Z", img: [typing("steel"), zCrystal("steeliumz")], },
					{ id: zCrystals + "-1-18", text: "Waterium Z", img: [typing("water"), zCrystal("wateriumz")], },]
			},
			{
				id: zCrystals + "-2", text: "Collect all Specific Z-Crystals", children: [
					{ id: zCrystals + "-2-01", text: "Aloraichium Z", img: [baseSprite(26), zCrystal("aloraichiumz")], },
					{ id: zCrystals + "-2-02", text: "Decidium Z", img: [baseSprite(724), zCrystal("decidiumz")], },
					{ id: zCrystals + "-2-03", text: "Eevium Z", img: [baseSprite(133), zCrystal("eeviumz")], },
					{ id: zCrystals + "-2-04", text: "Incinium Z", img: [baseSprite(727), zCrystal("inciniumz")], },
					{ id: zCrystals + "-2-05", text: "Kommonium Z", img: [baseSprite(784), zCrystal("kommoniumz")], },
					{ id: zCrystals + "-2-06", text: "Lunalium Z", img: [baseSprite(792), zCrystal("lunaliumz")], },
					{ id: zCrystals + "-2-07", text: "Lycanium Z", img: [baseSprite(745), zCrystal("lycaniumz")], },
					{ id: zCrystals + "-2-08", text: "Mimikium Z", img: [baseSprite(778), zCrystal("mimikiumz")], },
					{ id: zCrystals + "-2-09", text: "Pikanium Z", img: [baseSprite(25), zCrystal("pikaniumz")], },
					{ id: zCrystals + "-2-10", text: "Primarium Z", img: [baseSprite(730), zCrystal("primariumz")], },
					{ id: zCrystals + "-2-11", text: "Solganium Z", img: [baseSprite(791), zCrystal("solganiumz")], },
					{ id: zCrystals + "-2-12", text: "Tapunium Z", img: [baseSprite(785), zCrystal("tapuniumz")], },
					{ id: zCrystals + "-2-13", text: "Ultranecrozium Z", img: [baseSprite("800-u"), zCrystal("ultranecroziumz")], },
				]
			},
		],
		[thms]: [
			{
				id: thms + "-1", text: "Obtain all Ride Pokemon", children: [
					{ id: thms + "-1-01", text: "Tauros Charge", img: hm("tauros-charge") },
					{ id: thms + "-1-02", text: "Stoutland Search", img: hm("stoutland-search") },
					{ id: thms + "-1-03", text: "Lapras Dive", img: hm("lapras-dive") },
					{ id: thms + "-1-04", text: "Mantine Surf", done: false, img: hm("mantine-surf") },
					{ id: thms + "-1-05", text: "Charizard Glide", img: hm("charizard-glide") },
					{ id: thms + "-1-06", text: "Mudsdale Gallop", img: hm("mudsdale-gallop") },
					{ id: thms + "-1-07", text: "Sharpedo Jet", img: hm("sharpedo-jet") },
					{ id: thms + "-1-08", text: "Machamp Shove", img: hm("machamp-shove") },
				],
			},
			{
				id: thms + "-2", text: "Collect all TMs", children: [
					{ id: thms + "-2-01", text: "TM 01 - Work Up", img: tm("normal") },
					{ id: thms + "-2-02", text: "TM 02 - Dragon Claw", img: tm("dragon") },
					{ id: thms + "-2-03", text: "TM 03 - Psyshock", img: tm("psychic") },
					{ id: thms + "-2-04", text: "TM 04 - Calm Mind", img: tm("psychic") },
					{ id: thms + "-2-05", text: "TM 05 - Roar", img: tm("normal") },
					{ id: thms + "-2-06", text: "TM 06 - Toxic", img: tm("poison") },
					{ id: thms + "-2-07", text: "TM 07 - Hail", img: tm("ice") },
					{ id: thms + "-2-08", text: "TM 08 - Bulk Up", img: tm("fighting") },
					{ id: thms + "-2-09", text: "TM 09 - Venoshock", img: tm("poison") },
					{ id: thms + "-2-10", text: "TM 10 - Hidden Power", img: tm("normal") },
					{ id: thms + "-2-11", text: "TM 11 - Sunny Day", img: tm("fire") },
					{ id: thms + "-2-12", text: "TM 12 - Taunt", img: tm("dark") },
					{ id: thms + "-2-13", text: "TM 13 - Ice Beam", img: tm("ice") },
					{ id: thms + "-2-14", text: "TM 14 - Blizzard", img: tm("ice") },
					{ id: thms + "-2-15", text: "TM 15 - Hyper Beam", img: tm("normal") },
					{ id: thms + "-2-16", text: "TM 16 - Light Screen", img: tm("psychic") },
					{ id: thms + "-2-17", text: "TM 17 - Protect", img: tm("normal") },
					{ id: thms + "-2-18", text: "TM 18 - Rain Dance", img: tm("water") },
					{ id: thms + "-2-19", text: "TM 19 - Telekinesis", img: tm("psychic") },
					{ id: thms + "-2-20", text: "TM 20 - Safeguard", img: tm("normal") },
					{ id: thms + "-2-21", text: "TM 21 - Frustration", img: tm("normal") },
					{ id: thms + "-2-22", text: "TM 22 - Solar Beam", img: tm("grass") },
					{ id: thms + "-2-23", text: "TM 23 - Smack Down", img: tm("rock") },
					{ id: thms + "-2-24", text: "TM 24 - Thunderbolt", img: tm("electric") },
					{ id: thms + "-2-25", text: "TM 25 - Thunder", img: tm("electric") },
					{ id: thms + "-2-26", text: "TM 26 - Earthquake", img: tm("ground") },
					{ id: thms + "-2-27", text: "TM 27 - Return", img: tm("normal") },
					{ id: thms + "-2-28", text: "TM 28 - Leech Life", img: tm("bug") },
					{ id: thms + "-2-29", text: "TM 29 - Psychic", img: tm("psychic") },
					{ id: thms + "-2-30", text: "TM 30 - Shadow Ball", img: tm("ghost") },
					{ id: thms + "-2-31", text: "TM 31 - Brick Break", img: tm("fighting") },
					{ id: thms + "-2-32", text: "TM 32 - Double Team", img: tm("normal") },
					{ id: thms + "-2-33", text: "TM 33 - Reflect", img: tm("psychic") },
					{ id: thms + "-2-34", text: "TM 34 - Sludge Wave", img: tm("poison") },
					{ id: thms + "-2-35", text: "TM 35 - Flamethrower", img: tm("fire") },
					{ id: thms + "-2-36", text: "TM 36 - Sludge Bomb", img: tm("poison") },
					{ id: thms + "-2-37", text: "TM 37 - Sandstorm", img: tm("rock") },
					{ id: thms + "-2-38", text: "TM 38 - Fire Blast", img: tm("fire") },
					{ id: thms + "-2-39", text: "TM 39 - Rock Blast", img: tm("rock") },
					{ id: thms + "-2-40", text: "TM 40 - Aerial Ace", img: tm("flying") },
					{ id: thms + "-2-41", text: "TM 41 - Torment", img: tm("dark") },
					{ id: thms + "-2-42", text: "TM 42 - Facade", img: tm("normal") },
					{ id: thms + "-2-43", text: "TM 43 - Flame Charge", img: tm("fire") },
					{ id: thms + "-2-44", text: "TM 44 - Rest", img: tm("psychic") },
					{ id: thms + "-2-45", text: "TM 45 - Attract", img: tm("normal") },
					{ id: thms + "-2-46", text: "TM 46 - Thief", img: tm("dark") },
					{ id: thms + "-2-47", text: "TM 47 - Low Sweep", img: tm("fighting") },
					{ id: thms + "-2-48", text: "TM 48 - Round", img: tm("normal") },
					{ id: thms + "-2-49", text: "TM 49 - Echoed Voice", img: tm("normal") },
					{ id: thms + "-2-50", text: "TM 50 - Overheat", img: tm("fire") },
					{ id: thms + "-2-51", text: "TM 51 - Ally Switch", img: tm("psychic") },
					{ id: thms + "-2-52", text: "TM 52 - Focus Blast", img: tm("fighting") },
					{ id: thms + "-2-53", text: "TM 53 - Energy Ball", img: tm("grass") },
					{ id: thms + "-2-54", text: "TM 54 - False Swipe", img: tm("normal") },
					{ id: thms + "-2-55", text: "TM 55 - Scald", img: tm("water") },
					{ id: thms + "-2-56", text: "TM 56 - Fling", img: tm("dark") },
					{ id: thms + "-2-57", text: "TM 57 - Charge Beam", img: tm("electric") },
					{ id: thms + "-2-58", text: "TM 58 - Sky Drop", img: tm("flying") },
					{ id: thms + "-2-59", text: "TM 59 - Brutal Swing", img: tm("dark") },
					{ id: thms + "-2-60", text: "TM 60 - Quash", img: tm("dark") },
					{ id: thms + "-2-61", text: "TM 61 - Will-O-Wisp", img: tm("fire") },
					{ id: thms + "-2-62", text: "TM 62 - Acrobatics", img: tm("flying") },
					{ id: thms + "-2-63", text: "TM 63 - Embargo", img: tm("dark") },
					{ id: thms + "-2-64", text: "TM 64 - Explosion", img: tm("normal") },
					{ id: thms + "-2-65", text: "TM 65 - Shadow Claw", img: tm("ghost") },
					{ id: thms + "-2-66", text: "TM 66 - Payback", img: tm("dark") },
					{ id: thms + "-2-67", text: "TM 67 - Smart Strike", img: tm("steel") },
					{ id: thms + "-2-68", text: "TM 68 - Giga Impact", img: tm("normal") },
					{ id: thms + "-2-69", text: "TM 69 - Rock Polish", img: tm("rock") },
					{ id: thms + "-2-70", text: "TM 70 - Aurora Veil", img: tm("ice") },
					{ id: thms + "-2-71", text: "TM 71 - Stone Edge", img: tm("rock") },
					{ id: thms + "-2-72", text: "TM 72 - Volt Switch", img: tm("electric") },
					{ id: thms + "-2-73", text: "TM 73 - Thunder Wave", img: tm("electric") },
					{ id: thms + "-2-74", text: "TM 74 - Gyro Ball", img: tm("steel") },
					{ id: thms + "-2-75", text: "TM 75 - Swords Dance", img: tm("normal") },
					{ id: thms + "-2-76", text: "TM 76 - Fly", img: tm("flying") },
					{ id: thms + "-2-77", text: "TM 77 - Psych Up", img: tm("normal") },
					{ id: thms + "-2-78", text: "TM 78 - Bulldoze", img: tm("ground") },
					{ id: thms + "-2-79", text: "TM 79 - Frost Breath", img: tm("ice") },
					{ id: thms + "-2-80", text: "TM 80 - Rock Slide", img: tm("rock") },
					{ id: thms + "-2-81", text: "TM 81 - X-Scissor", img: tm("bug") },
					{ id: thms + "-2-82", text: "TM 82 - Dragon Tail", img: tm("dragon") },
					{ id: thms + "-2-83", text: "TM 83 - Work Up", img: tm("normal") },
					{ id: thms + "-2-84", text: "TM 84 - Poison Jab", img: tm("poison") },
					{ id: thms + "-2-85", text: "TM 85 - Dream Eater", img: tm("psychic") },
					{ id: thms + "-2-86", text: "TM 86 - Grass Knot", img: tm("grass") },
					{ id: thms + "-2-87", text: "TM 87 - Swagger", img: tm("normal") },
					{ id: thms + "-2-88", text: "TM 88 - Pluck", img: tm("flying") },
					{ id: thms + "-2-89", text: "TM 89 - U-turn", img: tm("bug") },
					{ id: thms + "-2-90", text: "TM 90 - Substitute", img: tm("normal") },
					{ id: thms + "-2-91", text: "TM 91 - Flash Cannon", img: tm("steel") },
					{ id: thms + "-2-92", text: "TM 92 - Trick Room", img: tm("psychic") },
					{ id: thms + "-2-93", text: "TM 93 - Wild Charge", img: tm("electric") },
					{ id: thms + "-2-94", text: "TM 94 - Surf", img: tm("water") },
					{ id: thms + "-2-95", text: "TM 95 - Snarl", img: tm("dark") },
					{ id: thms + "-2-96", text: "TM 96 - Natural Power", img: tm("normal") },
					{ id: thms + "-2-97", text: "TM 97 - Dark Pulse", img: tm("dark") },
					{ id: thms + "-2-98", text: "TM 98 - Waterfall", img: tm("water") },
					{ id: thms + "-2-99", text: "TM 99 - Dazzling Gleam", img: tm("fairy") },
					{ id: thms + "-2-100", text: "TM 100 - Confide", img: tm("normal") }
				]
			}
		],
		[extraCredit]: [
			{
				id: extraCredit + "-1", text: "Get Z-Crystals from Distribution Codes", children: [
					{ id: extraCredit + "-1-01", text: "Marshadium Z", img: [baseSprite(802), zCrystal("marshadiumz")], },
					{ id: extraCredit + "-1-02", text: "Mewnium Z", img: [baseSprite(151), zCrystal("mewniumz")], },
					{ id: extraCredit + "-1-03", text: "Pikashunium Z", img: [baseSprite("025-o"), zCrystal("pikashuniumz")], },
					{ id: extraCredit + "-1-04", text: "Snorlium Z", img: [baseSprite(143), zCrystal("snorliumz")], },
				],
			},
		]
	},
});
