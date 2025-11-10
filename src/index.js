// 1) Make sure DATA/PPGC exist before anything renders
import "./registry.js";

// 2) If you have data files that call PPGC.register(...), import them here
import "../data/data.js";
// Generation 1
import "../data/gen1/red.js";
import "../data/gen1/blue.js";
import "../data/gen1/yellow.js";
// Generation 2
import "../data/gen2/gold.js";
import "../data/gen2/silver.js";
import "../data/gen2/crystal.js";
// Generation 3
import "../data/gen3/ruby.js";
// import "../data/gen3/sapphire.js";
// import "../data/gen3/emerald.js";
// import "../data/gen3/firered.js";
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
// import "../data/gen8/sword.js";
// import "../data/gen8/swordioa.js";
// import "../data/gen8/swordct.js";
// import "../data/gen8/shield.js";
// import "../data/gen8/shieldioa.js";
// import "../data/gen8/shieldct.js";
// Generation 8 - Part 2
// import "../data/gen8/brilliantdiamond.js";
// import "../data/gen8/shiningpearl.js";
// import "../data/gen8/legendsarceus.js";
// Generation 9
// import "../data/gen9/scarlet.js";
// import "../data/gen9/scarlettm.js";
// import "../data/gen9/scarlet-id.js";
// import "../data/gen9/violet.js";
// import "../data/gen9/violettm.js";
// import "../data/gen9/violetid.js";
// Generation 10
import "../data/gen10/legendsza.js";
// import "../data/gen10/legendszamd.js";

// 3) Import UI and store
import { store } from "./store.js";
import {
  initBackups,
  backupAllNow,
  chooseBackupFolder,
  isBackupFolderGranted,
} from "./persistence.js";
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
      top: 8px;
      right: 12px;
      display: flex;
      gap: .5rem;
      align-items: center;
      z-index: 1000;
      backdrop-filter: blur(6px);
      background: color-mix(in oklab, var(--bg, #101317) 80%, transparent);
      padding: 6px 10px;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,.25);
      border: 1px solid rgba(255,255,255,.08);
    }
    #ppgc-backup-controls button {
      all: unset;
      font: 500 13px/1 ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
      padding: 6px 10px;
      border-radius: 10px;
      cursor: pointer;
      border: 1px solid rgba(255,255,255,.14);
    }
    #ppgc-backup-controls button:hover { transform: translateY(-1px); }
    #ppgc-backup-controls .primary { background: rgba(255,255,255,.08); }
    #ppgc-backup-controls .dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: #f43; box-shadow: 0 0 0 2px rgba(255,68,67,.25); display:inline-block;
      margin-right:6px;
    }
    #ppgc-backup-controls .dot.ok { background:#22c55e; box-shadow:0 0 0 2px rgba(34,197,94,.25); }
    #ppgc-backup-controls .meta { font-size:12px; opacity:.8 }
    @media (max-width: 800px){
      #ppgc-backup-controls{ top: 6px; right: 6px; padding:4px 8px; gap:.4rem }
      #ppgc-backup-controls button{ padding:4px 8px; font-size:12px }
    }
  `;
  document.head.appendChild(style);

  const wrap = document.createElement("div");
  wrap.id = "ppgc-backup-controls";
  wrap.innerHTML = `
    <span class="dot" id="ppgc-backup-dot" title="No backup folder chosen"></span>
    <button class="primary" id="ppgc-backup-now">Backup Now</button>
    <button id="ppgc-backup-folder">Choose Folder</button>
    <span class="meta" id="ppgc-backup-meta" style=display:none;></span>
  `;

  document.body.appendChild(wrap);

  // Wire actions
  const btnNow = wrap.querySelector("#ppgc-backup-now");
  const btnFolder = wrap.querySelector("#ppgc-backup-folder");
  const dot = wrap.querySelector("#ppgc-backup-dot");
  const meta = wrap.querySelector("#ppgc-backup-meta");

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
  }

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

  btnFolder.addEventListener("click", async () => {
    try {
      await chooseBackupFolder();
    } catch (e) {
      console.debug("[backup] chooseFolder:", e);
    } finally {
      refreshStatus();
    }
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

// optional: quick access in console
window.PPGC = window.PPGC || {};
window.PPGC.renderAll = renderAll;
