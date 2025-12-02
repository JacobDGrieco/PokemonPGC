PPGC.register({
	sections: {
		swordct: [
			{ id: "swordct-catching", title: "Gotta Catch 'Em All" },
			{ id: "swordct-story", title: "Main Story" },
			{ id: "swordct-side-quests", title: "Side Quests" },
			{ id: "swordct-gst", title: "Galarian Star Tournament" },
			{ id: "swordct-battle", title: "Battle" },
			{ id: "swordct-collectables", title: "Collectables" },
			{ id: "swordct-trainer-card", title: "Trainer Card" },
			{ id: "swordct-fashion", title: "Fashion" },
		],
	},
	tasks: {
		"swordct-catching": [
			{
				id: "swordct-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "swordct-catching-1-a",
						text: "Catch Calyrex",
						done: false,
						img: "imgs/sprites/gen8/sword-shield/base/898.png",
						dexSync: [
							{ game: "swordct", dexType: "regional", id: 150 },
						],
					},
				],
			},
		],
		"swordct-trainer-card": [
			{
				id: "swordct-trainer-card-1",
				text: "Obtain all League Card Backgrounds",
				done: false,
				children: [
					{ id: "swordct-trainer-card-1-1", text: "Freezington", done: false, img: "imgs/trainer-cards/ct/backgrounds/freezington.png" },
					{ id: "swordct-trainer-card-1-2", text: "Old Cemetery", done: false, img: "imgs/trainer-cards/ct/backgrounds/old-cemetery.png" },
					{ id: "swordct-trainer-card-1-3", text: "Old Cemetery (Grayscale)", done: false, img: "imgs/trainer-cards/ct/backgrounds/old-cemetery-grayscale.png" },
					{ id: "swordct-trainer-card-1-4", text: "Path to the Peak", done: false, img: "imgs/trainer-cards/ct/backgrounds/path-to-the-peak.png" },
					{ id: "swordct-trainer-card-1-5", text: "Crown Shrine", done: false, img: "imgs/trainer-cards/ct/backgrounds/crown-shrine.png" },
					{ id: "swordct-trainer-card-1-6", text: "Crown Shrine (Night)", done: false, img: "imgs/trainer-cards/ct/backgrounds/crown-shrine-night.png" },
					{ id: "swordct-trainer-card-1-7", text: "Crown Shrine (Tree)", done: false, img: "imgs/trainer-cards/ct/backgrounds/crown-shrine-tree.png" },
					{ id: "swordct-trainer-card-1-8", text: "Frigid Sea", done: false, img: "imgs/trainer-cards/ct/backgrounds/frigid-sea.png" },
					{ id: "swordct-trainer-card-1-9", text: "Dyna Tree Hill", done: false, img: "imgs/trainer-cards/ct/backgrounds/dyna-tree-hill.png" },
					{ id: "swordct-trainer-card-1-10", text: "Dyna Tree Hill (Night)", done: false, img: "imgs/trainer-cards/ct/backgrounds/dyna-tree-hill-night.png" },
					{ id: "swordct-trainer-card-1-11", text: "Rock Peak Ruins", done: false, img: "imgs/trainer-cards/ct/backgrounds/rock-peak-ruins.png" },
					{ id: "swordct-trainer-card-1-12", text: "Iceberg Ruins", done: false, img: "imgs/trainer-cards/ct/backgrounds/iceberg-ruins.png" },
					{ id: "swordct-trainer-card-1-13", text: "Iron Ruins", done: false, img: "imgs/trainer-cards/ct/backgrounds/iron-ruins.png" },
					{ id: "swordct-trainer-card-1-14", text: "SplitDecis-Ruins", done: false, img: "imgs/trainer-cards/ct/backgrounds/splitdecis-ruins.png" },
					{ id: "swordct-trainer-card-1-15", text: "Expedition Team (Logo)", done: false, img: "imgs/trainer-cards/ct/backgrounds/expedition-team-logo.png" },
					{ id: "swordct-trainer-card-1-16", text: "Champion Cup", done: false, img: "imgs/trainer-cards/ct/backgrounds/champion-cup.png" },
					{ id: "swordct-trainer-card-1-17", text: "Galarian Star Tournament", done: false, img: "imgs/trainer-cards/ct/backgrounds/galarian-star-tournament.png" },
					{ id: "swordct-trainer-card-1-18", text: "Turrfield Symbol", done: false, img: "imgs/trainer-cards/ct/backgrounds/turrfield-symbol.png" },
					{ id: "swordct-trainer-card-1-19", text: "Hulbury Symbol", done: false, img: "imgs/trainer-cards/ct/backgrounds/hulbury-symbol.png" },
					{ id: "swordct-trainer-card-1-20", text: "Motostoke Symbol", done: false, img: "imgs/trainer-cards/ct/backgrounds/motostoke-symbol.png" },
					{ id: "swordct-trainer-card-1-21", text: "Stow-on-Side Symbol (Fighting)", done: false, img: "imgs/trainer-cards/ct/backgrounds/stow-on-side-symbol-fighting.png" },
					{ id: "swordct-trainer-card-1-22", text: "Ballonlea Symbol", done: false, img: "imgs/trainer-cards/ct/backgrounds/ballonlea-symbol.png" },
					{ id: "swordct-trainer-card-1-23", text: "Circhester Symbol (Rock)", done: false, img: "imgs/trainer-cards/ct/backgrounds/circhester-symbol-rock.png" },
					{ id: "swordct-trainer-card-1-24", text: "Spikemuth Symbol", done: false, img: "imgs/trainer-cards/ct/backgrounds/spikemuth-symbol.png" },
					{ id: "swordct-trainer-card-1-25", text: "Hammerlocke Symbol", done: false, img: "imgs/trainer-cards/ct/backgrounds/hammerlocke-symbol.png" },
					{ id: "swordct-trainer-card-1-26", text: "Klara Symbol", done: false, img: "imgs/trainer-cards/ct/backgrounds/klara-symbol.png" },
					{ id: "swordct-trainer-card-1-27", text: "White", done: false, img: "imgs/trainer-cards/ct/backgrounds/white.png" },
					{ id: "swordct-trainer-card-1-28", text: "Black", done: false, img: "imgs/trainer-cards/ct/backgrounds/black.png" },
					{ id: "swordct-trainer-card-1-29", text: "Blue", done: false, img: "imgs/trainer-cards/ct/backgrounds/blue.png" },
					{ id: "swordct-trainer-card-1-30", text: "Red", done: false, img: "imgs/trainer-cards/ct/backgrounds/red.png" },
					{ id: "swordct-trainer-card-1-31", text: "Yellow", done: false, img: "imgs/trainer-cards/ct/backgrounds/yellow.png" },
					{ id: "swordct-trainer-card-1-32", text: "Green", done: false, img: "imgs/trainer-cards/ct/backgrounds/green.png" },
				]
			},
			{
				id: "swordct-trainer-card-2",
				text: "Obtain all League Card Effects",
				done: false,
				children: [
					{ id: "swordct-trainer-card-2-1", text: "Effect 24", done: false, img: "imgs/trainer-cards/ct/effects/25.png" },
					{ id: "swordct-trainer-card-2-2", text: "Effect 25", done: false, img: "imgs/trainer-cards/ct/effects/26.png" },
					{ id: "swordct-trainer-card-2-3", text: "Effect 26", done: false, img: "imgs/trainer-cards/ct/effects/27.png" },
				]
			},
			{
				id: "swordct-trainer-card-3",
				text: "Obtain all League Card Frames",
				done: false,
				children: [
					{ id: "swordct-trainer-card-3-1", text: "Frame 22", done: false, img: "imgs/trainer-cards/ct/frames/24.png" },
					{ id: "swordct-trainer-card-3-2", text: "Frame 23", done: false, img: "imgs/trainer-cards/ct/frames/25.png" },
					{ id: "swordct-trainer-card-3-3", text: "Frame 24", done: false, img: "imgs/trainer-cards/ct/frames/26.png" },
				]
			},
		],
	},
});
