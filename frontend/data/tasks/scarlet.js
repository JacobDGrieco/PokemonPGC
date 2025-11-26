PPGC.register({
	sections: {
		scarlet: [
			{ id: "scarlet-catching", title: "Gotta Catch 'Em All" },
			{ id: "scarlet-story", title: "Main Story" },
			{ id: "scarlet-side-quests", title: "Side Quests" },
			{ id: "scarlet-activities", title: "Activities" },
			{ id: "scarlet-battle", title: "Battle" },
			{ id: "scarlet-upgrades", title: "Upgrades" },
			{ id: "scarlet-collectables", title: "Collectables" },
			{ id: "scarlet-fashion", title: "Fashion" },
			{ id: "scarlet-sandwiches", title: "Sandwiches" },
			{ id: "scarlet-thms", title: "TMs/Koraidon" },
			{ id: "scarlet-distributions", title: "Distributions" },
			{ id: "scarlet-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"scarlet-catching": [
			{
				id: "scarlet-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "scarlet-catching-1-a",
						text: "Catch Koraidon",
						done: false,
						img: "imgs/sprites/gen9/scarlet-violet/base/1007.png",
						dexSync: [
							{ game: "scarlet", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
