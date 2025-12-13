// Gen & Game
const gen = 3;
const game = "emerald";

// Local wrappers
const regionalDex = (...args) => _dex(game, "regional", ...args);
const nationalDex = (...args) => _dex(game, "national", ...args);
const baseSprite = (natiId) => _frontSprite(game, natiId);
const shinySprite = (natiId) => _frontSpriteShiny(game, natiId);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const hm = (type) => _hm(gen, type);
const tm = (type) => _tm(gen, type);

// Categories
const catching = game + "-catching";
const story = game + "-story";
const activities = game + "-activities";
const battle = game + "-battle";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const thms = game + "-thms";
const distributions = game + "-distributions";
const extraCredit = game + "-extra-credit";

PPGC.register({
	sections: {
		[game]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: story, title: "Main Story" },
			{ id: activities, title: "Activities" },
			{ id: battle, title: "Battle" },
			{ id: upgrades, title: "Upgrades" },
			{ id: collectables, title: "Collectables" },
			{ id: thms, title: "TMs/HMs" },
			{ id: distributions, title: "Distributions" },
			{ id: extraCredit, title: "Extra Credit" },
		],
	},

	tasks: {
		[catching]: [
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Catch Kyogre", img: baseSprite(382), dexSync: [regionalDex(198), nationalDex(382)] },
					{ id: catching + "-1-02", text: "Catch Groudon", img: baseSprite(383), dexSync: [regionalDex(199), nationalDex(383)] },
					{ id: catching + "-1-03", text: "Catch Rayquaza", img: baseSprite(384), dexSync: [regionalDex(200), nationalDex(384)] },
					{ id: catching + "-1-04", text: "Catch Regirock", img: baseSprite(377), dexSync: [regionalDex(193), nationalDex(377)] },
					{ id: catching + "-1-05", text: "Catch Regice", img: baseSprite(378), dexSync: [regionalDex(194), nationalDex(378)] },
					{ id: catching + "-1-06", text: "Catch Registeel", img: baseSprite(379), dexSync: [regionalDex(195), nationalDex(379)] },
					{ id: catching + "-1-07", text: "Catch/Trade for Latias", img: baseSprite(380), dexSync: [regionalDex(196), nationalDex(380)] },
					{ id: catching + "-1-08", text: "Catch /Trade for Latios", img: baseSprite(381), dexSync: [regionalDex(197), nationalDex(381)] },
					{ id: catching + "-1-09", text: "Catch Lugia", img: baseSprite(249), dexSync: [nationalDex(249)] },
					{ id: catching + "-1-10", text: "Catch Ho-Oh", img: baseSprite(250), dexSync: [nationalDex(250)] },
				],
			},
			{
				id: catching + "-2", text: "Obtain all In-Game Gift Pokémon", children: [
					{ id: catching + "-2-01", text: "Lileep / Anorith", img: task("lileep-anorith") },
					{ id: catching + "-2-02", text: "Beldum", img: baseSprite(374) },
					{ id: catching + "-2-03", text: "Castform", img: baseSprite(351) },
					{ id: catching + "-2-04", text: "Wynaut", img: baseSprite(360) },
				],
			},
			{
				id: catching + "-3", text: "Complete all In-Game Trades", children: [
					{ id: catching + "-3-01", text: "Seedot for Ralts", img: task("seedot-for-ralts") },
					{ id: catching + "-3-02", text: "Volbeat for Plusle", img: task("volbeaet-for-plusle") },
					{ id: catching + "-3-03", text: "Bagon for Horsea", img: task("bagon-for-horsea") },
					{ id: catching + "-3-04", text: "Skitty for Meowth", img: task("skitty-for-meowth") },
				],
			},
		],
		[story]: [
			{ id: story + "-1", text: "Collect all 8 Gym Badges and Defeat the Elite 4", img: _badges(["stone", "knuckle", "dynamo", "heat", "balance", "feather", "mind", "rain"]), noCenter: true, taskSync: ["emerald-upgrades-2-01"] },
		],
		[activities]: [
			{
				id: activities + "-1", text: "Master all the Contests", noCenter: true, taskSync: ["emerald-upgrades-2-02"], children: [
					{ id: activities + "-1-01", text: "Beauty Contests", type: "tiered", tiers: ["Normal", "Super", "Hyper", "Master"], },
					{ id: activities + "-1-02", text: "Tough Contests", type: "tiered", tiers: ["Normal", "Super", "Hyper", "Master"], },
					{ id: activities + "-1-03", text: "Cuteness Contests", type: "tiered", tiers: ["Normal", "Super", "Hyper", "Master"], },
					{ id: activities + "-1-04", text: "Coolness Contests", type: "tiered", tiers: ["Normal", "Super", "Hyper", "Master"], },
					{ id: activities + "-1-05", text: "Smartness Contests", type: "tiered", tiers: ["Normal", "Super", "Hyper", "Master"], },
				],
			},
			{ id: activities + "-2", text: "Complete all chambers of the Trick House", type: "tiered", tiers: [range(1, 8)], },
		],
		[battle]: [
			{ id: battle + "-1", text: "Rematch Steven at Meteor Crater", noCenter: true },
			{
				id: battle + "-2", text: "Complete all modes of Trainer Hill", children: [
					{ id: battle + "-2-01", text: "Normal Mode" },
					{ id: battle + "-2-02", text: "Unique Mode" },
					{ id: battle + "-2-03", text: "Variety Mode" },
					{ id: battle + "-2-04", text: "Expert Mode" },
				]
			},
			{
				id: battle + "-3", text: "Complete all the Battle Tents", children: [
					{ id: battle + "-3-01", text: "Slateport" },
					{ id: battle + "-3-02", text: "Verdanturf" },
					{ id: battle + "-3-03", text: "Fallarbor" },
				]
			},
			{
				id: battle + "-4", text: "Obtain all Silver Badges in the Battle Frontier", children: [
					{ id: battle + "-4-01", text: "Dome" },
					{ id: battle + "-4-02", text: "Pike" },
					{ id: battle + "-4-03", text: "Arena" },
					{ id: battle + "-4-04", text: "Factory" },
					{ id: battle + "-4-05", text: "Palace" },
					{ id: battle + "-4-06", text: "Pyramid" },
					{ id: battle + "-4-07", text: "Tower" },
				]
			},
			{
				id: battle + "-5", text: "Obtain all Gold Badges in the Battle Frontier", children: [
					{ id: battle + "-5-01", text: "Dome" },
					{ id: battle + "-5-02", text: "Pike" },
					{ id: battle + "-5-03", text: "Arena" },
					{ id: battle + "-5-04", text: "Factory" },
					{ id: battle + "-5-05", text: "Palace" },
					{ id: battle + "-5-06", text: "Pyramid" },
					{ id: battle + "-5-07", text: "Tower" },
				]
			},
		],
		[upgrades]: [
			{ id: upgrades + "-1", text: "Obtain the National PokeDex", noCenter: true },
			{
				id: upgrades + "-2", text: "Obtain the Gold 4-Star Trainer Card", noCenter: true, children: [
					{ id: upgrades + "-2-01", text: "Defeat the Elite 4/Champion", taskSync: ["emerald-story-1"] },
					{ id: upgrades + "-2-02", text: "Win all Master Rank Contests", taskSync: ["emerald-activities-1"] },
					{ id: upgrades + "-2-03", text: "Defeat the 50 trainer challenge in the Battle Tower" },
					{ id: upgrades + "-2-04", text: "Complete the Hoenn Regional PokeDex (200)" },
				],
			},
		],
		[collectables]: [
			{
				id: collectables + "-1", text: "Obtain all extra Key Items", children: [
					{ id: collectables + "-1-01", text: "Exp. Share", img: item("exp-share") },
					{ id: collectables + "-1-02", text: "Go-Goggles", img: item("go-goggles") },
					{ id: collectables + "-1-03", text: "Good Rod", img: item("good-rod") },
					{ id: collectables + "-1-04", text: "Item Finder", img: item("item-finder") },
					{ id: collectables + "-1-05", text: "Old Rod", img: item("old-rod") },
					{ id: collectables + "-1-06", text: "PokeBlock Case", img: item("pokeblock-case") },
					{ id: collectables + "-1-07", text: "Soot Sack", img: item("soot-sack") },
					{ id: collectables + "-1-08", text: "Super Rod", img: item("super-rod") },
					{ id: collectables + "-1-09", text: "Wailmer Pail", img: item("wailmer-pail") },
				],
			},
			{
				id: collectables + "-2", text: "Obtain all items from collecting soot", children: [
					{ id: collectables + "-2-01", text: "Pretty Chair", img: item("pretty-chair") },
					{ id: collectables + "-2-02", text: "Pretty Desk", img: item("pretty-desk") },
				],
			},
			{ id: collectables + "-3", text: "Find all hidden items with the Item Finder", img: item("item-finder"), noCenter: true, type: "tiered", tiers: [range(1, 97)], },
		],
		[thms]: [
			{
				id: thms + "-1", text: "Collect all HMs", children: [
					{ id: thms + "-1-01", text: "HM01: Cut", img: hm("normal") },
					{ id: thms + "-1-02", text: "HM02: Fly", img: hm("flying") },
					{ id: thms + "-1-03", text: "HM03: Surf", img: hm("water") },
					{ id: thms + "-1-04", text: "HM04: Strength", img: hm("normal") },
					{ id: thms + "-1-05", text: "HM05: Flash", img: hm("normal") },
					{ id: thms + "-1-06", text: "HM06: Rock Smash", img: hm("fighting") },
					{ id: thms + "-1-07", text: "HM07: Waterfall", img: hm("water") },
					{ id: thms + "-1-08", text: "HM08: Dive", img: hm("water") },
				],
			},
			{
				id: thms + "-2", text: "Collect all HMs", children: [
					{ id: thms + "-2-01", text: "TM 01 - Focus Punch", img: tm("fighting") },
					{ id: thms + "-2-02", text: "TM 02 - Dragon Claw", img: tm("dragon") },
					{ id: thms + "-2-03", text: "TM 03 - Water Pulse", img: tm("water") },
					{ id: thms + "-2-04", text: "TM 04 - Calm Mind", img: tm("psychic") },
					{ id: thms + "-2-05", text: "TM 05 - Roar", img: tm("normal") },
					{ id: thms + "-2-06", text: "TM 06 - Toxic", img: tm("poison") },
					{ id: thms + "-2-07", text: "TM 07 - Hail", img: tm("ice") },
					{ id: thms + "-2-08", text: "TM 08 - Bulk Up", img: tm("fighting") },
					{ id: thms + "-2-09", text: "TM 09 - Bullet Seed", img: tm("grass") },
					{ id: thms + "-2-10", text: "TM 10 - Hidden Power", img: tm("normal") },
					{ id: thms + "-2-11", text: "TM 11 - Sunny Day", img: tm("fire") },
					{ id: thms + "-2-12", text: "TM 12 - Taunt", img: tm("dark") },
					{ id: thms + "-2-13", text: "TM 13 - Ice Beam", img: tm("ice") },
					{ id: thms + "-2-14", text: "TM 14 - Blizzard", img: tm("ice") },
					{ id: thms + "-2-15", text: "TM 15 - Hyper Beam", img: tm("normal") },
					{ id: thms + "-2-16", text: "TM 16 - Light Screen", img: tm("psychic") },
					{ id: thms + "-2-17", text: "TM 17 - Protect", img: tm("normal") },
					{ id: thms + "-2-18", text: "TM 18 - Rain Dance", img: tm("water") },
					{ id: thms + "-2-19", text: "TM 19 - Giga Drain", img: tm("grass") },
					{ id: thms + "-2-20", text: "TM 20 - Safeguard", img: tm("normal") },
					{ id: thms + "-2-21", text: "TM 21 - Frustration", img: tm("normal") },
					{ id: thms + "-2-22", text: "TM 22 - Solar Beam", img: tm("grass") },
					{ id: thms + "-2-23", text: "TM 23 - Iron Tail", img: tm("steel") },
					{ id: thms + "-2-24", text: "TM 24 - Thunderbolt", img: tm("electric") },
					{ id: thms + "-2-25", text: "TM 25 - Thunder", img: tm("electric") },
					{ id: thms + "-2-26", text: "TM 26 - Earthquake", img: tm("ground") },
					{ id: thms + "-2-27", text: "TM 27 - Return", img: tm("normal") },
					{ id: thms + "-2-28", text: "TM 28 - Dig", img: tm("ground") },
					{ id: thms + "-2-29", text: "TM 29 - Psychic", img: tm("psychic") },
					{ id: thms + "-2-30", text: "TM 30 - Shadow Ball", img: tm("ghost") },
					{ id: thms + "-2-31", text: "TM 31 - Brick Break", img: tm("fighting") },
					{ id: thms + "-2-32", text: "TM 32 - Double Team", img: tm("normal") },
					{ id: thms + "-2-33", text: "TM 33 - Reflect", img: tm("psychic") },
					{ id: thms + "-2-34", text: "TM 34 - Shock Wave", img: tm("electric") },
					{ id: thms + "-2-35", text: "TM 35 - Flamethrower", img: tm("fire") },
					{ id: thms + "-2-36", text: "TM 36 - Sludge Bomb", img: tm("poison") },
					{ id: thms + "-2-37", text: "TM 37 - Sandstorm", img: tm("rock") },
					{ id: thms + "-2-38", text: "TM 38 - Fire Blast", img: tm("fire") },
					{ id: thms + "-2-39", text: "TM 39 - Rock Tomb", img: tm("rock") },
					{ id: thms + "-2-40", text: "TM 40 - Aerial Ace", img: tm("flying") },
					{ id: thms + "-2-41", text: "TM 41 - Torment", img: tm("dark") },
					{ id: thms + "-2-42", text: "TM 42 - Facade", img: tm("normal") },
					{ id: thms + "-2-43", text: "TM 43 - Secret Power", img: tm("normal") },
					{ id: thms + "-2-44", text: "TM 44 - Rest", img: tm("psychic") },
					{ id: thms + "-2-45", text: "TM 45 - Attract", img: tm("normal") },
					{ id: thms + "-2-46", text: "TM 46 - Thief", img: tm("dark") },
					{ id: thms + "-2-47", text: "TM 47 - Steel Wing", img: tm("steel") },
					{ id: thms + "-2-48", text: "TM 48 - Skill Swap", img: tm("psychic") },
					{ id: thms + "-2-49", text: "TM 49 - Snatch", img: tm("dark") },
					{ id: thms + "-2-50", text: "TM 50 - Overheat", img: tm("fire") },
				],
			},
		],
		[extraCredit]: [
			{ id: extraCredit + "-1", text: "Obtain Jirachi", img: baseSprite(385), dexSync: [regionalDex(201), nationalDex(385)] },
			{ id: extraCredit + "-2", text: "Obtain Deoxys", img: baseSprite(386), dexSync: [regionalDex(202), nationalDex(386)] },
		]
	},
});
