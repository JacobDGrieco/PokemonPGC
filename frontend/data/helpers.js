// --- Task/Dex/Fashion reference helpers ---
function _pad(v, zeroes) {
	const s = String(v ?? "");

	// Handle form IDs like "130-f" / "386-a" / "869-cs-b"
	const parts = s.split("-");
	const head = parts[0];

	// If head isn't a number, just return original string
	if (!/^\d+$/.test(head)) return s;

	const padded = head.padStart(zeroes, "0");
	return parts.length > 1 ? `${padded}-${parts.slice(1).join("-")}` : padded;
};
window.pad3 = (v) => _pad(v, 3);
window.pad4 = (v) => _pad(v, 4);

window._dex = function (game, type, id, form) {
	if (arguments.length === 3) {
		return { game, dexType: type, id, };
	} else {
		return { game, dexType: type, id, form: form, };
	}
};
window._regionalDex = (game, ...args) => _dex(game, "regional", ...args);
window._nationalDex = (game, ...args) => _dex(game, "national", ...args);

function resolveGameSpritePathPrefix(gameKey) {
	if (gameKey.indexOf("-") > 0) gameKey = gameKey.split("-")[0];

	switch (String(gameKey || "").toLowerCase()) {
		// Gen 1
		case "red":
		case "blue":
			return "gen1/red-blue/";
		case "green":
			return "gen1/green/";
		case "yellow":
			return "gen1/yellow/";

		// Gen 2
		case "gold":
			return "gen2/gold/";
		case "silver":
			return "gen2/silver/";
		case "crystal":
			return "gen2/crystal/";

		// Gen 3
		case "ruby":
		case "sapphire":
			return "gen3/ruby-sapphire/";
		case "firered":
		case "leafgreen":
			return "gen3/firered-leafgreen/";
		case "emerald":
			return "gen3/emerald/";

		// Gen 4
		case "diamond":
		case "pearl":
			return "gen4/diamond-pearl/";
		case "platinum":
			return "gen4/platinum/";
		case "heartgold":
		case "soulsilver":
			return "gen4/heartgold-soulsilver/";

		// Gen 5
		case "black":
		case "white":
		case "black2":
		case "white2":
			return "gen5/";

		// Gen 6
		case "x":
		case "y":
		case "omegaruby":
		case "alphasapphire":

		// Gen 7
		case "sun":
		case "moon":
		case "ultrasun":
		case "ultramoon":
			return "gen6-7/x-ultra/";

		// Gen 7 Part 2
		case "letsgopikachu":
		case "letsgoeevee":
			return "gen6-7/lgpe/";

		// Gen 8
		case "sword":
		case "swordioa":
		case "swordct":
		case "shield":
		case "shieldioa":
		case "shieldct":
			return "gen8/sword-shield/";

		// Gen 8 Part 2
		case "brilliantdiamond":
		case "shiningpearl":
			return "gen8/brilliantdiamond-shiningpearl/";
		case "legendsarceus":
			return "gen8/legendsarceus/";

		// Gen 9
		case "scarlet":
		case "scarlettm":
		case "scarletid":
		case "violet":
		case "violettm":
		case "violetid":
			return "gen9/scarlet-violet/";

		// Gen 9 Part 2
		case "legendsza":
		case "legendszamd":
			return "gen9/legendsza/";

		// HOME
		case "home":
		default:
			return "pokemon_home/";
	}
}
window._sprite = function (gen, game, id, shiny, frontBack, thumbIcon, animated) {
	let path = "imgs/sprites/" + resolveGameSpritePathPrefix(game);

	let folder = "";
	if (gen === 1) folder += !shiny ? "bw" : "colored";
	else folder += !shiny ? "base" : "shiny";
	folder += !thumbIcon ? (!frontBack ? "-front" : "-back") : "";
	if (!(gen < 6) || gen === "home") folder += !thumbIcon ? "-thumb" : "-icon";
	folder += !animated ? "" : "-animated";
	path += folder + "/";

	path += pad4(id);

	if (gen === 5 && animated) path += ".gif";
	else path += animated ? ".webm" : ".png";

	return path;
};
window._model = function (gen, game, id, shiny, form) {
	const g = Number(gen);
	if (g < 6) return;

	const gameKey = String(game || "").trim();
	const nati = pad4(id);
	const formKey = formKeyToSuffix(form);

	const root = "imgs/sprites/";
	const baseOrShiny = shiny ? "shiny-model" : "base-model";

	const prefix = resolveGameSpritePathPrefix(gameKey);

	if (g === 6) {
		const folder = `${baseOrShiny}-xyoras/`;
		const fname = formKey ? `${nati}-${formKey}.glb` : `${nati}.glb`;
		return root + prefix + folder + fname;
	} else if (g === 7) {
		const folder = `${baseOrShiny}-smu/`;
		const fname = formKey ? `${nati}-${formKey}.glb` : `${nati}.glb`;
		return root + prefix + folder + fname;
	} else {
		// Gen 8+ style: per-mon folder.
		// - No explicit form:  <nati>/model.glb  and  <nati>/textures/
		// - Form:              <nati>/<form>.glb and <nati>/<form>/
		const folder = `${baseOrShiny}/${nati}/`;
		const fname = formKey ? `${nati}-${formKey}.glb` : `${nati}.glb`;
		return root + prefix + folder + fname;
	}

};
window.wantAnimatedDexSprites = function (gen) {
	const mode = window.PPGC?._storeRef?.state?.dexSpriteMode
		?? window.PPGC?.store?.state?.dexSpriteMode
		?? "static";

	// Explicit boolean return (never undefined)
	return mode === "animated" && Number(gen) >= 5;
};
function normFormKey(form) {
	if (!form) return "";
	return String(form)
		.trim()
		.toLowerCase()
		.replace(/\s+/g, "_"); // spaces -> underscores
}
window._frontSprite = (gen, game, natiId) => _sprite(gen, game, natiId, false, false, false, false);
window._backSprite = (gen, game, natiId) => _sprite(gen, game, natiId, false, true, false, false);
window._frontSpriteAnimated = (gen, game, natiId) => _sprite(gen, game, natiId, false, false, false, true);
window._backSpriteAnimated = (gen, game, natiId) => _sprite(gen, game, natiId, false, true, false, true);
window._iconSprite = (gen, game, natiId) => _sprite(gen, game, natiId, false, false, true, false);
window._baseModel = (gen, game, natiId, form) => _model(gen, game, natiId, false, form);

