PPGC.register({
	sections: {
		swordct: [
			{ id: "swordct-catching", title: "Gotta Catch 'Em All" },
			{ id: "swordct-story", title: "Main Story" },
			{ id: "swordct-side-quests", title: "Side Quests" },
			{ id: "swordct-gst", title: "Galarian Star Tournament" },
			{ id: "swordct-battle", title: "Battle" },
			{ id: "swordct-collectables", title: "Collectables" },
			{ id: "swordct-trainer-card", title: "Trainer Card" },
			{ id: "swordct-fashion", title: "Fashion" },
		],
	},
	tasks: {
		"swordct-catching": [
			{
				id: "swordct-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "swordct-catching-1-a",
						text: "Catch Calyrex",
						done: false,
						img: "imgs/sprites/gen8/sword-shield/base/898.png",
						dexSync: [
							{ game: "swordct", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
