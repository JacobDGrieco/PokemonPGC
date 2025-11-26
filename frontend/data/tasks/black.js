PPGC.register({
	sections: {
		black: [
			{ id: "black-catching", title: "Gotta Catch 'Em All" },
			{ id: "black-story", title: "Main Story" },
			{ id: "black-activities", title: "Activities" },
			{ id: "black-battle", title: "Battle" },
			{ id: "black-upgrades", title: "Upgrades" },
			{ id: "black-collectables", title: "Collectables" },
			{ id: "black-thms", title: "TMs/HMs" },
			{ id: "black-distributions", title: "Distributions" },
			{ id: "black-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"black-catching": [
			{
				id: "black-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "black-catching-1-a",
						text: "Catch Reshiram",
						done: false,
						img: "imgs/sprites/gen5/base/643.png",
						dexSync: [
							{ game: "black", dexType: "regional", id: 150 },
							{ game: "black", dexType: "national", id: 249 }
						],
					},
				],
			},
		]
	},
});
