PPGC.register({
	sections: {
		alphasapphire: [
			{ id: "alphasapphire-catching", title: "Gotta Catch 'Em All" },
			{ id: "alphasapphire-story", title: "Main Story" },
			{ id: "alphasapphire-side-quests", title: "Side Quests" },
			{ id: "alphasapphire-activities", title: "Activities" },
			{ id: "alphasapphire-battle", title: "Battle" },
			{ id: "alphasapphire-upgrades", title: "Upgrades" },
			{ id: "alphasapphire-collectables", title: "Collectables" },
			{ id: "alphasapphire-mega-stones", title: "Mega Stones" },
			{ id: "alphasapphire-thms", title: "TMs/HMs" },
			{ id: "alphasapphire-distributions", title: "Distributions" },
			{ id: "alphasapphire-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"alphasapphire-catching": [
			{
				id: "alphasapphire-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "alphasapphire-catching-1-a",
						text: "Catch Kyogre",
						done: false,
						img: "imgs/sprites/gen6/base/382.png",
						dexSync: [
							{ game: "alphasapphire", dexType: "regional", id: 150 },
							{ game: "alphasapphire", dexType: "national", id: 249 }
						],
					},
				],
			},
		]
	},
});
