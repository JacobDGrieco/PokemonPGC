(() => {
	const gen = 3;
	const GAME_KEYS = ["ruby", "sapphire"];

	const baseSprite = (gameKey, natiId) => _frontSprite(gen, gameKey, natiId);
	const task = (gameKey, name) => _task(gameKey, name);
	const npc = (gameKey, name) => _npc(gameKey, name);
	const location = (gameKey, name) => _location(gameKey, name);
	const keyItem = (name) => _keyItem(gen, name);
	const hm = (type) => _hm(gen, type);
	const tm = (type) => _tm(gen, type);

	const SECTIONS = [
		{ id: "catching", title: "Gotta Catch 'Em All" },
		{ id: "story", title: "Main Story" },
		{ id: "activities", title: "Activities" },
		{ id: "battle", title: "Battle" },
		{ id: "upgrades", title: "Upgrades" },
		{ id: "collectables", title: "Collectables" },
		{ id: "thms", title: "TMs/HMs" },
		{ id: "distributions", title: "Distributions" },
		{ id: "extra-credit", title: "Extra Credit" },
	];

	const TASKS_BY_SECTION = {
		"catching": [
			{
				id: 1, text: "Catch all the Legendaries", children: [
					{ id: 1, text: "Catch/Trade for Kyogre", img: ({ gameKey }) => baseSprite(gameKey, 382), },		// Need to set to Catch or Trade for games
					{ id: 2, text: "Catch/Trade for Groudon", img: ({ gameKey }) => baseSprite(gameKey, 383), },	// Need to set to Catch or Trade for games
					{ id: 3, text: "Catch Rayquaza", img: ({ gameKey }) => baseSprite(gameKey, 384), },
					{ id: 4, text: "Catch Regirock", img: ({ gameKey }) => baseSprite(gameKey, 377), },
					{ id: 5, text: "Catch Regice", img: ({ gameKey }) => baseSprite(gameKey, 378), },
					{ id: 6, text: "Catch Registeel", img: ({ gameKey }) => baseSprite(gameKey, 379), },
					{ id: 7, text: "Catch/Trade for Latias", img: ({ gameKey }) => baseSprite(gameKey, 380), }, 	// Need to set to Catch or Trade for games
					{ id: 8, text: "Catch/Trade for Latios", img: ({ gameKey }) => baseSprite(gameKey, 381), },		// Need to set to Catch or Trade for games
				],
			},
			{
				id: 2, text: "Obtain all In-Game Gift Pokémon", children: [
					{ id: 1, text: "Lileep / Anorith", img: ({ gameKey }) => task(gameKey, "lileep-anorith") },
					{ id: 2, text: "Beldum", img: ({ gameKey }) => baseSprite(gameKey, 374) },
					{ id: 3, text: "Castform", img: ({ gameKey }) => baseSprite(gameKey, 351) },
					{ id: 4, text: "Wynaut", img: ({ gameKey }) => baseSprite(gameKey, 360) },
				],
			},
			{
				id: 3, text: "Complete all In-Game Trades", children: [
					{ id: 1, text: "Slakoth for Makuhita", img: ({ gameKey }) => task(gameKey, "slakoth-for-makuhita") },
					{ id: 2, text: "Pikachu for Skitty", img: ({ gameKey }) => task(gameKey, "pikachu-for-skitty") },
					{ id: 3, text: "Bellossum for Corsola", img: ({ gameKey }) => task(gameKey, "bellossum-for-corsola") },
				],
			},
		],
		"story": [
			{ id: 1, text: "Collect all 8 Gym Badges and Defeat the Elite 4", img: () => _badges(["stone", "knuckle", "dynamo", "heat", "balance", "feather", "mind", "rain"]), noCenter: true, },
		],
		"activities": [
			{
				id: 1, text: "Master all the Contests", noCenter: true, children: [
					{ id: 1, text: "Beauty Contests", type: "tiered", tiers: ["Normal", "Super", "Hyper", "Master"], },
					{ id: 2, text: "Tough Contests", type: "tiered", tiers: ["Normal", "Super", "Hyper", "Master"], },
					{ id: 3, text: "Cuteness Contests", type: "tiered", tiers: ["Normal", "Super", "Hyper", "Master"], },
					{ id: 4, text: "Coolness Contests", type: "tiered", tiers: ["Normal", "Super", "Hyper", "Master"], },
					{ id: 5, text: "Smartness Contests", type: "tiered", tiers: ["Normal", "Super", "Hyper", "Master"], },
				],
			},
			{ id: 2, text: "Complete all chambers of the Trick House", type: "tiered", tiers: [range(1, 8)], },
		],
		"battle": [
			{ id: 1, text: "Master the Battle Tower", noCenter: true, type: "tiered", tiers: ["Singles", "Doubles", "Multi"], },
			{ id: 2, text: "Defeat the Winstrate Household", noCenter: true },
		],
		"upgrades": [
			{ id: 1, text: "Obtain the National PokeDex", noCenter: true },
			{
				id: 2, text: "Obtain the Gold 4-Star Trainer Card", noCenter: true, children: [
					{ id: 1, text: "Defeat the Elite 4/Champion" },
					{ id: 2, text: "Win all Master Rank Contests" },
					{ id: 3, text: "Defeat the 50 trainer challenge in the Battle Tower" },
					{ id: 4, text: "Complete the Hoenn Regional PokeDex" },
				],
			},
		],
		"collectables": [
			{
				id: 1, text: "Obtain all extra Key Items", children: [
					{ id: 1, text: "Exp. Share", img: () => keyItem("exp-share") },
					{ id: 2, text: "Go-Goggles", img: () => keyItem("go-goggles") },
					{ id: 3, text: "Good Rod", img: () => keyItem("good-rod") },
					{ id: 4, text: "Item Finder", img: () => keyItem("item-finder") },
					{ id: 5, text: "Old Rod", img: () => keyItem("old-rod") },
					{ id: 6, text: "PokeBlock Case", img: () => keyItem("pokeblock-case") },
					{ id: 7, text: "Soot Sack", img: () => keyItem("soot-sack") },
					{ id: 8, text: "Super Rod", img: () => keyItem("super-rod") },
					{ id: 9, text: "Wailmer Pail", img: () => keyItem("wailmer-pail") },
				],
			},
			{
				id: 2, text: "Obtain all items from collecting soot", children: [
					{ id: 1, text: "Pretty Chair", img: () => keyItem("pretty-chair") },
					{ id: 2, text: "Pretty Desk", img: () => keyItem("pretty-desk") },
				],
			},
			{ id: 3, text: "Find all hidden items with the Item Finder", img: () => keyItem("item-finder"), noCenter: true, type: "tiered", tiers: [range(1, 97)], },
		],
		"thms": [
			{
				id: 1, text: "Collect all HMs", children: [
					{ id: 1, text: "HM01: Cut", img: () => hm("normal") },
					{ id: 2, text: "HM02: Fly", img: () => hm("flying") },
					{ id: 3, text: "HM03: Surf", img: () => hm("water") },
					{ id: 4, text: "HM04: Strength", img: () => hm("normal") },
					{ id: 5, text: "HM05: Flash", img: () => hm("normal") },
					{ id: 6, text: "HM06: Rock Smash", img: () => hm("fighting") },
					{ id: 7, text: "HM07: Waterfall", img: () => hm("water") },
					{ id: 8, text: "HM08: Dive", img: () => hm("water") },
				],
			},
			{
				id: 2, text: "Collect all HMs", children: [
					{ id: 1, text: "TM 01 - Focus Punch", img: () => tm("fighting") },
					{ id: 2, text: "TM 02 - Dragon Claw", img: () => tm("dragon") },
					{ id: 3, text: "TM 03 - Water Pulse", img: () => tm("water") },
					{ id: 4, text: "TM 04 - Calm Mind", img: () => tm("psychic") },
					{ id: 5, text: "TM 05 - Roar", img: () => tm("normal") },
					{ id: 6, text: "TM 06 - Toxic", img: () => tm("poison") },
					{ id: 7, text: "TM 07 - Hail", img: () => tm("ice") },
					{ id: 8, text: "TM 08 - Bulk Up", img: () => tm("fighting") },
					{ id: 9, text: "TM 09 - Bullet Seed", img: () => tm("grass") },
					{ id: 10, text: "TM 10 - Hidden Power", img: () => tm("normal") },
					{ id: 11, text: "TM 11 - Sunny Day", img: () => tm("fire") },
					{ id: 12, text: "TM 12 - Taunt", img: () => tm("dark") },
					{ id: 13, text: "TM 13 - Ice Beam", img: () => tm("ice") },
					{ id: 14, text: "TM 14 - Blizzard", img: () => tm("ice") },
					{ id: 15, text: "TM 15 - Hyper Beam", img: () => tm("normal") },
					{ id: 16, text: "TM 16 - Light Screen", img: () => tm("psychic") },
					{ id: 17, text: "TM 17 - Protect", img: () => tm("normal") },
					{ id: 18, text: "TM 18 - Rain Dance", img: () => tm("water") },
					{ id: 19, text: "TM 19 - Giga Drain", img: () => tm("grass") },
					{ id: 20, text: "TM 20 - Safeguard", img: () => tm("normal") },
					{ id: 21, text: "TM 21 - Frustration", img: () => tm("normal") },
					{ id: 22, text: "TM 22 - Solar Beam", img: () => tm("grass") },
					{ id: 23, text: "TM 23 - Iron Tail", img: () => tm("steel") },
					{ id: 24, text: "TM 24 - Thunderbolt", img: () => tm("electric") },
					{ id: 25, text: "TM 25 - Thunder", img: () => tm("electric") },
					{ id: 26, text: "TM 26 - Earthquake", img: () => tm("ground") },
					{ id: 27, text: "TM 27 - Return", img: () => tm("normal") },
					{ id: 28, text: "TM 28 - Dig", img: () => tm("ground") },
					{ id: 29, text: "TM 29 - Psychic", img: () => tm("psychic") },
					{ id: 30, text: "TM 30 - Shadow Ball", img: () => tm("ghost") },
					{ id: 31, text: "TM 31 - Brick Break", img: () => tm("fighting") },
					{ id: 32, text: "TM 32 - Double Team", img: () => tm("normal") },
					{ id: 33, text: "TM 33 - Reflect", img: () => tm("psychic") },
					{ id: 34, text: "TM 34 - Shock Wave", img: () => tm("electric") },
					{ id: 35, text: "TM 35 - Flamethrower", img: () => tm("fire") },
					{ id: 36, text: "TM 36 - Sludge Bomb", img: () => tm("poison") },
					{ id: 37, text: "TM 37 - Sandstorm", img: () => tm("rock") },
					{ id: 38, text: "TM 38 - Fire Blast", img: () => tm("fire") },
					{ id: 39, text: "TM 39 - Rock Tomb", img: () => tm("rock") },
					{ id: 40, text: "TM 40 - Aerial Ace", img: () => tm("flying") },
					{ id: 41, text: "TM 41 - Torment", img: () => tm("dark") },
					{ id: 42, text: "TM 42 - Facade", img: () => tm("normal") },
					{ id: 43, text: "TM 43 - Secret Power", img: () => tm("normal") },
					{ id: 44, text: "TM 44 - Rest", img: () => tm("psychic") },
					{ id: 45, text: "TM 45 - Attract", img: () => tm("normal") },
					{ id: 46, text: "TM 46 - Thief", img: () => tm("dark") },
					{ id: 47, text: "TM 47 - Steel Wing", img: () => tm("steel") },
					{ id: 48, text: "TM 48 - Skill Swap", img: () => tm("psychic") },
					{ id: 49, text: "TM 49 - Snatch", img: () => tm("dark") },
					{ id: 50, text: "TM 50 - Overheat", img: () => tm("fire") },
				],
			},
		],
		"extra-credit": [
			{ id: 1, text: "Obtain Jirachi", img: ({ gameKey }) => baseSprite(gameKey, 385), },
			{ id: 2, text: "Obtain Deoxys", img: ({ gameKey }) => baseSprite(gameKey, 386), },
		]
	};

	window.DATA = window.DATA || {};
	window.DATA.sections = window.DATA.sections || {};
	window.DATA.tasks = window.DATA.tasks || {};

	function buildSeedsFor(gameKey) {
		const prefixSectionId = (sid) => `${gameKey}:${sid}`;

		const taskIdRoot = (sectionSuffix, parentId) =>
			`${gameKey}:${sectionSuffix}:${pad3(parentId)}`;

		const taskIdChild = (sectionSuffix, parentId, childId) =>
			`${taskIdRoot(sectionSuffix, parentId)}:${pad3(childId)}`;

		function bindGameKeyFn(fn) {
			if (typeof fn !== "function") return fn;
			return (ctx) => fn({ ...(ctx || {}), gameKey });
		}

		function maptask(gameKey, sectionSuffix, t, parentId = null) {
			const out = { ...t };

			if (out.img) out.img = bindGameKeyFn(out.img);
			if (out.imgS) out.imgS = bindGameKeyFn(out.imgS);

			if (parentId === null) {
				const parent = Number(out.id);
				out.id = taskIdRoot(sectionSuffix, parent);
				parentId = parent;
			} else {
				const child = Number(out.id);
				out.id = taskIdChild(sectionSuffix, parentId, child);
			}

			if (Array.isArray(out.children)) {
				out.children = out.children.map((c) => maptask(gameKey, sectionSuffix, c, parentId));
			}

			return out;
		}

		const sections = SECTIONS.map((s) => ({
			id: prefixSectionId(s.id),
			title: s.title,
		}));

		const tasksBySection = Object.fromEntries(
			Object.entries(TASKS_BY_SECTION).map(([sectionSuffix, arr]) => [
				`${gameKey}:${sectionSuffix}`,
				(arr || []).map((t) => maptask(gameKey, sectionSuffix, t)),
			])
		);

		return { sections, tasksBySection };
	}


	for (const gk of GAME_KEYS) {
		const { sections, tasksBySection } = buildSeedsFor(gk);

		window.DATA.sections[gk] = sections;
		for (const [sectionId, arr] of Object.entries(tasksBySection)) {
			window.DATA.tasks[sectionId] = arr;
		}
	}

	try {
		window.PPGC = window.PPGC || {};
		window.PPGC._seedTaskRegistry = null;
	} catch { }
})();