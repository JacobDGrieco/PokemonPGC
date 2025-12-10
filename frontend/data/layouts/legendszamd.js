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
				[catching]: [
					[catching + "-1"],
					[catching + "-1-01"],
					[catching + "-2"],
				],
				[story]: [
					[story + "-1"],
				],
				[sideQuests]: [
					[sideQuests + "-1"],
					[sideQuests + "-1-01", sideQuests + "-1-02",],
					[sideQuests + "-2"],
					[sideQuests + "-2-01", sideQuests + "-2-02", sideQuests + "-2-03"],
				],
				[mabelsResearch]: [
					[mabelsResearch + "-01", mabelsResearch + "-02", mabelsResearch + "-03"],
					[mabelsResearch + "-04", mabelsResearch + "-05", mabelsResearch + "-06"],
					[mabelsResearch + "-07", mabelsResearch + "-08", mabelsResearch + "-09"],
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
