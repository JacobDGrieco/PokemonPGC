PPGC.register({
	sections: {
		home: [
			{ id: "home-catching", title: "Gotta Catch 'Em All" },
			{ id: "home-mobile", title: "Mobile Challenges" },
			{ id: "home-research", title: "Research Tasks" },
			{ id: "home-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"home-catching": [
			{
				id: "home-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "home-catching-1-a",
						text: "Obtain Magerna",
						done: false,
						img: "imgs/sprites/pokemon_home/base/801-o.png",
						dexSync: [
							{ game: "home", dexType: "national", id: 150 },
						],
					},
				],
			},
		]
	},
});
