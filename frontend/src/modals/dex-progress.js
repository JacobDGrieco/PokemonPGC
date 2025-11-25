// dex-progress.js
// Helper functions for dex completion percentages (species/forms/research).

// Local copy of normalizeFlag from dex.js – keep in sync if you change it there.
function normalizeFlag(v) {
	return String(v || "unknown")
		.trim()
		.toLowerCase()
		.replace(/\s+/g, "_");
}

// Local copy of isCompletedForGame from dex.js.
function isCompletedForGame(game, val) {
	const v = normalizeFlag(val);
	const comps = (game?.completionFlags || ["caught"]).map(normalizeFlag);
	return comps.includes(v);
}

// Local copy of mythical-form helper.
const _isMythicalForm = (f) => typeof f === "object" && !!f.mythical;

// Local copy of _getDexFormsNode from dex.js.
function _getDexFormsNode(store, gameKey, monId) {
	const map = store.dexFormsStatus.get(gameKey) || {};
	const node = map[monId] || { all: false, forms: {} };
	return { map, node };
}

/**
 * Internal helper: aggregate research entries for a game into base vs extra stats.
 * Mirrors _researchStatsFor in dex.js – keep in sync if that changes.
 */
export function researchStatsFor(gameKey, store) {
	const dex = window.DATA.dex?.[gameKey] || [];
	const researchMap =
		store.dexResearchStatus instanceof Map
			? store.dexResearchStatus.get(gameKey) || {}
			: {};

	let baseTotal = 0,
		extraTotal = 0,
		baseDone = 0,
		extraDone = 0;

	for (const m of dex) {
		const tasks = Array.isArray(m.research) ? m.research : [];
		if (!tasks.length) continue;

		const isExtraSpecies = !!m.mythical; // mythicals = extra credit
		const rec = researchMap[m.id] || {};

		tasks.forEach((t, idx) => {
			const tiers = Array.isArray(t.tiers) ? t.tiers : [];
			const steps = tiers.length || 1;

			// Support legacy boolean (true = full, false/undefined = 0)
			const raw = rec[idx];
			const level =
				typeof raw === "number"
					? raw
					: raw
						? steps
						: 0;

			const done = level >= steps;

			if (isExtraSpecies) {
				extraTotal++;
				if (done) extraDone++;
			} else {
				baseTotal++;
				if (done) baseDone++;
			}
		});
	}

	return { baseTotal, extraTotal, baseDone, extraDone };
}

/**
 * Compute forms-only completion percentage for a game.
 * Mirrors the implementation in dex.js, but isolated here.
 */
export function formsPctFor(gameKey, genKey, store) {
	const games = window.DATA.games?.[genKey] || [];
	const game = games.find((g) => g.key === gameKey);

	// prefer National forms set if it exists
	const baseGameKey = String(gameKey).endsWith("-national")
		? String(gameKey).replace(/-national$/, "")
		: String(gameKey);
	const natKey = `${baseGameKey}-national`;
	const natDex = window.DATA.dex?.[natKey] || [];
	const haveNat = natDex.length > 0;

	const formsDex = haveNat ? natDex : (window.DATA.dex?.[gameKey] || []);
	const speciesWithForms = formsDex.filter(
		(m) => Array.isArray(m.forms) && m.forms.length
	);

	let baseTotal = 0,
		extraTotal = 0,
		baseDone = 0,
		extraDone = 0;

	for (const m of speciesWithForms) {
		const nodeKey = haveNat ? natKey : gameKey;
		const { node } = _getDexFormsNode(store, nodeKey, m.id);

		for (const f of m.forms) {
			const name = typeof f === "string" ? f : f?.name;
			if (!name) continue;

			const isExtra = _isMythicalForm(f);
			const v = normalizeFlag(node.forms?.[name] || "unknown");
			const done = isCompletedForGame(game, v);

			if (isExtra) {
				extraTotal += 1;
				if (done) extraDone += 1;
			} else {
				baseTotal += 1;
				if (done) baseDone += 1;
			}
		}
	}

	if (!baseTotal) return 0;

	const pctBase = (baseDone / baseTotal) * 100;
	const pctExtended = ((baseDone + extraDone) / baseTotal) * 100;

	// mirror species logic: show extended only when base is full
	return baseDone === baseTotal ? pctExtended : pctBase;
}

/**
 * Compute research-task completion percentage for a game.
 */
export function researchPctFor(gameKey, genKey, store) {
	void genKey; // not needed, but keeps signature consistent

	const { baseTotal, extraTotal, baseDone, extraDone } = researchStatsFor(
		gameKey,
		store
	);
	if (!baseTotal) return 0;

	const pctBase = (baseDone / baseTotal) * 100;
	const pctExtended = ((baseDone + extraDone) / baseTotal) * 100;

	// mirror species/forms: show extended only when base is full
	return baseDone === baseTotal ? pctExtended : pctBase;
}

/**
 * Hook to expose helpers on window.PPGC with store baked in.
 * Call this once from wireDexModal(store, ...).
 */
export function attachProgressHelpers(store) {
	window.PPGC = window.PPGC || {};
	window.PPGC.formsPctFor = (gameKey, genKey) =>
		formsPctFor(gameKey, genKey, store);
	window.PPGC.researchPctFor = (gameKey, genKey) =>
		researchPctFor(gameKey, genKey, store);
}
