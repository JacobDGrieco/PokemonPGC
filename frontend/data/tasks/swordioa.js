PPGC.register({
	sections: {
		swordioa: [
			{ id: "swordioa-catching", title: "Gotta Catch 'Em All" },
			{ id: "swordioa-story", title: "Main Story" },
			{ id: "swordioa-side-quests", title: "Side Quests" },
			{ id: "swordioa-battle", title: "Battle" },
			{ id: "swordioa-upgrades", title: "Upgrades" },
			{ id: "swordioa-collectables", title: "Collectables" },
			{ id: "swordioa-trainer-card", title: "Trainer Card" },
			{ id: "swordioa-fashion", title: "Fashion" },
		],
	},
	tasks: {
		"swordioa-catching": [
			{
				id: "swordioa-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "swordioa-catching-1-a",
						text: "Catch Urshifu",
						done: false,
						img: "imgs/sprites/gen8/sword-shield/base/892.png",
						dexSync: [
							{ game: "swordioa", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
