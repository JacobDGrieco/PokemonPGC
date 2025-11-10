import { save } from "./store.js";
import { bootstrapTasks } from "./tasks.js";

const _RANK = {
  unknown: 0,
  seen: 1,
  caught: 2,
  alpha: 3,
  shiny: 4,
  shiny_alpha: 5,
};
function normalizeFlag(v) {
  return String(v || "unknown")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}
function rankStatus(v) {
  return _RANK[v] ?? 0;
}
function pickHighestStatus(list) {
  if (!Array.isArray(list) || !list.length) return "unknown";
  return list.reduce(
    (best, v) => (rankStatus(v) > rankStatus(best) ? v : best),
    "unknown"
  );
}
function isCompletedForGame(game, val) {
  const v = normalizeFlag(val);
  const comps = (game?.completionFlags || ["caught"]).map(normalizeFlag);
  return comps.includes(v);
}

function _getDexFormsNode(store, gameKey, monId) {
  const map = store.dexFormsStatus.get(gameKey) || {};
  const node = map[monId] || { all: false, forms: {} };
  return { map, node };
}
function _setDexFormsNode(store, gameKey, monId, node) {
  const map = store.dexFormsStatus.get(gameKey) || {};
  map[monId] = node;
  store.dexFormsStatus.set(gameKey, map);
  save();
}
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
  return base;
}

export function dexSummaryCardFor(gameKey, genKey, store) {
  const games = window.DATA.games?.[genKey] || [];
  const game = games.find((g) => g.key === gameKey);
  const dex = window.DATA.dex?.[gameKey] || [];

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

  // --- Forms meter (forms-only; each form counts 1 if completed)
  const speciesWithForms = dex.filter(
    (m) => Array.isArray(m.forms) && m.forms.length
  );
  let formsDone = 0,
    formsTotal = 0;
  for (const m of speciesWithForms) {
    const { node } = _getDexFormsNode(store, gameKey, m.id);
    const list = m.forms || [];
    formsTotal += list.length;
    for (const f of list) {
      const name = typeof f === "string" ? f : f?.name;
      const v = normalizeFlag(node.forms?.[name] || "unknown");
      if (isCompletedForGame(game, v)) formsDone += 1;
    }
  }
  const formsPct = formsTotal ? (formsDone / formsTotal) * 100 : 0;

  const card = document.createElement("section");
  card.className = "card";
  card.innerHTML = `
    <div class="card-hd"><h3>Pokédex — <span class="small">${
      game?.label || gameKey
    }</span></h3></div>
    <div class="card-bd">
      <!-- species meter -->
      <div class="small">${
        baseDone === baseTotal ? baseDone + extraDone : baseDone
      } / ${baseTotal || 0} (${(baseDone === baseTotal
    ? pctExtended
    : pctBase
  ).toFixed(2)}%)</div>
      <div class="progress">
        <span class="base" style="width:${pctBar}%"></span>
        <span class="extra" style="width:${pctExtraOverlay}%"></span>
      </div>

      <!-- forms meter -->
      <div class="small">Forms: ${formsDone} / ${formsTotal} (${formsPct.toFixed(
    2
  )}%)</div>
      <div class="progress">
        <span class="base" style="width:${formsPct}%"></span>
      </div>
    </div>`;
  return card;
}

