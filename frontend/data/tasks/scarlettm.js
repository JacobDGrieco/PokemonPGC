PPGC.register({
	sections: {
		scarlettm: [
			{ id: "scarlettm-catching", title: "Gotta Catch 'Em All" },
			{ id: "scarlettm-story", title: "Main Story" },
			{ id: "scarlettm-side-quests", title: "Side Quests" },
			{ id: "scarlettm-battle", title: "Battle" },
			{ id: "scarlettm-upgrades", title: "Upgrades" }, // Move activities to here
			{ id: "scarlettm-collectables", title: "Collectables" },
			{ id: "scarlettm-fashion", title: "Fashion" },
			{ id: "scarlettm-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"scarlettm-catching": [
			{
				id: "scarlettm-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "scarlettm-catching-1-a",
						text: "Catch Ogrepon",
						done: false,
						img: "imgs/sprites/gen9/scarlet-violet/base/1017.png",
						dexSync: [
							{ game: "scarlettm", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