window._frontSpriteShiny = (gen, game, natiId) => _sprite(gen, game, natiId, true, false, false, false);
window._backSpriteShiny = (gen, game, natiId) => _sprite(gen, game, natiId, true, true, false, false);
window._frontSpriteShinyAnimated = (gen, game, natiId) => _sprite(gen, game, natiId, true, false, false, true);
window._backSpriteShinyAnimated = (gen, game, natiId) => _sprite(gen, game, natiId, true, true, false, true);
window._iconSpriteShiny = (gen, game, natiId) => _sprite(gen, game, natiId, true, false, true, false);
window._shinyModel = (gen, game, natiId, form) => _model(gen, game, natiId, true, form);

const ITEM = ["apricorns", "balls", "berries", "form-items", "fossils", "held-items", "key-items", "mails", "medicines", "mega-stones", "partner-gifts", "stat-items", "hms", "tms", "trs", "treasures", "usable-items", "zcrystals"];
window._imageByGen = function (type, genKey, name) {
	const prefix = ITEM.includes(type) ? "items/" : "";
	if (type === "hms" || type === "tms" || type === "trs") type = `thms/${type}`;

	let gen = "";
	switch (genKey) {
		case 1:
		case 2:
		case 3: gen = "gen1-3/"; break;
		case 4:
			if (type === "key-items") { gen = "gen4/"; break; }
			if (type === "mails") { gen = "gen4/"; break; }
		case 5:
			if (type === "key-items") { gen = "gen5/"; break; }
			if (type === "mails") { gen = "gen5/"; break; }
			break;
		case 6:
			if (type === "key-items") { gen = "gen6/"; break; }
		case 7:
			if (type === "key-items") { gen = "gen7/"; break; }
		case 8:
			if (type === "key-items") { gen = "gen8/"; break; }
			else gen = "gen4-8/";
			break;
		case 7.5:
		case "7_2":
			if (type === "berries") { gen = "gen7_2/"; break; }
			if (type === "key-items") { gen = "gen7_2/"; break; }
			else gen = "gen4-8/";
			break;
		case 8.5:
		case "8_2": gen = "gen8_2/"; break;
		case 9: gen = "gen9/"; break;
		case 9.5:
		case "9_2": gen = "gen9_2/"; break;
		case "home": gen = "home/"; break;
		case 0:
		default: gen = "";
	}

	return `imgs/${prefix}${type}${gen}${name}.png`;
};
window._imageByGame = function (type, gameKey, name, bwORc) {
	if (type && type[type.length - 1] !== 's') type = type + 's';

	let game = "";
	switch (gameKey) {
		// Gen 1:
		case "red":
		case "blue":
			game = "gen1/red-blue/" + (!bwORc ? "bw/" : "colored/"); break;
		case "yellow":
			game = "gen1/yellow/" + (!bwORc ? "bw/" : "colored/"); break;

		// Gen 2
		case "gold":
			game = "gen2/gold/"; break;
		case "silver":
			game = "gen2/silver/"; break;
		case "crystal":
			game = "gen2/crystal/"; break;

		// Gen 3
		case "ruby":
		case "sapphire":
		case "emerald":
			game = "gen3/ruby-sapphire-emerald/"; break;
		case "firered":
		case "leafgreen":
			game = "gen3/firered-leafgreen/"; break;

		// Gen 4
		case "diamond":
		case "pearl":
		case "platinum":
			game = "gen4/diamond-pearl-platinum/"; break;
		case "heartgold":
		case "soulsilver":
			game = "gen4/heartgold-soulsilver/"; break;

		// Gen 5
		case "black":
		case "white":
		case "black2":
		case "white2":
			game = "gen5/"; break;

		// Gen 6
		case "x":
		case "y":
			game = "gen6/xy/"; break;
		case "omegaruby":
		case "alphasapphire":
			game = "gen6/omegaruby-alphasapphire/"; break;

		// Gen 7
		case "sun":
		case "moon":
		case "ultrasun":
		case "ultramoon":
			game = "gen7/sun-moon-ultra/"; break;

		// Gen 7 Part 2
		case "letsgopikachu":
		case "letsgoeevee":
			game = "gen7_2/"; break;

		// Gen 8
		case "sword":
		case "swordioa":
		case "swordct":
		case "shield":
		case "shieldioa":
		case "shieldct":
			game = "gen8/sword-shield/"; break;

		// Gen 8 Part 2
		case "brilliantdiamond":
		case "shiningpearl":
			game = "gen8_2/brilliantdiamond-shiningpearl/"; break;
		case "legendsarceus":
			game = "gen8_2/legendsarceus/"; break;

		// Gen 9
		case "scarlet":
		case "scarlettm":
		case "scarletid":
		case "violet":
		case "violettm":
		case "violetid":
			game = "gen9/scarlet-violet/"; break;

		// Gen 9 Part 2
		case "legendsza":
		case "legendszamd":
			game = "gen9_2/"; break;

		// HOME
		case "home":
			game = "home/"; break;
		default:
			game = "";
	}

	return "imgs/" + type + game + name + ".png";
};

