import { ring } from "./rings.js";
import { save } from "../store.js";
import {
	fashionSummaryCardFor,
	wireFashionModal,
} from "../modals/fashion.js";
import {
	ensureSections,
	bootstrapTasks,
	renderTaskLayout,
	renderTaskList,
} from "../tasks.js";
import {
	allGamesList,
	getGameRowsForGen,
	getSectionAddonPcts,
	summarizeTasks,
} from "../progress.js";
import { dexSummaryCardFor, dexPctFor, wireDexModal } from "../modals/dex.js";
import { renderDistributionCardsFor } from "../modals/distributions.js";
import { renderCurryCardsFor } from "../modals/curry.js";
import { renderSandwichCardsFor } from "../modals/sandwich.js";

const dexApiSingleton = { api: null };
const fashionApiSingleton = { api: null };

/* ==================== Global helpers (tooltips, etc.) ===================== */

(function ensureGlobalHelpers() {
	window.PPGC = window.PPGC || {};

	/**
	 * Hide and destroy any tooltip-like elements we know about.
	 * Used during teardown / navigation to avoid stray positioned nodes.
	 */
	function hideAllTooltips() {
		try {
			const nodes = document.querySelectorAll(
				'[role="tooltip"], .tooltip, #tooltip'
			);
			nodes.forEach((el) => el.remove());

			if (window.PPGC._tooltipTimer) {
				clearTimeout(window.PPGC._tooltipTimer);
				window.PPGC._tooltipTimer = null;
			}
			window.PPGC._tooltipEl = null;
		} catch (e) {
			console.warn("hideAllTooltips failed:", e);
		}
	}

	window.PPGC.hideTooltips = hideAllTooltips;
})();

/* ====================== Global task search (header) ======================= */

const TASK_SEARCH_MIN_CHARS = 2;
let _taskSearchIndex = null;

/**
 * Build a flat search index of all tasks from window.DATA.tasks.
 * Each entry contains task text, tooltip text, game + section labels, etc.
 */
function _buildTaskSearchIndex() {
	const idx = [];
	const tasksBySection = window.DATA?.tasks || {};
	const gamesByGen = window.DATA?.games || {};
	const sectionsByGame = window.DATA?.sections || {};

	// Map gameKey -> { label, genKey }
	const gameMeta = {};
	for (const [genKey, arr] of Object.entries(gamesByGen)) {
		(arr || []).forEach((g) => {
			if (!g || !g.key) return;
			gameMeta[g.key] = {
				label: g.label || g.key,
				genKey,
			};
		});
	}

	const gameKeyFromSectionId = (sectionId) =>
		(sectionId || "").split("-")[0] || "";

	for (const [sectionId, rootTasks] of Object.entries(tasksBySection)) {
		const gameKey = gameKeyFromSectionId(sectionId);
		const gm = gameMeta[gameKey] || { label: gameKey, genKey: null };
		const sectionDefs = sectionsByGame[gameKey] || [];
		const sec =
			sectionDefs.find((s) => (s.id || sectionId) === sectionId) || {};
		const sectionTitle = sec.title || sectionId;

		(function walk(arr) {
			for (const t of arr || []) {
				if (!t || typeof t !== "object") continue;

				const text = t.text ? String(t.text) : "";
				const tooltip = t.tooltip ? String(t.tooltip) : "";
				const hay = (text + " " + tooltip).toLowerCase();

				if (hay.trim()) {
					idx.push({
						id: t.id,
						text,
						textLower: text.toLowerCase(),
						tooltip,
						haystack: hay,
						gameKey,
						gameLabel: gm.label,
						genKey: gm.genKey,
						sectionId,
						sectionTitle,
					});
				}

				if (Array.isArray(t.children) && t.children.length) {
					walk(t.children);
				}
			}
		})(rootTasks || []);
	}

	return idx;
}

function _ensureTaskSearchIndex() {
	if (!_taskSearchIndex) {
		_taskSearchIndex = _buildTaskSearchIndex();
	}
	return _taskSearchIndex;
}

function _clearTaskSearchUI(clearInput = true) {
	const input = document.getElementById("taskSearchInput");
	const resultsEl = document.getElementById("taskSearchResults");
	if (clearInput && input) input.value = "";
	if (resultsEl) {
		resultsEl.innerHTML = "";
		resultsEl.classList.remove("is-open");
	}
}

