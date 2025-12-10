import { save, uid } from "./store.js";

/* ===================== Color / sprite helpers ===================== */

/**
 * Extract the gameKey from a sectionId, assuming "gameKey-..." format.
 */
function gameKeyFromSection(sectionId) {
	return (sectionId || "").split("-")[0] || "";
}

/**
 * Read the global accent color from CSS (fallback to a sane default).
 */
function getAccentColor() {
	const rs = getComputedStyle(document.documentElement);
	const cssVar = rs.getPropertyValue("--accent")?.trim();
	return cssVar && cssVar !== "initial" ? cssVar : "#6aa0ff";
}

/**
 * Resolve the accent color for a given section:
 * - Prefer game.color / game.accent / game.theme.accent
 * - Fall back to DATA.colors / DATA.themes
 * - Finally fall back to the global CSS accent
 */
function resolveAccentForSection(sectionId) {
	const fallback = getAccentColor();
	const gameKey = gameKeyFromSection(sectionId);
	const gens = window.DATA?.games || {};
	let game = null;

	for (const arr of Object.values(gens)) {
		const found = (arr || []).find((g) => g.key === gameKey);
		if (found) {
			game = found;
			break;
		}
	}

	const cand =
		game?.color ||
		game?.accent ||
		game?.theme?.accent ||
		window.DATA?.colors?.[gameKey] ||
		window.DATA?.themes?.[gameKey]?.accent;

	return typeof cand === "string" && cand.trim() ? cand : fallback;
}

/**
 * For Gen 1 games, allow toggling between b/w and color task sprites.
 * For other games, always use the base img.
 */
const GEN1_COLOR_GAMES = new Set(["red", "blue", "yellow"]);
function resolveTaskImageSrcs(task, sectionId) {
	if (!task) return [];

	const normalize = (v) => {
		if (!v) return [];
		if (Array.isArray(v)) return v.filter(Boolean);
		return [v];
	};

	const baseArr = normalize(task.img);   // black/white / default
	const colorArr = normalize(task.imgS); // color sprite(s), if present

	if (!sectionId) return baseArr;

	const gameKey = gameKeyFromSection(sectionId);
	if (!GEN1_COLOR_GAMES.has(gameKey)) {
		// Only toggle for R/B/Y; everything else just uses img
		return baseArr;
	}

	const useColor = window.PPGC?.gen1SpriteColor === true;
	if (useColor && colorArr.length) return colorArr;
	return baseArr;
}

/* ===================== Tooltip helpers ===================== */

const TOOLTIP_DELAY_MS = 800;
let _tooltipEl = null;

/**
 * Lazily create & cache the shared tooltip element in the DOM.
 */
function ensureTooltipEl() {
	if (_tooltipEl) return _tooltipEl;
	const el = document.createElement("div");
	el.className = "tooltip";
	document.body.appendChild(el);
	_tooltipEl = el;
	return el;
}

function hideTooltip() {
	const el = ensureTooltipEl();
	el.classList.remove("show");
}

/**
 * Position and show tooltip near a target element.
 */
function showTooltipForTarget(targetEl, html) {
	const el = ensureTooltipEl();
	el.innerHTML = html;
	el.style.left = "-9999px"; // measure offscreen first
	el.style.top = "-9999px";
	el.removeAttribute("data-placement");

	// place above by default; if clipped, place below
	requestAnimationFrame(() => {
		const r = targetEl.getBoundingClientRect();
		const tw = el.offsetWidth;
		const th = el.offsetHeight;
		const margin = 8;
		let top = r.top - th - margin;
		let left = r.left + r.width / 2 - tw / 2;
		let placement = "top";

		// clamp horizontally
		left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));

		// if offscreen top, flip to bottom
		if (top < 8) {
			top = r.bottom + margin;
			placement = "bottom";
		}
		el.dataset.placement = placement;
		el.style.left = `${Math.round(left)}px`;
		el.style.top = `${Math.round(top)}px`;
		el.classList.add("show");
	});
}

/**
 * Attach delayed hover/long-press tooltip behavior to an element.
 * getHtml() is evaluated only when the tooltip is about to open.
 */
function attachTooltip(el, getHtml) {
	let timer = null;

	const start = () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			const html = getHtml?.();
			if (html) showTooltipForTarget(el, html);
		}, TOOLTIP_DELAY_MS);
	};

	const stop = () => {
		clearTimeout(timer);
		hideTooltip();
	};

	el.addEventListener("mouseenter", start);
	el.addEventListener("mouseleave", stop);
	el.addEventListener("blur", stop, true);

	// touch support: long-press-ish
	el.addEventListener("touchstart", start, { passive: true });
	el.addEventListener("touchend", stop);
}

/* ===================== Global task index & syncs ===================== */

/**
 * One global Map<taskId, { sectionId, task }> shared across sections.
 * (Used by sync logic and Dex → Task taskSync.)
 */
function _globalTaskIndex() {
	window.PPGC = window.PPGC || {};
	if (!window.PPGC._taskIndexGlobal) window.PPGC._taskIndexGlobal = new Map();
	return window.PPGC._taskIndexGlobal;
}

/**
 * Index all tasks in a section into the global task index.
 */
function _indexSectionTasks(sectionId, tasksArr) {
	const idx = _globalTaskIndex();
	(function walk(arr) {
		for (const t of arr || []) {
			if (t?.id) idx.set(t.id, { sectionId, task: t });
			if (Array.isArray(t.children) && t.children.length) walk(t.children);
		}
	})(tasksArr || []);
}

