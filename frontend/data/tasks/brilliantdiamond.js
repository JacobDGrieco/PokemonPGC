PPGC.register({
	sections: {
		brilliantdiamond: [
			{ id: "brilliantdiamond-catching", title: "Gotta Catch 'Em All" },
			{ id: "brilliantdiamond-story", title: "Main Story" },
			{ id: "brilliantdiamond-side-quests", title: "Side Quests" },
			{ id: "brilliantdiamond-contests", title: "Contests" },
			{ id: "brilliantdiamond-battle", title: "Battle" },
			{ id: "brilliantdiamond-upgrades", title: "Upgrades" }, // Poketch Apps go here too
			{ id: "brilliantdiamond-collectables", title: "Collectables" },
			{ id: "brilliantdiamond-ball-capsules", title: "Ball Capsules" },
			{ id: "brilliantdiamond-fashion", title: "Fashion" },
			{ id: "brilliantdiamond-grand-underground", title: "Grand Underground" },
			{ id: "brilliantdiamond-thms", title: "TMs/HMs" },
			{ id: "brilliantdiamond-distributions", title: "Distributions" },
			{ id: "brilliantdiamond-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"brilliantdiamond-catching": [
			{
				id: "brilliantdiamond-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "brilliantdiamond-catching-1-a",
						text: "Catch Dialga",
						done: false,
						img: "imgs/sprites/gen8/brilliantdiamond-shiningpearl/icons/483.png",
						dexSync: [
							{ game: "brilliantdiamond", dexType: "regional", id: 149 },
							{ game: "brilliantdiamond", dexType: "national", id: 483 }
						],
					},
				],
			},
		]
	},
});