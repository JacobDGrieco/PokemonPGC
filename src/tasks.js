import { save, uid } from "./store.js";

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

export function setDescendantsDone(task, val) {
  task.done = val;
  const kids = Array.isArray(task.children) ? task.children : [];
  for (const ch of kids) setDescendantsDone(ch, val);
}

export function renderTaskLayout(tasks, sectionId, setTasks, rowsSpec) {
  const rootTasks = tasks;
  const index = buildTaskIndex(rootTasks);
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
    const imgHTML = t.img
      ? `<img class="task-item-img" src="${t.img}" alt="">`
      : "";

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
    cb.addEventListener("change", () => {
      const hasKids = Array.isArray(t.children) && t.children.length > 0;
      if (hasKids) setDescendantsDone(t, cb.checked);
      else t.done = cb.checked;
      recomputeUp(t);
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
    wrap.appendChild(renderTaskList(leftovers, sectionId, setTasks));
  }
  return wrap;
}

export function renderTaskList(tasks, sectionId, setTasks) {
  const container = document.createElement("div");
  container.className = "task-list";
  tasks.forEach((t) => {
    const row = document.createElement("div");
    row.className = "task-row";
    row.innerHTML = `<input type="checkbox" ${t.done ? "checked" : ""} />
                     <div class="small" style="flex:1">${t.text}</div>`;
    const cb = row.querySelector('input[type="checkbox"]');
    cb.addEventListener("change", () => {
      t.done = cb.checked;
      setTasks(sectionId, tasks);
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
      children: Array.isArray(t.children) ? t.children.map(cloneTaskDeep) : [],
    };
  }
}
