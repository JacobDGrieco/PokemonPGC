PPGC.register({
	sections: {
		firered: [
			{ id: "firered-catching", title: "Gotta Catch 'Em All" },
			{ id: "firered-extra-credit", title: "Extra Credit" },
		],
	},

	tasks: {
		"firered-catching": [
			{
				id: "firered-catching-1",
				text: "Catch all the Legendaries",
				done: false,
			},
		],
		"firered-extra-credit": [
			{
				id: "firered-extra-credit-1",
				text: "Catch all the Mythicals",
				done: false,
			},
		]
	},

	layout: {
		taskRows: {
			"firered-catching": [
				["firered-catching-1"],
			],
			"firered-extra-credit": [
				["firered-extra-credit-1"],
			],
		}
	},

	dex: {
		firered: [
			{
				id: 1,
				name: "Bulbasaur",
				img: "imgs/sprites/gen3/ruby-sapphire/normal/normal/001.png",
				imgS: "imgs/sprites/gen3/ruby-sapphire/shiny/shiny/001.png",
			},
		]
	}
});