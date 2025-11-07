import { save, uid } from "./store.js";

function gameKeyFromSection(sectionId) {
  return (sectionId || "").split("-")[0] || "";
}

function getAccentColor() {
  const rs = getComputedStyle(document.documentElement);
  const cssVar = rs.getPropertyValue('--accent')?.trim();
  return cssVar && cssVar !== 'initial' ? cssVar : '#6aa0ff';
}
// try multiple spots in DATA to find a per-game accent
function resolveAccentForSection(sectionId) {
  const fallback = getAccentColor();
  const gameKey = gameKeyFromSection(sectionId);
  const gens = window.DATA?.games || {};
  let game = null;
  for (const arr of Object.values(gens)) {
    const found = (arr || []).find(g => g.key === gameKey);
    if (found) { game = found; break; }
  }
  const cand =
    game?.color || game?.accent || game?.theme?.accent ||
    window.DATA?.colors?.[gameKey] ||
    window.DATA?.themes?.[gameKey]?.accent;
  return (typeof cand === "string" && cand.trim()) ? cand : fallback;
}

export function ensureSections(gameKey) {
  const seed = (window.DATA.sections && window.DATA.sections[gameKey]) || [];
  if (!window.PPGC._sectionsStore) window.PPGC._sectionsStore = new Map();
  let arr = window.PPGC._sectionsStore.get(gameKey);
  if (!arr || (!arr.length && seed.length)) {
    window.PPGC._sectionsStore.set(
      gameKey,
      seed.map((s) => ({ id: s.id || uid(), title: s.title || "Section" }))
    );
    save();
    arr = window.PPGC._sectionsStore.get(gameKey);
  }
  if (!arr) {
    window.PPGC._sectionsStore.set(gameKey, []);
    arr = window.PPGC._sectionsStore.get(gameKey);
  }
  return arr;
}

export function buildTaskIndex(tasks) {
  const map = new Map();
  (function walk(arr, parent = null) {
    for (const t of arr) {
      map.set(t.id, { task: t, parent });
      if (Array.isArray(t.children) && t.children.length) walk(t.children, t);
    }
  })(tasks);
  return map;
}

function forEachDescendant(task, fn) {
  const kids = Array.isArray(task.children) ? task.children : [];
  for (const ch of kids) {
    fn(ch);
    forEachDescendant(ch, fn);
  }
}

export function setDescendantsDone(task, val) {
  task.done = val;
  const kids = Array.isArray(task.children) ? task.children : [];
  for (const ch of kids) setDescendantsDone(ch, val);
}

