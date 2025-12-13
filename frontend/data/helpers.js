// --- Task/Dex/Fashion reference helpers ---
function pad3(id) {
	if (typeof id === "number") return String(id).padStart(3, "0");
	if (typeof id === "string" && /^[0-9]+$/.test(id)) return id.padStart(3, "0");
	return id;
}
window._dex = function (game, type, id, form) {
	if (arguments.length === 3) {
		return { game, dexType: type, id, };
	} else {
		return { game, dexType: type, id, form: form, };
	}
};
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
window._sprite = function (game, id, shiny, frontBack, thumbIcon, animated, model) {
	const padded = pad3(id);

	let folder = "";
	if (game === "red" || game === "blue" || game === "yellow") folder += !shiny ? "bw" : "colored";
	else folder += !shiny ? "base" : "shiny";
	if (!model) {
		folder += !thumbIcon ? (!frontBack ? "-front" : "-back") : "";
		folder += !thumbIcon ? "-thumb" : "-icon";
		folder += !animated ? "" : "-animated";
	} else {
		folder += "-model";
	}


	let path = "imgs/sprites/";

	switch (game) {
		// Gen 1
		case "red":
		case "blue":
			path += "gen1/red-blue"; break;
		case "yellow":
			path += "gen1/yellow"; break;

		// Gen 2
		case "gold":
			path += "gen2/gold"; break;
		case "silver":
			path += "gen2/silver"; break;
		case "crystal":
			path += "gen2/crystal"; break;

		// Gen 3
		case "ruby":
		case "sapphire":
			path += "gen3/ruby-sapphire"; break;
		case "firered":
		case "leafgreen":
			path += "gen3/firered-leafgreen"; break;
		case "emerald":
			path += "gen3/emerald"; break;

		// Gen 4
		case "diamond":
		case "pearl":
			path += "gen4/diamond-pearl"; break;
		case "platinum":
			path += "gen4/platinum"; break;
		case "heartgold":
		case "soulsilver":
			path += "gen4/heartgold-soulsilver"; break;

		// Gen 5
		case "black":
		case "white":
		case "black2":
		case "white2":
			path += "gen5"; break;

		// Gen 6
		case "x":
		case "y":
		case "omegaruby":
		case "alphasapphire":

		// Gen 7
		case "sun":
		case "moon":
		case "moon-poni":
		case "ultrasun":
		case "ultramoon":
			path += "gen6-7/x-ultra"; break;

		// Gen 7 Part 2
		case "letsgopikachu":
		case "letsgoeevee":
			path += "gen6-7/lgpe"; break;

		// Gen 8
		case "sword":
		case "shield":
			path += "gen8/sword-shield"; break;

		// Gen 8 Part 2
		case "brilliantdiamond":
		case "shiningpearl":
			path += "brilliantdiamond-shiningpearl"; break;
		case "legendsarceus":
			path += "gen8/legendsarceus"; break;

		// Gen 9
		case "scarlet":
		case "violet":
			path += "gen9/scarlet-violet"; break;

		// Gen 9 Part 2
		case "legendsza":
			path += "gen9/legendsza"; break;

		// HOME
		case "home":
		default:
			path += "pokemon_home"; break;
	}

	path += "/" + folder + "/" + padded;
	path += !model ? ".png" : ".glb";
	return path;
};
window._frontSprite = (game, natiId) => _sprite(game, natiId, false, false, false);
window._backSprite = (game, natiId) => _sprite(game, natiId, false, true, false);
window._iconSprite = (game, natiId) => _sprite(game, natiId, false, false, true);
window._frontSpriteShiny = (game, natiId) => _sprite(game, natiId, true, false, false);
window._backSpriteShiny = (game, natiId) => _sprite(game, natiId, true, true, false);
window._iconSpriteShiny = (game, natiId) => _sprite(game, natiId, true, false, true);
window._baseModel = (game, natiId) => _sprite(game, natiId, false, false, false, false, true);
window._shinyModel = (game, natiId) => _sprite(game, natiId, true, false, false, false, true);

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
/**
 * Helper: define sync sets for a single game.
 * Inside the builder callback you get:
 *   - task(id)        -> same as _taskRef(id)
 *   - regional(...args) -> _dexRef(game, "regional", ...args)
 *   - national(...args) -> _dexRef(game, "national", ...args)
 *   - fashion(id)     -> _fashionRef(game, id)
 *   - regionalFor(otherGame, ...args) -> cross-game regional dex ref
 */
window.defineSyncs = function (game, builder) {
	const helpers = {
		taskSync: _taskRef,
		regionalSync: (...args) => _dexRef(game, "regional", ...args),
		nationalSync: (...args) => _dexRef(game, "national", ...args),
		fashionSync: (id) => _fashionRef(game, id),

		// for rare cross-game dex refs (like ZA dex from MD syncs)
		regionalSyncCross: (otherGame, ...args) =>
			_dexRef(otherGame, "regional", ...args),
	};

	window.DATA.syncs[game] = builder(helpers);
};

// --- Layout reference helpers ---
window.spacer = "spacer";