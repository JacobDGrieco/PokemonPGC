// app.js — checklist tabs + dex editor (single-select dropdown per mon)
// Adds image variants + filters by status (unknown/seen/caught/shiny...)
(function () {
  const STORAGE_KEY = "ppgc_v6_select_imgs";
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

  // Checklist state per gen
  const checked = new Map(Object.entries(saved.checked || {}));
  for (const [k, arr] of checked.entries()) checked.set(k, new Set(arr));

  // Per-game status store: Map<gameKey, { [monId]: stringOption }>
  const dexStatus = new Map(Object.entries(saved.dexStatus || {}));

  // Active game per gen (remembered): Map<genKey, gameKey>
  const activeGame = new Map(Object.entries(saved.activeGame || {}));

  const state = {
    activeGen: DATA.tabs[0].key,
    checked,
    dexStatus,
    activeGame,
    dexModalFor: null, // current gameKey in modal
  };

  function save() {
    const obj = {
      checked: Object.fromEntries(
        [...state.checked].map(([k, set]) => [k, [...set]])
      ),
      dexStatus: Object.fromEntries(state.dexStatus),
      activeGame: Object.fromEntries(state.activeGame),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  }

  // DOM helpers
  const $ = (s, r = document) => r.querySelector(s);
  const tabsEl = $("#tabs");
  const subtabsEl = $("#subtabs");
  const list = $("#list");
  const empty = $("#empty");
  const search = $("#search");
  const showChecked = $("#showChecked");
  const count = $("#count");

  // Build gen tabs
  function buildGenTabs() {
    tabsEl.innerHTML = "";
    for (const t of DATA.tabs) {
      const btn = document.createElement("button");
      btn.className = "tab";
      btn.textContent = t.label;
      btn.addEventListener("click", () => {
        state.activeGen = t.key;
        render();
      });
      tabsEl.appendChild(btn);

      if (!state.checked.has(t.key)) state.checked.set(t.key, new Set());
      const games = (DATA.games && DATA.games[t.key]) || [];
      if (games.length && !state.activeGame.get(t.key))
        state.activeGame.set(t.key, games[0].key);
    }
  }
  buildGenTabs();

  function activeGenTab() {
    return DATA.tabs.find((t) => t.key === state.activeGen) || DATA.tabs[0];
  }
  function activeGameKeyFor(genKey) {
    const games = (DATA.games && DATA.games[genKey]) || [];
    if (!games.length) return null;
    return state.activeGame.get(genKey) || games[0].key;
  }

  function buildSubTabs() {
    const genKey = activeGenTab().key;
    const games = (DATA.games && DATA.games[genKey]) || [];
    subtabsEl.innerHTML = "";
    if (!games.length) {
      subtabsEl.style.display = "none";
      return;
    }
    subtabsEl.style.display = "";
    const activeKey = activeGameKeyFor(genKey);
    games.forEach((g) => {
      const btn = document.createElement("button");
      btn.className = "tab";
      btn.textContent = g.label;
      btn.classList.toggle("active", g.key === activeKey);
      btn.addEventListener("click", () => {
        state.activeGame.set(genKey, g.key);
        save();
        render();
      });
      subtabsEl.appendChild(btn);
    });
  }

  function render() {
    // highlight gen tabs
    [...tabsEl.children].forEach((el, i) => {
      el.classList.toggle("active", DATA.tabs[i].key === state.activeGen);
    });

    // build subtabs
    buildSubTabs();

    const gen = activeGenTab();
    const items = DATA[gen.key] || [];
    const q = search.value.trim().toLowerCase();
    const only = showChecked.checked;
    const set = state.checked.get(gen.key) || new Set();

    const filtered = items.filter((it) => {
      const hay = `${it.id || ""} ${it.text || it.label || ""}`;
      const match = hay.toLowerCase().includes(q);
      const isChecked = set.has(it.id);
      return match && (!only || isChecked);
    });

    list.innerHTML = "";
    for (const it of filtered) {
      if (it.kind === "dex-summary") {
        const row = renderDexSummaryRow(gen.key, it);
        list.appendChild(row);
      } else {
        const isChecked = set.has(it.id);
        const row = document.createElement("div");
        row.className = "listItem";
        row.innerHTML = `
          <input type="checkbox" ${isChecked ? "checked" : ""} />
          <div class="content">
            <div class="title">${it.text || it.label || it.id}</div>
          </div>`;
        const cb = row.querySelector("input");
        cb.addEventListener("change", () => {
          if (cb.checked) set.add(it.id);
          else set.delete(it.id);
          state.checked.set(gen.key, set);
          save();
          updateCount();
        });
        list.appendChild(row);
      }
    }

    empty.hidden = filtered.length > 0;
    updateCount();
  }

  function updateCount() {
    const gen = activeGenTab();
    const items = DATA[gen.key] || [];
    const set = state.checked.get(gen.key) || new Set();
    const totalChecklist = items.filter((x) => x.kind !== "dex-summary").length;
    const checkedChecklist = [...set].filter(
      (id) => (items.find((x) => x.id === id) || {}).kind !== "dex-summary"
    ).length;
    count.textContent = `${checkedChecklist} / ${totalChecklist}`;
  }

  function renderDexSummaryRow(genKey, item) {
    const gameKey = activeGameKeyFor(genKey);
    const dex = DATA.dex && DATA.dex[gameKey] ? DATA.dex[gameKey] : [];
    const game = ((DATA.games && DATA.games[genKey]) || []).find(
      (g) => g.key === gameKey
    );
    const statusMap = state.dexStatus.get(gameKey) || {};

    const done = dex.filter((m) =>
      isMonCompleted(statusMap[m.id], game)
    ).length;
    const total = dex.length;
    const pct = total ? Math.round((done / total) * 100) : 0;

    const row = document.createElement("div");
    row.className = "listItem";
    row.innerHTML = `
      <div class="content" style="flex:1 1 auto;">
        <div class="title">${item.label || "Pokédex"} — <span class="small">${
      game ? game.label : ""
    }</span></div>
        <div class="small">${done} / ${total} (${pct}%)</div>
        <div class="progress" aria-hidden="true"><span style="width:${pct}%"></span></div>
      </div>
      <button class="openDex" title="Open Dex">Open Dex</button>
    `;
    row
      .querySelector(".openDex")
      .addEventListener("click", () => openDexModal(gameKey, genKey));
    return row;
  }

  function isMonCompleted(selectedValue, game) {
    if (!game) return false;
    const v = selectedValue || "unknown";
    const comps = game.completionFlags || ["caught"];
    return comps.includes(v);
  }

  // ===== Dex Modal (per game) =====
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modalClose");
  const dexGrid = document.getElementById("dexGrid");
  const dexSearch = document.getElementById("dexSearch");
  const dexSelectAll = document.getElementById("dexSelectAll");
  const dexClearAll = document.getElementById("dexClearAll");

  function openDexModal(gameKey, genKey) {
    state.dexModalFor = gameKey;
    const game = ((DATA.games && DATA.games[genKey]) || []).find(
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
    render(); // refresh summary
  }
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  modalClose.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  function prettyFlag(f) {
    switch (f) {
      case "shiny_alpha":
        return "Shiny Alpha";
      case "alpha_caught":
        return "Alpha Caught";
      default:
        return f.replace("_", " ").replace(/\b\w/g, (s) => s.toUpperCase());
    }
  }

  const isAlpha = (v) => v === "alpha_caught" || v === "shiny_alpha";
  const isShiny = (v) => v === "shiny" || v === "shiny_alpha";

  // ===== Helpers for image selection + filters =====
  function getShinyPathFrom(it) {
    const direct = it.imgShiny || it.img_shiny;
    if (direct) return direct;
    if (!it.img) return it.img;
    const dot = it.img.lastIndexOf(".");
    if (dot === -1) return it.img + "_shiny";
    return it.img.slice(0, dot) + "_shiny" + it.img.slice(dot);
  }

  function getImageForStatus(it, status) {
    if (
      !status ||
      status === "unknown" ||
      status === "seen" ||
      status === "alpha_seen"
    ) {
      return it.img || "";
    }
    if (status === "shiny" || status === "shiny_alpha") {
      return getShinyPathFrom(it) || it.img || "";
    }
    // caught / alpha_caught => normal
    return it.img || "";
  }

  function getFilterClassForStatus(status) {
    if (!status || status === "unknown") return "status-unknown";
    if (status === "seen") return "status-seen";
    return "status-normal";
  }
  function renderBadges(status) {
    const icons = [];
    if (isShiny(status) && DATA.marks && DATA.marks.shiny) {
      icons.push(`<img src="${DATA.marks.shiny}" alt="Shiny badge" />`);
    }
    if (isAlpha(status) && DATA.marks && DATA.marks.alpha) {
      icons.push(`<img src="${DATA.marks.alpha}" alt="Alpha badge" />`);
    }
    return icons.length ? `<div class="badges">${icons.join("")}</div>` : "";
  }

  function renderDexGrid() {
    const gameKey = state.dexModalFor;
    if (!gameKey) return;

    // Find which gen this game belongs to
    const genKey = DATA.tabs
      .map((t) => t.key)
      .find((gk) => (DATA.games[gk] || []).some((g) => g.key === gameKey));
    const game = ((DATA.games && DATA.games[genKey]) || []).find(
      (g) => g.key === gameKey
    );

    const dex = DATA.dex && DATA.dex[gameKey] ? DATA.dex[gameKey] : [];
    const q = dexSearch.value.trim().toLowerCase();
    const options = game ? game.flags : ["shiny", "caught", "seen", "unknown"]; // allowed values for the select
    const statusMap = state.dexStatus.get(gameKey) || {};

    const filtered = dex.filter((it) =>
      `${it.id} ${it.name}`.toLowerCase().includes(q)
    );
    dexGrid.innerHTML = "";
    for (const it of filtered) {
      const current = statusMap[it.id] || "unknown";
      const src = getImageForStatus(it, current);
      const cls = getFilterClassForStatus(current);
      const badgesHTML = renderBadges(current);

      const card = document.createElement("article");
      card.className = "card";
      card.setAttribute("role", "listitem");
      card.innerHTML = `
  <div class="thumb ${cls}">
    ${badgesHTML}
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
  <div class="meta">
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
  </div>
`;

      const select = card.querySelector("select.flag-select");
      select.addEventListener("change", () => {
        const newVal = select.value;

        const curr = state.dexStatus.get(gameKey) || {};
        curr[it.id] = newVal;
        state.dexStatus.set(gameKey, curr);
        save();

        // Update image + filter + badges live
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
        if (newBadgesHTML) {
          thumb.insertAdjacentHTML("afterbegin", newBadgesHTML);
        }
      });

      dexGrid.appendChild(card);
    }
  }

  dexSearch.addEventListener("input", renderDexGrid);

  // Select All = set all mons to first completion flag (or 'caught' by default)
  dexSelectAll.addEventListener("click", () => {
    const gameKey = state.dexModalFor;
    if (!gameKey) return;
    const dex = DATA.dex && DATA.dex[gameKey] ? DATA.dex[gameKey] : [];
    const genKey = DATA.tabs
      .map((t) => t.key)
      .find((gk) => (DATA.games[gk] || []).some((g) => g.key === gameKey));
    const game = ((DATA.games && DATA.games[genKey]) || []).find(
      (g) => g.key === gameKey
    );
    const completeValue =
      (game && game.completionFlags && game.completionFlags[0]) || "caught";

    const curr = state.dexStatus.get(gameKey) || {};
    dex.forEach((m) => {
      curr[m.id] = completeValue;
    });
    state.dexStatus.set(gameKey, curr);
    save();
    renderDexGrid();
    render();
  });

  // Clear All = set all mons to 'unknown'
  dexClearAll.addEventListener("click", () => {
    const gameKey = state.dexModalFor;
    if (!gameKey) return;
    const dex = DATA.dex && DATA.dex[gameKey] ? DATA.dex[gameKey] : [];
    const curr = state.dexStatus.get(gameKey) || {};
    dex.forEach((m) => {
      curr[m.id] = "unknown";
    });
    state.dexStatus.set(gameKey, curr);
    save();
    renderDexGrid();
    render();
  });

  // Checklist toolbar
  document.getElementById("selectAll").addEventListener("click", () => {
    const gen = activeGenTab();
    const items = DATA[gen.key] || [];
    const set = new Set(
      items.filter((x) => x.kind !== "dex-summary").map((x) => x.id)
    );
    state.checked.set(gen.key, set);
    save();
    render();
  });
  document.getElementById("clearAll").addEventListener("click", () => {
    const gen = activeGenTab();
    state.checked.set(gen.key, new Set());
    save();
    render();
  });
  search.addEventListener("input", render);
  showChecked.addEventListener("change", render);

  // Initial paint
  render();
})();
