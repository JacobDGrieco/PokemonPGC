import { save } from "../store.js";
import { registerKeywordSectionMeter } from "./helpers.js";
import { setupFashionForms } from "./fashion-forms.js";

/** Get the fashion categories for a game. */
function _getGameFashion(gameKey) {
	return window.DATA.fashion?.[gameKey]?.categories || [];
}

/**
 * Get (and lazily create) the forms node record for a specific fashion item.
 * Structure:
 *   Map<gameKey, Map<categoryId, { [itemId]: { all, forms } }>>
 */
function _getFormsNode(store, gameKey, categoryId, itemId) {
	const catMap = store.fashionFormsStatus.get(gameKey) || new Map();
	const obj = (catMap.get(categoryId) || {})[itemId] || {
		all: false,
		forms: {},
	};
	return { catMap, obj };
}

/** Persist a fashion item forms node back into the store. */
function _setFormsNode(store, gameKey, categoryId, itemId, node) {
	let catMap = store.fashionFormsStatus.get(gameKey);
	if (!catMap) {
		catMap = new Map();
		store.fashionFormsStatus.set(gameKey, catMap);
	}
	const rec = catMap.get(categoryId) || {};
	rec[itemId] = node;
	catMap.set(categoryId, rec);
}

/**
 * Compute per-item progress:
 * - with forms: (#on / total forms)
 * - without forms: simple boolean from fashionStatus.
 */
function _itemProgress(store, gameKey, categoryId, item) {
	const hasForms = Array.isArray(item.forms) && item.forms.length > 0;
	if (hasForms) {
		const { obj } = _getFormsNode(store, gameKey, categoryId, item.id);
		const total = item.forms.length;
		const done = Object.values(obj.forms || {}).filter(Boolean).length;
		return { done, total };
	}

	const catMap = store.fashionStatus.get(gameKey);
	const raw = catMap?.get(categoryId) || {};
	const checked = !!raw[item.id];
	return { done: checked ? 1 : 0, total: 1 };
}

/** Completion percentage for a single fashion category in a game. */
export function fashionPctFor(gameKey, categoryId, store) {
	const cat = _getGameFashion(gameKey).find((c) => c.id === categoryId);
	if (!cat) return 0;

	let done = 0;
	let total = 0;
	for (const it of cat.items) {
		const p = _itemProgress(store, gameKey, categoryId, it);
		done += p.done;
		total += p.total;
	}
	return total ? (done / total) * 100 : 0;
}

function fashionPctForGame(gameKey, store) {
	const cats = _getGameFashion(gameKey);
	if (!Array.isArray(cats) || !cats.length) return 0;

	let done = 0;
	let total = 0;

	for (const cat of cats) {
		for (const it of cat.items || []) {
			const p = _itemProgress(store, gameKey, cat.id, it);
			done += p.done;
			total += p.total;
		}
	}

	return total ? (done / total) * 100 : 0;
}

// Register a section meter so "Fashion" sections get a progress ring.
registerKeywordSectionMeter({
	keyword: "fashion",
	pctFn(gameKey, store) {
		return fashionPctForGame(gameKey, store);
	},
	flagProp: "__ppgcFashionMeter",
	exposeName: "fashionPctForGame",
});

/**
 * Summary card for a fashion category.
 * Shows completion and a button to open the fashion modal.
 */
export function fashionSummaryCardFor(gameKey, genKey, categoryId, store) {
	const game = (window.DATA.games?.[genKey] || []).find(
		(g) => g.key === gameKey
	);
	const cat = _getGameFashion(gameKey).find((c) => c.id === categoryId);
	if (!cat) return document.createTextNode("");

	let done = 0;
	let total = 0;
	for (const it of cat.items) {
		const p = _itemProgress(store, gameKey, categoryId, it);
		done += p.done;
		total += p.total;
	}
	const pct = total ? Math.round((done / total) * 100) : 0;

	const card = document.createElement("section");
	const accent = game?.color || "#7fd2ff";
	card.className = "card";
	card.style.setProperty("--accent", accent);

	const key = `${gameKey}:${categoryId}`;
	card.setAttribute("data-fashion-summary", key);

	card.innerHTML = `
		<div class="card-hd">
			<h3>${cat.label} — <span class="small">${game?.label || gameKey}</span></h3>
			<div>
			<button class="button" data-open-fashion>Open ${cat.label}</button>
			</div>
		</div>
		<div class="card-bd">
			<div class="small" data-fashion-summary-text>
			${done} / ${total} (${pct.toFixed(0)}%)
			</div>
			<div class="progress">
			<span class="base" data-fashion-summary-bar style="width:${pct}%"></span>
			</div>
		</div>
	`;

	card.querySelector("[data-open-fashion]")?.addEventListener("click", () => {
		window.PPGC?.fashionApi?.openFashionModal(gameKey, genKey, categoryId);
	});

	return card;
}

/**
 * Wire up the Fashion modal and its "forms" usage of the shared forms modal.
 */
