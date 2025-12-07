// Game
const game = "sapphire";

// Categories
const catching = game + "-catching";
const story = game + "-story";
const activities = game + "-activities";
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
					[catching + "-1-07", catching + "-1-08"],
					[catching + "-2"],
					[catching + "-2-01", catching + "-2-02", catching + "-2-03", catching + "-2-04"],
					[catching + "-3"],
					[catching + "-3-01", catching + "-3-02", catching + "-3-03"],
				],
				[story]: [
					[story + "-1"],
				],
				[activities]: [
					[activities + "-1"],
					[activities + "-1-01", activities + "-1-02", activities + "-1-03"],
					[activities + "-1-04", activities + "-1-05"],
					[activities + "-2"],
				],
				[battle]: [
					[battle + "-1"],
					[battle + "-2"],
				],
				[upgrades]: [
					[upgrades + "-1"],
					[upgrades + "-2"],
					[upgrades + "-2-01", upgrades + "-2-02", upgrades + "-2-03", upgrades + "-2-04"],
				],
				[collectables]: [
					[collectables + "-1"],
					[collectables + "-1-01", collectables + "-1-02", collectables + "-1-03"],
					[collectables + "-1-04", collectables + "-1-05", collectables + "-1-06"],
					[collectables + "-1-07", collectables + "-1-08", collectables + "-1-09"],
					[collectables + "-2"],
					[collectables + "-2-01", collectables + "-2-02"],
					[collectables + "-3"],
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
