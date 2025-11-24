import { save } from "../store.js";
import {
	layoutWheel,
	getGameColor,
	computeChipScale,
	prepFormsModal,
	createWheelResizeHandler,
} from "./modal.js";
import { registerKeywordSectionMeter } from "./helpers.js";

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

		fashionGrid.innerHTML = "";

		cat.items.forEach((it) => {
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

	// --- Forms wheel for fashion (shared modal) ------------------------------

	let closeForms = function closeFormsDefault() {
		const active = document.activeElement;
		if (active && formsModal.contains(active)) {
			try {
				active.blur();
			} catch {
				// ignore
			}
		}
		formsModal.classList.remove("open");
		formsModal.setAttribute("aria-hidden", "true");
		formsModal.setAttribute("inert", "");
	};

	function openForms(gameKey, categoryId, item) {
		const accent = getGameColor(gameKey);
		const dialog = prepFormsModal(formsModal, formsWheel, {
			accent,
			clearWheelGridStyles: true, // reset any grid overrides from Dex/Fashion
		});
		if (!dialog) return;

		const forms = item.forms || [];
		const N = forms.length;
		const useRadial = N <= 7;      // ≤7 → radial shapes, ≥8 → grid
		const preferWidth = N >= 11;   // same heuristic as before for dense wheels

		const body = dialog.querySelector(".modal-bd");
		if (body) {
			if (N > 12) {
				body.classList.add("forms-wheel-scroll");
			} else {
				body.classList.remove("forms-wheel-scroll");
			}
		}

		const { obj } = _getFormsNode(store, gameKey, categoryId, item.id);
		const firstLayout = layoutWheel(dialog, { preferWidth, sizeCap: 1000 });
		formsWheel.style.setProperty("--size", `${firstLayout.size}px`);

		const _scale = computeChipScale("fashion", N, dialog);
		formsWheel.style.setProperty("--form-img", `${_scale.img}px`);
		formsWheel.style.setProperty("--chip-font", `${_scale.font}px`);
		formsWheel.style.setProperty("--chip-pad", _scale.pad);

		// Build chips so we can measure widths for layout
		const chips = forms.map((form) => {
			const name = typeof form === "string" ? form : form?.name ?? "";
			const img = typeof form === "object" ? form?.img : null;

			const btn = document.createElement("button");
			btn.className = "form-chip";
			btn.title = name;

			const row = document.createElement("div");
			row.className = "chip-row";

			const labelSpan = document.createElement("span");
			labelSpan.className = "chip-text";
			labelSpan.textContent = name || "?";
			row.appendChild(labelSpan);

			if (img) {
				const im = document.createElement("img");
				im.src = img;
				im.alt = name;
				im.loading = "lazy";
				row.appendChild(im);
			}

			const checked = !!obj.forms?.[name];
			btn.setAttribute("aria-checked", checked ? "true" : "false");

			btn.addEventListener("click", () => {
				const now = btn.getAttribute("aria-checked") !== "true";
				btn.setAttribute("aria-checked", now ? "true" : "false");

				const { obj } = _getFormsNode(store, gameKey, categoryId, item.id);
				obj.forms = obj.forms || {};
				obj.forms[name] = now;

				const total = forms.length;
				const onCount = Object.values(obj.forms).filter(Boolean).length;
				obj.all = onCount === total;

				_setFormsNode(store, gameKey, categoryId, item.id, obj);
				save();

				const mainChk = document.querySelector(
					`[data-fashion-main="${gameKey}:${categoryId}:${item.id}"]`
				);
				if (mainChk instanceof HTMLInputElement) {
					mainChk.checked = !!obj.all;
				}

				const key = `${gameKey}:${categoryId}:${item.id}`;
				document
					.querySelectorAll(`[data-fashion-count="${key}"]`)
					.forEach((el) => {
						el.textContent = `${onCount}/${total}`;
					});

				updateFashionSummaryCard(gameKey, categoryId);
				refreshSectionHeader();
			});

			btn.appendChild(row);
			formsWheel.appendChild(btn);
			return btn;
		});

		// ----- Layout mode: radial vs 4-col grid -----
		let onResize = null;

		if (useRadial) {
			// Reset any grid overrides from a previous open
			formsWheel.style.width = "";
			formsWheel.style.height = "";
			formsWheel.style.display = "";
			formsWheel.style.gridTemplateColumns = "";
			formsWheel.style.gap = "";
			formsWheel.style.padding = "";

			// Radial wheel with shared layout (uses our special shapes for 2–7).
			onResize = createWheelResizeHandler("fashion", dialog, formsWheel, chips, {
				preferWidth,
				sizeCap: 1000,
				flattenSyForRingsGte: 3,
				innerRadiusStrategy(minR, outerR) {
					return Math.max(40, outerR * 0.25);
				},
				extraRingYOffset: { from: 3, factor: 1.08 },
			});
			window.addEventListener("resize", onResize, { passive: true });
		} else {
			// 8+ forms → grid layout with 4 columns, like Dex/Fashion grids.
			formsWheel.style.width = "100%";
			formsWheel.style.height = "auto";
			formsWheel.style.display = "grid";
			formsWheel.style.gridTemplateColumns = "repeat(4, minmax(0, 1fr))";
			formsWheel.style.gap = "12px";
			// Add some breathing room so cards don't touch the edges
			formsWheel.style.padding = "8px 16px 16px";

			chips.forEach((chip) => {
				chip.style.position = "static";
				chip.style.transform = "none";
				chip.style.width = "100%";
				chip.style.height = "auto";
			});
		}

		// Overwrite closeForms to also remove the resize listener (if any)
		closeForms = function () {
			if (onResize) {
				window.removeEventListener("resize", onResize);
			}
			const active = document.activeElement;
			if (active && formsModal.contains(active)) {
				try {
					active.blur();
				} catch {
					// ignore
				}
			}
			formsModal.classList.remove("open");
			formsModal.setAttribute("aria-hidden", "true");
			formsModal.setAttribute("inert", "");
		};

		formsModal.classList.add("open");
		formsModal.setAttribute("aria-hidden", "false");
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

	formsModal.addEventListener("click", (e) => {
		if (e.target === formsModal) closeForms();
	});
	formsModalClose.addEventListener("click", closeForms);
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && formsModal.classList.contains("open"))
			closeForms();
	});

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
