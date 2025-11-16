// curry.js
import { save } from "./store.js";

function _getGameCurry(gameKey) {
	const S = window.DATA || {};
	const C = S.curry || {};
	const entry = C[gameKey];

	if (!entry) return [];
	if (Array.isArray(entry)) return entry;
	if (Array.isArray(entry.items)) return entry.items;
	return [];
}

function _getCurryStatusMap(store, gameKey) {
	const map = store.curryStatus.get(gameKey) || {};
	if (!store.curryStatus.has(gameKey)) store.curryStatus.set(gameKey, map);
	return map;
}

function _getCurryFormsNode(store, gameKey, curryId) {
	const gameMap = store.curryFormsStatus.get(gameKey) || {};
	if (!store.curryFormsStatus.has(gameKey)) {
		store.curryFormsStatus.set(gameKey, gameMap);
	}
	const node =
		gameMap[curryId] || {
			all: false,
			forms: {},
		};
	return { gameMap, node };
}

function _setCurryFormsNode(store, gameKey, curryId, node) {
	const gameMap = store.curryFormsStatus.get(gameKey) || {};
	gameMap[curryId] = node;
	store.curryFormsStatus.set(gameKey, gameMap);
	save();
}

function _itemProgress(store, gameKey, item) {
	const hasForms = Array.isArray(item.forms) && item.forms.length > 0;

	if (hasForms) {
		const { node } = _getCurryFormsNode(store, gameKey, String(item.id));
		const total = item.forms.length;
		const done = Object.values(node.forms || {}).filter(Boolean).length;
		return { done, total };
	}

	const statusMap = _getCurryStatusMap(store, gameKey);
	const checked = !!statusMap[String(item.id)];
	return { done: checked ? 1 : 0, total: 1 };
}

export function curryPctFor(gameKey, store) {
	const items = _getGameCurry(gameKey);
	if (!items.length) return 0;

	let done = 0;
	let total = 0;
	for (const it of items) {
		const p = _itemProgress(store, gameKey, it);
		done += p.done;
		total += p.total;
	}
	return total ? (done / total) * 100 : 0;
}
(function registerCurrySectionMeter() {
	if (typeof window === "undefined") return;

	window.PPGC = window.PPGC || {};

	// Make sure sectionMeters is an array
	if (!Array.isArray(window.PPGC.sectionMeters)) {
		window.PPGC.sectionMeters = window.PPGC.sectionMeters
			? Array.from(window.PPGC.sectionMeters)
			: [];
	}

	// Avoid registering multiple times
	const already = window.PPGC.sectionMeters.some(
		(fn) => fn && fn.__ppgcCurryMeter
	);
	if (already) return;

	const meter = function currySectionMeter(sectionObj, gameKey, genKey) {
		const id = String(sectionObj?.id || "").toLowerCase();
		const title = (sectionObj?.title || "").toLowerCase();
		const tags = Array.isArray(sectionObj?.tags) ? sectionObj.tags : [];

		const isCurry =
			tags.includes("curry") || id.includes("curry") || title.includes("curry");
		if (!isCurry) return NaN;

		const store = window.PPGC?._storeRef;
		if (!store) return NaN;

		const pct = curryPctFor(gameKey, store);
		return isFinite(pct) ? pct : NaN;
	};

	meter.__ppgcCurryMeter = true;
	window.PPGC.sectionMeters.push(meter);

	// Optional: expose a helper for anywhere else
	window.PPGC.curryPctFor = function (gameKey, genKey) {
		const store = window.PPGC?._storeRef;
		if (!store) return 0;
		const pct = curryPctFor(gameKey, store);
		return isFinite(pct) ? pct : 0;
	};
})();

function _updateCurrySectionHeader(gameKey) {
	try {
		const store = window.PPGC?._storeRef;
		if (!store) return;
		const pct = curryPctFor(gameKey, store);
		const header = document.querySelector(".card-hd.section-hd");
		if (!header) return;

		const pctEl = header.querySelector(".pct");
		if (pctEl) {
			pctEl.textContent = `${pct.toFixed(2)}%`;
		}
		header.style.setProperty("--progress", pct.toFixed(2));
	} catch {
		// swallow any DOM issues
	}
}

function _getGameColor(gameKey, genKey) {
	const gamesByGen = window.DATA.games || {};
	if (genKey && gamesByGen[genKey]) {
		const g = gamesByGen[genKey].find((gg) => gg.key === gameKey);
		if (g?.color) return g.color;
	}
	for (const [gk, list] of Object.entries(gamesByGen)) {
		void gk;
		const g = (list || []).find((gg) => gg.key === gameKey);
		if (g?.color) return g.color;
	}
	return "#7fd2ff";
}

