PPGC.register({
	sections: {
		soulsilver: [
			{ id: "soulsilver-catching", title: "Gotta Catch 'Em All" },
			{ id: "soulsilver-story", title: "Main Story" },
			{ id: "soulsilver-activities", title: "Activities" },
			{ id: "soulsilver-battle", title: "Battle" },
			{ id: "soulsilver-upgrades", title: "Upgrades" },
			{ id: "soulsilver-collectables", title: "Collectables" },
			{ id: "soulsilver-thms", title: "TMs/HMs" },
			{ id: "soulsilver-distributions", title: "Distributions" },
			{ id: "soulsilver-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"soulsilver-catching": [
			{
				id: "soulsilver-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "soulsilver-catching-1-a",
						text: "Catch Lugia",
						done: false,
						img: "imgs/sprites/gen4/heartgold-soulsilver/base/249.png",
						dexSync: [
							{ game: "soulsilver", dexType: "regional", id: 150 },
							{ game: "soulsilver", dexType: "national", id: 249 }
						],
					},
				],
			},
		]
	},
});
