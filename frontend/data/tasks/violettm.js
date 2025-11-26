PPGC.register({
	sections: {
		violettm: [
			{ id: "violettm-catching", title: "Gotta Catch 'Em All" },
			{ id: "violettm-story", title: "Main Story" },
			{ id: "violettm-side-quests", title: "Side Quests" },
			{ id: "violettm-battle", title: "Battle" },
			{ id: "violettm-upgrades", title: "Upgrades" }, // Move activities to here
			{ id: "violettm-collectables", title: "Collectables" },
			{ id: "violettm-fashion", title: "Fashion" },
			{ id: "violettm-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"violettm-catching": [
			{
				id: "violettm-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "violettm-catching-1-a",
						text: "Catch Ogrepon",
						done: false,
						img: "imgs/sprites/gen9/scarlet-violet/base/1017.png",
						dexSync: [
							{ game: "violettm", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
