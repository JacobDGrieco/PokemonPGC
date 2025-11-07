import { save, uid } from "./store.js";

// ===== Color helpers =====
function gameKeyFromSection(sectionId) {
  return (sectionId || "").split("-")[0] || "";
}

function getAccentColor() {
  const rs = getComputedStyle(document.documentElement);
  const cssVar = rs.getPropertyValue("--accent")?.trim();
  return cssVar && cssVar !== "initial" ? cssVar : "#6aa0ff";
}

function resolveAccentForSection(sectionId) {
  const fallback = getAccentColor();
  const gameKey = gameKeyFromSection(sectionId);
  const gens = window.DATA?.games || {};
  let game = null;
  for (const arr of Object.values(gens)) {
    const found = (arr || []).find((g) => g.key === gameKey);
    if (found) {
      game = found;
      break;
    }
  }
  const cand =
    game?.color ||
    game?.accent ||
    game?.theme?.accent ||
    window.DATA?.colors?.[gameKey] ||
    window.DATA?.themes?.[gameKey]?.accent;
  return typeof cand === "string" && cand.trim() ? cand : fallback;
}

// ===== Tooltip helpers =====
const TOOLTIP_DELAY_MS = 800;
let _tooltipEl = null;

function ensureTooltipEl() {
  if (_tooltipEl) return _tooltipEl;
  const el = document.createElement("div");
  el.className = "tooltip";
  document.body.appendChild(el);
  _tooltipEl = el;
  return el;
}

function hideTooltip() {
  const el = ensureTooltipEl();
  el.classList.remove("show");
}

function showTooltipForTarget(targetEl, html) {
  const el = ensureTooltipEl();
  el.innerHTML = html;
  el.style.left = "-9999px"; // measure offscreen first
  el.style.top = "-9999px";
  el.removeAttribute("data-placement");

  // place above by default; if clipped, place below
  requestAnimationFrame(() => {
    const r = targetEl.getBoundingClientRect();
    const tw = el.offsetWidth;
    const th = el.offsetHeight;
    const margin = 8;
    let top = r.top - th - margin;
    let left = r.left + r.width / 2 - tw / 2;
    let placement = "top";

    // clamp horizontally
    left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));

    // if offscreen top, flip to bottom
    if (top < 8) {
      top = r.bottom + margin;
      placement = "bottom";
    }
    el.dataset.placement = placement;
    el.style.left = `${Math.round(left)}px`;
    el.style.top = `${Math.round(top)}px`;
    el.classList.add("show");
  });
}

function attachTooltip(el, getHtml) {
  let timer = null;
  const start = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const html = getHtml?.();
      if (html) showTooltipForTarget(el, html);
    }, TOOLTIP_DELAY_MS);
  };
  const stop = () => {
    clearTimeout(timer);
    hideTooltip();
  };
  el.addEventListener("mouseenter", start);
  el.addEventListener("mouseleave", stop);
  el.addEventListener("blur", stop, true);
  // touch support: long-press-ish
  el.addEventListener("touchstart", start, { passive: true });
  el.addEventListener("touchend", stop);
}

// ===== Global task index =====
function _globalTaskIndex() {
  window.PPGC = window.PPGC || {};
  if (!window.PPGC._taskIndexGlobal) window.PPGC._taskIndexGlobal = new Map();
  return window.PPGC._taskIndexGlobal;
}

function _indexSectionTasks(sectionId, tasksArr) {
  const idx = _globalTaskIndex();
  (function walk(arr) {
    for (const t of arr) {
      if (t?.id) idx.set(t.id, { sectionId, task: t });
      if (Array.isArray(t.children) && t.children.length) walk(t.children);
    }
  })(tasksArr || []);
}