/**
 * Given a task that changed, apply:
 *   - task → task syncs (taskSync array)
 *   - task → dex syncs (dexSync array)
 * Then optionally re-render if the Dex modal is not open.
 */
function applySyncsFromTask(sourceTask, value) {
	_ensureIndexes();

	const tasksStore = window.PPGC?._tasksStoreRef;
	const store = window.PPGC?._storeRef;

	// 1) Collect taskSync/dexSync from sourceTask and all descendants
	const taskIds = new Set();
	const dexLinks = [];
	const fashionLinks = []; // NEW

	(function collect(t) {
		if (!t || typeof t !== "object") return;
		if (Array.isArray(t.taskSync)) t.taskSync.forEach((id) => taskIds.add(id));
		if (Array.isArray(t.dexSync)) dexLinks.push(...t.dexSync);
		if (Array.isArray(t.fashionSync)) fashionLinks.push(...t.fashionSync); // NEW
		if (Array.isArray(t.children)) t.children.forEach(collect);
	})(sourceTask);

	// 2) Apply task->task taskSync
	if (tasksStore && taskIds.size) {
		const idx = _globalTaskIndex();
		for (const targetId of taskIds) {
			const hit = idx.get(targetId);
			if (!hit) continue;
			const { sectionId, task } = hit;
			const hasKids = Array.isArray(task.children) && task.children.length > 0;
			if (hasKids) setDescendantsDone(task, value);
			else task.done = !!value;

			const arr = tasksStore.get(sectionId) || [];
			tasksStore.set(sectionId, arr);
			save();
			_indexSectionTasks(sectionId, arr);
			_indexDexSyncs(sectionId, arr);
		}
	}

	// 3) Apply task->dex taskSync
	if (store && dexLinks.length) {
		for (const link of dexLinks) {
			// Resolve dex gameKey using the same rules as dex.js _resolveDexTargetKey
			const game = link?.game;
			if (!game) continue;

			const t = String(link.dexType || "regional").toLowerCase();
			let targetGameKey;

			// 1) National: "x" -> "x-national"
			if (t === "national") {
				targetGameKey = `${game}-national`;
			}
			// 2) Explicit regional or default: just the base game (ruby, diamond, etc.)
			else if (t === "regional") {
				targetGameKey = game;
			}
			// 3) X/Y sub-dexes
			else if (t === "central" || t === "coastal" || t === "mountain") {
				targetGameKey = `${game}-${t}`;
			}
			// 4) Alola sub-dexes
			else if (
				t === "melemele" ||
				t === "akala" ||
				t === "ulaula" ||
				t === "poni"
			) {
				targetGameKey = `${game}-${t}`;
			}
			// 5) Fallback for any future/custom types:
			else {
				const candidate = `${game}-${t}`;
				targetGameKey =
					(window.DATA?.dex && window.DATA.dex[candidate]) ? candidate : game;
			}

			const entryId = link?.id;
			if (!targetGameKey || typeof entryId !== "number") continue;

			// If NO form specified -> species-level write (existing behavior)
			if (typeof link.form === "undefined" || link.form === null) {
				const curr = store.dexStatus.get(targetGameKey) || {};
				const prev = curr[entryId] || "unknown";
				const next = value ? _promoteToCaughtSafe(prev) : "unknown";
				curr[entryId] = next;
				store.dexStatus.set(targetGameKey, curr);
				save();
				continue;
			}

			// If a form IS specified -> (existing form code stays the same)
			const dexList = window.DATA?.dex?.[targetGameKey] || [];

			const resolveFormName = (formRef) => {
				if (typeof formRef === "string") return formRef;
				const entry = dexList.find((e) => e && e.id === entryId);
				const forms = Array.isArray(entry?.forms) ? entry.forms : [];
				if (!forms.length || typeof formRef !== "number") return null;
				const idx = formRef >= 1 ? formRef - 1 : formRef;
				const f = forms[idx];
				if (!f) return null;
				return typeof f === "string" ? f : f?.name;
			};

			const formName = resolveFormName(link.form);
			if (!formName) continue;

			const formsMap = store.dexFormsStatus.get(targetGameKey) || {};
			const node = formsMap[entryId] || { all: false, forms: {} };

			const prevForm = node.forms?.[formName] || "unknown";
			const nextForm = value ? _promoteToCaughtSafe(prevForm) : "unknown";

			node.forms[formName] = nextForm;
			formsMap[entryId] = node;
			store.dexFormsStatus.set(targetGameKey, formsMap);
			save();
		}
	}

	// 4) Apply task->fashion fashionSync
	if (store && fashionLinks.length) {
		for (const link of fashionLinks) {
			const gameKey = link?.game;
			const categoryId = link?.dexType || link?.category || link?.categoryId;
			const itemId = link?.id;

			if (!gameKey || !categoryId || !itemId) continue;

			// Make sure the fashion entry actually exists
			const cats = window.DATA?.fashion?.[gameKey]?.categories || [];
			const cat = cats.find((c) => c.id === categoryId);
			if (!cat) continue;
			const item = (cat.items || []).find(
				(it) => String(it.id) === String(itemId)
			);
			if (!item) continue;

			const hasForms = Array.isArray(item.forms) && item.forms.length > 0;

			if (hasForms) {
				// Forms-based status
				let gameMap = store.fashionFormsStatus.get(gameKey);
				if (!gameMap) {
					gameMap = new Map();
					store.fashionFormsStatus.set(gameKey, gameMap);
				}
				const rec = gameMap.get(categoryId) || {};
				const node = rec[itemId] || { all: false, forms: {} };

				const forms = item.forms || [];
				const formRef = link.form;

				// Helper to resolve a form name from link.form (name or 1-based index)
				const resolveFormName = (ref) => {
					if (typeof ref === "string") return ref;
					if (typeof ref === "number") {
						const idx = ref >= 1 ? ref - 1 : ref;
						const f = forms[idx];
						if (!f) return null;
						return typeof f === "string" ? f : f?.name;
					}
					return null;
				};

				if (typeof formRef !== "undefined" && formRef !== null) {
					// Toggle a specific form
					const formName = resolveFormName(formRef);
					if (!formName) continue;

					node.forms = node.forms || {};
					node.forms[formName] = !!value;
				} else {
					// No form specified → set all forms to value
					node.forms = node.forms || {};
					for (const f of forms) {
						const name =
							typeof f === "string" ? f : f?.name;
						if (!name) continue;
						node.forms[name] = !!value;
					}
				}

				// Recompute "all" flag based on actual forms
				const allOn =
					forms.length > 0 &&
					forms.every((f) => {
						const name = typeof f === "string" ? f : f?.name;
						return name && node.forms?.[name];
					});
				node.all = allOn;

				rec[itemId] = node;
				gameMap.set(categoryId, rec);
			} else {
				// Simple boolean fashion item
				let gameMap = store.fashionStatus.get(gameKey);
				if (!gameMap) {
					gameMap = new Map();
					store.fashionStatus.set(gameKey, gameMap);
				}
				const rec = gameMap.get(categoryId) || {};
				rec[itemId] = !!value;
				gameMap.set(categoryId, rec);
			}
		}

		save();
	}

	// Re-render if the Dex modal isn't open (same as before)
	const isModalOpen = !!window.PPGC?._storeRef?.state?.dexModalFor;
	if (!isModalOpen) {
		try {
			window.PPGC?.renderAll?.();
		} catch {
			// ignore re-render errors
		}
	}
}