const CURRY_WHEEL_SIZE_CAP = 1000;
const CURRY_RADIUS_SCALE = 1.5;
function _getCurryOvalScale() {
	const w =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body?.clientWidth ||
		0;
	const h =
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body?.clientHeight ||
		0;

	if (!w || !h) return { sx: 1, sy: 1 };

	const aspect = w / h;
	if (aspect < 1.2) return { sx: 1, sy: 1 };

	const base =
		h <= 720
			? aspect >= 1.6
				? 1.3
				: 1.18
			: aspect >= 1.6
				? 1.25
				: 1.15;

	return { sx: base, sy: 1 / base };
}

function _layoutCurryWheel(dialogEl) {
	const header = dialogEl.querySelector(".modal-hd");
	const pad = 24;
	const usableW = dialogEl.clientWidth - pad * 2;
	const usableH =
		dialogEl.clientHeight - (header?.offsetHeight || 0) - pad * 2;
	const size = Math.max(
		320,
		Math.min(CURRY_WHEEL_SIZE_CAP, Math.min(usableW, usableH))
	);
	const center = size / 2;
	const maxR = Math.max(80, center - 32);
	const minR = Math.max(56, size * 0.28);
	const gap = 12;
	const R_BOOST = 1.4;
	return { size, center, maxR, minR, gap, R_BOOST };
}

function _computeCurryChipScale(n, dialogEl) {
	// Same logic as fashion: image shrinks as N grows
	let img = Math.round(110 - Math.max(0, n - 6) * 4);
	img = Math.max(56, Math.min(110, img));

	const box = dialogEl.getBoundingClientRect();
	if (Math.min(box.width, box.height) < 820) img = Math.max(52, img - 6);

	const font = Math.max(10, Math.round(img * 0.16));
	const pad =
		img >= 90 ? "12px 16px" : img >= 70 ? "10px 12px" : "8px 10px";
	return { img, font, pad };
}

