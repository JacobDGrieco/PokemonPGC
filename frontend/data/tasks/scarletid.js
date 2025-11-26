PPGC.register({
	sections: {
		scarletid: [
			{ id: "scarletid-catching", title: "Gotta Catch 'Em All" },
			{ id: "scarletid-story", title: "Main Story" },
			{ id: "scarletid-side-quests", title: "Side Quests" },
			{ id: "scarletid-activities", title: "Activities" },
			{ id: "scarletid-battle", title: "Battle" },
			{ id: "scarletid-upgrades", title: "Upgrades" }, // move Koraidon fly to here
			{ id: "scarletid-collectables", title: "Collectables" },
			{ id: "scarletid-fashion", title: "Fashion" },
			{ id: "scarletid-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"scarletid-catching": [
			{
				id: "scarletid-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "scarletid-catching-1-a",
						text: "Catch Terapagos",
						done: false,
						img: "imgs/sprites/gen9/scarlet-violet/base/1024-t.png",
						dexSync: [
							{ game: "scarletid", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