export function wireFashionModal(store, els) {
	const {
		fashionModal,
		fashionModalClose,
		fashionSelectAll,
		fashionClearAll,
		fashionGrid,
		fashionModalTitle,
	} = els;

	const formsModal = document.getElementById("formsModal");
	const formsModalClose = document.getElementById("formsModalClose");
	const formsWheel = document.getElementById("formsWheel");
	const fashionSearch = document.getElementById("fashionSearch");

	const { openForms, closeForms } = setupFashionForms(store, {
		formsModal,
		formsModalClose,
		formsWheel,
		getFormsNode: (gameKey, categoryId, itemId) =>
			_getFormsNode(store, gameKey, categoryId, itemId),
		setFormsNode: (gameKey, categoryId, itemId, node) =>
			_setFormsNode(store, gameKey, categoryId, itemId, node),
		updateFashionSummary: updateFashionSummaryCard,
		refreshSectionHeader,
	});

	// --- Helpers to sync summary cards / section header ----------------------

	function updateFashionSummaryCard(gameKey, categoryId) {
		const cats = _getGameFashion(gameKey);
		const cat = cats.find((c) => c.id === categoryId);
		if (!cat) return;

		let done = 0;
		let total = 0;
		for (const it of cat.items || []) {
			const p = _itemProgress(store, gameKey, categoryId, it);
			done += p.done;
			total += p.total;
		}
		const pct = total ? Math.round((done / total) * 100) : 0;
		const key = `${gameKey}:${categoryId}`;

		document
			.querySelectorAll(`[data-fashion-summary="${key}"]`)
			.forEach((card) => {
				const textEl = card.querySelector("[data-fashion-summary-text]");
				if (textEl) {
					textEl.textContent = `${done} / ${total} (${pct.toFixed(0)}%)`;
				}
				const barEl = card.querySelector("[data-fashion-summary-bar]");
				if (barEl) {
					barEl.style.width = `${pct}%`;
				}
			});
	}

	function refreshSectionHeader() {
		if (window.PPGC && typeof window.PPGC.refreshSectionHeaderPct === "function") {
			window.PPGC.refreshSectionHeaderPct();
		}
	}

	// --- Core grid rendering --------------------------------------------------

	function renderGrid() {
		const { fashionForGame, fashionCategory } = store.state;
		if (!fashionForGame || !fashionCategory) return;

		const cat = _getGameFashion(fashionForGame).find(
			(c) => c.id === fashionCategory
		);
		if (!cat) return;

		const rawQ = (fashionSearch?.value || "").trim();
		const q = rawQ.toLowerCase();

		// Start from full list
		let items = (cat.items || []).slice();

		if (q) {
			if (q.startsWith("/")) {
				// --- Command mode: /true /false -----------------------------
				if (q === "/true") {
					items = items.filter((it) => {
						const p = _itemProgress(store, fashionForGame, fashionCategory, it);
						return p.done > 0; // at least one form / main item true
					});
				} else if (q === "/false") {
					items = items.filter((it) => {
						const p = _itemProgress(store, fashionForGame, fashionCategory, it);
						return p.done === 0; // nothing is true (including all forms)
					});
				}
				// any other /command → ignore and fall back to full list
			} else {
				// --- Plain text search -------------------------------------
				items = items.filter((it) => {
					let haystack = (it.name || "").toLowerCase();

					// Also search in form names if present
					if (Array.isArray(it.forms)) {
						for (const f of it.forms) {
							const fname = typeof f === "string" ? f : f?.name;
							if (fname) {
								haystack += " " + fname.toLowerCase();
							}
						}
					}

					return haystack.includes(q);
				});
			}
		}

		fashionGrid.innerHTML = "";

		items.forEach((it) => {
			const hasForms = Array.isArray(it.forms) && it.forms.length > 0;
			const card = document.createElement("article");
			card.className = "card";
			card.innerHTML = `
        <div class="thumb">
          ${it.img
					? `<img class="sprite" alt="${it.name}" src="${it.img}" loading="lazy"/>`
					: `<div style="opacity:.5;">No image</div>`
				}
        </div>
        <div class="card-bd">
          <div class="name" title="${it.name}">${it.name}</div>
          <div class="row" style="gap:8px;align-items:center;">
            ${hasForms
					? `<button class="forms-launch" title="Choose forms (colors)">
                     <span class="dot"></span><span>Forms</span>
                     <span class="pill count" data-fashion-count="${fashionForGame}:${fashionCategory}:${it.id}"></span>
                   </button>`
					: `<label class="small" style="display:inline-flex;gap:8px;align-items:center;">
                     <input type="checkbox" data-fashion-main="${fashionForGame}:${fashionCategory}:${it.id}"/>
                     <span>Collected</span>
                   </label>`
				}
          </div>
        </div>
      `;

			const key = `${fashionForGame}:${fashionCategory}:${it.id}`;
			const countEl = card.querySelector(`[data-fashion-count="${key}"]`);
			if (countEl) {
				const p = _itemProgress(store, fashionForGame, fashionCategory, it);
				countEl.textContent = `${p.done}/${p.total}`;
			}

			// Parent checkbox behavior (no forms)
			if (!hasForms) {
				const mainChk = card.querySelector(
					`[data-fashion-main="${fashionForGame}:${fashionCategory}:${it.id}"]`
				);
				if (mainChk instanceof HTMLInputElement) {
					// initial checked state based on current progress
					const p0 = _itemProgress(store, fashionForGame, fashionCategory, it);
					mainChk.checked = p0.done > 0;

					mainChk.addEventListener("change", () => {
						const checked = mainChk.checked;
						const catMap =
							store.fashionStatus.get(fashionForGame) || new Map();
						const rec = catMap.get(fashionCategory) || {};
						rec[it.id] = checked;
						catMap.set(fashionCategory, rec);
						store.fashionStatus.set(fashionForGame, catMap);
						save();

						const p = _itemProgress(
							store,
							fashionForGame,
							fashionCategory,
							it
						);
						const countElInner = card.querySelector(
							`[data-fashion-count="${key}"]`
						);
						if (countElInner) {
							countElInner.textContent = `${p.done}/${p.total}`;
						}

						updateFashionSummaryCard(fashionForGame, fashionCategory);
						refreshSectionHeader();
					});
				}
			}

			// Forms launcher
			if (hasForms) {
				card.querySelector(".forms-launch")?.addEventListener("click", (e) => {
					e.stopPropagation();
					openForms(fashionForGame, fashionCategory, it);
				});
			}

			fashionGrid.appendChild(card);
		});
	}

	// --- Fashion modal open/close --------------------------------------------

	function openFashionModal(gameKey, genKey, categoryId) {
		store.state.fashionForGame = gameKey;
		store.state.fashionCategory = categoryId;

		const game = (window.DATA.games?.[genKey] || []).find(
			(g) => g.key === gameKey
		);
		const cat = _getGameFashion(gameKey).find((c) => c.id === categoryId);

		fashionModal.style.setProperty("--accent", game?.color || "#7fd2ff");
		fashionModalTitle.textContent = `Fashion — ${game ? game.label : gameKey
			} · ${cat?.label || categoryId}`;

		const sheet = fashionModal.querySelector(".sheet");
		const sheetHeader = sheet?.querySelector("header");
		if (sheet && sheetHeader) {
			sheet.style.setProperty("--hdr", `${sheetHeader.offsetHeight}px`);
		}

		fashionModal.querySelector("#fashionGrid")?.classList.add("grid");
		renderGrid();

		fashionModal.removeAttribute("inert");
		fashionModal.setAttribute("aria-hidden", "false");
		fashionModal.classList.add("open");
		document.getElementById("fashionModalClose")?.focus();
	}

	function closeFashionModal() {
		const modal = document.getElementById("fashionModal");
		const active = document.activeElement;
		if (active && modal.contains(active)) {
			try {
				active.blur();
			} catch {
				// ignore
			}
		}
		modal.classList.remove("open");
		modal.setAttribute("aria-hidden", "true");
		modal.setAttribute("inert", "");
	}

	// --- Bulk select/clear for a category ------------------------------------
	function _bulkSetCategory(checked) {
		const { fashionForGame, fashionCategory } = store.state;
		if (!fashionForGame || !fashionCategory) return;

		const cat = _getGameFashion(fashionForGame).find(
			(c) => c.id === fashionCategory
		);
		if (!cat) return;

		const catMap = store.fashionStatus.get(fashionForGame) || new Map();
		const rec = catMap.get(fashionCategory) || {};

		for (const it of cat.items) {
			const hasForms = Array.isArray(it.forms) && it.forms.length > 0;
			if (hasForms) {
				const { obj } = _getFormsNode(
					store,
					fashionForGame,
					fashionCategory,
					it.id
				);
				obj.all = checked;
				obj.forms = obj.forms || {};
				(it.forms || []).forEach((f) => {
					const name = typeof f === "string" ? f : f?.name;
					if (name) obj.forms[name] = checked;
				});
				_setFormsNode(store, fashionForGame, fashionCategory, it.id, obj);
			} else {
				rec[it.id] = checked;
			}
		}

		catMap.set(fashionCategory, rec);
		store.fashionStatus.set(fashionForGame, catMap);
		save();
		renderGrid();
		updateFashionSummaryCard(fashionForGame, fashionCategory);
		refreshSectionHeader();
	}

	// --- Event wiring --------------------------------------------------------

	fashionModal.addEventListener("click", (e) => {
		if (e.target === fashionModal) closeFashionModal();
	});
	fashionModalClose.addEventListener("click", closeFashionModal);
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") closeFashionModal();
	});
	if (fashionSearch && !fashionSearch._bound) {
		fashionSearch.addEventListener("input", () => {
			renderGrid();
		});
		fashionSearch._bound = true;
	}

	if (fashionSelectAll && !fashionSelectAll._bound) {
		fashionSelectAll.addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			_bulkSetCategory(true);
		});
		fashionSelectAll._bound = true;
	}

	if (fashionClearAll && !fashionClearAll._bound) {
		fashionClearAll.addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			_bulkSetCategory(false);
		});
		fashionClearAll._bound = true;
	}

	return { openFashionModal, renderGrid };
}
