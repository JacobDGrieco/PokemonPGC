PPGC.register({
	sections: {
		black2: [
			{ id: "black2-catching", title: "Gotta Catch 'Em All" },
			{ id: "black2-story", title: "Main Story" },
			{ id: "black2-funfest", title: "Funfest Missions" },
			{ id: "black2-activities", title: "Activities" },
			{ id: "black2-battle", title: "Battle" },
			{ id: "black2-upgrades", title: "Upgrades" },
			{ id: "black2-collectables", title: "Collectables" },
			{ id: "black2-medals", title: "Medals" },
			{ id: "black2-thms", title: "TMs/HMs" },
			{ id: "black2-distributions", title: "Distributions" },
			{ id: "black2-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"black2-catching": [
			{
				id: "black2-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "black2-catching-1-a",
						text: "Catch Zekrom",
						done: false,
						img: "imgs/sprites/gen5/base/644.png",
						dexSync: [
							{ game: "black2", dexType: "regional", id: 150 },
							{ game: "black2", dexType: "national", id: 249 }
						],
					},
				],
			},
		]
	},
});
