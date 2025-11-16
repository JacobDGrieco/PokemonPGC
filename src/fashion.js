// fashion.js
import { save } from "./store.js";

function _getGameFashion(gameKey) {
  return window.DATA.fashion?.[gameKey]?.categories || [];
}

function _getCatStatusMap(store, gameKey, categoryId) {
  const gmap = store.fashionStatus.get(gameKey) || new Map();
  if (!store.fashionStatus.has(gameKey)) store.fashionStatus.set(gameKey, gmap);
  const cat = gmap.get(categoryId) || {};
  if (!gmap.has(categoryId)) gmap.set(categoryId, cat);
  return cat; // plain object: { [itemId]: true|false }
}

function _getFormsNode(store, gameKey, categoryId, itemId) {
  const catMap = store.fashionFormsStatus.get(gameKey) || new Map();
  const obj = (catMap.get(categoryId) || {})[itemId] || {
    all: false,
    forms: {},
  };
  return { catMap, obj };
}

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

function _itemProgress(store, gameKey, categoryId, item) {
  const hasForms = Array.isArray(item.forms) && item.forms.length > 0;
  if (hasForms) {
    const { obj } = _getFormsNode(store, gameKey, categoryId, item.id);
    const total = item.forms.length;
    const done = Object.values(obj.forms || {}).filter(Boolean).length;
    return { done, total };
  }
  // no forms → use simple boolean
  const catMap = store.fashionStatus.get(gameKey);
  const raw = catMap?.get(categoryId) || {};
  const checked = !!raw[item.id];
  return { done: checked ? 1 : 0, total: 1 };
}

export function fashionPctFor(gameKey, categoryId, store) {
  const cat = _getGameFashion(gameKey).find((c) => c.id === categoryId);
  if (!cat) return 0;
  let done = 0,
    total = 0;
  for (const it of cat.items) {
    const p = _itemProgress(store, gameKey, categoryId, it);
    done += p.done;
    total += p.total;
  }
  return total ? (done / total) * 100 : 0;
}

