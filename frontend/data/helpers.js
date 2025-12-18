// --- Task/Dex/Fashion reference helpers ---
window.pad4 = function pad4(v) {
	const s = String(v ?? "");

	// Handle form IDs like "130-f" / "386-a" / "869-cs-b"
	const parts = s.split("-");
	const head = parts[0];

	// If head isn't a number, just return original string
	if (!/^\d+$/.test(head)) return s;

	const padded = head.padStart(4, "0");
	return parts.length > 1 ? `${padded}-${parts.slice(1).join("-")}` : padded;
};
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
	const gameKey = String(game || "").trim();
	const nati = pad4(id);
	const formKey = normFormKey(form);

	const root = "imgs/sprites/";
	const baseOrShiny = shiny ? "shiny-model" : "base-model";

	const prefix = resolveGameSpritePathPrefix(gameKey);

	// Gen 6/7/LGPE-style: single GLB files in base-model-<GAME>/ (and shiny-model-<GAME>/)
	// Example: imgs/sprites/gen6-7/x-ultra/model/base-model-x/0130-male.glb
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
		const fname = formKey ? `${formKey}.glb` : `model.glb`;
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
window._baseModel = (gen, game, natiId) => _model(gen, game, natiId, false);

window._frontSpriteShiny = (gen, game, natiId) => _sprite(gen, game, natiId, true, false, false, false);
window._backSpriteShiny = (gen, game, natiId) => _sprite(gen, game, natiId, true, true, false, false);
window._frontSpriteShinyAnimated = (gen, game, natiId) => _sprite(gen, game, natiId, true, false, false, true);
window._backSpriteShinyAnimated = (gen, game, natiId) => _sprite(gen, game, natiId, true, true, false, true);
window._iconSpriteShiny = (gen, game, natiId) => _sprite(gen, game, natiId, true, false, true, false);
window._shinyModel = (gen, game, natiId) => _model(gen, game, natiId, true);

