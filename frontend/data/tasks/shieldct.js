PPGC.register({
	sections: {
		shieldct: [
			{ id: "shieldct-catching", title: "Gotta Catch 'Em All" },
			{ id: "shieldct-story", title: "Main Story" },
			{ id: "shieldct-side-quests", title: "Side Quests" },
			{ id: "shieldct-gst", title: "Galarian Star Tournament" },
			{ id: "shieldct-battle", title: "Battle" },
			{ id: "shieldct-collectables", title: "Collectables" },
			{ id: "shieldct-trainer-card", title: "Trainer Card" },
			{ id: "shieldct-fashion", title: "Fashion" },
		],
	},
	tasks: {
		"shieldct-catching": [
			{
				id: "shieldct-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "shieldct-catching-1-a",
						text: "Catch Calyrex",
						done: false,
						img: "imgs/sprites/gen8/sword-shield/base/898.png",
						dexSync: [
							{ game: "shieldct", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