/**
 * Run a search against the global index, update the dropdown with the top 5.
 * Matches task.text and any tooltip text.
 */
function _performTaskSearch(rawQuery) {
	const numOfResults = 15;

	const resultsEl = document.getElementById("taskSearchResults");
	if (!resultsEl) return;

	const query = (rawQuery || "").trim().toLowerCase();
	resultsEl.innerHTML = "";
	resultsEl.classList.remove("is-open");

	if (!query || query.length < TASK_SEARCH_MIN_CHARS) return;

	const index = _ensureTaskSearchIndex();
	const matches = [];

	for (const entry of index) {
		const pos = entry.haystack.indexOf(query);
		if (pos === -1) continue;

		// Simple scoring: prefer matches in the main text, and earlier positions.
		let score = pos;
		const textPos = entry.textLower.indexOf(query);
		if (textPos !== -1) score -= 10;

		matches.push({ entry, score });
	}

	if (!matches.length) return;

	matches.sort((a, b) => a.score - b.score);
	const top = matches.slice(0, numOfResults).map((m) => m.entry);

	const frag = document.createDocumentFragment();
	top.forEach((e) => {
		const item = document.createElement("button");
		item.type = "button";
		item.className = "task-search-item";
		item.setAttribute("data-task-search-hit", "1");
		item.setAttribute("data-game", e.gameKey || "");
		if (e.genKey) item.setAttribute("data-gen", e.genKey);
		item.setAttribute("data-section", e.sectionId || "");

		item.innerHTML = `
      <div class="task-search-item-text">${e.text}</div>
      <div class="task-search-item-meta small">
        ${(e.gameLabel || e.gameKey || "").trim()} — ${e.sectionTitle}
      </div>
    `;
		frag.appendChild(item);
	});

	resultsEl.appendChild(frag);
	resultsEl.classList.add("is-open");
}

/**
 * Wire the header search input once (global, not per-render).
 */
function wireGlobalTaskSearch() {
	if (window.PPGC._taskSearchWired) return;

	const input = document.getElementById("taskSearchInput");
	const resultsEl = document.getElementById("taskSearchResults");
	if (!input || !resultsEl) return;

	window.PPGC._taskSearchWired = true;

	input.addEventListener("input", () => {
		_performTaskSearch(input.value);
	});

	input.addEventListener("keydown", (evt) => {
		if (evt.key === "Escape") {
			_clearTaskSearchUI();
			input.blur();
		}
	});

	// Click on results → navigate to that game + section
	resultsEl.addEventListener("click", (evt) => {
		const target = evt.target.closest("[data-task-search-hit]");
		if (!target) return;

		const gameKey = target.getAttribute("data-game");
		const genKey = target.getAttribute("data-gen") || null;
		const sectionId = target.getAttribute("data-section");
		const store = window.PPGC._storeRef;

		if (!store || !gameKey || !sectionId) return;

		store.state.level = "section";
		store.state.gameKey = gameKey;
		store.state.genKey = genKey;
		store.state.sectionId = sectionId;
		save();

		_clearTaskSearchUI();
		window.PPGC.renderAll?.();
	});

	// Click anywhere else → close the dropdown
	document.addEventListener("click", (evt) => {
		if (
			evt.target === input ||
			input.contains(evt.target) ||
			resultsEl.contains(evt.target)
		) {
			return;
		}
		_clearTaskSearchUI(false); // just hide, keep text
	});
}

function wireSidebarToggle() {
	if (window.PPGC._sidebarToggleWired) return;

	const btn = document.getElementById("sidebarToggle");
	const sidebar = document.getElementById("sidebar");

	if (!btn || !sidebar) return;

	window.PPGC._sidebarToggleWired = true;

	btn.addEventListener("click", () => {
		const isCollapsed = document.body.classList.toggle("sidebar-collapsed");

		// ARIA helpers
		btn.setAttribute("aria-pressed", isCollapsed ? "true" : "false");
		sidebar.setAttribute("aria-hidden", isCollapsed ? "true" : "false");
	});
}

/* ============================ Local helpers =============================== */

function _isExtraCreditSection(sec) {
	const t = (sec?.title || "").trim().toLowerCase();
	return t === "distributions" || t === "extra credit";
}

