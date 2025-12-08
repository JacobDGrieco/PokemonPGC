// Global Helpers for data files
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
window._sprite = function (game, shiny, id, iORm) {
	const padded = pad3(id);
	const bORc = !shiny ? "bw/" : "colored/";
	const bORs = !shiny ? "base/" : "shiny/";

	let bmORsm = !shiny ? "base-modals/" : "shiny-modals/";
	if (arguments.length === 4 && !iORm) {
		bmORsm = !shiny ? "base-icons/" : "shiny-icons/";
		console.log(bmORsm);
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
		case "whtie2":
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
			return "imgs/sprites/gen7/lgpe/" + bORs + padded + ".png";

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
			return "imgs/sprites/gen8/brilliantdiamond-shiningpearl/" + bORs + padded + ".png";
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
window.spacer = "spacer";

// Top level data setup
PPGC.register({
	// Top-level gen tabs (all are checklists)
	tabs: [
		{ key: "gen1", label: "Gen 1" },
		{ key: "gen2", label: "Gen 2" },
		{ key: "gen3", label: "Gen 3" },
		{ key: "gen4", label: "Gen 4" },
		{ key: "gen5", label: "Gen 5" },
		{ key: "gen6", label: "Gen 6" },
		{ key: "gen7", label: "Gen 7" },
		{ key: "gen7_2", label: "Gen 7 - Part 2" },
		{ key: "gen8", label: "Gen 8" },
		{ key: "gen8_2", label: "Gen 8 - Part 2" },
		{ key: "gen9", label: "Gen 9" },
		{ key: "gen9_2", label: "Gen 9 - Part 2" },
		{ key: "home", label: "HOME" },
	],

	games: {
		gen1: [
			{
				key: "red",
				label: "Red",
				color: "#cc0000",
				flags: ["caught", "seen", "unknown"],
				completionFlags: ["caught"],
			},
			{
				key: "blue",
				label: "Blue",
				color: "#3c78d8",
				flags: ["caught", "seen", "unknown"],
				completionFlags: ["caught"],
			},
			{
				key: "yellow",
				label: "Yellow",
				color: "#f1c232",
				flags: ["caught", "seen", "unknown"],
				completionFlags: ["caught"],
			},
		],
		gen2: [
			{
				key: "gold",
				label: "Gold",
				color: "#ff9900",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "silver",
				label: "Silver",
				color: "#cccccc",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "crystal",
				label: "Crystal",
				color: "#cfe2f3",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
		],
		gen3: [
			{
				key: "ruby",
				label: "Ruby",
				color: "#ff0000",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "sapphire",
				label: "Sapphire",
				color: "#1155cc",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "firered",
				label: "FireRed",
				color: "#cc0000",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "leafgreen",
				label: "LeafGreen",
				color: "#38761d",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "emerald",
				label: "Emerald",
				color: "#93c47d",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
		],
		gen4: [
			{
				key: "diamond",
				label: "Diamond",
				color: "#00ffff",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "pearl",
				label: "Pearl",
				color: "#a2c4c9",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "platinum",
				label: "Platinum",
				color: "#999999",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "heartgold",
				label: "HeartGold",
				color: "#ff9900",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "soulsilver",
				label: "SoulSilver",
				color: "#cccccc",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
		],
		gen5: [
			{
				key: "black",
				label: "Black",
				color: "#434343",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "white",
				label: "White",
				color: "#efefef",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "black2",
				label: "Black 2",
				color: "#434343",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "white2",
				label: "White 2",
				color: "#efefef",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
		],
		gen6: [
			{
				key: "x",
				label: "X",
				color: "#3d85c6",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "y",
				label: "Y",
				color: "#cc3232",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "omegaruby",
				label: "Omega Ruby",
				color: "#ff0000",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "alphasapphire",
				label: "Alpha Sapphire",
				color: "#1155cc",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
		],
		gen7: [
			{
				key: "sun",
				label: "Sun",
				color: "#f5ad58",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "moon",
				label: "Moon",
				color: "#674ea7",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "ultrasun",
				label: "Ultra Sun",
				color: "#f5ad58",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "ultramoon",
				label: "Ultra Moon",
				color: "#674ea7",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
		],
		gen7_2: [
			{
				key: "letsgopikachu",
				label: "Let's Go, Pikachu!",
				color: "#ffff00",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "letsgoeevee",
				label: "Let's Go, Eevee!",
				color: "#b45f06",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
		],
		gen8: [
			{
				key: "sword",
				label: "Sword",
				color: "#0b5394",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "swordioa",
				label: "Sword (IoA)",
				color: "#c5980f",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "swordct",
				label: "Sword (CT)",
				color: "#0c343d",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "shield",
				label: "Shield",
				color: "#ee4444",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "shieldioa",
				label: "Shield (IoA)",
				color: "#c5980f",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "shieldct",
				label: "Shield (CT)",
				color: "#0c343d",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
		],
		gen8_2: [
			{
				key: "brilliantdiamond",
				label: "Brilliant Diamond",
				color: "#00ffff",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "shiningpearl",
				label: "Shining Pearl",
				color: "#a2c4c9",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "legendsarceus",
				label: "Legends: Arceus",
				color: "#999999",
				flags: ["shiny alpha", "alpha", "shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny alpha", "alpha", "shiny", "caught"],
			},
		],
		gen9: [
			{
				key: "scarlet",
				label: "Scarlet",
				color: "#ff2400",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "scarlettm",
				label: "Scarlet (TM)",
				color: "#008080",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "scarletid",
				label: "Scarlet (ID)",
				color: "#4b0082",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "violet",
				label: "Violet",
				color: "#8f00ff",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "violettm",
				label: "Violet (TM)",
				color: "#008080",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
			{
				key: "violetid",
				label: "Violet (ID)",
				color: "#4b0082",
				flags: ["shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny", "caught"],
			},
		],
		gen9_2: [
			{
				key: "legendsza",
				label: "Legends: Z-A",
				color: "#64f29b",
				flags: ["shiny alpha", "alpha", "shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny alpha", "alpha", "shiny", "caught"],
			},
			{
				key: "legendszamd",
				label: "Legends: Z-A (MD)",
				color: "#64f29b",
				flags: ["shiny alpha", "alpha", "shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny alpha", "alpha", "shiny", "caught"],
			},
		],
		home: [
			{
				key: "home",
				label: "HOME",
				color: "#64f29b",
				flags: ["shiny alpha", "alpha", "shiny", "caught", "seen", "unknown"],
				completionFlags: ["shiny alpha", "alpha", "shiny", "caught"],
			},
		],
	},

	layoutVariants: {
		desktop: {
			gameRows: {
				gen1: [["red", "blue", "yellow"]],
				gen2: [["gold", "silver", "crystal"]],
				gen3: [
					["ruby", "sapphire"],
					["firered", "leafgreen"],
					["emerald"]
				],
				gen4: [
					["diamond", "pearl", "platinum"],
					["heartgold", "soulsilver"],
				],
				gen5: [
					["black", "white"],
					["black2", "white2"],
				],
				gen6: [
					["x", "y"],
					["omegaruby", "alphasapphire"],
				],
				gen7: [
					["sun", "moon"],
					["ultrasun", "ultramoon"],
				],
				gen7_2: [["letsgopikachu", "letsgoeevee"]],
				gen8: [
					["sword", "swordioa", "swordct"],
					["shield", "shieldioa", "shieldct"],
				],
				gen8_2: [["brilliantdiamond", "shiningpearl", "legendsarceus"]],
				gen9: [
					["scarlet", "scarlettm", "scarletid"],
					["violet", "violettm", "violetid"],
				],
				gen9_2: [["legendsza", "legendszamd"]],
				home: [["home"]],
			},
		},
		compact: {
		}
	},

	marks: {
		shiny: "imgs/icons/pokemon_home/shiny-icon.png", // e.g., a star icon
		alpha: "imgs/icons/pokemon_home/alpha-icon.png", // e.g., the red-eye alpha icon
	},
	marksByGame: {
		gold: {
			shiny: "imgs/icons/gen2/shiny-icon.png",
		},
		silver: {
			shiny: "imgs/icons/gen2/shiny-icon.png",
		},
		crystal: {
			shiny: "imgs/icons/gen2/shiny-icon.png",
		},
		ruby: {
			shiny: "imgs/icons/gen3/shiny-icon.png",
		},
		sapphire: {
			shiny: "imgs/icons/gen3/shiny-icon.png",
		},
		firered: {
			shiny: "imgs/icons/gen3/shiny-icon.png",
		},
		leafgreen: {
			shiny: "imgs/icons/gen3/shiny-icon.png",
		},
		emerald: {
			shiny: "imgs/icons/gen3/shiny-icon.png",
		},
		diamond: {
			shiny: "imgs/icons/gen4/shiny-icon.png",
		},
		pearl: {
			shiny: "imgs/icons/gen4/shiny-icon.png",
		},
		platinum: {
			shiny: "imgs/icons/gen4/shiny-icon.png",
		},
		heartgold: {
			shiny: "imgs/icons/gen4/shiny-icon.png",
		},
		soulsilver: {
			shiny: "imgs/icons/gen4/shiny-icon.png",
		},
		black: {
			shiny: "imgs/icons/gen5/shiny-icon.png",
		},
		white: {
			shiny: "imgs/icons/gen5/shiny-icon.png",
		},
		black2: {
			shiny: "imgs/icons/gen5/shiny-icon.png",
		},
		white2: {
			shiny: "imgs/icons/gen5/shiny-icon.png",
		},
		x: {
			shiny: "imgs/icons/gen6/shiny-icon.png",
		},
		y: {
			shiny: "imgs/icons/gen6/shiny-icon.png",
		},
		omegaruby: {
			shiny: "imgs/icons/gen6/shiny-icon.png",
		},
		alphasapphire: {
			shiny: "imgs/icons/gen6/shiny-icon.png",
		},
		sun: {
			shiny: "imgs/icons/gen7/shiny-icon2.png",
		},
		moon: {
			shiny: "imgs/icons/gen7/shiny-icon2.png",
		},
		ultrasun: {
			shiny: "imgs/icons/gen7/shiny-icon2.png",
		},
		ultramoon: {
			shiny: "imgs/icons/gen7/shiny-icon2.png",
		},
		letsgopikachu: {
			shiny: "imgs/icons/gen7/shiny-icon-lgpe.png",
		},
		letsgoeevee: {
			shiny: "imgs/icons/gen7/shiny-icon-lgpe.png",
		},
		sword: {
			shiny: "imgs/icons/gen8/shiny-icon.png",
		},
		shield: {
			shiny: "imgs/icons/gen8/shiny-icon.png",
		},
		brilliantdiamond: {
			shiny: "imgs/icons/gen8/shiny-icon.png",
		},
		shiningpearl: {
			shiny: "imgs/icons/gen8/shiny-icon.png",
		},
		legendsarceus: {
			shiny: "imgs/icons/gen8/shiny-icon.png",
		},
		scarlet: {
			shiny: "imgs/icons/gen9/shiny-icon.png",
		},
		violet: {
			shiny: "imgs/icons/gen9/shiny-icon.png",
		},
		legendsza: {
			shiny: "imgs/icons/gen9/shiny-icon.png",
		},
		home: {
			shiny: "imgs/icons/pokemon_home/shiny-icon.png",
			alpha: "imgs/icons/pokemon_home/alpha-icon.png",
		},
	},
	spacer: {
		id: "spacer",
		text: "",
		hidden: true,
	},
});
