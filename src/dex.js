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
function _setAllFormsForMon(
  store,
  gameKey,
  monId,
  formsList,
  status /* "caught" | "unknown" etc. */
) {
  const map = store.dexFormsStatus.get(gameKey) || {};
  const node = map[monId] || { all: false, forms: {} };
  node.forms = node.forms || {};
  for (const f of formsList || []) {
    const name = typeof f === "string" ? f : f?.name;
    if (!name) continue;
    node.forms[name] = status;
  }
  const total = (formsList || []).length;
  const filled = Object.values(node.forms).filter(
    (v) => v && v !== "unknown"
  ).length;
  node.all = total > 0 && filled === total && status !== "unknown";
  map[monId] = node;
  store.dexFormsStatus.set(gameKey, map);
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
// --- DEBUG: find what’s still incomplete for a game's dex ---------------
function _listIncompleteSpeciesFor(gameKey, genKey, store) {
  const games = window.DATA.games?.[genKey] || [];
  const game = games.find(g => g.key === gameKey);
  const dex = window.DATA.dex?.[gameKey] || [];
  const notDone = [];

  for (const m of dex) {
    if (m?.mythical) continue; // base completion ignores mythicals
    const eff = _effectiveSpeciesStatus(store, gameKey, m);
    if (!isCompletedForGame(game, eff)) notDone.push(m);
  }
  return notDone;
}

function _listIncompleteFormsFor(gameKey, genKey, store) {
  const games = window.DATA.games?.[genKey] || [];
  const game = games.find(g => g.key === gameKey);
  const dex = window.DATA.dex?.[gameKey] || [];
  const rows = [];

  for (const m of dex) {
    const forms = Array.isArray(m.forms) ? m.forms : [];
    if (!forms.length) continue;

    const { node } = _getDexFormsNode(store, gameKey, m.id);
    const missing = [];
    for (const f of forms) {
      const name = typeof f === "string" ? f : f?.name;
      if (!name) continue;
      const v = normalizeFlag(node.forms?.[name] || "unknown");
      if (!isCompletedForGame(game, v)) missing.push(name);
    }
    if (missing.length) rows.push({ mon: m, missing });
  }
  return rows;
}

// Expose to console
window.PPGC = window.PPGC || {};
window.PPGC.debugDexMissing = function (gameKey, genKey) {
  const natKey = `${String(gameKey).replace(/-national$/, "")}-national`;
  const haveNat = (window.DATA.dex?.[natKey] || []).length > 0;

  const regMissing = _listIncompleteSpeciesFor(gameKey, genKey, store);
  const formMissing = _listIncompleteFormsFor(gameKey, genKey, store);
  const natMissing = haveNat ? _listIncompleteSpeciesFor(natKey, genKey, store) : [];

  console.group(`[PPGC] Missing for ${gameKey}${haveNat ? ` (+ ${natKey})` : ""}`);
  console.log("Regional NOT complete:", regMissing.map(m => `#${m.id} ${m.name}`));
  if (haveNat) console.log("National NOT complete:", natMissing.map(m => `#${m.id} ${m.name}`));
  console.log("Forms NOT complete:", formMissing.map(r => `#${r.mon.id} ${r.mon.name}: ${r.missing.join(", ")}`));
  console.groupEnd();

  return { regMissing, natMissing, formMissing };
};


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

  // --- National meter (same math, but against `${base}-national`) ---
  const baseGameKey = String(gameKey).endsWith("-national")
    ? String(gameKey).replace(/-national$/, "")
    : String(gameKey);
  const natKey = `${baseGameKey}-national`;
  const natDex = window.DATA.dex?.[natKey] || [];

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
    <div class="card-hd"><h3>Pokédex — <span class="small">${game?.label || gameKey
    }</span></h3></div>
    <div class="card-bd">
      <!-- species meter -->
      <div class="small">Regional: ${baseDone === baseTotal ? baseDone + extraDone : baseDone
    } / ${baseTotal || 0} (${(baseDone === baseTotal
      ? pctExtended
      : pctBase
    ).toFixed(2)}%)</div>
      <div class="progress">
        <span class="base" style="width:${pctBar}%"></span>
        <span class="extra" style="width:${pctExtraOverlay}%"></span>
      </div>
      <!-- national meter -->
      <div class="small">National: 
        ${natBaseDone === natBaseTotal ? natBaseDone + natExtraDone : natBaseDone}
        / ${natBaseTotal || 0}
        (${(natBaseDone === natBaseTotal ? natPctExtended : natPctBase).toFixed(2)}%)
      </div>
      <div class="progress">
        <span class="base" style="width:${natPctBar}%"></span>
        <span class="extra" style="width:${natPctExtraOverlay}%"></span>
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

export function formsPctFor(gameKey, genKey, store) {
  const games = window.DATA.games?.[genKey] || [];
  const game = games.find((g) => g.key === gameKey);
  const dex = window.DATA.dex?.[gameKey] || [];

  const speciesWithForms = dex.filter((m) => Array.isArray(m.forms) && m.forms.length);
  let formsDone = 0, formsTotal = 0;
  for (const m of speciesWithForms) {
    const nodeMap = store.dexFormsStatus.get(gameKey) || {};
    const node = nodeMap[m.id] || { forms: {} };
    const list = m.forms || [];
    formsTotal += list.length;
    for (const f of list) {
      const name = typeof f === "string" ? f : f?.name;
      const v = (node.forms?.[name] || "unknown");
      if (isCompletedForGame(game, v)) formsDone += 1;
    }
  }
  return formsTotal ? (formsDone / formsTotal) * 100 : 0;
}

// Make available on window so other modules (sections) can call it
window.PPGC = window.PPGC || {};
window.PPGC.formsPctFor = (gameKey, genKey) => formsPctFor(gameKey, genKey, store);

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

  const toolbar = modal.querySelector("header .toolbar") || modal.querySelector(".modal-hd");
  const scopeBtn = document.createElement("button");
  scopeBtn.type = "button";
  scopeBtn.className = "btn scope-toggle";
  scopeBtn.title = "Dex Toggle";

  // Debug button: "What’s missing?"
  const missingBtn = document.createElement("button");
  missingBtn.type = "button";
  missingBtn.className = "btn btn-ghost";
  missingBtn.textContent = "What’s missing?";
  missingBtn.title = "Show entries (and forms) that are not complete yet";
  if (toolbar) {
    toolbar.insertBefore(missingBtn, scopeBtn.nextSibling);
  }

  // Inline result panel
  const missingPanel = document.createElement("div");
  missingPanel.className = "missing-panel";
  missingPanel.style.cssText = `
  margin-top:8px; padding:8px 10px; border:1px solid var(--card-border,#3335);
  border-radius:8px; font-size:12px; display:none; max-height:160px; overflow:auto;
`;
  toolbar?.parentElement?.appendChild(missingPanel);

  function renderMissingPanel(gameKey, genKey) {
    const natKey = `${String(gameKey).replace(/-national$/, "")}-national`;
    const haveNat = (window.DATA.dex?.[natKey] || []).length > 0;

    const regMissing = _listIncompleteSpeciesFor(gameKey, genKey, store);
    const natMissing = haveNat ? _listIncompleteSpeciesFor(natKey, genKey, store) : [];
    const formMissing = _listIncompleteFormsFor(gameKey, genKey, store);

    const fmtList = (arr) => arr.length ? arr.map(m => `#${m.id} ${m.name}`).join(", ") : "None 🎉";
    const fmtForms = (rows) => rows.length
      ? rows.map(r => `#${r.mon.id} ${r.mon.name}: ${r.missing.join(", ")}`).join("<br>")
      : "None 🎉";

    missingPanel.innerHTML = `
    <div><b>Regional not complete:</b> ${fmtList(regMissing)}</div>
    ${haveNat ? `<div style="margin-top:6px;"><b>National not complete:</b> ${fmtList(natMissing)}</div>` : ""}
    <div style="margin-top:6px;"><b>Forms not complete:</b><br>${fmtForms(formMissing)}</div>
  `;
  }

  missingBtn.addEventListener("click", () => {
    const gameKey = store.state.dexModalFor;
    if (!gameKey) return;
    const genKey = (window.DATA.tabs || [])
      .map(t => t.key)
      .find(gk => (window.DATA.games[gk] || []).some(g => g.key === (String(gameKey).replace(/-national$/, ""))));
    renderMissingPanel(gameKey, genKey);
    missingPanel.style.display = missingPanel.style.display === "none" ? "block" : "none";
  });


  function isNatKey(k) { return String(k || "").endsWith("-national"); }
  function baseOf(k) { return isNatKey(k) ? String(k).replace(/-national$/, "") : String(k); }
  function updateScopeBtnLabel(gameKey) {
    scopeBtn.textContent = isNatKey(gameKey) ? "Regional Dex" : "National Dex";
  }

  if (toolbar) {
    const searchBox = toolbar.querySelector('input[type="search"], input[type="text"]');
    toolbar.insertBefore(scopeBtn, searchBox || toolbar.firstChild);
  }

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
  // --- NEW: Dex↔Dex sync ----------------------------------------------
  function _resolveDexTargetKey(link) {
    // Per-game national keys: "ruby" -> "ruby-national"
    if (link?.dexType === "national") return `${link?.game}-national`;
    return link?.game;
  }
  function _resolveFormNameFor(link, entryId, targetGameKey) {
    if (typeof link?.form === "undefined" || link.form === null) return null;
    if (typeof link.form === "string") return link.form;

    // number => index into entry.forms (support 0- or 1-based)
    const dexList = window.DATA?.dex?.[targetGameKey] || [];
    const entry = dexList.find((e) => e && e.id === link.id);
    const forms = Array.isArray(entry?.forms) ? entry.forms : [];
    const idx = typeof link.form === "number" ? (link.form >= 1 ? link.form - 1 : link.form) : -1;
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
      const newStatus = String(newStatusRaw || "unknown").trim().toLowerCase();

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
          const tList = (window.DATA?.dex?.[targetGameKey] || [])
            .find((e) => e && e.id === targetId)?.forms || [];
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

  // --- END Dex↔Dex sync ------------------------------------------------


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
          ${src
          ? `<img class="sprite" alt="${it.name}" src="${src}" loading="lazy"/>`
          : `<div style="opacity:.5;">No image</div>`
        }
        </div>
        <div class="card-bd">
          <div class="name" title="${it.name}">${it.name}</div>
          <div class="row">
            ${hasForms
          ? `<button class="forms-launch" title="Choose forms">
                    <span class="dot"></span><span>Forms</span>${countHTML}
                  </button>`
          : `<select class="flag-select" aria-label="Status for ${it.name
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
              return `<option value="${val}" ${val === currentVal ? "selected" : ""
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

  const _origOpenDexModal = openDexModal;
  function openDexModalPatched(gameKey, genKey) {
    updateScopeBtnLabel(gameKey);
    console.log(gameKey);
    _origOpenDexModal(gameKey, genKey);
  }


  scopeBtn.addEventListener("click", () => {
    _syncChangesForCurrentGame();


    const current = store.state.dexModalFor;
    if (!current) return;
    const base = baseOf(current);
    const nextKey = isNatKey(current) ? base : `${base}-national`;

    // keep genKey consistent for title/color
    const genKey = (window.DATA.tabs || [])
      .map(t => t.key)
      .find(gk => (window.DATA.games[gk] || []).some(g => g.key === base)) || null;

    openDexModalPatched(nextKey, genKey);

    if (missingPanel && missingPanel.style.display !== "none") {
      renderMissingPanel(nextKey, genKey);
    }
  });

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

    function _computeChipScale(n, dialogEl) {
      // Base image size (px) gently reduces as n grows.
      //  ≤6: ~100px, 7–10: ~90px, 11–14: ~80px, 15–18: ~70px, 19+: ~60–56px
      let img = Math.round(110 - Math.max(0, n - 6) * 4);
      img = Math.max(56, Math.min(110, img));
      // If the dialog is on the smaller side, trim a bit more
      const box = dialogEl.getBoundingClientRect();
      if (Math.min(box.width, box.height) < 820) img = Math.max(52, img - 6);
      // Font & padding scale with image
      const font = Math.max(10, Math.round(img * 0.16)); // ~18px at 110, ~9–10px at 56
      const pad =
        img >= 90 ? "12px 16px" : img >= 70 ? "10px 12px" : "8px 10px";
      return { img, font, pad };
    }
    const _scale = _computeChipScale(N, dialog);
    formsWheel.style.setProperty("--form-img", `${_scale.img}px`);
    formsWheel.style.setProperty("--chip-font", `${_scale.font}px`);
    formsWheel.style.setProperty("--chip-pad", _scale.pad);

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
          return `<option value="${val}" ${val === curVal ? "selected" : ""
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
      // Recompute size AND chip scale on resize
      const newScale = _computeChipScale(chips.length, dialog);
      formsWheel.style.setProperty("--form-img", `${newScale.img}px`);
      formsWheel.style.setProperty("--chip-font", `${newScale.font}px`);
      formsWheel.style.setProperty("--chip-pad", newScale.pad);

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

  const api = { openDexModal: openDexModalPatched, closeModal, renderDexGrid };
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

    for (const m of dex) {
      if (m.mythical) continue; // keep your existing rule
      curr[m.id] = "caught"; // species flag
      _queueDexSync(gameKey, m.id, "caught");

      if (Array.isArray(m.forms) && m.forms.length) {
        _setAllFormsForMon(store, gameKey, m.id, m.forms, "caught"); // NEW
      }
    }
    store.dexStatus.set(gameKey, curr);
    save();
    renderDexGrid();
  });

  dexClearAll.addEventListener("click", () => {
    const gameKey = store.state.dexModalFor;
    if (!gameKey) return;
    const dex = window.DATA.dex?.[gameKey] || [];
    const curr = store.dexStatus.get(gameKey) || {};

    for (const m of dex) {
      curr[m.id] = "unknown"; // species flag
      _queueDexSync(gameKey, m.id, "unknown");

      if (Array.isArray(m.forms) && m.forms.length) {
        _setAllFormsForMon(store, gameKey, m.id, m.forms, "unknown"); // NEW
      }
    }
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
