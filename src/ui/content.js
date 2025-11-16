import { ring } from "./rings.js";
import { save } from "../store.js";
import {
  fashionSummaryCardFor,
  fashionPctFor,
  wireFashionModal,
} from "../fashion.js";
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
import { dexSummaryCardFor, dexPctFor, wireDexModal } from "../dex.js";
import { renderDistributionCardsFor } from "../distributions.js";
import { renderCurryCardsFor } from "../curry.js";

const dexApiSingleton = { api: null };
const fashionApiSingleton = { api: null };

(function ensureGlobalHelpers() {
  window.PPGC = window.PPGC || {};

  // Hide/destroy any tooltip-ish elements safely (role, common classes, or your id)
  function hideAllTooltips() {
    try {
      // Common selectors — include any your app actually uses
      const nodes = document.querySelectorAll(
        '[role="tooltip"], .tooltip, #tooltip'
      );
      nodes.forEach((el) => {
        // Prefer removing to avoid stray positioned nodes during teardown
        el.remove();
      });

      // If you keep any tooltip timers/refs, clear them here
      if (window.PPGC._tooltipTimer) {
        clearTimeout(window.PPGC._tooltipTimer);
        window.PPGC._tooltipTimer = null;
      }
      window.PPGC._tooltipEl = null;
    } catch (e) {
      // Don't let tooltips crash close; just log
      console.warn("hideAllTooltips failed:", e);
    }
  }

  // Expose globally
  window.PPGC.hideTooltips = hideAllTooltips;
})();

