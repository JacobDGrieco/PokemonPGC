PPGC.register({
	sections: {
		white: [
			{ id: "white-catching", title: "Gotta Catch 'Em All" },
			{ id: "white-story", title: "Main Story" },
			{ id: "white-activities", title: "Activities" },
			{ id: "white-battle", title: "Battle" },
			{ id: "white-upgrades", title: "Upgrades" },
			{ id: "white-collectables", title: "Collectables" },
			{ id: "white-thms", title: "TMs/HMs" },
			{ id: "white-distributions", title: "Distributions" },
			{ id: "white-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"white-catching": [
			{
				id: "white-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "white-catching-1-a",
						text: "Catch Zekrom",
						done: false,
						img: "imgs/sprites/gen5/base/644.png",
						dexSync: [
							{ game: "white", dexType: "regional", id: 150 },
							{ game: "white", dexType: "national", id: 249 }
						],
					},
				],
			},
		]
	},
});
