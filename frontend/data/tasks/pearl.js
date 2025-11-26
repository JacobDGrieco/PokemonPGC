PPGC.register({
	sections: {
		pearl: [
			{ id: "pearl-catching", title: "Gotta Catch 'Em All" },
			{ id: "pearl-story", title: "Main Story" },
			{ id: "pearl-battle", title: "Battle" },
			{ id: "pearl-upgrades", title: "Upgrades" }, // Poketch Apps go here too
			{ id: "pearl-collectables", title: "Collectables" },
			{ id: "pearl-thms", title: "TMs/HMs" },
			{ id: "pearl-distributions", title: "Distributions" },
			{ id: "pearl-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"pearl-catching": [
			{
				id: "pearl-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "pearl-catching-1-a",
						text: "Catch Palkia",
						done: false,
						img: "imgs/sprites/gen4/diamond-pearl/base/484.png",
						dexSync: [
							{ game: "pearl", dexType: "regional", id: 150 },
							{ game: "pearl", dexType: "national", id: 484 }
						],
					},
				],
			},
		]
	},
});
