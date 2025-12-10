// Game
const game = "legendsza";
const sub = game + "md";

// Categories
const catching = sub + "-catching";
const story = sub + "-story";
const sideQuests = sub + "-side-quests";
const megaStones = sub + "-mega-stones";
const fashion = sub + "-fashion";

// Data
PPGC.register({
	layoutVariants: {
		desktop: {
			taskRows: {
				[catching]: [
					[catching + "-1"],
					[catching + "-1-01"],
				],
				[story]: [
					[story + "-01"],
				],
				[sideQuests]: [
					[sideQuests + "-01", sideQuests + "-02"],
					[sideQuests + "-03"],
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
				]
			},
		},
		compact: {

		}
	},
});