/**
 * Ensure both the global task index and dexSync index are populated.
 * Called lazily before sync operations.
 */
function _ensureIndexes() {
	const tasksStore = window.PPGC?._tasksStoreRef;
	if (!tasksStore) return;
	const ti = _globalTaskIndex();
	const di = _dexSyncIndex();
	if (ti.size && di.size) return;

	// Rebuild if empty
	if (typeof tasksStore.forEach === "function") {
		tasksStore.forEach((arr, sectionId) => {
			_indexSectionTasks(sectionId, arr);
			_indexDexSyncs(sectionId, arr);
		});
	}
}

/**
 * Toggle a task (and descendants) by ID, recomputing ancestors & saving.
 */
function _setTaskCheckedById(taskId, checked) {
	_ensureIndexes();
	const hit = _globalTaskIndex().get(taskId);
	if (!hit) return false;

	const { sectionId, task } = hit;
	const hasKids = Array.isArray(task.children) && task.children.length > 0;

	// Set this task (and children if parent)
	if (hasKids) setDescendantsDone(task, !!checked);
	else task.done = !!checked;

	// Recompute ancestors in that section
	const arr = window.PPGC._tasksStoreRef.get(sectionId) || [];
	const index = buildTaskIndex(arr);
	let cur = task;
	while (true) {
		const ent = index.get(cur.id) || { parent: null };
		const parent = ent.parent;
		if (!parent) break;
		const kids = Array.isArray(parent.children) ? parent.children : [];
		parent.done = kids.length ? kids.every((k) => !!k.done) : !!parent.done;
		cur = parent;
	}

	window.PPGC._tasksStoreRef.set(sectionId, arr);
	save();

	// Keep indexes fresh for subsequent lookups
	_indexSectionTasks(sectionId, arr);
	_indexDexSyncs(sectionId, arr);
	return true;
}

/* ===================== Global Dex sync index ===================== */

/**
 * Map<"game:id", Array<{ sectionId, task }>>.
 * Used to locate tasks that depend on a Dex entry.
 */
function _dexSyncIndex() {
	window.PPGC = window.PPGC || {};
	if (!window.PPGC._dexSyncIndex) window.PPGC._dexSyncIndex = new Map();
	return window.PPGC._dexSyncIndex;
}

/**
 * Index dexSync links in a section's tasks into the Dex sync index.
 */
function _indexDexSyncs(sectionId, tasksArr) {
	const idx = _dexSyncIndex();
	(function walk(arr) {
		for (const t of arr || []) {
			const ds = Array.isArray(t.dexSync) ? t.dexSync : [];
			for (const link of ds) {
				if (!link || !link.game || typeof link.id !== "number") continue;
				const key = `${link.game}:${link.id}`;
				if (!idx.has(key)) idx.set(key, []);
				idx.get(key).push({ sectionId, task: t });
			}
			if (Array.isArray(t.children) && t.children.length) walk(t.children);
		}
	})(tasksArr || []);
}

/**
 * Apply Dex → Task taskSync when Dex entries change.
 * changedMap is { [dexId]: status } for a given gameKey.
 */
function applyDexSyncsFromDexEntries(gameKey, changedMap /* id -> status */) {
	const dexList =
		(window.DATA && window.DATA.dex && window.DATA.dex[gameKey]) || [];
	if (!dexList.length) return;

	// For each changed dex id, find the entry and toggle any linked tasks.
	for (const [idStr, status] of Object.entries(changedMap)) {
		const dexId = Number(idStr);
		const entry = dexList.find((e) => e && e.id === dexId);
		if (!entry || !Array.isArray(entry.taskSync) || !entry.taskSync.length)
			continue;

		const isComplete =
			status === "caught" ||
			status === "alpha" ||
			status === "shiny" ||
			status === "shiny_alpha";

		for (const taskId of entry.taskSync) {
			_setTaskCheckedById(taskId, isComplete);
		}
	}
}

