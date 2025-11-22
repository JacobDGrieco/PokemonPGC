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
	backupNow,
	backupAllNow,
	chooseBackupFolder,
	isBackupFolderGranted,
	autoImportOnStart,
	importAllFromFolder,
	importGameFromFolder,
	getAutoBackupsEnabled,
	setAutoBackupsEnabled,
	startServerAutoBackup,
	stopServerAutoBackup,
	initialServerBackup,
	loadAllGames,
} from "./persistence.js";
import * as api from "../api.js";

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
    <button
      id="ppgc-account-button"
      aria-haspopup="dialog"
      aria-controls="ppgc-auth-overlay"
      title="Log in / Sign up"
    >
      <!-- little trainer silhouette -->
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 11.5c1.93 0 3.5-1.79 3.5-4s-1.57-4-3.5-4-3.5 1.79-3.5 4 1.57 4 3.5 4zm0 2c-2.76 0-5.5 1.57-5.5 3.5V19h11v-2c0-1.93-2.74-3.5-5.5-3.5z"/>
      </svg>
    </button>
    <div id="ppgc-account-menu" class="ppgc-account-menu" hidden>
      <button type="button" data-action="settings">Account settings</button>
      <button type="button" data-action="logout">Log out</button>
    </div>
    <div id="ppgc-backup-panel" role="menu" aria-label="Backup & Import menu">
      <div class="row">
        <button id="ppgc-backup-now" class="primary" title="Click: Backup current game • Alt+Click: Backup all games">Backup</button>
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
		const gameKey = localStorage.getItem("ppgc_last_backup_game") || "";

		if (!ts) {
			meta.textContent = "Last: never";
		} else {
			const label = resolveGameLabel(gameKey);
			meta.textContent = `Last: ${formatTs(ts)} — ${label}`;
		}

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

	btnNow.addEventListener("click", async (e) => {
		btnNow.disabled = true;
		btnNow.textContent = e.altKey ? "Backing up all…" : "Backing up…";
		try {
			if (e.altKey) {
				await backupAllNow();
			} else {
				await backupNow(); // current game only
			}
		} catch (err) {
			console.debug("[backup] failed:", err);
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
// 5) Account / auth UI
// ------------------------------------------------------------

let currentUser = null;
let currentUserIcon = "default";
let accountMenuOpen = false;

function updateAccountButton() {
	const btn = document.getElementById("ppgc-account-button");
	if (!btn) return;

	const loggedIn = !!currentUser;
	btn.classList.toggle("logged-in", loggedIn);
	btn.title = loggedIn
		? `Logged in as ${currentUser.email}`
		: "Log in / Sign up";

	// reflect icon choice
	btn.dataset.icon = currentUserIcon || "default";
}

async function refreshCurrentUser() {
	try {
		const res = await api.getCurrentUser();
		currentUser = res && res.user ? res.user : null;
	} catch {
		currentUser = null;
	}
	currentUserIcon = currentUser?.icon || "default";
	updateAccountButton();
}

async function handleLogout() {
	try {
		await api.logout();
	} catch (e) {
		console.debug("[auth] logout failed (ignored):", e);
	}
	currentUser = null;
	currentUserIcon = "default";
	updateAccountButton();
	closeAccountMenu();
	closeAuthModal();

	stopServerAutoBackup();

	window.location.reload();
}

function closeAuthModal() {
	const overlay = document.getElementById("ppgc-auth-overlay");
	if (!overlay) return;
	const form = document.getElementById("ppgc-auth-form");
	const statusEl = document.getElementById("ppgc-auth-status");

	overlay.hidden = true;
	document.body.classList.remove("ppgc-auth-open");

	if (form) form.reset();
	if (statusEl) {
		statusEl.textContent = "";
		statusEl.classList.remove("error");
	}
}

function openAuthModal(mode = "login") {
	const overlay = document.getElementById("ppgc-auth-overlay");
	if (!overlay) return;

	const form = document.getElementById("ppgc-auth-form");
	const statusEl = document.getElementById("ppgc-auth-status");
	const tabs = overlay.querySelectorAll(".ppgc-auth-tabs button");
	const submitBtn = document.getElementById("ppgc-auth-submit");

	let currentMode = mode; // "login" or "signup"

	function setMode(nextMode) {
		currentMode = nextMode;
		tabs.forEach((btn) => {
			btn.classList.toggle("active", btn.dataset.mode === currentMode);
		});
		if (submitBtn) {
			submitBtn.textContent = currentMode === "login" ? "Log in" : "Sign up";
		}
		if (statusEl) {
			statusEl.textContent = "";
			statusEl.classList.remove("error");
		}
	}

	setMode(mode);
	overlay.hidden = false;
	document.body.classList.add("ppgc-auth-open");

	// Wire tabs
	tabs.forEach((btn) => {
		btn.onclick = () => setMode(btn.dataset.mode);
	});

	if (form) {
		form.onsubmit = async (e) => {
			e.preventDefault();
			if (!statusEl) return;

			statusEl.textContent =
				currentMode === "login" ? "Logging in..." : "Signing up...";
			statusEl.classList.remove("error");

			const formData = new FormData(form);
			const email = String(formData.get("email") || "").trim();
			const password = String(formData.get("password") || "").trim();

			try {
				let res;
				if (currentMode === "login") {
					res = await api.login(email, password);
				} else {
					res = await api.signup(email, password);
				}

				if (res && res.error) {
					statusEl.textContent = res.error;
					statusEl.classList.add("error");
					return;
				}

				// Temporary in-memory auth: res = { id, email }
				if (res && res.email) {
					currentUser = {
						id: res.id,
						email: res.email,
						icon: res.icon || "default",
					};
					currentUserIcon = currentUser.icon;
					updateAccountButton();

					if (currentMode === "signup") {
						// New account: push current game up once so DB has something
						await initialServerBackup();
					} else {
						// Existing account: pull ALL games down from the cloud
						await loadAllGames();
					}

					startServerAutoBackup();

					statusEl.textContent = "Success!";
					closeAuthModal();
				}

				statusEl.textContent = "Success!";
				setTimeout(() => {
					closeAuthModal();
				}, 600);
			} catch (err) {
				console.error(err);
				statusEl.textContent = "Something went wrong. Try again.";
				statusEl.classList.add("error");
			}
		};
	}
}

function renderAccountSettingsPage() {
	const contentEl =
		document.getElementById("content") || document.querySelector("#content");
	if (!contentEl) return;

	const email = currentUser?.email || "(not signed in)";

	contentEl.innerHTML = `
    <section class="account-page">
      <h2>Account Settings</h2>
      <div class="account-meta">
        <div><strong>Email:</strong> ${email}</div>
        <div><strong>Status:</strong> ${currentUser ? "Signed in" : "Guest"
		}</div>
      </div>
      <div class="account-actions">
        <button type="button" class="primary" id="ppgc-account-change-icon-btn">
          Change icon
        </button>
        <button type="button" class="ghost" id="ppgc-account-logout-btn">
          Log out
        </button>
      </div>
      <div class="account-icon-picker">
        <h3>Choose your icon</h3>
        <div class="account-icon-grid">
          <button type="button" class="account-icon-option" data-icon="default" title="Poké Ball">
            <span>⚪</span>
          </button>
          <button type="button" class="account-icon-option" data-icon="great" title="Great Ball">
            <span>🔵</span>
          </button>
          <button type="button" class="account-icon-option" data-icon="ultra" title="Ultra Ball">
            <span>🟡</span>
          </button>
        </div>
      </div>
    </section>
  `;

	// Wire icon picker + logout
	const options = contentEl.querySelectorAll(".account-icon-option");
	options.forEach((btn) => {
		const icon = btn.dataset.icon;
		if (icon === currentUserIcon) {
			btn.classList.add("selected");
		}
		btn.addEventListener("click", async () => {
			options.forEach((b) => b.classList.remove("selected"));
			btn.classList.add("selected");
			currentUserIcon = icon;
			updateAccountButton();

			// Persist to server
			try {
				const res = await api.updateMe({ icon });
				if (res && res.user) {
					currentUser = res.user;
					currentUserIcon = res.user.icon || "default";
					updateAccountButton();
				}
			} catch (err) {
				console.debug("[account] failed to update icon (ignored):", err);
			}
		});
	});

	const logoutBtn = contentEl.querySelector("#ppgc-account-logout-btn");
	if (logoutBtn) {
		logoutBtn.addEventListener("click", () => {
			handleLogout();
		});
	}
}

function getAccountMenu() {
	return document.getElementById("ppgc-account-menu");
}

function openAccountMenu() {
	const menu = getAccountMenu();
	if (!menu) return;
	menu.hidden = false;
	menu.classList.add("open");
	accountMenuOpen = true;
}

function closeAccountMenu() {
	const menu = getAccountMenu();
	if (!menu) return;
	menu.hidden = true;
	menu.classList.remove("open");
	accountMenuOpen = false;
}

function resolveCurrentGameKey() {
	return (
		document.querySelector("#content")?.getAttribute("data-game-key") ||
		document.body?.getAttribute("data-game-key") ||
		store.state?.gameKey ||
		null
	);
}

function resolveGameLabel(gameKey) {
	const meta = window.DATA?.games?.[gameKey];
	return meta?.title || gameKey || "Unknown game";
}

function formatTs(ts) {
	if (!ts) return "never";
	try {
		const d = new Date(ts);
		return d.toLocaleString();
	} catch {
		return ts;
	}
}

async function initAuthUI() {
	const overlay = document.getElementById("ppgc-auth-overlay");
	const accountBtn = document.getElementById("ppgc-account-button");
	const accountMenu = document.getElementById("ppgc-account-menu");
	if (!overlay || !accountBtn || !accountMenu) return;

	const closeBtn = overlay.querySelector(".ppgc-auth-close");

	accountBtn.addEventListener("click", (e) => {
		e.stopPropagation();
		if (currentUser) {
			// Toggle account dropdown menu
			if (accountMenuOpen) {
				closeAccountMenu();
			} else {
				openAccountMenu();
			}
		} else {
			openAuthModal("login");
		}
	});

	// Handle menu actions
	accountMenu.addEventListener("click", (e) => {
		const btn = e.target.closest("button[data-action]");
		if (!btn) return;
		const action = btn.dataset.action;
		if (action === "settings") {
			closeAccountMenu();
			renderAccountSettingsPage();
		} else if (action === "logout") {
			handleLogout();
		}
	});

	if (closeBtn) {
		closeBtn.addEventListener("click", () => closeAuthModal());
	}

	overlay.addEventListener("click", (e) => {
		if (e.target === overlay) closeAuthModal();
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			closeAuthModal();
			closeAccountMenu();
		}
	});

	// Close menu when clicking elsewhere
	document.addEventListener("click", (e) => {
		const withinControls = e.target.closest("#ppgc-backup-controls");
		if (!withinControls) {
			closeAccountMenu();
		}
	});

	// Initialize button state from server session (if any)
	await refreshCurrentUser();

	if (currentUser) {
		startServerAutoBackup();
	}
}

// ------------------------------------------------------------
// 6) App bootstrap
// ------------------------------------------------------------

wireGlobalNav(store, elements, renderAll);
renderAll();
mountBackupControls();
initAuthUI();

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
// 7) Guard modals from over-eager browser extensions
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
// 8) Debug helpers
// ------------------------------------------------------------

// Quick access from devtools: PPGC.renderAll()
window.PPGC = window.PPGC || {};
window.PPGC.renderAll = renderAll;
window.PPGC.api = api;