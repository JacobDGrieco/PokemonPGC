import { save } from "../store.js";
import { bootstrapTasks } from "../tasks.js";
import {
	getGameColor,
	computeChipScale,
	prepFormsModal,
	createWheelResizeHandler,
} from "./modal.js";
import {
	normalizeFlag,
	rankStatus,
	pickHighestStatus,
	isCompletedForGame,
	clampStatusForMon,
	isOptionAllowedForMon,
	clampStatusForForm,
	isOptionAllowedForForm,
	getFilterClassForStatus,
	renderBadges,
} from "./helpers.js";
import {
	attachProgressHelpers,
	formsPctFor,
	researchPctFor,
	researchStatsFor,
} from "./dex-progress.js";
import { setupDexFormsModal } from "./dex-forms.js";
import { openMonInfo, setupMonInfoModal } from "./dex-mon-info.js";
import { openResearchModal, setupResearchModal } from "./dex-research.js";

window.DATA.dexVariants = {
	x: ["x-central", "x-coastal", "x-mountain", "x-national"],
	y: ["y-central", "y-coastal", "y-mountain", "y-national"],
	sun: ["sun-melemele", "sun-akala", "sun-ulaula", "sun-poni"],
	moon: ["moon-melemele", "moon-akala", "moon-ulaula", "moon-poni"],
	ultrasun: ["ultrasun-melemele", "ultrasun-akala", "ultrasun-ulaula", "ultrasun-poni"],
	ultramoon: ["ultramoon-melemele", "ultramoon-akala", "ultramoon-ulaula", "ultramoon-poni"],
};

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

	// --- National meter (same math, but against `${base}-national`) ---
	const baseGameKey = String(gameKey).endsWith("-national")
		? String(gameKey).replace(/-national$/, "")
		: String(gameKey);
	const natKey = `${baseGameKey}-national`;
	const natDex = window.DATA.dex?.[natKey] || [];

	const baseKey = baseGameKey;
	const variants = window.DATA.dexVariants?.[baseKey] || [gameKey];
	const hasVariantsConfig =
		Array.isArray(window.DATA.dexVariants?.[baseKey]) &&
		window.DATA.dexVariants[baseKey].length > 1;

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

	const {
		baseTotal: researchBaseTotal,
		extraTotal: researchExtraTotal,
		baseDone: researchBaseDone,
		extraDone: researchExtraDone,
	} = researchStatsFor(gameKey, store);

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
	const nationalHTML = haveNat && !hasVariantsConfig
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

	// ---------- MULTI-DEX VARIANT METERS ----------
	let variantsHTML = "";

	for (const dk of variants) {
		const raw = dk
			.replace(baseKey, "")
			.replace(/^-/, "") || "regional";

		const label =
			raw.length > 0
				? raw.charAt(0).toUpperCase() + raw.slice(1)
				: "Regional";

		const dexArr = window.DATA.dex?.[dk] || [];
		const baseDex = dexArr.filter((m) => !m.mythical);
		const extraDex = dexArr.filter((m) => m.mythical);

		const baseTotal = baseDex.length;
		const extraTotal = extraDex.length;

		let baseDone = 0;
		let extraDone = 0;

		for (const m of baseDex) {
			if (isCompletedForGame(game, _effectiveSpeciesStatus(store, dk, m))) {
				baseDone++;
			}
		}
		for (const m of extraDex) {
			if (isCompletedForGame(game, _effectiveSpeciesStatus(store, dk, m))) {
				extraDone++;
			}
		}

		const pctBase = baseTotal ? (baseDone / baseTotal) * 100 : 0;
		const pctExtended = baseTotal
			? ((baseDone + extraDone) / baseTotal) * 100
			: 0;

		const pctBar = Math.min(
			100,
			Math.max(0, Math.round(pctBase))
		);

		const pctExtraOverlay =
			baseTotal > 0 && baseDone === baseTotal && extraTotal > 0
				? (extraDone / extraTotal) * 100
				: 0;

		const labelPct =
			baseDone === baseTotal ? pctExtended : pctBase;
		const labelDone =
			baseDone === baseTotal ? baseDone + extraDone : baseDone;

		variantsHTML += `
			<div class="small">
			${label}:
			${labelDone}/${baseTotal || 0}
			(${labelPct.toFixed(2)}%)
			</div>
			<div class="progress ${pctExtraOverlay > 0 ? "has-extra" : ""}">
			<span class="base"  style="width:${pctBar}%"></span>
			<span class="extra" style="width:${pctExtraOverlay}%"></span>
			${pctExtraOverlay > 0
				? `<div class="extra-badge" title="Extra credit progress">+${pctExtraOverlay.toFixed(0)}%</div>`
				: ``
			}
			</div>
		`;
	}

	card.innerHTML = `
  <div class="card-hd"><h3>Pokédex — <span class="small">${game?.label || gameKey
		}</span></h3></div>
  <div class="card-bd">
    ${variantsHTML}
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

	attachProgressHelpers(store);

	const { openDexForms, closeDexForms } = setupDexFormsModal(store, {
		formsModal,
		formsModalClose,
		formsWheel,
		getGameColor,
		computeChipScale,
		prepFormsModal,
		createWheelResizeHandler,
		normalizeFlag,
		clampStatusForForm,
		isOptionAllowedForForm,
		getFilterClassForStatus,
		renderBadges,
		shouldUseColorSprite,
		getDexFormsNode: (gameKey, monId) => _getDexFormsNode(store, gameKey, monId),
		setDexFormsNode: (gameKey, monId, node) =>
			_setDexFormsNode(store, gameKey, monId, node),
		applyDexLinksFromForm: (gameKey, monId, formName, status) =>
			applyDexLinksFromForm(gameKey, monId, formName, status),
		renderDexGrid,
	});

	window.PPGC = window.PPGC || {};
	window.PPGC.formsPctFor = (gameKey, genKey) =>
		formsPctFor(gameKey, genKey, store);
	window.PPGC.researchPctFor = (gameKey, genKey) =>
		researchPctFor(gameKey, genKey, store);
	setupMonInfoModal();
	setupResearchModal();

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
		const str = String(k || "");
		// First strip "-national" if present
		const withoutNat = str.endsWith("-national")
			? str.replace(/-national$/, "")
			: str;
		// Then take everything before the first "-" (x-central → x, sun-melemele → sun)
		return withoutNat.split("-")[0];
	}
	function resolveInitialDexKey(rawKey) {
		if (!rawKey) return rawKey;

		const base = baseOf(rawKey);

		// If this exact key already has a dex with data, use it.
		const direct = window.DATA.dex?.[rawKey];
		if (Array.isArray(direct) && direct.length > 0) return rawKey;

		// Otherwise, look at dexVariants[base] and pick the first one that has data.
		const variants = window.DATA.dexVariants?.[base];
		if (Array.isArray(variants) && variants.length) {
			for (const v of variants) {
				const arr = window.DATA.dex?.[v];
				if (Array.isArray(arr) && arr.length > 0) return v;
			}
			// If none have data yet, just fall back to the first variant.
			return variants[0];
		}

		// Fallback: just use the raw key.
		return rawKey;
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
	function installMultiDexDropdown(baseKey, currentKey) {
		const variants = window.DATA.dexVariants?.[baseKey];
		if (!variants || variants.length <= 2) return null;

		const select = document.createElement("select");
		select.className = "dex-scope-select";
		select.title = "Choose Dex";

		variants.forEach((key) => {
			const opt = document.createElement("option");
			opt.value = key;
			const raw = key.replace(baseKey, "").replace(/^-/, "") || "regional";
			const pretty =
				raw.length > 0
					? raw.charAt(0).toUpperCase() + raw.slice(1)
					: "Regional";
			opt.textContent = pretty;
			select.appendChild(opt);
		});

		// Use the current opened dex as initial selection
		select.value = currentKey;

		select.addEventListener("change", () => {
			const newKey = select.value;
			const genKey =
				(window.DATA.tabs || [])
					.map((t) => t.key)
					.find((gk) =>
						(window.DATA.games[gk] || []).some(
							(g) => g.key === newKey.replace(/-.+$/, "")
						)
					) || null;

			openDexModal(newKey, genKey);
		});

		return select;
	}
	function refreshScopeControls(currentGameKey) {
		if (!modalChange) return;
		const modalCloseBtn = modalChange.querySelector(".modalClose");

		const baseKey = baseOf(currentGameKey || "");
		const variants = window.DATA.dexVariants?.[baseKey];

		// Remove any existing dropdown
		const existingDropdown = modalChange.querySelector(".dex-scope-select");

		if (variants && variants.length > 2) {
			// Ensure we have a dropdown
			let dropdown = existingDropdown;
			if (!dropdown) {
				dropdown = installMultiDexDropdown(baseKey, currentGameKey);
				if (dropdown) {
					modalChange.insertBefore(
						dropdown,
						modalCloseBtn || modalChange.firstChild
					);
				}
			} else {
				// Just sync the selected value
				dropdown.value = currentGameKey;
			}

			// Hide the Regi/Nati button when using the multi-dex dropdown
			scopeBtn.style.display = "none";
		} else {
			// No multi-dex setup: remove dropdown and show normal Regi/Nati toggle
			if (existingDropdown) existingDropdown.remove();

			scopeBtn.style.display = "";
			// Make sure scopeBtn is actually in the header
			if (!scopeBtn.parentNode) {
				modalChange.insertBefore(
					scopeBtn,
					modalCloseBtn || modalChange.firstChild
				);
			}

			// Also update its label (RegiDex/NatiDex)
			updateScopeBtnLabel(currentGameKey);
		}
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
	// --- NEW: Dex↔Dex sync ----------------------------------------------
	function _resolveDexTargetKey(link) {
		const game = link?.game;
		if (!game) return null;

		const t = String(link.dexType || "regional").toLowerCase();

		// 1) National: "x" -> "x-national"
		if (t === "national") return `${game}-national`;

		// 2) Explicit regional or default: just the base game (ruby, diamond, etc.)
		if (t === "regional") return game;

		// 3) X/Y sub-dexes
		if (t === "central" || t === "coastal" || t === "mountain") {
			return `${game}-${t}`;
		}

		// 4) Alola sub-dexes
		if (t === "melemele" || t === "akala" || t === "ulaula" || t === "poni") {
			return `${game}-${t}`;
		}

		// 5) Fallback for any future/custom types:
		//    try game-dexType, or just game if that doesn't exist.
		const candidate = `${game}-${t}`;
		if (window.DATA?.dex?.[candidate]) return candidate;
		return game;
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
					? `<img
					class="sprite"
					alt="${it.name}"
					src="${src}"
					loading="lazy"
					style="width:132px;height:132px;object-fit:contain;"
				/>`
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
					openResearchModal(gameKey, genKey, it, store);
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
		// Resolve base "x" / "sun" into first real dex (x-central, sun-melemele, etc.)
		const resolvedKey = resolveInitialDexKey(gameKey);
		store.state.dexModalFor = resolvedKey;
		refreshScopeControls(resolvedKey);

		// Use the *base* game for the label (e.g. "ruby" even if "ruby-national")
		const baseKey = baseOf(resolvedKey);
		const gameBase = (window.DATA.games?.[genKey] || []).find(
			(g) => g.key === baseKey
		);

		const tasksStore = window.PPGC?._tasksStoreRef;
		if (tasksStore) {
			// Sections are still keyed by the base game (e.g. "x", "sun"), not x-central.
			const sections = window.DATA?.sections?.[baseKey] || [];
			for (const s of sections) {
				if (!s?.id) continue;
				bootstrapTasks(s.id, tasksStore);
			}
		}

		const curr = store.dexStatus.get(resolvedKey) || {};
		modal.__dexSnapshot = { ...curr };

		// Build title: "X (Central Dex)", "X (National Dex)", etc.
		const baseLabel = gameBase ? gameBase.label : baseKey;

		let scopeLabel;
		if (isNatKey(resolvedKey)) {
			scopeLabel = "National Dex";
		} else {
			const variants = window.DATA.dexVariants?.[baseKey] || [];
			if (variants.length && variants.includes(resolvedKey)) {
				let raw = resolvedKey
					.replace(baseKey, "")
					.replace(/^-/, "") || "regional";
				raw = raw.charAt(0).toUpperCase() + raw.slice(1);
				scopeLabel = `${raw} Dex`; // e.g. "Central Dex", "Melemele Dex"
			} else {
				scopeLabel = "Regional Dex";
			}
		}

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

	return api;
}