/* ===================== Form-level taskSync helpers ===================== */

function _norm(v) {
	return String(v || "unknown")
		.trim()
		.toLowerCase();
}

function _isDexCompleteStatus(status) {
	const s = _norm(status);
	return (
		s === "caught" || s === "alpha" || s === "shiny" || s === "shiny_alpha"
	);
}

/**
 * For a single form, apply taskSync defined on that form when its status changes.
 */
function applyTaskSyncsFromForm(gameKey, entryId, formName, status) {
	try {
		const dexList = window.DATA?.dex?.[gameKey] || [];
		const entry = dexList.find((e) => e && e.id === entryId);
		if (!entry) return;

		const forms = Array.isArray(entry.forms) ? entry.forms : [];
		// find by name (forms can be strings or objects)
		const hit = forms.find(
			(f) => (typeof f === "string" ? f : f?.name) === formName
		);
		if (!hit || typeof hit !== "object") return; // only objects can hold taskSync

		const ids = Array.isArray(hit.taskSync)
			? hit.taskSync.slice()
			: typeof hit.taskSync === "number"
				? [hit.taskSync]
				: [];
		if (!ids.length) return;

		const checked = _isDexCompleteStatus(status);
		for (const taskId of ids) {
			_setTaskCheckedById(taskId, checked);
		}
	} catch (e) {
		console.error("applyTaskSyncsFromForm error:", e);
	}
}

function applyTaskSyncsFromFashion(gameKey, categoryId, itemId) {
	try {
		const fashionBlock = window.DATA?.fashion?.[gameKey];
		const cats = fashionBlock?.categories || [];
		const cat = cats.find((c) => c.id === categoryId);
		if (!cat) return;

		const item = (cat.items || []).find(
			(it) => String(it.id) === String(itemId)
		);
		if (!item) return;

		// taskSync can be number, string, or array
		const ids = Array.isArray(item.taskSync)
			? item.taskSync.slice()
			: typeof item.taskSync === "number" || typeof item.taskSync === "string"
				? [item.taskSync]
				: [];

		if (!ids.length) return;

		const storeRef = window.PPGC?._storeRef;
		if (!storeRef) return;

		const hasForms = Array.isArray(item.forms) && item.forms.length > 0;

		let checked = false;
		if (!hasForms) {
			const gCat =
				storeRef.fashionStatus instanceof Map
					? storeRef.fashionStatus.get(gameKey)
					: null;
			const rec = gCat?.get(categoryId) || {};
			checked = !!rec[item.id];
		} else {
			const gFormsCat =
				storeRef.fashionFormsStatus instanceof Map
					? storeRef.fashionFormsStatus.get(gameKey)
					: null;
			const rec = gFormsCat?.get(categoryId) || {};
			const node = rec[item.id] || { all: false, forms: {} };
			checked = !!node.all; // treat "all forms on" as complete
		}

		for (const taskId of ids) {
			// Use the same helper dex uses so we don't recurse syncs
			window.PPGC?.setTaskCheckedById?.(taskId, checked);
		}
	} catch (e) {
		console.error("applyTaskSyncsFromFashion error:", e);
	}
}

// expose so dex.js can call it
window.PPGC = window.PPGC || {};
window.PPGC.applyDexSyncsFromDexEntries = applyDexSyncsFromDexEntries;
window.PPGC.applyTaskSyncsFromForm = applyTaskSyncsFromForm;
window.PPGC.setTaskCheckedById = _setTaskCheckedById;
window.PPGC.applyTaskSyncsFromFashion = applyTaskSyncsFromFashion;

/* ===================== Task building / indexing ===================== */

/**
 * Ensure sections exist for a gameKey, seeding from DATA.sections[gameKey]
 * if needed. Returns the array of section objects.
 */
export function ensureSections(gameKey) {
	const seed = (window.DATA.sections && window.DATA.sections[gameKey]) || [];
	if (!window.PPGC._sectionsStore) window.PPGC._sectionsStore = new Map();
	let arr = window.PPGC._sectionsStore.get(gameKey);

	if (!arr || (!arr.length && seed.length)) {
		window.PPGC._sectionsStore.set(
			gameKey,
			seed.map((s) => ({ id: s.id || uid(), title: s.title || "Section" }))
		);
		save();
		arr = window.PPGC._sectionsStore.get(gameKey);
	}

	if (!arr) {
		window.PPGC._sectionsStore.set(gameKey, []);
		arr = window.PPGC._sectionsStore.get(gameKey);
	}
	return arr;
}

/**
 * Build a Map<task.id, { task, parent }> for a tree of tasks.
 */
export function buildTaskIndex(tasks) {
	const map = new Map();
	(function walk(arr, parent = null) {
		for (const t of arr || []) {
			if (!t || typeof t !== "object" || !t.id) continue;
			map.set(t.id, { task: t, parent });
			if (Array.isArray(t.children) && t.children.length) walk(t.children, t);
		}
	})(tasks || []);
	return map;
}

function normalizeTiers(raw) {
	const out = [];

	const push = (v) => {
		if (v == null) return;

		if (Array.isArray(v)) {
			v.forEach(push);
			return;
		}

		if (typeof v === "number" && Number.isFinite(v)) {
			out.push(v);
		}
		// ignore anything else (strings/objects)
	};

	if (Array.isArray(raw)) {
		raw.forEach(push);
	}

	return out;
}

