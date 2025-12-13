export function openMonInfo(gameKey, genKey, mon) {
	const monInfoModal = document.getElementById("monInfoModal");
	const monInfoTitle = document.getElementById("monInfoTitle");
	const monInfoBody = document.getElementById("monInfoBody");

	if (!monInfoModal || !monInfoBody) return;

	// Capture the element that opened the modal (usually inside the dex card)
	const invokerEl = document.activeElement;

	// Try to find the dex card we came from
	const sourceCard =
		invokerEl?.closest?.(".card") ||
		document.querySelector(`.card [data-open="monInfo"]`)?.closest?.(".card") ||
		null;

	const info = window.DATA?.monInfo?.[gameKey]?.[mon.id] || null;
	const baseStats = info?.baseStats || mon.baseStats || null;
	const expGroup = info?.expGroup || info?.expGrowth || null;
	const baseEggSteps = info?.baseEggSteps ?? null;

	if (monInfoTitle) {
		monInfoTitle.textContent = info?.displayName || mon.name;
	}

	const types = info?.types || mon.types || [];
	const abilities = info?.abilities || [];
	const eggGroups = info?.eggGroups || [];
	const evo = info?.evolution || null;
	const moves = info?.moves || {};
	const locations = info?.locations || [];

	const spriteSrc = info?.sprite || mon.img || null;

	const renderListRow = (label, valueOrArr) => {
		if (valueOrArr == null) return "";

		// Array -> stacked column
		if (Array.isArray(valueOrArr)) {
			const cleaned = valueOrArr.filter((v) => v != null && v !== "");

			if (!cleaned.length) return "";

			const itemsHtml = cleaned
				.map((v) => `<span class="value-line">${v}</span>`)
				.join("");

			return `
        <div class="mon-info-row">
          <span class="label">${label}</span>
          <span class="value value--stacked">
            ${itemsHtml}
          </span>
        </div>`;
		}

		// Single value -> same as before
		const v = valueOrArr;
		if (v === "") return "";

		return `
      <div class="mon-info-row">
        <span class="label">${label}</span>
        <span class="value">${v}</span>
      </div>`;
	};

	const statusFromCard = (() => {
		const c = sourceCard;
		if (!c) return null;

		// dataset-based (if you have it)
		const ds =
			c.dataset?.status ||
			c.dataset?.dexStatus ||
			c.getAttribute?.("data-status") ||
			c.getAttribute?.("data-dex-status");
		if (ds) return String(ds).toLowerCase();

		// class-based (common patterns)
		const cls = c.classList;
		if (
			cls.contains("shiny-alpha") ||
			(cls.contains("shiny") && cls.contains("alpha"))
		)
			return "shinyalpha";
		if (cls.contains("alpha")) return "alpha";
		if (cls.contains("shiny")) return "shiny";
		if (cls.contains("caught")) return "caught";
		if (cls.contains("seen")) return "seen";

		return null;
	})();

	const renderStatsRadar = (statsObj) => {
		if (!statsObj) return "";

		// HP at top, then clockwise: Atk, Def, Spe, SpD, SpA
		const order = ["hp", "atk", "def", "spe", "spd", "spa"];
		const labels = ["HP", "Atk", "Def", "Spe", "SpD", "SpA"];
		const values = order.map((k) => Number(statsObj[k] ?? 0));

		const maxVal = Math.max(...values, 1);
		const total = values.reduce((sum, v) => sum + v, 0);
		const center = 50;
		const radius = 65;

		const points = values.map((v, idx) => {
			const ratio = v / maxVal;
			const r = radius * ratio;
			const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / order.length; // start at top, go clockwise
			const x = center + r * Math.cos(angle);
			const y = center + r * Math.sin(angle);
			return { x, y, r, angle, value: v, label: labels[idx] };
		});

		const polygonPoints = points
			.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
			.join(" ");

		// background rings
		const gridLevels = [0.33, 0.66, 1];
		const gridPolys = gridLevels
			.map((lvl) => {
				const pts = order
					.map((_, i) => {
						const r = radius * lvl;
						const angle = -Math.PI / 2 + (i * 2 * Math.PI) / order.length;
						const x = center + r * Math.cos(angle);
						const y = center + r * Math.sin(angle);
						return `${x.toFixed(1)},${y.toFixed(1)}`;
					})
					.join(" ");
				return `<polygon points="${pts}" class="stat-grid-ring" />`;
			})
			.join("");

		// little dots at each vertex
		const vertexDots = points
			.map(
				(p) =>
					`<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(
						1
					)}" r="1.6" class="stat-vertex-dot" />`
			)
			.join("");

		// labels outside each vertex
		const labelRadius = radius + 12;
		const labelsSvg = points
			.map((p) => {
				const lx = center + labelRadius * Math.cos(p.angle);
				const ly = center + labelRadius * Math.sin(p.angle);
				return `<text x="${lx.toFixed(1)}" y="${ly.toFixed(
					1
				)}" class="stat-label" text-anchor="middle" dominant-baseline="central">${p.label
					}</text>`;
			})
			.join("");

		// stat numbers inside the diamond along each ray
		const numbersSvg = points
			.map((p) => {
				const innerR = p.r * 0.7; // pull number inside the diamond
				const nx = center + innerR * Math.cos(p.angle);
				const ny = center + innerR * Math.sin(p.angle);
				return `<text x="${nx.toFixed(1)}" y="${ny.toFixed(
					1
				)}" class="stat-value" text-anchor="middle" dominant-baseline="central">${p.value
					}</text>`;
			})
			.join("");

		// base stat total in the center
		const totalSvg = `<text x="${center}" y="${center}" class="stat-total" text-anchor="middle" dominant-baseline="central">${total}</text>`;

		return `
      <div class="mon-info-block mon-info-stats">
        <h3>Base Stats</h3>
        <div class="mon-info-stats-graph">
          <svg viewBox="-25 -25 150 150" class="mon-info-stats-radar" aria-hidden="true">
            ${gridPolys}
            <polygon points="${polygonPoints}" class="stat-radar-fill" />
            ${vertexDots}
            ${labelsSvg}
            ${numbersSvg}
            ${totalSvg}
          </svg>
        </div>
      </div>
    `;
	};

	const renderEvRadar = (evObj) => {
		if (!evObj) return "";

		// same order/labels as base stats radar to keep formatting consistent
		const order = ["hp", "atk", "def", "spe", "spd", "spa"];
		const labels = ["HP", "Atk", "Def", "Spe", "SpD", "SpA"];
		const values = order.map((k) => Number(evObj[k] ?? 0));

		// EV yields are small; keep it readable even if all zeros
		const maxVal = Math.max(...values, 1);
		const total = values.reduce((sum, v) => sum + v, 0);

		const center = 50;
		const radius = 65;

		const points = values.map((v, idx) => {
			const ratio = v / maxVal;
			const r = radius * ratio;
			const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / order.length;
			const x = center + r * Math.cos(angle);
			const y = center + r * Math.sin(angle);
			return { x, y, r, angle, value: v, label: labels[idx] };
		});

		const polygonPoints = points
			.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
			.join(" ");

		const gridLevels = [0.33, 0.66, 1];
		const gridPolys = gridLevels
			.map((lvl) => {
				const pts = order
					.map((_, i) => {
						const r = radius * lvl;
						const angle = -Math.PI / 2 + (i * 2 * Math.PI) / order.length;
						const x = center + r * Math.cos(angle);
						const y = center + r * Math.sin(angle);
						return `${x.toFixed(1)},${y.toFixed(1)}`;
					})
					.join(" ");
				return `<polygon points="${pts}" class="stat-grid-ring" />`;
			})
			.join("");

		const vertexDots = points
			.map(
				(p) =>
					`<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(
						1
					)}" r="1.6" class="stat-vertex-dot" />`
			)
			.join("");

		const labelRadius = radius + 12;
		const labelsSvg = points
			.map((p) => {
				const lx = center + labelRadius * Math.cos(p.angle);
				const ly = center + labelRadius * Math.sin(p.angle);
				return `<text x="${lx.toFixed(1)}" y="${ly.toFixed(
					1
				)}" class="stat-label" text-anchor="middle" dominant-baseline="central">${p.label
					}</text>`;
			})
			.join("");

		const numbersSvg = points
			.map((p) => {
				const innerR = p.r * 0.7;
				const nx = center + innerR * Math.cos(p.angle);
				const ny = center + innerR * Math.sin(p.angle);
				return `<text x="${nx.toFixed(1)}" y="${ny.toFixed(
					1
				)}" class="stat-value" text-anchor="middle" dominant-baseline="central">${p.value
					}</text>`;
			})
			.join("");

		const totalSvg = `<text x="${center}" y="${center}" class="stat-total" text-anchor="middle" dominant-baseline="central">${total}</text>`;

		return `
    <div class="mon-info-block mon-info-stats mon-info-ev">
      <h3>EV Yield</h3>
      <div class="mon-info-stats-graph">
        <svg viewBox="-25 -25 150 150" class="mon-info-stats-radar" aria-hidden="true">
          ${gridPolys}
          <polygon points="${polygonPoints}" class="stat-radar-fill" />
          ${vertexDots}
          ${labelsSvg}
          ${numbersSvg}
          ${totalSvg}
        </svg>
      </div>
    </div>
  `;
	};

	let statsHtml = "";
	if (baseStats) {
		statsHtml = renderStatsRadar(baseStats);
	}

	const evObj = info?.evYield || info?.battle?.evYield || null;
	if (evObj) {
		statsHtml += renderEvRadar(evObj);
	}

	// ---------------- TYPE CHART ----------------

	const TYPE_CHART = {
		Normal: { Rock: 0.5, Steel: 0.5, Ghost: 0 },
		Fire: {
			Fire: 0.5,
			Water: 0.5,
			Grass: 2,
			Ice: 2,
			Bug: 2,
			Rock: 0.5,
			Dragon: 0.5,
			Steel: 2,
		},
		Water: {
			Fire: 2,
			Water: 0.5,
			Grass: 0.5,
			Ground: 2,
			Rock: 2,
			Dragon: 0.5,
		},
		Grass: {
			Fire: 0.5,
			Water: 2,
			Grass: 0.5,
			Poison: 0.5,
			Ground: 2,
			Flying: 0.5,
			Bug: 0.5,
			Rock: 2,
			Dragon: 0.5,
			Steel: 0.5,
		},
		Electric: {
			Water: 2,
			Electric: 0.5,
			Grass: 0.5,
			Ground: 0,
			Flying: 2,
			Dragon: 0.5,
		},
		Ice: {
			Fire: 0.5,
			Water: 0.5,
			Grass: 2,
			Ground: 2,
			Flying: 2,
			Dragon: 2,
			Steel: 0.5,
			Ice: 0.5,
		},

		Fighting: {
			Normal: 2,
			Ice: 2,
			Rock: 2,
			Dark: 2,
			Steel: 2,
			Poison: 0.5,
			Flying: 0.5,
			Psychic: 0.5,
			Bug: 0.5,
			Fairy: 0.5,
			Ghost: 0,
		},
		Poison: {
			Grass: 2,
			Fairy: 2,
			Poison: 0.5,
			Ground: 0.5,
			Rock: 0.5,
			Ghost: 0.5,
			Steel: 0,
		},
		Ground: {
			Fire: 2,
			Electric: 2,
			Poison: 2,
			Rock: 2,
			Steel: 2,
			Grass: 0.5,
			Bug: 0.5,
			Flying: 0,
		},
		Flying: {
			Grass: 2,
			Fighting: 2,
			Bug: 2,
			Electric: 0.5,
			Rock: 0.5,
			Steel: 0.5,
		},
		Psychic: { Fighting: 2, Poison: 2, Psychic: 0.5, Steel: 0.5, Dark: 0 },
		Bug: {
			Grass: 2,
			Psychic: 2,
			Dark: 2,
			Fire: 0.5,
			Fighting: 0.5,
			Poison: 0.5,
			Flying: 0.5,
			Ghost: 0.5,
			Steel: 0.5,
			Fairy: 0.5,
		},
		Rock: {
			Fire: 2,
			Ice: 2,
			Flying: 2,
			Bug: 2,
			Fighting: 0.5,
			Ground: 0.5,
			Steel: 0.5,
		},
		Ghost: { Psychic: 2, Ghost: 2, Dark: 0.5, Normal: 0 },
		Dragon: { Dragon: 2, Steel: 0.5, Fairy: 0 },
		Dark: { Psychic: 2, Ghost: 2, Fighting: 0.5, Dark: 0.5, Fairy: 0.5 },
		Steel: {
			Rock: 2,
			Ice: 2,
			Fairy: 2,
			Fire: 0.5,
			Water: 0.5,
			Electric: 0.5,
			Steel: 0.5,
		},
		Fairy: {
			Fighting: 2,
			Dragon: 2,
			Dark: 2,
			Fire: 0.5,
			Poison: 0.5,
			Steel: 0.5,
		},
	};

	const ALL_TYPES = [
		"Normal",
		"Fire",
		"Water",
		"Electric",
		"Grass",
		"Ice",
		"Fighting",
		"Poison",
		"Ground",
		"Flying",
		"Psychic",
		"Bug",
		"Rock",
		"Ghost",
		"Dragon",
		"Dark",
		"Steel",
		"Fairy",
	];

	const ABBR = {
		Normal: "Nor",
		Fire: "Fir",
		Water: "Wat",
		Electric: "Ele",
		Grass: "Gra",
		Ice: "Ice",
		Fighting: "Fig",
		Poison: "Poi",
		Ground: "Gro",
		Flying: "Fly",
		Psychic: "Psy",
		Bug: "Bug",
		Rock: "Roc",
		Ghost: "Gho",
		Dragon: "Dra",
		Dark: "Dar",
		Steel: "Ste",
		Fairy: "Fai",
	};

	const normalizeTypeName = (t) => {
		if (!t) return null;
		const s = String(t).toLowerCase();
		return s.charAt(0).toUpperCase() + s.slice(1);
	};

	let chartHtml = "";
	const defTypes = (types || []).map(normalizeTypeName).filter(Boolean);

	if (defTypes.length) {
		const dmg = {
			"4x": [],
			"2x": [],
			"1.5x": [],
			"1x": [],
			"0.5x": [],
			"0.25x": [],
			"0x": [],
		};

		for (const atk of ALL_TYPES) {
			let mult = 1;
			for (const def of defTypes) {
				const row = TYPE_CHART[atk] || {};
				const m = row[def] != null ? row[def] : 1;
				mult *= m;
			}

			let bucket = "1x";
			if (mult === 0) bucket = "0x";
			else if (mult === 4) bucket = "4x";
			else if (mult === 2) bucket = "2x";
			else if (mult === 1.5) bucket = "1.5x";
			else if (mult === 0.5) bucket = "0.5x";
			else if (mult === 0.25) bucket = "0.25x";

			dmg[bucket].push(atk);
		}

		const groups = [
			ALL_TYPES.slice(0, 6),
			ALL_TYPES.slice(6, 12),
			ALL_TYPES.slice(12, 18),
		];

		const tablesHtml = groups
			.map((group) => {
				const head = group
					.map(
						(t) =>
							`<th><span class="type-abbr type-${t.toLowerCase()}">${ABBR[t]
							}</span></th>`
					)
					.join("");

				const body = group
					.map((t) => {
						const m = dmg["4x"].includes(t)
							? 4
							: dmg["2x"].includes(t)
								? 2
								: dmg["1.5x"].includes(t)
									? 1.5
									: dmg["0.25x"].includes(t)
										? 0.25
										: dmg["0.5x"].includes(t)
											? 0.5
											: dmg["0x"].includes(t)
												? 0
												: 1;

						let cls = "type-fx-100";
						let label = "";

						if (m === 4) {
							cls = "type-fx-400";
							label = "4";
						} else if (m === 2) {
							cls = "type-fx-200";
							label = "2";
						} else if (m === 1.5) {
							cls = "type-fx-150";
							label = "1½";
						} else if (m === 0.5) {
							cls = "type-fx-50";
							label = "½";
						} else if (m === 0.25) {
							cls = "type-fx-25";
							label = "¼";
						} else if (m === 0) {
							cls = "type-fx-0";
							label = "0";
						}

						return `<td class="type-fx-cell ${cls}">${label}</td>`;
					})
					.join("");

				return `
          <table class="type-table-pokedex">
            <thead><tr>${head}</tr></thead>
            <tbody><tr>${body}</tr></tbody>
          </table>
        `;
			})
			.join("");

		chartHtml = `
      <div class="mon-info-block mon-info-typechart">
        <h3>Type Defenses</h3>
        <div class="typechart-matrix">
          ${tablesHtml}
        </div>
      </div>
    `;
	}

	// -------------- Evolution (branches) --------------

	const buildEvoBranches = (evoObj) => {
		if (!evoObj) return [];
		if (Array.isArray(evoObj.branches) && evoObj.branches.length) {
			return evoObj.branches;
		}
		if (Array.isArray(evoObj.chain) && evoObj.chain.length) {
			if (Array.isArray(evoObj.chain[0])) {
				// already [ [..], [..] ]
				return evoObj.chain;
			}
			return [evoObj.chain];
		}

		return [];
	};
	const evoBranches = buildEvoBranches(evo);
	let evoHtml = "";

	const dexList = window.DATA?.dex?.[gameKey] || [];
	if (evoBranches.length) {
		const baseStepMarkup = (step) => {
			if (!step) return "";
			const entry = dexList.find((e) => e && e.id === step.id);
			const imgSrc = step.sprite || entry?.img || null;

			return `
        <div class="mon-info-evo-step">
          ${imgSrc
					? `<div class="evo-sprite">
              <img src="${imgSrc}" alt="${step.name}" loading="lazy" />
            </div>`
					: ""
				}
          <div class="evo-name">${step.name}</div>
        </div>`;
		};

		const methodLabel = (step) => {
			if (!step) return "";
			if (step.method) return step.method;
			if (step.level != null) return `Lv. ${step.level}`;
			return step.trigger || "";
		};

		const branchesHtml = evoBranches
			.map((branch) => {
				if (!Array.isArray(branch) || !branch.length) return "";
				let html = "";

				for (let i = 0; i < branch.length; i++) {
					const step = branch[i];

					if (i === 0) {
						html += baseStepMarkup(step);
						continue;
					}

					const method = methodLabel(step);
					html += `
            <div class="mon-info-evo-arrow-block">
              ${method
							? `<div class="evo-method">${method}</div>`
							: `<div class="evo-method"></div>`
						}
              <div class="mon-info-evo-arrow">→</div>
            </div>
          `;
					html += baseStepMarkup(step);
				}

				return `<div class="mon-info-evo-branch">${html}</div>`;
			})
			.join("");

		evoHtml = `
      <div class="mon-info-block mon-info-evo-block">
        <h3>Evolution</h3>
        <div class="mon-info-evo-branches">
          ${branchesHtml}
        </div>
      </div>`;
	}

	// -------------- Locations --------------

	let locationsHtml = "";
	if (Array.isArray(locations) && locations.length) {
		const items = locations
			.map((loc) => {
				if (typeof loc === "string") return `<li>${loc}</li>`;
				const area = loc.area || "";
				const notes = loc.notes || "";
				if (area && notes)
					return `<li><strong>${area}</strong> — ${notes}</li>`;
				return `<li>${area || notes}</li>`;
			})
			.join("");

		locationsHtml = `
      <div class="mon-info-block mon-info-locations">
        <h3>Locations</h3>
        <ul class="mon-info-locations-list">
          ${items}
        </ul>
      </div>`;
	}

	// -------------- Move pools --------------
	const TM_GEN_BY_GAME = {
		// tweak this map as you add more games
		legendsza: "gen9_2",
	};

	const getTmIconSrc = (game, move) => {
		const genFolder = TM_GEN_BY_GAME[game] || "gen9_2";

		let typeKey = "normal";

		if (move && typeof move === "object" && move.type) {
			typeKey = String(move.type).toLowerCase();
		}

		return `imgs/tms/${genFolder}/${typeKey}.png`;
	};

	const renderMoveLine = (m) => {
		let text;

		if (typeof m === "string") {
			text = m;
		} else {
			const prefix = m.level != null ? `Lv. ${m.level}: ` : "";
			text = `${prefix}${m.name}`;
		}

		const tmIconSrc = getTmIconSrc(gameKey, m);

		return `
      <li class="mon-info-move">
        <span class="mon-info-move-tm-icon">
          ${tmIconSrc ? `<img src="${tmIconSrc}" alt="" loading="lazy" />` : ""}
        </span>
        <span class="mon-info-move-name">${text}</span>
      </li>
    `;
	};

	const movesSection = (label, arr) =>
		!arr || !arr.length
			? ""
			: `
      <div class="mon-info-subblock">
        <h4>${label}</h4>
        <ul>
          ${arr.map((m) => renderMoveLine(m)).join("")}
        </ul>
      </div>`;

	const movesHtml =
		moves && (moves.levelUp || moves.tm || moves.egg)
			? `
      <div class="mon-info-block">
        <h3>Move Pool</h3>
        <div class="mon-info-moves-grid">
          ${movesSection("Level-up", moves.levelUp)}
          ${movesSection("TM / TR", moves.tm)}
          ${movesSection("Egg Moves", moves.egg)}
        </div>
      </div>`
			: "";

	const hasInfo = !!info;

	// ------------------------------------------------------------
	// Extra blocks (completion, size, battle, variants, notes)
	// These are optional and only render when data exists.
	// ------------------------------------------------------------

	const renderBool = (v) => (v == null ? "" : v ? "Yes" : "No");

	// ------------------------------------------------------------
	// Completion / Pills (Dex status + Research + Shiny/Alpha)
	// ------------------------------------------------------------

	const completion = info?.completion || null;

	// --- Dex status pill -------------------------------------------------------
	// Prefer real progress if available, but keep this resilient for testing.
	const detectDexStatus = () => {
		const normalize = (raw) => {
			if (!raw) return "unknown";
			const s = String(raw).trim().toLowerCase();

			// allow either "shiny alpha" or "shiny_alpha"
			if ((s.includes("shiny") && s.includes("alpha")) || s === "shiny_alpha")
				return "shinyalpha";
			if (s.includes("alpha")) return "alpha";
			if (s.includes("shiny")) return "shiny";
			if (s.includes("caught")) return "caught";
			if (s.includes("seen")) return "seen";
			if (s.includes("unknown")) return "unknown";
			return "unknown";
		};

		// 1) Store-driven truth (your actual saved progress)
		const storeStatusObj = window.store?.getDexStatus?.(gameKey, mon.id);
		if (storeStatusObj?.status != null) {
			return normalize(storeStatusObj.status);
		}

		// 2) Fallbacks for testing / older shapes
		const raw =
			info?.dexStatus ??
			mon?.dexStatus ??
			mon?.status ??
			mon?.progress?.dexStatus ??
			mon?.progress?.status ??
			null;

		if (raw) return normalize(raw);

		// boolean fallbacks
		if (mon?.shinyAlpha) return "shinyalpha";
		if (mon?.alpha) return "alpha";
		if (mon?.shiny) return "shiny";
		if (mon?.caught) return "caught";
		if (mon?.seen) return "seen";

		return "unknown";
	};

	const dexStatus = statusFromCard || detectDexStatus();

	const dexStatusLabel = (() => {
		// show the current status instead of "Dex Entry"
		if (dexStatus === "unknown") return "Unknown";
		if (dexStatus === "seen") return "Seen";
		if (dexStatus === "caught") return "Caught";
		if (dexStatus === "shiny") return "Shiny";
		if (dexStatus === "alpha") return "Alpha";
		if (dexStatus === "shinyalpha") return "Shiny Alpha";
		return "Unknown";
	})();

	const dexStatusClass = `is-status-${dexStatus}`;

	// --- Research pill ---------------------------------------------------------
	// "Pull from the dex and pull any research task for that id number"
	// For now, we treat "research tasks exist" as:
	// - dex entry has researchTasks / research / researchId / researchKey / etc.
	// - or you have a window.DATA.research bucket (optional)
	const dexEntry = dexList.find((e) => e && e.id === mon.id) || null;

	const researchFromDex =
		dexEntry?.researchTasks ??
		dexEntry?.research ??
		dexEntry?.researchId ??
		dexEntry?.researchKey ??
		info?.completion?.researchTasks ??
		info?.researchTasks ??
		info?.research ??
		null;

	const researchData =
		researchFromDex ??
		window.DATA?.research?.[gameKey]?.[mon.id] ??
		window.DATA?.research?.legendsarceus?.[mon.id] ??
		null;

	const isLegendsArceus = gameKey === "legendsarceus";

	const getResearchProgress = () => {
		const tasks = Array.isArray(researchData)
			? researchData
			: Array.isArray(researchData?.tasks)
				? researchData.tasks
				: Array.isArray(researchFromDex)
					? researchFromDex
					: null;

		const byGame =
			window.store?.dexResearchStatus instanceof Map
				? window.store.dexResearchStatus.get(gameKey)
				: null;

		const byPLA =
			window.store?.dexResearchStatus instanceof Map
				? window.store.dexResearchStatus.get("legendsarceus")
				: null;

		// This is the actual saved per-task slider level map: rec[taskIdx] = level
		const rec =
			(byGame && byGame[String(mon.id)]) ||
			(byPLA && byPLA[String(mon.id)]) ||
			{};

		// Tier-based stats
		let totalTiers = 0;
		let doneTiers = 0;
		let levelPoints = 0;

		if (Array.isArray(tasks) && tasks.length) {
			tasks.forEach((t, idx) => {
				const tiers = Array.isArray(t?.tiers) ? t.tiers : [];
				const steps = tiers.length || 0;

				totalTiers += steps;

				const raw = rec[idx];
				const lvl = typeof raw === "number" ? raw : raw ? steps : 0; // legacy true => full
				const clamped = Math.max(0, Math.min(steps, lvl));

				doneTiers += clamped;
				levelPoints += clamped * (t?.boost ? 2 : 1);
			});
		}

		const researchLevel = Math.min(10, levelPoints);
		const allComplete = totalTiers > 0 && doneTiers >= totalTiers;

		return {
			tasks,
			rec,
			totalTiers,
			doneTiers,
			levelPoints,
			researchLevel,
			allComplete,
		};
	};

	const researchProg = getResearchProgress();

	// clickable if we actually have tasks (even if opener isn’t wired yet)
	const canOpenResearch =
		isLegendsArceus &&
		(!!researchProg?.tasks ||
			!!completion?.researchTasks ||
			researchData != null);

	// Determine research state colors:
	// - red if not completed
	// - green if >= 10 slider positions completed
	// - gold if all completed
	const getResearchState = () => {
		if (!isLegendsArceus) return "off";
		if (!researchProg.tasks) return "off";

		if (researchProg.allComplete) return "gold";
		if (Number(researchProg.researchLevel || 0) >= 10) return "green";
		return "red";
	};

	const researchState = getResearchState();

	// --- Shiny/Alpha availability pills ---------------------------------------
	// Based on maxStatus tags:
	// - no tag => both true
	// - "shiny" => shiny true, alpha false
	// - "caught" => both false
	//
	// alpha pill only shown for Legends Arceus + ZA (per your request)
	const maxStatusRaw =
		info?.maxStatus ??
		mon?.maxStatus ??
		(mon?.tags && (mon.tags.maxStatus || mon.tags.maxstatus)) ??
		null;

	const maxStatus =
		maxStatusRaw == null ? null : String(maxStatusRaw).toLowerCase();

	const computeAvailabilityFromMaxStatus = () => {
		if (!maxStatus) return { shiny: true, alpha: true };

		if (maxStatus === "caught") return { shiny: false, alpha: false };
		if (maxStatus === "shiny") return { shiny: true, alpha: false };

		// anything else -> default permissive (keeps testing flexible)
		return { shiny: true, alpha: true };
	};

	const avail = computeAvailabilityFromMaxStatus();

	const showAlphaPill = gameKey === "legendsarceus" || gameKey === "legendsza";

	const pillCount =
		1 + // status
		(isLegendsArceus && researchProg.tasks ? 1 : 0) +
		1 + // shiny
		(showAlphaPill ? 1 : 0);

	const pillCols = Math.min(4, Math.max(2, pillCount));

	// --- Build pill grid -------------------------------------------------------
	const completionTopHtml = `
<div class="mon-info-completion-grid" style="grid-template-columns: repeat(${pillCols}, minmax(0, 1fr));">

  <button class="mon-info-pill ${dexStatusClass}" type="button" data-pill="dexStatus">
    <span class="pill-title">${dexStatusLabel}</span>
  </button>

 ${isLegendsArceus && researchProg.tasks
			? `<button class="mon-info-pill ${researchState === "gold"
				? "is-gold"
				: researchState === "green"
					? "is-green"
					: "is-red"
			} ${canOpenResearch ? "is-clickable" : ""}"
      type="button"
      data-pill="research"
      title="${canOpenResearch
				? "Open Research Tasks"
				: "Research modal not available for this entry"
			}">
    <span class="pill-title">Research</span>
    <span class="pill-sub">${Number(researchProg.researchLevel || 0)}</span>
  </button>`
			: ``
		}

  <button class="mon-info-pill ${avail.shiny ? "is-green" : "is-red"
		}" type="button" data-pill="shinyAvail">
    <span class="pill-title">${avail.shiny ? "Can be Shiny" : "Cannot be Shiny"
		}</span>
  </button>

  ${showAlphaPill
			? `<button class="mon-info-pill ${avail.alpha ? "is-green" : "is-red"
			}" type="button" data-pill="alphaAvail">
    <span class="pill-title">${avail.alpha ? "Can be Alpha" : "Cannot be Alpha"
			}</span>
      </button>`
			: `<div></div>`
		}

</div>
`;

	// Battle / growth (supports nested object or flat fields)
	const battle = info?.battle || info?.growth || {};
	const catchRate = battle.catchRate ?? info?.catchRate ?? null;
	const baseFriendship = battle.baseFriendship ?? info?.baseFriendship ?? null;
	const expYield = battle.expYield ?? info?.expYield ?? null;

	// Variants / special forms (supports nested object or flat arrays)
	const variants = info?.variants || info?.specialVariants || {};
	const forms = variants.forms ?? info?.forms ?? null;
	const regional =
		variants.regional ?? variants.regionalForms ?? info?.regionalForms ?? null;
	const mega = variants.mega ?? variants.megaForms ?? info?.megaForms ?? null;
	const gmax = variants.gmax ?? variants.gigantamax ?? info?.gigantamax ?? null;
	const other = variants.other ?? variants.otherForms ?? null;

	const variantsHtml =
		forms || regional || mega || gmax || other
			? `
      <div class="mon-info-block">
        <h3>Forms &amp; Variants</h3>
        ${renderListRow("Forms", forms)}
        ${renderListRow("Regional", regional)}
        ${renderListRow("Mega", mega)}
        ${renderListRow("Gigantamax", gmax)}
        ${renderListRow("Other", other)}
      </div>`
			: "";

	const notesHtml =
		Array.isArray(info?.notes) && info.notes.filter(Boolean).length
			? `
      <div class="mon-info-block">
        <h3>Notes</h3>
        <ul class="mon-info-notes">
          ${info.notes
				.filter((n) => n != null && n !== "")
				.map((n) => `<li>${n}</li>`)
				.join("")}
        </ul>
      </div>`
			: "";

	const _wireResearchClick = () => {
		const researchBtn = monInfoBody.querySelector('[data-pill="research"]');
		if (!researchBtn || researchBtn.dataset.wired) return;
		researchBtn.dataset.wired = "1";

		researchBtn.addEventListener("click", () => {
			if (!canOpenResearch) return;

			const key =
				typeof researchFromDex === "string" ||
					typeof researchFromDex === "number"
					? researchFromDex
					: researchData?.modalKey || researchData?.researchId || mon.id;

			const opts = { mon, tasks: researchProg?.tasks };

			// 1) Direct openers (if you later expose them)
			if (typeof window?.PPGC?.openResearchModal === "function") {
				window.PPGC.openResearchModal(gameKey, key, opts);
				return;
			}
			if (typeof window?.PPGC?.openDexResearchModal === "function") {
				window.PPGC.openDexResearchModal(gameKey, key, opts);
				return;
			}
			if (typeof window?.PPGC?.openResearchTasksModal === "function") {
				window.PPGC.openResearchTasksModal(gameKey, key, opts);
				return;
			}

			// 2) BEST FALLBACK: click the existing dex-card research button (uses your already-working wiring)
			const cardBtn = sourceCard?.querySelector?.(".research-launch");
			if (cardBtn) {
				cardBtn.click();
				return;
			}

			// 3) Event fallback (for future wiring)
			window.dispatchEvent(
				new CustomEvent("ppgc:openResearchModal", {
					detail: { gameKey, key, ...opts },
				})
			);

			console.warn(
				"[PPGC] Research pill clicked but no modal opener found. " +
				"Tried PPGC openers, then card .research-launch, then event fallback.",
				{ gameKey, key }
			);
		});
	};

	// ---- PROFILE (moved from header + merged with size/gender/friendship) ----

	const sizeObj = info?.size || {};
	const height = sizeObj.height ?? info?.height ?? null;
	const weight = sizeObj.weight ?? info?.weight ?? null;

	const genderObj = info?.gender || null;
	const genderRatioText =
		genderObj && (genderObj.maleRatio != null || genderObj.femaleRatio != null)
			? `${genderObj.maleRatio ?? "?"}% ♂ / ${genderObj.femaleRatio ?? "?"}% ♀`
			: info?.genderRatio ?? null;

	const genderNotesText = genderObj?.notes ?? null;

	// baseFriendship already computed above in your battle section; reuse it
	const baseFriendshipProfile =
		info?.battle?.baseFriendship ?? info?.baseFriendship ?? null;

	const renderProfileItem = (label, valueOrArr) => {
		if (valueOrArr == null) return "";

		// Array -> stacked
		if (Array.isArray(valueOrArr)) {
			const cleaned = valueOrArr.filter((v) => v != null && v !== "");
			if (!cleaned.length) return "";

			const itemsHtml = cleaned
				.map((v) => `<span class="value-line">${v}</span>`)
				.join("");

			return `
      <div class="mon-info-profile-item">
        <div class="label">${label}</div>
        <div class="value value--stacked">${itemsHtml}</div>
      </div>`;
		}

		// Single value
		const v = String(valueOrArr);
		if (!v) return "";

		return `
    <div class="mon-info-profile-item">
      <div class="label">${label}</div>
      <div class="value">${v}</div>
    </div>`;
	};

	// Build the 8 values
	const profileItems = [
		renderProfileItem("Abilities", abilities),
		renderProfileItem("Egg Groups", eggGroups),
		renderProfileItem("Exp Growth", expGroup),
		renderProfileItem("Base Egg Steps", baseEggSteps != null ? baseEggSteps : null),

		renderProfileItem("Height", height),
		renderProfileItem("Weight", weight),
		renderProfileItem("Gender Ratio", genderRatioText),
		renderProfileItem("Base Friendship", baseFriendshipProfile),
	].filter(Boolean).join("");

	const profileHtml = `
  <div class="mon-info-block mon-info-profile">
    <h3>Profile</h3>
    <div class="mon-info-profile-grid">
      ${profileItems}
    </div>
  </div>
`;

	const quickStatsHtml = completionTopHtml;

	monInfoBody.innerHTML = `
    <div class="mon-info-header">
      ${spriteSrc
			? `<div class="mon-info-sprite">
          <img src="${spriteSrc}" alt="${mon.name}" loading="lazy" />
        </div>`
			: ""
		}
      <div class="mon-info-main">
        <div class="mon-info-topline">
          <div class="mon-info-basic">
            <div class="mon-info-name">
              #${String(mon.id).padStart(3, "0")} ${mon.name}
            </div>
            <div class="mon-info-types">
              ${(types || [])
			.map(
				(t) =>
					`<span class="type-pill type-${String(
						t
					).toLowerCase()}">${t}</span>`
			)
			.join("")}
            </div>
            ${info?.species
			? `<div class="mon-info-species">${info.species}</div>`
			: ""
		}
          </div>
          ${quickStatsHtml
			? `<div class="mon-info-quickstats">${quickStatsHtml}</div>`
			: ""
		}
        </div>
      </div>
    </div>

    ${info?.flavor
			? `<div class="mon-info-block mon-info-flavor">${info.flavor}</div>`
			: ""
		}

    <div class="mon-info-layout">
      <aside class="mon-info-col mon-info-col--summary">
        ${chartHtml}
		${statsHtml}
      </aside>

      <section class="mon-info-col mon-info-col--details">
		${profileHtml}
		${variantsHtml}
		${evoHtml}
		${locationsHtml}
		${movesHtml ||
		(hasInfo
			? ""
			: `<div class="mon-info-empty">No move data defined yet for this game.</div>`)
		}
		${notesHtml}
		</section>
    </div>

    ${!hasInfo
			? `<div class="mon-info-empty">
          No detailed <code>monInfo</code> entry configured yet for this Pokémon in <strong>${gameKey}</strong>.
        </div>`
			: ""
		}
  `;
	_wireResearchClick();

	monInfoModal.classList.add("open");
	monInfoModal.setAttribute("aria-hidden", "false");
	monInfoModal.dataset.gameKey = gameKey;
	monInfoModal.dataset.monId = String(mon.id);
}

export function setupMonInfoModal() {
	const monInfoModal = document.getElementById("monInfoModal");
	const monInfoClose = document.getElementById("monInfoClose");
	if (!monInfoModal) return;

	const close = () => {
		monInfoModal.classList.remove("open");
		monInfoModal.setAttribute("aria-hidden", "true");
	};

	// Wire close handlers once per page load (prevents duplicate listeners on repeated opens)
	if (monInfoModal.dataset.wired !== "1") {
		monInfoModal.dataset.wired = "1";

		monInfoModal.addEventListener("click", (e) => {
			if (e.target === monInfoModal) close();
		});

		monInfoClose?.addEventListener("click", close);

		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && monInfoModal.classList.contains("open")) {
				close();
			}
		});
	}

	if (!window.__PPGC_MONINFO_RESEARCH_WIRED) {
		window.__PPGC_MONINFO_RESEARCH_WIRED = true;

		window.addEventListener("ppgc:researchSaved", (e) => {
			const detail = e?.detail || {};
			const monInfoModal = document.getElementById("monInfoModal");
			const monInfoBody = document.getElementById("monInfoBody");
			if (!monInfoModal || !monInfoBody) return;
			if (!monInfoModal.classList.contains("open")) return;

			// Only update if the current mon matches
			const currentGame = monInfoModal.dataset.gameKey;
			const currentMonId = monInfoModal.dataset.monId;

			if (String(detail.gameKey) !== String(currentGame)) return;
			if (String(detail.monId) !== String(currentMonId)) return;

			const btn = monInfoBody.querySelector('[data-pill="research"]');
			const sub = btn?.querySelector(".pill-sub");
			if (!btn || !sub) return;

			const stats = detail.stats || {};
			const lvl = Number(stats.researchLevel || 0);

			sub.textContent = `${lvl}`;

			btn.classList.remove("is-red", "is-green", "is-gold", "is-off");
			if (stats.allComplete) btn.classList.add("is-gold");
			else if (lvl >= 10) btn.classList.add("is-green");
			else btn.classList.add("is-red");
		});
	}
}
