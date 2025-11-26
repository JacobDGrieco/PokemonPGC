PPGC.register({
	sections: {
		shieldioa: [
			{ id: "shieldioa-catching", title: "Gotta Catch 'Em All" },
			{ id: "shieldioa-story", title: "Main Story" },
			{ id: "shieldioa-side-quests", title: "Side Quests" },
			{ id: "shieldioa-battle", title: "Battle" },
			{ id: "shieldioa-upgrades", title: "Upgrades" },
			{ id: "shieldioa-collectables", title: "Collectables" },
			{ id: "shieldioa-fashion", title: "Fashion" },
		],
	},
	tasks: {
		"shieldioa-catching": [
			{
				id: "shieldioa-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "shieldioa-catching-1-a",
						text: "Catch Urshifu",
						done: false,
						img: "imgs/sprites/gen8/sword-shield/base/892.png",
						dexSync: [
							{ game: "shieldioa", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
