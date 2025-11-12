// src/distributions.js
import { save } from "./store.js";

const GENDER = {
  male: "♂", // '&#9794;'
  female: "♀", // '&#9792;'
};
// normalize gender -> symbols string
function renderGenderSymbols(raw) {
  const v = (raw ?? "").toString().trim().toLowerCase();
  if (!v) return "";
  if (v === "male" || v === "m" || v === "♂") return GENDER.male;
  if (v === "female" || v === "f" || v === "♀") return GENDER.female;
  if (v === "mf" || v === "fm" || v === "both" || v === "m/f" || v === "f/m")
    return `${GENDER.male}${GENDER.female}`;
  return ""; // unknown/none
}
// accept ["Psychic", ...] or [{name:"Psychic", img:"..."}, ...]
function normalizeMoves(moves) {
  return (Array.isArray(moves) ? moves : [])
    .filter(Boolean)
    .map(m => {
      if (typeof m === "string") return { name: m, img: null, type: null };
      return { name: m.name, img: m.img || null, type: m.type || null };
    });
}
// ball: string OR { name, img }
function normalizeBall(ball) {
  if (!ball) return { name: "", img: null };
  if (typeof ball === "string") return { name: ball, img: null };
  return { name: ball.name || "", img: ball.img || null };
}
// ribbons: array of string OR array of {name,img}
function normalizeRibbons(ribbons) {
  return (Array.isArray(ribbons) ? ribbons : [])
    .filter(Boolean)
    .map((r) =>
      typeof r === "string" ? { name: r, img: null } : { name: r.name, img: r.img || null }
    );
}
// held item: string OR { name, img }
function asList(v) {
  if (v == null) return [];
  return Array.isArray(v) ? v.filter(Boolean) : [v];
}
// strings -> {name,img:null}, objects -> {name,img}, flatten list
function normalizeNameImgList(v) {
  return asList(v).map(x =>
    typeof x === "string" ? { name: x, img: null } : { name: x.name || "", img: x.img || null }
  );
}
function normalizeIdList(v) {
  // accept "240101", ["240101","777777"], or objects like {label:"JP", value:"240101"}
  return asList(v).map(x => {
    if (typeof x === "string" || typeof x === "number") return String(x);
    if (x && typeof x === "object" && ("value" in x || "id" in x)) return String(x.value ?? x.id);
    return String(x ?? "");
  }).filter(Boolean);
}
// --- Date parsing/formatting (MMM DD, YYYY → MMM DD, YYYY) ---
function parseToISOParts(s) {
  if (!s) return null;
  const str = String(s).trim();

  // If it's YYYY-MM-DD, build a UTC date to avoid TZ shifts
  const m = str.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) {
    const y = +m[1], mo = +m[2] - 1, d = +m[3];
    return new Date(Date.UTC(y, mo, d));
  }

  // Fallback to native parsing (already UTC-ish for ISO with time, or locale for text)
  const dt = new Date(str);
  return isNaN(+dt) ? null : dt;
}
function fmtMMMDDYYYY(dt) {
  return dt.toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",   // <- ensure no TZ shift on display
  });
}
// Accept either a single "Available: 2025-01-01 → 2025-02-29" string or {start:"...", end:"..."}
function formatDateRange(raw) {
  if (!raw) return "";

  // New object shape (preferred)
  if (raw && typeof raw === "object" && ("start" in raw || "end" in raw)) {
    const a = raw.start ? parseToISOParts(raw.start) : null;
    const endVal = raw.end;
    const isOnwards = typeof endVal === "string" && endVal.trim().toLowerCase() === "onwards";
    const b = !isOnwards && endVal ? parseToISOParts(endVal) : null;

    if (a && isOnwards) return `${fmtMMMDDYYYY(a)} → onwards`;
    if (a && b) return `${fmtMMMDDYYYY(a)} → ${fmtMMMDDYYYY(b)}`;
    if (a) return `${fmtMMMDDYYYY(a)}`;
    if (b) return `${fmtMMMDDYYYY(b)}`;
    return "";
  }

  // Legacy string like "2025-01-01 → 2025-02-29" (we still parse if present)
  const m = String(raw).match(/(\d{4}-\d{2}-\d{2}).*?(\d{4}-\d{2}-\d{2})/);
  if (m) {
    const a = parseToISOParts(m[1]); const b = parseToISOParts(m[2]);
    if (a && b) return `${fmtMMMDDYYYY(a)} -> ${fmtMMMDDYYYY(b)}`;
  } else {
    const d = parseToISOParts(String(raw).trim());
    if (d) return fmtMMMDDYYYY(d);
  }
  return String(raw);
}

