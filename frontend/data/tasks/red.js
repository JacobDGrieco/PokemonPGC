(() => {
	const gen = 1;
	const GAME_KEYS = ["red", "blue"];

	const SECTIONS = [
		{ id: "catching", title: "Gotta Catch 'Em All" },
		{ id: "story", title: "Main Story" },
		{ id: "collectables", title: "Collectables" },
		{ id: "thms", title: "TMs/HMs" },
		{ id: "extra-credit", title: "Extra Credit" },
	];

	const TASKS_BY_SECTION = {
		"catching": [
			{
				id: 1, text: "Catch all the Legendaries", children: [
					{ id: 1, text: "Catch Articuno", img: () => baseSprite(144), imgS: () => shinySprite(144), tooltip: "Found at the bottom of the Seafoam Islands" },
					{ id: 2, text: "Catch Zapdos", img: () => baseSprite(145), imgS: () => shinySprite(145), tooltip: "Found at the end of the Power Plant" },
					{ id: 3, text: "Catch Moltres", img: () => baseSprite(146), imgS: () => shinySprite(146), tooltip: "Found in the middle of Victory Road" },
					{ id: 4, text: "Catch Mewtwo", img: () => baseSprite(150), imgS: () => shinySprite(150), tooltip: "Found at the bottom of Cerulean Cave" },
				],
			},
			{
				id: 2, text: "Catch both Snorlax", children: [
					{ id: 1, text: "Route 12", img: () => bwTask("snorlax-12"), imgS: () => coloredTask("snorlax-12") },
					{ id: 2, text: "Route 16", img: () => bwTask("snorlax-16"), imgS: () => coloredTask("snorlax-16") },
				],
			},
			{
				id: 3, text: "Obtain all In-Game Gift Pokémon", children: [
					{ id: 1, text: "Hitmonlee/Hitmonchan", img: () => bwTask("hitmonlee-hitmonchan"), imgS: () => coloredTask("hitmonlee-hitmonchan") },
					{ id: 2, text: "Omanyte/Kabuto", img: () => bwTask("omanyte-kabuto"), imgS: () => coloredTask("omanyte-kabuto") },
					{ id: 3, text: "Lapras", img: () => baseSprite(131), imgS: () => shinySprite(131) },
					{ id: 4, text: "Aerodactyl", img: () => baseSprite(142), imgS: () => shinySprite(142) },
					{ id: 5, text: "Eevee", img: () => baseSprite(133), imgS: () => shinySprite(133) },
				],
			},
			{
				id: 4, text: "Complete all In-Game Trades", children: [
					{ id: 1, text: "Abra for Mr. Mime", img: () => bwTask("abra-for-mrmime"), imgS: () => coloredTask("abra-for-mrmime") },
					{ id: 2, text: "Nidoran ♂ for Nidoran ♀", img: () => bwTask("nidoranm-for-nidoranf"), imgS: () => coloredTask("nidoranm-for-nidoranf") },
					{ id: 3, text: "Nidorino for Nidorina", img: () => bwTask("nidorino-for-nidorina"), imgS: () => coloredTask("nidorino-for-nidorina") },
					{ id: 4, text: "Slowbro for Lickitung", img: () => bwTask("slowbro-for-lickitung"), imgS: () => coloredTask("slowbro-for-lickitung") },
					{ id: 5, text: "Poliwhirl for Jynx", img: () => bwTask("poliwhirl-for-jynx"), imgS: () => coloredTask("poliwhirl-for-jynx") },
					{ id: 6, text: "Spearow for Farfetch'd", img: () => bwTask("spearow-for-farfetchd"), imgS: () => coloredTask("spearow-for-farfetchd") },
					{ id: 7, text: "Ponyta for Seel", img: () => bwTask("ponyta-for-seel"), imgS: () => coloredTask("ponyta-for-seel") },
					{ id: 8, text: "Raichu for Electrode", img: () => bwTask("raichu-for-electrode"), imgS: () => coloredTask("raichu-for-electrode") },
					{ id: 9, text: "Venonant for Tangela", img: () => bwTask("venonat-for-tangela"), imgS: () => coloredTask("venonat-for-tangela") },
				],
			},
		],
		"story": [
			{ id: 1, text: "Collect all 8 Gym Badges and Defeat the Elite 4", img: () => _badges(["boulder", "cascade", "thunder", "rainbow", "soul", "marsh", "volcano", "earth"]), noCenter: true },
			{
				id: 2, text: "Epilogue", noCenter: true, children: [
					{ id: 1, text: "Catch Mewtwo", img: () => baseSprite(150), imgS: () => shinySprite(150), tooltip: "Found at the bottom of Cerulean Cave" },
				],
			},
		],
		"collectables": [
			{
				id: 1, text: "Obtain all Key Items", children: [
					{ id: 1, text: "Coin Case", img: () => item("coin-case") },
					{ id: 2, text: "Exp. All", img: () => item("exp-all") },
					{ id: 3, text: "Good Rod", img: () => item("good-rod") },
					{ id: 4, text: "Item Finder", img: () => item("item-finder") },
					{ id: 5, text: "Old Rod", img: () => item("old-rod") },
					{ id: 6, text: "Poke Flute", img: () => item("poke-flute") },
					{ id: 7, text: "Super Rod", img: () => item("super-rod") },
				]
			},
			{ id: 2, text: "Find all hidden items with the Item Finder", img: () => item("item-finder"), noCenter: true, type: "tiered", tiers: [range(1, 54)], },
		],
		"thms": [
			{
				id: 1, text: "Collect all HMs", children: [
					{ id: 1, text: "HM01: Cut", img: () => hm("normal") },
					{ id: 2, text: "HM02: Fly", img: () => hm("flying") },
					{ id: 3, text: "HM03: Surf", img: () => hm("water") },
					{ id: 4, text: "HM04: Strength", img: () => hm("normal") },
					{ id: 5, text: "HM05: Flash", img: () => hm("normal") },
				],
			},
			{
				id: 2, text: "Collect all TMs", children: [
					{ id: 1, text: "TM 01 - Mega Punch", img: () => tm("normal") },
					{ id: 2, text: "TM 02 - Razor Wind", img: () => tm("normal") },
					{ id: 3, text: "TM 03 - Swords Dance", img: () => tm("normal") },
					{ id: 4, text: "TM 04 - Whirlwind", img: () => tm("normal") },
					{ id: 5, text: "TM 05 - Mega Kick", img: () => tm("normal") },
					{ id: 6, text: "TM 06 - Toxic", img: () => tm("poison") },
					{ id: 7, text: "TM 07 - Horn Drill", img: () => tm("normal") },
					{ id: 8, text: "TM 08 - Body Slam", img: () => tm("normal") },
					{ id: 9, text: "TM 09 - Take Down", img: () => tm("normal") },
					{ id: 10, text: "TM 10 - Double-Edge", img: () => tm("normal") },
					{ id: 11, text: "TM 11 - Bubble Beam", img: () => tm("water") },
					{ id: 12, text: "TM 12 - Water Gun", img: () => tm("water") },
					{ id: 13, text: "TM 13 - Ice Beam", img: () => tm("ice") },
					{ id: 14, text: "TM 14 - Blizzard", img: () => tm("ice") },
					{ id: 15, text: "TM 15 - Hyper Beam", img: () => tm("normal") },
					{ id: 16, text: "TM 16 - Pay Day", img: () => tm("normal") },
					{ id: 17, text: "TM 17 - Submission", img: () => tm("fighting") },
					{ id: 18, text: "TM 18 - Counter", img: () => tm("fighting") },
					{ id: 19, text: "TM 19 - Seismic Toss", img: () => tm("fighting") },
					{ id: 20, text: "TM 20 - Rage", img: () => tm("normal") },
					{ id: 21, text: "TM 21 - Mega Drain", img: () => tm("grass") },
					{ id: 22, text: "TM 22 - Solar Beam", img: () => tm("grass") },
					{ id: 23, text: "TM 23 - Dragon Rage", img: () => tm("dragon") },
					{ id: 24, text: "TM 24 - Thunderbolt", img: () => tm("electric") },
					{ id: 25, text: "TM 25 - Thunder", img: () => tm("electric") },
					{ id: 26, text: "TM 26 - Earthquake", img: () => tm("ground") },
					{ id: 27, text: "TM 27 - Fissure", img: () => tm("ground") },
					{ id: 28, text: "TM 28 - Dig", img: () => tm("ground") },
					{ id: 29, text: "TM 29 - Psychic", img: () => tm("psychic") },
					{ id: 30, text: "TM 30 - Teleport", img: () => tm("psychic") },
					{ id: 31, text: "TM 31 - Mimic", img: () => tm("normal") },
					{ id: 32, text: "TM 32 - Double Team", img: () => tm("normal") },
					{ id: 33, text: "TM 33 - Reflect", img: () => tm("psychic") },
					{ id: 34, text: "TM 34 - Bide", img: () => tm("normal") },
					{ id: 35, text: "TM 35 - Metronome", img: () => tm("normal") },
					{ id: 36, text: "TM 36 - Self-Destruct", img: () => tm("normal") },
					{ id: 37, text: "TM 37 - Egg Bomb", img: () => tm("normal") },
					{ id: 38, text: "TM 38 - Fire Blast", img: () => tm("fire") },
					{ id: 39, text: "TM 39 - Swift", img: () => tm("normal") },
					{ id: 40, text: "TM 40 - Skull Bash", img: () => tm("normal") },
					{ id: 41, text: "TM 41 - Soft-Boiled", img: () => tm("normal") },
					{ id: 42, text: "TM 42 - Dream Eater", img: () => tm("psychic") },
					{ id: 43, text: "TM 43 - Sky Attack", img: () => tm("flying") },
					{ id: 44, text: "TM 44 - Rest", img: () => tm("psychic") },
					{ id: 45, text: "TM 45 - Thunder Wave", img: () => tm("electric") },
					{ id: 46, text: "TM 46 - Psywave", img: () => tm("psychic") },
					{ id: 47, text: "TM 47 - Explosion", img: () => tm("normal") },
					{ id: 48, text: "TM 48 - Rock Slide", img: () => tm("rock") },
					{ id: 49, text: "TM 49 - Tri Attack", img: () => tm("normal") },
					{ id: 50, text: "TM 50 - Substitute", img: () => tm("normal") },
				]
			},
		],
		"extra-credit": [
			{ id: 1, text: "Obtain Mew", img: () => baseSprite(151), imgS: () => shinySprite(151) },
		],
	};

	window.DATA = window.DATA || {};
	window.DATA.sections = window.DATA.sections || {};
	window.DATA.tasks = window.DATA.tasks || {};

	function buildGen1SeedsFor(gameKey) {
		// Per-game helpers (same idea as buildDexFor)
		const baseSprite = (natiId) => _frontSprite(gen, gameKey, natiId);
		const shinySprite = (natiId) => _frontSpriteShiny(gen, gameKey, natiId);
		const bwTask = (id) => _task1(gameKey, "bw", id);
		const coloredTask = (id) => _task1(gameKey, "colored", id);
		const item = (id) => _item(gameKey, id);
		const hm = (type) => _hm(gen, type);
		const tm = (type) => _tm(gen, type);

		const prefixSectionId = (sid) => `${gameKey}:${sid}`;

		const taskIdRoot = (sectionSuffix, parentId) =>
			`${gameKey}:${sectionSuffix}:${pad3(parentId)}`;

		const taskIdChild = (sectionSuffix, parentId, childId) =>
			`${taskIdRoot(sectionSuffix, parentId)}:${pad3(childId)}`;

		function resolveTaskRef(ref) {
			const parts = String(ref).split(":");
			const section = parts[0];
			const parent = Number(parts[1]);
			const child = parts.length >= 3 ? Number(parts[2]) : null;
			if (!section || !parent) return ref;

			return child == null
				? `${gameKey}:${section}:${pad3(parent)}`
				: `${gameKey}:${section}:${pad3(parent)}:${pad3(child)}`;
		}

		// IMPORTANT:
		// Rebind any img/imgS lambdas so they close over *this* build's helpers.
		// We do that by cloning each task and wrapping its existing img/imgS.
		function rebindImgs(task) {
			const out = { ...task };

			if (typeof out.img === "function") {
				const fn = out.img;
				out.img = () => fn.call(null); // fn references baseSprite/bwTask/etc in this scope
			}
			if (typeof out.imgS === "function") {
				const fn = out.imgS;
				out.imgS = () => fn.call(null);
			}

			if (Array.isArray(out.children)) out.children = out.children.map(rebindImgs);
			return out;
		}

		function mapTask(sectionSuffix, t, parentId = null) {
			// clone + id rewrite
			let out = { ...t };

			if (parentId === null) {
				const parent = Number(out.id);
				out.id = taskIdRoot(sectionSuffix, parent);
				parentId = parent;
			} else {
				const child = Number(out.id);
				out.id = taskIdChild(sectionSuffix, parentId, child);
			}

			if (Array.isArray(out.children)) {
				out.children = out.children.map((c) => mapTask(sectionSuffix, c, parentId));
			}

			if (Array.isArray(out.taskSync)) {
				out.taskSync = out.taskSync.map(resolveTaskRef);
			}

			// NOW rebind img/imgS lambdas in this subtree to this build's helpers
			out = rebindImgs(out);

			return out;
		}

		const sections = SECTIONS.map((s) => ({
			id: prefixSectionId(s.id),
			title: s.title,
		}));

		const tasksBySection = Object.fromEntries(
			Object.entries(TASKS_BY_SECTION).map(([sectionSuffix, arr]) => [
				`${gameKey}:${sectionSuffix}`,
				(arr || []).map((t) => mapTask(sectionSuffix, t)),
			])
		);

		// keep these in scope so img lambdas can see them (DO NOT remove as “unused”)
		void baseSprite; void shinySprite; void bwTask; void coloredTask; void item; void hm; void tm;

		return { sections, tasksBySection };
	}

	for (const gk of GAME_KEYS) {
		const { sections, tasksBySection } = buildGen1SeedsFor(gk);

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