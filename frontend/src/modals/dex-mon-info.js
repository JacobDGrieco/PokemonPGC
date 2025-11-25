// dex-mon-info.js

export function openMonInfo(gameKey, genKey, mon) {
	const monInfoModal = document.getElementById("monInfoModal");
	const monInfoTitle = document.getElementById("monInfoTitle");
	const monInfoBody = document.getElementById("monInfoBody");

	if (!monInfoModal || !monInfoBody) return;

	const info = window.DATA?.monInfo?.[gameKey]?.[mon.id] || null;

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
		let v = valueOrArr;

		if (Array.isArray(valueOrArr)) {
			if (!valueOrArr.length) return "";
			v = valueOrArr.join(", ");
		}
		if (v === "") return "";

		return `
      <div class="mon-info-row">
        <span class="label">${label}</span>
        <span class="value">${v}</span>
      </div>`;
	};

	// ---------------- TYPE CHART ----------------

	const TYPE_CHART = {
		Normal: { Rock: 0.5, Steel: 0.5, Ghost: 0 },
		Fire: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 2, Bug: 2, Rock: 0.5, Dragon: 0.5, Steel: 2 },
		Water: { Fire: 2, Water: 0.5, Grass: 0.5, Ground: 2, Rock: 2, Dragon: 0.5 },
		Grass: { Fire: 0.5, Water: 2, Grass: 0.5, Poison: 0.5, Ground: 2, Flying: 0.5, Bug: 0.5, Rock: 2, Dragon: 0.5, Steel: 0.5 },
		Electric: { Water: 2, Electric: 0.5, Grass: 0.5, Ground: 0, Flying: 2, Dragon: 0.5 },
		Ice: { Fire: 0.5, Water: 0.5, Grass: 2, Ground: 2, Flying: 2, Dragon: 2, Steel: 0.5, Ice: 0.5 },

		Fighting: {
			Normal: 2, Ice: 2, Rock: 2, Dark: 2, Steel: 2,
			Poison: 0.5, Flying: 0.5, Psychic: 0.5, Bug: 0.5, Fairy: 0.5,
			Ghost: 0
		},
		Poison: { Grass: 2, Fairy: 2, Poison: 0.5, Ground: 0.5, Rock: 0.5, Ghost: 0.5, Steel: 0 },
		Ground: { Fire: 2, Electric: 2, Poison: 2, Rock: 2, Steel: 2, Grass: 0.5, Bug: 0.5, Flying: 0 },
		Flying: { Grass: 2, Fighting: 2, Bug: 2, Electric: 0.5, Rock: 0.5, Steel: 0.5 },
		Psychic: { Fighting: 2, Poison: 2, Psychic: 0.5, Steel: 0.5, Dark: 0 },
		Bug: {
			Grass: 2, Psychic: 2, Dark: 2,
			Fire: 0.5, Fighting: 0.5, Poison: 0.5, Flying: 0.5, Ghost: 0.5,
			Steel: 0.5, Fairy: 0.5
		},
		Rock: { Fire: 2, Ice: 2, Flying: 2, Bug: 2, Fighting: 0.5, Ground: 0.5, Steel: 0.5 },
		Ghost: { Psychic: 2, Ghost: 2, Dark: 0.5, Normal: 0 },
		Dragon: { Dragon: 2, Steel: 0.5, Fairy: 0 },
		Dark: { Psychic: 2, Ghost: 2, Fighting: 0.5, Dark: 0.5, Fairy: 0.5 },
		Steel: { Rock: 2, Ice: 2, Fairy: 2, Fire: 0.5, Water: 0.5, Electric: 0.5, Steel: 0.5 },
		Fairy: { Fighting: 2, Dragon: 2, Dark: 2, Fire: 0.5, Poison: 0.5, Steel: 0.5 },
	};

	const ALL_TYPES = [
		"Normal", "Fire", "Water", "Electric", "Grass", "Ice",
		"Fighting", "Poison", "Ground", "Flying", "Psychic",
		"Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy",
	];

	const ABBR = {
		Normal: "Nor", Fire: "Fir", Water: "Wat", Electric: "Ele", Grass: "Gra",
		Ice: "Ice", Fighting: "Fig", Poison: "Poi", Ground: "Gro", Flying: "Fly",
		Psychic: "Psy", Bug: "Bug", Rock: "Roc", Ghost: "Gho", Dragon: "Dra",
		Dark: "Dar", Steel: "Ste", Fairy: "Fai",
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
			"4x": [], "2x": [], "1.5x": [],
			"1x": [], "0.5x": [], "0.25x": [], "0x": [],
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
							`<th><span class="type-abbr type-${t.toLowerCase()}">${ABBR[t]}</span></th>`
					)
					.join("");

				const body = group
					.map((t) => {
						const m =
							dmg["4x"].includes(t) ? 4 :
								dmg["2x"].includes(t) ? 2 :
									dmg["1.5x"].includes(t) ? 1.5 :
										dmg["0.25x"].includes(t) ? 0.25 :
											dmg["0.5x"].includes(t) ? 0.5 :
												dmg["0x"].includes(t) ? 0 : 1;

						let cls = "type-fx-100";
						let label = "";

						if (m === 4) { cls = "type-fx-400"; label = "4"; }
						else if (m === 2) { cls = "type-fx-200"; label = "2"; }
						else if (m === 1.5) { cls = "type-fx-150"; label = "1½"; }
						else if (m === 0.5) { cls = "type-fx-50"; label = "½"; }
						else if (m === 0.25) { cls = "type-fx-25"; label = "¼"; }
						else if (m === 0) { cls = "type-fx-0"; label = "0"; }

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

	const dexList = window.DATA.dex?.[gameKey] || [];
	const buildEvoBranches = (evoObj) => {
		if (!evoObj) return [];
		if (Array.isArray(evoObj.branches) && evoObj.branches.length) return evoObj.branches;
		if (Array.isArray(evoObj.chain) && evoObj.chain.length) return evoObj.chain;
		return [];
	};
	const evoBranches = buildEvoBranches(evo);
	let evoHtml = "";

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
              ${method ? `<div class="evo-method">${method}</div>` : `<div class="evo-method"></div>`}
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
				if (area && notes) return `<li><strong>${area}</strong> — ${notes}</li>`;
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

	const movesSection = (label, arr) =>
		!arr || !arr.length
			? ""
			: `
      <div class="mon-info-subblock">
        <h4>${label}</h4>
        <ul>
          ${arr
				.map((m) =>
					typeof m === "string"
						? `<li>${m}</li>`
						: `<li>${m.level != null ? `Lv. ${m.level}: ` : ""}${m.name}</li>`
				)
				.join("")}
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

	const quickStatsHtml = [
		renderListRow("Height", info?.heightM ? `${info.heightM} m` : null),
		renderListRow("Weight", info?.weightKg ? `${info.weightKg} kg` : null),
		renderListRow("Egg Group", eggGroups),
		renderListRow("Abilities", abilities),
	].join("");

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
					`<span class="type-pill type-${String(t).toLowerCase()}">${t}</span>`
			)
			.join("")}
            </div>
            ${info?.species ? `<div class="mon-info-species">${info.species}</div>` : ""}
          </div>
          ${quickStatsHtml
			? `<div class="mon-info-quickstats">${quickStatsHtml}</div>`
			: ""
		}
        </div>
      </div>
    </div>

    ${info?.flavor ? `<div class="mon-info-block mon-info-flavor">${info.flavor}</div>` : ""}

    <div class="mon-info-layout">
      <aside class="mon-info-col mon-info-col--summary">
        ${chartHtml}
      </aside>

      <section class="mon-info-col mon-info-col--details">
        ${evoHtml}
        ${locationsHtml}
        ${movesHtml ||
		(hasInfo
			? ""
			: `<div class="mon-info-empty">No move data defined yet for this game.</div>`)}
      </section>
    </div>

    ${!hasInfo
			? `<div class="mon-info-empty">
          No detailed <code>monInfo</code> entry configured yet for this Pokémon in <strong>${gameKey}</strong>.
        </div>`
			: ""
		}
  `;

	monInfoModal.classList.add("open");
	monInfoModal.setAttribute("aria-hidden", "false");
}

export function setupMonInfoModal() {
	const monInfoModal = document.getElementById("monInfoModal");
	const monInfoClose = document.getElementById("monInfoClose");
	if (!monInfoModal) return;

	const close = () => {
		monInfoModal.classList.remove("open");
		monInfoModal.setAttribute("aria-hidden", "true");
	};

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