// For BDSP and LA, add bdsp/ or legendsarceus/ to the name
window._ball = (gen, name) => _imageByGen("balls", gen, name);
window._berry = (gen, name) => _imageByGen("berries", gen, name);
window._formItem = (gen, name) => _imageByGen("form-items", gen, name);
window._fossil = (gen, name) => _imageByGen("fossils", gen, name);
window._heldItems = (gen, name) => _imageByGen("held-items", gen, name);
window._hm = (gen, name) => _imageByGen("hms", gen, name);
window._keyItem = (gen, name) => _imageByGen("key-items", gen, name);
window._mail = (name) => _imageByGen("mails", 0, name);
window._medicine = (name) => _imageByGen("medicines", 0, name);
window._megaStone = (gen, name) => _imageByGen("mega-stones", gen, name);
window._partnerItem = (name) => _imageByGen("partner-items", 0, name);
window._ribbon = (gen, name) => _imageByGen("ribbons", gen, name);
window._statItems = (gen, name) => _imageByGen("stat-items", gen, name);
window._tm = (gen, name) => _imageByGen("tms", gen, name);
window._tr = (gen, name) => _imageByGen("trs", 0, name);
window._treasure = (gen, name) => _imageByGen("treasures", gen, name);
window._zCrystal = (name) => _imageByGen("zcrystals", 0, name);

window._task = (game, name, ...args) => _imageByGame("tasks", game, name, ...args);
window._npc = (game, name) => _imageByGame("npcs", game, name);
window._location = (game, name) => _imageByGame("locations", game, name);
window._sticker = (name) => _imageByGame("stickers", "", name);