// --------- Percent for the section ring ----------
export function distributionsPctFor(gameKey) {
  const list = (window.DATA?.distributions?.[gameKey] || []).filter(Boolean).reverse();
  const total = list.length;
  if (!total) return 0;

  // status record: { [distId]: true }
  const statusMap =
    (window.store?.distributionsStatus instanceof Map
      ? window.store.distributionsStatus.get(gameKey)
      : null) || {};
  let done = 0;
  for (const it of list) {
    const id = String(it.id);
    if (statusMap[id]) done++;
  }
  return (done / total) * 100;
}

// --------- Card renderer ----------
export function renderDistributionCardsFor(gameKey, genKey, store) {
  const wrap = document.createElement("div");
  wrap.className = "dist-grid";

  const list = (window.DATA?.distributions?.[gameKey] || []).filter(Boolean).reverse();

  // read current status bucket for this game
  const bucket =
    (store.distributionsStatus instanceof Map
      ? store.distributionsStatus.get(gameKey)
      : null) || {};

  const setChecked = (distId, val) => {
    const rec =
      (store.distributionsStatus instanceof Map
        ? store.distributionsStatus.get(gameKey)
        : null) || {};
    rec[String(distId)] = !!val;
    if (store.distributionsStatus instanceof Map) {
      store.distributionsStatus.set(gameKey, rec);
    }
    save();
    // keep header progress fresh
    window.PPGC?.refreshSectionHeaderPct?.();
  };

  const fmt = (v) => (v == null || v === "" ? "—" : String(v));
  const imgOnErr = (img) => img && img.addEventListener("error", () => img.remove());

  for (const d of list) {
    const checked = !!bucket[String(d.id)];
    const card = document.createElement("article");
    card.className = "dist-card" + (checked ? " is-done" : "");
    card.setAttribute("role", "group");
    card.setAttribute("aria-label", d?.name || d?.pokemon || "Distribution");

    // main image (prefer d.image, fallback to d.sprite)
    const evtTitle = d.eventTitle || "";
    const imgSrc = d.image || d.sprite || "";
    const gender = d.gender ?? d.sex;
    const startRaw = d["start-date"] ?? d.start ?? null;
    const endRaw = d["end-date"] ?? d.end ?? null;
    const dateLine =
      formatDateRange({ start: startRaw, end: endRaw }) ||
      formatDateRange(d.dates || d.date);
    const ballNorm = normalizeBall(d.ball || d.ballImg || d.ballObj);
    const ribbonsNorm = normalizeRibbons(d.ribbons || d.ribbon || d.ribbonList);
    const otList = asList(d.ot);
    const idList = normalizeIdList(d.tid ?? d.idno ?? d.id);
    const heldList = normalizeNameImgList(d.item || d.heldItem || d.itemObj || d.itemImg);
    const movesNorm = normalizeMoves(d.moves);
    const extraLines = Array.isArray(d.extra) ? d.extra : (d.extra ? [d.extra] : []);


    card.innerHTML = `
      <div class="dist-event-title" title="${evtTitle}">${evtTitle}</div>
      <div class="dist-hd">
        <div class="dist-hd-left">
          <div class="dist-name">
            ${fmt(d.name || d.pokemon)}
            <span class="dist-gender">${renderGenderSymbols(gender)}</span>
          </div>
        </div>

        <div class="dist-hd-center">
          ${dateLine ? `<div class="dist-dates">${dateLine}</div>` : ``}
        </div>

        <div class="dist-hd-right dist-badges">
          ${ballNorm.img
        ? `<img class="badge ball" alt="${fmt(ballNorm.name)}" title="${fmt(ballNorm.name)}" src="${ballNorm.img}">`
        : (ballNorm.name ? `<span class="badge ball-label">${fmt(ballNorm.name)}</span>` : "")
      }
          ${ribbonsNorm.map(r => r.img
        ? `<img class="badge ribbon" alt="${fmt(r.name)}" title="${fmt(r.name)}" src="${r.img}">`
        : `<span class="badge ribbon-label">${fmt(r.name)}</span>`
      ).join("")}
        </div>
      </div>

      <div class="dist-body">
        <div class="dist-img">
          ${imgSrc ? `<img alt="${fmt(d.name || d.pokemon)}" src="${imgSrc}">` : ""}
        </div>

        <div class="dist-specs-wrap">
          <dl class="dist-specs">
            <div><dt>Level</dt><dd>${fmt(d.level)}</dd></div>
            <div><dt>Ability</dt><dd>${fmt(d.ability)}</dd></div>

            <div><dt>OT</dt>
              <dd>${otList.length ? otList.map(o => `<span class="tag ot">${o}</span>`).join("") : "—"}</dd>
            </div>

            <div><dt>Nature</dt><dd>${fmt(d.nature)}</dd></div>

            <div><dt>ID</dt>
              <dd>${idList.length ? idList.map(id => `<span class="tag tid">${id}</span>`).join("") : "—"}</dd>
            </div>

            <div>
              <dt>Held Item</dt>
              <dd class="held-items">
                ${heldList.length
        ? heldList.map(h => h.img
          ? `<img class="held-item-img" alt="${fmt(h.name)}" title="${fmt(h.name)}" src="${h.img}">`
          : `<span class="tag item">${fmt(h.name)}</span>`
        ).join("")
        : "—"}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      ${movesNorm.length ? `
        <div class="dist-moves diamond">
          ${[0, 1, 2, 3].map(i => {
          const mv = movesNorm[i];
          if (!mv) return `<div class="mv"></div>`;
          const typeClass = mv.type ? ` type-${String(mv.type).toLowerCase()}` : "";
          return `
              <div class="mv${typeClass}" ${mv.type ? `data-type="${mv.type}"` : ""}>
                ${mv.img
              ? `<img alt="${fmt(mv.name || 'Move')}" title="${fmt(mv.name)}" src="${mv.img}">`
              : `<span class="mv-label">${fmt(mv.name)}</span>`
            }
              </div>`;
        }).join("")}
        </div>` : ""}

      <div class="dist-details">
        ${d.details ? `<div class="line">${fmt(d.details)}</div>` : ""}
        ${extraLines.map((t) => `<div class="line small">${fmt(t)}</div>`).join("")}
      </div>

      <button class="dist-toggle" aria-pressed="${checked ? "true" : "false"}">
        ${checked ? "Uncheck" : "Check"}
      </button>
    `;

    // preserve your existing error+toggle wiring
    const img = card.querySelector(".dist-img img");
    imgOnErr(img);
    const btn = card.querySelector(".dist-toggle");
    btn.addEventListener("click", () => {
      const next = !(btn.getAttribute("aria-pressed") === "true");
      btn.setAttribute("aria-pressed", String(next));
      btn.textContent = next ? "Uncheck" : "Check";
      card.classList.toggle("is-done", next);
      setChecked(d.id, next);
    });

    wrap.appendChild(card);
  }

  // Empty state
  if (!list.length) {
    const empty = document.createElement("div");
    empty.className = "small";
    empty.style.opacity = ".8";
    empty.textContent = "No distributions defined for this game.";
    wrap.appendChild(empty);
  }

  return wrap;
}

// --------- Hook a section meter so this counts toward the section % ----------
(function attachSectionMeter() {
  window.PPGC = window.PPGC || {};
  const meter = (sectionObj, gameKey) => {
    const title = (sectionObj?.title || "").trim().toLowerCase();
    if (title !== "distributions") return null;
    return distributionsPctFor(gameKey);
  };
  (window.PPGC.sectionMeters = window.PPGC.sectionMeters || []).push(meter);
})();
