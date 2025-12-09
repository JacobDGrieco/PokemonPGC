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
	getDexScrollContainer,
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
	ruby: ["ruby", "ruby-national"],
	sapphire: ["sapphire", "sapphire-national"],
	firered: ["firered", "firered-national"],
	leafgreen: ["leafgreen", "leafgreen-national"],
	emerald: ["emerald", "emerald-national"],
	diamond: ["diamond", "diamond-national"],
	pearl: ["pearl", "pearl-national"],
	platinum: ["platinum", "platinum-national"],
	heartgold: ["heartgold", "heartgold-national"],
	soulsilver: ["soulsilver", "soulsilver-national"],
	black: ["black", "black-national"],
	white: ["white", "white-national"],
	black2: ["black2", "black2-national"],
	white2: ["white2", "white2-national"],
	x: ["x-central", "x-coastal", "x-mountain", "x-national"],
	y: ["y-central", "y-coastal", "y-mountain", "y-national"],
	sun: ["sun-alola", "sun-melemele", "sun-akala", "sun-ulaula", "sun-poni"],
	moon: ["moon-alola", "moon-melemele", "moon-akala", "moon-ulaula", "moon-poni"],
	ultrasun: ["ultrasun-alola", "ultrasun-melemele", "ultrasun-akala", "ultrasun-ulaula", "ultrasun-poni"],
	ultramoon: ["ultramoon-alola", "ultramoon-melemele", "ultramoon-akala", "ultramoon-ulaula", "ultramoon-poni"],
	sword: ["sword", "swordioa", "swordct"],
	swordioa: ["sword", "swordioa", "swordct"],
	swordct: ["sword", "swordioa", "swordct"],
	shield: ["shield", "shieldioa", "shieldct"],
	shieldioa: ["shield", "shieldioa", "shieldct"],
	shieldct: ["shield", "shieldioa", "shieldct"],
	scarlet: ["scarlet", "scarlettm", "scarletid"],
	scarlettm: ["scarlet", "scarlettm", "scarletid"],
	scarletid: ["scarlet", "scarlettm", "scarletid"],
	violet: ["violet", "violettm", "violetid"],
	violettm: ["violet", "violettm", "violetid"],
	violetid: ["violet", "violettm", "violetid"],
	legendsza: ["legendsza", "legendszamd"],
	legendszamd: ["legendsza", "legendszamd"],
};

// --- Tag helpers ----------------------------------------------------
const TAG_ORDER = ["gender", "mega", "alolan", "galarian", "hisuian", "paldean", "otherForms", "starter", "fossil", "pseudo", "zcrystal", "ultrabeast", "paradox", "legendary", "mythical",];

/**
 * Build a normalized, ordered tag list for any dex entry or form.
 * - Uses obj.tags if present
 * - Also folds in legacy boolean flags (gender, starter, etc.) so old data still works
 * - Returns a new array (does not mutate the original object)
 */
function extractTags(obj) {
	if (!obj) return [];

	let tags = [];
	if (Array.isArray(obj.tags)) {
		tags = obj.tags.map((t) => String(t).toLowerCase());
	}

	// Sort by your preferred order; unknown tags go at the end alphabetically
	tags.sort((a, b) => {
		const ia = TAG_ORDER.indexOf(a);
		const ib = TAG_ORDER.indexOf(b);
		if (ia === -1 && ib === -1) return a.localeCompare(b);
		if (ia === -1) return 1;
		if (ib === -1) return -1;
		return ia - ib;
	});

	return tags;
}

/**
 * Does this entry/form have a given tag?
 * `tag` should be lowercase (we’ll lowercase everything internally anyway).
 */
function hasTag(obj, tag) {
	const needle = String(tag || "").toLowerCase();
	if (!needle) return false;
	const tags = extractTags(obj);
	return tags.includes(needle);
}

const _isMythicalForm = (f) => typeof f === "object" && hasTag(f, "mythical");
// --- Dex key helpers shared by cards + modal --------------------
function isNatKey(k) {
	return String(k || "").endsWith("-national");
}

function baseOf(k) {
	const str = String(k || "");
	// Strip "-national" if present
	const withoutNat = str.endsWith("-national")
		? str.replace(/-national$/, "")
		: str;
	// Then take everything before the first "-"
	return withoutNat.split("-")[0];
}

