PPGC.register({
	sections: {
		sun: [
			{ id: "sun-catching", title: "Gotta Catch 'Em All" },
			{ id: "sun-story", title: "Main Story" },
			{ id: "sun-side-quests", title: "Side Quests" },
			{ id: "sun-activities", title: "Activities" },
			{ id: "sun-battle", title: "Battle" },
			{ id: "sun-upgrades", title: "Upgrades" },
			{ id: "sun-collectables", title: "Collectables" },
			{ id: "sun-fashion", title: "Fashion" },
			{ id: "sun-mega-stones", title: "Mega Stones" },
			{ id: "sun-z-crystals", title: "Z-Crystals" },
			{ id: "sun-thms", title: "TMs/RPs" },
			{ id: "sun-distributions", title: "Distributions" },
			{ id: "sun-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"sun-catching": [
			{
				id: "sun-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "sun-catching-1-a",
						text: "Catch Solgaleo",
						done: false,
						img: "imgs/sprites/gen7/sun-moon-ultra/base/791.png",
						dexSync: [
							{ game: "sun", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
