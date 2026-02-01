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
window._sprite = function (gen, game, id, form, shiny, frontBack, thumbIcon, animated) {
	let path = "imgs/sprites/" + resolveGameSpritePathPrefix(game);

	let folder = "";
	if (gen === 1) folder += !shiny ? "bw" : "colored";
	else folder += !shiny ? "base" : "shiny";
	folder += !thumbIcon ? (!frontBack ? "-front" : "-back") : "";
	if (!(gen < 6) || gen === "home") folder += !thumbIcon ? "-thumb" : "-icon";
	folder += !animated ? "" : "-animated";
	path += folder + "/";

	path += pad4(id);
	path += form ? "-" + formKeyToSuffix(Number(id), form) : "";

	if (gen === 5 && animated) path += ".gif";
	else path += animated ? ".webm" : ".png";

	return path;
};
window._menuSprite = function (gen, game, id, formKey, type) {
	const form = formKey ? "-" + formKeyToSuffix(Number(id), formKey) : "";

	if (gen < 2) {
		return "imgs/sprites/gen" + gen + "/menu-sprites/" + type + ".png";
	} else if (gen < 6) {
		return "imgs/sprites/gen" + gen + "/menu-sprites/" + pad4(id) + form + ".png";
	} else {
		return "imgs/sprites/" + resolveGameSpritePathPrefix(game) + "menu-sprites/" + pad4(id) + form + ".png";
	}
};
window._model = function (gen, game, id, form, shiny) {
	const g = Number(gen);
	if (g < 6) return;

	const gameKey = String(game || "").trim();
	const nati = pad4(id);
	const formKey = formKeyToSuffix(Number(id), form);

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
window._frontSprite = (gen, game, natiId, form) => _sprite(gen, game, natiId, form, false, false, false, false);
window._backSprite = (gen, game, natiId, form) => _sprite(gen, game, natiId, form, false, true, false, false);
window._frontSpriteAnimated = (gen, game, natiId, form) => _sprite(gen, game, natiId, form, false, false, false, true);
window._backSpriteAnimated = (gen, game, natiId, form) => _sprite(gen, game, natiId, form, false, true, false, true);
window._iconSprite = (gen, game, natiId, form) => _sprite(gen, game, natiId, form, false, false, true, false);
window._baseModel = (gen, game, natiId, form) => _model(gen, game, natiId, form, false);

window._frontSpriteShiny = (gen, game, natiId, form) => _sprite(gen, game, natiId, form, true, false, false, false);
window._backSpriteShiny = (gen, game, natiId, form) => _sprite(gen, game, natiId, form, true, true, false, false);
window._frontSpriteShinyAnimated = (gen, game, natiId, form) => _sprite(gen, game, natiId, form, true, false, false, true);
window._backSpriteShinyAnimated = (gen, game, natiId, form) => _sprite(gen, game, natiId, form, true, true, false, true);
window._iconSpriteShiny = (gen, game, natiId, form) => _sprite(gen, game, natiId, form, true, false, true, false);
window._shinyModel = (gen, game, natiId, form) => _model(gen, game, natiId, form, true);

const ITEM = ["apricorns", "balls", "berries", "decorations", "form-items", "fossils", "held-items", "key-items", "mails", "medicines", "mega-stones", "partner-gifts", "stat-items", "hms", "tms", "trs", "treasures", "usable-items", "zcrystals"];
window._imageByGen = function (type, genKey, name) {
	const prefix = ITEM.includes(type) ? "items/" : "";
	if (type === "hms" || type === "tms" || type === "trs") type = `thms/${type}`;

	let gen = "";
	switch (genKey) {
		case 1:
		case 2:
		case 3:
			if (type !== "thms/tms" && type !== "thms/hms") { gen = "gen1-3/"; break; }
		case 4:
			if (type === "key-items" || type === "mails") { gen = "gen4/"; break; }
		case 5:
			if (type === "key-items" || type === "mails") { gen = "gen5/"; break; }
			if (type === "thms/tms" || type === "thms/hms") { gen = "gen1-5/"; break; }
		case 6:
			if (type === "key-items") { gen = "gen6/"; break; }
		case 7:
			if (type === "key-items") { gen = "gen7/"; break; }
		case 8:
			if (type === "key-items") { gen = "gen8/"; break; }
			if (type === "thms/tms" || type === "thms/hms") { gen = "gen6-8/"; break; }
			else gen = "gen4-8/"; break;
		case 7.5:
		case "7_2":
			if (type === "berries" || type === "key-items") { gen = "gen7_2/"; break; }
			else gen = "gen4-8/"; break;
		case 8.5:
		case "8_2": gen = "gen8_2/"; break;
		case 9: gen = "gen9/"; break;
		case 9.5:
		case "9_2": gen = "gen9_2/"; break;
		case "home": gen = "home/"; break;
		case 0:
		default: gen = "";
	}

	return `imgs/${prefix}${type}/${gen}${name}.png`;
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

	return "imgs/" + type + '/' + game + name + ".png";
};
window._ribbonByGen = function (genKey, name) {
	let gen = "";
	switch (genKey) {
		case 1:
		case 2:
		case 3: gen = "gen3/"; break;
		case 4:
		case 5: gen = "gen4-5/"; break;
		case 6:
		case 7:
		case 7.5:
		case "7_2": gen = "gen6-7/"; break;
		case 8:
		case 8.5:
		case "8_2":
		case 9:
		case 9.5:
		case "9_2":
		case "home": gen = "gen8-9/"; break;
		case 0:
		default: gen = "";
	}

	return `imgs/ribbons/${gen}${name}.png`;
};

// For BDSP and LA, add bdsp/ or legendsarceus/ to the name
window._ball = (gen, name) => _imageByGen("balls", gen, name);
window._berry = (gen, name) => _imageByGen("berries", gen, name);
window._decoration = (gen, name) => _imageByGen("decorations", gen, name);
window._formItem = (gen, name) => _imageByGen("form-items", gen, name);
window._fossil = (gen, name) => _imageByGen("fossils", gen, name);
window._heldItem = (gen, name) => _imageByGen("held-items", gen, name);
window._hm = (gen, name) => _imageByGen("hms", gen, name);
window._keyItem = (gen, name) => _imageByGen("key-items", gen, name);
window._mail = (name) => _imageByGen("mails", 0, name);
window._medicine = (name) => _imageByGen("medicines", 0, name);
window._megaStone = (gen, name) => _imageByGen("mega-stones", gen, name);
window._partnerItem = (name) => _imageByGen("partner-items", 0, name);
window._ribbon = (gen, name) => _ribbonByGen(gen, name);
window._statItems = (gen, name) => _imageByGen("stat-items", gen, name);
window._tm = (gen, name) => _imageByGen("tms", gen, name);
window._tr = (gen, name) => _imageByGen("trs", 0, name);
window._treasure = (gen, name) => _imageByGen("treasures", gen, name);
window._zCrystal = (name) => _imageByGen("zcrystals", 0, name);

window._location = (game, name) => _imageByGame("locations", game, name);
window._npc = (game, name) => _imageByGame("npcs", game, name);
window._sticker = (name) => _imageByGame("stickers", "", name);
window._task = (game, name, ...args) => _imageByGame("tasks", game, name, ...args);

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
window._trainerCard = function (gameKey, type, name) {
	let game = "";
	switch (gameKey) {
		case "sword":
		case "shield": game = "swsh"; break;
		case "swordioa":
		case "shieldioat": game = "ioa"; break;
		case "swordct":
		case "shieldct": game = "ct"; break;
	}

	return "imgs/trainer-cards/" + game + "/" + type + "/" + name + ".png";
};
window._fashionItem = function (gameKey, genderKey, categoryId, name) {
	let game = "";
	switch (gameKey) {
		// Gen 6
		case "x":
		case "y":
			game = "gen6/xy"; break;

		// Gen 7
		case "sun":
		case "moon":
		case "ultrasun":
		case "ultramoon":
			game = "gen7/sun-moon-ultra"; break;

		// Gen 7 Part 2
		case "letsgopikachu":
		case "letsgoeevee":
			game = "gen7_2"; break;

		// Gen 8
		case "sword":
		case "swordioa":
		case "swordct":
		case "shield":
		case "shieldioa":
		case "shieldct":
			game = "gen8/sword-shield"; break;

		// Gen 8 Part 2
		case "brilliantdiamond":
		case "shiningpearl":
			game = "gen8_2/brilliantdiamond-shiningpearl"; break;
		case "legendsarceus":
			game = "gen8_2/legendsarceus"; break;

		// Gen 9
		case "scarlet":
		case "scarlettm":
		case "scarletid":
		case "violet":
		case "violettm":
		case "violetid":
			game = "gen9/scarlet-violet"; break;

		// Gen 9 Part 2
		case "legendsza":
		case "legendszamd":
			game = "gen9_2"; break;
	}

	const gender = (genderKey || "unisex").toLowerCase();
	return `imgs/fashion/${game}/${gender}/${categoryId}/${name}.png`;
};
window._curryItem = function (folder, name) {
	// folder examples: "ingredients", "large", "player"
	return `imgs/curry/${folder}/${name}.png`;
};
window._sandwichItem = function (tier, name) {
	// tier examples: "normal", "great", "ultra", "master"
	return `imgs/sandwiches/${tier}/${name}.png`;
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
function ensureSyncStore() {
	window.DATA = window.DATA || {};
	window.DATA.syncs = window.DATA.syncs || {};
}
window.defineSyncs = function (game, builder) {
	ensureSyncStore();
	const helpers = {
		taskSync: (id, opts) => {
			const base = _taskRef(id);
			if (opts && typeof opts === "object") Object.assign(base, opts);
			return base;
		},

		regionalSync: (...args) => {
			const opts = _popSyncOpts(args);
			const base = window._dexRef(game, "regional", ...args);
			if (opts) Object.assign(base, opts);
			return base;
		},

		centralKalosSync: (...args) => {
			const opts = _popSyncOpts(args);
			const base = _dexRef(game + "-central", "regional", ...args); // args now won't include opts
			if (opts) Object.assign(base, opts);            // so oneWay lands on the link
			return base;
		},

		coastalKalosSync: (...args) => {
			const opts = _popSyncOpts(args);
			const base = _dexRef(game + "-coastal", "regional", ...args); // args now won't include opts
			if (opts) Object.assign(base, opts);            // so oneWay lands on the link
			return base;
		},

		mountainKalosSync: (...args) => {
			const opts = _popSyncOpts(args);
			const base = _dexRef(game + "-mountain", "regional", ...args); // args now won't include opts
			if (opts) Object.assign(base, opts);            // so oneWay lands on the link
			return base;
		},

		alolaSync: (...args) => {
			const opts = _popSyncOpts(args);
			const base = _dexRef(game + "-alola", "regional", ...args); // args now won't include opts
			if (opts) Object.assign(base, opts);            // so oneWay lands on the link
			return base;
		},

		melemeleSync: (...args) => {
			const opts = _popSyncOpts(args);
			const base = _dexRef(game + "-melemele", "regional", ...args); // args now won't include opts
			if (opts) Object.assign(base, opts);            // so oneWay lands on the link
			return base;
		},

		akalaSync: (...args) => {
			const opts = _popSyncOpts(args);
			const base = _dexRef(game + "-akala", "regional", ...args); // args now won't include opts
			if (opts) Object.assign(base, opts);            // so oneWay lands on the link
			return base;
		},

		ulaulaSync: (...args) => {
			const opts = _popSyncOpts(args);
			const base = _dexRef(game + "-ulaula", "regional", ...args); // args now won't include opts
			if (opts) Object.assign(base, opts);            // so oneWay lands on the link
			return base;
		},

		poniSync: (...args) => {
			const opts = _popSyncOpts(args);
			const base = _dexRef(game + "-poni", "regional", ...args); // args now won't include opts
			if (opts) Object.assign(base, opts);            // so oneWay lands on the link
			return base;
		},

		nationalSync: (...args) => {
			const opts = _popSyncOpts(args);
			const base = _dexRef(game, "national", ...args);
			if (opts) Object.assign(base, opts);
			return base;
		},

		fashionSync: (category, parentId, childIdOrOpts, maybeOpts) => {
			let childId = childIdOrOpts;
			let opts = maybeOpts ?? null;

			// If child slot is actually opts
			if (childIdOrOpts && typeof childIdOrOpts === "object" && !Array.isArray(childIdOrOpts)) {
				opts = childIdOrOpts;
				childId = null;
			}

			const root = `${game}:${category}:${pad3(parentId)}`;
			const id = (childId == null)
				? root
				: `${root}:${pad3(childId)}`;

			const base = _fashionRef(game, id, category);
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
	ensureSyncStore();
	const keys = Array.isArray(gameKeys) ? gameKeys : [gameKeys];

	for (const gameKey of keys) {
		// capture whatever was already defined for this gameKey (from earlier calls)
		const prev = window.DATA?.syncs?.[gameKey];

		defineSyncs(gameKey, (helpers) => {
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

				const root = `${gameKey}:tasks:${sectionSuffix}:${pad3(parentId)}`;
				const id = (childId == null) ? root : `${root}:${pad3(childId)}`;

				return helpers.taskSync(id, opts);
			};

			const eitherTaskSync = (sectionSuffix, parentId, childId, side, maybeOpts) => {
				const root = `${gameKey}:tasks:${sectionSuffix}:${pad3(parentId)}`;
				const id = (childId == null) ? root : `${root}:${pad3(childId)}`;

				let opts = maybeOpts ?? null;
				if (!opts || typeof opts !== "object" || Array.isArray(opts)) opts = {};
				opts = { ...opts, side };

				return helpers.taskSync(id, opts);
			};

			const taskId = (sectionSuffix, parentId, childId) => {
				const root = `${gameKey}:tasks:${sectionSuffix}:${pad3(parentId)}`;
				return (childId == null) ? root : `${root}:${pad3(childId)}`;
			};

			const built = builder(gameKey, { ...helpers, taskSync, eitherTaskSync, taskId });
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
				const obj = { ...d };
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

	if (k === "gigantamax") return "gi";
	if (k === "mega-x") return "mx";
	if (k === "mega-y") return "my";
	if (k === "mega-z") return "mz";

	const map = FORM_SUFFIX_OVERRIDES(Number(natiId));
	if (map) {
		if (Object.prototype.hasOwnProperty.call(map, k)) return map[k];
		for (const [rawKey, suffix] of Object.entries(map)) {
			const nk = String(rawKey).trim().toLowerCase().replace(/\s+/g, "_");
			if (nk === k) return suffix;
		}
	}

	return (k[0]) || null;
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
		case 670: return { "mega": "em" };
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
		case 718: return { "10%-forme": "10", "complete-form": "com", "mega": "cm", };
		case 741: return { "pa'u-style": "pa", "pom-pom-style": "po", "sensu-style": "se", };
		case 845: return { "gulping": "gu", "gorging": "go" };
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
		case 890: return { "eternamax": "gi", };
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
	scvi: { gen: 9, keys: ["scarlet", "scarlettm", "scarletid", "violet", "violettm", "violetid"] },
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
window.formSearch = function (...tokens) {
	// tokens can be strings (group keys or explicit gameKeys) or arrays
	const out = [];
	for (const t of tokens.flat()) {
		if (Array.isArray(t)) {
			out.push(...t);
		} else if (typeof t === "string" && GAME_GROUPS[t].keys) {
			out.push(...GAME_GROUPS[t].keys);
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

// --- Fashion helpers -------------------------------------------------------
// Canonical Fashion IDs (match your desired format)
// <game>:<category>:<itemPad3>
// <game>:<category>:<itemPad3>:<formPad3>

// Turn display names into stable asset slugs.
// Examples:
// "Blouson & V-Neck Set" -> "blouson-and-v-neck-set"
// "Blue" -> "blue"
// "Off White" -> "off-white"
window._fashionSlug = function _fashionSlug(s) {
	return String(s ?? "")
		.trim()
		.toLowerCase()
		.replace(/&/g, " and ")
		.replace(/['’]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
};
window._fashionFullId = function (gameKey, categoryId, itemId, formId) {
	const gk = String(gameKey || "");
	const cat = String(categoryId || "");
	const item = pad3(itemId);

	if (formId === undefined || formId === null || formId === "") {
		return `${gk}:${cat}:${item}`;
	}
	return `${gk}:fashion:${cat}:${item}:${pad3(formId)}`;
};
/**
 * Resolve the folder prefix used by fashion assets for a given gameKey.
 * (Add more mappings as you add more fashion sets.)
 */
window._resolveFashionPrefix = function (gameKey) {
	const gk = String(gameKey || "").toLowerCase();

	// XY
	if (gk === "x" || gk === "y") return "xy";

	// default: assume gameKey is already the folder name
	return gk;
};
// Internal: normalize authoring gender => folder gender
function _fashionGenderFolder(itemGender) {
	const g = String(itemGender || "unisex").toLowerCase();
	if (g === "male" || g === "female") return g;
	// "both"/unknown -> unisex folder
	return "unisex";
}
// NEW: finalize ids + auto-assign imgs based on NAME slugs.
// - Authoring item.id can now be numeric (recommended).
// - Images are built from slug(item.name), NOT item.id.
// - If forms exist:
//    - parent img uses first form image key
//    - each form image key: `${itemSlug}-${formSlug}`
// - Full IDs:
//    item.id  => <game>:<cat>:<itemPad3>
//    form.id  => <game>:<cat>:<itemPad3>:<formPad3>
function _finalizeFashionIdsAndImgs(gameKey, fashionObj) {
	if (!fashionObj || !Array.isArray(fashionObj.categories)) return fashionObj;

	for (const cat of fashionObj.categories) {
		const categoryId = cat?.id;
		if (!categoryId || !Array.isArray(cat.items)) continue;

		for (const item of cat.items) {
			if (!item) continue;

			// --- 1) Canonical IDs (numeric authoring -> full ids) ----------
			const rawItemId = item._rawId ?? item.id;
			item._rawId = rawItemId;

			// Allow legacy string ids, but prefer numeric going forward
			const itemIdNum = (rawItemId != null && rawItemId !== "" && !isNaN(Number(rawItemId)))
				? Number(rawItemId)
				: rawItemId;

			// Only overwrite with canonical if numeric-ish
			if (typeof itemIdNum === "number") {
				item.id = window._fashionFullId(gameKey, categoryId, itemIdNum);
			} else {
				// fallback legacy: keep stable, but still prefix with game/cat
				item.id = `${String(gameKey)}:${String(categoryId)}:${String(itemIdNum)}`;
			}

			// --- 2) Auto image assignment (from NAME slugs) ----------------
			const genderFolder = _fashionGenderFolder(item.gender);
			const rawImgKey = item._imgKey;

			// If an old build ever stored "_imgKey: '1'" (or other digits), ignore it and recompute from name.
			const itemSlug =
				(typeof rawImgKey === "string" && rawImgKey.trim() && !/^\d+$/.test(rawImgKey))
					? rawImgKey.trim()
					: window._fashionSlug(item.name);

			item._imgKey = itemSlug;

			const hasForms = Array.isArray(item.forms) && item.forms.length > 0;

			if (hasForms) {
				// Ensure each form has an img; parent uses first form
				const first = item.forms[0];
				const firstName = (typeof first === "string") ? first : (first?.name ?? "");
				const firstSlug = window._fashionSlug(firstName);
				const parentImgKey = `${itemSlug}-${firstSlug}`;

				if (!item.img) {
					item.img = ({ gameKey }) => window._fashionItem(gameKey, genderFolder, categoryId, parentImgKey);
				}

				for (const f of item.forms) {
					if (!f || typeof f !== "object") continue;

					// Canonical form id
					const rawFormId = f._rawId ?? f.id;
					f._rawId = rawFormId;

					const formIdNum = (rawFormId != null && rawFormId !== "" && !isNaN(Number(rawFormId)))
						? Number(rawFormId)
						: rawFormId;

					if (typeof itemIdNum === "number" && typeof formIdNum === "number") {
						f.id = window._fashionFullId(gameKey, categoryId, itemIdNum, formIdNum);
					} else {
						// fallback legacy
						f.id = `${String(gameKey)}:${String(categoryId)}:${String(itemIdNum)}:${String(formIdNum)}`;
					}

					// Image key from item name + form name
					const formName = String(f.name ?? "");
					const formSlug = window._fashionSlug(formName);
					const imgKey = `${itemSlug}-${formSlug}`;

					if (!f.img) {
						f.img = ({ gameKey }) => window._fashionItem(gameKey, genderFolder, categoryId, imgKey);
					}
				}
			} else {
				// No forms: image is just the item slug
				if (!item.img) {
					item.img = ({ gameKey }) => window._fashionItem(gameKey, genderFolder, categoryId, itemSlug);
				}
			}
		}
	}

	return fashionObj;
}
/**
 * Seed fashion data for one or multiple gameKeys, similar to task seeding.
 *
 * builder(gameKey, ctx) should return the full fashion object for that gameKey,
 * e.g. { categories: [ {id,label,items:[...]} ] }
 */
window.defineFashionMany = function (gameKeys, builder) {
	const keys = Array.isArray(gameKeys) ? gameKeys : [gameKeys];

	window.DATA = window.DATA || {};
	window.DATA.fashion = window.DATA.fashion || {};

	for (const gameKey of keys) {
		const built = builder(gameKey, { gameKey });

		// NEW: rewrite ids + auto-assign imgs
		window.DATA.fashion[gameKey] = _finalizeFashionIdsAndImgs(gameKey, built);
	}
};
window.defineCurryMany = function (gameKeys, builder) {
	const keys = Array.isArray(gameKeys) ? gameKeys : [gameKeys];

	window.DATA = window.DATA || {};
	window.DATA.curry = window.DATA.curry || {};

	for (const gameKey of keys) {
		const built = builder(gameKey, { gameKey });
		const list = Array.isArray(built) ? built : [];

		// Rewrite ids to canonical:
		// <game>:curry:<type>
		// and if forms exist, give forms a canonical id too:
		// <game>:curry:<type>:<flavor>
		const normalized = list.map((it) => {
			if (!it || typeof it !== "object") return it;

			const out = { ...it };
			const rawType = String(out.id ?? "").trim();
			out.id = window._curryFullId(gameKey, rawType);

			if (Array.isArray(out.forms)) {
				out.forms = out.forms.map((f) => {
					if (!f || typeof f !== "object") return f;

					const ff = { ...f };
					const flavor = String(ff.name ?? "").trim().toLowerCase();
					ff.id = window._curryFullId(gameKey, rawType, flavor);
					return ff;
				});
			}

			return out;
		});

		window.DATA.curry[gameKey] = normalized;
	}
};
window.defineSandwichMany = function (gameKeys, builder) {
	const keys = Array.isArray(gameKeys) ? gameKeys : [gameKeys];

	window.DATA = window.DATA || {};
	window.DATA.sandwich = window.DATA.sandwich || {};

	for (const gameKey of keys) {
		const built = builder(gameKey, { gameKey });
		const list = Array.isArray(built) ? built : [];

		const normalized = list.map((it) => {
			if (!it || typeof it !== "object") return it;

			const out = { ...it };

			// --- base sandwich id from NAME ---
			const baseSlug = window._sandwichSlug(out.name || out.label || out.id);
			out.id = `${gameKey}:sandwiches:${baseSlug}`;

			// Ensure label exists for display
			if (!out.label && out.name) out.label = out.name;

			// --- forms (tiers) ---
			if (Array.isArray(out.forms)) {
				out.forms = out.forms.map((f) => {
					const name = typeof f === "string" ? f : f?.name;
					if (!name) return f;

					const flavorSlug = window._sandwichSlug(name);

					if (typeof f === "string") {
						return {
							name,
							id: `${gameKey}:sandwiches:${baseSlug}:${flavorSlug}`,
						};
					}

					return {
						...f,
						id: `${gameKey}:sandwiches:${baseSlug}:${flavorSlug}`,
					};
				});
			}

			return out;
		});

		window.DATA.sandwich[gameKey] = normalized;
	}
};
window.defineStickersMany = function (gameKeys, builder) {
	const keys = Array.isArray(gameKeys) ? gameKeys : [gameKeys];

	window.DATA = window.DATA || {};
	window.DATA.sticker = window.DATA.sticker || {};

	for (const gameKey of keys) {
		const built = builder(gameKey, { gameKey });
		const list = Array.isArray(built) ? built : [];

		const normalized = list.map((it) => {
			if (!it || typeof it !== "object") return it;

			const out = { ...it };

			// base slug from the DISPLAY label (preferred), fallback to id/name
			// "Heart Stickers" -> "heart-stickers"
			const baseSlug = window._stickerSlug(out.label || out.name || out.id);
			out.id = window._stickerFullId(gameKey, baseSlug);

			// normalize forms into objects and assign canonical form ids:
			// ...:c, ...:d, etc.
			if (Array.isArray(out.forms)) {
				out.forms = out.forms.map((f) => {
					const name = typeof f === "string" ? f : f?.name;
					if (!name) return f;

					const letter = String(name).trim().toLowerCase();

					if (typeof f === "string") {
						return {
							name,
							id: window._stickerFullId(gameKey, baseSlug, letter),
							// preserve existing image if author provided via string-only? none here
						};
					}

					return {
						...f,
						id: window._stickerFullId(gameKey, baseSlug, letter),
					};
				});
			}

			return out;
		});

		window.DATA.sticker[gameKey] = normalized;
	}
};
window.defineMedalsMany = function (gameKeys, builder) {
	const keys = Array.isArray(gameKeys) ? gameKeys : [gameKeys];

	window.DATA = window.DATA || {};
	window.DATA.medals = window.DATA.medals || {};

	for (const gameKey of keys) {
		const built = builder(gameKey, { gameKey }) || { sections: [] };

		// NEW: rewrite ids + auto-assign imgs
		window.DATA.medals[gameKey] = _finalizeMedalsIdsAndImgs(gameKey, built);
	}
};

// --- Tasks seeding helpers --------------------------------------------------
// Usage (inside a task data file):
//   window.defineTasksMany(GAME_KEYS, SECTIONS, TASKS_BY_SECTION);
//
// What it does:
// - window.DATA.sections[gameKey] = [{id:"<game>:<section>", title}, ...]
// - window.DATA.tasks["<game>:<section>"] = mapped tasks with canonical ids
// - Wraps img/imgS so they get ctx.gameKey automatically
window.defineTasksMany = function defineTasksMany(gameKeys, SECTIONS, TASKS_BY_SECTION) {
	const keys = Array.isArray(gameKeys) ? gameKeys : [gameKeys];

	window.DATA = window.DATA || {};
	window.DATA.sections = window.DATA.sections || {};
	window.DATA.tasks = window.DATA.tasks || {};

	for (const gameKey of keys) {
		const prefixSectionId = (sid) => `${gameKey}:${sid}`;

		const taskIdRoot = (sectionSuffix, parentId) =>
			`${gameKey}:tasks:${sectionSuffix}:${pad3(parentId)}`;

		const taskIdChild = (sectionSuffix, parentId, childId) =>
			`${taskIdRoot(sectionSuffix, parentId)}:${pad3(childId)}`;

		function bindGameKeyFn(fn) {
			if (typeof fn !== "function") return fn;
			return (ctx) => fn({ ...(ctx || {}), gameKey });
		}

		function mapTask(sectionSuffix, t, parentId = null) {
			const out = { ...t };

			// Only wrap known image fields (keeps behavior identical to your files)
			if (out.img) out.img = bindGameKeyFn(out.img);
			if (out.imgS) out.imgS = bindGameKeyFn(out.imgS);

			if (parentId === null) {
				const parent = Number(out.id);
				out.id = taskIdRoot(sectionSuffix, parent);
				parentId = parent;
			} else {
				const child = Number(out.id);
				out.id = taskIdChild(sectionSuffix, parentId, child);
			}

			if (Array.isArray(out.children)) {
				out.children = out.children.map((c) => mapTask(sectionSuffix, c, parentId));
			}

			return out;
		}

		// Seed sections for this gameKey
		const sections = (SECTIONS || []).map((s) => ({
			id: prefixSectionId(s.id),
			title: s.title,
		}));

		window.DATA.sections[gameKey] = sections;

		// Seed tasks by section for this gameKey
		for (const [sectionSuffix, arr] of Object.entries(TASKS_BY_SECTION || {})) {
			const sectionId = `${gameKey}:${sectionSuffix}`;
			window.DATA.tasks[sectionId] = (arr || []).map((t) => mapTask(sectionSuffix, t));
		}
	}
};
window.defineLayoutsMany = function defineLayoutsMany(gameKeys, DESKTOP_LAYOUT, COMPACT_LAYOUT) {
	const keys = Array.isArray(gameKeys) ? gameKeys : [gameKeys];

	function buildTaskRowsForGame(gameKey, layout) {
		const out = {};

		for (const [sectionSuffix, rows] of Object.entries(layout || {})) {
			// IMPORTANT:
			// - This key MUST match sec.id used by content.js: "<game>:<section>"
			// - Only the task IDs inside rows get the ":tasks:" segment.
			const sectionKey = `${gameKey}:${sectionSuffix}`;

			out[sectionKey] = (rows || []).map((row) =>
				(row || [])
					.map((ref) => {
						// allow literal tokens like "spacer"
						if (typeof ref === "string") return ref;

						const parentId = ref?.[0];
						const childId = ref?.[1];
						if (parentId == null) return null;

						const taskRoot = `${gameKey}:tasks:${sectionSuffix}:${pad3(parentId)}`;
						return childId == null ? taskRoot : `${taskRoot}:${pad3(childId)}`;
					})
					.filter(Boolean)
			);
		}

		return out;
	}

	for (const gameKey of keys) {
		const desktopLayout = buildTaskRowsForGame(gameKey, DESKTOP_LAYOUT);
		const compactLayout = buildTaskRowsForGame(gameKey, COMPACT_LAYOUT ?? DESKTOP_LAYOUT);

		PPGC.register({
			layoutVariants: {
				desktop: { taskRows: desktopLayout },
				compact: { taskRows: compactLayout },
			},
		});
	}
};

window.overrideTaskChildText = function (tasks, parentId, childId, newText) {
	return tasks.map(task => {
		if (task.id !== parentId) return task;

		return {
			...task,
			children: task.children.map(child =>
				child.id === childId
					? { ...child, text: newText }
					: child
			),
		};
	});
};
window.overrideTaskChildTexts = function (tasks, parentId, changes) {
	let out = tasks;
	for (const [childId, newText] of Object.entries(changes)) {
		out = overrideTaskChildText(out, parentId, Number(childId), newText);
	}
	return out;
};
// --- Medals helpers --------------------------------------------------------
// Canonical Medal IDs (match your desired format)
// <game>:<sectionId>:<medalPad3>
window._medalFullId = function (gameKey, sectionId, medalId) {
	const gk = String(gameKey || "");
	const sid = String(sectionId || "");
	return `${gk}:medals:${sid}:${pad3(medalId)}`;
};

// Slugify medal names into asset keys, BUT keep "+" (you asked for this).
// Examples:
// "First Step"      -> "first-step"
// "A+ Rank"         -> "a+-rank"
// "Rock & Roll"     -> "rock-and-roll"
window._medalSlug = function _medalSlug(s) {
	return String(s ?? "")
		.trim()
		.toLowerCase()
		.replace(/&/g, " and ")
		.replace(/['’]/g, "")
		.replace(/[^a-z0-9+]+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
};

// Map a single medal item:
// - DO NOT overwrite item.id (keep numeric authoring id)
// - derive image key from name slug (or allow override via _imgKey)
window.mapMedalItem = function mapMedalItem(sectionId, item) {
	const out = { ...item };

	const slugger = window._medalSlug || _medalSlugFallback;
	const nameSlug = slugger(out.name);

	// Keep numeric id; optionally allow separate stable slug storage if you want it
	// (doesn't affect ids used for saving/checking)
	if (out.idSlug == null) out.idSlug = nameSlug;

	// Allow authoring override: _imgKey: "custom-file-name"
	const imgKey =
		(typeof out._imgKey === "string" && out._imgKey.trim())
			? out._imgKey.trim()
			: nameSlug;

	out._imgKey = imgKey;

	// Default img from slug; keep any explicit img if author provided one
	out.img = out.img ?? (() => window._medal(sectionId, imgKey));

	return out;
};

// Build medals object from simple SECTIONS + ITEMS_BY_SECTION
window.buildMedalsFor = function buildMedalsFor(SECTIONS, ITEMS_BY_SECTION) {
	return {
		sections: (SECTIONS || []).map((s) => ({
			// keep label/type/etc
			...s,
			items: (ITEMS_BY_SECTION?.[s.id] || []).map((it) => mapMedalItem(s.id, it)),
		})),
	};
};

function _finalizeMedalsIdsAndImgs(gameKey, medalsObj) {
	if (!medalsObj || !Array.isArray(medalsObj.sections)) return medalsObj;

	for (const sec of medalsObj.sections) {
		if (!sec || !Array.isArray(sec.items)) continue;

		// Folder/type for medal image paths: prefer explicit sec.type, fallback to sec.id
		const folder = String(sec.type || sec.id || "").trim();

		for (const it of sec.items) {
			if (!it) continue;

			// --- 1) Canonical IDs (numeric authoring -> full ids) ----------
			const rawId = it._rawId ?? it.id;
			it._rawId = rawId;

			const idNum =
				(rawId != null && rawId !== "" && !isNaN(Number(rawId)))
					? Number(rawId)
					: rawId;

			// If it's numeric-ish, rewrite to canonical
			if (typeof idNum === "number") {
				it.id = window._medalFullId(gameKey, sec.id, idNum);
			} else {
				// Fallback legacy: still namespace it so it's stable + unique
				// (and avoids collisions if old ids are reused)
				const legacy = String(idNum);
				it.id = `${String(gameKey)}:${String(sec.id)}:${legacy}`;
			}

			// --- 2) Auto image assignment (from NAME slug) -----------------
			// Allow authoring-time override via it._imgKey (like fashion)
			const rawImgKey = it._imgKey;
			const slug =
				(typeof rawImgKey === "string" && rawImgKey.trim())
					? rawImgKey.trim()
					: window._medalSlug(it.name);

			it._imgKey = slug;

			// Only assign if missing (lets you override per medal)
			if (!it.img && folder) {
				it.img = () => window._medal(folder, slug);
			}
		}
	}

	return medalsObj;
}

/* ===================== Dex ID helpers ===================== */
window._parseDexKey = function _parseDexKey(dexGameKey) {
	const raw = String(dexGameKey || "").trim().toLowerCase();
	if (!raw) return { game: "", category: "" };

	// National dex keys end with "-national"
	if (raw.endsWith("-national")) {
		return { game: raw.replace(/-national$/, ""), category: "national" };
	}

	// Regional sub-dex keys: "<game>-<region>"
	// (x-central, x-coastal, x-mountain, sun-alola, sun-melemele, etc.)
	const idx = raw.indexOf("-");
	if (idx > 0) {
		const game = raw.slice(0, idx);
		const category = raw.slice(idx + 1);
		return { game, category };
	}

	// Plain game key => regional
	return { game: raw, category: "regional" };
};

/**
 * Build the new dex ID:
 * <game>:dex:<category>:<id>[:<formId>]
 *
 * Notes:
 * - id is required (this is the dex entry's normal `id` field).
 * - formId is optional and should already be normalized (or a simple slug).
 */
window._makeDexId = function _makeDexId(dexGameKey, id, formId) {
	const { game, category } = window._parseDexKey(dexGameKey);
	const n = Number(id);

	// ✅ allow 0 (BW starts at 0), but still reject NaN / negatives
	if (!game || !Number.isFinite(n) || n < 0) return "";

	const base = `${game}:dex:${category}:${pad4(n)}`;
	return formId ? `${base}:${String(formId)}` : base;
};

/**
 * Decorate a dex list so:
 * - entry.id becomes the new string ID (based on *entry.id*)
 * - entry.localId preserves the old numeric entry.id (regional/national index)
 */
window._decorateDexListIds = function _decorateDexListIds(dexGameKey, dexList) {
	const arr = Array.isArray(dexList) ? dexList : [];
	return arr.map((m, i) => {
		if (!m || typeof m !== "object") return m;

		const localId = Number.isFinite(Number(m.localId)) ? m.localId : m.id;
		const newId = window._makeDexId(dexGameKey, localId);

		return { ...m, localId, id: newId, };
	});
};

/**
 * Extract the numeric “dex number” from a dex entry id.
 * - If id is already a number -> returns it
 * - If id is "game:dex:category:123" -> returns 123
 * - Falls back to localId if provided
 */
window._dexIdNumber = function _dexIdNumber(id, localId) {
	if (Number.isFinite(Number(localId))) return Number(localId);

	if (typeof id === "number" && Number.isFinite(id)) return id;

	const s = String(id || "");
	const m = s.match(/:dex:[^:]+:(\d+)(?::|$)/i);
	if (m) return Number(m[1]);

	const n = Number(s);
	return Number.isFinite(n) ? n : null;
};

/* ===================== Dex registration from BASE_DEX ===================== */
/* ===================== Dex registration core ===================== */

// Rebuild a "base game" -> (natiId -> [{gameKey,id}...]) index.
// dex.js reads window.PPGC._natDexIndex, so keeping this up-to-date avoids weird cross-dex lookups.
window._rebuildNatDexIndex = function _rebuildNatDexIndex() {
	const dexRoot = window.DATA?.dex || {};
	const index = {};

	const isNatKey = (k) => String(k || "").endsWith("-national");
	const baseOf = (k) => {
		const str = String(k || "");
		const withoutNat = isNatKey(str) ? str.replace(/-national$/, "") : str;
		return withoutNat.split("-")[0];
	};
	const normalizeDexList = (gameKey, raw) => {
		if (Array.isArray(raw)) return raw;
		if (raw && Array.isArray(raw.items)) return raw.items;
		if (raw && typeof raw === "object" && Array.isArray(raw[gameKey])) return raw[gameKey];
		return [];
	};

	for (const [gameKey, raw] of Object.entries(dexRoot)) {
		const list = normalizeDexList(gameKey, raw);
		if (!list.length) continue;

		const baseKey = baseOf(gameKey);
		if (!baseKey) continue;

		if (!index[baseKey]) index[baseKey] = new Map();
		const map = index[baseKey];

		for (const entry of list) {
			if (!entry || typeof entry !== "object") continue;
			const nat = entry.natiId;
			if (nat === undefined || nat === null) continue;

			const natKey = String(nat);
			if (!map.has(natKey)) map.set(natKey, []);
			map.get(natKey).push({ gameKey, id: entry.id });
		}
	}

	window.PPGC = window.PPGC || {};
	window.PPGC._natDexIndex = index;
};

window._registerDexData = function _registerDexData({
	baseKeys,
	dexName,
	variants,
	decorateIds = true,
	refreshNatIndex = true,
	buildDexFor,
} = {}) {
	window.DATA = window.DATA || {};
	window.DATA.dex = window.DATA.dex || {};
	window.DATA.dexNames = window.DATA.dexNames || {};

	const keys = Array.isArray(baseKeys) ? baseKeys : [];
	const vars = (Array.isArray(variants) && variants.length)
		? variants
		: [{ suffix: "", name: dexName || "Dex" }];

	if (typeof buildDexFor !== "function") {
		console.warn("[dex] _registerDexData missing buildDexFor()");
		return;
	}

	for (const baseKey of keys) {
		for (const v of vars) {
			const suffix = typeof v?.suffix === "string" ? v.suffix : "";
			const dexKey = `${baseKey}${suffix}`;

			let list = buildDexFor(baseKey, dexKey) || [];
			if (!Array.isArray(list)) list = [];

			if (decorateIds && typeof window._decorateDexListIds === "function") {
				list = window._decorateDexListIds(dexKey, list);
			}

			window.DATA.dex[dexKey] = list;

			// Name priority: variant.name -> dexName -> fallback
			const name =
				(typeof v?.name === "string" && v.name.trim())
					? v.name.trim()
					: (typeof dexName === "string" && dexName.trim())
						? dexName.trim()
						: "Dex";

			window.DATA.dexNames[dexKey] = name;
		}
	}

	if (refreshNatIndex && typeof window._rebuildNatDexIndex === "function") {
		window._rebuildNatDexIndex();
	}
};

/**
 * Register dex data for a set of game keys using a shared BASE_DEX array.
 * This fully replaces the common "buildDexFor" boilerplate in dex data files.
 *
 * What it does:
 * - For each (baseKey + variant) it:
 *   - wraps sprites so they use baseKey for sprite folders
 *   - assigns img/imgS for each mon (and its forms)
 *   - registers DATA.dex[dexKey] and DATA.dexNames[dexKey]
 *   - optionally decorates ids using _decorateDexListIds(dexKey, list)
 *
 * Params:
 * - gen: numeric or "7_2"/"8_2"/"9_2" etc (used only for sprite choosing)
 * - baseKeys: ["black","white"]
 * - dexName: name for base variant
 * - baseDex: array of dex entries (without worrying about img/imgS)
 * - variants: [{suffix:"", name:"Unova Dex"}, {suffix:"-national", name:"National Dex"}]
 *
 * Optional overrides:
 * - spriteGameKey: (baseKey, dexKey) => "black" (default baseKey)
 *     (useful if a variant should still pull sprites from base game)
 * - spriteGen: (baseKey, dexKey) => gen (default gen)
 */
window._registerDexDataFromBaseDex = function _registerDexDataFromBaseDex({
	gen,
	baseKeys,
	dexName,
	baseDex,
	variants,
	sub,                 // ✅ NEW: single-suffix mode (e.g. "-national", "-central")
	// ...
	decorateIds = true,
	refreshNatIndex = true,
	spriteGameKey,
	spriteGen,
} = {}) {
	const BASE = Array.isArray(baseDex) ? baseDex : [];
	const keys = Array.isArray(baseKeys) ? baseKeys : [];

	// ✅ If you didn't pass variants, build it from `sub` (or default to base)
	const vars =
		Array.isArray(variants) && variants.length
			? variants
			: [
				{
					suffix: typeof sub === "string" ? sub : "",
					name:
						typeof dexName === "string"
							? dexName
							: (sub === "-national" ? "National Dex" : "Dex"),
				},
			];

	function pickGen(baseKey, dexKey) {
		if (typeof spriteGen === "function") return spriteGen(baseKey, dexKey);
		return gen;
	}
	function pickGameKey(baseKey, dexKey) {
		if (typeof spriteGameKey === "function") return spriteGameKey(baseKey, dexKey);
		return baseKey;
	}

	function withSprites(entry, g, gameKey) {
		// IMPORTANT: preserve existing fields; just override img/imgS if absent OR if they
		// were authored as baseSprite(...) placeholders.
		const out = { ...entry };
		function bindGameKeyFn(fn) {
			if (typeof fn !== "function") return fn;
			return (ctx) => fn({ ...(ctx || {}), gameKey });
		}

		// If author supplied img/imgS, bind ctx.gameKey like tasks do
		if (out.img) out.img = bindGameKeyFn(out.img);
		if (out.imgS) out.imgS = bindGameKeyFn(out.imgS);

		const baseSprite = (natiId, form) =>
			window.wantAnimatedDexSprites(g)
				? window._frontSpriteAnimated(g, gameKey, natiId, form)
				: window._frontSprite(g, gameKey, natiId, form);

		const shinySprite = (natiId, form) =>
			window.wantAnimatedDexSprites(g)
				? window._frontSpriteShinyAnimated(g, gameKey, natiId, form)
				: window._frontSpriteShiny(g, gameKey, natiId, form);

		// If author didn’t supply img/imgS, set them
		if (!out.img) out.img = () => baseSprite(out.natiId);
		if (!out.imgS) out.imgS = () => shinySprite(out.natiId);

		// Forms: also ensure each form has img/imgS (don’t overwrite explicit ones)
		if (Array.isArray(out.forms)) {
			out.forms = out.forms.map((f) => {
				if (!f || typeof f !== "object") return f;
				const ff = { ...f };

				// Use:
				// - form.natiId if provided (rare)
				// - else inherit parent natiId
				const fid = ff.natiId ?? out.natiId;

				// If you ever want to support form-specific keys, allow:
				//   f.formKey or f.form to pass through to _sprite helpers (they already handle it)
				const formKey = ff.formKey ?? ff.form ?? null;

				if (ff.img) ff.img = bindGameKeyFn(ff.img);
				if (ff.imgS) ff.imgS = bindGameKeyFn(ff.imgS);

				return ff;
			});
		}

		return out;
	}

	// BuildDexFor is now internal; delegate registration to your existing helper
	window._registerDexData({
		baseKeys: keys,
		dexName,
		variants: vars,
		decorateIds,
		refreshNatIndex,
		buildDexFor: (baseKey, dexKey) => {
			const g = pickGen(baseKey, dexKey);
			const spriteKey = pickGameKey(baseKey, dexKey);

			// Map BASE_DEX -> final entries with bound sprites
			return BASE.map((m) => withSprites(m, g, spriteKey));
		},
	});
};

/**
 * Dex sprite picker (static vs animated) with shiny support.
 * Returns a function you can call like:
 *   const baseSprite = dexSprite(gen, gameKey);
 *   baseSprite(494)            -> path
 *   baseSprite("0521-f")       -> path (form suffix style)
 *   baseSprite(521, "female")  -> path (formKey style)
 *
 * And for shiny:
 *   const shinySprite = dexSprite(gen, gameKey, { shiny: true });
 */
window.dexSprite = function dexSprite(gen, gameKey, opts) {
	const shiny = !!(opts && opts.shiny);

	return (natiId, formKey) => {
		const animated = window.wantAnimatedDexSprites(gen);

		if (!shiny) {
			return animated
				? window._frontSpriteAnimated(gen, gameKey, natiId, formKey)
				: window._frontSprite(gen, gameKey, natiId, formKey);
		}

		return animated
			? window._frontSpriteShinyAnimated(gen, gameKey, natiId, formKey)
			: window._frontSpriteShiny(gen, gameKey, natiId, formKey);
	};
};

window._curryFullId = function (gameKey, type, flavor) {
	const gk = String(gameKey || "").trim();
	const t = String(type || "").trim();
	if (!gk || !t) return "";

	if (flavor == null || flavor === "") {
		return `${gk}:curries:${t}`;
	}
	return `${gk}:curries:${t}:${String(flavor).trim().toLowerCase()}`;
};
window._sandwichFullId = function (gameKey, type, flavor) {
	const gk = String(gameKey || "").trim();
	const t = String(type || "").trim();
	if (!gk || !t) return "";

	if (flavor == null || flavor === "") {
		return `${gk}:sandwiches:${t}`;
	}
	return `${gk}:sandwiches:${t}:${String(flavor).trim().toLowerCase()}`;
};
window._sandwichSlug = function (s) {
	return String(s ?? "")
		.trim()
		.toLowerCase()
		.replace(/&/g, " and ")
		.replace(/['’]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
};
window._stickerSlug = function (s) {
	return String(s ?? "")
		.trim()
		.toLowerCase()
		.replace(/&/g, " and ")
		.replace(/['’]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
};

window._stickerFullId = function (gameKey, typeSlug, formSlug) {
	const gk = String(gameKey || "").trim();
	const t = String(typeSlug || "").trim();
	if (!gk || !t) return "";

	if (formSlug == null || formSlug === "") {
		return `${gk}:stickers:${t}`;
	}
	return `${gk}:stickers:${t}:${String(formSlug).trim().toLowerCase()}`;
};
