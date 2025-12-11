// src/sync.js
//
// Build per-entity taskSync / dexSync / fashionSync arrays from central
// window.DATA.syncs definitions. This is a one-time "expand" step that
// runs at startup (called from index.js) and mutates the DATA seed objects
// before tasks/dex/fashion bootstrap.

function _ensureArray(obj, key) {
	if (!obj[key]) obj[key] = [];
	if (!Array.isArray(obj[key])) obj[key] = [obj[key]];
	return obj[key];
}

// ----- Task lookup in DATA.tasks ----------------------------------------

function _forEachSeedTask(fn) {
	const root = (window.DATA && window.DATA.tasks) || {};
	for (const [sectionId, arr] of Object.entries(root)) {
		const list = Array.isArray(arr) ? arr : [];
		(function walk(tasks, parent) {
			for (const t of tasks) {
				if (!t || typeof t !== "object") continue;
				fn({ sectionId, task: t, parent });
				if (Array.isArray(t.children) && t.children.length) {
					walk(t.children, t);
				}
			}
		})(list, null);
	}
}

function _findTaskSeedById(taskId) {
	const target = String(taskId);
	let hit = null;
	_forEachSeedTask(({ sectionId, task }) => {
		if (hit) return;
		if (String(task.id) === target) hit = { sectionId, task };
	});
	return hit;
}

// ----- Dex lookup in DATA.dex -------------------------------------------

function _resolveDexTargetKey(game, dexType) {
	if (!game) return null;
	const t = String(dexType || "regional").toLowerCase();

	// Match the same logic you already use in tasks.js
	if (t === "national") return `${game}-national`;
	if (t === "regional") return game;
	if (t === "central" || t === "coastal" || t === "mountain") {
		return `${game}-${t}`;
	}
	if (t === "melemele" || t === "akala" || t === "ulaula" || t === "poni") {
		return `${game}-${t}`;
	}
	const candidate = `${game}-${t}`;
	if (window.DATA && window.DATA.dex && window.DATA.dex[candidate]) {
		return candidate;
	}
	return game;
}

function _findDexEntrySeed(member) {
	const game = member.game;
	if (!game || member.id === undefined || member.id === null) return null;

	const dexKey = _resolveDexTargetKey(
		game,
		member.dexType || member.dex_key || member.dexTypeKey
	);
	if (!dexKey) return null;

	const list = (window.DATA && window.DATA.dex && window.DATA.dex[dexKey]) || [];
	const idNum = Number(member.id);
	const entry = list.find((e) => e && Number(e.id) === idNum);
	if (!entry) return null;

	return { dexKey, entry };
}

function _findDexFormSeed(member) {
	const base = _findDexEntrySeed(member);
	if (!base) return null;
	const { dexKey, entry } = base;

	const forms = Array.isArray(entry.forms) ? entry.forms : [];
	const targetName = member.form;
	if (!targetName) return null;

	let hit = null;

	// Try to find existing form object/string
	for (let i = 0; i < forms.length; i++) {
		const f = forms[i];
		const name = typeof f === "string" ? f : f && f.name;
		if (name === targetName) {
			hit = f;
			break;
		}
	}

	// If it exists only as a string, upgrade to an object
	if (!hit) {
		for (let i = 0; i < forms.length; i++) {
			const f = forms[i];
			if (typeof f === "string" && f === targetName) {
				hit = { name: targetName };
				forms[i] = hit;
				entry.forms = forms;
				break;
			}
		}
	}

	if (!hit || typeof hit !== "object") return null;
	return { dexKey, entry, form: hit };
}

// ----- Fashion lookup in DATA.fashion -----------------------------------

function _findFashionItemSeed(member) {
	const gameKey = member.game;
	const categoryId = member.category || member.categoryId || member.dexType;
	if (!gameKey || !categoryId) return null;

	const block = window.DATA && window.DATA.fashion && window.DATA.fashion[gameKey];
	if (!block || !Array.isArray(block.categories)) return null;

	const cat = block.categories.find((c) => c && c.id === categoryId);
	if (!cat || !Array.isArray(cat.items)) return null;

	const targetId = String(member.id);
	const item = cat.items.find((it) => String(it.id) === targetId);
	if (!item) return null;

	return { gameKey, categoryId, item };
}

