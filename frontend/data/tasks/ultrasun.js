PPGC.register({
	sections: {
		ultrasun: [
			{ id: "ultrasun-catching", title: "Gotta Catch 'Em All" },
			{ id: "ultrasun-story", title: "Main Story" },
			{ id: "ultrasun-side-quests", title: "Side Quests" },
			{ id: "ultrasun-activities", title: "Activities" },
			{ id: "ultrasun-battle", title: "Battle" },
			{ id: "ultrasun-upgrades", title: "Upgrades" },
			{ id: "ultrasun-collectables", title: "Collectables" },
			{ id: "ultrasun-fashion", title: "Fashion" },
			{ id: "ultrasun-mega-stones", title: "Mega Stones" },
			{ id: "ultrasun-z-crystals", title: "Z-Crystals" },
			{ id: "ultrasun-thms", title: "TMs/RPs" },
			{ id: "ultrasun-distributions", title: "Distributions" },
			{ id: "ultrasun-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"ultrasun-catching": [
			{
				id: "ultrasun-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "ultrasun-catching-1-a",
						text: "Catch Soleago",
						done: false,
						img: "imgs/sprites/gen7/sun-moon-ultra/base/791.png",
						dexSync: [
							{ game: "ultrasun", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
