import { save } from "./store.js";

export function dexSummaryCardFor(gameKey, genKey, store) {
  const games = window.DATA.games?.[genKey] || [];
  const game = games.find((g) => g.key === gameKey);
  const dex = window.DATA.dex?.[gameKey] || [];
  const statusMap = store.dexStatus.get(gameKey) || {};

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
  const extraDone = extraDex.filter((m) => isCompleted(statusMap[m.id])).length;
  const extraTotal = extraDex.length;

  const extendedDone = baseDone + extraDone;
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

  const card = document.createElement("section");
  card.className = "card";
  card.innerHTML = `
    <div class="card-hd"><h3>Pokédex — <span class="small">${
      game?.label || gameKey
    }</span></h3></div>
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

export function dexPctFor(gameKey, genKey, store) {
  const games = window.DATA.games?.[genKey] || [];
  const game = games.find((g) => g.key === gameKey);
  const dex = window.DATA.dex?.[gameKey] || [];
  const statusMap = store.dexStatus.get(gameKey) || {};

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
  const extraDone = extraDex.filter((m) => isCompleted(statusMap[m.id])).length;

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
  function getImageForStatus(it, status) {
    if (!status || status === "unknown" || status === "seen")
      return it.img || "";
    if (status === "shiny" || status === "shiny_alpha")
      return it.imgS || it.img || "";
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
                    }>${opt
                      .replace(/_/g, " ")
                      .replace(/\b\w/g, (s) => s.toUpperCase())}</option>`
                )
                .join("")}
            </select>
          </div>
        </div>`;
      const select = card.querySelector("select.flag-select");
      select.addEventListener("change", () => {
        const newVal = select.value;
        const curr = store.dexStatus.get(gameKey) || {};
        curr[it.id] = newVal;
        store.dexStatus.set(gameKey, curr);
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
        oldBadges?.remove();
        const newBadgesHTML = renderBadges(newVal);
        if (newBadgesHTML)
          thumb.insertAdjacentHTML("afterbegin", newBadgesHTML);
      });
      dexGrid.appendChild(card);
    });
  }

  function openDexModal(gameKey, genKey) {
    store.state.dexModalFor = gameKey;
    const game = (window.DATA.games?.[genKey] || []).find(
      (g) => g.key === gameKey
    );
    modalTitle.textContent = `Dex Editor — ${game ? game.label : gameKey}`;
    dexSearch.value = "";
    renderDexGrid();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    store.state.dexModalFor = null;
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
      if (!m.mythical) curr[m.id] = "caught";
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
    });
    store.dexStatus.set(gameKey, curr);
    save();
    renderDexGrid();
  });

  return api;
}
