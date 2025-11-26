PPGC.register({
	sections: {
		heartgold: [
			{ id: "heartgold-catching", title: "Gotta Catch 'Em All" },
			{ id: "heartgold-story", title: "Main Story" },
			{ id: "heartgold-activities", title: "Activities" },
			{ id: "heartgold-battle", title: "Battle" },
			{ id: "heartgold-upgrades", title: "Upgrades" },
			{ id: "heartgold-collectables", title: "Collectables" },
			{ id: "heartgold-thms", title: "TMs/HMs" },
			{ id: "heartgold-distributions", title: "Distributions" },
			{ id: "heartgold-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"heartgold-catching": [
			{
				id: "heartgold-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "heartgold-catching-1-a",
						text: "Catch Ho-Oh",
						done: false,
						img: "imgs/sprites/gen4/heartgold-soulsilver/base/250.png",
						dexSync: [
							{ game: "heartgold", dexType: "regional", id: 150 },
							{ game: "heartgold", dexType: "national", id: 250 }
						],
					},
				],
			},
		]
	},
});
