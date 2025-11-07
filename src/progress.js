import { isGCEASection } from "./store.js";

export function countLeavesDoneTotal(tasksArr) {
  let done = 0,
    total = 0;
  if (!Array.isArray(tasksArr)) return { done, total };
  for (const t of tasksArr) {
    const kids = Array.isArray(t.children) ? t.children : [];
    if (kids.length) {
      const sub = countLeavesDoneTotal(kids);
      done += sub.done;
      total += sub.total;
    } else {
      total += 1;
      if (t.done) done += 1;
    }
  }
  return { done, total };
}

export function allGamesList() {
  const out = [];
  const gens = window.DATA.games || {};
  for (const genKey of Object.keys(gens)) {
    for (const g of gens[genKey]) out.push({ genKey, game: g });
  }
  return out;
}

export function getGameRowsForGen(genKey) {
  const all = (window.DATA.games?.[genKey] || []).slice();
  const byKey = new Map(all.map((g) => [g.key, g]));
  const cfg = window.DATA.layout?.gameRows?.[genKey] || null;
  if (!cfg) return [all];
  const rows = [],
    used = new Set();
  for (const row of cfg) {
    const rowGames = [];
    for (const key of row) {
      const g = byKey.get(key);
      if (g) {
        rowGames.push(g);
        used.add(key);
      }
    }
    if (rowGames.length) rows.push(rowGames);
  }
  const leftovers = all.filter((g) => !used.has(g.key));
  if (leftovers.length) rows.push(leftovers);
  return rows;
}

export function getSectionAddonPcts(
  sectionObj,
  gameKey,
  genKey,
  dexPctFor,
  sectionMeters
) {
  const pcts = [];
  if (isGCEASection(sectionObj)) pcts.push(dexPctFor(gameKey, genKey));
  if (Array.isArray(sectionMeters)) {
    for (const m of sectionMeters) {
      try {
        const v = m(sectionObj, gameKey, genKey);
        if (typeof v === "number" && isFinite(v)) pcts.push(v);
      } catch {}
    }
  }
  return pcts;
}
