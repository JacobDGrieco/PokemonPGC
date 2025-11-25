import { save } from "../store.js";
import { bootstrapTasks } from "../tasks.js";
import {
	layoutWheel,
	getGameColor,
	computeChipScale,
	prepFormsModal,
	createWheelResizeHandler,
} from "./modal.js";

/**
 * Internal numeric ordering for dex status flags.
 * Higher numbers represent "better" completion.
 */
const _RANK = {
	unknown: 0,
	seen: 1,
	caught: 2,
	alpha: 3,
	shiny: 4,
	shiny_alpha: 5,
};
/**
 * Normalize a stored dex flag into one of the known status strings.
 */
function normalizeFlag(v) {
	return String(v || "unknown")
		.trim()
		.toLowerCase()
		.replace(/\s+/g, "_");
}
/**
 * Convert a status flag into its numeric rank using _RANK.
 */
function rankStatus(v) {
	return _RANK[v] ?? 0;
}
/**
 * Given an array of status flags, pick the highest-ranked one.
 */
function pickHighestStatus(list) {
	if (!Array.isArray(list) || !list.length) return "unknown";
	return list.reduce(
		(best, v) => (rankStatus(v) > rankStatus(best) ? v : best),
		"unknown"
	);
}
/**
 * Determine whether a single flag counts as "completed" for a game,
 * honoring that game's configured completion flags.
 */
function isCompletedForGame(game, val) {
	const v = normalizeFlag(val);
	const comps = (game?.completionFlags || ["caught"]).map(normalizeFlag);
	return comps.includes(v);
}
const _isMythicalForm = (f) => typeof f === "object" && !!f.mythical;

/**
 * Look up the forms node for a mon within the dex store, creating
 * nested objects on demand so callers can safely mutate it.
 */
function _getDexFormsNode(store, gameKey, monId) {
	const map = store.dexFormsStatus.get(gameKey) || {};
	const node = map[monId] || { all: false, forms: {} };
	return { map, node };
}
/**
 * Replace the forms node for a mon within the dex store.
 */
function _setDexFormsNode(store, gameKey, monId, node) {
	const map = store.dexFormsStatus.get(gameKey) || {};
	map[monId] = node;
	store.dexFormsStatus.set(gameKey, map);
	save();
}
function _setAllFormsForMon(
	store,
	gameKey,
	monId,
	formsList,
	status
) {
	const map = store.dexFormsStatus.get(gameKey) || {};
	const node = map[monId] || { all: false, forms: {} };
	node.forms = node.forms || {};

	// Look up the mon so we can apply species + per-form caps
	const dexList = window.DATA.dex?.[gameKey] || [];
	const mon = dexList.find((m) => m && m.id === monId) || null;

	for (const f of formsList || []) {
		const name = typeof f === "string" ? f : f?.name;
		if (!name) continue;
		const applied = clampStatusForForm(mon, f, status);
		node.forms[name] = applied;
	}

	const total = (formsList || []).length;
	const filled = Object.values(node.forms).filter(
		(v) => v && v !== "unknown"
	).length;
	node.all = total > 0 && filled === total && status !== "unknown";

	map[monId] = node;
	store.dexFormsStatus.set(gameKey, map);
	return node;
}

/**
 * Clamp a mon-level status so it never exceeds the maximum allowed
 * by that mon (e.g. shiny-locked species).
 */
function clampStatusForMon(mon, val) {
	const desired = normalizeFlag(val);
	if (!mon || !mon.maxStatus) return desired;

	const max = normalizeFlag(mon.maxStatus);
	return rankStatus(desired) > rankStatus(max) ? max : desired;
}
/**
 * Check whether a particular status option is allowed for a mon.
 */
function isOptionAllowedForMon(mon, val) {
	if (!mon || !mon.maxStatus) return true;
	const max = normalizeFlag(mon.maxStatus);
	return rankStatus(val) <= rankStatus(max);
}
/**
 * Clamp a form-level status so it never exceeds the maximum allowed
 * by that specific form (if it has its own maxStatus).
 */
function clampStatusForForm(mon, form, val) {
	const desired = normalizeFlag(val);
	if (!mon) return desired;

	// Start with species cap if present
	let cap = mon.maxStatus ? normalizeFlag(mon.maxStatus) : null;

	// Tighten with per-form cap if present
	if (form && typeof form === "object" && form.maxStatus) {
		const formCap = normalizeFlag(form.maxStatus);
		if (!cap || rankStatus(formCap) < rankStatus(cap)) {
			cap = formCap;
		}
	}

	if (!cap) return desired;
	return rankStatus(desired) > rankStatus(cap) ? cap : desired;
}
/**
 * Check whether a particular status option is allowed for a form.
 */
function isOptionAllowedForForm(mon, form, val) {
	const normalized = normalizeFlag(val);
	if (!mon) return true;

	let cap = mon.maxStatus ? normalizeFlag(mon.maxStatus) : null;

	if (form && typeof form === "object" && form.maxStatus) {
		const formCap = normalizeFlag(form.maxStatus);
		if (!cap || rankStatus(formCap) < rankStatus(cap)) {
			cap = formCap;
		}
	}

	if (!cap) return true;
	return rankStatus(normalized) <= rankStatus(cap);
}
/**
 * Compute the effective species status based on the base species
 * flag and all of its forms.
 */
function _effectiveSpeciesStatus(store, gameKey, mon) {
	const statusMap = store.dexStatus.get(gameKey) || {};
	let base = statusMap[mon.id] || "unknown";
	if (Array.isArray(mon.forms) && mon.forms.length) {
		const { node } = _getDexFormsNode(store, gameKey, mon.id);
		const formVals = (mon.forms || []).map((f) => {
			const name = typeof f === "string" ? f : f?.name;
			return node.forms?.[name] || "unknown";
		});
		const highest = pickHighestStatus(formVals);
		if (rankStatus(highest) > rankStatus(base)) base = highest;
	}
	// ⬇️ NEW: enforce per-mon max
	return clampStatusForMon(mon, base);
}

// --- Research helpers -------------------------------------------------
// store.dexResearchStatus: Map<gameKey, { [monId]: { [taskIndex]: number|boolean } }>
/**
 * Aggregate research entries for a game into a simple summary
 * (completed vs total count).
 */
