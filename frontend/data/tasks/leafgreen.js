// Gen & Game
const gen = 3;
const game = "leafgreen";

// Local wrappers
const regionalDex = (id) => _dex(game, "regional", id);
const nationalDex = (id) => _dex(game, "national", id);
const baseSprite = (id) => _sprite(game, false, id);
const shinySprite = (id) => _sprite(game, true, id);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const hm = (type) => _hm(gen, type);
const tm = (type) => _tm(gen, type);

// Categories
const catching = game + "-catching";
const story = game + "-story";
const battle = game + "-battle";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const thms = game + "-thms";
const distributions = game + "-distributions";
const extraCredit = game + "-extra-credit";

// Data
PPGC.register({
	sections: {
		[game]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: story, title: "Main Story" },
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
					{ id: catching + "-1-01", text: "Catch Articuno", img: baseSprite(144), dexSync: [regionalDex(144), nationalDex(144)] },
					{ id: catching + "-1-02", text: "Catch Zapdos", img: baseSprite(145), dexSync: [regionalDex(145), nationalDex(145)] },
					{ id: catching + "-1-03", text: "Catch Moltres", img: baseSprite(146), dexSync: [regionalDex(146), nationalDex(146)] },
					{ id: catching + "-1-04", text: "Catch Mewtwo", img: baseSprite(150), taskSync: ["leafgreen-story-2-01"], dexSync: [regionalDex(150), nationalDex(150)] },
					{ id: catching + "-1-05", text: "Catch/Trade for Raikou", img: baseSprite(243), dexSync: [nationalDex(243)] },
					{ id: catching + "-1-06", text: "Catch/Trade for Entei", img: baseSprite(244), dexSync: [nationalDex(244)] },
					{ id: catching + "-1-07", text: "Catch/Trade for Suicune", img: baseSprite(245), dexSync: [nationalDex(245)] },
				],
			},
			{
				id: catching + "-2", text: "Catch both Snorlax", children: [
					{ id: catching + "-2-01", text: "Route 12", img: task("snorlax-12") },
					{ id: catching + "-2-02", text: "Route 16", img: task("snorlax-16") },
				],
			},
			{
				id: catching + "-3", text: "Obtain all In-Game Gift Pokémon", children: [
					{ id: catching + "-3-01", text: "Hitmonlee/Hitmonchan", img: task("hitmonlee-hitmonchan") },
					{ id: catching + "-3-02", text: "Omanyte/Kabuto", img: task("omanyte-kabuto") },
					{ id: catching + "-3-03", text: "Lapras", img: baseSprite(131) },
					{ id: catching + "-3-04", text: "Aerodactyl", img: baseSprite(142) },
					{ id: catching + "-3-05", text: "Eevee", img: baseSprite(133) },
					{ id: catching + "-3-06", text: "Togepi", img: baseSprite(175) },
				],
			},
			{
				id: catching + "-4", text: "Complete all In-Game Trades", children: [
					{ id: catching + "-4-01", text: "Abra for Mr. Mime", img: task("abra-for-mrmime") },
					{ id: catching + "-4-02", text: "Nidoran ♂ for Nidoran ♀", img: task("nidoranm-for-nidoranf") },
					{ id: catching + "-4-03", text: "Nidorino for Nidorina", img: task("nidorino-for-nidorina") },
					{ id: catching + "-4-04", text: "Golduck for Lickitung", img: task("golduck-for-lickitung") },
					{ id: catching + "-4-05", text: "Poliwhirl for Jynx", img: task("poliwhirl-for-jynx") },
					{ id: catching + "-4-06", text: "Spearow for Farfetch'd", img: task("spearow-for-farfetchd") },
					{ id: catching + "-4-07", text: "Ponyta for Seel", img: task("ponyta-for-seel") },
					{ id: catching + "-4-08", text: "Raichu for Electrode", img: task("raichu-for-electrode") },
					{ id: catching + "-4-09", text: "Venonant for Tangela", img: task("venonant-for-tangela") },
				],
			},
		],
		[story]: [
			{ id: story + "-1", text: "Collect all 8 Gym Badges and Defeat the Elite 4", img: _badges(["boulder", "cascade", "thunder", "rainbow", "soul", "marsh", "volcano", "earth"]), noCenter: true },
			{
				id: story + "-2", text: "Epilogue", noCenter: true, children: [
					{ id: story + "-2-01", text: "Catch Mewtwo", img: baseSprite(150), tooltip: "Found at the bottom of Cerulean Cave", taskSync: ["leafgreen-catching-1-04"], dexSync: [regionalDex(150), nationalDex(150)] },
				],
			},
		],
		[battle]: [
			{ id: battle + "-1", text: "Defeat Red", img: npc("red"), noCenter: true },
			{
				id: battle + "-2", text: "Master the Battle Tower", children: [
					{ id: battle + "-2-01", text: "Single Battles", noCenter: true, type: "tiered", tiers: [1, 2, 3, 4, 5, 6, 7, 8], currentTier: 0, currentCount: 0, unit: "collected" },
					{ id: battle + "-2-02", text: "Double Battles", noCenter: true, type: "tiered", tiers: [1, 2, 3, 4, 5, 6, 7, 8], currentTier: 0, currentCount: 0, unit: "collected" },
					{ id: battle + "-2-03", text: "Multi Battles", noCenter: true, type: "tiered", tiers: [1, 2, 3, 4, 5, 6, 7, 8], currentTier: 0, currentCount: 0, unit: "collected" },
					{ id: battle + "-2-04", text: "Knockout Battles", noCenter: true, type: "tiered", tiers: [1, 2, 3, 4, 5, 6, 7, 8], currentTier: 0, currentCount: 0, unit: "collected" },
				],
			},
		],
		[upgrades]: [
			{ id: upgrades + "-1", text: "Obtain the National Dex", img: item("kanto-nati-dex"), noCenter: true },
			{
				id: upgrades + "-2", text: "Obtain the Gold 4 Star Trainer Card", children: [
					{ id: upgrades + "-2-01", text: "Collect all 8 Gym Badges and Defeat the Elite 4", taskSync: ["leafgreen-story-1"] },
					{ id: upgrades + "-2-02", text: "Complete the Kanto Pokedex" },
					{ id: upgrades + "-2-03", text: "Complete the National Pokedex" },
					{ id: upgrades + "-2-04", text: "Jump 200 times in Pokemon Jump" },
					{ id: upgrades + "-2-05", text: "Collect 200 berries in Dodrio Berry Picking" },
				],
			},
		],
		[collectables]: [
			{
				id: collectables + "-1", text: "Obtain all Key Items", children: [
					{ id: collectables + "-1-01", text: "Good Rod", img: item("good-rod") },
					{ id: collectables + "-1-02", text: "Item Finder", img: item("item-finder") },
					{ id: collectables + "-1-03", text: "Old Rod", img: item("old-rod") },
					{ id: collectables + "-1-04", text: "Poke Flute", img: item("poke-flute") },
					{ id: collectables + "-1-05", text: "Super Rod", img: item("super-rod") },
					{ id: collectables + "-1-06", text: "VS Seeker", img: item("vs-seeker") },
				]
			},
			{ id: collectables + "-2", text: "Find all hidden items with the Item Finder", img: item("item-finder"), noCenter: true, type: "tiered", tiers: [range(1, 155)], },
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
				],
			},
			{
				id: thms + "-2", text: "Collect all TMs", children: [
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
				]
			},
		],
		[extraCredit]: [
			{ id: extraCredit + "-1", text: "Obtain Mew", img: baseSprite(151), dexSync: [regionalDex(151), nationalDex(151)] },
		]
	},
});