PPGC.register({
	sections: {
		legendszamd: [
			{ id: "legendszamd-catching", title: "Gotta Catch 'Em All" },
			{ id: "legendszamd-story", title: "Main Story" },
		],
	},
	tasks: {
		"legendszamd-catching": [
			{
				id: "legendszamd-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "legendszamd-catching-1-a",
						text: "Catch Hoopa",
						done: false,
						img: "imgs/sprites/gen9/legendsza/base-icons/720.png",
						dexSync: [
							{ game: "legendszamd", dexType: "regional", id: 150 },
						],
					},
				],
			},
		]
	},
});
