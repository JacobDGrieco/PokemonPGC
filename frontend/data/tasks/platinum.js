PPGC.register({
	sections: {
		platinum: [
			{ id: "platinum-catching", title: "Gotta Catch 'Em All" },
			{ id: "platinum-story", title: "Main Story" },
			{ id: "platinum-battle", title: "Battle" },
			{ id: "platinum-upgrades", title: "Upgrades" }, // Poketch Apps go here too
			{ id: "platinum-collectables", title: "Collectables" },
			{ id: "platinum-thms", title: "TMs/HMs" },
			{ id: "platinum-distributions", title: "Distributions" },
			{ id: "platinum-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"platinum-catching": [
			{
				id: "platinum-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "platinum-catching-1-a",
						text: "Catch Giratina",
						done: false,
						img: "imgs/sprites/gen4/platinum/base/487.png",
						dexSync: [
							{ game: "platinum", dexType: "regional", id: 150 },
							{ game: "platinum", dexType: "national", id: 487 }
						],
					},
				],
			},
		]
	},
});
