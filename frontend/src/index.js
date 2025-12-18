// ------------------------------------------------------------
// 1) Imports
// ------------------------------------------------------------

import "./registry.js";
import "../data/bootstrap.js";
import { expandSyncSetsInData } from "./sync.js";

import { store, save } from "./store.js";
import { bootstrapTasks } from "./tasks.js";
import {
	initBackups,
	autoImportOnStart,
	startServerAutoBackup,
	stopServerAutoBackup,
	initialServerBackup,
	loadAllGames,
} from "./persistence.js";
import * as api from "../api.js";
import "./modals/distributions.js";
import { openMonInfo, setupMonInfoModal } from "./modals/dex-mon-info.js";
import "./modals/model-viewer.js";
import { initLayoutSwitcher } from "./ui/layoutSwitcher.js";
import { elements, wireGlobalNav } from "./ui/dom.js";
import { renderSidebar } from "./ui/sidebar.js";
import { renderCrumbs } from "./ui/crumbs.js";
import { renderContent } from "./ui/content.js";
import { initHistory } from "./history.js";

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
initHistory({ store, renderAll });

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
  `;

	document.body.appendChild(wrap);
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

	// NEW: sync API layer with current user
	api.setApiCurrentUser(currentUser);

	currentUserIcon = currentUser?.icon || "default";
	updateAccountButton();
	window.PPGC = window.PPGC || {};
	window.PPGC.currentUser = currentUser;
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

	// NEW: clear logged-in user in api.js
	api.setApiCurrentUser(null);

	window.PPGC = window.PPGC || {};
	window.PPGC.currentUser = currentUser;

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

					// NEW: tell api.js that someone is logged in
					api.setApiCurrentUser(currentUser);

					window.PPGC = window.PPGC || {};
					window.PPGC.currentUser = currentUser;

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

function getAccountMenu() {
	return document.getElementById("ppgc-account-menu");
}

function closeAccountMenu() {
	const menu = getAccountMenu();
	if (!menu) return;
	menu.hidden = true;
	menu.classList.remove("open");
	accountMenuOpen = false;
}

function resolveGameLabel(gameKey) {
	const meta = window.DATA?.games?.[gameKey];
	return meta?.title || gameKey || "Unknown game";
}

async function initAuthUI() {
	const overlay = document.getElementById("ppgc-auth-overlay");
	const accountBtn = document.getElementById("ppgc-account-button");
	const accountMenu = document.getElementById("ppgc-account-menu");
	if (!overlay || !accountBtn || !accountMenu) return;

	const closeBtn = overlay.querySelector(".ppgc-auth-close");

	accountBtn.addEventListener("click", (e) => {
		e.stopPropagation();

		// Save the current route/state so sidebar Back can return here from Account
		try {
			const storeRef = window.PPGC?._storeRef;
			const s = storeRef?.state;
			if (s && s.level && s.level !== "account") {
				// store a shallow clone (enough for your router state)
				window.PPGC._lastNonAccountState = { ...s };
			}
		} catch { }

		// Use the history router so URL + Back/Forward work
		window.PPGC.navigateTo("account");
	});

	accountMenu.addEventListener("click", (e) => {
		const btn = e.target.closest("button[data-action]");
		if (!btn) return;
		const action = btn.dataset.action;
		if (action === "settings") {
			closeAccountMenu();
			window.PPGC.navigateTo("account");
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

expandSyncSetsInData();
setupMonInfoModal();
wireGlobalNav(store, elements, renderAll);
initLayoutSwitcher(renderAll);
renderAll();
mountBackupControls();
initAuthUI();
initBackups({ minutes: 5 });
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
// Header brand links (Home + Mon Info)
// ------------------------------------------------------------
(function wireHeaderBrandLinks() {
	const home = document.getElementById("ppgcHomeBtn");
	const moninfo = document.getElementById("ppgcMonInfoBtn");
	if (!home || !moninfo) return;

	const wireOnce = (el, handler) => {
		if (el.dataset.wired === "1") return;
		el.dataset.wired = "1";
		el.addEventListener("click", (e) => {
			e.preventDefault();
			handler();
		});
	};

	wireOnce(home, () => {
		// go to the main "All games" page
		window.PPGC.navigateToState({
			level: "gen",
			genKey: null,
			gameKey: null,
			sectionId: null,
		});
	});

	wireOnce(moninfo, () => {
		// go to Mon Info INDEX page (not the modal)
		window.PPGC.navigateToState({
			level: "moninfoIndex",
			genKey: null,
			gameKey: null,
			sectionId: null,
			monInfoId: null,
			monInfoGameKey: null,
			monInfoForm: null,
		});
	});
})();


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
window.PPGC.openAuthModal = openAuthModal;
window.PPGC.api = api;
window.PPGC.handleLogout = handleLogout;
window.PPGC.resolveGameLabel = resolveGameLabel;
window.PPGC.openMonInfo = openMonInfo;