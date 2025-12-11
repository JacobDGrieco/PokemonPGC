window.DATA = window.DATA || {};
window.DATA.syncs = window.DATA.syncs || {};

const game1 = "legendsza";
const game2 = "legendszamd";

// const taskSync = (id) => _taskRef(id);
// const regionalSync = (game, ...args) => _dexRef(game, "regional", ...args);
// const fashionSync = (game, id) => _fashionRef(game, id);

defineSyncs(game1, ({ taskSync, regionalSync }) => [
	{ name: "Obtain Eternal Flower Floette", members: [taskSync("legendsza-catching-2-09"), taskSync("legendsza-story-2-01"), taskSync("legendsza-mega-stones-10"), regionalSync(39, "Eternal Flower"),], },
	{ name: "Obtain Xerneas", members: [taskSync("legendsza-catching-1-01"), taskSync("legendsza-story-2-02"), regionalSync(228),], },
	{ name: "Obtain Yveltal", members: [taskSync("legendsza-catching-1-02"), taskSync("legendsza-story-2-03"), regionalSync(229),], },
	{ name: "Obtain Zygarde", members: [taskSync("legendsza-catching-1-03"), taskSync("legendsza-story-2-04"), regionalSync(230),], },
	{ name: "Obtain Chespin in-game gift", members: [taskSync("legendsza-catching-2-02"), taskSync("legendsza-side-quests-07"),], },
	{ name: "Obtain Fennekin in-game gift", members: [taskSync("legendsza-catching-2-03"), taskSync("legendsza-side-quests-08"),], },
	{ name: "Obtain Fraokie in-game gift", members: [taskSync("legendsza-catching-2-04"), taskSync("legendsza-side-quests-09"),], },
	{ name: "Obtain Spewpa in-game gift", members: [taskSync("legendsza-catching-2-05"), taskSync("legendsza-side-quests-21"),], },
	{ name: "Obtain the Kanto Starter in-game gift", members: [taskSync("legendsza-catching-2-06"), taskSync("legendsza-side-quests-22"),], },
	{ name: "Obtain the Galarian Stunfisk in-game gift", members: [taskSync("legendsza-catching-2-07"), taskSync("legendsza-side-quests-72"), regionalSync(57, "Galarian"),], },
	{ name: "Complete the Pikachu for Heracross in-game trade", members: [taskSync("legendsza-catching-3-01"), taskSync("legendsza-side-quests-02"),], },
	{ name: "Complete the Abra for Riolu in-game trade", members: [taskSync("legendsza-catching-3-02"), taskSync("legendsza-side-quests-24"),], },
	{ name: "Complete the K Slowpoke for G Slowpoke in-game trade", members: [taskSync("legendsza-catching-3-03"), taskSync("legendsza-side-quests-39"), regionalSync(137, "Galarian"),], },
	{ name: "Complete the K Slowpoke for G Slowpoke in-game trade", members: [taskSync("legendsza-catching-3-03"), taskSync("legendsza-side-quests-39"), regionalSync(137, "Galarian"),], },
	{ name: "Complete the K Raichu for A Raichu in-game trade", members: [taskSync("legendsza-catching-3-04"), taskSync("legendsza-side-quests-108"), regionalSync(54, "Alolan"),], },
	{ name: "Obtain TM 31", members: [taskSync("legendsza-side-quests-34"), taskSync("legendsza-thms-31"),], },
	{ name: "Obtain TM 43", members: [taskSync("legendsza-side-quests-46"), taskSync("legendsza-thms-43"),], },
	{ name: "Obtain TM 48", members: [taskSync("legendsza-side-quests-96"), taskSync("legendsza-thms-48"),], },
	{ name: "Obtain TM 57", members: [taskSync("legendsza-side-quests-26"), taskSync("legendsza-thms-57"),], },
	{ name: "Obtain TM 70", members: [taskSync("legendsza-side-quests-60"), taskSync("legendsza-thms-70"),], },
	{ name: "Obtain TM 85", members: [taskSync("legendsza-side-quests-29"), taskSync("legendsza-thms-85"),], },
	{ name: "Obtain TM 88", members: [taskSync("legendsza-side-quests-41"), taskSync("legendsza-thms-88"),], },
	{ name: "Obtain TM 99", members: [taskSync("legendsza-side-quests-79"), taskSync("legendsza-thms-99"),], },
]);

defineSyncs(game2, ({ taskSync, regionalSyncCross, fashionSync }) => [
	{ id: "diancie", members: [taskSync("legendszamd-side-quests-1-01"), taskSync("legendszamd-mega-stones-1-01"), regionalSyncCross(game1, 231),], },
	{ id: "mewtwo", members: [taskSync("legendszamd-side-quests-1-02"), taskSync("legendszamd-mega-stones-1-02"), taskSync("legendszamd-mega-stones-1-03"), regionalSyncCross(game1, 232),], },
	{ id: "canari", members: [taskSync("legendszamd-side-quests-2-32"), fashionSync("canaris-tracksuit"), fashionSync("canaris-satchel")], },
]);
