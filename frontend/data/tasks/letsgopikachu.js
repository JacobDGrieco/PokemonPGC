PPGC.register({
	sections: {
		letsgopikachu: [
			{ id: "letsgopikachu-catching", title: "Gotta Catch 'Em All" },
			{ id: "letsgopikachu-story", title: "Main Story" },
			{ id: "letsgopikachu-battle", title: "Battle" },
			{ id: "letsgopikachu-upgrades", title: "Upgrades" },
			{ id: "letsgopikachu-collectables", title: "Collectables" },
			{ id: "letsgopikachu-fashion", title: "Fashion" },
			{ id: "letsgopikachu-mega-stones", title: "Mega Stones" },
			{ id: "letsgopikachu-thms", title: "TMs/STs" },
			{ id: "letsgopikachu-distributions", title: "Distributions" },
			{ id: "letsgopikachu-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"letsgopikachu-catching": [
			{
				id: "letsgopikachu-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "letsgopikachu-catching-1-a",
						text: "Catch Mewtwo",
						done: false,
						img: "imgs/sprites/gen7/lgpe/base/150.png",
						dexSync: [
							{ game: "letsgopikachu", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
