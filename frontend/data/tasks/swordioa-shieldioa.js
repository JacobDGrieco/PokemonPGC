(() => {
	const gen = 8;
	const GAME_KEYS = ["swordioa", "shieldioa"];

	const baseSprite = (gameKey, natiId) => _frontSprite(gen, gameKey, natiId);
	const task = (gameKey, name) => _task(gameKey, name);
	const npc = (gameKey, name) => _npc(gameKey, name);
	const location = (gameKey, name) => _location(gameKey, name);
	const keyItem = (name) => _keyItem(gen, name);
	const trainerCard = (gameKey, type, name) => _trainerCard(gameKey, type, name);
	const tm = (type) => _tm(gen, type);

	const SECTIONS = [
		{ id: "catching", title: "Gotta Catch 'Em All" },
		{ id: "story", title: "Main Story" },
		{ id: "side-quests", title: "Side Quests" },
		{ id: "battle", title: "Battle" },
		{ id: "upgrades", title: "Upgrades" },
		{ id: "collectables", title: "Collectables" },
		{ id: "trainer-cards", title: "Trainer Card" },
		{ id: "fashion", title: "Fashion" },
	];

	const TASKS_BY_SECTION = {
		"catching": [
			{
				id: 1, text: "Catch all the Legendaries", children: [
					{ id: 1, text: "Obtain for Kubfu", img: ({ gameKey }) => baseSprite(gameKey, 891) },
					{
						id: 2, text: "Evolve to Urshifu (Single Strike or Rapid Strike)", img: ({ gameKey }) => [baseSprite(gameKey, 892), baseSprite(gameKey, "892-r")], type: "either", options: {
							left: { text: "" }, right: { text: "" },
						},
					},
				],
			},
		],
		"trainer-cards": [
			{
				id: 1, text: "Obtain all League Card Backgrounds", children: [
					{ id: 1, text: "Master Dojo (Kitchen)", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "master-dojo-kitchen") },
					{ id: 2, text: "Master Dojo", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "master-dojo") },
					{ id: 3, text: "Master Dojo (Night)", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "master-dojo-night") },
					{ id: 4, text: "Master Dojo (Path)", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "master-dojo-path") },
					{ id: 5, text: "Master Dojo (Dojo)", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "master-dojo-dojo") },
					{ id: 6, text: "Cram-o-matic", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "cram-o-matic") },
					{ id: 7, text: "Tower of Darkness/Waters", img: ({ gameKey }) => [trainerCard(gameKey, "backgrounds", "tower-of-darkness"), trainerCard(gameKey, "backgrounds", "tower-of-waters")] },
					{ id: 8, text: "Tower of Darkness/Waters (Night)", img: ({ gameKey }) => [trainerCard(gameKey, "backgrounds", "tower-of-darkness-night"), trainerCard(gameKey, "backgrounds", "tower-of-waters-night")] },
					{ id: 9, text: "Soothing Wetlands", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "soothing-wetlands") },
					{ id: 10, text: "Soothing Wetlands (Night)", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "soothing-wetlands-night") },
					{ id: 11, text: "Loop Lagoon", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "loop-lagoon") },
					{ id: 12, text: "Loop Lagoon (Night)", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "loop-lagoon-night") },
					{ id: 13, text: "Workout Sea", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "workout-sea") },
					{ id: 14, text: "Workout Sea (Night)", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "workout-sea-night") },
					{ id: 15, text: "Forest of Focus", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "forest-of-focus") },
					{ id: 16, text: "Forest of Focus (Night)", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "forest-of-focus-night") },
					{ id: 17, text: "Potbottom Desert", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "potbottom-desert") },
					{ id: 18, text: "Potbottom Desert (Night)", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "potbottom-desert-night") },
					{ id: 19, text: "Honeycalm Island", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "honeycalm-island") },
					{ id: 20, text: "Honeycalm Island (Night)", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "honeycalm-island-night") },
					{ id: 21, text: "Master Dojo (Logo)", img: ({ gameKey }) => trainerCard(gameKey, "backgrounds", "master-dojo-logo") },
				]
			},
			{
				id: 2, text: "Obtain all League Card Effects", children: [
					{ id: 1, text: "Effect 21", img: ({ gameKey }) => trainerCard(gameKey, "effects", "22") },
					{ id: 2, text: "Effect 22", img: ({ gameKey }) => trainerCard(gameKey, "effects", "23") },
					{ id: 3, text: "Effect 23", img: ({ gameKey }) => trainerCard(gameKey, "effects", "24") },
				]
			},
			{
				id: 3, text: "Obtain all League Card Frames", children: [
					{ id: 1, text: "Frame 18", img: ({ gameKey }) => trainerCard(gameKey, "frames", "20") },
					{ id: 2, text: "Frame 19", img: ({ gameKey }) => trainerCard(gameKey, "frames", "21") },
					{ id: 3, text: "Frame 20", img: ({ gameKey }) => trainerCard(gameKey, "frames", "22") },
					{ id: 4, text: "Frame 21", img: ({ gameKey }) => trainerCard(gameKey, "frames", "23") },
				]
			},
		],
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

		function mapTask(sectionSuffix, t, parentId = null) {
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
				out.children = out.children.map((c) => mapTask(sectionSuffix, c, parentId));
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
				(arr || []).map((t) => mapTask(sectionSuffix, t)),
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