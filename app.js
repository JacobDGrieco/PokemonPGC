(function () {
  // ---------- Data registry so you can split into many files ----------
  // Each extra data file can call: PPGC.register({ games:{...}, dex:{...}, sections:{...}, tasks:{...} })
  window.DATA = window.DATA || {};
  window.PPGC = window.PPGC || {};
  PPGC.register = function register(chunk = {}) {
    deepMerge(window.DATA, chunk);
  };

  function deepMerge(target, src) {
    for (const k of Object.keys(src)) {
      const sv = src[k],
        tv = target[k];
      if (sv && typeof sv === "object" && !Array.isArray(sv)) {
        target[k] = deepMerge(tv && typeof tv === "object" ? tv : {}, sv);
      } else {
        target[k] = sv;
      }
    }
    return target;
  }

  // ---------- Storage ----------
  const STORAGE_KEY = "ppgc_v8_explorer";
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  const COMPLETION_SECTION_NAME = "Gotta Catch 'Em All";
  const shinyImgPath = "imgs/pokemon_home/shiny/shiny/";

  // sections & tasks are still persisted; you can seed via DATA.sections / DATA.tasks
  const sectionsStore = new Map(Object.entries(saved.sections || {})); // Map<gameKey, Section[]>
  const tasksStore = new Map(Object.entries(saved.tasks || {})); // Map<sectionId, Task[]>
  const dexStatus = new Map(Object.entries(saved.dexStatus || {})); // Map<gameKey, { [monId]: flag }>

  function isGCEASection(section) {
    if (!section || !section.title) return false;
    return (
      section.title.trim().toLowerCase() ===
      COMPLETION_SECTION_NAME.trim().toLowerCase()
    );
  }

  // ---------- Initial nav ----------
  const firstGenKey = (window.DATA.tabs && window.DATA.tabs[0]?.key) || "gen1";
  const firstGameKey = (window.DATA.games?.[firstGenKey] || [])[0]?.key || null;

  const state = {
    level: saved.level || "gen", // 'gen' | 'game' | 'section'
    genKey: saved.genKey || firstGenKey,
    gameKey: saved.gameKey || firstGameKey,
    sectionId: saved.sectionId || null,
    dexModalFor: null,
  };

  function save() {
    const obj = {
      level: state.level,
      genKey: state.genKey,
      gameKey: state.gameKey,
      sectionId: state.sectionId,
      sections: Object.fromEntries([...sectionsStore]),
      tasks: Object.fromEntries([...tasksStore]),
      dexStatus: Object.fromEntries([...dexStatus]),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  }

  // ---------- Elements ----------
  const elSidebarTitle = document.getElementById("navTitle");
  const elSidebarList = document.getElementById("sideList");
  const elBack = document.getElementById("navBack");
  const elContent = document.getElementById("content");
  const elCrumbs = document.getElementById("crumbs");

  elBack.addEventListener("click", goUp);

  function goUp() {
    if (state.level === "section") {
      state.level = "game";
      state.sectionId = null;
    } else if (state.level === "game") {
      state.level = "gen";
      state.gameKey = null;
    }
    save();
    renderAll();
  }

  // ---------- Sidebar render (folder-style) ----------
  function renderSidebar() {
    elSidebarList.innerHTML = "";

    if (state.level === "gen") {
      elBack.classList.add("hidden");
      elSidebarTitle.textContent = "Generations";

      (window.DATA.tabs || []).forEach((t) => {
        const item = makeDirItem("", t.label, () => {
          state.level = "game";
          state.genKey = t.key;
          state.gameKey = null; // show ONLY the games first
          save();
          renderAll();
        });
        elSidebarList.appendChild(item);
      });
      return;
    }

    if (state.level === "game") {
      elBack.classList.remove("hidden");
      const genLabel =
        (window.DATA.tabs || []).find((x) => x.key === state.genKey)?.label ||
        state.genKey;
      elSidebarTitle.textContent = genLabel;

      // SHOW ONLY GAMES. Clicking a game drills into sections and replaces the list.
      (window.DATA.games?.[state.genKey] || []).forEach((g) => {
        const item = makeDirItem("", g.label, () => {
          state.level = "section";
          state.gameKey = g.key;
          // seed sections from DATA if needed and auto-select first
          const arr = ensureSections(g.key);
          state.sectionId = arr && arr[0] && arr[0].id ? arr[0].id : null;
          save();
          renderAll();
        });
        elSidebarList.appendChild(item);
      });
      return;
    }

    if (state.level === "section") {
      elBack.classList.remove("hidden");
      const gameLabel =
        (window.DATA.games?.[state.genKey] || []).find(
          (x) => x.key === state.gameKey
        )?.label || state.gameKey;
      elSidebarTitle.textContent = gameLabel;

      // List ONLY the sections for this game, as folders
      const arr = ensureSections(state.gameKey);
      arr.forEach((s) => {
        const item = makeDirItem(
          "",
          s.title,
          () => {
            state.sectionId = s.id;
            save();
            renderAll();
          },
          state.sectionId === s.id
        );
        elSidebarList.appendChild(item);
      });
    }
  }

  function makeDirItem(icon, label, onClick, active = false) {
    const li = document.createElement("div");
    li.className = "dir-item" + (active ? " active" : "");
    li.innerHTML = `<div class="label"><span class="icon">${icon}</span><span>${label}</span></div><div>›</div>`;
    li.addEventListener("click", onClick);
    return li;
  }

  // ---- Section progress calculation (supports nested subtasks via `children`) ----
  function countDoneTotal(tasksArr) {
    let done = 0,
      total = 0;
    if (!Array.isArray(tasksArr)) return { done, total };
    for (const t of tasksArr) {
      total += 1;
      if (t.done) done += 1;
      if (Array.isArray(t.children) && t.children.length) {
        const sub = countDoneTotal(t.children);
        done += sub.done;
        total += sub.total;
      }
    }
    return { done, total };
  }

  function gameProgress(gameKey) {
    const secs = ensureSections(gameKey);
    if (!secs.length) return { done: 0, total: 0, pct: 0 };

    let pctSum = 0;
    secs.forEach((s) => {
      bootstrapTasks(s.id); // make sure tasks are seeded once
      const sp = sectionProgress(s.id); // { done, total, pct }
      pctSum += sp.pct || 0; // treat undefined/NaN as 0
    });

    const pct = pctSum / secs.length; // simple mean over sections
    // done/total are not meaningful at the game level anymore; return zeros
    return { done: 0, total: 0, pct };
  }
  function allGamesList() {
    const out = [];
    const gens = window.DATA.games || {};
    for (const genKey of Object.keys(gens)) {
      for (const g of gens[genKey]) out.push({ genKey, game: g });
    }
    return out;
  }

  function findGenKeyForGame(gameKey) {
    const gens = window.DATA.games || {};
    for (const genKey of Object.keys(gens)) {
      if ((gens[genKey] || []).some((g) => g.key === gameKey)) return genKey;
    }
    return null;
  }

  function sectionProgress(sectionId) {
    const tasks = tasksStore.get(sectionId) || [];
    const { done, total } = countDoneTotal(tasks);
    const pct = total > 0 ? (done / total) * 100 : 0;
    return { done, total, pct };
  }

  // ---- Circular ring (SVG stroke trick) ----
  function ring(progressPct, labelText) {
    const r = 52,
      c = 2 * Math.PI * r;
    const pct = Math.max(0, Math.min(100, progressPct || 0));
    const offset = c * (1 - pct / 100);

    const el = document.createElement("div");
    el.className = "ring";
    el.innerHTML = `
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="${r}" stroke="#2b2b33" stroke-width="10" fill="none"></circle>
        <circle cx="60" cy="60" r="${r}" stroke="var(--accent)" stroke-width="10" fill="none"
                stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${offset}"></circle>
      </svg>
      <div class="center"><div class="pct">${pct.toFixed(0)}%</div></div>
      <div class="label">${labelText}</div>`;
    return el;
  }

  // ---------- Content ----------
  function renderCrumbs() {
    elCrumbs.innerHTML = "";
    const push = (t) => {
      const s = document.createElement("span");
      s.className = "crumb";
      s.textContent = t;
      elCrumbs.appendChild(s);
    };
    if (state.level === "gen") {
      push("Generations");
      return;
    }

    const genLabel =
      (window.DATA.tabs || []).find((x) => x.key === state.genKey)?.label ||
      state.genKey;
    push(genLabel);

    if (state.level === "game" || state.level === "section") {
      const gameLabel =
        (window.DATA.games?.[state.genKey] || []).find(
          (x) => x.key === state.gameKey
        )?.label || state.gameKey;
      push(gameLabel);
    }
    if (state.level === "section") {
      const s = ensureSections(state.gameKey).find(
        (x) => x.id === state.sectionId
      );
      if (s) push(s.title);
    }
  }

  function renderTaskList(tasks, parentSectionId, setTasks) {
    const container = document.createElement("div");
    container.className = "task-list";
    tasks.forEach((t) => {
      const row = document.createElement("div");
      row.className = "task-row";
      row.innerHTML = `
      <input type="checkbox" ${t.done ? "checked" : ""} />
      <div class="small" style="flex:1">${t.text}</div>
    `;

      const cb = row.querySelector('input[type="checkbox"]');
      cb.addEventListener("change", () => {
        t.done = cb.checked;
        setTasks(parentSectionId, tasks);
        // if a parent is checked, optionally mark all children
        if (Array.isArray(t.children) && t.children.length) {
          t.children.forEach((c) => (c.done = t.done));
          setTasks(parentSectionId, tasks);
          container.replaceWith(
            renderTaskList(tasks, parentSectionId, setTasks)
          );
        }
      });

      container.appendChild(row);

      // Render children (indented)
      if (Array.isArray(t.children) && t.children.length) {
        const sub = renderTaskList(t.children, parentSectionId, setTasks);
        sub.style.marginLeft = "1.5em";
        sub.style.borderLeft = "2px solid var(--accent)";
        sub.style.paddingLeft = "0.75em";
        container.appendChild(sub);
      }
    });
    return container;
  }

  function renderContent() {
    elContent.innerHTML = "";

    if (state.level === "gen") {
      const allGames = allGamesList(); // ← all games across every gen

      const wrap = document.createElement("section");
      wrap.className = "card";
      wrap.innerHTML = `
        <div class="card-hd">
          <h3>Game Summary — All Games</h3>
        </div>
        <div class="card-bd"><div class="rings" id="gameRings"></div></div>`;
      elContent.appendChild(wrap);

      const ringsWrap = wrap.querySelector("#gameRings"); // uses .rings grid styles (already in your CSS)
      allGames.forEach(({ genKey, game: g }) => {
        const { pct } = gameProgress(g.key); // tiered: avg of section %’s

        const holder = document.createElement("div");
        holder.style.setProperty("--accent", g.color || "#7fd2ff");
        holder.style.cursor = "pointer";

        const r = ring(pct, g.label);
        holder.appendChild(r);

        holder.addEventListener("click", () => {
          // Jump into the correct gen + game + first section
          state.genKey = genKey || findGenKeyForGame(g.key) || state.genKey;
          state.level = "section";
          state.gameKey = g.key;
          const arr = ensureSections(g.key);
          state.sectionId = arr && arr[0] && arr[0].id ? arr[0].id : null;
          save();
          renderAll();
        });

        ringsWrap.appendChild(holder);
      });
      return;
    }

    if (state.level === "game") {
      const games = window.DATA.games?.[state.genKey] || [];

      const wrap = document.createElement("section");
      wrap.className = "card";
      wrap.innerHTML = `
        <div class="card-hd">
          <h3>Section Summary — ${
            (window.DATA.tabs || []).find((t) => t.key === state.genKey)
              ?.label || state.genKey
          }</h3>
        </div>
        <div class="card-bd" id="genSummary"></div>`;
      elContent.appendChild(wrap);

      const holder = wrap.querySelector("#genSummary");
      holder.classList.add("games-grid"); // ← NEW: make it a grid

      games.forEach((g) => {
        const secs = ensureSections(g.key);

        const gameBox = document.createElement("div");
        gameBox.className = "game-summary";

        // Per-game accent color (fallback to your default if not provided)
        const accent = g.color || "#7fd2ff";
        gameBox.style.setProperty("--accent", accent);

        gameBox.innerHTML = `<div class="title">${g.label}</div><div class="rings"></div>`;
        const ringsWrap = gameBox.querySelector(".rings");

        if (secs.length === 0) {
          const empty = document.createElement("div");
          empty.className = "small";
          empty.style.opacity = ".8";
          empty.textContent = "No sections defined.";
          gameBox.appendChild(empty);
        } else {
          secs.forEach((s) => {
            bootstrapTasks(s.id);
            const { pct } = sectionProgress(s.id);
            ringsWrap.appendChild(ring(pct, s.title)); // ring() reads var(--accent)
          });
        }

        holder.appendChild(gameBox);
      });
      return;
    }

    if (state.level === "section") {
      const s = ensureSections(state.gameKey).find(
        (x) => x.id === state.sectionId
      );
      if (!s) {
        state.level = "game";
        save();
        renderAll();
        return;
      }

      const card = document.createElement("section");
      card.className = "card";
      card.innerHTML = `
        <div class="card-hd">
          <h3>${s.title}</h3>
          <div class="row">
            <button class="button" id="openDexBtnInline">Open Dex</button>
          </div>
        </div>
        <div class="card-bd">
          <div id="injectedDex"></div>
          <div id="taskList"></div>
        </div>`;
      elContent.appendChild(card);

      // inline dex open
      card
        .querySelector("#openDexBtnInline")
        .addEventListener("click", () =>
          openDexModal(state.gameKey, state.genKey)
        );

      // NEW: if this section is the GCEA section, inject the dex completion card
      if (isGCEASection(s)) {
        const dexWrap = card.querySelector("#injectedDex");
        dexWrap.appendChild(dexSummaryCardFor(state.gameKey, state.genKey));
      }

      function getTasks(sectionId) {
        return tasksStore.get(sectionId) || [];
      }
      function setTasks(sectionId, arr) {
        tasksStore.set(sectionId, arr);
        save();
      }

      // seed once from DATA.tasks
      bootstrapTasks(s.id);

      // Render tasks as toggle-only (no text editing / no delete)
      const listEl = card.querySelector("#taskList");
      listEl.innerHTML = "";
      const rendered = renderTaskList(getTasks(s.id), s.id, setTasks);
      listEl.appendChild(rendered);
      return;
    }
  }

  // ---------- Sections/Tasks bootstrap from DATA (optional) ----------
  function ensureSections(gameKey) {
    const seed = (window.DATA.sections && window.DATA.sections[gameKey]) || [];
    let arr = sectionsStore.get(gameKey);

    // If no entry or an empty array but seed exists, (re)seed now
    if (!arr || (!arr.length && seed.length)) {
      sectionsStore.set(
        gameKey,
        seed.map((s) => ({ id: s.id || uid(), title: s.title || "Section" }))
      );
      save();
      arr = sectionsStore.get(gameKey);
    }

    // If still undefined, stabilize to empty array
    if (!arr) {
      sectionsStore.set(gameKey, []);
      arr = sectionsStore.get(gameKey);
    }
    return arr;
  }
  function bootstrapSections(gameKey) {
    // NO defaults. Only use what's in DATA.sections[gameKey].
    if (!sectionsStore.has(gameKey)) {
      const seed =
        (window.DATA.sections && window.DATA.sections[gameKey]) || [];
      sectionsStore.set(
        gameKey,
        seed.map((s) => ({ id: s.id || uid(), title: s.title || "Section" }))
      );
      save();
    }
  }
  function bootstrapTasks(sectionId) {
    // If we already have tasks, do a lightweight migration to add children if missing.
    if (tasksStore.has(sectionId)) {
      const current = tasksStore.get(sectionId) || [];
      const seed = (window.DATA.tasks && window.DATA.tasks[sectionId]) || [];

      // If any seed task has children but current doesn't, upgrade in place.
      const needsUpgrade =
        seed.some((t) => Array.isArray(t.children) && t.children.length) &&
        !current.some((t) => Array.isArray(t.children));

      if (!needsUpgrade) return;

      tasksStore.set(sectionId, seed.map(cloneTaskDeep));
      save();
      return;
    }

    // First-time seed with deep copy (preserves children)
    const seed = (window.DATA.tasks && window.DATA.tasks[sectionId]) || [];
    tasksStore.set(sectionId, seed.map(cloneTaskDeep));
    save();

    function cloneTaskDeep(t) {
      return {
        id: t.id || uid(),
        text: t.text || "Task",
        done: !!t.done,
        children: Array.isArray(t.children)
          ? t.children.map(cloneTaskDeep)
          : [],
      };
    }
  }

  // ---------- Dex summary + modal (ported) ----------
  function isMythical(mon) {
    return !!mon?.mythical;
  }
  function prettyFlag(f) {
    switch (f) {
      case "shiny_alpha":
        return "Shiny Alpha";
      case "alpha":
        return "Alpha";
      default:
        return f.replace(/_/g, " ").replace(/\b\w/g, (s) => s.toUpperCase());
    }
  }
  function isMonCompleted(selectedValue, game) {
    if (!game) return false;
    const v = selectedValue || "unknown";
    const comps = game.completionFlags || ["caught"];
    return comps.includes(v);
  }

  function dexSummaryCardFor(gameKey, genKey) {
    const games = window.DATA.games?.[genKey] || [];
    const game = games.find((g) => g.key === gameKey);
    const dex = window.DATA.dex?.[gameKey] || [];
    const statusMap = dexStatus.get(gameKey) || {};

    const isMythical = (m) => !!m?.mythical;
    const isCompleted = (val) => {
      const v = val || "unknown";
      const comps = game?.completionFlags || ["caught"];
      return comps.includes(v);
    };

    const baseDex = dex.filter((m) => !isMythical(m));
    const extraDex = dex.filter((m) => isMythical(m));
    const baseDone = baseDex.filter((m) => isCompleted(statusMap[m.id])).length;
    const baseTotal = baseDex.length;
    const extraDone = extraDex.filter((m) =>
      isCompleted(statusMap[m.id])
    ).length;
    const extraTotal = extraDex.length;

    const extendedDone = baseDone + extraDone;
    const extendedTotal = baseTotal || 1;
    const pctBase = baseTotal ? (baseDone / baseTotal) * 100 : 0;
    const pctExtended = (extendedDone / extendedTotal) * 100;
    const pctBar = Math.min(
      100,
      Math.max(0, Math.round((baseDone / Math.max(1, baseTotal)) * 100))
    );
    const pctExtraOverlay =
      baseTotal > 0 && baseDone === baseTotal && extraTotal > 0
        ? (extraDone / extraTotal) * 100
        : 0;

    const card = document.createElement("section");
    card.className = "card";
    card.innerHTML = `
      <div class="card-hd">
        <h3>Pokédex — <span class="small">${game?.label || gameKey}</span></h3>
      </div>
      <div class="card-bd">
        <div class="small">${
          baseDone === baseTotal ? extendedDone : baseDone
        } / ${baseTotal || 0} (${(baseDone === baseTotal
      ? pctExtended
      : pctBase
    ).toFixed(2)}%)</div>
        <div class="progress">
          <span class="base" style="width:${pctBar}%"></span>
          <span class="extra" style="width:${pctExtraOverlay}%"></span>
        </div>
      </div>`;
    return card;
  }

  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modalClose");
  const dexGrid = document.getElementById("dexGrid");
  const dexSearch = document.getElementById("dexSearch");
  const dexSelectAll = document.getElementById("dexSelectAll");
  const dexClearAll = document.getElementById("dexClearAll");

  function openDexModal(gameKey, genKey) {
    state.dexModalFor = gameKey;
    const game = (window.DATA.games?.[genKey] || []).find(
      (g) => g.key === gameKey
    );
    document.getElementById("modalTitle").textContent = `Dex Editor — ${
      game ? game.label : gameKey
    }`;
    dexSearch.value = "";
    renderDexGrid();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    state.dexModalFor = null;
    renderContent();
  }
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  modalClose.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  function getShinyPathFrom(it) {
    const direct = it.imgShiny || it.img_shiny;
    if (direct) return direct;
    if (!it.img) return it.img;
    const dot = it.img.lastIndexOf("/") + 1;
    return shinyImgPath + it.img.slice(dot);
  }
  function getImageForStatus(it, status) {
    if (!status || status === "unknown" || status === "seen")
      return it.img || "";
    if (status === "shiny" || status === "shiny_alpha")
      return getShinyPathFrom(it) || it.img || "";
    return it.img || "";
  }
  function getFilterClassForStatus(status) {
    if (!status || status === "unknown") return "status-unknown";
    if (status === "seen") return "status-seen";
    return "status-normal";
  }
  function renderBadges(status) {
    const icons = [];
    const isAlpha = (v) => v === "alpha" || v === "shiny_alpha";
    const isShiny = (v) => v === "shiny" || v === "shiny_alpha";
    if (isShiny(status) && window.DATA.marks?.shiny) {
      icons.push(`<img src="${window.DATA.marks.shiny}" alt="Shiny Badge"/>`);
    }
    if (isAlpha(status) && window.DATA.marks?.alpha) {
      icons.push(`<img src="${window.DATA.marks.alpha}" alt="Alpha Badge"/>`);
    }
    return icons.length ? `<div class="badges">${icons.join("")}</div>` : "";
  }

  function renderDexGrid() {
    const gameKey = state.dexModalFor;
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
    const statusMap = dexStatus.get(gameKey) || {};

    const filtered = dex.filter((it) =>
      `${it.id} ${it.name}`.toLowerCase().includes(q)
    );
    dexGrid.innerHTML = "";
    filtered.forEach((it) => {
      const current = statusMap[it.id] || "unknown";
      const src = getImageForStatus(it, current);
      const cls = getFilterClassForStatus(current);
      const card = document.createElement("article");
      card.className = "card";
      card.setAttribute("role", "listitem");
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
            <select class="flag-select" aria-label="Status for ${it.name}">
              ${options
                .map(
                  (opt) =>
                    `<option value="${opt}" ${
                      opt === current ? "selected" : ""
                    }>${prettyFlag(opt)}</option>`
                )
                .join("")}
            </select>
          </div>
        </div>`;
      const select = card.querySelector("select.flag-select");
      select.addEventListener("change", () => {
        const newVal = select.value;
        const curr = dexStatus.get(gameKey) || {};
        curr[it.id] = newVal;
        dexStatus.set(gameKey, curr);
        save();

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
        if (oldBadges) oldBadges.remove();
        const newBadgesHTML = renderBadges(newVal);
        if (newBadgesHTML)
          thumb.insertAdjacentHTML("afterbegin", newBadgesHTML);
      });
      dexGrid.appendChild(card);
    });
  }
  dexSearch.addEventListener("input", renderDexGrid);
  dexSelectAll.addEventListener("click", () => {
    const gameKey = state.dexModalFor;
    if (!gameKey) return;
    const dex = window.DATA.dex?.[gameKey] || [];
    const genKey = (window.DATA.tabs || [])
      .map((t) => t.key)
      .find((gk) =>
        (window.DATA.games[gk] || []).some((g) => g.key === gameKey)
      );
    const game = (window.DATA.games?.[genKey] || []).find(
      (g) => g.key === gameKey
    );
    const completeValue = "caught";
    const curr = dexStatus.get(gameKey) || {};
    dex.forEach((m) => {
      if (!isMythical(m)) curr[m.id] = completeValue;
    });
    dexStatus.set(gameKey, curr);
    save();
    renderDexGrid();
    renderContent();
  });
  dexClearAll.addEventListener("click", () => {
    const gameKey = state.dexModalFor;
    if (!gameKey) return;
    const dex = window.DATA.dex?.[gameKey] || [];
    const curr = dexStatus.get(gameKey) || {};
    dex.forEach((m) => {
      curr[m.id] = "unknown";
    });
    dexStatus.set(gameKey, curr);
    save();
    renderDexGrid();
    renderContent();
  });

  // ---------- Helpers ----------
  function uid() {
    return Math.random().toString(36).slice(2, 9);
  }

  function renderAll() {
    renderSidebar();
    renderCrumbs();
    renderContent();
  }

  // First paint
  renderAll();
})();
