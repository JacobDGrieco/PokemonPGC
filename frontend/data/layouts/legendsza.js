// Game
const game = "legendsza";

// Categories
const catching = game + "-catching";
const story = game + "-story";
const sideQuests = game + "-side-quests";
const mabelsResearch = game + "-mabels-research";
const activities = game + "-activities";
const battle = game + "-battle";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const megaStones = game + "-mega-stones";
const fashion = game + "-fashion";
const thms = game + "-thms";
const distributions = game + "-distributions";
const extraCredit = game + "-extra-credit";

// Data
PPGC.register({
	layoutVariants: {
		desktop: {
			taskRows: {
				[catching]: [
					[catching + "-1"],
					[catching + "-1-01", catching + "-1-02", catching + "-1-03"],
					[catching + "-2"],
					[catching + "-2-01", catching + "-2-02", catching + "-2-03"],
					[catching + "-2-04", catching + "-2-05", catching + "-2-06"],
					[catching + "-2-07", catching + "-2-08", catching + "-2-09"],
					[catching + "-3"],
					[catching + "-3-01", catching + "-3-02"],
					[catching + "-3-03", catching + "-3-04"],
				],
				[story]: [
					[story + "-1"],
					[story + "-2"],
					[story + "-2-01", story + "-2-02"],
					[story + "-2-03", story + "-2-04"],
				],
				[sideQuests]: [
					[sideQuests + "-01", sideQuests + "-41", sideQuests + "-81"],
					[sideQuests + "-02", sideQuests + "-42", sideQuests + "-82"],
					[sideQuests + "-03", sideQuests + "-43", sideQuests + "-83"],
					[sideQuests + "-04", sideQuests + "-44", sideQuests + "-84"],
					[sideQuests + "-05", sideQuests + "-45", sideQuests + "-85"],
					[sideQuests + "-06", sideQuests + "-46", sideQuests + "-86"],
					[sideQuests + "-07", sideQuests + "-47", sideQuests + "-87"],
					[sideQuests + "-08", sideQuests + "-48", sideQuests + "-88"],
					[sideQuests + "-09", sideQuests + "-49", sideQuests + "-89"],
					[sideQuests + "-10", sideQuests + "-50", sideQuests + "-90"],
					[sideQuests + "-11", sideQuests + "-51", sideQuests + "-91"],
					[sideQuests + "-12", sideQuests + "-52", sideQuests + "-92"],
					[sideQuests + "-13", sideQuests + "-53", sideQuests + "-93"],
					[sideQuests + "-14", sideQuests + "-54", sideQuests + "-94"],
					[sideQuests + "-15", sideQuests + "-55", sideQuests + "-95"],
					[sideQuests + "-16", sideQuests + "-56", sideQuests + "-96"],
					[sideQuests + "-17", sideQuests + "-57", sideQuests + "-97"],
					[sideQuests + "-18", sideQuests + "-58", sideQuests + "-98"],
					[sideQuests + "-19", sideQuests + "-59", sideQuests + "-99"],
					[sideQuests + "-20", sideQuests + "-60", sideQuests + "-100"],
					[sideQuests + "-21", sideQuests + "-61", sideQuests + "-101"],
					[sideQuests + "-22", sideQuests + "-62", sideQuests + "-102"],
					[sideQuests + "-23", sideQuests + "-63", sideQuests + "-103"],
					[sideQuests + "-24", sideQuests + "-64", sideQuests + "-104"],
					[sideQuests + "-25", sideQuests + "-65", sideQuests + "-105"],
					[sideQuests + "-26", sideQuests + "-66", sideQuests + "-106"],
					[sideQuests + "-27", sideQuests + "-67", sideQuests + "-107"],
					[sideQuests + "-28", sideQuests + "-68", sideQuests + "-108"],
					[sideQuests + "-29", sideQuests + "-69", sideQuests + "-109"],
					[sideQuests + "-30", sideQuests + "-70", sideQuests + "-110"],
					[sideQuests + "-31", sideQuests + "-71", sideQuests + "-111"],
					[sideQuests + "-32", sideQuests + "-72", sideQuests + "-112"],
					[sideQuests + "-33", sideQuests + "-73", sideQuests + "-113"],
					[sideQuests + "-34", sideQuests + "-74", sideQuests + "-114"],
					[sideQuests + "-35", sideQuests + "-75", sideQuests + "-115"],
					[sideQuests + "-36", sideQuests + "-76", sideQuests + "-116"],
					[sideQuests + "-37", sideQuests + "-77", sideQuests + "-117"],
					[sideQuests + "-38", sideQuests + "-78", sideQuests + "-118"],
					[sideQuests + "-39", sideQuests + "-79", sideQuests + "-119"],
					[sideQuests + "-40", sideQuests + "-80", spacer],
				],
				[mabelsResearch]: [
					[mabelsResearch + "-01", mabelsResearch + "-18", mabelsResearch + "-35"],
					[mabelsResearch + "-02", mabelsResearch + "-19", mabelsResearch + "-36"],
					[mabelsResearch + "-03", mabelsResearch + "-20", mabelsResearch + "-37"],
					[mabelsResearch + "-04", mabelsResearch + "-21", mabelsResearch + "-38"],
					[mabelsResearch + "-05", mabelsResearch + "-22", mabelsResearch + "-39"],
					[mabelsResearch + "-06", mabelsResearch + "-23", mabelsResearch + "-40"],
					[mabelsResearch + "-07", mabelsResearch + "-24", mabelsResearch + "-41"],
					[mabelsResearch + "-08", mabelsResearch + "-25", mabelsResearch + "-42"],
					[mabelsResearch + "-09", mabelsResearch + "-26", mabelsResearch + "-43"],
					[mabelsResearch + "-10", mabelsResearch + "-27", mabelsResearch + "-44"],
					[mabelsResearch + "-11", mabelsResearch + "-28", mabelsResearch + "-45"],
					[mabelsResearch + "-12", mabelsResearch + "-29", mabelsResearch + "-46"],
					[mabelsResearch + "-13", mabelsResearch + "-30", mabelsResearch + "-47"],
					[mabelsResearch + "-14", mabelsResearch + "-31", mabelsResearch + "-48"],
					[mabelsResearch + "-15", mabelsResearch + "-32", mabelsResearch + "-49"],
					[mabelsResearch + "-16", mabelsResearch + "-33", spacer],
					[mabelsResearch + "-17", mabelsResearch + "-34", spacer],
				],
				[activities]: [
					[activities + "-1"]
				],
				[battle]: [
					[battle + "-1"],
					[battle + "-1-01", battle + "-1-02", battle + "-1-03"],
					[battle + "-1-04", battle + "-1-05", battle + "-1-06"],
					[battle + "-1-07", battle + "-1-08", battle + "-1-09"],
					[battle + "-1-10", battle + "-1-11", battle + "-1-12"],
				],
				[upgrades]: [
					[upgrades + "-1"],
					[upgrades + "-1-01", upgrades + "-1-02", upgrades + "-1-03"],
					[upgrades + "-1-04", upgrades + "-1-05"],
				],
				[collectables]: [
					[collectables + "-1"],
					[collectables + "-2"],
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
					[megaStones + "-46", megaStones + "-47", megaStones + "-48", megaStones + "-49", megaStones + "-50"],
					[megaStones + "-51", megaStones + "-52", megaStones + "-53", megaStones + "-54", megaStones + "-55"],
					[megaStones + "-56", megaStones + "-57", megaStones + "-58", megaStones + "-59", megaStones + "-60"],
					[megaStones + "-61", megaStones + "-62"],
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
					[thms + "-61", thms + "-62", thms + "-63", thms + "-64", thms + "-65"],
					[thms + "-66", thms + "-67", thms + "-68", thms + "-69", thms + "-70"],
					[thms + "-71", thms + "-72", thms + "-73", thms + "-74", thms + "-75"],
					[thms + "-76", thms + "-77", thms + "-78", thms + "-79", thms + "-80"],
					[thms + "-81", thms + "-82", thms + "-83", thms + "-84", thms + "-85"],
					[thms + "-86", thms + "-87", thms + "-88", thms + "-89", thms + "-90"],
					[thms + "-91", thms + "-92", thms + "-93", thms + "-94", thms + "-95"],
					[thms + "-96", thms + "-97", thms + "-98", thms + "-99", thms + "-100"],
					[thms + "-101", thms + "-102", thms + "-103", thms + "-104", thms + "-105"],
					[thms + "-106", thms + "-107"],
				],
				[extraCredit]: [
					[extraCredit + "-1"],
					[extraCredit + "-1-01", extraCredit + "-1-02", extraCredit + "-1-03", extraCredit + "-1-04"],
					[extraCredit + "-1-05", extraCredit + "-1-06", extraCredit + "-1-07"],
					[extraCredit + "-2"],
					[extraCredit + "-3"],
					[extraCredit + "-3-01", extraCredit + "-3-02", extraCredit + "-3-03", extraCredit + "-3-04", extraCredit + "-3-05"],
					[extraCredit + "-3-06", extraCredit + "-3-07", extraCredit + "-3-08", extraCredit + "-3-09", extraCredit + "-3-10"],
					[extraCredit + "-3-11", extraCredit + "-3-12", extraCredit + "-3-13", extraCredit + "-3-14", extraCredit + "-3-15"],
					[extraCredit + "-3-16", extraCredit + "-3-17", extraCredit + "-3-18", extraCredit + "-3-19", extraCredit + "-3-20"],
					[extraCredit + "-3-21", extraCredit + "-3-22", extraCredit + "-3-23", extraCredit + "-3-24", extraCredit + "-3-25"],
					[extraCredit + "-3-26", extraCredit + "-3-27", extraCredit + "-3-28", extraCredit + "-3-29", extraCredit + "-3-30"],
					[extraCredit + "-3-31", extraCredit + "-3-32", extraCredit + "-3-33", extraCredit + "-3-34", extraCredit + "-3-35"],
				],
			},
		},
		compact: {

		}
	},
});