window._badges = function (imgs) {
	if (!Array.isArray(imgs)) imgs = [imgs]; // allow single string too
	return imgs.map((name) => "imgs/badges/" + name + ".png");
};
window._ball = function (gen, name) {
	switch (gen) {
		case 1:
		case 2:
		case 3:
			return "imgs/balls/gen3/" + name + ".png";
		case 4:
		case 5:
			return "imgs/balls/gen5/" + name + ".png";
		case 6:
			return "imgs/balls/gen6/" + name + ".png";
		case 7:
			return "imgs/balls/gen7/" + name + ".png";
		case 7.5:
		case "7_2":
			return "imgs/balls/gen7_2/" + name + ".png";
		case 8:
			return "imgs/balls/gen8/" + name + ".png";
		case 8.5:
		case "8_2":
			return "imgs/balls/gen8_2/" + name + ".png";
		case 9:
			return "imgs/balls/gen9/scarlet-violet/" + name + ".png";
		case 9.5:
		case "9_2":
			return "imgs/balls/gen9/legendsza/" + name + ".png";
	}
};
window._ribbon = function (gen, name) {
	switch (gen) {
		case 3:
			return "imgs/ribbons/gen3/" + name + ".png";
		case 4:
		case 5:
			return "imgs/ribbons/gen4-5/" + name + ".png";
		case 6:
		case 7:
			return "imgs/ribbons/gen6-7/" + name + ".png";
		case 7.5:
		case "7_2":
		case 8:
		case 8.5:
		case "8_2":
		case 9:
		case 9.5:
		case "9_2":
			return "imgs/ribbons/gen8-9/" + name + ".png";
	}
};
window._task1 = function (game, type, id) {
	if (type == "bw") {
		switch (game) {
			case "red":
			case "blue":
				return "imgs/task-imgs/gen1/red-blue/bw/" + id + ".png";
			case "yellow":
				return "imgs/task-imgs/gen1/yellow/bw/" + id + ".png";
			default:
				return "imgs/task-imgs/gen1/red-blue/bw/" + id + ".png";
		}
	} else {
		switch (game) {
			case "red":
			case "blue":
				return "imgs/task-imgs/gen1/red-blue/colored/" + id + ".png";
			case "yellow":
				return "imgs/task-imgs/gen1/yellow/colored/" + id + ".png";
			default:
				return "imgs/task-imgs/gen1/red-blue/bw/" + id + ".png";
		}
	}

};
window._task = function (game, id) {
	switch (game) {
		// Gen 2
		case "gold":
		case "silver":
			return "imgs/task-imgs/gen2/gold-silver/" + id + ".png";
		case "crystal":
			return "imgs/task-imgs/gen2/crystal/" + id + ".png";

		// Gen 3
		case "ruby":
		case "sapphire":
			return "imgs/task-imgs/gen3/ruby-sapphire/" + id + ".png";
		case "firered":
		case "leafgreen":
			return "imgs/task-imgs/gen3/firered-leafgreen/" + id + ".png";
		case "emerald":
			return "imgs/task-imgs/gen3/emerald/" + id + ".png";

		// Gen 4
		case "diamond":
		case "pearl":
			return "imgs/task-imgs/gen4/diamond-pearl/" + id + ".png";
		case "platinum":
			return "imgs/task-imgs/gen4/platinum/" + id + ".png";
		case "heartgold":
		case "soulsilver":
			return "imgs/task-imgs/gen4/heartgold-soulsilver/" + id + ".png";

		// Gen 5
		case "black":
		case "white":
			return "imgs/task-imgs/gen5/black-white/" + id + ".png";
		case "black2":
		case "white2":
			return "imgs/task-imgs/gen5/black2-white2/" + id + ".png";

		// Gen 6
		case "x":
		case "y":
			return "imgs/task-imgs/gen6/xy/" + id + ".png";
		case "omegaruby":
		case "alphasapphire":
			return "imgs/task-imgs/gen6/omegaruby-alphasapphire/" + id + ".png";

		// Gen 7
		case "sun":
		case "moon":
			return "imgs/task-imgs/gen7/sun-moon/" + id + ".png";
		case "ultrasun":
		case "ultramoon":
			return "imgs/task-imgs/gen7/ultrasun-ultramoon/" + id + ".png";

		// Gen 7 Part 2
		case "letsgopikachu":
		case "letsgoeevee":
			return "imgs/task-imgs/gen7/lgpe/" + id + ".png";

		// Gen 8
		case "sword":
		case "swordioa":
		case "swordct":
		case "shield":
		case "shieldioa":
		case "shieldct":
			return "imgs/task-imgs/gen8/sword-shield/" + id + ".png";

		// Gen 8 Part 2
		case "brilliantdiamond":
		case "shiningpearl":
			return "imgs/task-imgs/gen8/brilliantdiamond-shiningpearl/" + id + ".png";
		case "legendsarceus":
			return "imgs/task-imgs/gen8/legendsarceus/" + id + ".png";

		// Gen 9
		case "scarlet":
		case "scarlettm":
		case "scarletid":
		case "violet":
		case "violettm":
		case "violetid":
			return "imgs/task-imgs/gen9/scarlet-violet/" + id + ".png";

		// Gen 9 Part 2
		case "legendsza":
		case "legendszamd":
			return "imgs/task-imgs/gen9/legendsza/" + id + ".png";

		// HOME
		case "home":
			return "imgs/task-imgs/home/" + id + ".png";
	}
};
window._npc = function (game, id) {
	switch (game) {
		// Gen 2
		case "gold":
		case "silver":
			return "imgs/npcs/gen2/gold-silver/" + id + ".png";
		case "crystal":
			return "imgs/npcs/gen2/crystal/" + id + ".png";

		// Gen 3
		case "ruby":
		case "sapphire":
			return "imgs/npcs/gen3/ruby-sapphire/" + id + ".png";
		case "firered":
		case "leafgreen":
			return "imgs/npcs/gen3/firered-leafgreen/" + id + ".png";
		case "emerald":
			return "imgs/npcs/gen3/emerald/" + id + ".png";

		// Gen 4
		case "diamond":
		case "pearl":
			return "imgs/npcs/gen4/diamond-pearl/" + id + ".png";
		case "platinum":
			return "imgs/npcs/gen4/platinum/" + id + ".png";
		case "heartgold":
		case "soulsilver":
			return "imgs/npcs/gen4/heartgold-soulsilver/" + id + ".png";

		// Gen 5
		case "black":
		case "white":
			return "imgs/npcs/gen5/black-white/" + id + ".png";
		case "black2":
		case "white2":
			return "imgs/npcs/gen5/black2-white2/" + id + ".png";

		// Gen 6
		case "x":
		case "y":
			return "imgs/npcs/gen6/xy/" + id + ".png";
		case "omegaruby":
		case "alphasapphire":
			return "imgs/npcs/gen6/omegaruby-alphasapphire/" + id + ".png";

		// Gen 7
		case "sun":
		case "moon":
			return "imgs/npcs/gen7/sun-moon/" + id + ".png";
		case "ultrasun":
		case "ultramoon":
			return "imgs/npcs/gen7/ultrasun-ultramoon/" + id + ".png";

		// Gen 7 Part 2
		case "letsgopikachu":
		case "letsgoeevee":
			return "imgs/npcs/gen7/lgpe/" + id + ".png";

		// Gen 8
		case "sword":
		case "swordioa":
		case "swordct":
		case "shield":
		case "shieldioa":
		case "shieldct":
			return "imgs/npcs/gen8/sword-shield/" + id + ".png";

		// Gen 8 Part 2
		case "brilliantdiamond":
		case "shiningpearl":
			return "imgs/npcs/gen8/brilliantdiamond-shiningpearl/" + id + ".png";
		case "legendsarceus":
			return "imgs/npcs/gen8/legendsarceus/" + id + ".png";

		// Gen 9
		case "scarlet":
		case "scarlettm":
		case "scarletid":
		case "violet":
		case "violettm":
		case "violetid":
			return "imgs/npcs/gen9/scarlet-violet/" + id + ".png";

		// Gen 9 Part 2
		case "legendsza":
		case "legendszamd":
			return "imgs/npcs/gen9/legendsza/" + id + ".png";

		// HOME
		case "home":
			return "imgs/npcs/home/" + id + ".png";
	}
};
window._location = function (game, id) {
	switch (game) {
		// Gen 2
		case "gold":
		case "silver":
		case "crystal":
			return "imgs/locations/gen2/" + id + ".png";

		// Gen 3
		case "ruby":
		case "sapphire":
		case "emerald":
			return "imgs/locations/gen3/ruby-sapphire-emerald/" + id + ".png";
		case "firered":
		case "leafgreen":
			return "imgs/locations/gen3/firered-leafgreen/" + id + ".png";

		// Gen 4
		case "diamond":
		case "pearl":
		case "platinum":
			return "imgs/locations/gen4/diamond-pearl-platinum/" + id + ".png";
		case "heartgold":
		case "soulsilver":
			return "imgs/locations/gen4/heartgold-soulsilver/" + id + ".png";

		// Gen 5
		case "black":
		case "white":
		case "black2":
		case "white2":
			return "imgs/locations/gen5/" + id + ".png";

		// Gen 6
		case "x":
		case "y":
			return "imgs/locations/gen6/xy/" + id + ".png";
		case "omegaruby":
		case "alphasapphire":
			return "imgs/locations/gen6/omegaruby-alphasapphire/" + id + ".png";

		// Gen 7
		case "sun":
		case "moon":
		case "ultrasun":
		case "ultramoon":
			return "imgs/locations/gen7/sun-moon-ultra/" + id + ".png";

		// Gen 7 Part 2
		case "letsgopikachu":
		case "letsgoeevee":
			return "imgs/locations/gen7/lgpe/" + id + ".png";

		// Gen 8
		case "sword":
		case "swordioa":
		case "swordct":
		case "shield":
		case "shieldioa":
		case "shieldct":
			return "imgs/locations/gen8/sword-shield/" + id + ".png";

		// Gen 8 Part 2
		case "brilliantdiamond":
		case "shiningpearl":
			return "imgs/locations/gen8/brilliantdiamond-shiningpearl/" + id + ".png";
		case "legendsarceus":
			return "imgs/locations/gen8/legendsarceus/" + id + ".png";

		// Gen 9
		case "scarlet":
		case "scarlettm":
		case "scarletid":
		case "violet":
		case "violettm":
		case "violetid":
			return "imgs/locations/gen9/scarlet-violet/" + id + ".png";

		// Gen 9 Part 2
		case "legendsza":
		case "legendszamd":
			return "imgs/locations/gen9/legendsza/" + id + ".png";

		// HOME
		case "home":
			return "imgs/locations/home/" + id + ".png";
	}
};
window._item = function (game, id) {
	switch (game) {
		case "legendsza":
			return "imgs/items/gen9/legendsza/" + id + ".png";
		default:
			return "imgs/items/" + id + ".png";
	}
};
window._medal = function (type, name) {
	return "imgs/medals/" + type + "/" + name + ".png";
};
window._megaStone = function (gen, stone) {
	switch (gen) {
		case 6:
		case 7:
		case 7.5:
		case "7_2":
			return "imgs/mega-stones/gen6-7/" + stone + ".png";
		case 9.5:
		case "9_2":
			return "imgs/mega-stones/gen9_2/" + stone + ".png";
		default:
			return "imgs/mega-stones/gen9_2/" + stone + ".png";
	}
};
window._typing = function (type) {
	return "imgs/typings/" + type + ".png";
};
window._zCrystal = function (crystal) {
	return "imgs/zcrystals/" + crystal + ".png";
};
window._trainerCard = function (game, type, name) {
	return "imgs/trainer-cards/" + game + "/" + type + "/" + name + ".png";
};
window._hm = function (gen, type) {
	switch (gen) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			return "imgs/hms/gen3-5/" + type + ".png";
		case 6:
			return "imgs/hms/gen6-8/" + type + ".png";
		case 7:
			return "imgs/hms/gen7/" + type + ".png";
		case 7.5:
		case "7_2":
			return "imgs/hms/gen7_2/" + type + ".png";
		case 8:
			return "imgs/hms/gen6-8/" + type + ".png";
		case 8.5:
		case "8_2":
			return "imgs/hms/gen8_2/" + type + ".png";
		case 9:
		case 9.5:
		case "9_2":
			return "imgs/hms/gen9/" + type + ".png";
		default:
			return "imgs/hms/gen3-5/" + type + ".png";
	}
};
window._tm = function (gen, type) {
	switch (gen) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			return "imgs/tms/gen3-5/" + type + ".png";
		case 6:
		case 7:
		case 7.5:
		case "7_2":
		case 8:
			return "imgs/tms/gen6-8/" + type + ".png";
		case 8.5:
		case "8_2":
			return "imgs/tms/gen8_2/" + type + ".png";
		case 9:
			return "imgs/tms/gen9/" + type + ".png";
		case 9.5:
		case "9_2":
			return "imgs/tms/gen9_2/" + type + ".png";
		default:
			return "imgs/tms/gen3-5/" + type + ".png";
	}
};
window._tr = function (type) {
	return "imgs/trs/" + type + ".png";
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