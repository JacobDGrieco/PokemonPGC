// ------------------------------------------------------------
// 1) Bootstrap registry + data
// ------------------------------------------------------------

// Ensure DATA/PPGC exist before anything renders
import "./registry.js";

// Global/static data
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
import "../data/gen3/sapphire.js";
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
// import "../data/gen7/letsgopikachu.js";
// import "../data/gen7/letsgoeevee.js";

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

// Generation 9 - Part 2
import "../data/gen9/legendsza.js";
// import "../data/gen9/legendszamd.js";


// ------------------------------------------------------------
// 2) Store, persistence, and UI wiring
// ------------------------------------------------------------

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

// Side-effect: registers distribution modals / handlers
import "./modals/distributions.js";

import { elements, wireGlobalNav } from "./ui/dom.js";
import { renderSidebar } from "./ui/sidebar.js";
import { renderCrumbs } from "./ui/crumbs.js";
import { renderContent } from "./ui/content.js";


// ------------------------------------------------------------
// 3) Rendering
// ------------------------------------------------------------

/**
 * Re-render all primary UI regions based on current store state.
 * - Sidebar (generations / games / sections)
 * - Breadcrumbs
 * - Main content panel
 */
function renderAll() {
	renderSidebar(store, elements, renderAll);
	renderCrumbs(store, elements);
	renderContent(store, elements);
}


// ------------------------------------------------------------
// 4) Backup controls UI (floating gear menu)
// ------------------------------------------------------------

/**
 * Injects and wires the floating "Backup" gear menu.
 * - Lets user choose a backup folder
 * - Trigger manual backup/import
 * - Toggle automatic backups
 * The controls are only mounted once per page load.
 */
function mountBackupControls() {
	if (document.getElementById("ppgc-backup-controls")) return;

	const wrap = document.createElement("div");
	wrap.id = "ppgc-backup-controls";

	wrap.innerHTML = `
    <span class="dot" id="ppgc-backup-dot" title="No backup folder chosen"></span>
    <button
      id="ppgc-backup-menu"
      aria-haspopup="true"
      aria-expanded="false"
      aria-controls="ppgc-backup-panel"
      title="Backup &amp; Import options"
    >
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
        <label class="switch" id="ppgc-auto" title="Toggle automatic backups">
          <input type="checkbox" id="ppgc-auto-toggle" />
          <span class="slider" aria-hidden="true"></span>
          <span class="sr">Auto Backup</span>
        </label>
      </div>
      <div class="row">
        <button id="ppgc-backup-folder">Choose Folder</button>
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

	/**
	 * Refresh backup UI status:
	 * - Dot color/state
	 * - Folder button label
	 * - "Last backup" timestamp
	 * - Auto-backup toggle
	 */
	async function refreshStatus() {
		const granted = await isBackupFolderGranted();

		dot.classList.toggle("ok", !!granted);
		dot.title = granted
			? "Backups will run silently"
			: "Click 'Choose Folder' to enable silent backups";

		btnFolder.textContent = granted ? "Change Folder" : "Choose Folder";

		const ts = localStorage.getItem("ppgc_last_backup_ts");
		meta.textContent = ts
			? `Last: ${new Date(ts).toLocaleTimeString()}`
			: "";

		autoToggle.checked = getAutoBackupsEnabled();
	}

	function onDocClick(e) {
		if (!wrap.contains(e.target)) closePanel();
	}

	function onKeydown(e) {
		if (e.key === "Escape") closePanel();
	}

	function openPanel() {
		panel.classList.add("open");
		gear.setAttribute("aria-expanded", "true");

		// Focus first control for a11y
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
			btnNow.textContent = "Backup";
		}
	});

	btnImport.addEventListener("click", async (e) => {
		btnImport.disabled = true;
		btnImport.textContent = e.altKey ? "Importing game…" : "Importing…";
		try {
			if (e.altKey) {
				// Import just the current game (best-effort resolve)
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

	// Update indicator when backups complete and periodically
	window.addEventListener("ppgc:backup:done", refreshStatus);
	setInterval(refreshStatus, 10_000); // every 10s
	refreshStatus();
}


// ------------------------------------------------------------
// 5) App bootstrap
// ------------------------------------------------------------

wireGlobalNav(store, elements, renderAll);
renderAll();
mountBackupControls();

// Kick off periodic background backups (every N minutes)
initBackups({ minutes: 5 });

// Optionally auto-import saves on load
autoImportOnStart({ mode: "all" });

window.addEventListener("ppgc:import:done", () => {
	try {
		renderAll();
		localStorage.setItem("ppgc_last_import_ts", new Date().toISOString());
	} catch {
		// ignore render/import errors here; user can refresh if something breaks
	}
});


// ------------------------------------------------------------
// 6) Guard modals from over-eager browser extensions
// ------------------------------------------------------------

/**
 * Prevent third-party content scripts from hijacking focus/input
 * inside our modals, while still allowing native form controls to
 * work normally.
 */
(function shieldModalsFromExtensions() {
	const isInsideShield = (el) => {
		if (!el || !el.closest) return false;

		// Do NOT shield native inputs (user needs these to work)
		if (
			el.tagName === "SELECT" ||
			el.tagName === "INPUT" ||
			el.tagName === "TEXTAREA"
		) {
			return false;
		}

		// Shield generic modal content areas
		return !!el.closest("#modal, #researchModal, #fashionModal, #formsModal");
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


// ------------------------------------------------------------
// 7) Debug helpers
// ------------------------------------------------------------

// Quick access from devtools: PPGC.renderAll()
window.PPGC = window.PPGC || {};
window.PPGC.renderAll = renderAll;
