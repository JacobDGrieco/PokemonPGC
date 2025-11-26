PPGC.register({
	sections: {
		ultramoon: [
			{ id: "ultramoon-catching", title: "Gotta Catch 'Em All" },
			{ id: "ultramoon-story", title: "Main Story" },
			{ id: "ultramoon-side-quests", title: "Side Quests" },
			{ id: "ultramoon-activities", title: "Activities" },
			{ id: "ultramoon-battle", title: "Battle" },
			{ id: "ultramoon-upgrades", title: "Upgrades" },
			{ id: "ultramoon-collectables", title: "Collectables" },
			{ id: "ultramoon-fashion", title: "Fashion" },
			{ id: "ultramoon-mega-stones", title: "Mega Stones" },
			{ id: "ultramoon-z-crystals", title: "Z-Crystals" },
			{ id: "ultramoon-thms", title: "TMs/RPs" },
			{ id: "ultramoon-distributions", title: "Distributions" },
			{ id: "ultramoon-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"ultramoon-catching": [
			{
				id: "ultramoon-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "ultramoon-catching-1-a",
						text: "Catch Lunala",
						done: false,
						img: "imgs/sprites/gen7/sun-moon-ultra/base/792.png",
						dexSync: [
							{ game: "ultramoon", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
