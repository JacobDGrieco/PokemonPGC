PPGC.register({
	sections: {
		shiningpearl: [
			{ id: "shiningpearl-catching", title: "Gotta Catch 'Em All" },
			{ id: "shiningpearl-story", title: "Main Story" },
			{ id: "shiningpearl-side-quests", title: "Side Quests" },
			{ id: "shiningpearl-contests", title: "Contests" },
			{ id: "shiningpearl-battle", title: "Battle" },
			{ id: "shiningpearl-upgrades", title: "Upgrades" }, // Poketch Apps go here too
			{ id: "shiningpearl-collectables", title: "Collectables" },
			{ id: "shiningpearl-ball-capsules", title: "Ball Capsules" },
			{ id: "shiningpearl-fashion", title: "Fashion" },
			{ id: "shiningpearl-grand-underground", title: "Grand Underground" },
			{ id: "shiningpearl-thms", title: "TMs/HMs" },
			{ id: "shiningpearl-distributions", title: "Distributions" },
			{ id: "shiningpearl-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"shiningpearl-catching": [
			{
				id: "shiningpearl-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "shiningpearl-catching-1-a",
						text: "Catch Palkia",
						done: false,
						img: "imgs/sprites/gen8/brilliantdiamond-shiningpearl/icons/484.png",
						dexSync: [
							{ game: "shiningpearl", dexType: "regional", id: 149 },
							{ game: "shiningpearl", dexType: "national", id: 483 }
						],
					},
				],
			},
		]
	},
});