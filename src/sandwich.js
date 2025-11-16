// sandwich.js
import { save } from "./store.js";

function _getGameSandwich(gameKey) {
  const S = window.DATA || {};
  const C = S.sandwich || {};
  const entry = C[gameKey];

  if (!entry) return [];
  if (Array.isArray(entry)) return entry;
  if (Array.isArray(entry.items)) return entry.items;
  return [];
}

function _getSandwichStatusMap(store, gameKey) {
  const map = store.sandwichStatus.get(gameKey) || {};
  if (!store.sandwichStatus.has(gameKey)) store.sandwichStatus.set(gameKey, map);
  return map;
}

function _getSandwichFormsNode(store, gameKey, sandwichId) {
  const gameMap = store.sandwichFormsStatus.get(gameKey) || {};
  if (!store.sandwichFormsStatus.has(gameKey)) {
    store.sandwichFormsStatus.set(gameKey, gameMap);
  }
  const node =
    gameMap[sandwichId] || {
      all: false,
      forms: {},
    };
  return { gameMap, node };
}

function _setSandwichFormsNode(store, gameKey, sandwichId, node) {
  const gameMap = store.sandwichFormsStatus.get(gameKey) || {};
  gameMap[sandwichId] = node;
  store.sandwichFormsStatus.set(gameKey, gameMap);
  save();
}

function _sandwichItemProgress(store, gameKey, item) {
  const hasForms = Array.isArray(item.forms) && item.forms.length > 0;

  if (hasForms) {
    const { node } = _getSandwichFormsNode(store, gameKey, String(item.id));
    const total = item.forms.length;
    const done = Object.values(node.forms || {}).filter(Boolean).length;
    return { done, total };
  }

  const statusMap = _getSandwichStatusMap(store, gameKey);
  const checked = !!statusMap[String(item.id)];
  return { done: checked ? 1 : 0, total: 1 };
}

export function sandwichPctFor(gameKey, store) {
  const items = _getGameSandwich(gameKey);
  if (!items.length) return 0;

  let done = 0;
  let total = 0;
  for (const it of items) {
    const p = _sandwichItemProgress(store, gameKey, it);
    done += p.done;
    total += p.total;
  }
  return total ? (done / total) * 100 : 0;
}

// --- Hook Sandwich into global section meters ---
(function registerSandwichSectionMeter() {
  if (typeof window === "undefined") return;

  window.PPGC = window.PPGC || {};

  if (!Array.isArray(window.PPGC.sectionMeters)) {
    window.PPGC.sectionMeters = window.PPGC.sectionMeters
      ? Array.from(window.PPGC.sectionMeters)
      : [];
  }

  const already = window.PPGC.sectionMeters.some(
    (fn) => fn && fn.__ppgcSandwichMeter
  );
  if (already) return;

  const meter = function sandwichSectionMeter(sectionObj, gameKey, genKey) {
    const id = String(sectionObj?.id || "").toLowerCase();
    const title = (sectionObj?.title || "").toLowerCase();
    const tags = Array.isArray(sectionObj?.tags) ? sectionObj.tags : [];

    const isSandwich =
      tags.includes("sandwich") ||
      id.includes("sandwich") ||
      title.includes("sandwich");
    if (!isSandwich) return NaN;

    const store = window.PPGC?._storeRef;
    if (!store) return NaN;

    const pct = sandwichPctFor(gameKey, store);
    return isFinite(pct) ? pct : NaN;
  };

  meter.__ppgcSandwichMeter = true;
  window.PPGC.sectionMeters.push(meter);

  window.PPGC.sandwichPctFor = function (gameKey, genKey) {
    const store = window.PPGC?._storeRef;
    if (!store) return 0;
    const pct = sandwichPctFor(gameKey, store);
    return isFinite(pct) ? pct : 0;
  };
})();

function _updateSandwichSectionHeader(gameKey) {
  try {
    const store = window.PPGC?._storeRef;
    if (!store) return;
    const pct = sandwichPctFor(gameKey, store);
    const header = document.querySelector(".card-hd.section-hd");
    if (!header) return;

    const pctEl = header.querySelector(".pct");
    if (pctEl) {
      pctEl.textContent = `${pct.toFixed(2)}%`;
    }
    header.style.setProperty("--progress", pct.toFixed(2));
  } catch {
    // ignore
  }
}