window._badges = function (imgs) {
	if (!Array.isArray(imgs)) imgs = [imgs]; // allow single string too
	return imgs.map((name) => "imgs/badges/" + name + ".png");
};
window._medal = function (type, name) {
	return "imgs/medals/" + type + "/" + name + ".png";
};
window._typing = function (type) {
	return "imgs/typings/" + type + ".png";
};
window._trainerCard = function (game, type, name) {
	return "imgs/trainer-cards/" + game + "/" + type + "/" + name + ".png";
};

// --- Sync reference helpers ---
window._taskRef = function (id) {
	return { kind: "task", id };
};
window._dexRef = function (game, type, id, form) {
	const base = window._dex(game, type, id, form);
	base.kind = arguments.length === 3 ? "dex" : "dex-form";
	return base;
};
window._fashionRef = function (game, id, category, form) {
	const obj = { kind: "fashion", game, id };
	if (category != null) obj.category = category;
	if (form != null) obj.form = form;
	return obj;
};
function _popSyncOpts(args) {
	const last = args[args.length - 1];
	if (
		last &&
		typeof last === "object" &&
		!Array.isArray(last) &&
		("oneWay" in last) // only the new tag name
	) {
		return args.pop();
	}
	return null;
}
window.defineSyncs = function (game, builder) {
	const helpers = {
		taskSync: (id, opts) => {
			const base = _taskRef(id);
			if (opts && typeof opts === "object") Object.assign(base, opts);
			return base;
		},

		regionalSync: (...args) => {
			const opts = _popSyncOpts(args);
			const base = _dexRef(game, "regional", ...args); // args now won't include opts
			if (opts) Object.assign(base, opts);            // so oneWay lands on the link
			return base;
		},

		nationalSync: (...args) => {
			const opts = _popSyncOpts(args);
			const base = _dexRef(game, "national", ...args);
			if (opts) Object.assign(base, opts);
			return base;
		},

		fashionSync: (id, opts) => {
			const base = _fashionRef(game, id);
			if (opts && typeof opts === "object") Object.assign(base, opts);
			return base;
		},

		// cross-game dex refs
		regionalSyncCross: (otherGame, ...args) => {
			const opts = _popSyncOpts(args);
			const base = _dexRef(otherGame, "regional", ...args);
			if (opts) Object.assign(base, opts);
			return base;
		},
	};

	window.DATA.syncs[game] = builder(helpers);
};
window.defineSyncsMany = function (gameKeys, builder) {
	const keys = Array.isArray(gameKeys) ? gameKeys : [gameKeys];

	for (const gameKey of keys) {
		// capture whatever was already defined for this gameKey (from earlier calls)
		const prev = window.DATA?.syncs?.[gameKey];

		window.defineSyncs(gameKey, (helpers) => {
			const prevArr = Array.isArray(prev) ? prev : (prev ? [prev] : []);

			// authoring-time helper: build a taskSync id from section + numeric ids
			const taskSync = (sectionSuffix, parentId, childIdOrOpts, maybeOpts) => {
				let childId = childIdOrOpts;
				let opts = maybeOpts ?? null;

				// if the "child" slot is actually opts
				if (childIdOrOpts && typeof childIdOrOpts === "object" && !Array.isArray(childIdOrOpts)) {
					opts = childIdOrOpts;
					childId = null;
				}

				const root = `${gameKey}:${sectionSuffix}:${pad3(parentId)}`;
				const id = (childId == null) ? root : `${root}:${pad3(childId)}`;

				return helpers.taskSync(id, opts);
			};

			const taskId = (sectionSuffix, parentId, childId) => {
				const root = `${gameKey}:${sectionSuffix}:${pad3(parentId)}`;
				return (childId == null) ? root : `${root}:${pad3(childId)}`;
			};

			const built = builder(gameKey, { ...helpers, taskSync, taskId });
			const nextArr = Array.isArray(built) ? built : (built ? [built] : []);

			// append new sync sets onto the end of existing ones
			return prevArr.concat(nextArr);
		});
	}
};
window.defineDistributionsMany = function (gameKeys, builder) {
	const keys = Array.isArray(gameKeys) ? gameKeys : [gameKeys];

	window.DATA = window.DATA || {};
	window.DATA.distributions = window.DATA.distributions || {};

	for (const gameKey of keys) {
		const prev = window.DATA.distributions[gameKey];
		const prevArr = Array.isArray(prev) ? prev.slice() : [];

		// Build new items (builder can use wrapper fns and/or return functions in fields)
		const built = builder(gameKey, { gameKey });
		const nextArr = Array.isArray(built) ? built : (built ? [built] : []);

		// Next id = (max existing numeric id) + 1
		let nextId = 1;
		for (const d of prevArr) {
			const n = Number(d?.id);
			if (Number.isFinite(n)) nextId = Math.max(nextId, n + 1);
		}

		// Assign ids only when missing
		const normalized = nextArr
			.filter(Boolean)
			.map((d) => {
				const obj = { ...d };          // ✅ FIX: was `{ .d }`
				if (obj.id == null) obj.id = nextId++;
				return obj;
			});

		// Append onto anything already defined for that gameKey (do not overwrite)
		window.DATA.distributions[gameKey] = prevArr.concat(normalized);
	}
};

