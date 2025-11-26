PPGC.register({
	sections: {
		diamond: [
			{ id: "diamond-catching", title: "Gotta Catch 'Em All" },
			{ id: "diamond-story", title: "Main Story" },
			{ id: "diamond-battle", title: "Battle" },
			{ id: "diamond-upgrades", title: "Upgrades" }, // Poketch Apps go here too
			{ id: "diamond-collectables", title: "Collectables" },
			{ id: "diamond-thms", title: "TMs/HMs" },
			{ id: "diamond-distributions", title: "Distributions" },
			{ id: "diamond-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"diamond-catching": [
			{
				id: "diamond-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "diamond-catching-1-a",
						text: "Catch Dialga",
						done: false,
						img: "imgs/sprites/gen4/diamond-pearl/base/483.png",
						dexSync: [
							{ game: "diamond", dexType: "regional", id: 149 },
							{ game: "diamond", dexType: "national", id: 483 }
						],
					},
				],
			},
		]
	},
});