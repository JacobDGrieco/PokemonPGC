PPGC.register({
	sections: {
		y: [
			{ id: "y-catching", title: "Gotta Catch 'Em All" },
			{ id: "y-story", title: "Main Story" },
			{ id: "y-activities", title: "Activities" },
			{ id: "y-battle", title: "Battle" },
			{ id: "y-upgrades", title: "Upgrades" },
			{ id: "y-collectables", title: "Collectables" },
			{ id: "y-fashion", title: "Fashion" },
			{ id: "y-mega-stones", title: "Mega Stones" },
			{ id: "y-thms", title: "TMs/HMs" },
			{ id: "y-distributions", title: "Distributions" },
			{ id: "y-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"y-catching": [
			{
				id: "y-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "y-catching-1-a",
						text: "Catch Yveltal",
						done: false,
						img: "imgs/sprites/gen6/base/717.png",
						dexSync: [
							{ game: "y", dexType: "regional", id: 150 },
							{ game: "y", dexType: "national", id: 249 }
						],
					},
				],
			},
		]
	},
});