function _getGameColor(gameKey, genKey) {
  const gamesByGen = window.DATA.games || {};
  if (genKey && gamesByGen[genKey]) {
    const g = gamesByGen[genKey].find((gg) => gg.key === gameKey);
    if (g?.color) return g.color;
  }
  for (const [, list] of Object.entries(gamesByGen)) {
    const g = (list || []).find((gg) => gg.key === gameKey);
    if (g?.color) return g.color;
  }
  return "#7fd2ff";
}

// Radial wheel layout (copied from curry)
const SANDWICH_WHEEL_SIZE_CAP = 1000;
const SANDWICH_RADIUS_SCALE = 1.5;
function _getSandwichOvalScale() {
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

function _layoutSandwichWheel(dialogEl) {
  const header = dialogEl.querySelector(".modal-hd");
  const pad = 24;
  const usableW = dialogEl.clientWidth - pad * 2;
  const usableH =
    dialogEl.clientHeight - (header?.offsetHeight || 0) - pad * 2;
  const size = Math.max(
    320,
    Math.min(SANDWICH_WHEEL_SIZE_CAP, Math.min(usableW, usableH))
  );
  const center = size / 2;
  const maxR = Math.max(80, center - 32);
  const minR = Math.max(56, size * 0.28);
  const gap = 12;
  const R_BOOST = 1.4;
  return { size, center, maxR, minR, gap, R_BOOST };
}

function _computeSandwichChipScale(n, dialogEl) {
  let img = Math.round(110 - Math.max(0, n - 6) * 4);
  img = Math.max(56, Math.min(110, img));

  const box = dialogEl.getBoundingClientRect();
  if (Math.min(box.width, box.height) < 820) img = Math.max(52, img - 6);

  const font = Math.max(10, Math.round(img * 0.16));
  const pad =
    img >= 90 ? "12px 16px" : img >= 70 ? "10px 12px" : "8px 10px";
  return { img, font, pad };
}

function openSandwichForms(store, gameKey, genKey, item) {
  const forms = Array.isArray(item.forms) ? item.forms : [];
  if (!forms.length) return;

  const formsModal = document.getElementById("formsModal");
  const formsWheel = document.getElementById("formsWheel");
  if (!formsModal || !formsWheel) return;

  const gameColor = _getGameColor(gameKey, genKey);

  if (formsModal.parentElement !== document.body) {
    document.body.appendChild(formsModal);
  }
  formsModal.style.setProperty("--accent", gameColor);
  formsWheel.innerHTML = "";

  formsWheel.style.display = "";
  formsWheel.style.gridTemplateColumns = "";
  formsWheel.style.gap = "";

  const dialog = formsModal.querySelector(".modal-dialog");
  const header = dialog?.querySelector(".modal-hd");
  if (dialog && header) {
    dialog.style.setProperty("--hd", `${header.offsetHeight}px`);
  }

  formsModal.removeAttribute("inert");
  formsModal.setAttribute("aria-hidden", "false");
  formsModal.classList.add("open");

  const layout0 = _layoutSandwichWheel(dialog);
  formsWheel.style.setProperty("--size", `${layout0.size}px`);

  const N = forms.length;
  const scale = _computeSandwichChipScale(N, dialog);
  formsWheel.style.setProperty("--form-img", `${scale.img}px`);
  formsWheel.style.setProperty("--chip-font", `${scale.font}px`);
  formsWheel.style.setProperty("--chip-pad", scale.pad);

  const sandwichKey = String(item.id);
  const { node } = _getSandwichFormsNode(store, gameKey, sandwichKey);
  const mainKey = `${gameKey}:${sandwichKey}`;

  function recomputeAndPersist() {
    const { node } = _getSandwichFormsNode(store, gameKey, sandwichKey);
    const total = forms.length;
    const done = Object.values(node.forms || {}).filter(Boolean).length;
    const all = total > 0 && done === total;

    node.all = all;
    _setSandwichFormsNode(store, gameKey, sandwichKey, node);

    document
      .querySelectorAll(`[data-sandwich-count="${mainKey}"]`)
      .forEach((el) => {
        el.textContent = `${done}/${total}`;
      });

    document
      .querySelectorAll(`[data-sandwich-main="${mainKey}"]`)
      .forEach((chk) => {
        if (chk instanceof HTMLInputElement) {
          chk.checked = all;
        }
      });
  }

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

      const { node } = _getSandwichFormsNode(store, gameKey, sandwichKey);
      node.forms = node.forms || {};
      node.forms[name] = nowChecked;
      _setSandwichFormsNode(store, gameKey, sandwichKey, node);

      recomputeAndPersist();
      _updateSandwichSectionHeader(gameKey);
    });

    formsWheel.appendChild(btn);
    chips.push(btn);
  }

  requestAnimationFrame(() => {
    const { center, maxR, minR, gap, R_BOOST } = _layoutSandwichWheel(dialog);
    const maxChip = Math.max(...chips.map((c) => c.offsetWidth || 80), 80);
    const neededR = (N * (maxChip + gap)) / (2 * Math.PI);
    const baseRadius = Math.max(
      minR,
      Math.min(maxR, neededR * R_BOOST * SANDWICH_RADIUS_SCALE)
    );

    const { sx, sy } = _getSandwichOvalScale();

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
        const x = Math.round(center + rx * Math.cos(a));
        const y = Math.round(center + ry * Math.sin(a));

        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
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

          const x = Math.round(center + rx * Math.cos(a));
          const y = Math.round(center + ry * Math.sin(a));

          btn.style.left = `${x}px`;
          btn.style.top = `${y}px`;
          btn.style.transform = "translate(-50%, -50%)";
          btn.style.position = "absolute";
        }
      });
    }
  });

  const onResize = () => {
    const scale = _computeSandwichChipScale(chips.length, dialog);
    formsWheel.style.setProperty("--form-img", `${scale.img}px`);
    formsWheel.style.setProperty("--chip-font", `${scale.font}px`);
    formsWheel.style.setProperty("--chip-pad", scale.pad);

    const { center, maxR, minR, gap, R_BOOST } = _layoutSandwichWheel(dialog);
    const { size } = _layoutSandwichWheel(dialog);
    formsWheel.style.setProperty("--size", `${size}px`);

    const maxChip = Math.max(...chips.map((c) => c.offsetWidth || 80), 80);
    const N = chips.length;
    const neededR = (N * (maxChip + gap)) / (2 * Math.PI);
    const baseRadius = Math.max(
      minR,
      Math.min(maxR, neededR * R_BOOST * SANDWICH_RADIUS_SCALE)
    );

    const { sx, sy } = _getSandwichOvalScale();

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

  if (formsModal._sandwichOnResize) {
    window.removeEventListener("resize", formsModal._sandwichOnResize);
  }
  formsModal._sandwichOnResize = onResize;
  window.addEventListener("resize", onResize, { passive: true });

  const closeBtn = document.getElementById("formsModalClose");
  closeBtn?.focus();
}

