PPGC.register({
	sections: {
		x: [
			{ id: "x-catching", title: "Gotta Catch 'Em All" },
			{ id: "x-story", title: "Main Story" },
			{ id: "x-activities", title: "Activities" },
			{ id: "x-battle", title: "Battle" },
			{ id: "x-upgrades", title: "Upgrades" },
			{ id: "x-collectables", title: "Collectables" },
			{ id: "x-fashion", title: "Fashion" },
			{ id: "x-mega-stones", title: "Mega Stones" },
			{ id: "x-thms", title: "TMs/HMs" },
			{ id: "x-distributions", title: "Distributions" },
			{ id: "x-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"x-catching": [
			{
				id: "x-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "x-catching-1-a",
						text: "Catch Xerneas",
						done: false,
						img: "imgs/sprites/gen6/base/716.png",
						dexSync: [
							{ game: "x", dexType: "regional", id: 150 },
							{ game: "x", dexType: "national", id: 249 }
						],
					},
				],
			},
		]
	},
});
