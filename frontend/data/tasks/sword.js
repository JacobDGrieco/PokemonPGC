PPGC.register({
	sections: {
		sword: [
			{ id: "sword-catching", title: "Gotta Catch 'Em All" },
			{ id: "sword-story", title: "Main Story" },
			{ id: "sword-side-quests", title: "Side Quests" },
			{ id: "sword-battle", title: "Battle" },
			{ id: "sword-upgrades", title: "Upgrades" },
			{ id: "sword-collectables", title: "Collectables" },
			{ id: "sword-fashion", title: "Fashion" },
			{ id: "sword-curry", title: "Curry" },
			{ id: "sword-tms", title: "TMs" },
			{ id: "sword-trs", title: "TRs" },
			{ id: "sword-distributions", title: "Distributions" },
			{ id: "sword-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"sword-catching": [
			{
				id: "sword-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "sword-catching-1-a",
						text: "Catch Zacian",
						done: false,
						img: "imgs/sprites/gen8/sword-shield/base/888.png",
						dexSync: [
							{ game: "sword", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