function getNormalizedTiersForTask(t) {
	if (!t) return [];
	// simple per-task cache so we don't recompute constantly
	if (!t._normalizedTiers) {
		t._normalizedTiers = normalizeTiers(t.tiers);
	}
	return t._normalizedTiers;
}

function getTierSteps(t) {
	return getNormalizedTiersForTask(t).length;
}

function describeTierSequence(nums) {
	const seq = (Array.isArray(nums) ? nums : [])
		.filter((n) => typeof n === "number" && Number.isFinite(n));

	const n = seq.length;
	if (!n) return "";
	if (n === 1) return String(seq[0]);

	// Compute differences between consecutive values
	const diffs = [];
	for (let i = 1; i < n; i++) {
		diffs.push(seq[i] - seq[i - 1]);
	}

	const allIncreasing = diffs.every((d) => d > 0);
	const firstStep = diffs[0];
	const sameStep = diffs.every((d) => d === firstStep);

	const first = seq[0];
	const last = seq[n - 1];

	// Nice clean arithmetic progression (contiguous or offset)
	if (allIncreasing && sameStep) {
		if (firstStep === 1) {
			// 1,2,3,4,... style
			return `(From ${first} to ${last})`;
		}
		// offset, e.g. 1,6,11,16,...
		return `(${first}→${last}, every ${firstStep})`;
	}

	// Mixed / irregular sequence – fall back to list
	if (n <= 12) {
		return seq.join(" · ");
	}

	// Long mixed list: compress
	const head = seq.slice(0, 3).join(" · ");
	const tail = seq.slice(-2).join(" · ");
	return `${head} · … · ${tail}`;
}

function formatTierTooltip(t) {
	const raw = Array.isArray(t?.tiers) ? t.tiers : null;

	// If the raw tiers use range()-style arrays, summarize each segment
	if (raw && raw.some((v) => Array.isArray(v))) {
		const parts = [];

		for (const v of raw) {
			if (Array.isArray(v)) {
				// This is likely from range(...): summarize as
				// "from X to Y" or "from X to Y, every N"
				const desc = describeTierSequence(v);
				parts.push(desc || v.join(" · "));
			} else if (typeof v === "number" && Number.isFinite(v)) {
				// Plain numeric tier
				parts.push(String(v));
			}
			// ignore anything else (strings/objects)
		}

		if (parts.length) {
			// e.g. "3, 6, from 10 to 45, every 5"
			return parts.join(" · ");
		}
	}

	// Fallback: no nested arrays → treat as a single sequence
	const nums = getNormalizedTiersForTask(t);
	if (!nums.length) return "";

	const desc = describeTierSequence(nums);
	// describeTierSequence already does:
	//   - "from 1 to 100"
	//   - "from 1 to 100, every 5"
	//   - or falls back to a compact list
	return desc || nums.join(" · ");
}


/**
 * Visit all descendants of a task (children, grandchildren, ...).
 */
function forEachDescendant(task, fn) {
	const kids = Array.isArray(task.children) ? task.children : [];
	for (const ch of kids) {
		fn(ch);
		forEachDescendant(ch, fn);
	}
}

/**
 * Set done / tiered completion for a task and all of its descendants.
 */
export function setDescendantsDone(task, val) {
	task.done = val;

	if (task.type === "tiered" && Array.isArray(task.tiers)) {
		const steps = getTierSteps(task);
		task.currentTier = val ? steps : 0;
	}

	const kids = Array.isArray(task.children) ? task.children : [];
	for (const ch of kids) setDescendantsDone(ch, val);
}

/**
 * For Dex statuses, promote "unknown" and other low states up to "caught",
 * but never downgrade shiny / alpha / shiny_alpha.
 */
function _promoteToCaughtSafe(current) {
	const keep = new Set(["alpha", "shiny", "shiny_alpha", "caught"]);
	return keep.has(current) ? current : "caught";
}

/**
 * Simple spacer node used in layouts where window.DATA.spacer.id is present.
 */
function makeSpacer(height = 12) {
	const el = document.createElement("div");
	el.className = "task-spacer";
	el.style.height = `${height}px`;
	return el;
}

/* ===================== Rendering: layout & list ===================== */

/**
 * Render a task layout using row specs:
 *   - tasks: root task array
 *   - sectionId: used for accent color & sprite resolution
 *   - setTasks: callback(sectionId, updatedTasks)
 *   - rowsSpec: array of rows, each row is an array of task IDs or "spacer" IDs
 */