export function renderContent(store, els) {
  window.PPGC = window.PPGC || {};
  window.PPGC._storeRef = store;
  window.PPGC._tasksStoreRef = store.tasksStore;

  function _isExtraCreditSection(sec) {
    const t = (sec?.title || "").trim().toLowerCase();
    return t === "distributions" || t === "extra credit";
  }
  function _sectionPct(sec, gameKey, genKey) {
    // mirror existing per-section math (tasks + addon meters)
    bootstrapTasks(sec.id, store.tasksStore);
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

  const s = store.state;
  const elContent = els.elContent;
  elContent.innerHTML = "";

  if (!dexApiSingleton.api) dexApiSingleton.api = wireDexModal(store, els);
  window.PPGC.dexApi = dexApiSingleton.api;
  if (!fashionApiSingleton.api)
    fashionApiSingleton.api = wireFashionModal(store, els);
  window.PPGC.fashionApi = fashionApiSingleton.api;

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

      const basePcts = baseSecs.map((sec) => _sectionPct(sec, g.key, genKey));
      const baseComplete =
        basePcts.length > 0 && basePcts.every((p) => p >= 100 - 1e-6);
      const baseAvg = basePcts.length
        ? basePcts.reduce((a, b) => a + b, 0) / basePcts.length
        : 0;

      let pct;
      if (!baseComplete) {
        // Until all base sections are 100%, only count base
        pct = Math.min(100, baseAvg);
      } else {
        // Base is done; add extra credit (average of extra sections) on top of 100
        const extraPcts = extraSecs.map((sec) =>
          _sectionPct(sec, g.key, genKey)
        );
        const extraAvg = extraPcts.length
          ? extraPcts.reduce((a, b) => a + b, 0) / extraPcts.length
          : 0;
        pct = 100 + Math.min(100, extraAvg); // cap at 200%
      }

      const r = ring(pct, g.label);
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
        gameBox.innerHTML = `<div class="title">${g.label}</div><div class="rings"></div>`;
        const ringsWrap = gameBox.querySelector(".rings");

        if (!secs.length) {
          const empty = document.createElement("div");
          empty.className = "small";
          empty.style.opacity = ".8";
          empty.textContent = "No sections defined.";
          gameBox.appendChild(empty);
        } else {
          secs.forEach((sec) => {
            // Make sure tasks exist for this section
            bootstrapTasks(sec.id, store.tasksStore);

            // Compute any extra percent add-ons (Dex meters, etc.)
            const addon = getSectionAddonPcts(
              sec,
              g.key,
              s.genKey,
              (a, b) => dexPctFor(a, b, store),
              window.PPGC.sectionMeters
            );
            const tasksArr = store.tasksStore.get(sec.id) || [];
            const { done: baseDone, total: baseTotal } =
              summarizeTasks(tasksArr);
            const extraDone = addon.reduce(
              (a, p) => a + Math.max(0, Math.min(100, p)) / 100,
              0
            );
            const done = baseDone + extraDone;
            const total = baseTotal + addon.length;
            const pct = total > 0 ? (done / total) * 100 : 0;
            ringsWrap.appendChild(ring(pct, sec.title));
          });
        }
        rowEl.appendChild(gameBox);
      });
    });
    return;
  }

  if (s.level === "section") {
    const sec = ensureSections(s.gameKey).find((x) => x.id === s.sectionId);
    if (!sec) {
      s.level = "game";
      save();
      return renderContent(store, els);
    }

    bootstrapTasks(sec.id, store.tasksStore);

    const addon = getSectionAddonPcts(
      sec,
      s.gameKey,
      s.genKey,
      (a, b) => dexPctFor(a, b, store),
      window.PPGC.sectionMeters
    );

    const tasksArrForPct = store.tasksStore.get(sec.id) || [];
    const { done: baseDone, total: baseTotal } = summarizeTasks(tasksArrForPct);
    const extraDone = addon.reduce(
      (a, p) => a + Math.max(0, Math.min(100, p)) / 100,
      0
    );
    const doneAll = baseDone + extraDone;
    const totalAll = baseTotal + addon.length;
    const secPct = totalAll > 0 ? (doneAll / totalAll) * 100 : 0;

    const card = document.createElement("section");
    const gameInGen = (window.DATA.games?.[s.genKey] || []).find(
      (g) => g.key === s.gameKey
    );
    if (gameInGen?.color) card.style.setProperty("--accent", gameInGen.color);
    card.className = "card";
    card.innerHTML = `
      <div class="card-hd section-hd">
        <h3>${sec.title}</h3>
        <div class="pct">${secPct.toFixed(2)}%</div>
        <div class="row"><button class="button" id="openDexBtnInline">Open Dex</button></div>
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

    const isFashion =
      sec.id === "fashion" ||
      (Array.isArray(sec.tags) && sec.tags.includes("fashion")) ||
      (sec.title || "").trim().toLowerCase().includes("fashion");
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
      (Array.isArray(sec.tags) && sec.tags.includes("curry")) ||
      (sec.title || "").trim().toLowerCase().includes("curry");

    if (isCurry) {
      const holder = card.querySelector("#injectedDex");
      const curryGrid = renderCurryCardsFor(s.gameKey, s.genKey, store);
      if (holder && curryGrid) {
        holder.appendChild(curryGrid);
      }
    }

    card
      .querySelector("#openDexBtnInline")
      .addEventListener("click", () =>
        dexApiSingleton.api.openDexModal(s.gameKey, s.genKey)
      );

    const isGCEA =
      (sec.title || "").trim().toLowerCase() === "gotta catch 'em all";
    if (isGCEA) {
      const dexWrap = card.querySelector("#injectedDex");
      dexWrap.appendChild(dexSummaryCardFor(s.gameKey, s.genKey, store));
    }

    const isDistributions = (sec.title || "").trim().toLowerCase() === "distributions";
    if (isDistributions) {
      const distWrap = card.querySelector("#injectedDex");
      distWrap.appendChild(renderDistributionCardsFor(s.gameKey, s.genKey, store));
    }

    const listEl = card.querySelector("#taskList");
    listEl.innerHTML = "";
    const layoutRows = window.DATA.layout?.taskRows?.[sec.id];
    bootstrapTasks(sec.id, store.tasksStore);
    const tasksArr = store.tasksStore.get(sec.id) || [];
    const setTasks = (id, arr) => {
      store.tasksStore.set(id, arr);
      save();
    };

    window.PPGC.refreshSectionHeaderPct = function refreshSectionHeaderPct() {
      const s = window.PPGC._storeRef.state;
      const sec = ensureSections(s.gameKey).find((x) => x.id === s.sectionId);
      if (!sec) return;

      const addon = getSectionAddonPcts(
        sec,
        s.gameKey,
        s.genKey,
        (a, b) => dexPctFor(a, b, window.PPGC._storeRef),
        window.PPGC.sectionMeters
      );

      const tasksArr = window.PPGC._storeRef.tasksStore.get(sec.id) || [];
      const { done: baseDone, total: baseTotal } = summarizeTasks(tasksArr);
      const extraDone = addon.reduce(
        (a, p) => a + Math.max(0, Math.min(100, p)) / 100,
        0
      );
      const doneAll = baseDone + extraDone;
      const totalAll = baseTotal + addon.length;
      const pct = totalAll > 0 ? (doneAll / totalAll) * 100 : 0;

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
