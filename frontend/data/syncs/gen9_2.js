window.DATA = window.DATA || {};
window.DATA.syncs = window.DATA.syncs || {};

const game1 = "legendsza";
const game2 = "legendszamd";

defineSyncs(game1, ({ taskSync, regionalSync }) => [
	{
		name: "Obtain Eternal Flower Floette", members: [
			taskSync("legendsza-catching-2-09"),
			taskSync("legendsza-story-2-01"),
			taskSync("legendsza-mega-stones-10"),
			regionalSync(39, "Eternal Flower", { oneWay: true }),
		],
	},
	{ name: "Obtain Xerneas", members: [taskSync("legendsza-catching-1-01"), taskSync("legendsza-story-2-02"), regionalSync(228, { oneWay: true }),], },
	{ name: "Obtain Yveltal", members: [taskSync("legendsza-catching-1-02"), taskSync("legendsza-story-2-03"), regionalSync(229, { oneWay: true }),], },
	{
		name: "Obtain Zygarde", members: [
			taskSync("legendsza-catching-1-03"),
			taskSync("legendsza-story-2-04"),
			taskSync("legendsza-mega-stones-62"),
			regionalSync(230, { oneWay: true }),
		],
	},
	{ name: "Obtain Chespin in-game gift", members: [taskSync("legendsza-catching-2-02"), taskSync("legendsza-side-quests-07"), regionalSync(213, { oneWay: true }),], },
	{ name: "Obtain Fennekin in-game gift", members: [taskSync("legendsza-catching-2-03"), taskSync("legendsza-side-quests-08"), regionalSync(217, { oneWay: true }),], },
	{ name: "Obtain Fraokie in-game gift", members: [taskSync("legendsza-catching-2-04"), taskSync("legendsza-side-quests-09"), regionalSync(209, { oneWay: true }),], },
	{ name: "Obtain Spewpa in-game gift", members: [taskSync("legendsza-catching-2-05"), taskSync("legendsza-side-quests-21"), regionalSync(16, { oneWay: true }),], },
	{ name: "Obtain Lucario in-game gift", members: [taskSync("legendsza-catching-2-08"), regionalSync(136, { oneWay: true }),], },
	{ name: "Obtain the Kanto Starter in-game gift", members: [taskSync("legendsza-catching-2-06"), taskSync("legendsza-side-quests-22"),], },
	{ name: "Obtain the Galarian Stunfisk in-game gift", members: [taskSync("legendsza-catching-2-07"), taskSync("legendsza-side-quests-72"), regionalSync(57, "Galarian", { oneWay: true }),], },

	{
		name: "Complete the Pichu for Heracross in-game trade",
		members: [
			taskSync("legendsza-catching-3-01"),
			taskSync("legendsza-side-quests-02"),
			regionalSync(52, { oneWay: true }),
			regionalSync(179, "Male", { oneWay: true }),
		],
	},

	{
		name: "Complete the Abra for Riolu in-game trade",
		members: [
			taskSync("legendsza-catching-3-02"),
			taskSync("legendsza-side-quests-24"),
			regionalSync(62, { oneWay: true }),
			regionalSync(135, { oneWay: true }),
		],
	},

	{
		name: "Complete the K Slowpoke for G Slowpoke in-game trade",
		members: [
			taskSync("legendsza-catching-3-03"),
			taskSync("legendsza-side-quests-39"),
			regionalSync(137, "Kantonian", { oneWay: true }),
			regionalSync(137, "Galarian", { oneWay: true }),
		],
	},
	{
		name: "Complete the K Raichu for A Raichu in-game trade",
		members: [
			taskSync("legendsza-catching-3-04"),
			taskSync("legendsza-side-quests-108"),
			regionalSync(54, "Kantonian Male", { oneWay: true }),
			regionalSync(54, "Alolan", { oneWay: true }),
		],
	},

	{ name: "Obtain the Absolite", members: [taskSync("legendsza-story-1-09"), taskSync("legendsza-mega-stones-31"),], },
	{ name: "Obtain the Slowbronite", members: [taskSync("legendsza-story-1-11"), taskSync("legendsza-mega-stones-33"),], },
	{ name: "Obtain the Cameruptite", members: [taskSync("legendsza-story-1-12"), taskSync("legendsza-mega-stones-26"),], },
	{ name: "Obtain the Victreebelite", members: [taskSync("legendsza-story-1-13"), taskSync("legendsza-mega-stones-16"),], },
	{ name: "Obtain the Beedrillite", members: [taskSync("legendsza-story-1-16"), taskSync("legendsza-mega-stones-04"),], },
	{ name: "Obtain the Hawluchanite", members: [taskSync("legendsza-story-1-17"), taskSync("legendsza-mega-stones-49"),], },
	{ name: "Obtain the Banettite", members: [taskSync("legendsza-story-1-18"), taskSync("legendsza-mega-stones-25"),], },
	{ name: "Obtain the Mawilite", members: [taskSync("legendsza-story-1-21"), taskSync("legendsza-mega-stones-30"),], },
	{ name: "Obtain the Barbaracite", members: [taskSync("legendsza-story-1-22"), taskSync("legendsza-mega-stones-08"),], },
	{ name: "Obtain the Ampharosite", members: [taskSync("legendsza-story-1-23"), taskSync("legendsza-mega-stones-06"),], },
	{ name: "Obtain the Froslassite", members: [taskSync("legendsza-story-1-27"), taskSync("legendsza-mega-stones-44"),], },
	{ name: "Obtain the Altarianite", members: [taskSync("legendsza-story-1-28"), taskSync("legendsza-mega-stones-22"),], },
	{ name: "Obtain the Venusaurite", members: [taskSync("legendsza-story-1-29"), taskSync("legendsza-mega-stones-37"),], },
	{ name: "Obtain the Dragoninite", members: [taskSync("legendsza-story-1-32"), taskSync("legendsza-mega-stones-36"),], },
	{ name: "Obtain the Tyranitarite", members: [taskSync("legendsza-story-1-33"), taskSync("legendsza-mega-stones-55"),], },
	{ name: "Obtain the Starminite", members: [taskSync("legendsza-story-1-34"), taskSync("legendsza-mega-stones-09"),], },

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
	{
		name: "Catch Heatran", members: [
			taskSync("legendszamd-catching-1-01"),
			taskSync("legendszamd-story-1-09"),
			regionalSync(113, { oneWay: true }),
		],
	},
	{
		name: "Catch Darkrai", members: [
			taskSync("legendszamd-catching-1-02"),
			taskSync("legendszamd-story-1-11"),
			regionalSync(114, { oneWay: true }),
		],
	},
	{
		name: "Catch Kyogre", members: [
			taskSync("legendszamd-catching-1-03"),
			taskSync("legendszamd-story-2-03"),
			regionalSync(128, { oneWay: true }),
		],
	},
	{
		name: "Catch Groudon", members: [
			taskSync("legendszamd-catching-1-04"),
			taskSync("legendszamd-story-2-02"),
			regionalSync(129, { oneWay: true }),
		],
	},
	{
		name: "Catch Rayquaza", members: [
			taskSync("legendszamd-catching-1-05"),
			taskSync("legendszamd-story-2-01"),
			regionalSync(130, { oneWay: true }),
		],
	},
	{
		name: "Catch Latias", members: [
			taskSync("legendszamd-catching-1-06"),
			taskSync("legendszamd-side-quests-2-70"),
			taskSync("legendszamd-mega-stones-20"),
			taskSync("legendszamd-mega-stones-21"),
			regionalSync(126, { oneWay: true }),
		],
	},
	{
		name: "Catch Latios", members: [
			taskSync("legendszamd-catching-1-07"),
			taskSync("legendszamd-side-quests-2-70"),
			taskSync("legendszamd-mega-stones-20"),
			taskSync("legendszamd-mega-stones-21"),
			regionalSync(127, { oneWay: true }),
		],
	},
	{ name: "Catch Cobalion", members: [taskSync("legendszamd-catching-1-08"), regionalSync(115, { oneWay: true }),], },
	{ name: "Catch Terrakion", members: [taskSync("legendszamd-catching-1-09"), regionalSync(116, { oneWay: true }),], },
	{ name: "Catch Virizion", members: [taskSync("legendszamd-catching-1-10"), regionalSync(117, { oneWay: true }),], },

	{ name: "Catch Keldeo", members: [taskSync("legendszamd-catching-2-01"), regionalSync(118, { oneWay: true }),], },
	{ name: "Catch Meloetta", members: [taskSync("legendszamd-catching-2-02"), regionalSync(119, { oneWay: true }),], },
	{ name: "Catch Genesect", members: [taskSync("legendszamd-catching-2-03"), taskSync("legendszamd-side-quests-2-72"), regionalSync(120, { oneWay: true }),], },
	{ name: "Catch Hoopa", members: [taskSync("legendszamd-catching-2-04"), taskSync("legendszamd-side-quests-2-77"), regionalSync(121, { oneWay: true }),], },
	{ name: "Catch Volcanion", members: [taskSync("legendszamd-catching-2-05"), taskSync("legendszamd-side-quests-2-75"), regionalSync(114, { oneWay: true }),], },
	{
		name: "Catch Megearna", members: [
			taskSync("legendszamd-catching-2-06"),
			taskSync("legendszamd-side-quests-2-76"),
			taskSync("legendszamd-mega-stones-24"),
			regionalSync(131, { oneWay: true }),
		],
	},
	{ name: "Catch Marshadow", members: [taskSync("legendszamd-catching-2-07"), taskSync("legendszamd-side-quests-2-73"), regionalSync(122, { oneWay: true }),], },
	{
		name: "Obtain Zeraorite", members: [
			taskSync("legendszamd-catching-2-08"),
			taskSync("legendszamd-side-quests-1-03"),
			taskSync("legendszamd-mega-stones-25"),
			regionalSync(132, { oneWay: true }),
		],
	},
	{ name: "Catch Melmetal", members: [taskSync("legendszamd-catching-2-09"), taskSync("legendszamd-side-quests-2-74"), regionalSync(123, { oneWay: true }),], },
	{ name: "Catch Meltan", members: [taskSync("legendszamd-catching-2-10"), taskSync("legendszamd-side-quests-2-74"), regionalSync(124, { oneWay: true }),], },

	{
		name: "Complete the Porygon for Porygon trade", members: [
			taskSync("legendszamd-catching-3-01"),
			taskSync("legendszamd-side-quests-2-48"),
			taskSync("legendszamd-thms-40"),
			regionalSync(11, { oneWay: true }), regionalSync(12, { oneWay: true }),
		],
	},

	{
		name: "Obtain Mewtwonite X & Y", members: [
			taskSync("legendszamd-side-quests-1-02"),
			taskSync("legendszamd-mega-stones-07"),
			taskSync("legendszamd-mega-stones-08"),
			regionalSyncCross(game1, 232, { oneWay: true }),
		],
	},
	{
		name: "Obtain Diancite", members: [
			taskSync("legendszamd-side-quests-1-01"),
			taskSync("legendszamd-mega-stones-09"),
			regionalSyncCross(game1, 231, { oneWay: true }),
		],
	},

	{
		name: "Obtain the Raichunite X & Y", members: [
			taskSync("legendszamd-side-quests-2-20"),
			taskSync("legendszamd-mega-stones-02"),
			taskSync("legendszamd-mega-stones-03"),
		],
	},
	{
		name: "Obtain the Crabominite", members: [
			taskSync("legendszamd-side-quests-2-22"),
			taskSync("legendszamd-mega-stones-17"),
		],
	},
	{
		name: "Defeat the DYNA4MO Duo", members: [
			taskSync("legendszamd-side-quests-2-32"),
			fashionSync("canaris-tracksuit-1"),
			fashionSync("canaris-satchel-1"),
		],
	},
	{
		name: "Defeat the Fist of Justice Duo", members: [
			taskSync("legendszamd-side-quests-2-33"),
			fashionSync("ivors-gi-1"),
			fashionSync("ivors-training-gloves-1"),
			fashionSync("ivors-geta-sandals-1"),
			fashionSync("ivors-clasped-satchel-1"),
		],
	},
	{
		name: "Defeat the Rust Syndicate Duo", members: [
			taskSync("legendszamd-side-quests-2-34"),
			fashionSync("corbeaus-suit-and-tie-1"),
			fashionSync("corbeaus-glasses-1"),
			fashionSync("corbeaus-leather-satchel-1"),
		],
	},
	{
		name: "Defeat the SBC Duo", members: [
			taskSync("legendszamd-side-quests-2-35"),
			fashionSync("jacinthes-dress-1"),
			fashionSync("jacinthes-pillbox-1"),
			fashionSync("jacinthes-beribboned-gloves-1"),
			fashionSync("jacinthes-mesh-tights-1"),
			fashionSync("jacinthes-bejeweled-pumps-1"),
			fashionSync("jacinthes-bejeweled-satchel-1"),
		],
	},
	{
		name: "Defeat the Team Flare Nouveau Duo", members: [
			taskSync("legendszamd-side-quests-2-36"),
			fashionSync("grishams-chef-top-1"),
			fashionSync("grishams-aproned-pants-1"),
			fashionSync("grishams-glasses-1"),
			fashionSync("grishams-leather-shoes-1"),
			fashionSync("grishams-round-satchel-1"),
		],
	},
	{
		name: "Defeat the DYNA4MO Duo...Again", members: [
			taskSync("legendszamd-side-quests-2-62"),
			fashionSync("canaris-tracksuit-2"),
			fashionSync("canaris-satchel-2"),
		],
	},
	{
		name: "Defeat the Fist of Justice Duo...Again", members: [
			taskSync("legendszamd-side-quests-2-63"),
			fashionSync("ivors-gi-2"),
			fashionSync("ivors-training-gloves-2"),
			fashionSync("ivors-geta-sandals-2"),
			fashionSync("ivors-clasped-satchel-2"),
		],
	},
	{
		name: "Defeat the Rust Syndicate Duo...Again", members: [
			taskSync("legendszamd-side-quests-2-64"),
			fashionSync("corbeaus-suit-and-tie-2"),
			fashionSync("corbeaus-glasses-2"),
			fashionSync("corbeaus-leather-satchel-2"),
		],
	},
	{
		name: "Defeat the SBC Duo...Again", members: [
			taskSync("legendszamd-side-quests-2-65"),
			fashionSync("jacinthes-dress-2"),
			fashionSync("jacinthes-pillbox-2"),
			fashionSync("jacinthes-beribboned-gloves-2"),
			fashionSync("jacinthes-mesh-tights-2"),
			fashionSync("jacinthes-bejeweled-pumps-2"),
			fashionSync("jacinthes-bejeweled-satchel-2"),
		],
	},
	{
		name: "Defeat the Team Flare Nouveau Duo...Again", members: [
			taskSync("legendszamd-side-quests-2-66"),
			fashionSync("grishams-chef-top-2"),
			fashionSync("grishams-aproned-pants-2"),
			fashionSync("grishams-glasses-2"),
			fashionSync("grishams-leather-shoes-2"),
			fashionSync("grishams-round-satchel-2"),
		],
	},
	{
		name: "Obtain Lucarionite Z", members: [
			taskSync("legendszamd-side-quests-2-78"),
			taskSync("legendszamd-mega-stones-06"),
		]
	},

	{ name: "Obtain the Absolite Z", members: [taskSync("legendszamd-story-1-01"), taskSync("legendszamd-mega-stones-05"),], },
	{ name: "Obtain the Staraptite", members: [taskSync("legendszamd-story-1-03"), taskSync("legendszamd-mega-stones-16"),], },
	{ name: "Obtain the Tatsugirinite", members: [taskSync("legendszamd-story-1-06"), taskSync("legendszamd-mega-stones-12"),], },
	{ name: "Obtain the Meowsticite", members: [taskSync("legendszamd-story-1-08"), taskSync("legendszamd-mega-stones-01"),], },

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