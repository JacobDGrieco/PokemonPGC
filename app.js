// app.js — checklist tabs + dex editor modal (clean version)
(function () {
  const STORAGE_KEY = 'ppgc_v3';
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  // State storage: checklist checked per tab, and dex checked per gen
  const checked = new Map(Object.entries(saved.checked || {}));
  for (const [k, arr] of checked.entries()) checked.set(k, new Set(arr));
  const dexChecked = new Map(Object.entries(saved.dexChecked || {}));
  for (const [k, arr] of dexChecked.entries()) dexChecked.set(k, new Set(arr));

  const state = {
    active: DATA.tabs[0].key,
    checked,     // Map<tabKey, Set<listItemIds>>
    dexChecked,  // Map<genKey, Set<dexIds>>
    dexModalFor: null, // active genKey for the modal
  };

  function save() {
    const obj = {
      checked: Object.fromEntries([...state.checked].map(([k, set]) => [k, [...set]])),
      dexChecked: Object.fromEntries([...state.dexChecked].map(([k, set]) => [k, [...set]])),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  }

  // DOM helpers
  const $ = (s, r = document) => r.querySelector(s);
  const tabsEl = $('#tabs');
  const list = $('#list');
  const empty = $('#empty');
  const search = $('#search');
  const showChecked = $('#showChecked');
  const count = $('#count');

  // Build tabs
  tabsEl.innerHTML = '';
  for (const t of DATA.tabs) {
    const btn = document.createElement('button');
    btn.className = 'tab';
    btn.textContent = t.label;
    btn.addEventListener('click', () => { state.active = t.key; render(); });
    tabsEl.appendChild(btn);
    if (!state.checked.has(t.key)) state.checked.set(t.key, new Set());
    if (!state.dexChecked.has(t.key)) state.dexChecked.set(t.key, new Set());
  }

  function activeTab() {
    return DATA.tabs.find(t => t.key === state.active) || DATA.tabs[0];
  }

  function render() {
    // Update active tab class
    [...tabsEl.children].forEach((el, i) => {
      el.classList.toggle('active', DATA.tabs[i].key === state.active);
    });

    const t = activeTab();
    const items = DATA[t.key] || [];
    const q = search.value.trim().toLowerCase();
    const only = showChecked.checked;
    const set = state.checked.get(t.key) || new Set();

    // Filter (checklist items only)
    const filtered = items.filter(it => {
      const hay = `${it.id || ''} ${it.text || it.label || ''}`;
      const match = hay.toLowerCase().includes(q);
      const isChecked = set.has(it.id);
      return match && (!only || isChecked);
    });

    // Render list
    list.innerHTML = '';
    for (const it of filtered) {
      if (it.kind === 'dex-summary') {
        const row = renderDexSummaryRow(t.key, it);
        list.appendChild(row);
      } else {
        const isChecked = set.has(it.id);
        const row = document.createElement('div');
        row.className = 'listItem';
        row.innerHTML = `
          <input type="checkbox" ${isChecked ? 'checked' : ''} />
          <div class="content">
            <div class="title">${it.text || it.label || it.id}</div>
          </div>`;
        const cb = row.querySelector('input');
        cb.addEventListener('change', () => {
          if (cb.checked) set.add(it.id); else set.delete(it.id);
          state.checked.set(t.key, set); save(); updateCount();
        });
        list.appendChild(row);
      }
    }

    empty.hidden = filtered.length > 0;
    updateCount();
  }

  function updateCount() {
    const t = activeTab();
    const items = DATA[t.key] || [];
    const set = state.checked.get(t.key) || new Set();
    // Count only non-dex-summary items for the checklist count
    const totalChecklist = items.filter(x => x.kind !== 'dex-summary').length;
    const checkedChecklist = [...set].filter(id => (items.find(x => x.id === id) || {}).kind !== 'dex-summary').length;
    count.textContent = `${checkedChecklist} / ${totalChecklist}`;
  }

  function renderDexSummaryRow(genKey, item) {
    const dex = (DATA.dex && DATA.dex[genKey]) ? DATA.dex[genKey] : [];
    const set = state.dexChecked.get(genKey) || new Set();
    const total = dex.length;
    const done = set.size;
    const pct = total ? Math.round((done / total) * 100) : 0;

    const row = document.createElement('div');
    row.className = 'listItem';
    row.innerHTML = `
      <div class="content" style="flex:1 1 auto;">
        <div class="title">${item.label || 'Pokédex'}</div>
        <div class="small">${done} / ${total} (${pct}%)</div>
        <div class="progress" aria-hidden="true"><span style="width:${pct}%"></span></div>
      </div>
      <button class="openDex" title="Open Dex">Open Dex</button>
    `;
    row.querySelector('.openDex').addEventListener('click', () => openDexModal(genKey));
    return row;
  }

  // ============ Dex Modal ============
  const modal = $('#modal');
  const modalClose = $('#modalClose');
  const dexGrid = $('#dexGrid');
  const dexSearch = $('#dexSearch');
  const dexSelectAll = $('#dexSelectAll');
  const dexClearAll = $('#dexClearAll');

  function openDexModal(genKey) {
    state.dexModalFor = genKey;
    $('#modalTitle').textContent = `Dex Editor — ${genKey.toUpperCase()}`;
    dexSearch.value = '';
    renderDexGrid();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    state.dexModalFor = null;
    render(); // refresh the summary row after closing
  }
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  function renderDexGrid() {
    const genKey = state.dexModalFor;
    if (!genKey) return;
    const dex = (DATA.dex && DATA.dex[genKey]) ? DATA.dex[genKey] : [];
    const q = dexSearch.value.trim().toLowerCase();
    const set = state.dexChecked.get(genKey) || new Set();

    const filtered = dex.filter(it => (`${it.id} ${it.name}`).toLowerCase().includes(q));
    dexGrid.innerHTML = '';
    for (const it of filtered) {
      const isChecked = set.has(it.id);
      const card = document.createElement('article');
      card.className = 'card';
      card.setAttribute('role', 'listitem');
      card.innerHTML = `
        <div class="thumb">${it.img ? `<img alt="${it.name}" src="${it.img}" loading="lazy"/>` : `<div style="opacity:.5;">No image</div>`}</div>
        <div class="meta">
          <div class="name" title="${it.name}">#${String(it.id).padStart(3, '0')} — ${it.name}</div>
          <div class="row">
            <input type="checkbox" aria-label="Caught ${it.name}" ${isChecked ? 'checked' : ''} />
          </div>
        </div>`;
      const cb = card.querySelector('input[type=checkbox]');
      cb.addEventListener('change', () => {
        if (cb.checked) set.add(it.id); else set.delete(it.id);
        state.dexChecked.set(genKey, set); save();
      });
      dexGrid.appendChild(card);
    }
  }

  dexSearch.addEventListener('input', renderDexGrid);
  dexSelectAll.addEventListener('click', () => {
    const genKey = state.dexModalFor;
    const dex = (DATA.dex && DATA.dex[genKey]) ? DATA.dex[genKey] : [];
    state.dexChecked.set(genKey, new Set(dex.map(x => x.id)));
    save(); renderDexGrid(); render();
  });
  dexClearAll.addEventListener('click', () => {
    const genKey = state.dexModalFor;
    state.dexChecked.set(genKey, new Set());
    save(); renderDexGrid(); render();
  });

  // Toolbar actions for checklist (not dex)
  $('#selectAll').addEventListener('click', () => {
    const t = activeTab();
    const items = DATA[t.key] || [];
    const set = new Set(items.filter(x => x.kind !== 'dex-summary').map(x => x.id));
    state.checked.set(t.key, set);
    save(); render();
  });
  $('#clearAll').addEventListener('click', () => {
    const t = activeTab();
    state.checked.set(t.key, new Set());
    save(); render();
  });
  search.addEventListener('input', render);
  showChecked.addEventListener('change', render);

  // First paint
  render();
})();
