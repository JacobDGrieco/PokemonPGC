PPGC.register({
	sections: {
		letsgoeevee: [
			{ id: "letsgoeevee-catching", title: "Gotta Catch 'Em All" },
			{ id: "letsgoeevee-story", title: "Main Story" },
			{ id: "letsgoeevee-battle", title: "Battle" },
			{ id: "letsgoeevee-upgrades", title: "Upgrades" },
			{ id: "letsgoeevee-collectables", title: "Collectables" },
			{ id: "letsgoeevee-fashion", title: "Fashion" },
			{ id: "letsgoeevee-mega-stones", title: "Mega Stones" },
			{ id: "letsgoeevee-thms", title: "TMs/STs" },
			{ id: "letsgoeevee-distributions", title: "Distributions" },
			{ id: "letsgoeevee-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"letsgoeevee-catching": [
			{
				id: "letsgoeevee-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "letsgoeevee-catching-1-a",
						text: "Catch Mewtwo",
						done: false,
						img: "imgs/sprites/gen7/lgpe/base/150.png",
						dexSync: [
							{ game: "letsgoeevee", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