export function renderSandwichCardsFor(gameKey, genKey, store) {
  const items = _getGameSandwich(gameKey);
  if (!items.length) return null;

  const grid = document.createElement("div");
  grid.id = "sandwichGrid";
  grid.className = "grid";

  const accent = _getGameColor(gameKey, genKey);

  for (const it of items) {
    if (!it) continue;
    const hasForms = Array.isArray(it.forms) && it.forms.length > 0;
    const key = `${gameKey}:${it.id}`;
    const { done, total } = _sandwichItemProgress(store, gameKey, it);

    const card = document.createElement("article");
    card.className = "card";
    card.style.setProperty("--accent", accent);
    card.dataset.sandwichId = String(it.id);

    const label = it.label || it.name || `Sandwich #${it.id}`;
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
                   data-open-sandwich-forms="${key}"
                 >
                   <span class="dot"></span>
                   <span>Forms</span>
                   <span class="pill count" data-sandwich-count="${key}">
                     ${done}/${total}
                   </span>
                 </button>`
        : `<label class="small" style="display:inline-flex;gap:8px;align-items:center;justify-content:center;">
                   <input
                     type="checkbox"
                     data-sandwich-main="${key}"
                     ${done > 0 ? "checked" : ""}
                   />
                   <span>Made</span>
                 </label>`
      }
        </div>
      </div>
    `;

    if (!hasForms) {
      const chk = card.querySelector(`[data-sandwich-main="${key}"]`);
      if (chk instanceof HTMLInputElement) {
        chk.addEventListener("change", () => {
          const statusMap = _getSandwichStatusMap(store, gameKey);
          statusMap[String(it.id)] = !!chk.checked;
          store.sandwichStatus.set(gameKey, statusMap);
          save();

          const { done, total } = _sandwichItemProgress(store, gameKey, it);
          const countEl = card.querySelector(`[data-sandwich-count="${key}"]`);
          if (countEl) {
            countEl.textContent = `${done}/${total}`;
          }

          _updateSandwichSectionHeader(gameKey);
        });
      }
    } else {
      const btn = card.querySelector(
        `[data-open-sandwich-forms="${key}"]`
      );
      if (btn) {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          e.preventDefault();
          openSandwichForms(store, gameKey, genKey, it);
        });
      }
    }

    grid.appendChild(card);
  }

  return grid;
}
