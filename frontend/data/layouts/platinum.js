// Game
const game = "platinum";

// Categories
const catching = game + "-catching";
const story = game + "-story";
const battle = game + "-battle";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const thms = game + "-thms";
const distributions = game + "-distributions";
const extraCredit = game + "-extra-credit";

PPGC.register({
	layoutVariants: {
		desktop: {
			taskRows: {
				[catching]: [
					[catching + "-1"],
					[catching + "-1-01", catching + "-1-02", catching + "-1-03"],
					[catching + "-1-04", catching + "-1-05", catching + "-1-06"],
					[catching + "-1-07", catching + "-1-08", catching + "-1-09"],
					[catching + "-1-10", catching + "-1-11", catching + "-1-12"],
					[catching + "-2", catching + "-3"],
					[catching + "-4"],
					[catching + "-4-01", catching + "-4-02", catching + "-4-03"],
					[catching + "-5"],
					[catching + "-5-01", catching + "-5-02", catching + "-5-03", catching + "-5-04"],
				],
				[story]: [
					[story + "-1"],
					[story + "-2"],
					[story + "-2-01", story + "-2-02", story + "-2-03", story + "-2-04"],
					[story + "-2-05", story + "-2-06", story + "-2-07", story + "-2-08"],
				],
				[battle]: [
					[battle + "-1"],
					[battle + "-2"],
					[battle + "-2-01", battle + "-2-02", battle + "-2-03"],
					[battle + "-3"],
					[battle + "-3-01", battle + "-3-02", battle + "-3-03", battle + "-3-04", battle + "-3-05"],
					[battle + "-4"],
					[battle + "-4-01", battle + "-4-02", battle + "-4-03", battle + "-4-04", battle + "-4-05"],
				],
				[upgrades]: [
					[upgrades + "-1", upgrades + "-2"],
					[upgrades + "-3"],
					[upgrades + "-3-01", upgrades + "-3-02", upgrades + "-3-03"],
					[upgrades + "-3-04", upgrades + "-3-05"],
					[upgrades + "-4"],
					[upgrades + "-4-01", upgrades + "-4-02", upgrades + "-4-03", upgrades + "-4-04", upgrades + "-4-05"],
					[upgrades + "-4-06", upgrades + "-4-07", upgrades + "-4-08", upgrades + "-4-09", upgrades + "-4-10"],
					[upgrades + "-4-11", upgrades + "-4-12", upgrades + "-4-13", upgrades + "-4-14", upgrades + "-4-15"],
					[upgrades + "-4-16", upgrades + "-4-17", upgrades + "-4-18", upgrades + "-4-19", upgrades + "-4-20"],
					[upgrades + "-4-21", upgrades + "-4-22", upgrades + "-4-23", upgrades + "-4-24", upgrades + "-4-25"],
				],
				[collectables]: [
					[collectables + "-1"],
					[collectables + "-1-01", collectables + "-1-02", collectables + "-1-03", collectables + "-1-04", collectables + "-1-05"],
					[collectables + "-1-06", collectables + "-1-07", collectables + "-1-08", collectables + "-1-09", collectables + "-1-10"],
					[collectables + "-1-11", collectables + "-1-12", collectables + "-1-13", spacer, spacer],
					[collectables + "-2"],
					[collectables + "-2-01", collectables + "-2-02", collectables + "-2-03", collectables + "-2-04"],
					[collectables + "-2-05", collectables + "-2-06", collectables + "-2-07", collectables + "-2-08"],
					[collectables + "-2-09", collectables + "-2-10", collectables + "-2-11", spacer],
				],
				[thms]: [
					[thms + "-1"],
					[thms + "-1-01", thms + "-1-02", thms + "-1-03", thms + "-1-04"],
					[thms + "-1-05", thms + "-1-06", thms + "-1-07", thms + "-1-08"],
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
					[thms + "-2-91", thms + "-2-92"],
				],
				[extraCredit]: [
					[extraCredit + "-1", extraCredit + "-2", extraCredit + "-3", extraCredit + "-4", extraCredit + "-5"]
				],
			},
		},
		compact: {

		}
	},
});
