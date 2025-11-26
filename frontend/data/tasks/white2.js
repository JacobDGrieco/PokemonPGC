PPGC.register({
	sections: {
		white2: [
			{ id: "white2-catching", title: "Gotta Catch 'Em All" },
			{ id: "white2-story", title: "Main Story" },
			{ id: "white2-funfest", title: "Funfest Missions" },
			{ id: "white2-activities", title: "Activities" },
			{ id: "white2-battle", title: "Battle" },
			{ id: "white2-upgrades", title: "Upgrades" },
			{ id: "white2-collectables", title: "Collectables" },
			{ id: "white2-medals", title: "Medals" },
			{ id: "white2-thms", title: "TMs/HMs" },
			{ id: "white2-distributions", title: "Distributions" },
			{ id: "white2-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"white2-catching": [
			{
				id: "white2-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "white2-catching-1-a",
						text: "Catch Reshiram",
						done: false,
						img: "imgs/sprites/gen5/base/643.png",
						dexSync: [
							{ game: "white2", dexType: "regional", id: 150 },
							{ game: "white2", dexType: "national", id: 249 }
						],
					},
				],
			},
		]
	},
});
