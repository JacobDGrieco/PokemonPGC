// Game
const game = "sword";

// Categories
const catching = game + "-catching";
const story = game + "-story";
const sideQuests = game + "-side-quests";
const battle = game + "-battle";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const trainerCards = game + "-trainer-cards";
const fashion = game + "-fashion";
const curry = game + "-curry";
const thms = game + "-thms";
const trs = game + "-trs";
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
				[trainerCards]: [
					[trainerCards + "-1"],
					[trainerCards + "-1-01", trainerCards + "-1-02", trainerCards + "-1-03", trainerCards + "-1-04", trainerCards + "-1-05"],
					[trainerCards + "-1-06", trainerCards + "-1-07", trainerCards + "-1-08", trainerCards + "-1-09", trainerCards + "-1-10"],
					[trainerCards + "-1-11", trainerCards + "-1-12", trainerCards + "-1-13", trainerCards + "-1-14", trainerCards + "-1-15"],
					[trainerCards + "-1-16", trainerCards + "-1-17", trainerCards + "-1-18", trainerCards + "-1-19", trainerCards + "-1-20"],
					[trainerCards + "-1-21", trainerCards + "-1-22", trainerCards + "-1-23", trainerCards + "-1-24", trainerCards + "-1-25"],
					[trainerCards + "-1-26", trainerCards + "-1-27", trainerCards + "-1-28", trainerCards + "-1-29", trainerCards + "-1-30"],
					[trainerCards + "-1-31", trainerCards + "-1-32", trainerCards + "-1-33", trainerCards + "-1-34", trainerCards + "-1-35"],
					[trainerCards + "-1-36", trainerCards + "-1-37", trainerCards + "-1-38", trainerCards + "-1-39", trainerCards + "-1-40"],
					[trainerCards + "-1-41", trainerCards + "-1-42", trainerCards + "-1-43", trainerCards + "-1-44", trainerCards + "-1-45"],
					[trainerCards + "-1-46", trainerCards + "-1-47", trainerCards + "-1-48", trainerCards + "-1-49", trainerCards + "-1-50"],
					[trainerCards + "-1-51", trainerCards + "-1-52", trainerCards + "-1-53"],
					[trainerCards + "-2"],
					[trainerCards + "-2-01", trainerCards + "-2-02", trainerCards + "-2-03", trainerCards + "-2-04", trainerCards + "-2-05"],
					[trainerCards + "-2-06", trainerCards + "-2-07", trainerCards + "-2-08", trainerCards + "-2-09", trainerCards + "-2-10"],
					[trainerCards + "-2-11", trainerCards + "-2-12", trainerCards + "-2-13", trainerCards + "-2-14", trainerCards + "-2-15"],
					[trainerCards + "-2-16", trainerCards + "-2-17", trainerCards + "-2-18", trainerCards + "-2-19", trainerCards + "-2-20"],
					[trainerCards + "-3"],
					[trainerCards + "-3-01", trainerCards + "-3-02", trainerCards + "-3-03", trainerCards + "-3-04", trainerCards + "-3-05"],
					[trainerCards + "-3-06", trainerCards + "-3-07", trainerCards + "-3-08", trainerCards + "-3-09", trainerCards + "-3-10"],
					[trainerCards + "-3-11", trainerCards + "-3-12", trainerCards + "-3-13", trainerCards + "-3-14", trainerCards + "-3-15"],
					[trainerCards + "-3-16", trainerCards + "-3-17", trainerCards + "-3-18"],
					[trainerCards + "-4"],
					[trainerCards + "-4-01", trainerCards + "-4-02", trainerCards + "-4-03", trainerCards + "-4-04"],
					[trainerCards + "-4-05", trainerCards + "-4-06", trainerCards + "-4-07", trainerCards + "-4-08"],
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
					[thms + "-51", thms + "-52", thms + "-53", thms + "-54", thms + "-55"],
					[thms + "-56", thms + "-57", thms + "-58", thms + "-59", thms + "-60"],
				],
				[trs]: [
					[trs + "-00", trs + "-01", trs + "-02", trs + "-03", trs + "-04"],
					[trs + "-05", trs + "-06", trs + "-07", trs + "-08", trs + "-09"],
					[trs + "-10", trs + "-11", trs + "-12", trs + "-13", trs + "-14"],
					[trs + "-15", trs + "-16", trs + "-17", trs + "-18", trs + "-19"],
					[trs + "-20", trs + "-21", trs + "-22", trs + "-23", trs + "-24"],
					[trs + "-25", trs + "-26", trs + "-27", trs + "-28", trs + "-29"],
					[trs + "-30", trs + "-31", trs + "-32", trs + "-33", trs + "-34"],
					[trs + "-35", trs + "-36", trs + "-37", trs + "-38", trs + "-39"],
					[trs + "-40", trs + "-41", trs + "-42", trs + "-43", trs + "-44"],
					[trs + "-45", trs + "-46", trs + "-47", trs + "-48", trs + "-49"],
					[trs + "-50", trs + "-51", trs + "-52", trs + "-53", trs + "-54"],
					[trs + "-55", trs + "-56", trs + "-57", trs + "-58", trs + "-59"],
					[trs + "-60", trs + "-61", trs + "-62", trs + "-63", trs + "-64"],
					[trs + "-65", trs + "-66", trs + "-67", trs + "-68", trs + "-69"],
					[trs + "-70", trs + "-71", trs + "-72", trs + "-73", trs + "-74"],
					[trs + "-75", trs + "-76", trs + "-77", trs + "-78", trs + "-79"],
					[trs + "-80", trs + "-81", trs + "-82", trs + "-83", trs + "-84"],
					[trs + "-85", trs + "-86", trs + "-87", trs + "-88", trs + "-89"],
					[trs + "-90", trs + "-91", trs + "-92", trs + "-93", trs + "-94"],
					[trs + "-95", trs + "-96", trs + "-97", trs + "-98", trs + "-99"],
				],
				[extraCredit]: [
					[extraCredit + "-1"],
					[extraCredit + "-1-1", extraCredit + "-1-2", extraCredit + "-1-3"],
					[extraCredit + "-2"],
					[extraCredit + "-2-1", extraCredit + "-2-2", extraCredit + "-2-3"],
				],
			},
		},
		compact: {

		}
	},
});