function openCurryForms(store, gameKey, genKey, item) {
	const forms = Array.isArray(item.forms) ? item.forms : [];
	if (!forms.length) return;

	const formsModal = document.getElementById("formsModal");
	const formsWheel = document.getElementById("formsWheel");
	if (!formsModal || !formsWheel) return;

	const gameColor = _getGameColor(gameKey, genKey);

	// Ensure modal is attached to <body> and themed
	if (formsModal.parentElement !== document.body) {
		document.body.appendChild(formsModal);
	}
	formsModal.style.setProperty("--accent", gameColor);
	formsWheel.innerHTML = "";

	// Clear any grid overrides from earlier curry version
	formsWheel.style.display = "";
	formsWheel.style.gridTemplateColumns = "";
	formsWheel.style.gap = "";

	const dialog = formsModal.querySelector(".modal-dialog");
	const header = dialog?.querySelector(".modal-hd");
	if (dialog && header) {
		dialog.style.setProperty("--hd", `${header.offsetHeight}px`);
	}

	// Show modal
	formsModal.removeAttribute("inert");
	formsModal.setAttribute("aria-hidden", "false");
	formsModal.classList.add("open");

	// Base wheel sizing + chip scaling
	const layout0 = _layoutCurryWheel(dialog);
	formsWheel.style.setProperty("--size", `${layout0.size}px`);

	const N = forms.length;
	const scale = _computeCurryChipScale(N, dialog);
	formsWheel.style.setProperty("--form-img", `${scale.img}px`);
	formsWheel.style.setProperty("--chip-font", `${scale.font}px`);
	formsWheel.style.setProperty("--chip-pad", scale.pad);

	const curryKey = String(item.id);
	const { node } = _getCurryFormsNode(store, gameKey, curryKey);
	const mainKey = `${gameKey}:${curryKey}`;

	function recomputeAndPersist() {
		const { node } = _getCurryFormsNode(store, gameKey, curryKey);
		const total = forms.length;
		const done = Object.values(node.forms || {}).filter(Boolean).length;
		const all = total > 0 && done === total;

		node.all = all;
		_setCurryFormsNode(store, gameKey, curryKey, node);

		// Update counters on cards
		document
			.querySelectorAll(`[data-curry-count="${mainKey}"]`)
			.forEach((el) => {
				el.textContent = `${done}/${total}`;
			});

		// Sync parent checkbox if present
		document
			.querySelectorAll(`[data-curry-main="${mainKey}"]`)
			.forEach((chk) => {
				if (chk instanceof HTMLInputElement) {
					chk.checked = all;
				}
			});
	}

	// Build chips (buttons) first so we can measure them
	const chips = [];
	for (const f of forms) {
		const name = typeof f === "string" ? f : f?.name;
		if (!name) continue;
		const img = typeof f === "object" ? f.img : null;

		const btn = document.createElement("button");
		btn.type = "button";
		btn.className = "form-chip";
		btn.setAttribute("role", "checkbox");
		btn.title = name;

		const checked = !!(node.forms || {})[name];
		btn.setAttribute("aria-checked", checked ? "true" : "false");

		// Content: optional image + label (matches fashion chip style)
		if (img) {
			const im = document.createElement("img");
			im.src = img;
			im.alt = name;
			im.loading = "lazy";
			btn.appendChild(im);
		}

		const labelSpan = document.createElement("span");
		labelSpan.className = "chip-text";
		labelSpan.textContent = name;
		btn.appendChild(labelSpan);

		btn.addEventListener("click", () => {
			const nowChecked = btn.getAttribute("aria-checked") !== "true";
			btn.setAttribute("aria-checked", nowChecked ? "true" : "false");

			const { node } = _getCurryFormsNode(store, gameKey, curryKey);
			node.forms = node.forms || {};
			node.forms[name] = nowChecked;
			_setCurryFormsNode(store, gameKey, curryKey, node);

			recomputeAndPersist();
			_updateCurrySectionHeader(gameKey);
		});

		formsWheel.appendChild(btn);
		chips.push(btn);
	}

	// Position chips radially (single or double ring) like fashion/dex
	requestAnimationFrame(() => {
		const { center, maxR, minR, gap, R_BOOST } = _layoutCurryWheel(dialog);
		const maxChip = Math.max(...chips.map((c) => c.offsetWidth || 80), 80);
		const neededR = (N * (maxChip + gap)) / (2 * Math.PI);
		const baseRadius = Math.max(
			minR,
			Math.min(maxR, neededR * R_BOOST * CURRY_RADIUS_SCALE)
		);

		const { sx, sy } = _getCurryOvalScale();

		let ringCounts = [];
		if (N <= 8) {
			ringCounts = [N];
		} else {
			let remaining = N;
			const centerCap = 2;
			const ringCap = 8;

			const innerCount = Math.min(centerCap, remaining);
			ringCounts.push(innerCount);
			remaining -= innerCount;

			while (remaining > 0) {
				const take = Math.min(ringCap, remaining);
				ringCounts.push(take);
				remaining -= take;
			}
		}

		const numRings = ringCounts.length;

		if (numRings === 1) {
			const radius = baseRadius;
			const rx = radius * sx;
			const ry = radius * sy;

			chips.forEach((btn, i) => {
				const a = (i / N) * Math.PI * 2 + Math.PI;
				btn.style.left = `${Math.round(center + rx * Math.cos(a))}px`;
				btn.style.top = `${Math.round(center + ry * Math.sin(a))}px`;
				btn.style.transform = "translate(-50%, -50%)";
				btn.style.position = "absolute";
			});
		} else {
			const outerR = baseRadius;
			const innerR = Math.max(minR * 0.6, outerR * 0.45);
			const step =
				numRings > 1 ? (outerR - innerR) / (numRings - 1) : 0;
			const radii = ringCounts.map((_, idx) => innerR + idx * step);

			let idxGlobal = 0;
			ringCounts.forEach((count, ringIdx) => {
				const r = radii[ringIdx];
				const rx = r * sx;
				const ry = r * sy;

				for (let j = 0; j < count; j++, idxGlobal++) {
					const btn = chips[idxGlobal];

					const baseAngle = (j / count) * Math.PI * 2 + Math.PI;
					const offset =
						ringIdx % 2 === 1 ? (Math.PI * 2) / (2 * count) : 0;
					const a = baseAngle + offset;

					btn.style.left = `${Math.round(center + rx * Math.cos(a))}px`;
					btn.style.top = `${Math.round(center + ry * Math.sin(a))}px`;
					btn.style.transform = "translate(-50%, -50%)";
					btn.style.position = "absolute";
				}
			});
		}
	});

	// Reposition on window resize while this modal content is active
	const onResize = () => {
		const scale = _computeCurryChipScale(chips.length, dialog);
		formsWheel.style.setProperty("--form-img", `${scale.img}px`);
		formsWheel.style.setProperty("--chip-font", `${scale.font}px`);
		formsWheel.style.setProperty("--chip-pad", scale.pad);

		const { center, maxR, minR, gap, R_BOOST } = _layoutCurryWheel(dialog);
		const { size } = _layoutCurryWheel(dialog);
		formsWheel.style.setProperty("--size", `${size}px`);

		const maxChip = Math.max(...chips.map((c) => c.offsetWidth || 80), 80);
		const N = chips.length;
		const neededR = (N * (maxChip + gap)) / (2 * Math.PI);
		const baseRadius = Math.max(
			minR,
			Math.min(maxR, neededR * R_BOOST * CURRY_RADIUS_SCALE)
		);

		const { sx, sy } = _getCurryOvalScale();

		let ringCounts = [];
		if (N <= 8) {
			ringCounts = [N];
		} else {
			let remaining = N;
			const centerCap = 2;
			const ringCap = 8;

			const innerCount = Math.min(centerCap, remaining);
			ringCounts.push(innerCount);
			remaining -= innerCount;

			while (remaining > 0) {
				const take = Math.min(ringCap, remaining);
				ringCounts.push(take);
				remaining -= take;
			}
		}

		const numRings = ringCounts.length;

		if (numRings === 1) {
			const radius = baseRadius;
			const rx = radius * sx;
			const ry = radius * sy;

			chips.forEach((btn, i) => {
				const a = (i / N) * Math.PI * 2 + Math.PI;
				btn.style.left = `${Math.round(center + rx * Math.cos(a))}px`;
				btn.style.top = `${Math.round(center + ry * Math.sin(a))}px`;
			});
		} else {
			const outerR = baseRadius;
			const innerR = Math.max(minR * 0.6, outerR * 0.45);
			const step =
				numRings > 1 ? (outerR - innerR) / (numRings - 1) : 0;
			const radii = ringCounts.map((_, idx) => innerR + idx * step);

			let idxGlobal = 0;
			ringCounts.forEach((count, ringIdx) => {
				const r = radii[ringIdx];
				const rx = r * sx;
				const ry = r * sy;

				for (let j = 0; j < count; j++, idxGlobal++) {
					const btn = chips[idxGlobal];
					const baseAngle = (j / count) * Math.PI * 2 + Math.PI;
					const offset =
						ringIdx % 2 === 1 ? (Math.PI * 2) / (2 * count) : 0;
					const a = baseAngle + offset;

					btn.style.left = `${Math.round(center + rx * Math.cos(a))}px`;
					btn.style.top = `${Math.round(center + ry * Math.sin(a))}px`;
				}
			});
		}
	};

	// Track the listener on the modal so we can clean up if needed later
	if (formsModal._curryOnResize) {
		window.removeEventListener("resize", formsModal._curryOnResize);
	}
	formsModal._curryOnResize = onResize;
	window.addEventListener("resize", onResize, { passive: true });

	// Focus close button for a11y
	const closeBtn = document.getElementById("formsModalClose");
	closeBtn?.focus();
}

