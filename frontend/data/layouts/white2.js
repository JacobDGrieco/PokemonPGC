// Game
const game = "white2";

// Categories
const catching = game + "-catching";
const story = game + "-story";
const funfest = game + "-funfest";
const activities = game + "-activities";
const battle = game + "-battle";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const medals = game + "-medals";
const thms = game + "-thms";
const distributions = game + "-distributions";
const extraCredit = game + "-extra-credit";

PPGC.register({
	layoutVariants: {
		desktop: {
			taskRows: {
				[catching]: [
					[catching + "-1"],
					[catching + "-1-01"],
				],
				[medals]: [
					[medals + "-1"],
					[medals + "-1-01", medals + "-1-02", medals + "-1-03", medals + "-1-04"],
					[medals + "-1-05", medals + "-1-06", medals + "-1-07"],
					[medals + "-2"],
					[medals + "-2-01", medals + "-2-02", medals + "-2-03", medals + "-2-04", medals + "-2-05", medals + "-2-06"],
					[medals + "-2-07", medals + "-2-08", medals + "-2-09", medals + "-2-10", medals + "-2-11", medals + "-2-12"],
					[medals + "-2-13", medals + "-2-14", medals + "-2-15", medals + "-2-16", medals + "-2-17", medals + "-2-18"],
					[medals + "-2-19", medals + "-2-20", medals + "-2-21", medals + "-2-22", medals + "-2-23", medals + "-2-24"],
					[medals + "-2-25", medals + "-2-26", medals + "-2-27", medals + "-2-28", medals + "-2-29", medals + "-2-30"],
					[medals + "-2-31", medals + "-2-32", medals + "-2-33", medals + "-2-34", medals + "-2-35", medals + "-2-36"],
					[medals + "-2-37", medals + "-2-38", medals + "-2-39", medals + "-2-40", medals + "-2-41", medals + "-2-42"],
					[medals + "-2-43", medals + "-2-44", medals + "-2-45", medals + "-2-46", medals + "-2-47", medals + "-2-48"],
					[medals + "-2-49", medals + "-2-50", medals + "-2-51", medals + "-2-52", medals + "-2-53", medals + "-2-54"],
					[medals + "-2-55", medals + "-2-56", medals + "-2-57", medals + "-2-58", medals + "-2-59", medals + "-2-60"],
					[medals + "-2-61", medals + "-2-62", medals + "-2-63", medals + "-2-64", medals + "-2-65", medals + "-2-66"],
					[medals + "-2-67", medals + "-2-68", medals + "-2-69", medals + "-2-70", medals + "-2-71", medals + "-2-72"],
					[medals + "-2-73", medals + "-2-74", medals + "-2-75", medals + "-2-76", medals + "-2-77", medals + "-2-78"],
					[medals + "-2-79", medals + "-2-80", medals + "-2-81", medals + "-2-82", medals + "-2-83", medals + "-2-84"],
					[medals + "-2-85", medals + "-2-86", medals + "-2-87", medals + "-2-88", medals + "-2-89", medals + "-2-90"],
					[medals + "-2-91", medals + "-2-92", medals + "-2-93", medals + "-2-94", medals + "-2-95", medals + "-2-96"],
					[medals + "-2-97", medals + "-2-98"],
					[medals + "-3"],
					[medals + "-3-01", medals + "-3-02", medals + "-3-03", medals + "-3-04", medals + "-3-05", medals + "-3-06"],
					[medals + "-3-07", medals + "-3-08", medals + "-3-09", medals + "-3-10", medals + "-3-11", medals + "-3-12"],
					[medals + "-3-13", medals + "-3-14", medals + "-3-15", medals + "-3-16", medals + "-3-17", medals + "-3-18"],
					[medals + "-3-19", medals + "-3-20", medals + "-3-21", medals + "-3-22", medals + "-3-23", medals + "-3-24"],
					[medals + "-3-25", medals + "-3-26", medals + "-3-27", medals + "-3-28", medals + "-3-29", medals + "-3-30"],
					[medals + "-3-31", medals + "-3-32", medals + "-3-33", medals + "-3-34", medals + "-3-35", medals + "-3-36"],
					[medals + "-3-37", medals + "-3-38", medals + "-3-39", medals + "-3-40", medals + "-3-41", medals + "-3-42"],
					[medals + "-3-43", medals + "-3-44", medals + "-3-45", medals + "-3-46", medals + "-3-47", medals + "-3-48"],
					[medals + "-3-49", medals + "-3-50", medals + "-3-51", medals + "-3-52", medals + "-3-53", medals + "-3-54"],
					[medals + "-3-55", medals + "-3-56"],
					[medals + "-4"],
					[medals + "-4-01", medals + "-4-02", medals + "-4-03", medals + "-4-04", medals + "-4-05", medals + "-4-06"],
					[medals + "-4-07", medals + "-4-08", medals + "-4-09", medals + "-4-10", medals + "-4-11", medals + "-4-12"],
					[medals + "-4-13", medals + "-4-14", medals + "-4-15", medals + "-4-16", medals + "-4-17", medals + "-4-18"],
					[medals + "-4-19", medals + "-4-20", medals + "-4-21", medals + "-4-22", medals + "-4-23", medals + "-4-24"],
					[medals + "-4-25", medals + "-4-26", medals + "-4-27", medals + "-4-28", medals + "-4-29", medals + "-4-30"],
					[medals + "-4-31", medals + "-4-32", medals + "-4-33", medals + "-4-34", medals + "-4-35", medals + "-4-36"],
					[medals + "-4-37", medals + "-4-38", medals + "-4-39", medals + "-4-40", medals + "-4-41", medals + "-4-42"],
					[medals + "-4-43", medals + "-4-44", medals + "-4-45", medals + "-4-46", medals + "-4-47", medals + "-4-48"],
					[medals + "-4-49", medals + "-4-50", medals + "-4-51", medals + "-4-52", medals + "-4-53", medals + "-4-54"],
					[medals + "-4-55", medals + "-4-56", medals + "-4-57", medals + "-4-58", medals + "-4-59", medals + "-4-60"],
					[medals + "-4-61", medals + "-4-62", medals + "-4-63", medals + "-4-64", medals + "-4-65", medals + "-4-66"],
					[medals + "-4-67", medals + "-4-68", medals + "-4-69", medals + "-4-70", medals + "-4-71", medals + "-4-72"],
					[medals + "-4-73", medals + "-4-74", medals + "-4-75"],
					[medals + "-5"],
					[medals + "-5-01", medals + "-5-02", medals + "-5-03", medals + "-5-04", medals + "-5-05"],
					[medals + "-5-06", medals + "-5-07", medals + "-5-08", medals + "-5-09", medals + "-5-10"],
					[medals + "-5-11", medals + "-5-12", medals + "-5-13", medals + "-5-14", medals + "-5-15"],
					[medals + "-5-16", medals + "-5-17", medals + "-5-18", medals + "-5-19"],
				],
				[thms]: [
					[thms + "-1"],
					[thms + "-1-01", thms + "-1-02", thms + "-1-03"],
					[thms + "-1-04", thms + "-1-05", thms + "-1-06"],
					[thms + "-2"],
					[thms + "-2-01", thms + "-2-02", thms + "-2-03", thms + "-2-04", thms + "-2-05"],
					[thms + "-2-06", thms + "-2-07", thms + "-2-08", thms + "-2-09", thms + "-2-10"],
					[thms + "-2-11", thms + "-2-12", thms + "-2-13", thms + "-2-14", thms + "-2-15"],
					[thms + "-2-16", thms + "-2-17", thms + "-2-18", thms + "-2-19", thms + "-2-20"],
					[thms + "-2-21", thms + "-2-22", thms + "-2-23", thms + "-2-24", thms + "-2-25"],
					[thms + "-2-26", thms + "-2-27", thms + "-2-28", thms + "-2-29", thms + "-2-30"],
					[thms + "-2-31", thms + "-2-32", thms + "-2-33", thms + "-2-34", thms + "-2-35"],
					[thms + "-2-36", thms + "-2-37", thms + "-2-38", thms + "-2-39", thms + "-2-40"],
					[thms + "-2-41", thms + "-2-42", thms + "-2-43", thms + "-2-44", thms + "-2-45"],
					[thms + "-2-46", thms + "-2-47", thms + "-2-48", thms + "-2-49", thms + "-2-50"],
					[thms + "-2-51", thms + "-2-52", thms + "-2-53", thms + "-2-54", thms + "-2-55"],
					[thms + "-2-56", thms + "-2-57", thms + "-2-58", thms + "-2-59", thms + "-2-60"],
					[thms + "-2-61", thms + "-2-62", thms + "-2-63", thms + "-2-64", thms + "-2-65"],
					[thms + "-2-66", thms + "-2-67", thms + "-2-68", thms + "-2-69", thms + "-2-70"],
					[thms + "-2-71", thms + "-2-72", thms + "-2-73", thms + "-2-74", thms + "-2-75"],
					[thms + "-2-76", thms + "-2-77", thms + "-2-78", thms + "-2-79", thms + "-2-80"],
					[thms + "-2-81", thms + "-2-82", thms + "-2-83", thms + "-2-84", thms + "-2-85"],
					[thms + "-2-86", thms + "-2-87", thms + "-2-88", thms + "-2-89", thms + "-2-90"],
					[thms + "-2-91", thms + "-2-92", thms + "-2-93", thms + "-2-94", thms + "-2-95"],
				],
			},
		},
		compact: {

		}
	},
});
