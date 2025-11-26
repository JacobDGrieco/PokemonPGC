PPGC.register({
	sections: {
		firered: [
			{ id: "firered-catching", title: "Gotta Catch 'Em All" },
			{ id: "firered-story", title: "Main Story" },
			{ id: "firered-battle", title: "Battle" },
			{ id: "firered-upgrades", title: "Upgrades" },
			{ id: "firered-collectables", title: "Collectables" },
			{ id: "firered-thms", title: "TMs/HMs" },
			{ id: "firered-distributions", title: "Distributions" },
			{ id: "firered-extra-credit", title: "Extra Credit" },
		],
	},

	tasks: {
		"firered-catching": [
			{
				id: "firered-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "firered-catching-1-a",
						text: "Catch Mewtwo",
						done: false,
						img: "imgs/sprites/gen3/firered-leafgreen/base/150.png",
						dexSync: [
							{ game: "firered", dexType: "regional", id: 150 },
							{ game: "firered", dexType: "national", id: 150 }
						],
					},
				],
			},
		]
	},
});