export function renderTaskLayout(tasks, sectionId, setTasks, rowsSpec) {
	const rootTasks = tasks;
	const index = buildTaskIndex(rootTasks);
	const cbById = new Map();
	const wrap = document.createElement("div");
	wrap.className = "task-layout";
	const used = new Set();

	/**
	 * Render a single inline task item (checkbox + label [+ sprite] [+ slider]).
	 */
	function makeInlineItem(t) {
		const item = document.createElement("div");
		const entry = index.get(t.id);
		const isSub = !!(entry && entry.parent);
		const hasKids = Array.isArray(t.children) && t.children.length > 0;
		const forceInline = !isSub && !hasKids && t.noCenter === true;
		const hasSlider = t.type === "tiered";

		item.className =
			"task-item " +
			(isSub ? "is-subtask" : "is-main") +
			(!isSub ? (hasKids ? " has-children" : " no-children") : "") +
			(forceInline ? " force-inline" : "") +
			(hasSlider ? " has-slider" : "");

		const imgSrcs = resolveTaskImageSrcs(t, sectionId);
		const imgsHTML = imgSrcs
			.map((src) => `<img class="task-item-img" src="${src}" alt="">`)
			.join("");

		// checkbox + text shell
		if (isSub) {
			// SUBTASKS: keep current behavior (image above/centered via CSS)
			item.innerHTML = `
        ${imgsHTML ? `<div class="task-item-img-wrap">${imgsHTML}</div>` : ""}
        <label class="task-item-body">
          <input type="checkbox" ${t.done ? "checked" : ""} />
          <div class="small task-item-text">${t.text}</div>
        </label>
      `;
		} else if (hasKids || forceInline) {
			// MAIN WITH SUBTASKS: image inline, left aligned (image first, then label)
			item.innerHTML = `
        <label class="task-item-body">
          <input type="checkbox" ${t.done ? "checked" : ""} />
          <div class="small task-item-text">${t.text}</div>
          ${imgsHTML
					? `<div class="task-item-img-wrap inline">${imgsHTML}</div>`
					: ""
				}
        </label>
      `;
		} else {
			// MAIN WITHOUT SUBTASKS: image above checkbox, centered (column layout)
			item.innerHTML = `
        ${imgsHTML ? `<div class="task-item-img-wrap">${imgsHTML}</div>` : ""}
        <label class="task-item-body">
          <input type="checkbox" ${t.done ? "checked" : ""} />
          <div class="small task-item-text">${t.text}</div>
        </label>
      `;
		}

		item.querySelectorAll("img.task-item-img").forEach((imgEl) => {
			imgEl.addEventListener("error", () => imgEl.remove());
		});

		const cb = item.querySelector('input[type="checkbox"]');
		cbById.set(t.id, cb);

		// --- Tiered slider / percent (if applicable) ---------------------
		let tieredWrap = null;
		if (t.type === "tiered") {
			const accent = resolveAccentForSection(sectionId);
			tieredWrap = renderTieredControls(t, cb, accent);

			// place % next to the task label
			const label = item.querySelector(".task-item-body");
			const pctEl = tieredWrap._pctEl;
			if (pctEl) label.appendChild(pctEl);

			// put the slider line under the label
			label.insertAdjacentElement("afterend", tieredWrap);

			tieredWrap.addEventListener("tiered-input", () => {
				window.PPGC?.refreshSectionHeaderPct?.();
			});

			tieredWrap.addEventListener("tiered-change", () => {
				// recompute ancestors’ done + update their checkboxes
				let cur = t;
				while (true) {
					const e = index.get(cur.id) || { parent: null };
					const parent = e.parent;
					if (!parent) break;
					const kids = Array.isArray(parent.children) ? parent.children : [];
					parent.done = kids.length
						? kids.every((k) => !!k.done)
						: !!parent.done;
					const parentCb = cbById.get(parent.id);
					if (parentCb) parentCb.checked = !!parent.done;
					cur = parent;
				}

				// persist, sync, and refresh header
				setTasks(sectionId, rootTasks);
				applySyncsFromTask(t, !!t.done);
				window.PPGC?.refreshSectionHeaderPct?.();
			});
		}

		// Checkbox change -> update this task, descendants, ancestors, taskSync
		cb.addEventListener("change", () => {
			const hasKidsInner = Array.isArray(t.children) && t.children.length > 0;

			if (hasKidsInner) {
				setDescendantsDone(t, cb.checked);
			} else if (t.type === "tiered") {
				// checkbox drives the slider: max when checked, 0 when unchecked
				t.done = cb.checked;
				tieredWrap?._setTierFromDone?.();
			} else {
				t.done = cb.checked;
			}

			// Update descendant checkbox UIs immediately
			forEachDescendant(t, (child) => {
				const childCb = cbById.get(child.id);
				if (childCb) childCb.checked = !!child.done;
			});

			// Recompute ancestors' done and update their checkbox UIs
			let cur = t;
			while (true) {
				const e = index.get(cur.id) || { parent: null };
				const parent = e.parent;
				if (!parent) break;
				const kids = Array.isArray(parent.children) ? parent.children : [];
				parent.done = kids.length ? kids.every((k) => !!k.done) : !!parent.done;
				const parentCb = cbById.get(parent.id);
				if (parentCb) parentCb.checked = !!parent.done;
				cur = parent;
			}
			setTasks(sectionId, rootTasks);
			applySyncsFromTask(t, cb.checked);
		});

		// Tooltip content: prefer task.tooltip; for tiered, auto-build if missing
		attachTooltip(item, () => {
			const isTiered = t.type === "tiered" && Array.isArray(t.tiers);

			if (isTiered) {
				const thresholds = formatTierTooltip(t);

				if (t.tooltip) {
					return `
				<div>${t.tooltip}</div>
				<div style="margin-top:0.05rem;"></div>
				<div>Tiers: ${thresholds}</div>
			`;
				}

				return `
			<div><strong>${t.text}</strong></div>
			<div style="margin-top:0.05rem;"></div>
			<div>Tiers: ${thresholds}</div>
		`;
			}

			if (t.tooltip) return t.tooltip;
			return `<strong>${t.text}</strong>`;
		});

		return item;
	}

	// Build each configured row
	for (const row of rowsSpec) {
		const rowEl = document.createElement("div");
		rowEl.className = "task-row task-inline";

		const includesSub = row.some((id) => {
			const entry = index.get(id);
			return entry && entry.parent;
		});
		if (includesSub) rowEl.classList.add("has-subtasks");

		for (const id of row) {
			const spacerId = window.DATA?.spacer?.id || "spacer";
			if (id === spacerId) {
				rowEl.appendChild(makeSpacer());
				continue;
			}

			const entry = index.get(id);
			if (!entry) continue;
			used.add(id);
			rowEl.appendChild(makeInlineItem(entry.task));
		}
		wrap.appendChild(rowEl);
	}

	// Leftover tasks (not in rowSpec) go into a simple list under "More:"
	const leftovers = [];
	(function collect(arr) {
		for (const t of arr || []) {
			if (!used.has(t.id)) leftovers.push(t);
			const kids = Array.isArray(t.children) ? t.children : [];
			for (const ch of kids) {
				// children rendered with parent
			}
		}
	})(rootTasks);

	if (leftovers.length) {
		const divider = document.createElement("div");
		divider.className = "small";
		divider.style.opacity = ".7";
		divider.style.margin = "6px 2px";
		divider.textContent = "More:";
		wrap.appendChild(divider);
		wrap.appendChild(
			renderTaskList(leftovers, sectionId, setTasks, rootTasks, index, cbById)
		);
	}

	return wrap;
}