export function renderTaskLayout(tasks, sectionId, setTasks, rowsSpec) {
  const rootTasks = tasks;
  const index = buildTaskIndex(rootTasks);
  const cbById = new Map();
  const wrap = document.createElement("div");
  wrap.className = "task-layout";
  const used = new Set();

  function recomputeUp(node) {
    let cur = node;
    while (true) {
      const entry = index.get(cur.id) || { parent: null };
      const parent = entry.parent;
      if (!parent) break;
      const kids = Array.isArray(parent.children) ? parent.children : [];
      parent.done = kids.length ? kids.every((k) => !!k.done) : !!parent.done;
      cur = parent;
    }
  }

  function makeInlineItem(t) {
    const item = document.createElement("div");
    const entry = index.get(t.id);
    const isSub = !!(entry && entry.parent);
    item.className = "task-item " + (isSub ? "is-subtask" : "is-main");
    const imgHTML = t.img ? `<img class="task-item-img" src="${t.img}" alt="">` : "";

    // checkbox + text shell
    item.innerHTML = isSub
      ? `${imgHTML}
       <label class="task-item-body">
         <input type="checkbox" ${t.done ? "checked" : ""} />
         <div class="small task-item-text">${t.text}</div>
       </label>`
      : `<label class="task-item-body">
         <input type="checkbox" ${t.done ? "checked" : ""} />
         <div class="small task-item-text">${t.text}</div>
       </label>${imgHTML}`;

    const imgEl = item.querySelector("img.task-item-img");
    imgEl?.addEventListener("error", () => imgEl.remove());

    const cb = item.querySelector('input[type="checkbox"]');
    cbById.set(t.id, cb);

    // --- NEW: add slider below the text if tiered
    let tieredWrap = null;
    if (t.type === "tiered") {
      const accent = resolveAccentForSection(sectionId);
      tieredWrap = renderTieredControls(t, cb, accent);
      // persist + recompute when slider moves
      tieredWrap.addEventListener("tiered-change", () => {
        // bubble up completion like the checkbox path
        let cur = t;
        while (true) {
          const e = index.get(cur.id) || { parent: null };
          const parent = e.parent;
          if (!parent) break;
          const kids = Array.isArray(parent.children) ? parent.children : [];
          parent.done = kids.length ? kids.every((k) => !!k.done) : !!parent.done;
          const parentCb = cbById.get(parent.id);
          if (parentCb) parentCb.checked = !!parent.done;
          cur = parent;
        }
        setTasks(sectionId, rootTasks); // <-- SAVE to persist slider position
        window.PPGC?.renderAll?.();
      });
      // place below label
      const label = item.querySelector(".task-item-body");
      label.insertAdjacentElement('afterend', tieredWrap);
    }

    cb.addEventListener("change", () => {
      const hasKids = Array.isArray(t.children) && t.children.length > 0;

      if (hasKids) {
        setDescendantsDone(t, cb.checked);
      } else if (t.type === "tiered") {
        // checkbox drives the slider: max when checked, 0 when unchecked
        t.done = cb.checked;
        tieredWrap?._setTierFromDone?.();
      } else {
        t.done = cb.checked;
      }

      // Update descendant checkbox UIs immediately
      forEachDescendant(t, (child) => {
        const childCb = cbById.get(child.id);
        if (childCb) childCb.checked = !!child.done;
      });

      // Recompute ancestors' done and update their checkbox UIs
      let cur = t;
      while (true) {
        const e = index.get(cur.id) || { parent: null };
        const parent = e.parent;
        if (!parent) break;
        const kids = Array.isArray(parent.children) ? parent.children : [];
        parent.done = kids.length ? kids.every((k) => !!k.done) : !!parent.done;
        const parentCb = cbById.get(parent.id);
        if (parentCb) parentCb.checked = !!parent.done;
        cur = parent;
      }
      setTasks(sectionId, rootTasks);
    });

    return item;
  }

  for (const row of rowsSpec) {
    const rowEl = document.createElement("div");
    rowEl.className = "task-row task-inline";
    const includesSub = row.some((id) => {
      const entry = index.get(id);
      return entry && entry.parent;
    });
    if (includesSub) rowEl.classList.add("has-subtasks");

    for (const id of row) {
      const entry = index.get(id);
      if (!entry) continue;
      used.add(id);
      rowEl.appendChild(makeInlineItem(entry.task));
    }
    wrap.appendChild(rowEl);
  }

  const leftovers = [];
  (function collect(arr) {
    for (const t of arr) {
      if (!used.has(t.id)) leftovers.push(t);
      const kids = Array.isArray(t.children) ? t.children : [];
      for (const ch of kids) {
        /* children rendered with parent */
      }
    }
  })(rootTasks);

  if (leftovers.length) {
    const divider = document.createElement("div");
    divider.className = "small";
    divider.style.opacity = ".7";
    divider.style.margin = "6px 2px";
    divider.textContent = "More:";
    wrap.appendChild(divider);
    wrap.appendChild(
      renderTaskList(leftovers, sectionId, setTasks, rootTasks, index, cbById)
    );
  }
  return wrap;
}

function renderTieredControls(t, cb, accentColor) {
  const wrap = document.createElement('div');
  wrap.className = 'tiered'; // you already have styles in tasks.css

  // slider 0..tiers.length
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = 0;
  slider.max = (Array.isArray(t.tiers) ? t.tiers.length : 0);
  slider.step = 1;
  slider.value = t.currentTier ?? 0;
  slider.className = 'tiered-slider';
  const acc = accentColor || getAccentColor();
  try { slider.style.accentColor = acc; } catch { }
  slider.style.setProperty('--tier-accent', acc);

  // percent text (optional, looks nice)
  const pct = document.createElement('div');
  pct.className = 'tiered-percent';
  const updatePct = () => {
    const steps = Array.isArray(t.tiers) ? t.tiers.length : 0;
    const v = steps ? (Math.min(t.currentTier ?? 0, steps)) : 1;
    pct.textContent = v + "/" + steps;
  };
  updatePct();

  // keep checkbox <-> slider in sync
  const syncDoneFromTier = () => {
    const steps = Array.isArray(t.tiers) ? t.tiers.length : 0;
    t.done = steps ? (t.currentTier >= steps) : !!t.done;
    if (cb) cb.checked = !!t.done;
  };
  syncDoneFromTier();

  slider.addEventListener('input', () => {
    t.currentTier = Number(slider.value);
    syncDoneFromTier();
    updatePct();
    wrap.dispatchEvent(new CustomEvent("tiered-input", { bubbles: true }));
  });
  slider.addEventListener('change', () => {
    wrap.dispatchEvent(new CustomEvent("tiered-change", { bubbles: true }));
  });

  // expose for outer code to re-sync when checkbox toggles
  wrap._setTierFromDone = () => {
    const steps = Array.isArray(t.tiers) ? t.tiers.length : 0;
    t.currentTier = t.done ? steps : 0;
    slider.value = String(t.currentTier);
    updatePct();
  };

  wrap.appendChild(slider);
  wrap.appendChild(pct);
  return wrap;
}

