PPGC.register({
	sections: {
		moon: [
			{ id: "moon-catching", title: "Gotta Catch 'Em All" },
			{ id: "moon-story", title: "Main Story" },
			{ id: "moon-side-quests", title: "Side Quests" },
			{ id: "moon-activities", title: "Activities" },
			{ id: "moon-battle", title: "Battle" },
			{ id: "moon-upgrades", title: "Upgrades" },
			{ id: "moon-collectables", title: "Collectables" },
			{ id: "moon-fashion", title: "Fashion" },
			{ id: "moon-mega-stones", title: "Mega Stones" },
			{ id: "moon-z-crystals", title: "Z-Crystals" },
			{ id: "moon-thms", title: "TMs/RPs" },
			{ id: "moon-distributions", title: "Distributions" },
			{ id: "moon-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"moon-catching": [
			{
				id: "moon-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "moon-catching-1-a",
						text: "Catch Lunala",
						done: false,
						img: "imgs/sprites/gen7/sun-moon-ultra/base/792.png",
						dexSync: [
							{ game: "moon", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
