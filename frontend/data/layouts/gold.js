// Game
const game = "gold";

// Categories
const catching = game + "-catching";
const story = game + "-story";
const sideQuests = game + "-side-quests";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const thms = game + "-thms";
const extraCredit = game + "-extra-credit";

PPGC.register({
	layoutVariants: {
		desktop: {
			taskRows: {
				[catching]: [
					[catching + "-1"],
					[catching + "-1-01", catching + "-1-02", catching + "-1-03", catching + "-1-04"],
					[catching + "-1-05", catching + "-1-06", catching + "-1-07", catching + "-1-08", catching + "-1-09"],
					[catching + "-2", catching + "-3", catching + "-4"],
					[catching + "-5"],
					[catching + "-5-01", catching + "-5-02", catching + "-5-03", catching + "-5-04", catching + "-5-05"],
					[catching + "-6"],
					[catching + "-6-01", catching + "-6-02", catching + "-6-03"],
					[catching + "-6-04", catching + "-6-05", catching + "-6-06"],
				],
				[story]: [
					[story + "-1"],
					[story + "-2"],
					[story + "-2-01", story + "-2-02", story + "-2-03", story + "-2-04"],
					[story + "-3"],
					[story + "-3-01", story + "-3-02", story + "-3-03", story + "-3-04"],
					[story + "-3-05", story + "-3-06", story + "-3-07", story + "-3-08"],
				],
				[sideQuests]: [
					[sideQuests + "-1", sideQuests + "-2", sideQuests + "-3"],
					[sideQuests + "-4", sideQuests + "-5", spacer],
					[sideQuests + "-6"],
					[sideQuests + "-6-01", sideQuests + "-6-02", sideQuests + "-6-03", sideQuests + "-6-04", sideQuests + "-6-05", sideQuests + "-6-06", sideQuests + "-6-07"],
				],
				[upgrades]: [
					[upgrades + "-1"],
					[upgrades + "-1-01", upgrades + "-1-02"],
				],
				[collectables]: [
					[collectables + "-1"],
					[collectables + "-1-01", collectables + "-1-02", collectables + "-1-03", collectables + "-1-04"],
					[collectables + "-1-05", collectables + "-1-06", collectables + "-1-07", collectables + "-1-08"],
					[collectables + "-2"],
				],
				[thms]: [
					[thms + "-1"],
					[thms + "-1-01", thms + "-1-02", thms + "-1-03", thms + "-1-04", thms + "-1-05"],
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
				],
				[extraCredit]: [
					[extraCredit + "-1", extraCredit + "-2"]
				],
			},
		},
		compact: {

		}
	},
});