export function renderTaskList(
  tasks,
  sectionId,
  setTasks,
  allTasksRef,
  indexOpt,
  cbByIdOpt
) {
  const container = document.createElement("div");
  container.className = "task-list";
  const allRef = allTasksRef || tasks;
  const index = indexOpt || buildTaskIndex(allRef);
  const cbById = cbByIdOpt || new Map();

  tasks.forEach((t) => {
    const row = document.createElement("div");
    row.className = "task-row";

    // base shell
    row.innerHTML = `<input type="checkbox" ${t.done ? "checked" : ""} />
                   <div class="small" style="flex:1">${t.text}</div>`;

    const cb = row.querySelector('input[type="checkbox"]');
    cbById.set(t.id, cb);

    // --- NEW: tiered slider goes under the text
    let tieredWrap = null;
    if (t.type === "tiered") {
      const accent = resolveAccentForSection(sectionId);
      tieredWrap = renderTieredControls(t, cb, accent);
      row.appendChild(tieredWrap);
      tieredWrap.addEventListener("tiered-change", () => {
        // recompute ancestors
        let cur = t;
        while (true) {
          const e = index.get(cur.id) || { parent: null };
          const parent = e.parent;
          if (!parent) break;
          const kids = Array.isArray(parent.children) ? parent.children : [];
          parent.done = kids.length ? kids.every((k) => !!k.done) : !!parent.done;
          const parentCb = cbById.get(parent.id);
          if (parentCb) parentCb.checked = !!parent.done;
          cur = parent;
        }
        setTasks(sectionId, allRef); // <-- SAVE
      });
    }

    cb.addEventListener("change", () => {
      const hasKids = Array.isArray(t.children) && t.children.length > 0;

      if (hasKids) {
        setDescendantsDone(t, cb.checked);
      } else if (t.type === "tiered") {
        t.done = cb.checked;
        tieredWrap?._setTierFromDone?.();
      } else {
        t.done = cb.checked;
      }

      // Update descendant checkbox UIs
      forEachDescendant(t, (child) => {
        const childCb = cbById.get(child.id);
        if (childCb) childCb.checked = !!child.done;
      });

      // Recompute and update ancestors
      let cur = t;
      while (true) {
        const e = index.get(cur.id) || { parent: null };
        const parent = e.parent;
        if (!parent) break;
        const kids = Array.isArray(parent.children) ? parent.children : [];
        parent.done = kids.length ? kids.every((k) => !!k.done) : !!parent.done;
        const parentCb = cbById.get(parent.id);
        if (parentCb) parentCb.checked = !!parent.done;
        cur = parent;
      }
      setTasks(sectionId, allRef);
    });

    container.appendChild(row);
  });

  return container;
}

export function bootstrapTasks(sectionId, tasksStore) {
  const seed = (window.DATA.tasks && window.DATA.tasks[sectionId]) || [];
  if (tasksStore.has(sectionId)) {
    const current = tasksStore.get(sectionId) || [];
    const seedIndex = new Map();
    (function indexSeed(arr) {
      for (const t of arr) {
        seedIndex.set(t.id, t);
        if (Array.isArray(t.children)) indexSeed(t.children);
      }
    })(seed);
    let changed = false;
    (function sync(arr) {
      for (const t of arr) {
        const s = seedIndex.get(t.id);
        if (s && s.img && !t.img) {
          t.img = s.img;
          changed = true;
        }
        if (s && Array.isArray(s.tiers) && !Array.isArray(t.tiers)) {
          t.tiers = [...s.tiers];
          changed = true;
        }
        if (s && s.unit && !t.unit) {
          t.unit = s.unit;
          changed = true;
        }
        if (Array.isArray(t.children)) sync(t.children);
      }
    })(current);
    if (changed) {
      tasksStore.set(sectionId, current);
      save();
    }
    return;
  }
  tasksStore.set(sectionId, seed.map(cloneTaskDeep));
  save();

  function cloneTaskDeep(t) {
    return {
      id: t.id || uid(),
      text: t.text || "Task",
      done: !!t.done,
      img: t.img || null,
      type: t.type || null,
      tiers: Array.isArray(t.tiers) ? [...t.tiers] : undefined,
      unit: t.unit || null,
      currentTier: typeof t.currentTier === 'number' ? t.currentTier : 0,
      currentCount: typeof t.currentCount === 'number' ? t.currentCount : 0,
      children: Array.isArray(t.children) ? t.children.map(cloneTaskDeep) : [],
    };
  }
}
