PPGC.register({
	sections: {
		violetid: [
			{ id: "violetid-catching", title: "Gotta Catch 'Em All" },
			{ id: "violetid-story", title: "Main Story" },
			{ id: "violetid-side-quests", title: "Side Quests" },
			{ id: "violetid-activities", title: "Activities" },
			{ id: "violetid-battle", title: "Battle" },
			{ id: "violetid-upgrades", title: "Upgrades" }, // move Koraidon fly to here
			{ id: "violetid-collectables", title: "Collectables" },
			{ id: "violetid-fashion", title: "Fashion" },
			{ id: "violetid-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"violetid-catching": [
			{
				id: "violetid-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "violetid-catching-1-a",
						text: "Catch Terapagos",
						done: false,
						img: "imgs/sprites/gen9/scarlet-violet/base/1024-t.png",
						dexSync: [
							{ game: "violetid", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
