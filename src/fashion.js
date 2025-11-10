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

export function fashionPctFor(gameKey, categoryId, store) {
  const cat = _getGameFashion(gameKey).find((c) => c.id === categoryId);
  if (!cat) return 0;
  const status = _getCatStatusMap(store, gameKey, categoryId);
  const total = cat.items.length;
  const done = cat.items.filter((it) => !!status[it.id]).length;
  return total ? (done / total) * 100 : 0;
}

export function fashionSummaryCardFor(gameKey, genKey, categoryId, store) {
  const game = (window.DATA.games?.[genKey] || []).find(
    (g) => g.key === gameKey
  );
  const cat = _getGameFashion(gameKey).find((c) => c.id === categoryId);
  if (!cat) return document.createTextNode("");

  const status = _getCatStatusMap(store, gameKey, categoryId);
  const total = cat.items.length;
  const done = cat.items.filter((it) => !!status[it.id]).length;
  const pct = total ? Math.round((done / Math.max(1, total)) * 100) : 0;

  const card = document.createElement("section");

  const accent = game?.color || "#7fd2ff";
  card.className = "card";
  card.innerHTML = `
    <div class="card-hd">
      <h3>${cat.label} — <span class="small">${
    game?.label || gameKey
  }</span></h3>
  <div><button class="button" data-open-fashion>Open ${cat.label}</button></div>
    </div>
    <div class="card-bd">
      <div class="small">${done} / ${total} (${pct.toFixed(0)}%)</div>
      <div class="progress"><span class="base" style="width:${pct}%"></span></div>
      
    </div>`;
  card.style.setProperty("--accent", accent);
  card.querySelector("[data-open-fashion]")?.addEventListener("click", () => {
    window.PPGC?.fashionApi?.openFashionModal(gameKey, genKey, categoryId);
  });
  return card;
}

