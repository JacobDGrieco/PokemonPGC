PPGC.register({
	sections: {
		leafgreen: [
			{ id: "leafgreen-catching", title: "Gotta Catch 'Em All" },
			{ id: "leafgreen-story", title: "Main Story" },
			{ id: "leafgreen-battle", title: "Battle" },
			{ id: "leafgreen-upgrades", title: "Upgrades" },
			{ id: "leafgreen-collectables", title: "Collectables" },
			{ id: "leafgreen-thms", title: "TMs/HMs" },
			{ id: "leafgreen-distributions", title: "Distributions" },
			{ id: "leafgreen-extra-credit", title: "Extra Credit" },
		],
	},

	tasks: {
		"leafgreen-catching": [
			{
				id: "leafgreen-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "leafgreen-catching-1-a",
						text: "Catch Mewtwo",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/150.png",
						dexSync: [
							{ game: "leafgreen", dexType: "regional", id: 150 },
							{ game: "leafgreen", dexType: "national", id: 150 }
						],
					},
				],
			},
		]
	},
});
