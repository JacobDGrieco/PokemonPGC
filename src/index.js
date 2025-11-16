// 1) Make sure DATA/PPGC exist before anything renders
import "./registry.js";

// 2) If you have data files that call PPGC.register(...), import them here
import "../data/data.js";
// Generation 1
import "../data/gen1/red.js";
// import "../data/gen1/blue.js";
// import "../data/gen1/yellow.js";
// Generation 2
import "../data/gen2/gold.js";
// import "../data/gen2/silver.js";
// import "../data/gen2/crystal.js";
// Generation 3
import "../data/gen3/ruby.js";
// import "../data/gen3/sapphire.js";
import "../data/gen3/emerald.js";
import "../data/gen3/firered.js";
// import "../data/gen3/leafgreen.js";
// Generation 4
// import "../data/gen4/diamond.js";
// import "../data/gen4/pearl.js";
// import "../data/gen4/platinum.js";
// import "../data/gen4/heartgold.js";
// import "../data/gen4/soulsilver.js";
// Generation 5
// import "../data/gen5/black.js";
// import "../data/gen5/white.js";
// import "../data/gen5/black-2.js";
// import "../data/gen5/white-2.js";
// Generation 6
// import "../data/gen6/x.js";
// import "../data/gen6/y.js";
// import "../data/gen6/omegaruby.js";
// import "../data/gen6/alphasapphire.js";
// Generation 7
// import "../data/gen7/sun.js";
// import "../data/gen7/moon.js";
// import "../data/gen7/ultrasun.js";
// import "../data/gen7/ultramoon.js";
// Generation 7 - Part 2
// import "../data/gen7_2/letsgopikachu.js";
// import "../data/gen7_2/letsgoeevee.js";
// Generation 8
import "../data/gen8/sword.js";
// import "../data/gen8/swordioa.js";
// import "../data/gen8/swordct.js";
// import "../data/gen8/shield.js";
// import "../data/gen8/shieldioa.js";
// import "../data/gen8/shieldct.js";
// Generation 8 - Part 2
// import "../data/gen8_2/brilliantdiamond.js";
// import "../data/gen8_2/shiningpearl.js";
import "../data/gen8_2/legendsarceus.js";
// Generation 9
// import "../data/gen9/scarlet.js";
// import "../data/gen9/scarlettm.js";
// import "../data/gen9/scarlet-id.js";
// import "../data/gen9/violet.js";
// import "../data/gen9/violettm.js";
// import "../data/gen9/violetid.js";
// Generation 9 - Part 2
import "../data/gen9_2/legendsza.js";
// import "../data/gen9_2/legendszamd.js";

// 3) Import UI and store
import { store } from "./store.js";
import {
  initBackups,
  backupAllNow,
  chooseBackupFolder,
  isBackupFolderGranted,
  autoImportOnStart,
  importAllFromFolder,
  importGameFromFolder,
  getAutoBackupsEnabled,
  setAutoBackupsEnabled,
} from "./persistence.js";
import "./distributions.js";
import { elements, wireGlobalNav } from "./ui/dom.js";
import { renderSidebar } from "./ui/sidebar.js";
import { renderCrumbs } from "./ui/crumbs.js";
import { renderContent } from "./ui/content.js";

// 4) Initial render
function renderAll() {
  renderSidebar(store, elements, renderAll);
  renderCrumbs(store, elements);
  renderContent(store, elements);
}

