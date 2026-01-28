(() => {
	const gen = 9;
	const GAME_KEYS = ["scarletid", "violetid"];

	const baseSprite = (gameKey, natiId) => _frontSprite(gen, gameKey, natiId);
	const task = (gameKey, name) => _task(gameKey, name);
	const npc = (gameKey, name) => _npc(gameKey, name);
	const location = (gameKey, name) => _location(gameKey, name);
	const keyItem = (name) => _keyItem(gen, name);
	const tm = (type) => _tm(gen, type);

	const SECTIONS = [
		{ id: "catching", title: "Gotta Catch 'Em All" },
		{ id: "story", title: "Main Story" },
		{ id: "side-quests", title: "Side Quests" },
		{ id: "activities", title: "Activities" },
		{ id: "battle", title: "Battle" },
		{ id: "upgrades", title: "Upgrades" },
		{ id: "collectables", title: "Collectables" },
		{ id: "fashion", title: "Fashion" },
		{ id: "thms", title: "TMs" },
	];

	const TASKS_BY_SECTION = {
		"catching": [
			{
				id: 1, text: "Catch all the Legendaries", children: [
					{ id: 1, text: "Catch Terapagos", img: ({ gameKey }) => baseSprite(gameKey, 1024) },
				],
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