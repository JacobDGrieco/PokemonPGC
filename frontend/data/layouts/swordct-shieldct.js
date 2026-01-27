(() => {
	const GAME_KEYS = ["swordct", "shieldct"];

	const P = (parentId) => [parentId];          			// parent-only task
	const C = (parentId, childId) => [parentId, childId]; 	// parent + child task

	const DESKTOP_LAYOUT = {
		"catching": [
			[P(1)],
			[C(1, 1), C(1, 2), C(1, 3)],
		],
		"trainer-cards": [
			[P(1)],
			[C(1, 1), C(1, 2), C(1, 3), C(1, 4), C(1, 5)],
			[C(1, 6), C(1, 7), C(1, 8), C(1, 9), C(1, 10)],
			[C(1, 11), C(1, 12), C(1, 13), C(1, 14), C(1, 15)],
			[C(1, 16), C(1, 17), C(1, 18), C(1, 19), C(1, 20)],
			[C(1, 21), C(1, 22), C(1, 23), C(1, 24), C(1, 25)],
			[C(1, 26), C(1, 27), C(1, 28), C(1, 29), C(1, 30)],
			[P(2)],
			[C(2, 1), C(2, 2), C(2, 3)],
			[P(3)],
			[C(3, 1), C(3, 2), C(3, 3)],
		],
	};

	const COMPACT_LAYOUT = DESKTOP_LAYOUT;

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
		const desktopLayout = buildTaskRowsForGame(gameKey, DESKTOP_LAYOUT);
		const compactLayout = buildTaskRowsForGame(gameKey, COMPACT_LAYOUT);

		PPGC.register({
			layoutVariants: {
				desktop: { taskRows: desktopLayout },
				compact: { taskRows: compactLayout },
			},
		});
	}
})();