/**
 * Compute a section's percent:
 * - bootstrap tasks
 * - compute task completion
 * - add any addon meters (Dex, forms, research, etc.)
 *
 * Returns a number 0..200 (extra credit can push total above 100 in some views).
 */
function _computeSectionPct(sec, gameKey, genKey, store) {
	// Ensure tasks exist
	bootstrapTasks(sec.id, store.tasksStore);

	// Extra meters (Dex, forms, research, custom)
	const addon = getSectionAddonPcts(
		sec,
		gameKey,
		genKey,
		(a, b) => dexPctFor(a, b, store),
		window.PPGC.sectionMeters
	);

	const tasksArr = store.tasksStore.get(sec.id) || [];
	const { done: baseDone, total: baseTotal } = summarizeTasks(tasksArr);

	const extraDone = addon.reduce(
		(a, p) => a + Math.max(0, Math.min(100, p)) / 100,
		0
	);

	const done = baseDone + extraDone;
	const total = baseTotal + addon.length;

	return total > 0 ? (done / total) * 100 : 0;
}

/* ======================== Main content renderer =========================== */

export function renderContent(store, els) {
	window.PPGC = window.PPGC || {};
	window.PPGC._storeRef = store;
	window.PPGC._tasksStoreRef = store.tasksStore;

	wireGlobalTaskSearch();
	wireSidebarToggle();

	const s = store.state;
	const elContent = els.elContent;
	elContent.innerHTML = "";

	// Wire Dex / Fashion modals (singletons)
	if (!dexApiSingleton.api) dexApiSingleton.api = wireDexModal(store, els);
	window.PPGC.dexApi = dexApiSingleton.api;

	if (!fashionApiSingleton.api) {
		fashionApiSingleton.api = wireFashionModal(store, els);
	}
	window.PPGC.fashionApi = fashionApiSingleton.api;

	/* ---------- Level: GEN (All games overview) ---------- */

	if (s.level === "gen") {
		const allGames = allGamesList();
		const wrap = document.createElement("section");
		wrap.className = "card";
		wrap.innerHTML = `
      <div class="card-hd"><h3>Game Summary — All Games</h3></div>
      <div class="card-bd"><div class="rings" id="gameRings"></div></div>`;
		elContent.appendChild(wrap);

		const ringsWrap = wrap.querySelector("#gameRings");

		allGames.forEach(({ genKey, game: g }) => {
			const secs = ensureSections(g.key);
			const baseSecs = secs.filter((sec) => !_isExtraCreditSection(sec));
			const extraSecs = secs.filter(_isExtraCreditSection);

			const basePcts = baseSecs.map((sec) =>
				_computeSectionPct(sec, g.key, genKey, store)
			);
			const baseComplete =
				basePcts.length > 0 && basePcts.every((p) => p >= 100 - 1e-6);
			const baseAvg = basePcts.length
				? basePcts.reduce((a, b) => a + b, 0) / basePcts.length
				: 0;

			let pct;
			if (!baseComplete) {
				pct = Math.min(100, baseAvg);
			} else {
				const extraPcts = extraSecs.map((sec) =>
					_computeSectionPct(sec, g.key, genKey, store)
				);
				const extraAvg = extraPcts.length
					? extraPcts.reduce((a, b) => a + b, 0) / extraPcts.length
					: 0;
				pct = 100 + Math.min(100, extraAvg); // cap at 200%
			}

			// Use imgs/games/XXX.png for the image ring
			const imgPath = `../imgs/games/${g.key}.png`;

			const r = ring(pct, g.label, { img: imgPath });
			r.style.setProperty("--accent", g.color || "#7fd2ff");
			r.style.cursor = "pointer";

			r.addEventListener("click", () => {
				s.genKey = genKey;
				s.level = "section";
				s.gameKey = g.key;
				const arr = ensureSections(g.key);
				s.sectionId = arr?.[0]?.id || null;
				save();
				window.PPGC?.renderAll?.();
			});

			ringsWrap.appendChild(r);
		});

		return;
	}

	/* ---------- Level: GAME (per-game, per-section rings) ---------- */

	if (s.level === "game") {
		const wrap = document.createElement("section");
		wrap.className = "card";
		wrap.innerHTML = `
      <div class="card-hd">
        <h3>Section Summary — ${(window.DATA.tabs || []).find((t) => t.key === s.genKey)?.label ||
			s.genKey
			}</h3>
      </div>
      <div class="card-bd" id="genSummary"></div>`;
		elContent.appendChild(wrap);

		const holder = wrap.querySelector("#genSummary");
		holder.classList.add("games-rows");

		const rows = getGameRowsForGen(s.genKey);
		rows.forEach((row) => {
			const rowEl = document.createElement("div");
			rowEl.className = "games-row";
			holder.appendChild(rowEl);

			row.forEach((g) => {
				const secs = ensureSections(g.key);
				const gameBox = document.createElement("div");
				gameBox.className = "game-summary";
				const accent = g.color || "#7fd2ff";
				gameBox.style.setProperty("--accent", accent);
				gameBox.innerHTML = `
          <div class="title">${g.label}</div>
          <div class="rings"></div>`;
				const ringsWrap = gameBox.querySelector(".rings");

				if (!secs.length) {
					const empty = document.createElement("div");
					empty.className = "small";
					empty.style.opacity = ".8";
					empty.textContent = "No sections defined.";
					gameBox.appendChild(empty);
				} else {
					// Use the same per-game image for all section rings in this game
					const imgPath = `../imgs/games/${g.key}.png`;

					secs.forEach((sec) => {
						const pct = _computeSectionPct(sec, g.key, s.genKey, store);
						ringsWrap.appendChild(ring(pct, sec.title, { img: imgPath }));
					});
				}

				rowEl.appendChild(gameBox);
			});
		});

		return;
	}

	/* ---------- Level: SECTION (tasks + Dex/Fashion/etc) ---------- */

	if (s.level === "section") {
		const sec = ensureSections(s.gameKey).find((x) => x.id === s.sectionId);
		if (!sec) {
			s.level = "game";
			save();
			return renderContent(store, els);
		}

		// Make sure tasks exist for this section
		bootstrapTasks(sec.id, store.tasksStore);

		const secPct = _computeSectionPct(sec, s.gameKey, s.genKey, store);

		const card = document.createElement("section");
		const gameInGen = (window.DATA.games?.[s.genKey] || []).find(
			(g) => g.key === s.gameKey
		);
		if (gameInGen?.color) {
			card.style.setProperty("--accent", gameInGen.color);
		}
		card.className = "card";
		card.innerHTML = `
      <div class="card-hd section-hd">
        <h3>${sec.title}</h3>
        <div class="pct">${secPct.toFixed(2)}%</div>
        <div class="row">
          <button class="button" id="openDexBtnInline">Open Dex</button>
        </div>
      </div>
      <div class="card-bd">
        <div id="injectedDex"></div>
        <div id="taskList"></div>
      </div>`;
		elContent.appendChild(card);

		const injectedDex = card.querySelector("#injectedDex");
		const headerEl = card.querySelector(".card-hd.section-hd");
		if (headerEl) {
			headerEl.style.setProperty("--progress", secPct.toFixed(2));
		}

		// Inline Dex/Fashion/Curry/Sandwich sections --------------------

		const titleLower = (sec.title || "").trim().toLowerCase();
		const tags = Array.isArray(sec.tags) ? sec.tags : [];

		const isFashion =
			sec.id === "fashion" ||
			tags.includes("fashion") ||
			titleLower.includes("fashion");

		if (isFashion && injectedDex) {
			const cats = window.DATA.fashion?.[s.gameKey]?.categories || [];
			cats.forEach((cat) => {
				injectedDex.appendChild(
					fashionSummaryCardFor(s.gameKey, s.genKey, cat.id, store)
				);
			});
		}

		const isCurry =
			sec.id === "curry" ||
			tags.includes("curry") ||
			titleLower.includes("curry");

		if (isCurry && injectedDex) {
			const curryGrid = renderCurryCardsFor(s.gameKey, s.genKey, store);
			if (curryGrid) injectedDex.appendChild(curryGrid);
		}

		const isSandwich =
			sec.id === "sandwich" ||
			tags.includes("sandwich") ||
			titleLower.includes("sandwich");

		if (isSandwich && injectedDex) {
			const sandwichGrid = renderSandwichCardsFor(
				s.gameKey,
				s.genKey,
				store
			);
			if (sandwichGrid) injectedDex.appendChild(sandwichGrid);
		}

		// Dex and distributions summary cards ---------------------------

		card
			.querySelector("#openDexBtnInline")
			.addEventListener("click", () =>
				dexApiSingleton.api.openDexModal(s.gameKey, s.genKey)
			);

		const isGCEA = titleLower === "gotta catch 'em all";
		if (isGCEA && injectedDex) {
			injectedDex.appendChild(dexSummaryCardFor(s.gameKey, s.genKey, store));
		}

		const isDistributions = titleLower === "distributions";
		if (isDistributions && injectedDex) {
			// Build region list from the distributions data for this game
			const allDists =
				(window.DATA?.distributions?.[s.gameKey] || []).filter(Boolean);

			const regionMap = new Map(); // key -> label

			const addRegionValue = (raw) => {
				if (!raw) return;
				if (Array.isArray(raw)) {
					raw.forEach(addRegionValue);
					return;
				}
				String(raw)
					.split(/[,&/]/) // split "UK, Norway / Denmark" safely
					.map((t) => t.trim())
					.filter(Boolean)
					.forEach((token) => {
						const key = token.toLowerCase();
						if (!regionMap.has(key)) {
							regionMap.set(key, token); // simple label
						}
					});
			};

			allDists.forEach((d) => addRegionValue(d.region || d.regions));

			const distSection = document.createElement("div");
			distSection.className = "dist-section";

			// --- filter row (single select) ---

			const filterRow = document.createElement("div");
			filterRow.className = "dist-filters-row";

			const label = document.createElement("label");
			label.className = "dist-filter-label";
			label.textContent = "Region:";

			const select = document.createElement("select");
			select.className = "dist-filter-select";
			select.id = "distRegionSelect";

			// "All" option
			const optAll = document.createElement("option");
			optAll.value = "all";
			optAll.textContent = "All";
			select.appendChild(optAll);

			// Per-region options (sorted)
			const sortedRegions = Array.from(regionMap.entries()).sort(([ak], [bk]) =>
				ak.localeCompare(bk)
			);
			for (const [key, labelText] of sortedRegions) {
				const opt = document.createElement("option");
				opt.value = key;
				opt.textContent = labelText;
				select.appendChild(opt);
			}

			label.htmlFor = select.id;

			filterRow.appendChild(label);
			filterRow.appendChild(select);

			// --- grid holder ---

			const gridHolder = document.createElement("div");
			gridHolder.className = "dist-grid-holder";

			const renderGrid = (regionKey) => {
				gridHolder.innerHTML = "";
				const grid = renderDistributionCardsFor(s.gameKey, s.genKey, store, {
					region: regionKey || "all",
				});
				gridHolder.appendChild(grid);
			};

			select.addEventListener("change", () => {
				renderGrid(select.value);
			});

			// initial render: All
			select.value = "all";
			renderGrid("all");

			distSection.appendChild(filterRow);
			distSection.appendChild(gridHolder);

			injectedDex.appendChild(distSection);
		}

		// Tasks ----------------------------------------------------------

		const listEl = card.querySelector("#taskList");
		listEl.innerHTML = "";
		const layoutRows = window.DATA.layout?.taskRows?.[sec.id];
		const tasksArr = store.tasksStore.get(sec.id) || [];

		const setTasks = (id, arr) => {
			store.tasksStore.set(id, arr);
			save();
		};

		// Recompute header percent when tasks change (used by tiered sliders, etc.)
		window.PPGC.refreshSectionHeaderPct = function refreshSectionHeaderPct() {
			const localStore = window.PPGC._storeRef;
			if (!localStore) return;

			const st = localStore.state;
			const secArr = ensureSections(st.gameKey);
			const currentSec = secArr.find((x) => x.id === st.sectionId);
			if (!currentSec) return;

			const pct = _computeSectionPct(
				currentSec,
				st.gameKey,
				st.genKey,
				localStore
			);

			const hdr = document.querySelector(".card-hd.section-hd");
			if (hdr) {
				const pctEl = hdr.querySelector(".pct");
				if (pctEl) pctEl.textContent = pct.toFixed(2) + "%";
				hdr.style.setProperty("--progress", pct.toFixed(2));
			}
		};

		if (Array.isArray(layoutRows) && layoutRows.length) {
			listEl.appendChild(
				renderTaskLayout(tasksArr, sec.id, setTasks, layoutRows)
			);
		} else {
			listEl.appendChild(renderTaskList(tasksArr, sec.id, setTasks));
		}

		return;
	}
}