function applySyncsFromTask(sourceTask, value) {
  const ids = Array.isArray(sourceTask.syncs) ? sourceTask.syncs : [];
  const ds = Array.isArray(sourceTask.dexSync) ? sourceTask.dexSync : [];

  const tasksStore = window.PPGC?._tasksStoreRef;
  const store = window.PPGC?._storeRef;

  if (tasksStore && ids.length) {
    const idx = _globalTaskIndex();
    for (const targetId of ids) {
      const hit = idx.get(targetId);
      if (!hit) continue;
      const { sectionId, task } = hit;
      const hasKids = Array.isArray(task.children) && task.children.length > 0;
      if (hasKids) setDescendantsDone(task, value);
      else task.done = !!value;

      const arr = tasksStore.get(sectionId) || [];
      tasksStore.set(sectionId, arr);
      save();
      _indexSectionTasks(sectionId, arr);
    }
  }

  if (store && ds.length) {
    for (const link of ds) {
      const gameKey = link.game;
      const entryId = link.id;
      if (!gameKey || typeof entryId !== "number") continue;

      const curr = store.dexStatus.get(gameKey) || {};
      const prev = curr[entryId] || "unknown";
      const next = value ? _promoteToCaughtSafe(prev) : "unknown"; // <- your rule
      curr[entryId] = next;
      store.dexStatus.set(gameKey, curr);
      save();
    }
  }

  const isModalOpen = !!window.PPGC?._storeRef?.state?.dexModalFor;
  if (!isModalOpen) {
    try {
      window.PPGC?.renderAll?.();
    } catch {}
  }
}

// ===== Global Dex sync index ( "game:id" -> [{ sectionId, task }] ) =====
function _ensureIndexes() {
  const tasksStore = window.PPGC?._tasksStoreRef;
  if (!tasksStore) return;
  const ti = _globalTaskIndex();
  const di = _dexSyncIndex();
  if (ti.size && di.size) return;
  // rebuild if empty
  if (typeof tasksStore.forEach === "function") {
    tasksStore.forEach((arr, sectionId) => {
      _indexSectionTasks(sectionId, arr);
      _indexDexSyncs(sectionId, arr);
    });
  }
}

function _setTaskCheckedById(taskId, checked) {
  _ensureIndexes();
  const hit = _globalTaskIndex().get(taskId);
  if (!hit) return false;
  const { sectionId, task } = hit;
  const hasKids = Array.isArray(task.children) && task.children.length > 0;

  // set this task (and children if parent)
  if (hasKids) setDescendantsDone(task, !!checked);
  else task.done = !!checked;

  // recompute ancestors in that section
  const arr = window.PPGC._tasksStoreRef.get(sectionId) || [];
  const index = buildTaskIndex(arr);
  let cur = task;
  while (true) {
    const ent = index.get(cur.id) || { parent: null };
    const parent = ent.parent;
    if (!parent) break;
    const kids = Array.isArray(parent.children) ? parent.children : [];
    parent.done = kids.length ? kids.every((k) => !!k.done) : !!parent.done;
    cur = parent;
  }

  window.PPGC._tasksStoreRef.set(sectionId, arr);
  save();
  // keep indexes fresh for subsequent lookups
  _indexSectionTasks(sectionId, arr);
  _indexDexSyncs(sectionId, arr);
  return true;
}

function _dexSyncIndex() {
  window.PPGC = window.PPGC || {};
  if (!window.PPGC._dexSyncIndex) window.PPGC._dexSyncIndex = new Map();
  return window.PPGC._dexSyncIndex;
}

function _indexDexSyncs(sectionId, tasksArr) {
  const idx = _dexSyncIndex();
  (function walk(arr) {
    for (const t of arr) {
      const ds = Array.isArray(t.dexSync) ? t.dexSync : [];
      for (const link of ds) {
        if (!link || !link.game || typeof link.id !== "number") continue;
        const key = `${link.game}:${link.id}`;
        if (!idx.has(key)) idx.set(key, []);
        idx.get(key).push({ sectionId, task: t });
      }
      if (Array.isArray(t.children) && t.children.length) walk(t.children);
    }
  })(tasksArr || []);
}

function applyDexSyncsFromDexEntries(gameKey, changedMap /* id -> status */) {
  // We read from your global DATA.dex[gameKey] list to find taskSyncs.
  const dexList =
    (window.DATA && window.DATA.dex && window.DATA.dex[gameKey]) || [];
  if (!dexList.length) return;

  // For each changed dex id, find the entry and toggle any linked tasks.
  for (const [idStr, status] of Object.entries(changedMap)) {
    const dexId = Number(idStr);
    const entry = dexList.find((e) => e && e.id === dexId);
    if (!entry || !Array.isArray(entry.taskSyncs) || !entry.taskSyncs.length)
      continue;

    const isComplete =
      status === "caught" ||
      status === "alpha" ||
      status === "shiny" ||
      status === "shiny_alpha";

    for (const taskId of entry.taskSyncs) {
      _setTaskCheckedById(taskId, isComplete);
    }
  }
}
window.PPGC = window.PPGC || {};
window.PPGC.applyDexSyncsFromDexEntries = applyDexSyncsFromDexEntries;

