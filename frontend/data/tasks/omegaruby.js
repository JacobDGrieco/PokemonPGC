PPGC.register({
	sections: {
		omegaruby: [
			{ id: "omegaruby-catching", title: "Gotta Catch 'Em All" },
			{ id: "omegaruby-story", title: "Main Story" },
			{ id: "omegaruby-side-quests", title: "Side Quests" },
			{ id: "omegaruby-activities", title: "Activities" },
			{ id: "omegaruby-battle", title: "Battle" },
			{ id: "omegaruby-upgrades", title: "Upgrades" },
			{ id: "omegaruby-collectables", title: "Collectables" },
			{ id: "omegaruby-mega-stones", title: "Mega Stones" },
			{ id: "omegaruby-thms", title: "TMs/HMs" },
			{ id: "omegaruby-distributions", title: "Distributions" },
			{ id: "omegaruby-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"omegaruby-catching": [
			{
				id: "omegaruby-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "omegaruby-catching-1-a",
						text: "Catch Groudon",
						done: false,
						img: "imgs/sprites/gen6/base/383.png",
						dexSync: [
							{ game: "omegaruby", dexType: "regional", id: 150 },
							{ game: "omegaruby", dexType: "national", id: 249 }
						],
					},
				],
			},
		]
	},
});