export function wireFashionModal(store, els) {
  const {
    fashionModal,
    fashionModalClose,
    fashionGrid,
    fashionSearch,
    fashionSelectAll,
    fashionClearAll,
    fashionModalTitle,
  } = els;
  const formsModal = document.getElementById("formsModal");
  const formsModalClose = document.getElementById("formsModalClose");
  const formsModalTitle = document.getElementById("formsModalTitle");
  const formsWheel = document.getElementById("formsWheel");
  const formsSelectAll = document.getElementById("formsSelectAll");
  const formsClearAll = document.getElementById("formsClearAll");

  function renderGrid() {
    const { fashionForGame, fashionCategory } = store.state;
    if (!fashionForGame || !fashionCategory) return;

    const cat = _getGameFashion(fashionForGame).find(
      (c) => c.id === fashionCategory
    );
    if (!cat) return;

    const status = _getCatStatusMap(store, fashionForGame, fashionCategory);
    const q = (fashionSearch.value || "").trim().toLowerCase();

    fashionGrid.innerHTML = "";
    cat.items
      .filter((it) => `${it.id} ${it.name}`.toLowerCase().includes(q))
      .forEach((it) => {
        const hasForms = Array.isArray(it.forms) && it.forms.length > 0;
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
          <div class="thumb">
            ${
              hasForms
                ? `<button class="forms-launch" title="Choose forms (colors)">
              <span class="dot"></span><span>Forms</span>
            </button>`
                : ""
            }
            ${
              it.img
                ? `<img class="sprite" alt="${it.name}" src="${it.img}" loading="lazy"/>`
                : `<div style="opacity:.5;">No image</div>`
            }
          </div>
          <div class="card-bd">
            <div class="name" title="${it.name}">${it.name}</div>
            <label class="row small" style="gap:8px;align-items:center;">
              <input type="checkbox" data-fashion-main="${fashionForGame}:${fashionCategory}:${
          it.id
        }"/>
              <span>Collected</span>
            </label>
          </div>
        `;

        const mainChk = card.querySelector(
          `[data-fashion-main="${fashionForGame}:${fashionCategory}:${it.id}"]`
        );

        // initial state: if forms exist, main == obj.all; else use your existing simple fashionStatus boolean
        if (hasForms) {
          const { obj } = _getFormsNode(
            store,
            fashionForGame,
            fashionCategory,
            it.id
          );
          mainChk.checked = !!obj.all;
        } else {
          const catMap = store.fashionStatus.get(fashionForGame);
          const raw = catMap?.get(fashionCategory) || {};
          mainChk.checked = !!raw[it.id];
        }

        // parent checkbox behavior
        mainChk.addEventListener("change", () => {
          const checked = mainChk.checked;
          if (hasForms) {
            const { obj } = _getFormsNode(
              store,
              fashionForGame,
              fashionCategory,
              it.id
            );
            obj.all = checked;
            obj.forms = obj.forms || {};
            (it.forms || []).forEach((f) => (obj.forms[f] = checked));
            _setFormsNode(store, fashionForGame, fashionCategory, it.id, obj);
            save();
          } else {
            const catMap = store.fashionStatus.get(fashionForGame) || new Map();
            const rec = catMap.get(fashionCategory) || {};
            rec[it.id] = checked;
            catMap.set(fashionCategory, rec);
            store.fashionStatus.set(fashionForGame, catMap);
            save();
          }
        });

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

    fashionModalTitle.textContent = `Fashion — ${
      game ? game.label : gameKey
    } · ${cat?.label || categoryId}`;
    fashionSearch.value = "";
    renderGrid();

    fashionModal.classList.add("open");
    fashionModal.setAttribute("aria-hidden", "false");
  }
  function closeFashionModal() {
    fashionModal.classList.remove("open");
    fashionModal.setAttribute("aria-hidden", "true");
    // Re-render main UI so the card percent updates
    requestAnimationFrame(() => window.PPGC?.renderAll?.());
  }
  fashionModal.addEventListener("click", (e) => {
    if (e.target === fashionModal) closeFashionModal();
  });
  fashionModalClose.addEventListener("click", closeFashionModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeFashionModal();
  });
  fashionSearch.addEventListener("input", renderGrid);
  fashionSelectAll.addEventListener("click", () => {
    const { fashionForGame, fashionCategory } = store.state;
    const cat = _getGameFashion(fashionForGame).find(
      (c) => c.id === fashionCategory
    );
    if (!cat) return;
    const status = _getCatStatusMap(store, fashionForGame, fashionCategory);
    cat.items.forEach((it) => {
      status[it.id] = true;
    });
    const gmap = store.fashionStatus.get(fashionForGame);
    gmap.set(fashionCategory, status);
    store.fashionStatus.set(fashionForGame, gmap);
    save();
    renderGrid();
  });
  fashionClearAll.addEventListener("click", () => {
    const { fashionForGame, fashionCategory } = store.state;
    const cat = _getGameFashion(fashionForGame).find(
      (c) => c.id === fashionCategory
    );
    if (!cat) return;
    const status = _getCatStatusMap(store, fashionForGame, fashionCategory);
    cat.items.forEach((it) => {
      status[it.id] = false;
    });
    const gmap = store.fashionStatus.get(fashionForGame);
    gmap.set(fashionCategory, status);
    store.fashionStatus.set(fashionForGame, gmap);
    save();
    renderGrid();
  });
  formsModal.addEventListener("click", (e) => {
    if (e.target === formsModal) closeForms();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && formsModal.classList.contains("open"))
      closeForms();
  });

  function openForms(gameKey, categoryId, item) {
    formsWheel.innerHTML = "";

    formsModal.classList.add("open");
    formsModal.setAttribute("aria-hidden", "false");

    const dialog = formsModal.querySelector(".modal-dialog");
    const header = dialog.querySelector(".modal-hd");
    dialog.style.setProperty("--hd", `${header?.offsetHeight ?? 0}px`);
    const layout = () => {
      const pad = 24;
      const usableW = dialog.clientWidth - pad * 2;
      const usableH =
        dialog.clientHeight - (header?.offsetHeight || 0) - pad * 2;
      const size = Math.max(320, Math.min(600, Math.min(usableW, usableH)));
      formsWheel.style.setProperty("--size", `${size}px`);
      const center = size / 2;
      const maxR = Math.max(80, center - 32);
      const minR = Math.max(56, size * 0.28);
      const gap = 12;
      const R_BOOST = 1.4;
      return { size, center, maxR, minR, gap, R_BOOST };
    };

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
    formsWheel.style.setProperty("--form-img", "60px");

    const forms = item.forms || [];
    const N = forms.length;
    const { obj } = _getFormsNode(store, gameKey, categoryId, item.id);

    // Build chips first so we can measure their actual widths
    const chips = forms.map((form, i) => {
      const name = typeof form === "string" ? form : form?.name ?? "";
      const img = typeof form === "object" ? form?.img : null;

      const btn = document.createElement("button");
      btn.className = "form-chip";
      btn.title = name;

      if (img) {
        const im = document.createElement("img");
        im.src = img;
        im.alt = name;
        im.loading = "lazy";
        btn.appendChild(im);
      }
      const labelSpan = document.createElement("span");
      labelSpan.className = "chip-text";
      labelSpan.textContent = name || "?";
      btn.appendChild(labelSpan);

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
      });

      formsWheel.appendChild(btn);
      return btn;
    });

    // After they’re in the DOM, measure and position
    requestAnimationFrame(() => {
      const { center, maxR, minR, gap, R_BOOST } = layout();
      const maxChip = Math.max(...chips.map((c) => c.offsetWidth || 80), 80);
      const neededR = (N * (maxChip + gap)) / (2 * Math.PI); // arc-length fit
      let radius = Math.max(minR, Math.min(maxR, neededR * R_BOOST));

      // If still too small to avoid overlap, auto-split into two rings
      const needTwoRings = radius >= maxR - 2 && N >= 8;
      if (needTwoRings) {
        const outerCount = Math.ceil(N / 2);
        const innerCount = N - outerCount;

        const rOuter = Math.max(minR, maxR * 0.92);
        const rInner = Math.max(minR * 0.9, rOuter * 0.62);

        // distribute: first outerCount around outer, rest on inner
        chips.forEach((btn, i) => {
          const onOuter = i < outerCount;
          const idxInRing = onOuter ? i : i - outerCount;
          const countInRing = onOuter ? outerCount : innerCount;

          const a = (idxInRing / countInRing) * Math.PI * 2 - Math.PI / 2;
          const r = onOuter ? rOuter : rInner;
          const x = Math.round(center + r * Math.cos(a));
          const y = Math.round(center + r * Math.sin(a));

          btn.style.left = `${x}px`;
          btn.style.top = `${y}px`;
          btn.style.transform = "translate(-50%, -50%)";
          btn.style.position = "absolute";
        });
      } else {
        // single ring
        chips.forEach((btn, i) => {
          const a = (i / N) * Math.PI * 2 - Math.PI / 2; // start at top
          const x = Math.round(center + radius * Math.cos(a));
          const y = Math.round(center + radius * Math.sin(a));
          btn.style.left = `${x}px`;
          btn.style.top = `${y}px`;
          btn.style.transform = "translate(-50%, -50%)";
          btn.style.position = "absolute";
        });
      }
    });

    // Reflow on resize while modal is open (re-run openForms layout cheaply)
    const onResize = () => {
      // Recompute size and reposition existing chips only
      const { center, maxR, minR, gap } = layout();
      const maxChip = Math.max(...chips.map((c) => c.offsetWidth || 80), 80);
      const neededR = (N * (maxChip + gap)) / (2 * Math.PI);
      let radius = Math.max(minR, Math.min(maxR, neededR * R_BOOST));
      const needTwoRings = radius >= maxR - 2 && N >= 8;

      if (needTwoRings) {
        const outerCount = Math.ceil(N / 2);
        const innerCount = N - outerCount;
        const rOuter = Math.max(minR, maxR * 0.92);
        const rInner = Math.max(minR * 0.9, rOuter * 0.62);
        chips.forEach((btn, i) => {
          const onOuter = i < outerCount;
          const idxInRing = onOuter ? i : i - outerCount;
          const countInRing = onOuter ? outerCount : innerCount;
          const a = (idxInRing / countInRing) * Math.PI * 2 - Math.PI / 2;
          const r = onOuter ? rOuter : rInner;
          btn.style.left = `${Math.round(center + r * Math.cos(a))}px`;
          btn.style.top = `${Math.round(center + r * Math.sin(a))}px`;
        });
      } else {
        chips.forEach((btn, i) => {
          const a = (i / N) * Math.PI * 2 - Math.PI / 2;
          btn.style.left = `${Math.round(center + radius * Math.cos(a))}px`;
          btn.style.top = `${Math.round(center + radius * Math.sin(a))}px`;
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
    formsModal.classList.remove("open");
    formsModal.setAttribute("aria-hidden", "true");
  }
  formsModalClose.addEventListener("click", closeForms);

  return { openFashionModal, renderGrid };
}