export function fashionSummaryCardFor(gameKey, genKey, categoryId, store) {
  let _lastOpener = null;

  const game = (window.DATA.games?.[genKey] || []).find(
    (g) => g.key === gameKey
  );
  const cat = _getGameFashion(gameKey).find((c) => c.id === categoryId);
  if (!cat) return document.createTextNode("");

  let done = 0,
    total = 0;
  for (const it of cat.items) {
    const p = _itemProgress(store, gameKey, categoryId, it);
    done += p.done;
    total += p.total;
  }
  const pct = total ? Math.round((done / total) * 100) : 0;

  const card = document.createElement("section");
  const accent = game?.color || "#7fd2ff";
  card.className = "card";
  card.innerHTML = `
    <div class="card-hd">
      <h3>${cat.label} — <span class="small">${game?.label || gameKey
    }</span></h3>
  <div><button class="button" data-open-fashion>Open ${cat.label}</button></div>
    </div>
    <div class="card-bd">
      <div class="small">${done} / ${total} (${pct.toFixed(0)}%)</div>
      <div class="progress"><span class="base" style="width:${pct}%"></span></div>
      
    </div>`;
  card.style.setProperty("--accent", accent);
  card.querySelector("[data-open-fashion]")?.addEventListener("click", (e) => {
    _lastOpener = e.currentTarget;
    window.PPGC?.fashionApi?.openFashionModal(gameKey, genKey, categoryId);
  });
  return card;
}

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
  const FASHION_WHEEL_SIZE_CAP = 1000;
  function _getFashionRadiusScale() {
    const h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body?.clientHeight ||
      0;

    if (h && h <= 720) return 1.9;   // small screens (your main case)
    if (h && h <= 1080) return 1.5;  // mid
    return 1.75;                     // big displays
  }

  function _getFashionCardScale() {
    const h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body?.clientHeight ||
      0;

    if (h && h <= 720) return 0.4;   // shrink a lot on 720-ish
    if (h && h <= 1080) return 0.65; // modest shrink on 1080
    return 1.0;                      // full size on big screens
  }
  function _getFashionOvalScale() {
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
    // If window is close to square, keep circle
    if (aspect < 1.2) return { sx: 1, sy: 1 };

    // Slightly stronger oval on short screens
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
  function _layoutFashionWheel(dialogEl, opts = {}) {
    const { preferWidth = false } = opts;

    const header = dialogEl.querySelector(".modal-hd");
    const pad = 24;
    const usableW = dialogEl.clientWidth - pad * 2;
    const usableH =
      dialogEl.clientHeight - (header?.offsetHeight || 0) - pad * 2;

    // For dense wheels we care about width only and let height scroll
    const baseSize = preferWidth ? usableW : Math.min(usableW, usableH);

    const size = Math.max(320, Math.min(FASHION_WHEEL_SIZE_CAP, baseSize));
    const center = size / 2;
    const maxR = Math.max(80, center);
    const minR = Math.max(56, size * 0.28);
    const gap = 12;
    const R_BOOST = 1.4;
    return {
      size,
      center,
      maxR,
      minR,
      gap,
      R_BOOST,
      headerH: header?.offsetHeight || 0,
    };
  }


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

      const mainChk = card.querySelector(
        `[data-fashion-main="${fashionForGame}:${fashionCategory}:${it.id}"]`
      );

      const key = `${fashionForGame}:${fashionCategory}:${it.id}`;
      const countEl = card.querySelector(`[data-fashion-count="${key}"]`);
      if (countEl) {
        const p = _itemProgress(store, fashionForGame, fashionCategory, it);
        countEl.textContent = `${p.done}/${p.total}`;
      }

      // parent checkbox behavior
      if (!hasForms && mainChk) {
        mainChk.addEventListener("change", () => {
          const checked = mainChk.checked;
          // (existing simple boolean behavior)
          const catMap = store.fashionStatus.get(fashionForGame) || new Map();
          const rec = catMap.get(fashionCategory) || {};
          rec[it.id] = checked;
          catMap.set(fashionCategory, rec);
          store.fashionStatus.set(fashionForGame, catMap);
          save();
          const p = _itemProgress(store, fashionForGame, fashionCategory, it);
          const key = `${fashionForGame}:${fashionCategory}:${it.id}`;
          const countEl = card.querySelector(`[data-fashion-count="${key}"]`);
          if (countEl) countEl.textContent = `${p.done}/${p.total}`;
        });
      }

      // forms launcher
      if (hasForms) {
        card.querySelector(".forms-launch").addEventListener("click", (e) => {
          e.stopPropagation();
          openForms(fashionForGame, fashionCategory, it);
        });
      }
      fashionGrid.appendChild(card);
    });
  }

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

    const modal = document.getElementById("fashionModal");
    modal.removeAttribute("inert");
    modal.setAttribute("aria-hidden", "false"); // 1) expose to a11y
    modal.classList.add("open");
    document.getElementById("fashionModalClose")?.focus(); // 2) then focus inside
  }
  function closeFashionModal() {
    const modal = document.getElementById("fashionModal");
    const active = document.activeElement;
    if (active && modal.contains(active)) {
      try {
        active.blur();
      } catch { }
    } // 1) blur first
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true"); // 2) then hide from a11y
    modal.setAttribute("inert", "");
  }
  function openForms(gameKey, categoryId, item) {
    formsWheel.innerHTML = "";

    formsModal.removeAttribute("inert");
    formsModal.classList.add("open");
    formsModal.setAttribute("aria-hidden", "false");

    const dialog = formsModal.querySelector(".modal-dialog");
    const header = dialog.querySelector(".modal-hd");
    dialog.style.setProperty("--hd", `${header?.offsetHeight ?? 0}px`);

    // theme + images
    const getGameColor = (key) => {
      const gens = window.DATA.games || {};
      for (const gk in gens) {
        const found = (gens[gk] || []).find((g) => g.key === key);
        if (found?.color) return found.color;
      }
      return "#7fd2ff";
    };
    formsWheel.style.setProperty("--accent", getGameColor(gameKey));
    formsWheel.style.setProperty("--form-img", "100px");

    const forms = item.forms || [];
    const N = forms.length;
    const { obj } = _getFormsNode(store, gameKey, categoryId, item.id);

    const preferWidth = N >= 11;
    const firstLayout = _layoutFashionWheel(dialog, { preferWidth });
    formsWheel.style.setProperty("--size", `${firstLayout.size}px`);

    function _computeChipScale(n, dialogEl) {
      // base: more forms → smaller img
      let img = Math.round(110 - Math.max(0, n - 6) * 4);
      img = Math.max(56, Math.min(110, img));

      // Approximate how many rings we’ll need with the electron layout:
      // N <= 8 → 1 ring
      // N > 8  → 1 inner + ceil((N - 2)/8) outer rings
      const approxRings = n <= 8 ? 1 : 1 + Math.ceil((n - 2) / 8);

      // EXTRA shrink for dense wheels (4+ rings)
      if (approxRings >= 4) {
        img = Math.round(img * 0.7); // 30% smaller
      }

      // Viewport-based scaling (same idea as before)
      const cardScale = _getFashionCardScale();
      img = Math.round(img * cardScale);

      const box = dialogEl.getBoundingClientRect();
      if (Math.min(box.width, box.height) < 820) {
        img = Math.max(40, img - 6);
      }

      // Final floor so Alcremie/mega-dense sets can still fit
      img = Math.max(32, img);

      const font = Math.max(10, Math.round(img * 0.16));
      const pad =
        img >= 90 ? "12px 16px" : img >= 70 ? "10px 12px" : "8px 10px";

      return { img, font, pad };
    }

    const _scale = _computeChipScale(N, dialog);
    formsWheel.style.setProperty("--form-img", `${_scale.img}px`);
    formsWheel.style.setProperty("--chip-font", `${_scale.font}px`);
    formsWheel.style.setProperty("--chip-pad", _scale.pad);

    // Build chips first so we can measure their actual widths
    const chips = forms.map((form, i) => {
      const name = typeof form === "string" ? form : form?.name ?? "";
      const img = typeof form === "object" ? form?.img : null;

      const btn = document.createElement("button");
      btn.className = "form-chip";
      btn.title = name;

      // Inner layout wrapper (same pattern as Dex)
      const row = document.createElement("div");
      row.className = "chip-row";

      // Label first (top)
      const labelSpan = document.createElement("span");
      labelSpan.className = "chip-text";
      labelSpan.textContent = name || "?";
      row.appendChild(labelSpan);

      // Image underneath label (if present)
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
        if (mainChk) mainChk.checked = !!obj.all;

        const key = `${gameKey}:${categoryId}:${item.id}`;
        const countEls = document.querySelectorAll(
          `[data-fashion-count="${key}"]`
        );
        countEls.forEach((el) => (el.textContent = `${onCount}/${total}`));
      });

      btn.appendChild(row);
      formsWheel.appendChild(btn);
      return btn;
    });

    requestAnimationFrame(() => {
      const layout = _layoutFashionWheel(dialog, { preferWidth });
      const { center, maxR, minR, gap, R_BOOST, size } = layout;
      formsWheel.style.setProperty("--size", `${size}px`);

      const maxChip = Math.max(...chips.map((c) => c.offsetWidth || 80), 80);
      const N = chips.length;

      // Oval scale first (we need sx for horizontal cap)
      const { sx, sy: syBase } = _getFashionOvalScale();

      // Desired radius from arc-length + viewport scaling
      const neededR = (N * (maxChip + gap)) / (2 * Math.PI);
      const rawRadius = neededR * R_BOOST * _getFashionRadiusScale();

      // Max radius allowed by width of the modal (avoid clipping left/right)
      const rHorizMax = (center - maxChip / 2 - 8) / sx;
      const radiusCap = Math.min(maxR, rHorizMax);

      const baseRadius = Math.max(minR, Math.min(radiusCap, rawRadius));

      // ---- Electron-style ring distribution (same as Dex) ----
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

      // For 3+ rings, don’t vertically squash; let height scroll
      const sy = numRings >= 3 ? 1 : syBase;

      if (numRings === 1) {
        // --- single oval ring, start on left (π) ---
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
        // --- multiple rings: inner→outer, start on left, odd rings offset half-step ---
        const outerR = baseRadius;
        const innerR = Math.max(40, outerR * 0.25); // same idea as Dex
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
            btn.style.top = `${Math.round(center + ry * Math.sin(a) * (ringIdx > 2 ? 1.08 : 1))}px`;
            btn.style.transform = "translate(-50%, -50%)";
            btn.style.position = "absolute";
          }
        });
      }
    });

    // Reflow on resize while modal is open (re-run openForms layout cheaply)
    const onResize = () => {
      const newScale = _computeChipScale(chips.length, dialog);
      formsWheel.style.setProperty("--form-img", `${newScale.img}px`);
      formsWheel.style.setProperty("--chip-font", `${newScale.font}px`);
      formsWheel.style.setProperty("--chip-pad", newScale.pad);

      const layout = _layoutFashionWheel(dialog, { preferWidth });
      const { center, maxR, minR, gap, R_BOOST, size } = layout;
      formsWheel.style.setProperty("--size", `${size}px`);

      const maxChip = Math.max(...chips.map((c) => c.offsetWidth || 80), 80);
      const N = chips.length;

      const { sx, sy: syBase } = _getFashionOvalScale();

      const neededR = (N * (maxChip + gap)) / (2 * Math.PI);
      const rawRadius = neededR * R_BOOST * _getFashionRadiusScale();

      const rHorizMax = (center - maxChip / 2 - 8) / sx;
      const radiusCap = Math.min(maxR, rHorizMax);

      const baseRadius = Math.max(minR, Math.min(radiusCap, rawRadius));

      // same ring distribution as above
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
      const sy = numRings >= 3 ? 1 : syBase;

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
        const innerR = Math.max(40, outerR * 0.15);
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
    window.addEventListener("resize", onResize, { passive: true });

    const prevClose = closeForms;
    closeForms = function () {
      window.removeEventListener("resize", onResize);
      formsModal.classList.remove("open");
      formsModal.setAttribute("aria-hidden", "true");
    };

    formsModal.classList.add("open");
    formsModal.setAttribute("aria-hidden", "false");
  }
  function closeForms() {
    const active = document.activeElement;
    if (active && formsModal.contains(active)) {
      try {
        active.blur();
      } catch { }
    }
    formsModal.classList.remove("open");
    formsModal.setAttribute("aria-hidden", "true");
    formsModal.setAttribute("inert", "");
  }
  function _bulkSetCategory(checked) {
    const { fashionForGame, fashionCategory } = store.state;
    if (!fashionForGame || !fashionCategory) return;

    const cat = _getGameFashion(fashionForGame).find(
      (c) => c.id === fashionCategory
    );
    if (!cat) return;

    // boolean map for items without forms
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
        ); // reads the forms node
        obj.all = checked;
        obj.forms = obj.forms || {};
        (it.forms || []).forEach((f) => {
          const name = typeof f === "string" ? f : f?.name;
          if (name) obj.forms[name] = checked;
        });
        _setFormsNode(store, fashionForGame, fashionCategory, it.id, obj); // writes it back
      } else {
        rec[it.id] = checked;
      }
    }

    catMap.set(fashionCategory, rec);
    store.fashionStatus.set(fashionForGame, catMap);
    save();
    renderGrid(); // refresh cards/counters
  }

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
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && formsModal.classList.contains("open"))
      closeForms();
  });
  formsModalClose.addEventListener("click", closeForms);
  if (fashionSelectAll && !fashionSelectAll._bound) {
    fashionSelectAll.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      _bulkSetCategory(true); // select all (including all forms)
    });
    fashionSelectAll._bound = true;
  }

  if (fashionClearAll && !fashionClearAll._bound) {
    fashionClearAll.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      _bulkSetCategory(false); // clear all (including all forms)
    });
    fashionClearAll._bound = true;
  }

  return { openFashionModal, renderGrid };
}