export function dexPctFor(gameKey, genKey, store) {
  const games = window.DATA.games?.[genKey] || [];
  const game = games.find((g) => g.key === gameKey);
  const dex = window.DATA.dex?.[gameKey] || [];

  const isMythical = (m) => !!m?.mythical;
  const isCompleted = (val) => {
    const v = val || "unknown";
    const comps = game?.completionFlags || ["caught"];
    return comps.includes(v);
  };

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

export function wireDexModal(store, els) {
  const {
    modal,
    modalClose,
    dexGrid,
    dexSearch,
    dexSelectAll,
    dexClearAll,
    modalTitle,
  } = els;
  const formsModal = document.getElementById("formsModal");
  const formsModalClose = document.getElementById("formsModalClose");
  const formsWheel = document.getElementById("formsWheel");

  window.PPGC = window.PPGC || {};
  if (!Array.isArray(window.PPGC._pendingDexSyncs))
    window.PPGC._pendingDexSyncs = [];

  function _queueDexSync(gameKey, dexId, status) {
    window.PPGC._pendingDexSyncs.push({ gameKey, dexId, status });
  }
  function getImageForStatus(it, status) {
    const s = normalizeFlag(status);
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

    const filtered = dex.filter((it) =>
      `${it.id} ${it.name}`.toLowerCase().includes(q)
    );
    dexGrid.innerHTML = "";
    filtered.forEach((it) => {
      let current = statusMap[it.id] || "unknown";

      // if the Dex item defines forms, derive parent status from highest form
      const hasForms = Array.isArray(it.forms) && it.forms.length > 0;
      if (hasForms) {
        const { node } = _getDexFormsNode(store, gameKey, it.id);
        const formVals = (it.forms || []).map((f) => {
          const name = typeof f === "string" ? f : f?.name;
          return node.forms?.[name] || "unknown";
        });
        const highest = pickHighestStatus(formVals);
        if (rankStatus(highest) > rankStatus(current)) current = highest;
      }

      const src = getImageForStatus(it, current);
      const cls = getFilterClassForStatus(current);
      const card = document.createElement("article");
      card.className = "card";
      card.setAttribute("role", "listitem");
      card.style.setProperty("--accent", game?.color || "#6aa6ff");
      const keyForCount = `${gameKey}:${it.id}`;
      const countHTML = hasForms
        ? `<span class="pill count" data-dex-forms-count="${keyForCount}"></span>`
        : "";
      card.innerHTML = `
        <div class="thumb ${cls}">
          ${renderBadges(current)}
          <div class="name" title="${it.name}">#${String(it.id).padStart(
        3,
        "0"
      )}</div>
          ${
            src
              ? `<img class="sprite" alt="${it.name}" src="${src}" loading="lazy"/>`
              : `<div style="opacity:.5;">No image</div>`
          }
        </div>
        <div class="card-bd">
          <div class="name" title="${it.name}">${it.name}</div>
          <div class="row">
            ${
              hasForms
                ? `<button class="forms-launch" title="Choose forms">
                    <span class="dot"></span><span>Forms</span>${countHTML}
                  </button>`
                : `<select class="flag-select" aria-label="Status for ${
                    it.name
                  }">
                    ${options
                      .map((opt) => {
                        const val = normalizeFlag(opt);
                        const label = val
                          .replace(/_/g, " ")
                          .replace(/\b\w/g, (s) => s.toUpperCase());
                        const currentVal = normalizeFlag(
                          statusMap[it.id] || "unknown"
                        );
                        return `<option value="${val}" ${
                          val === currentVal ? "selected" : ""
                        }>${label}</option>`;
                      })
                      .join("")}
                  </select>`
            }
          </div>
        </div>`;
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
      const select = card.querySelector("select.flag-select");
      if (select) {
        select.addEventListener("change", () => {
          const newVal = normalizeFlag(select.value); // normalize here

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

  function openDexModal(gameKey, genKey) {
    store.state.dexModalFor = gameKey;
    const game = (window.DATA.games?.[genKey] || []).find(
      (g) => g.key === gameKey
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

    modalTitle.textContent = `Dex Editor — ${game ? game.label : gameKey}`;
    dexSearch.value = "";
    renderDexGrid();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }

  let _closing = false;
  function closeModal() {
    if (_closing) return;
    _closing = true;

    // Hide the modal first (keep DOM stable while we work)
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

    // Kill any tooltips so nothing “sticks” at top-left
    try {
      window.PPGC?.hideTooltips?.();
    } catch {}

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

  const DEX_WHEEL_SIZE_CAP = 1000; // was 600; allows a bigger canvas
  const DEX_RADIUS_SCALE = 2.0;
  function _layoutWheel(dialogEl) {
    const header = dialogEl.querySelector(".modal-hd");
    const pad = 24;
    const usableW = dialogEl.clientWidth - pad * 2;
    const usableH =
      dialogEl.clientHeight - (header?.offsetHeight || 0) - pad * 2;
    const size = Math.max(
      320,
      Math.min(DEX_WHEEL_SIZE_CAP, Math.min(usableW, usableH))
    );
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

  function openDexForms(gameKey, genKey, mon) {
    formsWheel.innerHTML = "";
    formsModal.classList.add("open");
    formsModal.setAttribute("aria-hidden", "false");

    const dialog = formsModal.querySelector(".modal-dialog");
    const header = dialog.querySelector(".modal-hd");
    dialog.style.setProperty("--hd", `${header?.offsetHeight ?? 0}px`);

    // theme
    const game = (window.DATA.games?.[genKey] || []).find(
      (g) => g.key === gameKey
    );
    formsWheel.style.setProperty("--accent", game?.color || "#7fd2ff");
    formsWheel.style.setProperty("--form-img", "100px");
    const { size } = _layoutWheel(dialog);
    formsWheel.style.setProperty("--size", `${size}px`);

    const forms = mon.forms || [];
    const N = forms.length;
    const options = game
      ? game.flags || ["shiny", "caught", "seen", "unknown"]
      : ["shiny", "caught", "seen", "unknown"];

    const { node } = _getDexFormsNode(store, gameKey, mon.id);

    // Build buttons with selects
    const chips = forms.map((form) => {
      const name = typeof form === "string" ? form : form?.name ?? "";

      const btn = document.createElement("button");
      btn.className = "form-chip";
      btn.title = name;

      const row = document.createElement("div");
      row.className = "chip-row";

      const label = document.createElement("span");
      label.className = "chip-text";
      label.textContent = name || "?";
      row.appendChild(label);

      function updateChipState() {
        const val = sel.value;
        if (val && val !== "unknown") {
          btn.classList.add("is-set");
        } else {
          btn.classList.remove("is-set");
        }
      }

      const sel = document.createElement("select");
      sel.className = "flag-select";
      const rawCur = node.forms?.[name] || "unknown";
      const curVal = normalizeFlag(rawCur);
      const fObj = typeof form === "object" ? form : null;
      const startSrc =
        curVal === "shiny" || curVal === "shiny_alpha"
          ? fObj?.imgS || fObj?.img || null
          : fObj?.img || null;

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
      badges.innerHTML = renderBadges(curVal); // uses normalized value
      btn.appendChild(badges);

      sel.innerHTML = options
        .map((opt) => {
          const val = normalizeFlag(opt);
          const label = val
            .replace(/_/g, " ")
            .replace(/\b\w/g, (s) => s.toUpperCase());
          return `<option value="${val}" ${
            val === curVal ? "selected" : ""
          }>${label}</option>`;
        })
        .join("");

      // helper: apply chip status class for image filter
      function applyChipStatusClass(val) {
        const cls = getFilterClassForStatus(val); // returns "status-unknown" | "status-seen" | "status-normal"
        btn.classList.remove("status-unknown", "status-seen", "status-normal");
        btn.classList.add(cls);
      }
      applyChipStatusClass(curVal);
      updateChipState();

      sel.addEventListener("change", () => {
        const newVal = normalizeFlag(sel.value);

        const { node } = _getDexFormsNode(store, gameKey, mon.id);
        node.forms = node.forms || {};
        node.forms[name] = newVal; // store normalized form value

        // mark all=true iff every form has non-unknown
        const total = forms.length;
        const filled = forms.reduce((a, f) => {
          const nm = typeof f === "string" ? f : f?.name;
          return a + (normalizeFlag(node.forms?.[nm]) !== "unknown" ? 1 : 0);
        }, 0);
        node.all = filled === total;
        _setDexFormsNode(store, gameKey, mon.id, node);

        // update #/# counters on any visible cards for this mon
        const key = `${gameKey}:${mon.id}`;
        document
          .querySelectorAll(`[data-dex-forms-count="${key}"]`)
          .forEach((el) => {
            el.textContent = `${filled}/${total}`;
          });

        // recompute highest for the parent and refresh grid
        renderDexGrid();

        // update this chip’s look
        updateChipState(); // .is-set toggle
        applyChipStatusClass(newVal); // image filter class
        badges.innerHTML = renderBadges(newVal);

        // swap chip image if shiny/shiny_alpha and form provides imgS
        if (im) {
          const shinyish = newVal === "shiny" || newVal === "shiny_alpha";
          const fObj = typeof form === "object" ? form : null;
          const nextSrc = shinyish
            ? fObj?.imgS || fObj?.img || im.src
            : fObj?.img || im.src;
          im.src = nextSrc;
        }
      });

      row.appendChild(sel);
      btn.appendChild(row);
      formsWheel.appendChild(btn);
      return btn;
    });

    // position chips radially
    requestAnimationFrame(() => {
      const { center, maxR, minR, gap, R_BOOST } = _layoutWheel(dialog);
      const maxChip = Math.max(...chips.map((c) => c.offsetWidth || 80), 80);
      const neededR = (N * (maxChip + gap)) / (2 * Math.PI);
      let radius = Math.max(
        minR,
        Math.min(maxR, neededR * R_BOOST * DEX_RADIUS_SCALE)
      );
      const needTwo = radius >= maxR - 2 && N >= 8;

      if (needTwo) {
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
          btn.style.transform = "translate(-50%, -50%)";
          btn.style.position = "absolute";
        });
      } else {
        chips.forEach((btn, i) => {
          const a = (i / N) * Math.PI * 2 - Math.PI / 2;
          btn.style.left = `${Math.round(center + radius * Math.cos(a))}px`;
          btn.style.top = `${Math.round(center + radius * Math.sin(a))}px`;
          btn.style.transform = "translate(-50%, -50%)";
          btn.style.position = "absolute";
        });
      }
    });
    const onResize = () => {
      const { center, maxR, minR, gap, R_BOOST } = _layoutWheel(dialog);
      // keep the container’s size in sync too
      const { size } = _layoutWheel(dialog);
      formsWheel.style.setProperty("--size", `${size}px`);

      const maxChip = Math.max(...chips.map((c) => c.offsetWidth || 80), 80);
      const N = chips.length;
      const neededR = (N * (maxChip + gap)) / (2 * Math.PI);
      let radius = Math.max(
        minR,
        Math.min(maxR, neededR * R_BOOST * DEX_RADIUS_SCALE)
      );
      const needTwo = radius >= maxR - 2 && N >= 8;

      if (needTwo) {
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
    if (formsModal._dexOnResize) {
      window.removeEventListener("resize", formsModal._dexOnResize);
    }
    formsModal._dexOnResize = onResize;
    window.addEventListener("resize", onResize, { passive: true });
  }
  function closeDexForms() {
    if (formsModal?._dexOnResize) {
      window.removeEventListener("resize", formsModal._dexOnResize);
      formsModal._dexOnResize = null;
    }
    formsModal.classList.remove("open");
    formsModal.setAttribute("aria-hidden", "true");
  }

  const api = { openDexModal, closeModal, renderDexGrid };
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
    const dex = window.DATA.dex?.[gameKey] || [];
    const curr = store.dexStatus.get(gameKey) || {};
    dex.forEach((m) => {
      if (!m.mythical) {
        curr[m.id] = "caught";
        _queueDexSync(gameKey, m.id, "caught"); // add this
      }
    });
    store.dexStatus.set(gameKey, curr);
    save();
    renderDexGrid();
  });
  dexClearAll.addEventListener("click", () => {
    const gameKey = store.state.dexModalFor;
    if (!gameKey) return;
    const dex = window.DATA.dex?.[gameKey] || [];
    const curr = store.dexStatus.get(gameKey) || {};
    dex.forEach((m) => {
      curr[m.id] = "unknown";
      _queueDexSync(gameKey, m.id, "unknown");
    });
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

  return api;
}
