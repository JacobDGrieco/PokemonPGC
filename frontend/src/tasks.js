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
 * (Used by sync logic and Dex → Task syncs.)
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
 *   - task → task syncs (syncs array)
 *   - task → dex syncs (dexSync array)
 * Then optionally re-render if the Dex modal is not open.
 */
function applySyncsFromTask(sourceTask, value) {
	_ensureIndexes();

	const tasksStore = window.PPGC?._tasksStoreRef;
	const store = window.PPGC?._storeRef;

	// 1) Collect syncs/dexSync from sourceTask and all descendants
	const taskIds = new Set();
	const dexLinks = [];

	(function collect(t) {
		if (!t || typeof t !== "object") return;
		if (Array.isArray(t.syncs)) t.syncs.forEach((id) => taskIds.add(id));
		if (Array.isArray(t.dexSync)) dexLinks.push(...t.dexSync);
		if (Array.isArray(t.children)) t.children.forEach(collect);
	})(sourceTask);

	// 2) Apply task->task syncs
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

	// 3) Apply task->dex syncs
	if (store && dexLinks.length) {
		for (const link of dexLinks) {
			// Resolve which dex "gameKey" to hit:
			// - If link.dexType === "national", write to "national"
			// - else use link.game (e.g., "legendsza")
			const targetGameKey =
				link?.dexType === "national" ? "national" : link?.game;

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

			// If a form IS specified -> write into per-form map in store.dexFormsStatus
			const dexList = window.DATA?.dex?.[targetGameKey] || [];

			// Helper to normalize a form reference (string name or index) to a form name
			const resolveFormName = (formRef) => {
				if (typeof formRef === "string") return formRef;
				// treat numbers as index into entry.forms (supports 0-based and 1-based)
				const entry = dexList.find((e) => e && e.id === entryId);
				const forms = Array.isArray(entry?.forms) ? entry.forms : [];
				if (!forms.length || typeof formRef !== "number") return null;
				const idx = formRef >= 1 ? formRef - 1 : formRef; // accept 0- or 1-based
				const f = forms[idx];
				if (!f) return null;
				return typeof f === "string" ? f : f?.name;
			};

			const formName = resolveFormName(link.form);
			if (!formName) continue; // nothing to set

			// Read/Write the forms node: { all:boolean, forms:{ [name]: status } }
			const formsMap = store.dexFormsStatus.get(targetGameKey) || {};
			const node = formsMap[entryId] || { all: false, forms: {} };

			// For forms, mirror the species rule (promote to at least "caught").
			const prevForm = node.forms?.[formName] || "unknown";
			const nextForm = value ? _promoteToCaughtSafe(prevForm) : "unknown";

			node.forms[formName] = nextForm;
			formsMap[entryId] = node;
			store.dexFormsStatus.set(targetGameKey, formsMap);
			save();
		}
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
 * Apply Dex → Task syncs when Dex entries change.
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
		if (!entry || !Array.isArray(entry.taskSyncs) || !entry.taskSyncs.length)
			continue;

		const isComplete =
			status === "caught" ||
			status === "alpha" ||
			status === "shiny" ||
			status === "shiny_alpha";

		for (const taskId of entry.taskSyncs) {
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
 * For a single form, apply taskSyncs defined on that form when its status changes.
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
		if (!hit || typeof hit !== "object") return; // only objects can hold taskSyncs

		const ids = Array.isArray(hit.taskSyncs)
			? hit.taskSyncs.slice()
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

// expose so dex.js can call it
window.PPGC = window.PPGC || {};
window.PPGC.applyDexSyncsFromDexEntries = applyDexSyncsFromDexEntries;
window.PPGC.applyTaskSyncsFromForm = applyTaskSyncsFromForm;
window.PPGC.setTaskCheckedById = _setTaskCheckedById;

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
		const steps = task.tiers.length;
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

		// Checkbox change -> update this task, descendants, ancestors, syncs
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
				const thresholds = t.tiers.join(" · ");

				// If a custom tooltip exists, it replaces the header,
				// but we still always show the Tiers: ... line.
				if (t.tooltip) {
					return `
						<div>${t.tooltip}</div>
						<div style="margin-top:0.05rem;"></div>
						<div>Tiers: ${thresholds}</div>
					`;
				}

				// Default: header + Tiers: ..., no Tier: current/steps line.
				return `
					<div><strong>${t.text}</strong></div>
					<div style="margin-top:0.05rem;"></div>
					<div>Tiers: ${thresholds}</div>
				`;
			}

			// Non-tiered tasks: keep original behavior
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

	// slider 0..tiers.length
	const slider = document.createElement("input");
	slider.type = "range";
	slider.min = 0;
	slider.max = Array.isArray(t.tiers) ? t.tiers.length : 0;
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
		const steps = Array.isArray(t.tiers) ? t.tiers.length : 0;
		const v = steps ? Math.min(t.currentTier ?? 0, steps) : 1;
		pct.textContent = v + "/" + steps;
	};
	updatePct();

	const line = document.createElement("div");
	line.className = "tiered-line";
	line.appendChild(slider); // ONLY the slider stays in the line

	// keep checkbox <-> slider in sync
	const syncDoneFromTier = () => {
		const steps = Array.isArray(t.tiers) ? t.tiers.length : 0;
		t.done = steps ? t.currentTier >= steps : !!t.done;
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

	// expose controls to caller
	wrap._setTierFromDone = () => {
		const steps = Array.isArray(t.tiers) ? t.tiers.length : 0;
		t.currentTier = t.done ? steps : 0;
		slider.value = String(t.currentTier);
		updatePct();
	};
	wrap._pctEl = pct; // give caller the percent element
	wrap._updatePct = updatePct;

	wrap.appendChild(line); // append the line (slider)
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

		// Sync metadata (img, tiers, syncs, tooltip, etc.) from seed
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
				if (s && Array.isArray(s.syncs) && !Array.isArray(t.syncs)) {
					t.syncs = [...s.syncs];
					changed = true;
				}
				if (s && Array.isArray(s.dexSync) && !Array.isArray(t.dexSync)) {
					t.dexSync = [...s.dexSync];
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
			syncs: Array.isArray(t.syncs) ? [...t.syncs] : undefined,
			dexSync: Array.isArray(t.dexSync) ? [...t.dexSync] : undefined,
			tags: Array.isArray(t.tags) ? [...t.tags] : undefined,
			startGame: t.startGame === true,
		};
	}
}
