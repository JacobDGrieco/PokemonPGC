(() => {
	const GAME_KEYS = ["red", "blue"];

	// Row helpers (authoring-time only)
	const P = (parentId) => [parentId];          // parent-only task
	const C = (parentId, childId) => [parentId, childId]; // parent + child task

	const SHARED_LAYOUT = {
		catching: [
			[P(1)],
			[C(1, 1), C(1, 2), C(1, 3), C(1, 4)],
		],
		story: [
			[P(1)],
			[P(2)],
			[C(2, 1)],
		],
	};

	function buildTaskRowsForGame(gameKey, sharedLayout) {
		const out = {};

		for (const [sectionSuffix, rows] of Object.entries(sharedLayout)) {
			const sectionKey = `${gameKey}:${sectionSuffix}`;

			out[sectionKey] = (rows || []).map((row) =>
				(row || []).map((ref) => {
					if (typeof ref === "string") return ref;

					const parentId = ref?.[0];
					const childId = ref?.[1];

					if (parentId == null) return null;

					return childId == null
						? `${sectionKey}:${pad3(parentId)}`
						: `${sectionKey}:${pad3(parentId)}:${pad3(childId)}`;
				}).filter(Boolean)
			);
		}

		return out;
	}

	for (const gameKey of GAME_KEYS) {
		const taskRows = buildTaskRowsForGame(gameKey, SHARED_LAYOUT);

		PPGC.register({
			layoutVariants: {
				desktop: { taskRows },
				compact: {},
			},
		});
	}
})();