function _researchStatsFor(gameKey, store) {
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
 * Build the summary card data for a given game's dex section.
 * Returned object is consumed by the card renderer.
 */
export function dexSummaryCardFor(gameKey, genKey, store) {
	const games = window.DATA.games?.[genKey] || [];
	const game = games.find((g) => g.key === gameKey);
	const dex = window.DATA.dex?.[gameKey] || [];

	// ——— Inject golden meter styles once ———
	if (!document.getElementById("ppgc-golden-meter-css")) {
		const style = document.createElement("style");
		style.id = "ppgc-golden-meter-css";
		document.head.appendChild(style);
	}

	const isMythical = (m) => !!m?.mythical;

	// --- Species meter (base/extra) using effective species status (forms-aware)
	const baseDex = dex.filter((m) => !isMythical(m));
	const extraDex = dex.filter((m) => isMythical(m));
	const baseTotal = baseDex.length;
	const extraTotal = extraDex.length;

	const baseDone = baseDex.filter((m) =>
		isCompletedForGame(game, _effectiveSpeciesStatus(store, gameKey, m))
	).length;
	const extraDone = extraDex.filter((m) =>
		isCompletedForGame(game, _effectiveSpeciesStatus(store, gameKey, m))
	).length;

	const pctBase = baseTotal ? (baseDone / baseTotal) * 100 : 0;
	const pctExtended = baseTotal
		? ((baseDone + extraDone) / baseTotal) * 100
		: 0;
	const pctBar = Math.min(
		100,
		Math.max(0, Math.round((baseDone / Math.max(1, baseTotal)) * 100))
	);
	const pctExtraOverlay =
		baseTotal > 0 && baseDone === baseTotal && extraTotal > 0
			? (extraDone / extraTotal) * 100
			: 0;

	// --- National meter (same math, but against `${base}-national`) ---
	const baseGameKey = String(gameKey).endsWith("-national")
		? String(gameKey).replace(/-national$/, "")
		: String(gameKey);
	const natKey = `${baseGameKey}-national`;
	const natDex = window.DATA.dex?.[natKey] || [];

	const natBaseDex = natDex.filter((m) => !isMythical(m));
	const natExtraDex = natDex.filter((m) => isMythical(m));
	const natBaseTotal = natBaseDex.length;
	const natExtraTotal = natExtraDex.length;

	const natBaseDone = natBaseDex.filter((m) =>
		isCompletedForGame(game, _effectiveSpeciesStatus(store, natKey, m))
	).length;
	const natExtraDone = natExtraDex.filter((m) =>
		isCompletedForGame(game, _effectiveSpeciesStatus(store, natKey, m))
	).length;

	const natPctBase = natBaseTotal ? (natBaseDone / natBaseTotal) * 100 : 0;
	const natPctExtended = natBaseTotal
		? ((natBaseDone + natExtraDone) / natBaseTotal) * 100
		: 0;
	const natPctBar = Math.min(
		100,
		Math.max(0, Math.round((natBaseDone / Math.max(1, natBaseTotal)) * 100))
	);
	const natPctExtraOverlay =
		natBaseTotal > 0 && natBaseDone === natBaseTotal && natExtraTotal > 0
			? (natExtraDone / natExtraTotal) * 100
			: 0;

	// --- Forms meter (split base/extra by per-form "mythical" flag)
	const haveNat = natBaseTotal > 0;
	const formsDex = haveNat ? natDex : dex;
	const speciesWithForms = formsDex.filter((m) => Array.isArray(m.forms) && m.forms.length);

	// totals
	let formsBaseTotal = 0,
		formsExtraTotal = 0,
		formsBaseDone = 0,
		formsExtraDone = 0;

	for (const m of speciesWithForms) {
		const nodeKey = haveNat ? natKey : gameKey;
		const { node } = _getDexFormsNode(store, nodeKey, m.id);

		for (const f of m.forms) {
			const name = typeof f === "string" ? f : f?.name;
			if (!name) continue;

			const isExtra = _isMythicalForm(f);               // <- mythical form?
			const v = normalizeFlag(node.forms?.[name] || "unknown");
			const isDone = isCompletedForGame(game, v);

			if (isExtra) {
				formsExtraTotal += 1;
				if (isDone) formsExtraDone += 1;
			} else {
				formsBaseTotal += 1;
				if (isDone) formsBaseDone += 1;
			}
		}
	}

	// base vs extended math (mirrors species meters)
	const formsPctBase = formsBaseTotal ? (formsBaseDone / formsBaseTotal) * 100 : 0;
	const formsPctExtended = formsBaseTotal ? ((formsBaseDone + formsExtraDone) / formsBaseTotal) * 100 : 0;
	const formsPctBar = Math.min(100, Math.max(0, Math.round((formsBaseDone / Math.max(1, formsBaseTotal)) * 100)));
	const formsPctExtraOverlay =
		formsBaseTotal > 0 && formsBaseDone === formsBaseTotal && formsExtraTotal > 0
			? (formsExtraDone / formsExtraTotal) * 100
			: 0;

	const haveForms = (formsBaseTotal + formsExtraTotal) > 0;

	const { baseTotal: researchBaseTotal,
		extraTotal: researchExtraTotal,
		baseDone: researchBaseDone,
		extraDone: researchExtraDone } = _researchStatsFor(gameKey, store);

	const haveResearch = researchBaseTotal + researchExtraTotal > 0;

	let researchPctBar = 0,
		researchPctExtraOverlay = 0,
		researchLabelPct = 0;

	if (haveResearch) {
		const pctBase =
			researchBaseTotal ? (researchBaseDone / researchBaseTotal) * 100 : 0;
		const pctExtended = researchBaseTotal
			? ((researchBaseDone + researchExtraDone) / researchBaseTotal) * 100
			: 0;

		researchLabelPct =
			researchBaseDone === researchBaseTotal ? pctExtended : pctBase;
		researchPctBar = Math.min(
			100,
			Math.max(0, Math.round((researchBaseDone / Math.max(1, researchBaseTotal)) * 100))
		);
		researchPctExtraOverlay =
			researchBaseTotal > 0 &&
				researchBaseDone === researchBaseTotal &&
				researchExtraTotal > 0
				? (researchExtraDone / researchExtraTotal) * 100
				: 0;
	}

	const card = document.createElement("section");
	card.className = "card";
	const nationalHTML = haveNat
		? `
  <!-- national meter -->
  <div class="small">National:
    ${natBaseDone === natBaseTotal ? natBaseDone + natExtraDone : natBaseDone}
    / ${natBaseTotal || 0}
    (${(natBaseDone === natBaseTotal ? natPctExtended : natPctBase).toFixed(2)}%)
  </div>
  <div class="progress ${natPctExtraOverlay > 0 ? "has-extra" : ""}">
    <span class="base"  style="width:${natPctBar}%"></span>
    <span class="extra" style="width:${natPctExtraOverlay}%"></span>
    ${natPctExtraOverlay > 0 ? `<div class="extra-badge" title="Extra credit progress">+${natPctExtraOverlay.toFixed(0)}%</div>` : ``}
  </div>`
		: ``;

	const formsHTML = haveForms
		? `
  <!-- forms meter -->
  <div class="small">
    Forms:
    ${formsBaseDone === formsBaseTotal ? formsBaseDone + formsExtraDone : formsBaseDone}
    / ${formsBaseTotal || 0}
    (${(formsBaseDone === formsBaseTotal ? formsPctExtended : formsPctBase).toFixed(2)}%)
  </div>
  <div class="progress ${formsPctExtraOverlay > 0 ? "has-extra" : ""}">
    <span class="base"  style="width:${formsPctBar}%"></span>
    <span class="extra" style="width:${formsPctExtraOverlay}%"></span>
    ${formsPctExtraOverlay > 0 ? `<div class="extra-badge" title="Extra credit progress">+${formsPctExtraOverlay.toFixed(0)}%</div>` : ``}
  </div>`
		: ``;

	const researchHTML = haveResearch
		? `
  <!-- research meter -->
  <div class="small">
    Research Tasks:
    ${researchBaseDone === researchBaseTotal ? researchBaseDone + researchExtraDone : researchBaseDone}
    / ${researchBaseTotal || 0}
    (${researchLabelPct.toFixed(2)}%)
  </div>
  <div class="progress ${researchPctExtraOverlay > 0 ? "has-extra" : ""}">
    <span class="base"  style="width:${researchPctBar}%"></span>
    <span class="extra" style="width:${researchPctExtraOverlay}%"></span>
    ${researchPctExtraOverlay > 0 ? `<div class="extra-badge" title="Extra credit progress">+${researchPctExtraOverlay.toFixed(0)}%</div>` : ``}
  </div>`
		: ``;

	card.innerHTML = `
  <div class="card-hd"><h3>Pokédex — <span class="small">${game?.label || gameKey
		}</span></h3></div>
  <div class="card-bd">
    <!-- species meter -->
    <div class="small">Regional: ${baseDone === baseTotal ? baseDone + extraDone : baseDone}
      / ${baseTotal || 0} (${(baseDone === baseTotal ? pctExtended : pctBase).toFixed(2)}%)</div>
   <div class="progress ${pctExtraOverlay > 0 ? "has-extra" : ""}">
   <span class="base" style="width:${pctBar}%"></span>
   <span class="extra" style="width:${pctExtraOverlay}%"></span>
   ${pctExtraOverlay > 0 ? `<div class="extra-badge" title="Extra credit progress">+${Math.round(pctExtraOverlay)}%</div>` : ``}
 </div>
    ${nationalHTML}
    ${formsHTML}
    ${researchHTML}
  </div>`;
	return card;
}
/**
 * Compute overall dex completion percentage for a game.
 */
export function dexPctFor(gameKey, genKey, store) {
	const games = window.DATA.games?.[genKey] || [];
	const game = games.find((g) => g.key === gameKey);
	const dex = window.DATA.dex?.[gameKey] || [];

	const isMythical = (m) => !!m?.mythical;

	const baseDex = dex.filter((m) => !isMythical(m));
	const extraDex = dex.filter((m) => isMythical(m));
	const baseDone = baseDex.filter((m) =>
		isCompletedForGame(game, _effectiveSpeciesStatus(store, gameKey, m))
	).length;
	const baseTotal = baseDex.length;
	const extraDone = extraDex.filter((m) =>
		isCompletedForGame(game, _effectiveSpeciesStatus(store, gameKey, m))
	).length;

	const pctBase = baseTotal ? (baseDone / baseTotal) * 100 : 0;
	const pctExtended = ((baseDone + extraDone) / Math.max(1, baseTotal)) * 100;
	return baseDone === baseTotal ? pctExtended : pctBase;
}
/**
 * Compute forms-only completion percentage for a game.
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
	const speciesWithForms = formsDex.filter((m) => Array.isArray(m.forms) && m.forms.length);

	let baseTotal = 0, extraTotal = 0, baseDone = 0, extraDone = 0;

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

	const { baseTotal, extraTotal, baseDone, extraDone } = _researchStatsFor(
		gameKey,
		store
	);
	if (!baseTotal) return 0;

	const pctBase = (baseDone / baseTotal) * 100;
	const pctExtended = ((baseDone + extraDone) / baseTotal) * 100;

	// mirror species/forms: show extended only when base is full
	return baseDone === baseTotal ? pctExtended : pctBase;
}
window.PPGC = window.PPGC || {};
window.PPGC.formsPctFor = (gameKey, genKey) => formsPctFor(gameKey, genKey, store);
window.PPGC.researchPctFor = (gameKey, genKey) => researchPctFor(gameKey, genKey, store);

/**
 * Wire up the main dex modal: search, bulk controls, per-mon cards,
 * forms wheel modal, and research modal.
 */
export function wireDexModal(store, els) {
	let _closing = false;
	const {
		modal,
		modalClose,
		dexGrid,
		dexSearch,
		dexSelectAll,
		dexClearAll,
		modalTitle,
	} = els;
	const bulkStatusSelect = dexClearAll;

	const formsModal = document.getElementById("formsModal");
	const formsModalClose = document.getElementById("formsModalClose");
	const formsWheel = document.getElementById("formsWheel");
	let formsNonce = 0;

	const researchModal = document.getElementById("researchModal");
	const researchModalClose = document.getElementById("researchModalClose");
	const researchGrid = document.getElementById("researchGrid");
	const researchTitle = document.getElementById("researchTitle");

	const monInfoModal = document.getElementById("monInfoModal");
	const monInfoClose = document.getElementById("monInfoClose");
	const monInfoTitle = document.getElementById("monInfoTitle");
	const monInfoBody = document.getElementById("monInfoBody");

	if (formsModal && formsModal.parentElement !== document.body) {
		document.body.appendChild(formsModal);
	}

	const modalChange =
		modal.querySelector("header .modalChange") || modal.querySelector(".modal-hd");
	const scopeBtn = document.createElement("button");
	scopeBtn.type = "button";
	scopeBtn.className = "button scope-toggle";
	scopeBtn.title = "Dex Toggle";

	function isNatKey(k) {
		return String(k || "").endsWith("-national");
	}
	function baseOf(k) {
		return isNatKey(k) ? String(k).replace(/-national$/, "") : String(k);
	}
	function updateScopeBtnLabel(gameKey) {
		const base = baseOf(gameKey);
		const natKey = `${base}-national`;
		const natDex = window.DATA.dex?.[natKey] || [];
		const hasNat = Array.isArray(natDex) && natDex.length > 0;

		if (!hasNat) {
			// No National Dex data: hide the toggle completely
			scopeBtn.style.display = "none";
			return;
		}

		// National Dex exists: show the toggle and set label
		scopeBtn.style.display = "";
		scopeBtn.textContent = isNatKey(gameKey) ? "RegiDex" : "NatiDex";
	}

	if (modalChange) {
		const modalClose = modalChange.querySelector('.modalClose');
		modalChange.insertBefore(scopeBtn, modalClose || modalChange.firstChild);
	}

	window.PPGC = window.PPGC || {};
	if (!Array.isArray(window.PPGC._pendingDexSyncs))
		window.PPGC._pendingDexSyncs = [];

	function _queueDexSync(gameKey, dexId, status) {
		window.PPGC._pendingDexSyncs.push({ gameKey, dexId, status });
	}
	const GEN1_DEX_GAMES = new Set(["red", "blue", "yellow"]);
	function shouldUseColorSprite(gameKey) {
		if (!gameKey) return null;
		// baseOf() strips "-national" (e.g. "red-national" -> "red")
		const base = baseOf(gameKey);
		if (!GEN1_DEX_GAMES.has(base)) return null;
		// use true/false when we’re actually in a Gen 1 game
		return window.PPGC?.gen1SpriteColor === true;
	}
	function getImageForStatus(it, status) {
		const s = normalizeFlag(status);
		const gameKey = store.state.dexModalFor;
		const useColor = shouldUseColorSprite(gameKey);

		// Gen 1 (Red/Blue/Yellow): no shinies, just swap B/W vs color
		if (useColor !== null) {
			const baseImg = it.img || "";
			const colorImg = it.imgS || baseImg;
			return useColor ? colorImg : baseImg;
		}

		// Everyone else: existing shiny logic
		if (!s || s === "unknown" || s === "seen") return it.img || "";
		if (s === "shiny" || s === "shiny_alpha") return it.imgS || it.img || "";
		// "alpha" uses normal sprite; badge indicates alpha
		return it.img || "";
	}
	function getFilterClassForStatus(status) {
		const s = normalizeFlag(status);
		if (!s || s === "unknown") return "status-unknown";
		if (s === "seen") return "status-seen";
		return "status-normal";
	}
	function renderBadges(status) {
		const s = normalizeFlag(status);
		const icons = [];
		const isAlpha = (v) => v === "alpha" || v === "shiny_alpha";
		const isShiny = (v) => v === "shiny" || v === "shiny_alpha";
		if (isShiny(s) && window.DATA.marks?.shiny) {
			icons.push(`<img src="${window.DATA.marks.shiny}" alt="Shiny Badge"/>`);
		}
		if (isAlpha(s) && window.DATA.marks?.alpha) {
			icons.push(`<img src="${window.DATA.marks.alpha}" alt="Alpha Badge"/>`);
		}
		return icons.length ? `<div class="badges">${icons.join("")}</div>` : "";
	}
	// --- NEW: Dex↔Dex sync ----------------------------------------------
	function _resolveDexTargetKey(link) {
		// Per-game national keys: "ruby" -> "ruby-national"
		if (link?.dexType === "national") return `${link?.game}-national`;
		return link?.game;
	}
	function _resolveFormNameFor(link, entryId, targetGameKey) {
		if (typeof link?.form === "undefined" || link.form === null) return null;
		if (typeof link.form === "string") return link.form;

		// number => index into entry.forms (support 0- or 1-based)
		const dexList = window.DATA?.dex?.[targetGameKey] || [];
		const entry = dexList.find((e) => e && e.id === link.id);
		const forms = Array.isArray(entry?.forms) ? entry.forms : [];
		const idx =
			typeof link.form === "number"
				? link.form >= 1
					? link.form - 1
					: link.form
				: -1;
		const f = forms[idx];
		if (!f) return null;
		return typeof f === "string" ? f : f?.name || null;
	}

	/** Mirror changed statuses from the edited dex to linked dex entries. */
	function applyDexLinksFromDexEntries(gameKey, changedMap) {
		const dexList = window.DATA?.dex?.[gameKey] || [];
		if (!dexList.length) return;

		for (const [idStr, newStatusRaw] of Object.entries(changedMap || {})) {
			const dexId = Number(idStr);
			const entry = dexList.find((e) => e && e.id === dexId);
			if (!entry) continue;
			const links = Array.isArray(entry.dexSync) ? entry.dexSync : [];
			if (!links.length) continue;

			// normalize once
			const newStatus = String(newStatusRaw || "unknown")
				.trim()
				.toLowerCase();

			for (const link of links) {
				const targetGameKey = _resolveDexTargetKey(link);
				const targetId = link?.id;
				if (!targetGameKey || typeof targetId !== "number") continue;

				const formName = _resolveFormNameFor(link, targetId, targetGameKey);
				if (!formName) {
					// species-level mirror (write exact status)
					const curr = store.dexStatus.get(targetGameKey) || {};
					curr[targetId] = newStatus;
					store.dexStatus.set(targetGameKey, curr);
					save();
				} else {
					// form-level mirror
					const formsMap = store.dexFormsStatus.get(targetGameKey) || {};
					const node = formsMap[targetId] || { all: false, forms: {} };
					node.forms = node.forms || {};
					node.forms[formName] = newStatus;
					// recompute .all flag when every form is non-unknown
					const tList =
						(window.DATA?.dex?.[targetGameKey] || []).find(
							(e) => e && e.id === targetId
						)?.forms || [];
					const total = tList.length;
					const filled = tList.reduce((a, f) => {
						const nm = typeof f === "string" ? f : f?.name;
						return a + ((node.forms?.[nm] || "unknown") !== "unknown" ? 1 : 0);
					}, 0);
					node.all = total > 0 && filled === total && newStatus !== "unknown";
					formsMap[targetId] = node;
					store.dexFormsStatus.set(targetGameKey, formsMap);
					save();
				}
			}
		}
	}
	// Mirror a single form status from this dex to linked dex entries.
	function applyDexLinksFromForm(sourceGameKey, sourceMonId, sourceFormName, status) {
		const dexList = window.DATA?.dex?.[sourceGameKey] || [];
		if (!dexList.length) return;

		const entry = dexList.find((e) => e && e.id === sourceMonId);
		if (!entry) return;

		const formsArr = Array.isArray(entry.forms) ? entry.forms : [];
		const srcForm = formsArr.find((f) => {
			if (!f) return false;
			if (typeof f === "string") return f === sourceFormName;
			return f.name === sourceFormName;
		});

		// Collect only form-specific links:
		//  - any entry.dexSync that has a .form field
		//  - plus any dexSync on the source form itself
		const entryLinks = Array.isArray(entry.dexSync)
			? entry.dexSync.filter(
				(lnk) =>
					typeof lnk?.form !== "undefined" &&
					lnk.form !== null
			)
			: [];

		const formLinks =
			srcForm &&
				typeof srcForm === "object" &&
				Array.isArray(srcForm.dexSync)
				? srcForm.dexSync
				: [];

		// ✅ proper merge of the two link lists
		const links = [...entryLinks, ...formLinks];
		if (!links.length) return;

		const newStatus = String(status || "unknown")
			.trim()
			.toLowerCase();

		for (const link of links) {
			const targetGameKey = _resolveDexTargetKey(link);
			const targetId = link?.id;
			if (!targetGameKey || typeof targetId !== "number") continue;

			const targetFormName = _resolveFormNameFor(
				link,
				targetId,
				targetGameKey
			);
			if (!targetFormName) continue;

			const formsMap = store.dexFormsStatus.get(targetGameKey) || {};
			const node = formsMap[targetId] || { all: false, forms: {} };
			node.forms = node.forms || {};

			// Set the target form’s status
			node.forms[targetFormName] = newStatus;

			// Recompute .all for the target mon
			const targetDexEntry = (window.DATA?.dex?.[targetGameKey] || []).find(
				(e) => e && e.id === targetId
			);
			const targetForms = Array.isArray(targetDexEntry?.forms)
				? targetDexEntry.forms
				: [];
			const total = targetForms.length;
			const filled = targetForms.reduce((a, f) => {
				const nm = typeof f === "string" ? f : f?.name;
				const v = nm ? node.forms?.[nm] || "unknown" : "unknown";
				return a + (v !== "unknown" ? 1 : 0);
			}, 0);
			node.all =
				total > 0 && filled === total && newStatus !== "unknown";

			formsMap[targetId] = node;
			store.dexFormsStatus.set(targetGameKey, formsMap);
			save();
		}
	}

	// Diff the current game's status against the snapshot and run both syncs
	function _syncChangesForCurrentGame() {
		const gameKey = store.state.dexModalFor;
		if (!gameKey) return;

		const before = modal.__dexSnapshot || {};
		const after = store.dexStatus.get(gameKey) || {};
		const changed = {};
		for (const k of new Set([...Object.keys(before), ...Object.keys(after)])) {
			const b = before[k] || "unknown";
			const a = after[k] || "unknown";
			if (a !== b) changed[k] = a;
		}

		if (Object.keys(changed).length === 0) return;

		// Dex ↔ Dex links
		try {
			applyDexLinksFromDexEntries(gameKey, changed);
		} catch (e) {
			console.error("applyDexLinksFromDexEntries (swap) error:", e);
		}

		// Dex → Task links (existing integration)
		try {
			window.PPGC.applyDexSyncsFromDexEntries?.(gameKey, changed);
		} catch (e) {
			console.error("applyDexSyncsFromDexEntries (swap) error:", e);
		}

		// Refresh snapshot so we don't re-apply the same diffs
		modal.__dexSnapshot = { ...after };
	}

	function renderDexGrid() {
		const gameKey = store.state.dexModalFor;
		if (!gameKey) return;
		const genKey = (window.DATA.tabs || [])
			.map((t) => t.key)
			.find((gk) =>
				(window.DATA.games[gk] || []).some((g) => g.key === gameKey)
			);
		const game = (window.DATA.games?.[genKey] || []).find(
			(g) => g.key === gameKey
		);
		const dex = window.DATA.dex?.[gameKey] || [];
		const q = (dexSearch.value || "").trim().toLowerCase();
		const options = game ? game.flags : ["shiny", "caught", "seen", "unknown"];
		const statusMap = store.dexStatus.get(gameKey) || {};

		if (bulkStatusSelect && bulkStatusSelect.tagName === "SELECT") {
			const prev = normalizeFlag(bulkStatusSelect.value || "");
			const normalizedOptions = options.map((o) => normalizeFlag(o));

			// Prefer the previously chosen value if still valid; otherwise default nicely
			let desired =
				prev && normalizedOptions.includes(prev)
					? prev
					: normalizedOptions.includes("caught")
						? "caught"
						: normalizedOptions[0] || "unknown";

			bulkStatusSelect.innerHTML = normalizedOptions
				.map((val) => {
					const label = val
						.replace(/_/g, " ")
						.replace(/\b\w/g, (s) => s.toUpperCase());
					const selected = val === desired ? "selected" : "";
					return `<option value="${val}" ${selected}>${label}</option>`;
				})
				.join("");

			bulkStatusSelect.value = desired;
		}

		const filtered = dex.filter((it) =>
			`${it.id} ${it.name}`.toLowerCase().includes(q)
		);
		dexGrid.innerHTML = "";
		filtered.forEach((it) => {
			let current = statusMap[it.id] || "unknown";

			const hasForms = Array.isArray(it.forms) && it.forms.length > 0;
			const hasResearch = Array.isArray(it.research) && it.research.length > 0;

			if (hasForms) {
				// When a mon has forms, the card status comes from its forms only
				const { node } = _getDexFormsNode(store, gameKey, it.id);
				const formVals = (it.forms || []).map((f) => {
					const name = typeof f === "string" ? f : f?.name;
					return node.forms?.[name] || "unknown";
				});
				current = pickHighestStatus(formVals);
			}

			current = clampStatusForMon(it, current);

			const src = getImageForStatus(it, current);
			const cls = getFilterClassForStatus(current);
			const card = document.createElement("article");
			card.className = "card";
			card.setAttribute("role", "listitem");
			card.style.setProperty("--accent", game?.color || "#6aa6ff");
			const keyForCount = `${gameKey}:${it.id}`;
			const formsCountHTML = hasForms
				? `<span class="pill count" data-dex-forms-count="${keyForCount}"></span>`
				: "";
			const researchCountHTML = hasResearch
				? `<span class="pill count" data-dex-research-count="${keyForCount}"></span>`
				: "";
			card.innerHTML = `
				<div class="thumb ${cls}">
				<button
					type="button"
					class="dex-info-btn"
					title="Show detailed info for ${it.name}"
					aria-label="Show detailed info for ${it.name}"
					>i
				</button>
					<div class="name" title="${it.id}">#${String(it.id).padStart(3, "0")}
					${renderBadges(current)}
				</div>
				${src
					? `<img class="sprite" alt="${it.name}" src="${src}" loading="lazy"/>`
					: `<div style="opacity:.5;">No image</div>`
				}
				</div>
				<div class="card-bd">
				<div class="name" title="${it.name}">${it.name}</div>
				<div class="row">
					${hasForms
					? `<button class="forms-launch" title="Choose forms">
                        <span class="dot"></span><span>Forms</span>${formsCountHTML}
                      </button>`
					: `<select class="flag-select" aria-label="Status for ${it.name
					}">
                        ${options
						.map((opt) => {
							const val = normalizeFlag(opt);
							if (!isOptionAllowedForMon(it, val)) return "";
							const label = val
								.replace(/_/g, " ")
								.replace(/\b\w/g, (s) => s.toUpperCase());
							const currentVal = clampStatusForMon(it, statusMap[it.id] || "unknown");
							return `<option value="${val}" ${val === currentVal ? "selected" : ""
								}>${label}</option>`;
						})
						.join("")}
                      </select>`
				}
            	${hasResearch
					? `<button class="research-launch" title="Research tasks"
                          data-game="${gameKey}"
                          data-id="${it.id}">
                <span class="dot"></span><span>Research</span>${researchCountHTML}
              </button>`
					: ""
				}
          </div>
        </div>`;
			const infoBtn = card.querySelector(".dex-info-btn");
			if (infoBtn) {
				infoBtn.addEventListener("click", (e) => {
					e.stopPropagation();
					openMonInfo(gameKey, genKey, it);
				});
			}
			if (hasForms) {
				card.querySelector(".forms-launch")?.addEventListener("click", (e) => {
					e.stopPropagation();
					openDexForms(gameKey, genKey, it);
				});
				const countEl = card.querySelector(
					`[data-dex-forms-count="${keyForCount}"]`
				);
				if (countEl) {
					const total = (it.forms || []).length;
					const { node } = _getDexFormsNode(store, gameKey, it.id);
					const filled = (it.forms || []).reduce((acc, f) => {
						const name = typeof f === "string" ? f : f?.name;
						return (
							acc + ((node.forms?.[name] || "unknown") !== "unknown" ? 1 : 0)
						);
					}, 0);
					countEl.textContent = `${filled}/${total}`;
				}
			}
			if (hasResearch) {
				card.querySelector(".research-launch")?.addEventListener("click", (e) => {
					e.stopPropagation();
					openResearchModal(gameKey, genKey, it);
				});

				const researchCountEl = card.querySelector(
					`[data-dex-research-count="${keyForCount}"]`
				);
				if (researchCountEl) {
					const tasks = Array.isArray(it.research) ? it.research : [];
					const totalTasks = tasks.length || 0;

					const recAll =
						store.dexResearchStatus instanceof Map
							? store.dexResearchStatus.get(gameKey) || {}
							: {};
					const rec = recAll[it.id] || {};

					let doneTasks = 0;
					tasks.forEach((t, idx) => {
						const tiers = Array.isArray(t.tiers) ? t.tiers : [];
						const steps = tiers.length || 1;

						const raw = rec[idx];
						const level =
							typeof raw === "number"
								? raw
								: raw
									? steps   // legacy “true” = full
									: 0;

						if (level >= steps) {
							doneTasks++;
						}
					});

					researchCountEl.textContent = `${doneTasks}/${totalTasks}`;
				}
			}
			const select = card.querySelector("select.flag-select");
			if (select) {
				select.addEventListener("change", () => {
					let newVal = normalizeFlag(select.value);
					newVal = clampStatusForMon(it, newVal);
					select.value = newVal;

					const curr = store.dexStatus.get(gameKey) || {};
					curr[it.id] = newVal;
					store.dexStatus.set(gameKey, curr);
					save();
					_queueDexSync(gameKey, it.id, newVal);

					const thumb = card.querySelector(".thumb");
					const img = card.querySelector("img.sprite");
					const newSrc = getImageForStatus(it, newVal);
					const newCls = getFilterClassForStatus(newVal);
					thumb.classList.remove(
						"status-unknown",
						"status-seen",
						"status-normal"
					);
					thumb.classList.add(newCls);
					if (img) img.src = newSrc;

					const oldBadges = card.querySelector(".badges");
					oldBadges?.remove();
					const newBadgesHTML = renderBadges(newVal);
					if (newBadgesHTML)
						thumb.insertAdjacentHTML("afterbegin", newBadgesHTML);
				});
			}
			dexGrid.appendChild(card);
		});
	}

	scopeBtn.addEventListener("click", () => {
		_syncChangesForCurrentGame();

		const current = store.state.dexModalFor;
		if (!current) return;
		const base = baseOf(current);
		const natKey = `${base}-national`;
		const natDex = window.DATA.dex?.[natKey] || [];

		// If there is no national dex data, do nothing
		if (!Array.isArray(natDex) || natDex.length === 0) return;

		const nextKey = isNatKey(current) ? base : natKey;

		// keep genKey consistent for title/color
		const genKey =
			(window.DATA.tabs || [])
				.map((t) => t.key)
				.find((gk) =>
					(window.DATA.games[gk] || []).some((g) => g.key === base)
				) || null;

		openDexModal(nextKey, genKey);
	});

	function openDexModal(gameKey, genKey) {
		updateScopeBtnLabel(gameKey);
		store.state.dexModalFor = gameKey;

		// Use the *base* game for the label (e.g. "ruby" even if "ruby-national")
		const baseKey = baseOf(gameKey);
		const gameBase = (window.DATA.games?.[genKey] || []).find(
			(g) => g.key === baseKey
		);

		const tasksStore = window.PPGC?._tasksStoreRef;
		if (tasksStore) {
			const sections = window.DATA?.sections?.[gameKey] || [];
			for (const s of sections) {
				if (!s?.id) continue;
				bootstrapTasks(s.id, tasksStore);
			}
		}

		const curr = store.dexStatus.get(gameKey) || {};
		modal.__dexSnapshot = { ...curr };

		// Build title: "Ruby (RegiDex)" or "Ruby (NatiDex)"
		const baseLabel = gameBase ? gameBase.label : baseKey;
		const scopeLabel = isNatKey(gameKey) ? "NatiDex" : "RegiDex";
		modalTitle.textContent = `Dex Editor — ${baseLabel} (${scopeLabel})`;

		dexSearch.value = "";
		renderDexGrid();
		modal.classList.add("open");
		modal.setAttribute("aria-hidden", "false");
	}
	function closeModal() {
		if (_closing) return;
		_closing = true;

		// Hide the modal first (keep DOM stable while we work)
		modal.classList.remove("open");
		modal.setAttribute("aria-hidden", "true");

		// Kill any tooltips so nothing “sticks” at top-left
		try {
			window.PPGC?.hideTooltips?.();
		} catch { }

		// Mute inner renders while we sync
		window.PPGC = window.PPGC || {};
		window.PPGC._suppressRenders = true;

		// --- NEW: figure out which game we’re editing and what actually changed
		const gameKey = store.state.dexModalFor; // still set right now
		const before = modal.__dexSnapshot || {}; // snapshot taken on open
		const after = store.dexStatus.get(gameKey) || {}; // current status map
		const changed = {};
		for (const k of new Set([...Object.keys(before), ...Object.keys(after)])) {
			const b = before[k] || "unknown";
			const a = after[k] || "unknown";
			if (a !== b) changed[k] = a; // only apply diffs
		}

		// Apply Dex -> Task using Dex entries’ taskSyncs (no rendering here)
		try {
			applyDexLinksFromDexEntries(gameKey, changed);
		} catch (e) {
			console.error("applyDexLinksFromDexEntries error:", e);
		}
		// Then apply Dex -> Task using Dex entries’ taskSyncs
		try {
			window.PPGC.applyDexSyncsFromDexEntries?.(gameKey, changed);
		} catch (e) {
			console.error("applyDexSyncsFromDexEntries error:", e);
		}

		// Now mark modal closed and persist
		store.state.dexModalFor = null;
		save();

		// Unmute and render exactly once on next frame
		window.PPGC._suppressRenders = false;
		requestAnimationFrame(() => {
			try {
				window.PPGC?.renderAll?.();
			} catch (e) {
				console.error(e);
			}
			_closing = false;
		});
	}
	function openMonInfo(gameKey, genKey, mon) {
		if (!monInfoModal || !monInfoBody) return;

		const info = window.DATA?.monInfo?.[gameKey]?.[mon.id] || null;

		if (monInfoTitle) {
			monInfoTitle.textContent = info?.displayName || mon.name;
		}

		const types = info?.types || mon.types || [];
		const abilities = info?.abilities || [];
		const eggGroups = info?.eggGroups || [];
		const evo = info?.evolution || null;
		const moves = info?.moves || {};
		const locations = info?.locations || [];

		// Allow monInfo to override sprite if you ever want custom art
		const spriteSrc = info?.sprite || mon.img || null;

		const renderListRow = (label, valueOrArr) => {
			if (valueOrArr == null) return "";
			let v = valueOrArr;

			if (Array.isArray(valueOrArr)) {
				if (!valueOrArr.length) return "";
				v = valueOrArr.join(", ");
			}
			if (v === "") return "";

			return `
        <div class="mon-info-row">
          <span class="label">${label}</span>
          <span class="value">${v}</span>
        </div>`;
		};

		// ---------- TYPE CHART: auto-calc from Pokémon's types (PokémonDB-style, 3 rows × 6 columns) ----------
		let chartHtml = "";

		// Full 18-type effectiveness chart: attackType -> defendType -> multiplier
		const TYPE_CHART = {
			Normal: { Rock: 0.5, Steel: 0.5, Ghost: 0 },
			Fire: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 2, Bug: 2, Rock: 0.5, Dragon: 0.5, Steel: 2 },
			Water: { Fire: 2, Water: 0.5, Grass: 0.5, Ground: 2, Rock: 2, Dragon: 0.5 },
			Grass: { Fire: 0.5, Water: 2, Grass: 0.5, Poison: 0.5, Ground: 2, Flying: 0.5, Bug: 0.5, Rock: 2, Dragon: 0.5, Steel: 0.5 },
			Electric: { Water: 2, Electric: 0.5, Grass: 0.5, Ground: 0, Flying: 2, Dragon: 0.5 },
			Ice: { Fire: 0.5, Water: 0.5, Grass: 2, Ground: 2, Flying: 2, Dragon: 2, Steel: 0.5, Ice: 0.5 },

			Fighting: {
				Normal: 2, Ice: 2, Rock: 2, Dark: 2, Steel: 2,
				Poison: 0.5, Flying: 0.5, Psychic: 0.5, Bug: 0.5, Fairy: 0.5,
				Ghost: 0
			},
			Poison: { Grass: 2, Fairy: 2, Poison: 0.5, Ground: 0.5, Rock: 0.5, Ghost: 0.5, Steel: 0 },
			Ground: { Fire: 2, Electric: 2, Poison: 2, Rock: 2, Steel: 2, Grass: 0.5, Bug: 0.5, Flying: 0 },
			Flying: { Grass: 2, Fighting: 2, Bug: 2, Electric: 0.5, Rock: 0.5, Steel: 0.5 },
			Psychic: { Fighting: 2, Poison: 2, Psychic: 0.5, Steel: 0.5, Dark: 0 },
			Bug: {
				Grass: 2, Psychic: 2, Dark: 2,
				Fire: 0.5, Fighting: 0.5, Poison: 0.5, Flying: 0.5, Ghost: 0.5,
				Steel: 0.5, Fairy: 0.5
			},
			Rock: { Fire: 2, Ice: 2, Flying: 2, Bug: 2, Fighting: 0.5, Ground: 0.5, Steel: 0.5 },
			Ghost: { Psychic: 2, Ghost: 2, Dark: 0.5, Normal: 0 },
			Dragon: { Dragon: 2, Steel: 0.5, Fairy: 0 },
			Dark: { Psychic: 2, Ghost: 2, Fighting: 0.5, Dark: 0.5, Fairy: 0.5 },
			Steel: { Rock: 2, Ice: 2, Fairy: 2, Fire: 0.5, Water: 0.5, Electric: 0.5, Steel: 0.5 },
			Fairy: { Fighting: 2, Dragon: 2, Dark: 2, Fire: 0.5, Poison: 0.5, Steel: 0.5 },
		};

		const ALL_TYPES = [
			"Normal", "Fire", "Water", "Electric", "Grass", "Ice",
			"Fighting", "Poison", "Ground", "Flying", "Psychic",
			"Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy",
		];

		const ABBR = {
			Normal: "Nor", Fire: "Fir", Water: "Wat", Electric: "Ele", Grass: "Gra",
			Ice: "Ice", Fighting: "Fig", Poison: "Poi", Ground: "Gro", Flying: "Fly",
			Psychic: "Psy", Bug: "Bug", Rock: "Roc", Ghost: "Gho", Dragon: "Dra",
			Dark: "Dar", Steel: "Ste", Fairy: "Fai",
		};

		const normalizeTypeName = (t) => {
			if (!t) return null;
			const s = String(t).toLowerCase();
			return s.charAt(0).toUpperCase() + s.slice(1);
		};

		// Auto-compute damage taken buckets (4x / 2x / 1x / 1/2x / 1/4x / 0x) from the Pokémon's types
		const defTypes = (types || []).map(normalizeTypeName).filter(Boolean);

		if (defTypes.length) {
			const dmg = {
				"4x": [],
				"2x": [],
				"1.5x": [],
				"1x": [],
				"0.5x": [],
				"0.25x": [],
				"0x": [],
			};

			for (const atk of ALL_TYPES) {
				let mult = 1;
				for (const def of defTypes) {
					const row = TYPE_CHART[atk] || {};
					const m = row[def] != null ? row[def] : 1;
					mult *= m;
				}

				let bucket = "1x";
				if (mult === 0) bucket = "0x";
				else if (mult === 4) bucket = "4x";
				else if (mult === 2) bucket = "2x";
				else if (mult === 1.5) bucket = "1.5x";
				else if (mult === 0.5) bucket = "0.5x";
				else if (mult === 0.25) bucket = "0.25x";

				dmg[bucket].push(atk);
			}

			// Split into 3 groups of 6 types and render 3 mini tables like PokémonDB
			const groups = [
				ALL_TYPES.slice(0, 6),
				ALL_TYPES.slice(6, 12),
				ALL_TYPES.slice(12, 18),
			];

			const tablesHtml = groups
				.map((group) => {
					const head = group
						.map(
							(t) =>
								`<th><span class="type-abbr type-${t.toLowerCase()}">${ABBR[t]}</span></th>`
						)
						.join("");

					const body = group
						.map((t) => {
							const m =
								dmg["4x"].includes(t) ? 4 :
									dmg["2x"].includes(t) ? 2 :
										dmg["1.5x"].includes(t) ? 1.5 :
											dmg["0.25x"].includes(t) ? 0.25 :
												dmg["0.5x"].includes(t) ? 0.5 :
													dmg["0x"].includes(t) ? 0 : 1;

							let cls = "type-fx-100";
							let label = "";

							if (m === 4) {
								cls = "type-fx-400";
								label = "4";
							} else if (m === 2) {
								cls = "type-fx-200";
								label = "2";
							} else if (m === 1.5) {
								cls = "type-fx-150";
								label = "1½";
							} else if (m === 0.5) {
								cls = "type-fx-50";
								label = "½";
							} else if (m === 0.25) {
								cls = "type-fx-25";
								label = "¼";
							} else if (m === 0) {
								cls = "type-fx-0";
								label = "0";
							}

							return `<td class="type-fx-cell ${cls}">${label}</td>`;
						})
						.join("");

					return `
						<table class="type-table-pokedex">
							<thead><tr>${head}</tr></thead>
							<tbody><tr>${body}</tr></tbody>
						</table>
					`;
				})
				.join("");

			chartHtml = `
				<div class="mon-info-block mon-info-typechart">
					<h3>Type Defenses</h3>
					<div class="typechart-matrix">
						${tablesHtml}
					</div>
				</div>
			`;
		}

		// ---------- Evolution: centered, branching, method above arrows ----------
		const dexList = window.DATA.dex?.[gameKey] || [];

		const buildEvoBranches = (evoObj) => {
			if (!evoObj) return [];
			if (Array.isArray(evoObj.branches) && evoObj.branches.length) {
				return evoObj.branches;
			}
			if (Array.isArray(evoObj.chain) && evoObj.chain.length) {
				return [evoObj.chain];
			}
			return [];
		};

		const evoBranches = buildEvoBranches(evo);
		let evoHtml = "";

		if (evoBranches.length) {
			const baseStepMarkup = (step) => {
				if (!step) return "";
				const entry = dexList.find((e) => e && e.id === step.id);
				const imgSrc = step.sprite || entry?.img || null;

				return `
          <div class="mon-info-evo-step">
            ${imgSrc
						? `<div class="evo-sprite">
                <img src="${imgSrc}" alt="${step.name}" loading="lazy" />
              </div>`
						: ""
					}
            <div class="evo-name">
              ${step.name}
            </div>
          </div>`;
			};

			const methodLabel = (step) => {
				if (!step) return "";
				if (step.method) return step.method;
				if (step.level != null) return `Lv. ${step.level}`;
				return step.trigger || "";
			};

			const branchesHtml = evoBranches
				.map((branch) => {
					if (!Array.isArray(branch) || !branch.length) return "";
					let html = "";

					for (let i = 0; i < branch.length; i++) {
						const step = branch[i];

						// For the first stage, just show the mon
						if (i === 0) {
							html += baseStepMarkup(step);
							continue;
						}

						const prev = branch[i - 1];
						const method = methodLabel(step);

						// Arrow block with method ABOVE the arrow, between prev and this step
						html += `
              <div class="mon-info-evo-arrow-block">
                ${method
								? `<div class="evo-method">${method}</div>`
								: `<div class="evo-method"></div>`
							}
                <div class="mon-info-evo-arrow">→</div>
              </div>
            `;

						// Then the target step
						html += baseStepMarkup(step);
					}

					return `<div class="mon-info-evo-branch">${html}</div>`;
				})
				.join("");

			evoHtml = `
        <div class="mon-info-block mon-info-evo-block">
          <h3>Evolution</h3>
          <div class="mon-info-evo-branches">
            ${branchesHtml}
          </div>
        </div>`;
		}

		// ---------- Locations block (between evo + moves) ----------
		let locationsHtml = "";
		if (Array.isArray(locations) && locations.length) {
			const items = locations
				.map((loc) => {
					if (typeof loc === "string") {
						return `<li>${loc}</li>`;
					}
					const area = loc.area || "";
					const notes = loc.notes || "";
					if (area && notes) {
						return `<li><strong>${area}</strong> — ${notes}</li>`;
					}
					return `<li>${area || notes}</li>`;
				})
				.join("");

			locationsHtml = `
        <div class="mon-info-block mon-info-locations">
          <h3>Locations</h3>
          <ul class="mon-info-locations-list">
            ${items}
          </ul>
        </div>`;
		}

		// ---------- Move pool: 3 columns (level-up / TM/TR / egg) ----------
		const movesSection = (label, arr) =>
			!arr || !arr.length
				? ""
				: `
        <div class="mon-info-subblock">
          <h4>${label}</h4>
          <ul>
            ${arr
					.map((m) =>
						typeof m === "string"
							? `<li>${m}</li>`
							: `<li>${m.level != null ? `Lv. ${m.level}: ` : ""
							}${m.name}</li>`
					)
					.join("")}
          </ul>
        </div>`;

		const movesHtml =
			moves && (moves.levelUp || moves.tm || moves.egg)
				? `
        <div class="mon-info-block">
          <h3>Move Pool</h3>
          <div class="mon-info-moves-grid">
            ${movesSection("Level-up", moves.levelUp)}
            ${movesSection("TM / TR", moves.tm)}
            ${movesSection("Egg Moves", moves.egg)}
          </div>
        </div>`
				: "";

		const hasInfo = !!info;

		// ---------- Quick stats (now up in the header, next to name/types) ----------
		const quickStatsHtml = [
			renderListRow(
				"Height",
				info?.heightM ? `${info.heightM} m` : null
			),
			renderListRow(
				"Weight",
				info?.weightKg ? `${info.weightKg} kg` : null
			),
			renderListRow("Egg Group", eggGroups),
			renderListRow("Abilities", abilities),
		].join("");

		// ---------- Build final layout ----------
		monInfoBody.innerHTML = `
      <!-- Header: sprite + name/types + quick stats -->
      <div class="mon-info-header">
        ${spriteSrc
				? `<div class="mon-info-sprite">
            <img src="${spriteSrc}" alt="${mon.name}" loading="lazy" />
          </div>`
				: ""
			}
        <div class="mon-info-main">
          <div class="mon-info-topline">
            <div class="mon-info-basic">
              <div class="mon-info-name">
                #${String(mon.id).padStart(3, "0")} ${mon.name}
              </div>
              <div class="mon-info-types">
                ${(types || [])
				.map(
					(t) =>
						`<span class="type-pill type-${String(t).toLowerCase()}">${t}</span>`
				)
				.join("")}
              </div>
              ${info?.species
				? `<div class="mon-info-species">${info.species}</div>`
				: ""
			}
            </div>
            ${quickStatsHtml
				? `<div class="mon-info-quickstats">
                  ${quickStatsHtml}
                </div>`
				: ""
			}
          </div>
        </div>
      </div>

      ${info?.flavor
				? `<div class="mon-info-block mon-info-flavor">${info.flavor}</div>`
				: ""
			}

      <div class="mon-info-layout">
        <!-- Left column: type chart -->
        <aside class="mon-info-col mon-info-col--summary">
          ${chartHtml}
        </aside>

        <!-- Right column: evolution + locations + moves -->
        <section class="mon-info-col mon-info-col--details">
          ${evoHtml}
          ${locationsHtml}
          ${movesHtml ||
			(hasInfo
				? ""
				: `<div class="mon-info-empty">No move data defined yet for this game.</div>`)
			}
        </section>
      </div>

      ${!hasInfo
				? `<div class="mon-info-empty">
            No detailed <code>monInfo</code> entry configured yet for this Pokémon in <strong>${gameKey}</strong>.
          </div>`
				: ""
			}
    `;

		monInfoModal.classList.add("open");
		monInfoModal.setAttribute("aria-hidden", "false");
	}
	function closeMonInfo() {
		if (!monInfoModal) return;
		monInfoModal.classList.remove("open");
		monInfoModal.setAttribute("aria-hidden", "true");
	}
	function openDexForms(gameKey, genKey, mon) {
		if (!formsModal || !formsWheel) return;

		formsNonce += 1;
		const nonce = formsNonce;
		formsModal.dataset.formsNonce = String(nonce);
		formsModal.dataset.gameKey = gameKey;
		formsModal.dataset.genKey = genKey;
		formsModal.dataset.monId = String(mon.id);

		const accent = getGameColor(gameKey, genKey);
		// clearWheelGridStyles = true so we reset any previous grid overrides
		const dialog = prepFormsModal(formsModal, formsWheel, {
			accent,
			clearWheelGridStyles: true,
		});
		if (!dialog) return;

		const forms = mon.forms || [];
		const N = forms.length;
		const useRadial = N <= 7; // <=7 → radial single ring; >=8 → grid

		// Body scroll behavior (same as before)
		const body = dialog.querySelector(".modal-bd");
		if (body) {
			if (N > 12) {
				body.classList.add("forms-wheel-scroll");
			} else {
				body.classList.remove("forms-wheel-scroll");
			}
		}

		const games = window.DATA.games?.[genKey] || [];
		const game = games.find((g) => g.key === gameKey);
		const options = game
			? game.flags || ["shiny", "caught", "seen", "unknown"]
			: ["shiny", "caught", "seen", "unknown"];

		// Base scaling for chips (works for both radial + grid)
		const _scale = computeChipScale("dex", N, dialog);
		formsWheel.style.setProperty("--form-img", `${_scale.img}px`);
		formsWheel.style.setProperty("--chip-font", `${_scale.font}px`);
		formsWheel.style.setProperty("--chip-pad", _scale.pad);

		const { node } = _getDexFormsNode(store, gameKey, mon.id);

		// Build chips (same as before)
		const chips = forms.map((form) => {
			const name = typeof form === "string" ? form : form?.name ?? "";

			const chip = document.createElement("div");
			chip.className = "form-chip";
			chip.title = name;
			chip.setAttribute("role", "group");

			const row = document.createElement("div");
			row.className = "chip-row";

			const label = document.createElement("span");
			label.className = "chip-text";
			label.textContent = name || "?";
			row.appendChild(label);

			function updateChipState() {
				const val = sel.value;
				if (val && val !== "unknown") {
					chip.classList.add("is-set");
				} else {
					chip.classList.remove("is-set");
				}
			}

			const sel = document.createElement("select");
			sel.className = "flag-select";
			const rawCur = node.forms?.[name] || "unknown";
			const curVal = clampStatusForForm(mon, form, rawCur);
			const fObj = typeof form === "object" ? form : null;

			const useColorForGame = shouldUseColorSprite(gameKey);
			let startSrc = null;

			if (useColorForGame !== null) {
				// Gen 1: toggle between B/W and color, ignore “shiny”
				const baseImg = fObj?.img || null;
				const colorImg = fObj?.imgS || baseImg;
				startSrc = useColorForGame ? colorImg : baseImg;
			} else {
				// Other gens: keep shiny behavior
				const shinyish = curVal === "shiny" || curVal === "shiny_alpha";
				startSrc = shinyish
					? fObj?.imgS || fObj?.img || null
					: fObj?.img || null;
			}

			let im = null;
			if (startSrc) {
				im = document.createElement("img");
				im.src = startSrc;
				im.alt = name;
				im.loading = "lazy";
				row.appendChild(im);
			}

			const badges = document.createElement("div");
			badges.className = "badges";
			badges.innerHTML = renderBadges(curVal);
			chip.appendChild(badges);

			sel.innerHTML = options
				.map((opt) => {
					const val = normalizeFlag(opt);
					if (!isOptionAllowedForForm(mon, form, val)) return "";
					const label = val
						.replace(/_/g, " ")
						.replace(/\b\w/g, (s) => s.toUpperCase());
					return `<option value="${val}" ${val === curVal ? "selected" : ""}>${label}</option>`;
				})
				.join("");

			function applyChipStatusClass(val) {
				const cls = getFilterClassForStatus(val);
				chip.classList.remove(
					"status-unknown",
					"status-seen",
					"status-normal"
				);
				chip.classList.add(cls);
			}
			applyChipStatusClass(curVal);
			updateChipState();

			sel.addEventListener("change", () => {
				if (formsModal.dataset.formsNonce !== String(nonce)) return;

				const activeGameKey = formsModal.dataset.gameKey || gameKey;
				const activeMonId = Number(formsModal.dataset.monId || mon.id);

				let newVal = normalizeFlag(sel.value);
				newVal = clampStatusForForm(mon, form, newVal);
				sel.value = newVal;

				const { node } = _getDexFormsNode(
					store,
					activeGameKey,
					activeMonId
				);
				node.forms = node.forms || {};
				node.forms[name] = newVal;

				const total = forms.length;
				const filled = forms.reduce((a, f) => {
					const nm = typeof f === "string" ? f : f?.name;
					return a +
						(normalizeFlag(node.forms?.[nm]) !== "unknown" ? 1 : 0);
				}, 0);
				node.all = filled === total;
				_setDexFormsNode(store, activeGameKey, activeMonId, node);

				try {
					applyDexLinksFromForm(
						activeGameKey,
						activeMonId,
						name,
						newVal
					);
				} catch (e) {
					console.error("applyDexLinksFromForm error:", e);
				}

				const key = `${activeGameKey}:${activeMonId}`;
				document
					.querySelectorAll(`[data-dex-forms-count="${key}"]`)
					.forEach((el) => {
						el.textContent = `${filled}/${total}`;
					});

				updateChipState();
				applyChipStatusClass(newVal);
				badges.innerHTML = renderBadges(newVal);

				if (im) {
					const useColorForGame = shouldUseColorSprite(activeGameKey);
					const fObj = typeof form === "object" ? form : null;
					let nextSrc;

					if (useColorForGame !== null) {
						const baseImg = fObj?.img || im.src;
						const colorImg = fObj?.imgS || baseImg;
						nextSrc = useColorForGame ? colorImg : baseImg;
					} else {
						const shinyish =
							newVal === "shiny" || newVal === "shiny_alpha";
						nextSrc = shinyish
							? fObj?.imgS || fObj?.img || im.src
							: fObj?.img || im.src;
					}

					im.src = nextSrc;
				}

				renderDexGrid();

				try {
					window.PPGC?.applyTaskSyncsFromForm?.(
						activeGameKey,
						activeMonId,
						name,
						newVal
					);
				} catch {
					/* ignore */
				}
			});

			row.appendChild(sel);
			chip.appendChild(row);
			formsWheel.appendChild(chip);
			return chip;
		});

		// ----- Layout mode: radial vs 4-col grid -----
		// Clean up any previous resize handler (if we had a radial one before)
		if (formsModal._dexOnResize) {
			window.removeEventListener("resize", formsModal._dexOnResize);
			formsModal._dexOnResize = null;
		}

		if (useRadial) {
			// Reset any grid overrides from a previous open
			formsWheel.style.width = "";
			formsWheel.style.height = "";
			formsWheel.style.display = "";
			formsWheel.style.gridTemplateColumns = "";
			formsWheel.style.gap = "";
			formsWheel.style.padding = "";

			// Radial wheel with the shared electron-shell layout.
			// computeChipScale already ran; createWheelResizeHandler
			// will also keep size + layout in sync on resize.
			const onResize = createWheelResizeHandler(
				"dex",
				dialog,
				formsWheel,
				chips,
				{
					preferWidth: false,
					sizeCap: 1000,
					flattenSyForRingsGte: 3,
				}
			);
			formsModal._dexOnResize = onResize;
			window.addEventListener("resize", onResize, { passive: true });
		} else {
			// 8+ forms → grid layout with 4 columns, like Dex/Fashion grids.
			formsWheel.style.width = "100%";
			formsWheel.style.height = "auto";
			formsWheel.style.display = "grid";
			formsWheel.style.gridTemplateColumns =
				"repeat(4, minmax(0, 1fr))";
			formsWheel.style.gap = "12px";
			// Add some breathing room so cards don't kiss the edges
			formsWheel.style.padding = "8px 16px 16px";

			chips.forEach((chip) => {
				chip.style.position = "static";
				chip.style.transform = "none";
				chip.style.width = "100%";
				chip.style.height = "auto";
			});
		}
	}
	function closeDexForms() {
		if (formsModal?._dexOnResize) {
			window.removeEventListener("resize", formsModal._dexOnResize);
			formsModal._dexOnResize = null;
		}

		formsModal.classList.remove("open");
		formsModal.setAttribute("aria-hidden", "true");
		formsModal.setAttribute("inert", "");

		// clear active-target metadata
		delete formsModal.dataset.formsNonce;
		delete formsModal.dataset.gameKey;
		delete formsModal.dataset.genKey;
		delete formsModal.dataset.monId;
	}
	function openResearchModal(gameKey, genKey, mon) {
		if (!researchModal || !researchGrid) return;

		const tasks = Array.isArray(mon.research) ? mon.research : [];
		if (!tasks.length) return;

		researchTitle.textContent = `Research Tasks — ${mon.name}`;

		const boostIconSrc = "imgs/task_imgs/gen8/legendsarceus/boost.png";
		const MAX_TIERS = 5; // 1–5, like Serebii

		// hydrate from store (per-mon record)
		const recAll =
			store.dexResearchStatus instanceof Map
				? store.dexResearchStatus.get(gameKey) || {}
				: {};
		const rec = recAll[mon.id] || {};

		const cardsHTML = tasks
			.map((t, idx) => {
				const tiers = Array.isArray(t.tiers) ? t.tiers : [];
				const steps = tiers.length || 1;

				// existing progress for this task
				const raw = rec[idx];
				const level =
					typeof raw === "number"
						? raw
						: raw
							? steps
							: 0;

				// fixed 5 “tier” slots so header and rows line up visually
				const len = tiers.length;
				const offset = Math.floor((MAX_TIERS - len) / 2); // center the values
				let tierSpans = "";
				for (let pos = 0; pos < MAX_TIERS; pos++) {
					const tierIndex = pos - offset;

					// if tierIndex is in range, use that value; otherwise leave blank
					const val =
						tierIndex >= 0 && tierIndex < len ? tiers[tierIndex] : "";

					tierSpans += `<span>${val != null && val !== "" ? val : ""}</span>`;
				}

				return `
        <div class="research-task" data-task="${idx}">
          <div class="rt-icon">
            ${t.boost
						? `<img class="boost-icon" src="${boostIconSrc}" alt="Boost"/>`
						: ""
					}
          </div>
          <div class="rt-name">${t.text || ""}</div>
          <div class="rt-tiers">
            <div class="rt-tiers-spans">${tierSpans}</div>
            <div class="rt-slider">
            <input type="range"
                   min="0"
                   max="${steps}"
                   value="${level}"
                   step="1"
                   data-research-task="${idx}"
                   aria-label="Progress for '${t.text || ""}'"/>
          </div>
          </div>
        </div>`;
			})
			.join("");

		// header row + list of task “cards”
		researchGrid.innerHTML = `
    <div class="research-header">
      <div></div>
      <div class="rh-name">Task</div>
      <div class="rt-tiers-header">
        ${Array(MAX_TIERS)
				.fill(0)
				.map((_, i) => `<span>${i + 1}</span>`)
				.join("")}
      </div>
    </div>
    <div class="research-list">
      ${cardsHTML}
    </div>
  `;

		// wire sliders (same logic as before, just different markup)
		const map =
			store.dexResearchStatus instanceof Map
				? store.dexResearchStatus.get(gameKey) || {}
				: {};
		const inner = map[mon.id] || {};

		researchGrid
			.querySelectorAll('input[type="range"][data-research-task]')
			.forEach((slider) => {
				const idx = Number(slider.getAttribute("data-research-task") || "0");
				const steps = Number(slider.max || "1");
				const label = researchGrid.querySelector(
					`[data-tier-label="${idx}"]`
				);

				const apply = () => {
					const lvl = Number(slider.value || "0");
					inner[idx] = lvl;
					if (label) {
						label.textContent = `${lvl}/${steps}`;
					}
					map[mon.id] = inner;
					store.dexResearchStatus.set(gameKey, map);
					save();
				};

				slider.addEventListener("input", apply);
				slider.addEventListener("change", apply);
			});

		researchModal.classList.add("open");
		researchModal.setAttribute("aria-hidden", "false");
	}
	function closeResearchModal() {
		if (!researchModal) return;
		researchModal.classList.remove("open");
		researchModal.setAttribute("aria-hidden", "true");
		// Re-render to refresh research meter + section header
		try {
			window.PPGC?.renderAll?.();
		} catch { }
	}

	monInfoModal?.addEventListener("click", (e) => {
		if (e.target === monInfoModal) closeMonInfo();
	});
	monInfoClose?.addEventListener("click", closeMonInfo);
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && monInfoModal?.classList.contains("open")) {
			closeMonInfo();
		}
	});

	const api = { openDexModal: openDexModal, closeModal, renderDexGrid };
	modal.addEventListener("click", (e) => {
		if (e.target === modal) closeModal();
	});
	modalClose.addEventListener("click", closeModal);
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") closeModal();
	});
	dexSearch.addEventListener("input", renderDexGrid);
	dexSelectAll.addEventListener("click", () => {
		const gameKey = store.state.dexModalFor;
		if (!gameKey) return;

		// NEW: take the bulk status from the dropdown (default to "caught")
		let chosen = "caught";
		if (bulkStatusSelect && bulkStatusSelect.tagName === "SELECT") {
			const raw = bulkStatusSelect.value;
			if (raw) chosen = normalizeFlag(raw);
		}

		const dex = window.DATA.dex?.[gameKey] || [];
		const curr = store.dexStatus.get(gameKey) || {};

		for (const m of dex) {
			if (m.mythical) continue; // keep your existing rule: skip mythicals
			const applied = clampStatusForMon(m, chosen);
			curr[m.id] = applied;
			_queueDexSync(gameKey, m.id, applied);

			// forms: apply the same chosen status to every form
			if (Array.isArray(m.forms) && m.forms.length) {
				const node = _setAllFormsForMon(
					store,
					gameKey,
					m.id,
					m.forms,
					applied
				);

				// node.forms now holds the actual applied values
				for (const [fname, val] of Object.entries(node.forms || {})) {
					if (!fname) continue;

					// Dex ↔ Dex form sync (regional <-> national)
					try {
						applyDexLinksFromForm(
							gameKey,
							m.id,
							fname,
							val
						);
					} catch (e) {
						console.error("applyDexLinksFromForm (bulk) error:", e);
					}

					// Dex -> Task form sync (existing behavior)
					try {
						window.PPGC?.applyTaskSyncsFromForm?.(
							gameKey,
							m.id,
							fname,
							val
						);
					} catch { }
				}
			}
		}

		store.dexStatus.set(gameKey, curr);
		save();
		renderDexGrid();
	});

	formsModal?.addEventListener("click", (e) => {
		if (e.target === formsModal) closeDexForms();
	});
	formsModalClose?.addEventListener("click", closeDexForms);
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && formsModal.classList.contains("open"))
			closeDexForms();
	});
	researchModal?.addEventListener("click", (e) => {
		if (e.target === researchModal) closeResearchModal();
	});
	researchModalClose?.addEventListener("click", closeResearchModal);
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && researchModal.classList.contains("open")) {
			closeResearchModal();
		}
	});

	return api;
}