export function renderCurryCardsFor(gameKey, genKey, store) {
	const items = _getGameCurry(gameKey);
	if (!items.length) return null;

	const grid = document.createElement("div");
	grid.id = "curryGrid";
	grid.className = "grid";

	const accent = _getGameColor(gameKey, genKey);

	for (const it of items) {
		if (!it) continue;
		const hasForms = Array.isArray(it.forms) && it.forms.length > 0;
		const key = `${gameKey}:${it.id}`;
		const { done, total } = _itemProgress(store, gameKey, it);

		const card = document.createElement("article");
		card.className = "card";
		card.style.setProperty("--accent", accent);
		card.dataset.curryId = String(it.id);

		const label = it.label || it.name || `Curry #${it.id}`;
		const img = it.img;

		card.innerHTML = `
      ${img
				? `<div class="thumb">
             <img loading="lazy" alt="${label}" src="${img}">
           </div>`
				: ""
			}
      <div class="card-bd">
        <div class="name" title="${label}">${label}</div>
        <div class="row" style="gap:8px;align-items:center;justify-content:center;">
          ${hasForms
				? `<button
                   class="forms-launch"
                   type="button"
                   data-open-curry-forms="${key}"
                 >
                   <span class="dot"></span>
                   <span>Forms</span>
                   <span class="pill count" data-curry-count="${key}">
                     ${done}/${total}
                   </span>
                 </button>`
				: `<label class="small" style="display:inline-flex;gap:8px;align-items:center;justify-content:center;">
                   <input
                     type="checkbox"
                     data-curry-main="${key}"
                     ${done > 0 ? "checked" : ""}
                   />
                   <span>Cooked</span>
                 </label>`
			}
        </div>
      </div>
    `;

		if (!hasForms) {
			const chk = card.querySelector(`[data-curry-main="${key}"]`);
			if (chk instanceof HTMLInputElement) {
				chk.addEventListener("change", () => {
					const statusMap = _getCurryStatusMap(store, gameKey);
					statusMap[String(it.id)] = !!chk.checked;
					store.curryStatus.set(gameKey, statusMap);
					save();

					const { done, total } = _itemProgress(store, gameKey, it);
					const countEl = card.querySelector(`[data-curry-count="${key}"]`);
					if (countEl) {
						countEl.textContent = `${done}/${total}`;
					}

					_updateCurrySectionHeader(gameKey);
				});
			}
		} else {
			const btn = card.querySelector(
				`[data-open-curry-forms="${key}"]`
			);
			if (btn) {
				btn.addEventListener("click", (e) => {
					e.stopPropagation();
					e.preventDefault();
					openCurryForms(store, gameKey, genKey, it);
				});
			}
		}

		grid.appendChild(card);
	}

	return grid;
}