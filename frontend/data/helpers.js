// --- Task/Dex/Fashion reference helpers ---
function pad4(id) {
	if (typeof id === "number") return String(id).padStart(4, "0");
	if (typeof id === "string" && /^[0-9]+$/.test(id)) return id.padStart(4, "0");
	return id; // keep forms like "521-f" untouched
}
window.pad4 = pad4;
window.pad04 = pad4;
window._dex = function (game, type, id, form) {
	if (arguments.length === 3) {
		return { game, dexType: type, id, };
	} else {
		return { game, dexType: type, id, form: form, };
	}
};
window._regionalDex = (game, ...args) => _dex(game, "regional", ...args);
window._nationalDex = (game, ...args) => _dex(game, "national", ...args);

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
	path += animated ? ".webm" : ".png";

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

function resolveGameSpritePathPrefix(gameKey) {
	if (gameKey.indexOf("-") > 0) gameKey = gameKey.substr(0, gameKey.indexOf("-") - 1);

	switch (String(gameKey || "").toLowerCase()) {
		// Gen 1
		case "red":
		case "blue":
			return "gen1/red-blue/";
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
			return "brilliantdiamond-shiningpearl/";
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