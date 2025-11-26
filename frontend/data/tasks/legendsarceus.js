PPGC.register({
	sections: {
		legendsarceus: [
			{ id: "legendsarceus-catching", title: "Gotta Catch 'Em All" },
			{ id: "legendsarceus-story", title: "Main Story" },
			{ id: "legendsarceus-side-quests", title: "Side Quests" },
			{ id: "legendsarceus-battle", title: "Battle" },
			{ id: "legendsarceus-upgrades", title: "Upgrades" },
			{ id: "legendsarceus-collectables", title: "Collectables" },
			{ id: "legendsarceus-fashion", title: "Fashion" },
			{ id: "legendsarceus-hms", title: "Ride Pokemon" },
			{ id: "legendsarceus-distributions", title: "Distributions" },
			{ id: "legendsarceus-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"legendsarceus-catching": [
			{
				id: "legendsarceus-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "legendsarceus-catching-1-a",
						text: "Catch Arceus",
						done: false,
						img: "imgs/sprites/gen8/legendsarceus/base_icons/493.png",
						dexSync: [
							{ game: "legendsarceus", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
