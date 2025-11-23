PPGC.register({
	distributions: {
		diamond: [
			// 2004-03-01 - Berry Program Update Zigzagoon - USA
			{
				id: 1,
				eventTitle: "Berry Program Update Zigzagoon",
				region: ["USA"],
				name: "Zigzagoon",
				gender: "both",
				"start-date": "2004-03-01",
				"end-date": "2007-04-22",
				ball: { name: "Poke Ball", img: "imgs/balls/gen3/pokeball.png" },
				image: "imgs/sprites/gen3/diamond-pearl/shiny/263.png",
				shiny: true,
				level: 5,
				ot: ["SAPHIRE", "RUBY"],
				tid: "30317",
				ability: "Pickup",
				moves: [
					{ name: "Tackle", type: "Normal" },
					{ name: "Growl", type: "Normal" },
					{ name: "Tail Whip", type: "Normal" },
				],
				details: "This was only available in the USA at EB Games and GameStop",
				extra: ["It can also be received from the GameCube Interactive Multi-Game Demo Disc Versions 14 & 16"],
			},
		]
	},
});
