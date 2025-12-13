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

defineSyncs(game2, ({ taskSync, regionalSync, regionalSyncCross, fashionSync }) => [
	{ id: "Complete the Porygon for Porygon trade", members: [taskSync("legendszamd-catching-3-01"), taskSync("legendszamd-side-quests-2-48"), taskSync("legendszamd-thms-40"),], },
	{ id: "Obtain Diancie", members: [taskSync("legendszamd-side-quests-1-01"), taskSync("legendszamd-mega-stones-1-01"), regionalSyncCross(game1, 231),], },
	{ id: "Obtain Mewtwo", members: [taskSync("legendszamd-side-quests-1-02"), taskSync("legendszamd-mega-stones-1-02"), taskSync("legendszamd-mega-stones-1-03"), regionalSyncCross(game1, 232),], },
	{ id: "Obtain the Raichunite X & Y", members: [taskSync("legendszamd-side-quests-2-20"), taskSync("legendszamd-mega-stones-2-01"), taskSync("legendszamd-mega-stones-2-02"),], },
	{ id: "Obtain the Crabominite", members: [taskSync("legendszamd-side-quests-2-22"), taskSync("legendszamd-mega-stones-2-12"),], },

	{ id: "Defeat the DYNA4MO Duo", members: [taskSync("legendszamd-side-quests-2-32"), fashionSync("canaris-tracksuit-1"), fashionSync("canaris-satchel-1"),], },
	{ id: "Defeat the Fist of Justice Duo", members: [taskSync("legendszamd-side-quests-2-33"), fashionSync("ivors-gi-1"), fashionSync("ivors-training-gloves-1"), fashionSync("ivors-geta-sandals-1"), fashionSync("ivors-clasped-satchel-1"),], },
	{ id: "Defeat the Rust Syndicate Duo", members: [taskSync("legendszamd-side-quests-2-34"), fashionSync("corbeaus-suit-and-tie-1"), fashionSync("corbeaus-glasses-1"), fashionSync("corbeaus-leather-satchel-1"),], },
	{ id: "Defeat the SBC Duo", members: [taskSync("legendszamd-side-quests-2-35"), fashionSync("jacinthes-dress-1"), fashionSync("jacinthes-pillbox-1"), fashionSync("jacinthes-beribboned-gloves-1"), fashionSync("jacinthes-mesh-tights-1"), fashionSync("jacinthes-bejeweled-pumps-1"), fashionSync("jacinthes-bejeweled-satchel-1"),], },
	{ id: "Defeat the Team Flare Nouveau Duo", members: [taskSync("legendszamd-side-quests-2-36"), fashionSync("grishams-chef-top-1"), fashionSync("grishams-aproned-pants-1"), fashionSync("grishams-glasses-1"), fashionSync("grishams-leather-shoes-1"), fashionSync("grishams-round-satchel-1"),], },

	{ id: "Defeat the DYNA4MO Duo...Again", members: [taskSync("legendszamd-side-quests-2-62"), fashionSync("canaris-tracksuit-2"), fashionSync("canaris-satchel-2"),], },
	{ id: "Defeat the Fist of Justice Duo...Again", members: [taskSync("legendszamd-side-quests-2-63"), fashionSync("ivors-gi-2"), fashionSync("ivors-training-gloves-2"), fashionSync("ivors-geta-sandals-2"), fashionSync("ivors-clasped-satchel-2"),], },
	{ id: "Defeat the Rust Syndicate Duo...Again", members: [taskSync("legendszamd-side-quests-2-64"), fashionSync("corbeaus-suit-and-tie-2"), fashionSync("corbeaus-glasses-2"), fashionSync("corbeaus-leather-satchel-2"),], },
	{ id: "Defeat the SBC Duo...Again", members: [taskSync("legendszamd-side-quests-2-65"), fashionSync("jacinthes-dress-2"), fashionSync("jacinthes-pillbox-2"), fashionSync("jacinthes-beribboned-gloves-2"), fashionSync("jacinthes-mesh-tights-2"), fashionSync("jacinthes-bejeweled-pumps-2"), fashionSync("jacinthes-bejeweled-satchel-2"),], },
	{ id: "Defeat the Team Flare Nouveau Duo...Again", members: [taskSync("legendszamd-side-quests-2-66"), fashionSync("grishams-chef-top-2"), fashionSync("grishams-aproned-pants-2"), fashionSync("grishams-glasses-2"), fashionSync("grishams-leather-shoes-2"), fashionSync("grishams-round-satchel-2"),], },

	{ name: "Obtain TM 109", members: [taskSync("legendszamd-side-quests-2-19"), taskSync("legendszamd-thms-02"),], },
	{ name: "Obtain TM 114", members: [taskSync("legendszamd-side-quests-2-06"), taskSync("legendszamd-thms-07"),], },
	{ name: "Obtain TM 116", members: [taskSync("legendszamd-side-quests-2-24"), taskSync("legendszamd-thms-09"),], },
	{ name: "Obtain TM 118", members: [taskSync("legendszamd-side-quests-2-52"), taskSync("legendszamd-thms-11"),], },
	{ name: "Obtain TM 119", members: [taskSync("legendszamd-side-quests-2-29"), taskSync("legendszamd-thms-12"),], },
	{ name: "Obtain TM 121", members: [taskSync("legendszamd-side-quests-2-26"), taskSync("legendszamd-thms-14"),], },
	{ name: "Obtain TM 122", members: [taskSync("legendszamd-side-quests-2-14"), taskSync("legendszamd-thms-15"),], },
	{ name: "Obtain TM 123", members: [taskSync("legendszamd-side-quests-2-37"), taskSync("legendszamd-thms-16"),], },
	{ name: "Obtain TM 125", members: [taskSync("legendszamd-side-quests-2-47"), taskSync("legendszamd-thms-18"),], },
	{ name: "Obtain TM 127", members: [taskSync("legendszamd-side-quests-2-49"), taskSync("legendszamd-thms-20"),], },
	{ name: "Obtain TM 130", members: [taskSync("legendszamd-side-quests-2-54"), taskSync("legendszamd-thms-23"),], },
	{ name: "Obtain TM 136", members: [taskSync("legendszamd-side-quests-2-27"), taskSync("legendszamd-thms-29"),], },
	{ name: "Obtain TM 139", members: [taskSync("legendszamd-side-quests-2-15"), taskSync("legendszamd-thms-32"),], },
	{ name: "Obtain TM 141", members: [taskSync("legendszamd-side-quests-2-56"), taskSync("legendszamd-thms-34"),], },
	{ name: "Obtain TM 144", members: [taskSync("legendszamd-side-quests-2-05"), taskSync("legendszamd-thms-37"),], },
	{ name: "Obtain TM 146", members: [taskSync("legendszamd-side-quests-2-04"), taskSync("legendszamd-thms-39"),], },
]);