// --- Layout reference helpers ---
window.spacer = "spacer";

window.formKeyToSuffix = function (natiId, formKey) {
	if (!formKey) return null;

	const k = String(formKey).trim().toLowerCase().replace(/\s+/g, "_");
	const map = FORM_SUFFIX_OVERRIDES(Number(natiId));

	if (map) {
		if (Object.prototype.hasOwnProperty.call(map, k)) return map[k];
		for (const [rawKey, suffix] of Object.entries(map)) {
			const nk = String(rawKey).trim().toLowerCase().replace(/\s+/g, "_");
			if (nk === k) return suffix;
		}
	}

	return k[0] || null;
};
function FORM_SUFFIX_OVERRIDES(natiId) {
	switch (Number(natiId)) {
		case 19: return { "kantonian-female": "f", "alolan": "a" };
		case 20: return { "kantonian-female": "f", "alolan": "a" };
		case 25: return { "rock-star": "roc", "belle": "bel", "pop-star": "pop", "phd": "phd", "libre": "lib" };
		case 26: return { "kantonian-female": "f", "alolan": "a" };
		case 128: return { "paldean-(aqua-breed)": "a", "paldean-(blaze-breed)": "b", "paldean-(combat-breed)": "p" };
		case 201: return { "!": "em", "?": "qm" };
		case 215: return { "johtonian-female": "f", "hisuian-male": "h", "hisuian-female": "h-f" };
		case 351: return { "rainy": "r", "snowy": "i", "sunny": "s" };
		case 479: return { "fan": "fa", "frost": "fr", "heat": "h", "mow": "m", "wash": "w" };
		case 666:
			return {
				"archipelago-pattern": "arc",
				"continental-pattern": "con",
				"elegant-pattern": "ele",
				"garden-pattern": "gar",
				"high-plains-pattern": "hig",
				"icy-snow-pattern": "icy",
				"jungle-pattern": "jun",
				"marine-pattern": "mar",
				"meadow-pattern": "mea",
				"modern-pattern": "mod",
				"monsoon-pattern": "mon",
				"ocean-pattern": "oce",
				"polar-pattern": "pol",
				"river-pattern": "riv",
				"sandstorm-pattern": "san",
				"savanna-pattern": "sav",
				"sun-pattern": "sun",
				"tundra-pattern": "tun",
				"fancy-pattern": "fan",
				"poke-ball-pattern": "pok",
			};
		case 676:
			return {
				"heart-trim": "he",
				"star-trim": "st",
				"diamond-trim": "di",
				"debutante-trim": "de",
				"matron-trim": "ma",
				"dandy-trim": "da",
				"le-reine-trim": "la",
				"kabuki-trim": "ka",
				"pharaoh-trim": "ph",
			};
		case 710: return { "small-size": "s", "large-size": "l", "super-size": "s" };
		case 711: return { "small-size": "s", "large-size": "l", "super-size": "s" };
		case 718: return { "10%": "10", };
		case 741: return { "pa'u-style": "pa", "pom-pom-style": "po", "sensu-style": "s", };
		case 869:
			return {
				"vanilla-cream\nstrawberry-sweet": "va",
				"vanilla-cream\nberry-sweet": "va-b",
				"vanilla-cream\nlove-sweet": "va-l",
				"vanilla-cream\nstar-sweet": "va-s",
				"vanilla-cream\nclover-sweet": "va-c",
				"vanilla-cream\nflower-sweet": "va-f",
				"vanilla-cream\nribbon-sweet": "va-r",
				"ruby-cream\nstrawberry-sweet": "rc",
				"ruby-cream\nberry-sweet": "rc-b",
				"ruby-cream\nlove-sweet": "rc-l",
				"ruby-cream\nstar-sweet": "rc-s",
				"ruby-cream\nclover-sweet": "rc-c",
				"ruby-cream\nflower-sweet": "rc-f",
				"ruby-cream\nribbon-sweet": "rc-r",
				"matcha-cream\nstrawberry-sweet": "mac",
				"matcha-cream\nberry-sweet": "mac-b",
				"matcha-cream\nlove-sweet": "mac-l",
				"matcha-cream\nstar-sweet": "mac-s",
				"matcha-cream\nclover-sweet": "mac-c",
				"matcha-cream\nflower-sweet": "mac-f",
				"matcha-cream\nribbon-sweet": "mac-r",
				"mint-cream\nstrawberry-sweet": "mic",
				"mint-cream\nberry-sweet": "mic-b",
				"mint-cream\nlove-sweet": "mic-l",
				"mint-cream\nstar-sweet": "mic-s",
				"mint-cream\nclover-sweet": "mic-c",
				"mint-cream\nflower-sweet": "mic-f",
				"mint-cream\nribbon-sweet": "mic-r",
				"lemon-cream\nstrawberry-sweet": "lc",
				"lemon-cream\nberry-sweet": "lc-b",
				"lemon-cream\nlove-sweet": "lc-l",
				"lemon-cream\nstar-sweet": "lc-s",
				"lemon-cream\nclover-sweet": "lc-c",
				"lemon-cream\nflower-sweet": "lc-f",
				"lemon-cream\nribbon-sweet": "lc-r",
				"salted-cream\nstrawberry-sweet": "sc",
				"salted-cream\nberry-sweet": "sc-b",
				"salted-cream\nlove-sweet": "sc-l",
				"salted-cream\nstar-sweet": "sc-s",
				"salted-cream\nclover-sweet": "sc-c",
				"salted-cream\nflower-sweet": "sc-f",
				"salted-cream\nribbon-sweet": "sc-r",
				"ruby-swirl\nstrawberry-sweet": "rs",
				"ruby-swirl\nberry-sweet": "rs-b",
				"ruby-swirl\nlove-sweet": "rs-l",
				"ruby-swirl\nstar-sweet": "rs-s",
				"ruby-swirl\nclover-sweet": "rs-c",
				"ruby-swirl\nflower-sweet": "rs-f",
				"ruby-swirl\nribbon-sweet": "rs-r",
				"caramel-swirl\nstrawberry-sweet": "cs",
				"caramel-swirl\nberry-sweet": "cs-b",
				"caramel-swirl\nlove-sweet": "cs-l",
				"caramel-swirl\nstar-sweet": "cs-s",
				"caramel-swirl\nclover-sweet": "cs-c",
				"caramel-swirl\nflower-sweet": "cs-f",
				"caramel-swirl\nribbon-sweet": "cs-r",
				"rainbow-swirl\nstrawberry-sweet": "ras",
				"rainbow-swirl\nberry-sweet": "ras-b",
				"rainbow-swirl\nlove-sweet": "ras-l",
				"rainbow-swirl\nstar-sweet": "ras-s",
				"rainbow-swirl\nclover-sweet": "ras-c",
				"rainbow-swirl\nflower-sweet": "ras-f",
				"rainbow-swirl\nribbon-sweet": "ras-r",
			};
		case 925: return { "family-of-three": "3", };
		case 982: return { "two-segment": "2", };
		default:
			return null;
	}
}
const GAME_GROUPS = {
	gen1: { gen: 1, keys: ["red", "green", "blue", "yellow"] },
	gen2: { gen: 2, keys: ["gold", "silver", "crystal"] },
	gen3: { gen: 3, keys: ["ruby-national", "ruby", "sapphire-national", "sapphire", "emerald-national", "emerald"] },
	gen4: { gen: 4, keys: ["diamond-national", "diamond", "pearl-national", "pearl", "platinum-national", "platinum", "heartgold-national", "heartgold", "soulsilver-national", "soulsilver"] },
	gen5: { gen: 5, keys: ["black-national", "black", "white-national", "white", "black2-national", "black2", "white2-national", "white2"] },
	gen6: { gen: 6, keys: ["x-national", "x-central", "x-coastal", "x-mountain", "y-national", "y-central", "y-coastal", "y-mountain", "omegaruby-national", "omegaruby", "alphasapphire-national", "alphasapphire"] },
	gen7: { gen: 7, keys: ["sun-alola", "sun-melemele", "sun-akala", "sun-ulaula", "sun-poni", "moon-alola", "moon-melemele", "moon-akala", "moon-ulaula", "moon-poni", "ultrasun-alola", "ultrasun-melemele", "ultrasun-akala", "ultrasun-ulaula", "ultrasun-poni", "ultramoon-alola", "ultramoon-melemele", "ultramoon-akala", "ultramoon-ulaula", "ultramoon-poni"] },

	rgby: { gen: 1, keys: ["red", "green", "blue", "yellow"] },
	gsc: { gen: 2, keys: ["gold", "silver", "crystal"] },
	rse: { gen: 3, keys: ["ruby-national", "ruby", "sapphire-national", "sapphire", "emerald-national", "emerald"] },
	frlg: { gen: 3, keys: ["firered-national", "firered", "leafgreen-national", "leafgreen"] },
	dp: { gen: 4, keys: ["diamond-national", "diamond", "pearl-national", "pearl"] },
	pl: { gen: 4, keys: ["platinum-national", "platinum"] },
	dppl: { gen: 4, keys: ["diamond-national", "diamond", "pearl-national", "pearl", "platinum-national", "platinum"] },
	hgss: { gen: 4, keys: ["heartgold-national", "heartgold", "soulsilver-national", "soulsilver"] },
	bw: { gen: 5, keys: ["black-national", "black", "white-national", "white"] },
	bw2: { gen: 5, keys: ["black2-national", "black2", "white2-national", "white2"] },
	xy: { gen: 6, keys: ["x-national", "x-central", "x-coastal", "x-mountain", "y-national", "y-central", "y-coastal", "y-mountain"] },
	oras: { gen: 6, keys: ["omegaruby-national", "omegaruby", "alphasapphire-national", "alphasapphire"] },
	sm: { gen: 7, keys: ["sun-alola", "sun-melemele", "sun-akala", "sun-ulaula", "sun-poni", "moon-alola", "moon-melemele", "moon-akala", "moon-ulaula", "moon-poni"] },
	usum: { gen: 7, keys: ["ultrasun-alola", "ultrasun-melemele", "ultrasun-akala", "ultrasun-ulaula", "ultrasun-poni", "ultramoon-alola", "ultramoon-melemele", "ultramoon-akala", "ultramoon-ulaula", "ultramoon-poni"] },
	lgpe: { gen: "7_2", keys: ["letsgopikachu", "letsgoeevee"] },
	swsh: { gen: 8, keys: ["sword", "swordioa", "swordct", "shield", "shieldioa", "shieldct"] },
	bdsp: { gen: "8_2", keys: ["brilliantdiamond-national", "brilliantdiamond", "shiningpearl-national", "shiningpearl"] },
	la: { gen: "8_2", keys: ["legendsarceus"] },
	sv: { gen: 9, keys: ["scarlet", "scarlettm", "scarletid", "violet", "violettm", "violetid"] },
	lza: { gen: "9_2", keys: ["legendsza", "legendszamd"] },
};
window.gameSearch = function (...tokens) {
	const out = {};
	const flat = tokens.flat();

	for (const t of flat) {
		if (!t) continue;

		if (Array.isArray(t) && t.length >= 2) {
			const k = String(t[0]);
			out[k] = t[1];
			continue;
		}

		const token = String(t);
		const g = GAME_GROUPS[token];
		if (g) {
			for (const k of g.keys) out[k] = g.gen;
			continue;
		}
	}

	return out;
};
const FORM_GROUPS = {
	gen1: ["red", "green", "blue", "yellow"],
	gen2: ["gold", "silver", "crystal"],
	gen3: ["ruby", "ruby-national", "sapphire", "sapphire-national", "emerald", "emerald-national", "firered", "firered-national", "leafgreen", "leafgreen-national"],
	gen4: ["diamond", "diamond-national", "pearl", "pearl-national", "platinum", "platinum-national", "heartgold", "heartgold-national", "soulsilver", "soulsilver-national"],
	gen5: ["black", "black-national", "white", "white-national", "black2", "black2-national", "white2", "white2-national"],
	gen6: ["x-central", "x-coastal", "x-mountain", "x-national", "y-central", "y-coastal", "y-mountain", "y-national", "omegaruby", "omegaruby-national", "alphasapphire", "alphasapphire-national"],
	gen7: ["sun-alola", "sun-melemele", "sun-akala", "sun-ulaula", "sun-poni", "moon-alola", "moon-melemele", "moon-akala", "moon-ulaula", "moon-poni", "ultrasun-alola", "ultrasun-melemele", "ultrasun-akala", "ultrasun-ulaula", "ultrasun-poni", "ultramoon-alola", "ultramoon-melemele", "ultramoon-akala", "ultramoon-ulaula", "ultramoon-poni"],

	rgby: ["red", "green", "blue", "yellow"],
	gsc: ["gold", "silver", "crystal"],
	rs: ["ruby", "ruby-national", "sapphire", "sapphire-national"],
	e: ["emerald", "emerald-national"],
	rse: ["ruby", "ruby-national", "sapphire", "sapphire-national", "emerald", "emerald-national"],
	frlg: ["firered", "firered-national", "leafgreen", "leafgreen-national"],
	dppl: ["diamond", "diamond-national", "pearl", "pearl-national", "platinum", "platinum-national"],
	dp: ["diamond", "diamond-national", "pearl", "pearl-national"],
	pl: ["platinum", "platinum-national"],
	hgss: ["heartgold", "heartgold-national", "soulsilver", "soulsilver-national"],
	bw: ["black", "black-national", "white", "white-national"],
	bw2: ["black2", "black2-national", "white2", "white2-national"],
	xy: ["x-central", "x-coastal", "x-mountain", "x-national", "y-central", "y-coastal", "y-mountain", "y-national"],
	oras: ["omegaruby", "omegaruby-national", "alphasapphire", "alphasapphire-national"],
	sm: ["sun-alola", "sun-melemele", "sun-akala", "sun-ulaula", "sun-poni", "moon-alola", "moon-melemele", "moon-akala", "moon-ulaula", "moon-poni"],
	usum: ["ultrasun-alola", "ultrasun-melemele", "ultrasun-akala", "ultrasun-ulaula", "ultrasun-poni", "ultramoon-alola", "ultramoon-melemele", "ultramoon-akala", "ultramoon-ulaula", "ultramoon-poni"],
	lgpe: ["letsgopikachu", "letsgoeevee"],
	swsh: ["sword", "swordioa", "swordct", "shield", "shieldioa", "shieldct"],
	bdsp: ["brilliantdiamond", "brilliantdiamond-national", "shiningpearl", "shiningpearl-national"],
	la: ["legendsarceus"],
	sv: ["scarlet", "scarlettm", "scarletid", "violet", "violettm", "violetid"],
	lza: ["legendsza", "legendszamd"],
};
window.formSearch = function (...tokens) {
	// tokens can be strings (group keys or explicit gameKeys) or arrays
	const out = [];
	for (const t of tokens.flat()) {
		if (Array.isArray(t)) {
			out.push(...t);
		} else if (typeof t === "string" && FORM_GROUPS[t]) {
			out.push(...FORM_GROUPS[t]);
		} else if (typeof t === "string") {
			// allow passing explicit game keys
			out.push(t);
		}
	}
	// de-dupe, preserve order
	return [...new Set(out)];
};


