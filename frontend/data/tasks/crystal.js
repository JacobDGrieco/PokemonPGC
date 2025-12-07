// Gen & Game
const gen = 2;
const game = "crystal";

// Local wrappers
const regionalDex = (id) => _regionalDex(game, id);
const nationalDex = (id) => _nationalDex(game, id);
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
const sideQuests = game + "-side-quests";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const thms = game + "-thms";
const extraCredit = game + "-extra-credit";

// Data
PPGC.register({
	sections: {
		[game]: [
			{ id: catching, title: "Gotta Catch 'Em All" },
			{ id: story, title: "Main Story" },
			{ id: sideQuests, title: "Side Quests" },
			{ id: upgrades, title: "Upgrades" },
			{ id: collectables, title: "Collectables" },
			{ id: thms, title: "TMs/HMs" },
			{ id: extraCredit, title: "Extra Credit" },
		],
	},

	tasks: {
		[catching]: [
			{
				id: catching + "-1", text: "Catch all the Legendaries", children: [
					{ id: catching + "-1-01", text: "Trade for Articuno", img: baseSprite(144), dexSync: [regionalDex(235)] },
					{ id: catching + "-1-02", text: "Trade for Zapdos", img: baseSprite(145), dexSync: [regionalDex(236)] },
					{ id: catching + "-1-03", text: "Trade for Moltres", img: baseSprite(146), dexSync: [regionalDex(237)] },
					{ id: catching + "-1-04", text: "Trade for Mewtwo", img: baseSprite(150), dexSync: [regionalDex(249)] },
					{ id: catching + "-1-05", text: "Catch Raikou", img: baseSprite(243), dexSync: [regionalDex(238)] },
					{ id: catching + "-1-06", text: "Catch Entei", img: baseSprite(244), dexSync: [regionalDex(239)] },
					{ id: catching + "-1-07", text: "Catch Suicune", img: baseSprite(245), dexSync: [regionalDex(240)] },
					{ id: catching + "-1-08", text: "Catch Lugia", img: baseSprite(249), dexSync: [regionalDex(247)] },
					{ id: catching + "-1-09", text: "Catch Ho-Oh", img: baseSprite(250), dexSync: [regionalDex(248)] },
				],
			},
			{ id: catching + "-2", text: "Catch/Defeat the Sudowoodo on Route 36", img: baseSprite(185) },
			{ id: catching + "-3", text: 'Catch/Defeat the "Red" Gyarados in the Lake of Rage', done: false, img: shinySprite(130) },
			{ id: catching + "-4", text: "Catch/Defeat the Snorlax in Vermillion City", done: false, img: baseSprite(143) },
			{
				id: catching + "-5", text: "Obtain all In-Game Gift Pokémon", children: [
					{ id: catching + "-5-01", text: "Odd Egg", img: baseSprite(0) },
					{ id: catching + "-5-02", text: "Spearow", img: baseSprite(21) },
					{ id: catching + "-5-03", text: "Eevee", img: baseSprite(133) },
					{ id: catching + "-5-04", text: "Togepi", img: baseSprite(175) },
					{ id: catching + "-5-05", text: "Dratini", img: baseSprite(147) },
					{ id: catching + "-5-06", text: "Shuckle", img: baseSprite(213) },
					{ id: catching + "-5-07", text: "Tyrogue", img: baseSprite(236) },
				],
			},
			{
				id: catching + "-6", text: "Complete all In-Game Trades", children: [
					{ id: catching + "-6-01", text: "Bellsprout for Onix", img: task("bellsprout-for-onix") },
					{ id: catching + "-6-02", text: "Drowzee for Machop", img: task("drowzee-for-machop") },
					{ id: catching + "-6-03", text: "Krabby for Voltorb", img: task("karbby-for-voltorb") },
					{ id: catching + "-6-04", text: "Dragonair for Rhydon", img: task("dragonair-for-rhydon") },
					{ id: catching + "-6-05", text: "Gloom for Rapidash", img: task("gloom-for-rapidash") },
					{ id: catching + "-6-06", text: "Chansey for Aerodactyl", img: task("chansey-for-aerodactyl") },
				],
			},
		],
		[story]: [
			{ id: story + "-1", text: "Collect all 8 Gym Badges and Defeat the Elite 4", img: _badges(["zephyr", "hive", "plain", "fog", "storm", "mineral", "glacier", "rising"]), noCenter: true },
			{
				id: story + "-2", text: "Explore the Kanto Region", children: [
					{ id: story + "-2-01", text: "Restore power to the Kanto Power Plant", img: location("kanto-power-plant") },
					{ id: story + "-2-02", text: "Find Blue", img: npc("blue"), tooltip: "Can be found on Cinnabar Island" },
					{ id: story + "-2-03", text: "Defeat Blaine", img: npc("blaine"), tooltip: "Can be found at the Seafoam Islands", syncs: ["gold-story-3-g"] },
					{ id: story + "-2-04", text: "Defeat Red", img: npc("red"), tooltip: "Can be found atop Mt. Silver" },
				],
			},
			{
				id: story + "-3", text: "Collect all 8 Kanto Gym Badges", children: [
					{ id: story + "-3-01", text: "Thunder Badge", img: _badges("thunder"), tooltip: "Defeat Lt. Surge at the Vermillion City Gym" },
					{ id: story + "-3-02", text: "Marsh Badge", img: _badges("marsh"), tooltip: "Defeat Sabrina at the Saffron City Gym" },
					{ id: story + "-3-03", text: "Rainbow Badge", img: _badges("rainbow"), tooltip: "Defeat Erika at the Celdaon City Gym" },
					{ id: story + "-3-04", text: "Soul Badge", img: _badges("soul"), tooltip: "Defeat Janine at the Fuchsia City Gym" },
					{ id: story + "-3-05", text: "Cascade Badge", img: _badges("cascade"), tooltip: "Defeat Misty at the Cerulean City Gym" },
					{ id: story + "-3-06", text: "Boulder Badge", img: _badges("boulder"), tooltip: "Defeat Brock at the Pewter City Gym" },
					{ id: story + "-3-07", text: "Volcano Badge", img: _badges("volcano"), tooltip: "Defeat Blane at the Seafoam Islands", syncs: ["gold-story-2-c"] },
					{ id: story + "-3-08", text: "Earth Badge", img: _badges("earth"), tooltip: "Defeat Blue at the Viridian City Gym" },
				],
			},
		],
		[sideQuests]: [
			{ id: sideQuests + "-1", text: "Show Elm the hatched Egg", img: npc("elm"), tooltip: "You get an Everstone in return" },
			{ id: sideQuests + "-2", text: "Deliver the mail for the guard to the fat guy", tooltip: "Guard (Route 36), Fat Guy (Route 31)" },
			{ id: sideQuests + "-3", text: "Cure the Miltank", img: baseSprite(242), tooltip: "Route 39 - Miltank Farm" },
			{ id: sideQuests + "-4", text: "Talk to DJ Mary in the Radio Tower", img: npc("dj-mary"), tooltip: "Talk after defeating Team Rocket in the Radio Tower" },
			{ id: sideQuests + "-5", text: "Return the lost doll", img: item("lost-item-i"), tooltip: "The woman is in Saffron City" },
			{
				id: sideQuests + "-6", text: "Meet all the Week Siblings", children: [
					{ id: sideQuests + "-6-01", text: "Monica", img: npc("monica") },
					{ id: sideQuests + "-6-02", text: "Tuscany", img: npc("tuscany") },
					{ id: sideQuests + "-6-03", text: "Wesley", img: npc("wesley") },
					{ id: sideQuests + "-6-04", text: "Arthur", img: npc("arthur") },
					{ id: sideQuests + "-6-05", text: "Frieda", img: npc("frieda") },
					{ id: sideQuests + "-6-06", text: "Santos", img: npc("santos") },
					{ id: sideQuests + "-6-07", text: "Sunny", img: npc("sunny") },
				],
			},
		],
		[upgrades]: [
			{
				id: upgrades + "-1", text: "Upgrade your PokeGear", img: item("pokegear"), children: [
					{ id: upgrades + "-1-01", text: "Phone", img: item("phone") },
					{ id: upgrades + "-1-02", text: "Radio", img: item("radio") },
				],
			},
		],
		[collectables]: [
			{
				id: collectables + "-1", text: "Obtain all extra Key Items", children: [
					{ id: collectables + "-1-01", text: "Bike", img: item("bike") },
					{ id: collectables + "-1-02", text: "Coin Case", img: item("coin-case") },
					{ id: collectables + "-1-03", text: "Exp. Share", img: item("exp-share") },
					{ id: collectables + "-1-04", text: "Good Rod", img: item("good-rod") },
					{ id: collectables + "-1-05", text: "Item Finder", img: item("item-finder") },
					{ id: collectables + "-1-06", text: "Old Rod", img: item("old-rod") },
					{ id: collectables + "-1-07", text: "Squirtbottle", img: item("squirtbottle") },
					{ id: collectables + "-1-08", text: "Super Rod", img: item("super-rod") },
				],
			},
			{
				id: collectables + "-2",
				text: "Find all hidden items with the Item Finder",
				img: item("item-finder"),
				noCenter: true,
				type: "tiered",
				tiers: [
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
				],
				currentTier: 0,
				currentCount: 0,
				unit: "collected",
			},
		],
		[thms]: [
			{
				id: thms + "-1",
				text: "Collect all HMs",
				children: [
					{ id: thms + "-1-01", text: "HM01: Cut", img: hm("normal") },
					{ id: thms + "-1-02", text: "HM02: Fly", img: hm("flying") },
					{ id: thms + "-1-03", text: "HM03: Surf", img: hm("water") },
					{ id: thms + "-1-04", text: "HM04: Strength", img: hm("normal") },
					{ id: thms + "-1-05", text: "HM05: Flash", img: hm("normal") },
					{ id: thms + "-1-06", text: "HM06: Whirlpool", img: hm("water") },
					{ id: thms + "-1-07", text: "HM07: Waterfall", img: hm("water") },
				],
			},
			{
				id: thms + "-2",
				text: "Collect all TMs",
				children: [
					{ id: thms + "-2-01", text: "TM 01 - Dynamic Punch", img: tm("fighting") },
					{ id: thms + "-2-02", text: "TM 02 - Headbutt", img: tm("normal") },
					{ id: thms + "-2-03", text: "TM 03 - Curse", img: tm("ghost") },
					{ id: thms + "-2-04", text: "TM 04 - Rollout", img: tm("rock") },
					{ id: thms + "-2-05", text: "TM 05 - Roar", img: tm("normal") },
					{ id: thms + "-2-06", text: "TM 06 - Toxic", img: tm("poison") },
					{ id: thms + "-2-07", text: "TM 07 - Zap Cannon", img: tm("electric") },
					{ id: thms + "-2-08", text: "TM 08 - Rock Smash", img: tm("fighting") },
					{ id: thms + "-2-09", text: "TM 09 - Psych Up", img: tm("normal") },
					{ id: thms + "-2-10", text: "TM 10 - Hidden Power", img: tm("normal") },
					{ id: thms + "-2-11", text: "TM 11 - Sunny Day", img: tm("fire") },
					{ id: thms + "-2-12", text: "TM 12 - Sweet Scent", img: tm("normal") },
					{ id: thms + "-2-13", text: "TM 13 - Snore", img: tm("normal") },
					{ id: thms + "-2-14", text: "TM 14 - Blizzard", img: tm("ice") },
					{ id: thms + "-2-15", text: "TM 15 - Hyper Beam", img: tm("normal") },
					{ id: thms + "-2-16", text: "TM 16 - Icy Wind", img: tm("ice") },
					{ id: thms + "-2-17", text: "TM 17 - Protect", img: tm("normal") },
					{ id: thms + "-2-18", text: "TM 18 - Rain Dance", img: tm("water") },
					{ id: thms + "-2-19", text: "TM 19 - Giga Drain", img: tm("grass") },
					{ id: thms + "-2-20", text: "TM 20 - Endure", img: tm("normal") },
					{ id: thms + "-2-21", text: "TM 21 - Frustration", img: tm("normal") },
					{ id: thms + "-2-22", text: "TM 22 - Solar Beam", img: tm("grass") },
					{ id: thms + "-2-23", text: "TM 23 - Iron Tail", img: tm("steel") },
					{ id: thms + "-2-24", text: "TM 24 - Dragon Breath", img: tm("dragon") },
					{ id: thms + "-2-25", text: "TM 25 - Thunder", img: tm("electric") },
					{ id: thms + "-2-26", text: "TM 26 - Earthquake", img: tm("ground") },
					{ id: thms + "-2-27", text: "TM 27 - Return", img: tm("normal") },
					{ id: thms + "-2-28", text: "TM 28 - Dig", img: tm("ground") },
					{ id: thms + "-2-29", text: "TM 29 - Psychic", img: tm("psychic") },
					{ id: thms + "-2-30", text: "TM 30 - Shadow Ball", img: tm("ghost") },
					{ id: thms + "-2-31", text: "TM 31 - Mud-Slap", img: tm("ground") },
					{ id: thms + "-2-32", text: "TM 32 - Double Team", img: tm("normal") },
					{ id: thms + "-2-33", text: "TM 33 - Ice Punch", img: tm("ice") },
					{ id: thms + "-2-34", text: "TM 34 - Swagger", img: tm("normal") },
					{ id: thms + "-2-35", text: "TM 35 - Sleep Talk", img: tm("normal") },
					{ id: thms + "-2-36", text: "TM 36 - Sludge Bomb", img: tm("poison") },
					{ id: thms + "-2-37", text: "TM 37 - Sandstorm", img: tm("rock") },
					{ id: thms + "-2-38", text: "TM 38 - Fire Blast", img: tm("fire") },
					{ id: thms + "-2-39", text: "TM 39 - Swift", img: tm("normal") },
					{ id: thms + "-2-40", text: "TM 40 - Defense Curl", img: tm("normal") },
					{ id: thms + "-2-41", text: "TM 41 - Thunder Punch", img: tm("electric") },
					{ id: thms + "-2-42", text: "TM 42 - Dream Eater", img: tm("psychic") },
					{ id: thms + "-2-43", text: "TM 43 - Detect", img: tm("fighting") },
					{ id: thms + "-2-44", text: "TM 44 - Rest", img: tm("psychic") },
					{ id: thms + "-2-45", text: "TM 45 - Attract", img: tm("normal") },
					{ id: thms + "-2-46", text: "TM 46 - Thief", img: tm("dark") },
					{ id: thms + "-2-47", text: "TM 47 - Steel Wing", img: tm("steel") },
					{ id: thms + "-2-48", text: "TM 48 - Fire Punch", img: tm("fire") },
					{ id: thms + "-2-49", text: "TM 49 - Fury Cutter", img: tm("bug") },
					{ id: thms + "-2-50", text: "TM 50 - Nightmare", img: tm("ghost") },
				],
			},
		],
		[extraCredit]: [
			{ id: extraCredit + "-1", text: "Obtain Mew", img: baseSprite(151), dexSync: [regionalDex(250)] },
			{ id: extraCredit + "-2", text: "Obtain Celebi", img: baseSprite(251), dexSync: [regionalDex(251)] },
		],
	},
});
