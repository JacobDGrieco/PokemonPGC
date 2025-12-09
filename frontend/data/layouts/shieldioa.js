// Game
const game = "shield";
const sub = game + "ioa";

// Categories
const catching = sub + "-catching";
const story = sub + "-story";
const sideQuests = sub + "-side-quests";
const battle = sub + "-battle";
const upgrades = sub + "-upgrades";
const collectables = sub + "-collectables";
const trainerCards = sub + "-trainer-cards";
const fashion = sub + "-fashion";

PPGC.register({
	layoutVariants: {
		desktop: {
			taskRows: {
				[catching]: [
					[catching + "-1"],
					[catching + "-1-01", catching + "-1-02"],
				],
				[trainerCards]: [
					[trainerCards + "-1"],
					[trainerCards + "-1-01", trainerCards + "-1-02", trainerCards + "-1-03", trainerCards + "-1-04", trainerCards + "-1-05"],
					[trainerCards + "-1-06", trainerCards + "-1-07", trainerCards + "-1-08", trainerCards + "-1-09", trainerCards + "-1-10"],
					[trainerCards + "-1-11", trainerCards + "-1-12", trainerCards + "-1-13", trainerCards + "-1-14", trainerCards + "-1-15"],
					[trainerCards + "-1-16", trainerCards + "-1-17", trainerCards + "-1-18", trainerCards + "-1-19", trainerCards + "-1-20"],
					[trainerCards + "-1-21"],
					[trainerCards + "-2"],
					[trainerCards + "-2-01", trainerCards + "-2-02", trainerCards + "-2-03"],
					[trainerCards + "-3"],
					[trainerCards + "-3-01", trainerCards + "-3-02", trainerCards + "-3-03", trainerCards + "-3-04"],
				],
			},
		},
		compact: {

		}
	},
});
