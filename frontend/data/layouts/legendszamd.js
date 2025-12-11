// Game
const game = "legendsza";
const sub = game + "md";

// Categories
const catching = sub + "-catching";
const story = sub + "-story";
const sideQuests = sub + "-side-quests";
const mabelsResearch = sub + "-mabels-research";
const megaStones = sub + "-mega-stones";
const fashion = sub + "-fashion";
const thms = sub + "-thms";

// Data
PPGC.register({
	layoutVariants: {
		desktop: {
			taskRows: {
				// [catching]: [
				// 	[catching + "-1"],
				// 	[catching + "-1-01"],
				// 	[catching + "-2"],
				// ],
				[story]: [
					[story + "-1"],
				],
				[sideQuests]: [
					[sideQuests + "-1"],
					[sideQuests + "-1-01", sideQuests + "-1-02",],
					[sideQuests + "-2"],
					[sideQuests + "-2-01", sideQuests + "-2-02", sideQuests + "-2-03"],
					[sideQuests + "-2-04", sideQuests + "-2-05", sideQuests + "-2-06"],
					[sideQuests + "-2-07", sideQuests + "-2-08", sideQuests + "-2-09"],
					[sideQuests + "-2-10", sideQuests + "-2-11", sideQuests + "-2-12"],
					[sideQuests + "-2-13", sideQuests + "-2-14", sideQuests + "-2-15"],
					[sideQuests + "-2-16", sideQuests + "-2-17", sideQuests + "-2-18"],
					[sideQuests + "-2-19", sideQuests + "-2-20", sideQuests + "-2-21"],
					[sideQuests + "-2-22", sideQuests + "-2-23", sideQuests + "-2-24"],
					[sideQuests + "-2-25", sideQuests + "-2-26", sideQuests + "-2-27"],
					[sideQuests + "-2-28", sideQuests + "-2-29", sideQuests + "-2-30"],
					[sideQuests + "-2-31", sideQuests + "-2-32", sideQuests + "-2-33"],
					[sideQuests + "-2-34", sideQuests + "-2-35", sideQuests + "-2-36"],
					[sideQuests + "-2-37", sideQuests + "-2-38", sideQuests + "-2-39"],
					[sideQuests + "-2-40", sideQuests + "-2-41", sideQuests + "-2-42"],
					[sideQuests + "-2-43", sideQuests + "-2-44", sideQuests + "-2-45"],
					[sideQuests + "-2-46", sideQuests + "-2-47", sideQuests + "-2-48"],
					[sideQuests + "-2-49", sideQuests + "-2-50", sideQuests + "-2-51"],
					[sideQuests + "-2-52", sideQuests + "-2-53", sideQuests + "-2-54"],
					[sideQuests + "-2-55", sideQuests + "-2-56", sideQuests + "-2-57"],
					[sideQuests + "-2-58", sideQuests + "-2-59", sideQuests + "-2-60"],
					[sideQuests + "-2-61"],
				],
				[mabelsResearch]: [
					[mabelsResearch + "-01", mabelsResearch + "-02", mabelsResearch + "-03"],
				],
				[megaStones]: [
					[megaStones + "-1"],
					[megaStones + "-1-01", megaStones + "-1-02", megaStones + "-1-03"],
					[megaStones + "-2"],
					[megaStones + "-2-01", megaStones + "-2-02", megaStones + "-2-03", megaStones + "-2-04", megaStones + "-2-05"],
					[megaStones + "-2-06", megaStones + "-2-07", megaStones + "-2-08", megaStones + "-2-09", megaStones + "-2-10"],
					[megaStones + "-2-11", megaStones + "-2-12", megaStones + "-2-13", megaStones + "-2-14", megaStones + "-2-15"],
					[megaStones + "-2-16", megaStones + "-2-17", megaStones + "-2-18"],
				],
				[thms]: [
					[thms + "-01", thms + "-02", thms + "-03", thms + "-04", thms + "-05"],
					[thms + "-06", thms + "-07", thms + "-08", thms + "-09", thms + "-10"],
					[thms + "-11", thms + "-12", thms + "-13", thms + "-14", thms + "-15"],
					[thms + "-16", thms + "-17", thms + "-18", thms + "-19", thms + "-20"],
					[thms + "-21", thms + "-22", thms + "-23", thms + "-24", thms + "-25"],
					[thms + "-26", thms + "-27", thms + "-28", thms + "-29", thms + "-30"],
					[thms + "-31", thms + "-32", thms + "-33", thms + "-34", thms + "-35"],
					[thms + "-36", thms + "-37", thms + "-38", thms + "-39", thms + "-40"],
					[thms + "-41", thms + "-42", thms + "-43", thms + "-44", thms + "-45"],
					[thms + "-46", thms + "-47", thms + "-48", thms + "-49", thms + "-50"],
					[thms + "-51", thms + "-52", thms + "-53"],
				],
			},
		},
		compact: {

		}
	},
});