function mountBackupControls() {
  if (document.getElementById("ppgc-backup-controls")) return;

  // Inject minimal styles (kept local to avoid touching your global CSS)
  const style = document.createElement("style");
  style.id = "ppgc-backup-style";
  style.textContent = `
    #ppgc-backup-controls {
      position: fixed;
      top: 6px;
      right: 8px;
      display: inline-flex;
      align-items: center;
      z-index: 1000;
      gap: 6px;
    }
    #ppgc-backup-menu {
      all: unset;
      font: 500 12px/1 ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
      padding: 6px;
      border-radius: 8px;
      cursor: pointer;
      border: 1px solid rgba(255,255,255,.12);
      background: rgba(16,19,23,.55);
      box-shadow: 0 2px 8px rgba(0,0,0,.24);
    }
    #ppgc-backup-menu:hover { transform: translateY(-1px); }
    #ppgc-backup-menu::before,
    #ppgc-backup-menu::after { content: none !important; background: none !important; mask: none !important; -webkit-mask: none !important; }
    #ppgc-backup-menu { background-image: none !important; display:inline-flex; align-items:center; justify-content:center; }
    #ppgc-backup-menu > svg { display:block; pointer-events:none; }
    #ppgc-backup-controls .dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: #f43; box-shadow: 0 0 0 2px rgba(255,68,67,.25); display:inline-block;
      margin-right:2px;
    }
    #ppgc-backup-controls .dot.ok { background:#22c55e; box-shadow:0 0 0 2px rgba(34,197,94,.25); }
    #ppgc-backup-panel {
      position: absolute;
      top: 36px; right: 0;
      width: max-content; min-width: 220px;
      background: rgba(16,19,23,.92);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 10px;
      box-shadow: 0 10px 26px rgba(0,0,0,.35);
      padding: 8px;
      display: none;
      opacity: 0; transform: translateY(-6px);
      transition: opacity .12s ease, transform .12s ease;
      backdrop-filter: blur(6px);
    }
    #ppgc-backup-panel.open {
    display: flex;
    opacity: 1;
    transform: translateY(0);
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
    #ppgc-backup-panel .row { display:flex; gap:6px; align-items:center; margin-bottom:6px; }
    #ppgc-backup-panel .row:last-child { margin-bottom:0; }
    #ppgc-backup-panel button {
      all: unset; cursor: pointer;
      padding: 6px 10px; border-radius: 8px;
      border: 1px solid rgba(255,255,255,.12);
      font: 500 12px/1 ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
      background: rgba(255,255,255,.06);
    }
    #ppgc-backup-panel button.primary { background: rgba(255,255,255,.09); }
    #ppgc-backup-panel .meta { font-size:11px; opacity:.75; }

    #ppgc-backup-panel .switch {
      position: relative; display:inline-flex; align-items:center; gap:6px; padding:0 2px; cursor:pointer;
      font-size:11px; opacity:.9;
    }
    #ppgc-backup-panel .switch input { position:absolute; opacity:0; pointer-events:none; }
    #ppgc-backup-panel .slider {
      width: 26px; height: 14px; border-radius: 999px;
      background: rgba(255,255,255,.18); border:1px solid rgba(255,255,255,.18);
      position: relative; transition: background .2s ease;
    }
    #ppgc-backup-panel .slider::after{
      content:""; position:absolute; top:1px; left:1px; width:10px; height:10px; border-radius:50%;
      background:#fff; box-shadow:0 1px 2px rgba(0,0,0,.25); transition: transform .2s ease;
    }
    #ppgc-backup-panel .switch input:checked + .slider{
      background: rgba(34,197,94,.5); border-color: rgba(34,197,94,.55);
    }
    #ppgc-backup-panel .switch input:checked + .slider::after{ transform: translateX(12px); }
    @media (max-width: 800px){
      #ppgc-backup-controls{ top: 6px; right: 6px; }
      #ppgc-backup-panel{ right: 0; }
    }
  `;
  document.head.appendChild(style);

  const wrap = document.createElement("div");
  wrap.id = "ppgc-backup-controls";
  wrap.innerHTML = `
    <span class="dot" id="ppgc-backup-dot" title="No backup folder chosen"></span>
    <button id="ppgc-backup-menu" aria-haspopup="true" aria-expanded="false" title="Backup & Import options" aria-co
      <!-- simple gear svg -->
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm9.94 4.5a7.98 7.98 0 00-.2-1.5l2.02-1.57-2-3.46-2.42.66a8.3 8.3 0 00-1.26-.73l-.37-2.47H9.29l-.37 2.47c-.43.2-.84.44-1.25.72l-2.43-.66-2 3.46L5.26 11a7.98 7.98 0 000 3l-2.02 1.57 2 3.46 2.43-.66c.4.29.82.53 1.25.73l.37 2.47h5.48l.37-2.47c.43-.2.84-.44 1.26-.72l2.42.65 2-3.46-2.02-1.57c.14-.5.21-1 .21-1.5z"/>
      </svg>
    </button>
    <div id="ppgc-backup-panel" role="menu" aria-label="Backup & Import menu">
      <div class="row">
        <button class="primary" id="ppgc-backup-now">Backup</button>
        <button id="ppgc-import-now" title="Click: Import All • Alt+Click: Import Current Game">Import</button>
      </div>
      <div class="row">
        <button id="ppgc-backup-folder">Choose Folder</button>
        <label class="switch" id="ppgc-auto" title="Toggle automatic backups">
          <input type="checkbox" id="ppgc-auto-toggle" />
          <span class="slider" aria-hidden="true"></span>
          <span class="sr">Auto Backup</span>
        </label>
      </div>
      <div class="row">
        <span class="meta" id="ppgc-backup-meta"></span>
      </div>
    </div>
  `;

  document.body.appendChild(wrap);

  // Wire actions
  const dot = wrap.querySelector("#ppgc-backup-dot");
  const gear = wrap.querySelector("#ppgc-backup-menu");
  const panel = wrap.querySelector("#ppgc-backup-panel");
  const btnNow = panel.querySelector("#ppgc-backup-now");
  const btnImport = panel.querySelector("#ppgc-import-now");
  const btnFolder = panel.querySelector("#ppgc-backup-folder");
  const autoToggle = panel.querySelector("#ppgc-auto-toggle");
  const meta = panel.querySelector("#ppgc-backup-meta");

  async function refreshStatus() {
    const granted = await isBackupFolderGranted();
    dot.classList.toggle("ok", !!granted);
    dot.title = granted
      ? "Backups will run silently"
      : "Click 'Choose Folder' to enable silent backups";
    btnFolder.textContent = granted ? "Change Folder" : "Choose Folder";

    const ts = localStorage.getItem("ppgc_last_backup_ts");
    const gk = localStorage.getItem("ppgc_last_backup_game");
    meta.textContent = ts
      ? `Last: ${new Date(ts).toLocaleTimeString()} • ${gk || ""}`
      : "";

    autoToggle.checked = getAutoBackupsEnabled();
  }

  function openPanel() {
    panel.classList.add("open");
    gear.setAttribute("aria-expanded", "true");
    // focus first control for a11y
    btnNow?.focus?.();
    document.addEventListener("click", onDocClick, true);
    document.addEventListener("keydown", onKeydown, true);
  }
  function closePanel() {
    panel.classList.remove("open");
    gear.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", onDocClick, true);
    document.removeEventListener("keydown", onKeydown, true);
  }
  function onDocClick(e) {
    if (!wrap.contains(e.target)) closePanel();
  }
  function onKeydown(e) {
    if (e.key === "Escape") closePanel();
  }
  gear.addEventListener("click", (e) => {
    e.stopPropagation();
    panel.classList.contains("open") ? closePanel() : openPanel();
  });

  btnNow.addEventListener("click", async () => {
    btnNow.disabled = true;
    btnNow.textContent = "Backing up…";
    try {
      await backupAllNow();
    } finally {
      btnNow.disabled = false;
      btnNow.textContent = "Backup Now";
    }
  });

  btnImport.addEventListener("click", async (e) => {
    btnImport.disabled = true;
    btnImport.textContent = e.altKey ? "Importing game…" : "Importing…";
    try {
      if (e.altKey) {
        // Import just the current game (best effort resolve)
        const gk =
          store?.state?.gameKey ||
          document.querySelector("#content")?.getAttribute("data-game-key") ||
          document.body?.getAttribute("data-game-key") ||
          window.PPGC?.currentGameKey ||
          null;
        if (gk) {
          await importGameFromFolder(gk);
        } else {
          await importAllFromFolder();
        }
      } else {
        await importAllFromFolder();
      }
    } catch (err) {
      console.debug("[import] failed:", err);
    } finally {
      btnImport.disabled = false;
      btnImport.textContent = "Import";
    }
  });

  btnFolder.addEventListener("click", async () => {
    try {
      await chooseBackupFolder();
    } catch (e) {
      console.debug("[backup] chooseFolder:", e);
    } finally {
      refreshStatus();
    }
  });

  autoToggle.addEventListener("change", () => {
    setAutoBackupsEnabled(autoToggle.checked);
    // Small UX hint in the dot title
    dot.title = autoToggle.checked ? "Auto-backups ON" : "Auto-backups OFF";
  });

  // update indicator on events & periodically
  window.addEventListener("ppgc:backup:done", refreshStatus);
  setInterval(refreshStatus, 10_000);
  refreshStatus();
}