function labelForDexKey(baseKey, key) {
	if (!key) return "";

	// 1) Custom name, if provided
	const names = (window.DATA && window.DATA.dexNames) || {};
	if (names[key]) return names[key];

	// 2) National dex is always "National Dex"
	if (isNatKey(key)) return "National Dex";

	// 3) Derive a suffix-based name for things like x-central, sun-melemele, etc.
	const strKey = String(key);
	const baseGuess = baseKey || baseOf(strKey);
	const rawBase = strKey.startsWith(baseGuess) ? baseGuess : baseOf(strKey);

	let raw = strKey.replace(rawBase, "").replace(/^-/, "");
	if (!raw) return "Regional Dex";

	const pretty = raw.charAt(0).toUpperCase() + raw.slice(1);
	return `${pretty} Dex`;
}

function shortLabelForDexKey(baseKey, key) {
	const full = labelForDexKey(baseKey, key);
	// Strip a trailing " Dex" to get things like "Unova", "National"
	return full.replace(/\s*Dex$/i, "");
}

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
	if (variants.length) {
		for (const dk of variants) {
			const d = window.DATA.dex?.[dk] || [];
			if (!d.length) continue;

			const variantBaseKey = baseOf(dk);
			const label = shortLabelForDexKey(variantBaseKey, dk);

			// Split into base vs extra (mythical) species
			const baseMons = d.filter((m) => !isMythical(m));
			const extraMons = d.filter((m) => isMythical(m));

			const regionTotal = baseMons.length;
			const extraTotal = extraMons.length;

			let regionDone = 0;
			let extraDone = 0;

			for (const m of baseMons) {
				if (
					isCompletedForGame(
						game,
						_effectiveSpeciesStatus(store, dk, m)
					)
				) {
					regionDone++;
				}
			}
			for (const m of extraMons) {
				if (
					isCompletedForGame(
						game,
						_effectiveSpeciesStatus(store, dk, m)
					)
				) {
					extraDone++;
				}
			}

			// Base vs “extra credit” math aligned with National / Forms meters
			const pctBase =
				regionTotal > 0 ? (regionDone / regionTotal) * 100 : 0;
			const pctExtended =
				regionTotal > 0
					? ((regionDone + extraDone) / regionTotal) * 100
					: 0;

			const labelPct =
				regionDone === regionTotal ? pctExtended : pctBase;

			const pctBar = Math.min(
				100,
				Math.max(0, Math.round((regionDone / Math.max(1, regionTotal)) * 100))
			);

			const pctExtraOverlay =
				regionTotal > 0 &&
					regionDone === regionTotal &&
					extraTotal > 0
					? (extraDone / extraTotal) * 100
					: 0;

			const labelDone =
				regionDone === regionTotal
					? `${regionDone + extraDone} / ${regionTotal}`
					: `${regionDone}/${regionTotal}`;

			variantsHTML += `
				<div class="small">
					${label}:
					${labelDone} (${labelPct.toFixed(2)}%)
				</div>
				<div class="progress ${pctExtraOverlay > 0 ? "has-extra" : ""}">
					<span class="base"  style="width:${pctBar}%"></span>
					<span class="extra" style="width:${pctExtraOverlay}%"></span>
					${pctExtraOverlay > 0 ? `<div class="extra-badge" title="Extra credit progress">+${pctExtraOverlay.toFixed(0)}%</div>` : ``}
				</div>`;
		}
	}

	card.innerHTML = `
		<div class="card-hd"><h3>Pokédex — <span class="small">${game?.label || gameKey
		}</span></h3></div>
		<div class="card-bd">
			${variantsHTML}
			${nationalHTML}
			${formsHTML}
			${researchHTML}
		</div>
	`;
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
	let dexHelpDropdown = null;

	if (dexSelectAll && bulkStatusSelect && dexSelectAll.parentElement && dexSelectAll.parentElement === bulkStatusSelect.parentElement) {
		const parent = dexSelectAll.parentElement;
		const bulkGroup = document.createElement("div");
		bulkGroup.className = "dex-bulk-group";

		dexSelectAll.style.width = '100%';
		bulkStatusSelect.style.width = '100%';

		// Insert the group where the button currently lives
		parent.insertBefore(bulkGroup, dexSelectAll);
		bulkGroup.appendChild(dexSelectAll);
		bulkGroup.appendChild(bulkStatusSelect);
	}

	function ensureDexHelpDropdown() {
		if (!dexSearch || dexHelpDropdown) return;
		dexSearch.style.width = "250px";

		dexHelpDropdown = document.createElement("div");
		dexHelpDropdown.className = "dex-help-dropdown";
		dexHelpDropdown.style.position = "absolute";
		dexHelpDropdown.style.zIndex = "25";
		dexHelpDropdown.style.padding = "8px 10px";
		dexHelpDropdown.style.borderRadius = "6px";
		dexHelpDropdown.style.fontSize = "12px";
		dexHelpDropdown.style.maxWidth = "360px";
		dexHelpDropdown.style.background = "var(--card-bg, #111827)";
		dexHelpDropdown.style.border = "1px solid rgba(255,255,255,.1)";
		dexHelpDropdown.style.boxShadow = "0 8px 16px rgba(0,0,0,.45)";
		dexHelpDropdown.style.display = "none";

		dexHelpDropdown.innerHTML = `
			<div style="font-weight:600;margin-bottom:4px;">Dex commands</div>
			<div><code>/status &lt;status&gt;</code> – unknown, seen, caught, shiny, alpha, shinyalpha</div>
			<div><code>/form &lt;status&gt;</code> – gender, mega, regional, alolan, galarian, hisuian, paldean, other</div>
			<div><code>/species &lt;tag&gt;</code> – starter, fossil, pseduo, mega, ultrabeast, paradox, legendary, mythical</div>
			<div><code>/type &lt;type&gt;</code> – filter by typings (e.g. <code>/type fire</code>) (WIP)</div>
			<div><code>/evolution &lt;method&gt;</code> – level, stone, item, trade, happiness, other (WIP)</div>
			<div><code>/location &lt;text&gt;</code> – filter by game location (WIP)</div>
			<div><code>/stage &lt;n&gt;</code> – evolution stage 1, 2, or 3 (WIP)</div>
		`;

		// Only attach to body so we can position it with page coordinates
		document.body.appendChild(dexHelpDropdown);
	}

	function updateDexHelpDropdown(rawQ) {
		ensureDexHelpDropdown();
		if (!dexHelpDropdown || !dexSearch) return;

		const v = (rawQ || "").trim().toLowerCase();
		if (v === "/help") {
			const rect = dexSearch.getBoundingClientRect();

			// Position just under the search input
			dexHelpDropdown.style.left = `${rect.left + window.scrollX}px`;
			dexHelpDropdown.style.top = `${rect.bottom + window.scrollY + 4}px`;
			dexHelpDropdown.style.display = "";
		} else {
			dexHelpDropdown.style.display = "none";
		}
	}

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

	// single unified dropdown for all dex scopes (regional / sub-dex / national)
	let scopeSelect = null;

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

	// Build the list of dex keys (regional/sub-dex/national) for a base game.
	function computeDexScopeOptions(baseKey) {
		if (!baseKey) return [];

		const variantsCfg = window.DATA.dexVariants?.[baseKey];
		const hasVariantsCfg =
			Array.isArray(variantsCfg) && variantsCfg.length > 0;

		let list = [];

		// 1) sub-dex variants (XY, Alola, etc.)
		if (hasVariantsCfg) {
			// For games with variants, we ONLY use the explicit variant keys
			// (e.g. x-central, x-coastal, sun-alola, sun-melemele, etc.)
			list = variantsCfg.slice();
		} else {
			// No explicit variants: just the base dex if it exists
			const baseDex = window.DATA.dex?.[baseKey] || [];
			if (Array.isArray(baseDex) && baseDex.length) {
				list.push(baseKey);
			}
		}

		// 2) national dex, if it exists
		const natKey = `${baseKey}-national`;
		const natDex = window.DATA.dex?.[natKey] || [];
		const hasNat = Array.isArray(natDex) && natDex.length > 0;
		if (hasNat && !list.includes(natKey)) {
			list.push(natKey);
		}

		// 3) For non-variant games, make sure the base key is present
		//    so it can be labeled "Regional Dex" in the dropdown.
		if (!hasVariantsCfg && !list.includes(baseKey)) {
			list.unshift(baseKey);
		}

		// If there's only one entry, there’s nothing to switch between
		if (list.length <= 1) return [];
		return list;
	}

	function populateBulkStatusSelect(gameKey, game, dex) {
		if (!bulkStatusSelect || !(bulkStatusSelect.tagName === "SELECT")) return;
		// Avoid re-building if already populated for this game
		if (bulkStatusSelect.dataset.forGameKey === String(gameKey) && bulkStatusSelect.options.length) {
			return;
		}
		bulkStatusSelect.innerHTML = "";
		bulkStatusSelect.dataset.forGameKey = String(gameKey || "");

		const canonicalOrder = ["shiny_alpha", "alpha", "shiny", "caught", "seen", "unknown"];
		// Use game.flags when available; otherwise fall back to full canonical list
		let rawFlags = Array.isArray(game?.flags) && game.flags.length ? game.flags.slice() : canonicalOrder.slice();

		// Normalize and keep only those present in canonical order
		const present = new Set(rawFlags.map((f) => normalizeFlag(f)).filter(Boolean));
		// Ensure unknown exists as a safe fallback
		present.add("unknown");

		const finalFlags = canonicalOrder.filter((f) => present.has(f));

		finalFlags.forEach((val) => {
			const opt = document.createElement("option");
			opt.value = val;
			const label = val
				.replace(/_/g, " ")
				.replace(/\b\w/g, (s) => s.toUpperCase());
			opt.textContent = label;
			bulkStatusSelect.appendChild(opt);
		});

		// Default bulk status to "caught" if present, otherwise first option
		const hasCaught = finalFlags.includes("caught");
		bulkStatusSelect.value = hasCaught ? "caught" : (finalFlags[0] || "");
	}

	function refreshScopeControls(currentGameKey) {
		if (!modalChange || !currentGameKey) return;

		const modalCloseBtn = modalChange.querySelector(".modalClose");
		const baseKey = baseOf(currentGameKey || "");
		const options = computeDexScopeOptions(baseKey);

		// If there is no meaningful variant (no nat / no sub-dex), remove dropdown
		if (!options.length) {
			if (scopeSelect) {
				scopeSelect.remove();
				scopeSelect = null;
			}
			return;
		}

		// Ensure dropdown exists and is placed where the old Regi/Nati button was
		if (!scopeSelect) {
			scopeSelect = document.createElement("select");
			scopeSelect.className = "dex-scope-select";
			scopeSelect.title = "Choose Dex";

			modalChange.insertBefore(
				scopeSelect,
				modalCloseBtn || modalChange.firstChild
			);

			scopeSelect.addEventListener("change", () => {
				const newKey = scopeSelect.value;
				if (!newKey) return;

				const newBase = baseOf(newKey);
				const genKey =
					(window.DATA.tabs || [])
						.map((t) => t.key)
						.find((gk) =>
							(window.DATA.games[gk] || []).some(
								(g) => g.key === newBase
							)
						) || null;

				openDexModal(newKey, genKey);
			});
		}

		// Rebuild options each time in case DATA changes
		scopeSelect.innerHTML = "";
		options.forEach((key) => {
			const opt = document.createElement("option");
			opt.value = key;
			opt.textContent = labelForDexKey(baseKey, key);
			scopeSelect.appendChild(opt);
		});

		// Sync currently-open dex selection
		scopeSelect.value = currentGameKey;
	}

	window.PPGC = window.PPGC || {};
	if (!Array.isArray(window.PPGC._pendingDexSyncs)) window.PPGC._pendingDexSyncs = [];

	function _queueDexSync(gameKey, dexId, status) {
		window.PPGC._pendingDexSyncs.push({ gameKey, dexId, status });
	}
	window.PPGC = window.PPGC || {};
	if (!Array.isArray(window.PPGC._pendingDexSyncs)) {
		window.PPGC._pendingDexSyncs = [];
	}

	// NEW: small helper to batch dex sync work (skip repeated save/render)
	function runInDexBatch(fn) {
		window.PPGC = window.PPGC || {};
		const prev = !!window.PPGC._batchDexSync;
		window.PPGC._batchDexSync = true;
		try {
			fn && fn();
		} finally {
			window.PPGC._batchDexSync = prev;
		}
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

					if (!window.PPGC?._batchDexSync) {
						save();
						if (store.state.dexModalFor === targetGameKey) {
							renderDexGrid();
						}
					}
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

					if (!window.PPGC?._batchDexSync) {
						save();
					}
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

			if (!window.PPGC?._batchDexSync) {
				save();
			}
		}
	}

	function speciesAndFormsMatch(entry, speciesFn, formFn) {
		let speciesMatch = false;
		let formsMatch = false;

		if (typeof speciesFn === "function") {
			speciesMatch = !!speciesFn(entry);
		}

		if (typeof formFn === "function" && Array.isArray(entry.forms) && entry.forms.length) {
			formsMatch = entry.forms.some((f) => {
				const obj = f && typeof f === "object" ? f : {};
				return !!formFn(obj);
			});
		}

		return speciesMatch || formsMatch;
	}
	let filtered;

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
		populateBulkStatusSelect(gameKey, game, dex);
		const rawQ = (dexSearch.value || "").trim();
		const q = rawQ.toLowerCase();
		const options = game ? game.flags : ["shiny", "caught", "seen", "unknown"];
		const statusMap = store.dexStatus.get(gameKey) || {};

		updateDexHelpDropdown(rawQ);

		// --- Command parsing (/seen, /caught, /form, /legendary, /mythic) ---
		const STATUS_TOKEN_MAP = {
			unknown: "unknown",
			seen: "seen",
			caught: "caught",
			shiny: "shiny",
			alpha: "alpha",
			shinyalpha: "shiny_alpha",
			shiny_alpha: "shiny_alpha",
		};

		let cmdMode = null;        // "status" | "formStatus" | "species" | "type" | "location" | "stage"
		let cmdStatus = null;      // normalized status for /status and /form
		let cmdArg = null;         // generic string argument for type/location/species
		let cmdStage = null;       // numeric stage for /stage
		let isCommandTyping = false; // true if input starts with "/" at all

		if (q.startsWith("/")) {
			isCommandTyping = true;

			const parts = rawQ.trim().split(/\s+/);
			const cmd = (parts[0] || "").toLowerCase();
			const rest = parts.slice(1).join(" ").trim();

			// Helper to resolve things like "shiny alpha", "shiny_alpha", etc.
			const resolveStatusToken = (token) => {
				if (!token) return null;
				const compact = String(token).toLowerCase().replace(/[_\s]/g, "");
				if (!compact) return null;

				// direct lookup by canonical tokens (unknown, caught, shinyalpha, etc.)
				if (STATUS_TOKEN_MAP[compact]) {
					return normalizeFlag(STATUS_TOKEN_MAP[compact]);
				}

				// fallback: compare against keys with compacting (just in case)
				for (const [key, val] of Object.entries(STATUS_TOKEN_MAP)) {
					const keyCompact = key.toLowerCase().replace(/[_\s]/g, "");
					if (keyCompact === compact) return normalizeFlag(val);
				}
				return null;
			};

			if (cmd === "/status") {
				// /status <status>
				if (rest) {
					const st = resolveStatusToken(rest);
					if (st) {
						cmdMode = "status";
						cmdStatus = st;
					}
				}
			} else if (cmd === "/form") {
				// /form <form> – generic tag/tag-like filter for form groups
				if (rest) {
					cmdMode = "form";
					cmdArg = rest.toLowerCase();   // ✅ use cmdArg, not cmdStatus
				}
			} else if (cmd === "/species") {
				// /species <tag> – generic tag filter
				if (rest) {
					cmdMode = "species";
					cmdArg = rest.toLowerCase();
				}
			} else if (cmd === "/type") {
				// /type <typing> – uses monInfo.types (falls back to dex types if present)
				if (rest) {
					cmdMode = "type";
					cmdArg = rest.toLowerCase();
				}
			} else if (cmd === "/evolution") {
				// /evolution <evo> – generic tag filter
				if (rest) {
					cmdMode = "evolution";
					cmdArg = rest.toLowerCase();
				}
			} else if (cmd === "/location") {
				// /location <location substring> – uses monInfo.locations
				if (rest) {
					cmdMode = "location";
					cmdArg = rest.toLowerCase();
				}
			} else if (cmd === "/stage") {
				// /stage <stage> – 1/2/3 or "basic"/"stage1"/etc.
				if (rest) {
					let n = parseInt(rest, 10);
					if (Number.isNaN(n)) {
						const tok = rest.toLowerCase().replace(/[^a-z0-9]/g, "");
						if (tok === "basic" || tok === "stage1") n = 1;
						else if (tok === "stage2") n = 2;
						else if (tok === "stage3") n = 3;
					}
					if (Number.isInteger(n) && n > 0) {
						cmdMode = "stage";
						cmdStage = n;
					}
				}
			}
		}
		// --- build filtered list ----------------------------------------------
		let filtered;

		if (!q) {
			// Empty search → show all
			filtered = dex;
		} else if (q === "/help") {
			// /help only shows the command dropdown; don't narrow results
			filtered = dex;
		} else if (cmdMode) {
			// Handle completed /commands
			const monInfoForGame = (window.DATA.monInfo && window.DATA.monInfo[gameKey]) || null;

			filtered = dex.filter((it) => {
				if (cmdMode === "status") {
					// Species-level status, including forms
					const eff = _effectiveSpeciesStatus(store, gameKey, it);
					return normalizeFlag(eff) === cmdStatus;
				}
				if (cmdMode === "form") {
					const raw = (cmdArg || "").trim();
					if (!raw) return true;

					// normalize: lower-case and strip spaces/underscores
					let tag = raw.toLowerCase();

					// Allowed tags for /form
					// gender, mega, regional, alolan, galarian, hisuian, paldean, otherForms
					const allowedFormTags = new Set([
						"gender",
						"mega",
						"regional",
						"alolan",
						"galarian",
						"hisuian",
						"paldean",
						"otherforms",
					]);

					// Optional: still allow /form other or mixed-case otherForms
					if (tag === "other" || tag === "otherforms" || tag === "otherforms".toLowerCase()) {
						tag = "otherforms";
					}

					// If someone types /form Male or /form Female, treat it as gender
					if (tag === "male" || tag === "female") {
						tag = "gender";
					}

					// If it's not one of the supported /form tags, show no results
					if (!allowedFormTags.has(tag)) return false;

					return speciesAndFormsMatch(
						it,
						// species-level (dex entry)
						(sp) => {
							if (tag === "regional") {
								// Regional = any of the four region tags
								return (
									hasTag(sp, "alolan") ||
									hasTag(sp, "galarian") ||
									hasTag(sp, "hisuian") ||
									hasTag(sp, "paldean")
								);
							}
							if (tag === "otherforms") return hasTag(sp, "otherforms");
							return hasTag(sp, tag);
						},
						// form-level
						(form) => {
							if (tag === "regional") {
								return (
									hasTag(form, "alolan") ||
									hasTag(form, "galarian") ||
									hasTag(form, "hisuian") ||
									hasTag(form, "paldean")
								);
							}
							if (tag === "otherforms") return hasTag(form, "otherforms");
							return hasTag(form, tag);
						}
					);
				}
				if (cmdMode === "species") {
					let tag = (cmdArg || "").toLowerCase().trim();
					if (!tag) return true;

					// Allowed tags for /species:
					// starter, fossil, pseudo, mega, zcrystal, ultrabeast, paradox, legendary, mythical
					const allowedSpeciesTags = new Set([
						"starter",
						"fossil",
						"pseudo",
						"mega",
						"zcrystal",
						"ultrabeast",
						"paradox",
						"legendary",
						"mythical",
					]);

					// Only these tags are supported
					if (!allowedSpeciesTags.has(tag)) return false;

					return speciesAndFormsMatch(
						it,
						// species-level tags
						(sp) => {
							if (tag === "legendary") {
								// keep your “legendary includes mythical” behavior
								return hasTag(sp, "legendary") || hasTag(sp, "mythical");
							}
							if (tag === "mythical") return hasTag(sp, "mythical");
							return hasTag(sp, tag);
						},
						// form-level tags
						(form) => {
							if (tag === "legendary") {
								return hasTag(form, "legendary") || hasTag(form, "mythical");
							}
							if (tag === "mythical") return hasTag(form, "mythical");
							return hasTag(form, tag);
						}
					);
				}
				if (cmdMode === "type") {
					// Uses monInfo.types first, then falls back to any types on the dex entry
					const needle = (cmdArg || "").toLowerCase().trim();
					if (!needle) return true;

					const info = monInfoForGame ? monInfoForGame[it.id] : null;

					// Species-level types
					const baseTypes = (info?.types || it.types || []).map((t) =>
						String(t).toLowerCase()
					);

					// Form-level types from monInfo (if you add them there)
					const formTypesFromInfo = [];
					if (Array.isArray(info?.forms)) {
						info.forms.forEach((f) => {
							if (!f) return;
							if (Array.isArray(f.types)) {
								f.types.forEach((t) => formTypesFromInfo.push(String(t).toLowerCase()));
							} else if (f.type) {
								formTypesFromInfo.push(String(f.type).toLowerCase());
							}
						});
					}

					// Optional: types defined directly on dex forms (if you ever use that)
					const formTypesFromDex = [];
					if (Array.isArray(it.forms)) {
						it.forms.forEach((f) => {
							if (!f || typeof f !== "object") return;
							if (Array.isArray(f.types)) {
								f.types.forEach((t) => formTypesFromDex.push(String(t).toLowerCase()));
							} else if (f.type) {
								formTypesFromDex.push(String(f.type).toLowerCase());
							}
						});
					}

					const allTypes = [...baseTypes, ...formTypesFromInfo, ...formTypesFromDex];
					if (!allTypes.length) return false;

					return allTypes.some((t) => t.includes(needle));
				}
				if (cmdMode === "evolution") {
					const needle = (cmdArg || "").toLowerCase().trim();
					if (!needle) return true;

					const info = monInfoForGame ? monInfoForGame[it.id] : null;

					const methods = [];

					// Species-level evolution info
					if (info?.evolution) {
						const evo = info.evolution;
						if (evo.method) {
							methods.push(String(evo.method).toLowerCase());
						}
						if (Array.isArray(evo.tags)) {
							evo.tags.forEach((t) => methods.push(String(t).toLowerCase()));
						}
					}

					// Form-level evolution info (if present)
					if (Array.isArray(info?.forms)) {
						info.forms.forEach((f) => {
							if (!f || !f.evolution) return;
							const fe = f.evolution;
							if (fe.method) {
								methods.push(String(fe.method).toLowerCase());
							}
							if (Array.isArray(fe.tags)) {
								fe.tags.forEach((t) => methods.push(String(t).toLowerCase()));
							}
						});
					}

					if (!methods.length) return false;

					// crude mapping: /evolution stone, /evolution trade, etc.
					const n = needle.replace(/[^a-z0-9]/g, "");
					return methods.some((m) => m.replace(/[^a-z0-9]/g, "").includes(n));
				}
				if (cmdMode === "location") {
					const needle = (cmdArg || "").toLowerCase();
					if (!needle) return true;

					const info = monInfoForGame ? monInfoForGame[it.id] : null;

					// Base locations
					const baseLocs = Array.isArray(info?.locations)
						? info.locations
						: [];

					// Optional: per-form locations in monInfo (if you add them later)
					let allLocs = baseLocs.slice();
					if (Array.isArray(info?.forms)) {
						info.forms.forEach((f) => {
							if (!f) return;
							if (Array.isArray(f.locations)) {
								allLocs.push(...f.locations);
							} else if (typeof f.location === "string") {
								allLocs.push(f.location);
							}
						});
					}

					if (!allLocs.length) return false;

					return allLocs.some((loc) => {
						if (typeof loc === "string") {
							return loc.toLowerCase().includes(needle);
						}
						const area = (loc.area || "").toLowerCase();
						const notes = (loc.notes || "").toLowerCase();
						return area.includes(needle) || notes.includes(needle);
					});
				}
				if (cmdMode === "stage") {
					// Evolution stage pulled from monInfo.evolution.stage
					if (!cmdStage) return true;

					const info = monInfoForGame ? monInfoForGame[it.id] : null;
					const stages = [];

					// Species stage
					if (info?.evolution && typeof info.evolution.stage === "number") {
						stages.push(info.evolution.stage);
					}

					// Form stages
					if (Array.isArray(info?.forms)) {
						info.forms.forEach((f) => {
							if (!f || !f.evolution) return;
							const st = f.evolution.stage;
							if (typeof st === "number") stages.push(st);
						});
					}

					if (!stages.length) return false;
					return stages.includes(cmdStage);
				}
				return true;
			});
		} else if (isCommandTyping) {
			// Typing an incomplete /command → don't narrow results yet
			filtered = dex;
		} else {
			// Normal text search
			filtered = dex.filter((it) =>
				`${it.id} ${it.name}`.toLowerCase().includes(q)
			);
		}

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
					${renderBadges(current, gameKey)}
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

					// NEW: immediate Dex ↔ Dex + Dex → Task sync for this mon
					const changed = { [it.id]: newVal };

					// Dex ↔ Dex links (regional / national / multi-dex)
					try {
						applyDexLinksFromDexEntries(gameKey, changed);
					} catch (e) {
						console.error("applyDexLinksFromDexEntries (single) error:", e);
					}

					// Dex → Task sync
					try {
						window.PPGC.applyDexSyncsFromDexEntries?.(gameKey, changed);
					} catch (e) {
						console.error("applyDexSyncsFromDexEntries (single) error:", e);
					}

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
					const newBadgesHTML = renderBadges(newVal, gameKey);
					if (newBadgesHTML)
						thumb.insertAdjacentHTML("afterbegin", newBadgesHTML);
				});
			}
			dexGrid.appendChild(card);
		});
	}

	function openDexModal(gameKey, genKey) {
		// Resolve base "x" / "sun" into first real dex (x-central, sun-melemele, etc.)
		const resolvedKey = resolveInitialDexKey(gameKey);
		store.state.dexModalFor = resolvedKey;
		refreshScopeControls(resolvedKey);

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
		const scopeLabel = labelForDexKey(baseKey, resolvedKey);

		modalTitle.innerHTML = `
			<span class="dex-modal-title-main">Dex Editor - ${baseLabel}</span>
			<span class="dex-modal-title-scope">${scopeLabel}</span>
		`;
		const scrollEl = getDexScrollContainer();
		if (scrollEl) scrollEl.scrollTop = 0;
		dexGrid.scrollTop = 0;
		dexSearch.value = "";
		if (dexHelpDropdown) {
			dexHelpDropdown.style.display = "none";
		}
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
		const scrollEl = getDexScrollContainer();
		if (scrollEl) scrollEl.scrollTop = 0;
		dexGrid.scrollTop = 0;
		dexSearch.value = "";

		// Hide /help dropdown if it's showing
		if (dexHelpDropdown) {
			dexHelpDropdown.style.display = "none";
		}

		// Reset the bulk status dropdown back to "Unknown"
		if (bulkStatusSelect && bulkStatusSelect.tagName === "SELECT") {
			// Prefer explicit "unknown" if present, otherwise fall back to last option
			const normalizedOptions = Array.from(bulkStatusSelect.options).map((opt) =>
				normalizeFlag(opt.value || opt.textContent || "")
			);
			const hasUnknown = normalizedOptions.includes("unknown");

			if (hasUnknown) {
				bulkStatusSelect.value = "unknown";
			} else if (bulkStatusSelect.options.length > 0) {
				bulkStatusSelect.selectedIndex = bulkStatusSelect.options.length - 1;
			}
		}

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
		const keys = new Set([
			...Object.keys(before),
			...Object.keys(after),
		]);
		for (const k of keys) {
			const b = before[k] || "unknown";
			const a = after[k] || "unknown";
			if (a !== b) changed[k] = a; // only apply diffs
		}

		// Apply Dex -> Task using Dex entries’ taskSync (no rendering here)
		try {
			applyDexLinksFromDexEntries(gameKey, changed);
		} catch (e) {
			console.error("applyDexLinksFromDexEntries error:", e);
		}
		// Then apply Dex -> Task using Dex entries’ taskSync
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

		// Take the bulk status from the dropdown (default to "caught")
		let chosen = "caught";
		if (bulkStatusSelect && bulkStatusSelect.tagName === "SELECT") {
			const raw = bulkStatusSelect.value;
			if (raw) chosen = normalizeFlag(raw);
		}

		const dex = window.DATA.dex?.[gameKey] || [];
		const curr = store.dexStatus.get(gameKey) || {};

		// Track which species we’re changing so we can run Dex↔Dex + Dex→Task
		const changed = {};

		// Run all the heavy work in batch mode (no repeated save/render)
		runInDexBatch(() => {
			for (const m of dex) {
				if (m.mythical) continue; // keep your existing rule: skip mythicals

				const applied = clampStatusForMon(m, chosen);
				curr[m.id] = applied;
				_queueDexSync(gameKey, m.id, applied);
				changed[m.id] = applied;

				// Forms: apply the same chosen status to every form
				if (Array.isArray(m.forms) && m.forms.length) {
					const node = _setAllFormsForMon(
						store,
						gameKey,
						m.id,
						m.forms,
						applied
					);

					for (const [fname, val] of Object.entries(node.forms || {})) {
						if (!fname) continue;

						// Dex ↔ Dex form sync (regional <-> national)
						try {
							applyDexLinksFromForm(gameKey, m.id, fname, val);
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
						} catch {
							// ignore
						}
					}
				}
			}

			// Persist the current dex we just edited (in-memory only, save() happens after batch)
			store.dexStatus.set(gameKey, curr);

			// Immediately mirror these changes to linked dexes + tasks (still in batch mode)
			if (Object.keys(changed).length) {
				try {
					applyDexLinksFromDexEntries(gameKey, changed);
				} catch (e) {
					console.error("applyDexLinksFromDexEntries (bulk) error:", e);
				}

				try {
					window.PPGC?.applyDexSyncsFromDexEntries?.(gameKey, changed);
				} catch (e) {
					console.error("applyDexSyncsFromDexEntries (bulk) error:", e);
				}
			}
		});

		// 🔹 NEW: tell the modal “this is now the baseline”
		if (modal) {
			modal.__dexSnapshot = { ...curr };
		}

		// NOW do a single save + re-render once
		save();
		renderDexGrid();
	});

	return api;
}