// ===== Building =====
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
    for (const t of arr || []) {
      if (!t || typeof t !== "object" || !t.id) continue; // <-- guard
      map.set(t.id, { task: t, parent });
      if (Array.isArray(t.children) && t.children.length) walk(t.children, t);
    }
  })(tasks || []);
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

function _promoteToCaughtSafe(current) {
  const keep = new Set(["alpha", "shiny", "shiny_alpha", "caught"]);
  return keep.has(current) ? current : "caught";
}

function makeSpacer(height = 12) {
  const el = document.createElement("div");
  el.className = "task-spacer";
  el.style.height = `${height}px`;
  return el;
}

export function renderTaskLayout(tasks, sectionId, setTasks, rowsSpec) {
  const rootTasks = tasks;
  const index = buildTaskIndex(rootTasks);
  const cbById = new Map();
  const wrap = document.createElement("div");
  wrap.className = "task-layout";
  const used = new Set();

  function makeInlineItem(t) {
    const item = document.createElement("div");
    const entry = index.get(t.id);
    const isSub = !!(entry && entry.parent);
    item.className = "task-item " + (isSub ? "is-subtask" : "is-main");
    const imgHTML = t.img
      ? `<img class="task-item-img" src="${t.img}" alt="">`
      : "";

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

      // place % next to the task label
      const label = item.querySelector(".task-item-body");
      const pctEl = tieredWrap._pctEl;
      if (pctEl) label.appendChild(pctEl);

      // put the slider line under the label
      label.insertAdjacentElement("afterend", tieredWrap);

      tieredWrap.addEventListener("tiered-change", () => {
        // ... (unchanged bubbling/ save code)
      });
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
      applySyncsFromTask(t, cb.checked);
    });

    // Tooltip content: prefer task.tooltip; for tiered, auto-build if missing
    attachTooltip(item, () => {
      if (t.tooltip) return t.tooltip;
      if (t.type === "tiered" && Array.isArray(t.tiers)) {
        const steps = t.tiers.length;
        const cur = t.currentTier ?? 0;
        const thresholds = t.tiers.join(" · ");
        return `
       <div><strong>${t.text}</strong></div>
       <div>Tier: ${cur}/${steps}</div>
       <div>Tiers: ${thresholds}</div>
     `;
      }
      return `<strong>${t.text}</strong>`;
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
      const spacerId = window.DATA?.spacer?.id || "spacer";
      if (id === spacerId) {
        rowEl.appendChild(makeSpacer());
        continue;
      }

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
  const wrap = document.createElement("div");
  wrap.className = "tiered";

  // slider 0..tiers.length
  const slider = document.createElement("input");
  slider.type = "range";
  slider.min = 0;
  slider.max = Array.isArray(t.tiers) ? t.tiers.length : 0;
  slider.step = 1;
  slider.value = t.currentTier ?? 0;
  slider.className = "tiered-slider";
  const acc = accentColor || getAccentColor();
  try {
    slider.style.accentColor = acc;
  } catch {}
  slider.style.setProperty("--tier-accent", acc);

  // percent text (we'll place it up by the label)
  const pct = document.createElement("div");
  pct.className = "tiered-percent";
  const updatePct = () => {
    const steps = Array.isArray(t.tiers) ? t.tiers.length : 0;
    const v = steps ? Math.min(t.currentTier ?? 0, steps) : 1;
    pct.textContent = v + "/" + steps;
  };
  updatePct();

  const line = document.createElement("div");
  line.className = "tiered-line";
  line.appendChild(slider); // ONLY the slider stays in the line

  // keep checkbox <-> slider in sync
  const syncDoneFromTier = () => {
    const steps = Array.isArray(t.tiers) ? t.tiers.length : 0;
    t.done = steps ? t.currentTier >= steps : !!t.done;
    if (cb) cb.checked = !!t.done;
  };
  syncDoneFromTier();

  slider.addEventListener("input", () => {
    t.currentTier = Number(slider.value);
    syncDoneFromTier();
    updatePct();
    wrap.dispatchEvent(new CustomEvent("tiered-input", { bubbles: true }));
  });
  slider.addEventListener("change", () => {
    wrap.dispatchEvent(new CustomEvent("tiered-change", { bubbles: true }));
  });

  // expose controls to caller
  wrap._setTierFromDone = () => {
    const steps = Array.isArray(t.tiers) ? t.tiers.length : 0;
    t.currentTier = t.done ? steps : 0;
    slider.value = String(t.currentTier);
    updatePct();
  };
  wrap._pctEl = pct; // <-- give caller the percent element
  wrap._updatePct = updatePct;

  wrap.appendChild(line); // append the line (slider)
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

      // move % up next to the inline task text
      const labelText = row.querySelector(".small"); // the text div in this row
      if (tieredWrap._pctEl && labelText && labelText.parentElement) {
        labelText.parentElement.appendChild(tieredWrap._pctEl);
      }

      // slider line stays below
      row.appendChild(tieredWrap);

      tieredWrap.addEventListener("tiered-change", () => {
        // ... (unchanged bubbling/ save code)
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
      applySyncsFromTask(t, cb.checked);
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

    (function prune(arr) {
      if (!Array.isArray(arr)) return;
      for (let i = arr.length - 1; i >= 0; i--) {
        const t = arr[i];
        if (!t || typeof t !== "object" || !t.id) {
          // <-- guard
          arr.splice(i, 1);
          continue;
        }
        if (Array.isArray(t.children)) prune(t.children);
      }
    })(current);

    (function indexSeed(arr) {
      for (const t of arr || []) {
        if (!t || typeof t !== "object") continue; // <-- guard
        if (t.id) seedIndex.set(t.id, t);
        if (Array.isArray(t.children)) indexSeed(t.children);
      }
    })(seed);
    let changed = false;
    (function sync(arr) {
      for (const t of arr) {
        if (!t || typeof t !== "object" || !t.id) continue; // <-- guard

        const s = seedIndex.get(t.id);
        if (s && s.img && !t.img) {
          t.img = s.img;
          changed = true;
        }
        if (s && Array.isArray(s.tiers) && !Array.isArray(t.tiers)) {
          t.tiers = [...s.tiers];
          changed = true;
        }
        if (s && Array.isArray(s.syncs) && !Array.isArray(t.syncs)) {
          t.syncs = [...s.syncs];
          changed = true;
        }
        if (s && Array.isArray(s.dexSync) && !Array.isArray(t.dexSync)) {
          t.dexSync = [...s.dexSync];
          changed = true;
        }
        if (s && s.unit && !t.unit) {
          t.unit = s.unit;
          changed = true;
        }
        if (s && s.tooltip && !t.tooltip) {
          t.tooltip = s.tooltip;
          changed = true;
        }

        if (Array.isArray(t.children)) sync(t.children);
      }
    })(current);
    if (changed) {
      tasksStore.set(sectionId, current);
      save();
      _indexSectionTasks(sectionId, current);
      _indexDexSyncs(sectionId, current);
    }
    return;
  }
  tasksStore.set(sectionId, seed.map(cloneTaskDeep));
  save();
  _indexSectionTasks(sectionId, tasksStore.get(sectionId));
  _indexDexSyncs(sectionId, tasksStore.get(sectionId));

  function cloneTaskDeep(t) {
    return {
      id: t.id || uid(),
      text: t.text || "Task",
      done: !!t.done,
      img: t.img || null,
      type: t.type || null,
      tiers: Array.isArray(t.tiers) ? [...t.tiers] : undefined,
      unit: t.unit || null,
      currentTier: typeof t.currentTier === "number" ? t.currentTier : 0,
      currentCount: typeof t.currentCount === "number" ? t.currentCount : 0,
      tooltip: t.tooltip || null,
      children: Array.isArray(t.children) ? t.children.map(cloneTaskDeep) : [],
      syncs: Array.isArray(t.syncs) ? [...t.syncs] : undefined,
      dexSync: Array.isArray(t.dexSync) ? [...t.dexSync] : undefined,
    };
  }
}