/**
 * Build the tiered slider control for a task.
 * Returns a wrapper DIV with:
 *   - slider element
 *   - _pctEl: a percent/tier display node
 *   - _setTierFromDone(): sync slider from task.done
 */
function renderTieredControls(t, cb, accentColor) {
	const wrap = document.createElement("div");
	wrap.className = "tiered";

	const tiers = getNormalizedTiersForTask(t);
	const steps = tiers.length;

	// slider 0..steps
	const slider = document.createElement("input");
	slider.type = "range";
	slider.min = 0;
	slider.max = steps;
	slider.step = 1;
	slider.value = t.currentTier ?? 0;
	slider.className = "tiered-slider";

	const acc = accentColor || getAccentColor();
	try {
		slider.style.accentColor = acc;
	} catch {
		// some browsers don't support accent-color
	}
	slider.style.setProperty("--tier-accent", acc);

	// percent text (we'll place it up by the label)
	const pct = document.createElement("div");
	pct.className = "tiered-percent";

	const updatePct = () => {
		const localSteps = getTierSteps(t);
		const v = localSteps ? Math.min(t.currentTier ?? 0, localSteps) : 0;
		pct.textContent = v + "/" + localSteps;
	};
	updatePct();

	const line = document.createElement("div");
	line.className = "tiered-line";
	line.appendChild(slider);

	const syncDoneFromTier = () => {
		const localSteps = getTierSteps(t);
		t.done = localSteps ? t.currentTier >= localSteps : !!t.done;
		if (cb) cb.checked = !!t.done;
	};
	syncDoneFromTier();

	slider.addEventListener("input", () => {
		t.currentTier = Number(slider.value);
		syncDoneFromTier();
		updatePct();
		wrap.dispatchEvent(new CustomEvent("tiered-input", { bubbles: true }));
	});

	slider.addEventListener("change", () => {
		wrap.dispatchEvent(new CustomEvent("tiered-change", { bubbles: true }));
	});

	wrap._setTierFromDone = () => {
		const localSteps = getTierSteps(t);
		t.currentTier = t.done ? localSteps : 0;
		slider.value = String(t.currentTier);
		updatePct();
	};
	wrap._pctEl = pct;
	wrap._updatePct = updatePct;

	wrap.appendChild(line);
	return wrap;
}

/**
 * Render a simple stacked task list (no layout spec).
 */
export function renderTaskList(
	tasks,
	sectionId,
	setTasks,
	allTasksRef,
	indexOpt,
	cbByIdOpt
) {
	const container = document.createElement("div");
	container.className = "task-list";

	const allRef = allTasksRef || tasks;
	const index = indexOpt || buildTaskIndex(allRef);
	const cbById = cbByIdOpt || new Map();

	tasks.forEach((t) => {
		const row = document.createElement("div");
		row.className = "task-row";

		// base shell
		row.innerHTML = `
      <input type="checkbox" ${t.done ? "checked" : ""} />
      <div class="small" style="flex:1">${t.text}</div>
    `;

		const cb = row.querySelector('input[type="checkbox"]');
		cbById.set(t.id, cb);

		// Tiered slider goes under the text (if applicable)
		let tieredWrap = null;
		if (t.type === "tiered") {
			const accent = resolveAccentForSection(sectionId);
			tieredWrap = renderTieredControls(t, cb, accent);

			// move % up next to the inline task text
			const labelText = row.querySelector(".small");
			if (tieredWrap._pctEl && labelText && labelText.parentElement) {
				labelText.parentElement.appendChild(tieredWrap._pctEl);
			}

			// slider line stays below
			row.appendChild(tieredWrap);

			tieredWrap.addEventListener("tiered-change", () => {
				// unchanged behavior here (slider change is handled by checkbox logic)
			});
		}

		cb.addEventListener("change", () => {
			const hasKids = Array.isArray(t.children) && t.children.length > 0;

			if (hasKids) {
				setDescendantsDone(t, cb.checked);
			} else if (t.type === "tiered") {
				t.done = cb.checked;
				tieredWrap?._setTierFromDone?.();
			} else {
				t.done = cb.checked;
			}

			// Update descendant checkbox UIs
			forEachDescendant(t, (child) => {
				const childCb = cbById.get(child.id);
				if (childCb) childCb.checked = !!child.done;
			});

			// Recompute and update ancestors
			let cur = t;
			while (true) {
				const e = index.get(cur.id) || { parent: null };
				const parent = e.parent;
				if (!parent) break;
				const kids = Array.isArray(parent.children) ? parent.children : [];
				parent.done = kids.length ? kids.every((k) => !!k.done) : !!parent.done;
				const parentCb = cbById.get(parent.id);
				if (parentCb) parentCb.checked = !!parent.done;
				cur = parent;
			}
			setTasks(sectionId, allRef);
			applySyncsFromTask(t, cb.checked);
		});

		container.appendChild(row);
	});

	return container;
}

