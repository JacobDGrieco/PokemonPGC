PPGC.register({
	sections: {
		legendszamd: [
			{ id: "legendszamd-catching", title: "Gotta Catch 'Em All" },
			{ id: "legendszamd-story", title: "Main Story" },
			{ id: "legendszamd-side-quests", title: "Side Quests" },
			{ id: "legendszamd-mega-stones", title: "Mega Stones" },
			{ id: "legendszamd-fashion", title: "Fashion" },
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
		],
		"legendszamd-side-quests": [
			{
				id: "legendszamd-side-quests-1",
				text: "EX Quest EX1 - Shine Bright Like a Gemstone",
				done: false,
				dexSync: [{ game: "legendsza", dexType: "regional", id: 241 }],
			},
			{
				id: "legendszamd-side-quests-2",
				text: "EX Quest EX2 - Project M",
				done: false,
				dexSync: [{ game: "legendsza", dexType: "regional", id: 242 }],
			},
		],
		"legendszamd-mega-stones": [
			{
				id: "legendszamd-mega-stones-1",
				text: "Diancite",
				done: false,
				img: ["imgs/sprites/gen9/legendsza/base-icons/719-m.png", "imgs/mega-stones/gen9_2/diancite.png"],
			},
			{
				id: "legendszamd-mega-stones-2",
				text: "Mewtwonite X",
				done: false,
				img: ["imgs/sprites/gen9/legendsza/base-icons/150-mx.png", "imgs/mega-stones/gen9_2/mewtwonite-x.png"],
			},
			{
				id: "legendszamd-mega-stones-3",
				text: "Mewtownite Y",
				done: false,
				img: ["imgs/sprites/gen9/legendsza/base-icons/150-my.png", "imgs/mega-stones/gen9_2/mewtwonite-y.png"],
			},
		],
	},
});
