import { ring } from "./rings.js";
import { save } from "../store.js";
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

const dexApiSingleton = { api: null };

export function renderContent(store, els) {
  const s = store.state;
  const elContent = els.elContent;
  elContent.innerHTML = "";

  if (!dexApiSingleton.api) dexApiSingleton.api = wireDexModal(store, els);

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
      let pctSum = 0;
      secs.forEach((sec) => {
        bootstrapTasks(sec.id, store.tasksStore);
        const addon = getSectionAddonPcts(
          sec,
          g.key,
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
        const pct = total > 0 ? (done / total) * 100 : 0;
        pctSum += pct;
      });
      const pct = secs.length ? pctSum / secs.length : 0;

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
            const { done: baseDone, total: baseTotal } = summarizeTasks(tasksArr);
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

    const card = document.createElement("section");
    const gameInGen = (window.DATA.games?.[s.genKey] || []).find(
      (g) => g.key === s.gameKey
    );
    if (gameInGen?.color) card.style.setProperty("--accent", gameInGen.color);
    card.className = "card";
    card.innerHTML = `
      <div class="card-hd">
        <h3>${sec.title}</h3>
        <div class="row"><button class="button" id="openDexBtnInline">Open Dex</button></div>
      </div>
      <div class="card-bd">
        <div id="injectedDex"></div>
        <div id="taskList"></div>
      </div>`;
    elContent.appendChild(card);

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

    const listEl = card.querySelector("#taskList");
    listEl.innerHTML = "";
    const layoutRows = window.DATA.layout?.taskRows?.[sec.id];
    bootstrapTasks(sec.id, store.tasksStore);
    const tasksArr = store.tasksStore.get(sec.id) || [];
    const setTasks = (id, arr) => {
      store.tasksStore.set(id, arr);
      save();
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