wireGlobalNav(store, elements, renderAll);
renderAll();
mountBackupControls();
initBackups({ minutes: 5 });

autoImportOnStart({ mode: "all" });
window.addEventListener("ppgc:import:done", (e) => {
  try {
    renderAll();
    localStorage.setItem("ppgc_last_import_ts", new Date().toISOString());
  } catch { }
});

// Prevent third-party content scripts from handling focus/input inside our modals
(function shieldModalsFromExtensions() {
  const isInsideShield = (el) => {
    if (!el || !el.closest) return false;

    // ✅ Do NOT shield native form controls in our own modals
    if (
      el.tagName === "SELECT" ||
      el.tagName === "INPUT" ||
      el.tagName === "TEXTAREA" ||
      el.closest("#formsModal") ||
      el.closest("#fashionModal")
    ) {
      return false;
    }

    // Still shield generic dex/task modals if you want
    return !!el.closest(".dex-modal, .forms-modal");
  };

  const stopIfInside = (e) => {
    if (isInsideShield(e.target)) {
      e.stopImmediatePropagation();
    }
  };

  document.addEventListener("focusin", stopIfInside, true);
  document.addEventListener("input", stopIfInside, true);
  document.addEventListener("keydown", stopIfInside, true);
})();



// optional: quick access in console
window.PPGC = window.PPGC || {};
window.PPGC.renderAll = renderAll;
