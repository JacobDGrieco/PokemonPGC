// Game
const game = "ultrasun";

// Categories
const catching = game + "-catching";
const story = game + "-story";
const sideQuests = game + "-side-quests";
const activities = game + "-activities";
const battle = game + "-battle";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const megaStones = game + "-mega-stones";
const zCrystals = game + "-zcrystals";
const fashion = game + "-fashion";
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
				],
				[megaStones]: [
					[megaStones + "-01", megaStones + "-02", megaStones + "-03", megaStones + "-04", megaStones + "-05"],
					[megaStones + "-06", megaStones + "-07", megaStones + "-08", megaStones + "-09", megaStones + "-10"],
					[megaStones + "-11", megaStones + "-12", megaStones + "-13", megaStones + "-14", megaStones + "-15"],
					[megaStones + "-16", megaStones + "-17", megaStones + "-18", megaStones + "-19", megaStones + "-20"],
					[megaStones + "-21", megaStones + "-22", megaStones + "-23", megaStones + "-24", megaStones + "-25"],
					[megaStones + "-26", megaStones + "-27", megaStones + "-28", megaStones + "-29", megaStones + "-30"],
					[megaStones + "-31", megaStones + "-32", megaStones + "-33", megaStones + "-34", megaStones + "-35"],
					[megaStones + "-36", megaStones + "-37", megaStones + "-38", megaStones + "-39", megaStones + "-40"],
					[megaStones + "-41", megaStones + "-42", megaStones + "-43", megaStones + "-44", megaStones + "-45"],
					[megaStones + "-46"],
				],
				[zCrystals]: [
					[zCrystals + "-1"],
					[zCrystals + "-1-01", zCrystals + "-1-02", zCrystals + "-1-03", zCrystals + "-1-04", zCrystals + "-1-05", zCrystals + "-1-06"],
					[zCrystals + "-1-07", zCrystals + "-1-08", zCrystals + "-1-09", zCrystals + "-1-10", zCrystals + "-1-11", zCrystals + "-1-12"],
					[zCrystals + "-1-13", zCrystals + "-1-14", zCrystals + "-1-15", zCrystals + "-1-16", zCrystals + "-1-17", zCrystals + "-1-18"],
					[zCrystals + "-2"],
					[zCrystals + "-2-2"],
					[zCrystals + "-2-01", zCrystals + "-2-02", zCrystals + "-2-03", zCrystals + "-2-04", zCrystals + "-2-05"],
					[zCrystals + "-2-06", zCrystals + "-2-07", zCrystals + "-2-08", zCrystals + "-2-09", zCrystals + "-2-10"],
					[zCrystals + "-2-11", zCrystals + "-2-12", zCrystals + "-2-13"],
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
					[thms + "-2-91", thms + "-2-92", thms + "-2-93", thms + "-2-94", thms + "-2-95"],
					[thms + "-2-96", thms + "-2-97", thms + "-2-98", thms + "-2-99", thms + "-2-100"],
				],
				[extraCredit]: [
					[extraCredit + "-1"],
					[extraCredit + "-1-01", extraCredit + "-1-02", extraCredit + "-1-03", extraCredit + "-1-04"],
				],
			},
		},
		compact: {

		}
	},
});
