PPGC.register({
	sections: {
		shield: [
			{ id: "shield-catching", title: "Gotta Catch 'Em All" },
			{ id: "shield-story", title: "Main Story" },
			{ id: "shield-side-quests", title: "Side Quests" },
			{ id: "shield-battle", title: "Battle" },
			{ id: "shield-upgrades", title: "Upgrades" },
			{ id: "shield-collectables", title: "Collectables" },
			{ id: "shield-fashion", title: "Fashion" },
			{ id: "shield-curry", title: "Curry" },
			{ id: "shield-tms", title: "TMs" },
			{ id: "shield-trs", title: "TRs" },
			{ id: "shield-distributions", title: "Distributions" },
			{ id: "shield-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"shield-catching": [
			{
				id: "shield-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "shield-catching-1-a",
						text: "Catch Zamazenta",
						done: false,
						img: "imgs/sprites/gen8/sword-shield/base/889.png",
						dexSync: [
							{ game: "shield", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
