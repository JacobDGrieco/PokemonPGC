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
				[sideQuests]: [
					[sideQuests + "-01", sideQuests + "-02",],
				],
				[megaStones]: [
					[megaStones + "-01", megaStones + "-02", megaStones + "-03"],
				],
			},
		},
		compact: {

		}
	},
});