window.normalizeGenKeyNoPrefix = function (genKey) {
	if (genKey == null) return null;

	// If it's already numeric (6, 7.5, etc)
	if (typeof genKey === "number") return genKey;

	const raw = String(genKey).trim();

	// "gen6" -> "6", "gen7_2" -> "7_2"
	const stripped = raw.replace(/^gen/i, "");

	// Preserve special tokens
	if (stripped === "home") return "home";

	// If it's like "7_2" / "8_2" / "9_2", keep it as a string (your helpers support this)
	if (stripped.includes("_")) return stripped;

	// Otherwise turn "6" into 6
	const n = Number(stripped);
	return Number.isFinite(n) ? n : stripped;
};

window.inferGenFromGameKey = function (gameKey) {
	const gk = String(gameKey || "").trim();
	if (!gk) return null;

	// Preferred: use the GAME_GROUPS map you already have in helpers.js
	// It’s not exported, but in your build it’s in the same runtime scope as helpers.
	// If for any reason it isn't accessible here, fallback to window.DATA scanning.
	try {
		// Match exact game keys (including "-national" etc.)
		if (typeof GAME_GROUPS === "object" && GAME_GROUPS) {
			for (const group of Object.values(GAME_GROUPS)) {
				if (!group || !Array.isArray(group.keys)) continue;
				if (group.keys.includes(gk)) return group.gen; // returns 6, 7, 7.5, etc.
			}
		}
	} catch { }

	// Fallback: scan window.DATA.games by tab key (returns something like "gen6", "gen7_2", etc.)
	try {
		const tabKey =
			(window.DATA?.tabs || [])
				.map(t => t.key)
				.find(tk => (window.DATA?.games?.[tk] || []).some(g => g.key === gk)) || null;

		return normalizeGenKeyNoPrefix(tabKey);
	} catch { }

	return null;
};
