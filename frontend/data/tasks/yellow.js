// Gen & Game
const gen = 1;
const game = "yellow";

// Local wrappers
const regionalDex = (...args) => _dex(game, "regional", ...args);
const baseSprite = (id) => _sprite(game, id);
const shinySprite = (id) => _sprite(game, id, true);
const bwTask = (id) => _task1(game, "bw", id);
const coloredTask = (id) => _task1(game, "colored", id);
const item = (id) => _item(game, id);
const hm = (type) => _hm(gen, type);
const tm = (type) => _tm(gen, type);

// Categories
const catching = game + "-catching";
const story = game + "-story";
const activites = game + "-activites";
const collectables = game + "-collectables";
const thms = game + "-thms";
const extraCredit = game + "-extra-credit";

// Data
PPGC.register({
	sections: {
		[game]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: story, title: "Main Story" },
			{ id: activites, title: "Activities" },
			{ id: collectables, title: "Collectables" },
			{ id: thms, title: "TMs/HMs" },
			{ id: extraCredit, title: "Extra Credit" },
		],
	},

	tasks: {
		[catching]: [
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Catch Articuno", img: baseSprite(144), imgS: shinySprite(144), tooltip: "Found at the bottom of the Seafoam Islands", dexSync: [regionalDex(144)] },
					{ id: catching + "-1-02", text: "Catch Zapdos", img: baseSprite(145), imgS: shinySprite(145), tooltip: "Found at the end of the Power Plant", dexSync: [regionalDex(145)] },
					{ id: catching + "-1-03", text: "Catch Moltres", img: baseSprite(146), imgS: shinySprite(146), tooltip: "Found in the middle of Victory Road", dexSync: [regionalDex(146)] },
					{ id: catching + "-1-04", text: "Catch Mewtwo", img: baseSprite(150), imgS: shinySprite(150), tooltip: "Found at the bottom of Cerulean Cave", taskSync: ["yellow-story-2-01"], dexSync: [regionalDex(150)] },
				],
			},
			{
				id: catching + "-2", text: "Catch both Snorlax", children: [
					{ id: catching + "-2-01", text: "Route 12", img: bwTask("snorlax-12"), imgS: coloredTask("snorlax-12") },
					{ id: catching + "-2-02", text: "Route 16", img: bwTask("snorlax-16"), imgS: coloredTask("snorlax-16") },
				],
			},
			{
				id: catching + "-3", text: "Obtain all In-Game Gift Pokémon", children: [
					{ id: catching + "-3-01", text: "Hitmonlee/Hitmonchan", img: bwTask("hitmonlee-hitmonchan"), imgS: coloredTask("hitmonlee-hitmonchan") },
					{ id: catching + "-3-02", text: "Omanyte/Kabuto", img: bwTask("omanyte-kabuto"), imgS: coloredTask("omanyte-kabuto") },
					{ id: catching + "-3-03", text: "Lapras", img: baseSprite(131), imgS: shinySprite(131) },
					{ id: catching + "-3-04", text: "Aerodactyl", img: baseSprite(142), imgS: shinySprite(142) },
					{ id: catching + "-3-05", text: "Eevee", img: baseSprite(133), imgS: shinySprite(133) },
				],
			},
			{
				id: catching + "-4", text: "Complete all In-Game Trades", children: [
					{ id: catching + "-4-01", text: "Clefairy for Mr. Mime", img: bwTask("clefairy-for-mrmime"), imgS: coloredTask("clefairy-for-mrmime") },
					{ id: catching + "-4-02", text: "Cubone for Machoke", img: bwTask("cubone-for-machoke"), imgS: coloredTask("cubone-for-machoke") },
					{ id: catching + "-4-03", text: "Lickitung for Dugtrio", img: bwTask("lickitung-for-dugtrio"), imgS: coloredTask("lickitung-for-dugtrio") },
					{ id: catching + "-4-04", text: "Parasect for Tangela", img: bwTask("parasect-for-tangela"), imgS: coloredTask("parasect-for-tangela") },
					{ id: catching + "-4-05", text: "Golduck for Rhydon", img: bwTask("golduck-for-rhydon"), imgS: coloredTask("golduck-for-rhydon") },
					{ id: catching + "-4-06", text: "Growlithe for Dewgong", img: bwTask("growlithe-for-dewgong"), imgS: coloredTask("growlithe-for-dewgong") },
					{ id: catching + "-4-07", text: "Kangashkan for Muk", img: bwTask("kangaskhan-for-muk"), imgS: coloredTask("kangaskhan-for-muk") },
				],
			},
		],
		[story]: [
			{ id: story + "-1", text: "Collect all 8 Gym Badges and Defeat the Elite 4", img: _badges(["boulder", "cascade", "thunder", "rainbow", "soul", "marsh", "volcano", "earth"]), noCenter: true, },
			{
				id: story + "-2", text: "Epilogue", noCenter: true, children: [
					{ id: story + "-2-01", text: "Catch Mewtwo", img: baseSprite(150), imgS: shinySprite(150), tooltip: "Found at the bottom of Cerulean Cave", taskSync: ["yellow-catching-1-04"], dexSync: [regionalDex(150)] },
				],
			},
		],
		[activites]: [
			{ id: activites + "-1", text: "Get a high-score in the Pikachu Surfing Mini-Game ", done: false },
		],
		[collectables]: [
			{
				id: collectables + "-1", text: "Obtain all Key Items", children: [
					{ id: collectables + "-1-01", text: "Coin Case", img: item("coin-case") },
					{ id: collectables + "-1-02", text: "Exp. All", img: item("exp-all") },
					{ id: collectables + "-1-03", text: "Good Rod", img: item("good-rod") },
					{ id: collectables + "-1-04", text: "Item Finder", img: item("item-finder") },
					{ id: collectables + "-1-05", text: "Old Rod", img: item("old-rod") },
					{ id: collectables + "-1-06", text: "Poke Flute", img: item("poke-flute") },
					{ id: collectables + "-1-07", text: "Super Rod", img: item("super-rod") },
				]
			},
			{ id: collectables + "-2", text: "Find all hidden items with the Item Finder", img: item("item-finder"), noCenter: true, type: "tiered", tiers: [range(1, 54)], },
		],
		[thms]: [
			{
				id: thms + "-1", text: "Collect all HMs", children: [
					{ id: thms + "-1-01", text: "HM01: Cut", img: hm("normal") },
					{ id: thms + "-1-02", text: "HM02: Fly", img: hm("flying") },
					{ id: thms + "-1-03", text: "HM03: Surf", img: hm("water") },
					{ id: thms + "-1-04", text: "HM04: Strength", img: hm("normal") },
					{ id: thms + "-1-05", text: "HM05: Flash", img: hm("normal") },
				],
			},
			{
				id: thms + "-2", text: "Collect all TMs", children: [
					{ id: thms + "-2-01", text: "TM 01 - Mega Punch", img: tm("normal") },
					{ id: thms + "-2-02", text: "TM 02 - Razor Wind", img: tm("normal") },
					{ id: thms + "-2-03", text: "TM 03 - Swords Dance", img: tm("normal") },
					{ id: thms + "-2-04", text: "TM 04 - Whirlwind", img: tm("normal") },
					{ id: thms + "-2-05", text: "TM 05 - Mega Kick", img: tm("normal") },
					{ id: thms + "-2-06", text: "TM 06 - Toxic", img: tm("poison") },
					{ id: thms + "-2-07", text: "TM 07 - Horn Drill", img: tm("normal") },
					{ id: thms + "-2-08", text: "TM 08 - Body Slam", img: tm("normal") },
					{ id: thms + "-2-09", text: "TM 09 - Take Down", img: tm("normal") },
					{ id: thms + "-2-10", text: "TM 10 - Double-Edge", img: tm("normal") },
					{ id: thms + "-2-11", text: "TM 11 - Bubble Beam", img: tm("water") },
					{ id: thms + "-2-12", text: "TM 12 - Water Gun", img: tm("water") },
					{ id: thms + "-2-13", text: "TM 13 - Ice Beam", img: tm("ice") },
					{ id: thms + "-2-14", text: "TM 14 - Blizzard", img: tm("ice") },
					{ id: thms + "-2-15", text: "TM 15 - Hyper Beam", img: tm("normal") },
					{ id: thms + "-2-16", text: "TM 16 - Pay Day", img: tm("normal") },
					{ id: thms + "-2-17", text: "TM 17 - Submission", img: tm("fighting") },
					{ id: thms + "-2-18", text: "TM 18 - Counter", img: tm("fighting") },
					{ id: thms + "-2-19", text: "TM 19 - Seismic Toss", img: tm("fighting") },
					{ id: thms + "-2-20", text: "TM 20 - Rage", img: tm("normal") },
					{ id: thms + "-2-21", text: "TM 21 - Mega Drain", img: tm("grass") },
					{ id: thms + "-2-22", text: "TM 22 - Solar Beam", img: tm("grass") },
					{ id: thms + "-2-23", text: "TM 23 - Dragon Rage", img: tm("dragon") },
					{ id: thms + "-2-24", text: "TM 24 - Thunderbolt", img: tm("electric") },
					{ id: thms + "-2-25", text: "TM 25 - Thunder", img: tm("electric") },
					{ id: thms + "-2-26", text: "TM 26 - Earthquake", img: tm("ground") },
					{ id: thms + "-2-27", text: "TM 27 - Fissure", img: tm("ground") },
					{ id: thms + "-2-28", text: "TM 28 - Dig", img: tm("ground") },
					{ id: thms + "-2-29", text: "TM 29 - Psychic", img: tm("psychic") },
					{ id: thms + "-2-30", text: "TM 30 - Teleport", img: tm("psychic") },
					{ id: thms + "-2-31", text: "TM 31 - Mimic", img: tm("normal") },
					{ id: thms + "-2-32", text: "TM 32 - Double Team", img: tm("normal") },
					{ id: thms + "-2-33", text: "TM 33 - Reflect", img: tm("psychic") },
					{ id: thms + "-2-34", text: "TM 34 - Bide", img: tm("normal") },
					{ id: thms + "-2-35", text: "TM 35 - Metronome", img: tm("normal") },
					{ id: thms + "-2-36", text: "TM 36 - Self-Destruct", img: tm("normal") },
					{ id: thms + "-2-37", text: "TM 37 - Egg Bomb", img: tm("normal") },
					{ id: thms + "-2-38", text: "TM 38 - Fire Blast", img: tm("fire") },
					{ id: thms + "-2-39", text: "TM 39 - Swift", img: tm("normal") },
					{ id: thms + "-2-40", text: "TM 40 - Skull Bash", img: tm("normal") },
					{ id: thms + "-2-41", text: "TM 41 - Soft-Boiled", img: tm("normal") },
					{ id: thms + "-2-42", text: "TM 42 - Dream Eater", img: tm("psychic") },
					{ id: thms + "-2-43", text: "TM 43 - Sky Attack", img: tm("flying") },
					{ id: thms + "-2-44", text: "TM 44 - Rest", img: tm("psychic") },
					{ id: thms + "-2-45", text: "TM 45 - Thunder Wave", img: tm("electric") },
					{ id: thms + "-2-46", text: "TM 46 - Psywave", img: tm("psychic") },
					{ id: thms + "-2-47", text: "TM 47 - Explosion", img: tm("normal") },
					{ id: thms + "-2-48", text: "TM 48 - Rock Slide", img: tm("rock") },
					{ id: thms + "-2-49", text: "TM 49 - Tri Attack", img: tm("normal") },
					{ id: thms + "-2-50", text: "TM 50 - Substitute", img: tm("normal") },
				]
			},
		],
		[extraCredit]: [
			{ id: extraCredit + "-1", text: "Obtain Mew", img: baseSprite(151), imgS: shinySprite(151), dexSync: [regionalDex(151)] },
		]
	},
});
