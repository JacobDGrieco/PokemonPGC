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
window._sprite = function (game, shiny, id, iORm) {
	const padded = pad3(id);
	const bORc = !shiny ? "bw/" : "colored/";
	const bORs = !shiny ? "base/" : "shiny/";

	let bmORsm = !shiny ? "base-modals/" : "shiny-modals/";
	if (arguments.length === 4 && !iORm) {
		bmORsm = !shiny ? "base-icons/" : "shiny-icons/";
	}

	switch (game) {
		// Gen 1
		case "red":
		case "blue":
			return "imgs/sprites/gen1/red-blue/" + bORc + padded + ".png";
		case "yellow":
			return "imgs/sprites/gen1/yellow/" + bORc + padded + ".png";

		// Gen 2
		case "gold":
			return "imgs/sprites/gen2/gold/" + bORs + padded + ".png";
		case "silver":
			return "imgs/sprites/gen2/silver/" + bORs + padded + ".png";
		case "crystal":
			return "imgs/sprites/gen2/crystal/" + bORs + padded + ".png";

		// Gen 3
		case "ruby":
		case "ruby-national":
		case "sapphire":
		case "sapphire-national":
			return "imgs/sprites/gen3/ruby-sapphire/" + bORs + padded + ".png";
		case "firered":
		case "firered-national":
		case "leafgreen":
		case "leafgreen-national":
			return "imgs/sprites/gen3/firered-leafgreen/" + bORs + padded + ".png";
		case "emerald":
		case "emerald-national":
			return "imgs/sprites/gen3/emerald/" + bORs + padded + ".png";

		// Gen 4
		case "diamond":
		case "diamond-national":
		case "pearl":
		case "pearl-national":
			return "imgs/sprites/gen4/diamond-pearl/" + bORs + padded + ".png";
		case "platinum":
		case "platinum-national":
			return "imgs/sprites/gen4/platinum/" + bORs + padded + ".png";
		case "heartgold":
		case "heartgold-national":
		case "soulsilver":
		case "soulsilver-national":
			return "imgs/sprites/gen4/heartgold-soulsilver/" + bORs + padded + ".png";

		// Gen 5
		case "black":
		case "black-national":
		case "white":
		case "white-national":
		case "black2":
		case "black2-national":
		case "white2":
		case "white2-national":
			return "imgs/sprites/gen5/" + bORs + padded + ".png";

		// Gen 6
		case "x":
		case "x-central":
		case "x-coastal":
		case "x-mountain":
		case "x-national":
		case "y":
		case "y-central":
		case "y-coastal":
		case "y-mountain":
		case "y-national":
		case "omegaruby":
		case "omegaruby-national":
		case "alphasapphire":
		case "alphasapphire-national":

		// Gen 7
		case "sun":
		case "sun-alola":
		case "sun-melemele":
		case "sun-akala":
		case "sun-ulaula":
		case "sun-poni":
		case "moon":
		case "moon-alola":
		case "moon-melemele":
		case "moon-akala":
		case "moon-ulaula":
		case "moon-poni":
		case "ultrasun":
		case "ultrasun-alola":
		case "ultrasun-melemele":
		case "ultrasun-akala":
		case "ultrasun-ulaula":
		case "ultrasun-poni":
		case "ultramoon":
		case "ultramoon-alola":
		case "ultramoon-melemele":
		case "ultramoon-akala":
		case "ultramoon-ulaula":
		case "ultramoon-poni":
			return "imgs/sprites/gen6-7/x-ultra/" + bORs + padded + ".png";

		// Gen 7 Part 2
		case "letsgopikachu":
		case "letsgoeevee":
			return "imgs/sprites/gen6-7/lgpe/" + bORs + padded + ".png";

		// Gen 8
		case "sword":
		case "swordioa":
		case "swordct":
		case "shield":
		case "shieldioa":
		case "shieldct":
			return "imgs/sprites/gen8/sword-shield/" + bORs + padded + ".png";

		// Gen 8 Part 2
		case "brilliantdiamond":
		case "brilliantdiamond-national":
		case "shiningpearl":
		case "shiningpearl-national":
			return "imgs/sprites/gen8/brilliantdiamond-shiningpearl/icons/" + padded + ".png";
		case "legendsarceus":
			return "imgs/sprites/gen8/legendsarceus/" + bmORsm + padded + ".png";

		// Gen 9
		case "scarlet":
		case "scarlettm":
		case "scarletid":
		case "violet":
		case "violettm":
		case "violetid":
			return "imgs/sprites/gen9/scarlet-violet/" + bORs + padded + ".png";

		// Gen 8 Part 2
		case "legendsza":
		case "legendszamd":
			return "imgs/sprites/gen9/legendsza/" + bmORsm + padded + ".png";

		// HOME
		case "home":
		default:
			return "imgs/sprites/pokemon_home/" + bORs + padded + ".png";
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