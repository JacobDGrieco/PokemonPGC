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

export function tierFromCount(count, tiers) {
  let t = 0;
  for (const th of tiers) if (count >= th) t++;
  return t; // 0..tiers.length
}

export function getTaskCompletion(task) {
  if (task?.type === "tiered" && Array.isArray(task.tiers)) {
    const steps = task.tiers.length;
    const tier = Math.max(0, Math.min(task.currentTier ?? 0, steps));
    return steps === 0 ? 1 : tier / steps; // 0..1
  }
  // leaf tasks (checkbox)
  if (!Array.isArray(task?.children) || task.children.length === 0) {
    return task?.done ? 1 : 0;
  }
  // groups: average of children
  const kids = task.children;
  if (!kids.length) return 0;
  const sum = kids.reduce((a, c) => a + getTaskCompletion(c), 0);
  return sum / kids.length;
}

// Optional: centralize tree counting used by ring UIs
export function summarizeTasks(tasksArray) {
  // returns {done, total} where "done" counts fractional completions
  let done = 0, total = 0;
  const walk = (arr) => {
    for (const t of arr) {
      if (Array.isArray(t.children) && t.children.length) {
        walk(t.children);
      } else {
        done += getTaskCompletion(t);
        total += 1;
      }
    }
  };
  walk(tasksArray);
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
  if (isGCEASection(sectionObj)) {
    // 1) Regional species
    pcts.push(dexPctFor(gameKey, genKey));

    // 2) National species (if exists for this game)
    const baseKey = String(gameKey).endsWith("-national")
      ? String(gameKey).replace(/-national$/, "")
      : String(gameKey);
    const natKey = `${baseKey}-national`;
    const hasNat = !!(window.DATA?.dex?.[natKey]?.length);   // <-- define hasNat

    if (hasNat) {
      pcts.push(dexPctFor(natKey, genKey));
    }

    // 3) Forms meter (single): prefer National dex if it exists; else Regional
    if (typeof window.PPGC?.formsPctFor === "function") {
      const formsDexKey = hasNat ? natKey : gameKey;
      const chosenHasForms = (window.DATA?.dex?.[formsDexKey] || [])
        .some(m => Array.isArray(m.forms) && m.forms.length);
      if (chosenHasForms) {
        const formsPct = window.PPGC.formsPctFor(formsDexKey, genKey);
        if (isFinite(formsPct)) pcts.push(formsPct);
      }
    }
  }

  if (Array.isArray(sectionMeters)) {
    for (const m of sectionMeters) {
      try {
        const v = m(sectionObj, gameKey, genKey);
        if (typeof v === "number" && isFinite(v)) pcts.push(v);
      } catch { }
    }
  }
  return pcts;
}