/* ===================== Task bootstrap ===================== */

/**
 * Make sure a section has tasks in the live store, seeding from DATA.tasks:
 *   - If tasks already exist, prune bad nodes and sync in new metadata (img, tiers, etc.)
 *   - If no tasks yet, deep-clone from the seed.
 */
export function bootstrapTasks(sectionId, tasksStore) {
	const seed = (window.DATA.tasks && window.DATA.tasks[sectionId]) || [];

	// Existing tasks: clean & sync from seed
	if (tasksStore.has(sectionId)) {
		const current = tasksStore.get(sectionId) || [];
		const seedIndex = new Map();

		// Prune invalid nodes
		(function prune(arr) {
			if (!Array.isArray(arr)) return;
			for (let i = arr.length - 1; i >= 0; i--) {
				const t = arr[i];
				if (!t || typeof t !== "object" || !t.id) {
					arr.splice(i, 1);
					continue;
				}
				if (Array.isArray(t.children)) prune(t.children);
			}
		})(current);

		// Index seed by ID
		(function indexSeed(arr) {
			for (const t of arr || []) {
				if (!t || typeof t !== "object") continue;
				if (t.id) seedIndex.set(t.id, t);
				if (Array.isArray(t.children)) indexSeed(t.children);
			}
		})(seed);

		// Sync metadata (img, tiers, taskSync, tooltip, etc.) from seed
		let changed = false;
		(function sync(arr) {
			for (const t of arr || []) {
				if (!t || typeof t !== "object" || !t.id) continue;

				const s = seedIndex.get(t.id);
				if (s && s.img && !t.img) {
					t.img = s.img;
					changed = true;
				}
				if (s && s.imgS && !t.imgS) {
					t.imgS = s.imgS;
					changed = true;
				}
				if (s && Array.isArray(s.tiers) && !Array.isArray(t.tiers)) {
					t.tiers = [...s.tiers];
					changed = true;
				}
				if (s && Array.isArray(s.taskSync) && !Array.isArray(t.taskSync)) {
					t.taskSync = [...s.taskSync];
					changed = true;
				}
				if (s && Array.isArray(s.dexSync) && !Array.isArray(t.dexSync)) {
					t.dexSync = [...s.dexSync];
					changed = true;
				}
				if (s && Array.isArray(s.fashionSync) && !Array.isArray(t.fashionSync)) {
					t.fashionSync = [...s.fashionSync];
					changed = true;
				}
				if (s && s.unit && !t.unit) {
					t.unit = s.unit;
					changed = true;
				}
				if (s && s.tooltip && !t.tooltip) {
					t.tooltip = s.tooltip;
					changed = true;
				}
				if (
					s &&
					typeof s.noCenter === "boolean" &&
					typeof t.noCenter !== "boolean"
				) {
					t.noCenter = !!s.noCenter;
					changed = true;
				}

				// 🔹 NEW: copy tags & startGame from seed
				if (s && Array.isArray(s.tags) && !Array.isArray(t.tags)) {
					t.tags = [...s.tags];
					changed = true;
				}
				if (
					s &&
					typeof s.startGame === "boolean" &&
					typeof t.startGame !== "boolean"
				) {
					t.startGame = !!s.startGame;
					changed = true;
				}

				if (Array.isArray(t.children)) sync(t.children);
			}
		})(current);

		if (changed) {
			tasksStore.set(sectionId, current);
			save();
			_indexSectionTasks(sectionId, current);
			_indexDexSyncs(sectionId, current);
		}
		return;
	}

	// No tasks yet: deep-clone from seed
	tasksStore.set(sectionId, seed.map(cloneTaskDeep));
	save();
	_indexSectionTasks(sectionId, tasksStore.get(sectionId));
	_indexDexSyncs(sectionId, tasksStore.get(sectionId));

	/**
	 * Deep-clone a seed task into a live task node.
	 */
	function cloneTaskDeep(t) {
		return {
			id: t.id || uid(),
			text: t.text || "Task",
			done: !!t.done,
			img: t.img || null,
			imgS: t.imgS || null,
			type: t.type || null,
			tiers: Array.isArray(t.tiers) ? [...t.tiers] : undefined,
			unit: t.unit || null,
			currentTier: typeof t.currentTier === "number" ? t.currentTier : 0,
			currentCount: typeof t.currentCount === "number" ? t.currentCount : 0,
			tooltip: t.tooltip || null,
			noCenter: !!t.noCenter,
			children: Array.isArray(t.children) ? t.children.map(cloneTaskDeep) : [],
			taskSync: Array.isArray(t.taskSync) ? [...t.taskSync] : undefined,
			dexSync: Array.isArray(t.dexSync) ? [...t.dexSync] : undefined,
			fashionSync: Array.isArray(t.fashionSync) ? [...t.fashionSync] : undefined,
			tags: Array.isArray(t.tags) ? [...t.tags] : undefined,
			startGame: t.startGame === true,
		};
	}
}