// ----- Expand a single set ----------------------------------------------

function _expandOneSet(set) {
	if (!set || !Array.isArray(set.members) || set.members.length < 2) return;

	const members = set.members;

	const tasks = members.filter((m) => m && m.kind === "task");
	const dexSpecies = members.filter((m) => m && m.kind === "dex");
	const dexForms = members.filter((m) => m && m.kind === "dex-form");
	const fashionItems = members.filter(
		(m) => m && (m.kind === "fashion" || m.kind === "fashion-forms")
	);

	// ---- Task <-> Task ---------------------------------------------------
	for (const t of tasks) {
		const hit = _findTaskSeedById(t.id);
		if (!hit) continue;
		const taskObj = hit.task;

		for (const other of tasks) {
			if (!other || String(other.id) === String(t.id)) continue;
			const arr = _ensureArray(taskObj, "taskSync");
			arr.push(other.id);
		}
	}

	// ---- Task <-> Dex species / forms -----------------------------------
	for (const t of tasks) {
		const taskHit = _findTaskSeedById(t.id);
		if (!taskHit) continue;
		const taskObj = taskHit.task;

		// Species-level
		for (const d of dexSpecies) {
			const dexHit = _findDexEntrySeed(d);
			if (!dexHit) continue;

			const link = {
				game: d.game,
				dexType: d.dexType || "regional",
				id: d.id,
			};
			const arr = _ensureArray(taskObj, "dexSync");
			arr.push(link);

			// Dex entry -> task
			const dexTaskArr = _ensureArray(dexHit.entry, "taskSync");
			dexTaskArr.push(t.id);
		}

		// Form-level
		for (const df of dexForms) {
			const formHit = _findDexFormSeed(df);
			if (!formHit) continue;

			const link = {
				game: df.game,
				dexType: df.dexType || "regional",
				id: df.id,
				form: df.form,
			};
			const arr = _ensureArray(taskObj, "dexSync");
			arr.push(link);

			// Dex form -> task
			const formObj = formHit.form;
			const dexFormTaskArr = _ensureArray(formObj, "taskSync");
			dexFormTaskArr.push(t.id);
		}
	}

	// ---- Task <-> Fashion -----------------------------------------------
	for (const t of tasks) {
		const taskHit = _findTaskSeedById(t.id);
		if (!taskHit) continue;
		const taskObj = taskHit.task;

		for (const f of fashionItems) {
			const fh = _findFashionItemSeed(f);
			if (!fh) continue;

			// Task -> fashion (used by applySyncsFromTask)
			const link = {
				game: fh.gameKey,
				category: fh.categoryId,
				id: fh.item.id,
			};
			const arr = _ensureArray(taskObj, "fashionSync");
			arr.push(link);

			// Fashion -> task (used by applyTaskSyncsFromFashion)
			const fTaskArr = _ensureArray(fh.item, "taskSync");
			fTaskArr.push(t.id);
		}
	}

	// ---- Fashion <-> Fashion --------------------------------------------
	for (let i = 0; i < fashionItems.length; i++) {
		const aSpec = fashionItems[i];
		const aHit = _findFashionItemSeed(aSpec);
		if (!aHit) continue;
		const aItem = aHit.item;

		for (let j = 0; j < fashionItems.length; j++) {
			if (i === j) continue;
			const bSpec = fashionItems[j];
			const bHit = _findFashionItemSeed(bSpec);
			if (!bHit) continue;

			const link = {
				categoryId: bHit.categoryId,
				id: bHit.item.id,
			};
			const arr = _ensureArray(aItem, "fashionSync");
			arr.push(link);
		}
	}
}

// ----- Public entry point -----------------------------------------------

export function expandSyncSetsInData() {
	const syncsByGame = window.DATA.syncs || {}; // <-- syncSets, not syncs
	const allSets = [];

	for (const arr of Object.values(syncsByGame)) {
		if (!Array.isArray(arr)) continue;
		allSets.push(...arr); // spread each game's sets into allSets
	}

	if (!allSets.length) return;

	console.log("[sync] Expanding sync sets into DATA.", allSets.length);
	for (const set of allSets) {
		_expandOneSet(set);
	}
	console.log("[sync] Done expanding sync sets.");
}