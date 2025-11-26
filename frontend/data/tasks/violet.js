PPGC.register({
	sections: {
		violet: [
			{ id: "violet-catching", title: "Gotta Catch 'Em All" },
			{ id: "violet-story", title: "Main Story" },
			{ id: "violet-side-quests", title: "Side Quests" },
			{ id: "violet-activities", title: "Activities" },
			{ id: "violet-battle", title: "Battle" },
			{ id: "violet-upgrades", title: "Upgrades" },
			{ id: "violet-collectables", title: "Collectables" },
			{ id: "violet-fashion", title: "Fashion" },
			{ id: "violet-sandwiches", title: "Sandwiches" },
			{ id: "violet-thms", title: "TMs/Koraidon" },
			{ id: "violet-distributions", title: "Distributions" },
			{ id: "violet-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"violet-catching": [
			{
				id: "violet-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "violet-catching-1-a",
						text: "Catch Miraidon",
						done: false,
						img: "imgs/sprites/gen9/scarlet-violet/base/1008.png",
						dexSync: [
							{ game: "violet", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
