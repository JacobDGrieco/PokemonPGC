PPGC.register({
	sections: {
		shieldioa: [
			{ id: "shieldioa-catching", title: "Gotta Catch 'Em All" },
			{ id: "shieldioa-story", title: "Main Story" },
			{ id: "shieldioa-side-quests", title: "Side Quests" },
			{ id: "shieldioa-battle", title: "Battle" },
			{ id: "shieldioa-upgrades", title: "Upgrades" },
			{ id: "shieldioa-collectables", title: "Collectables" },
			{ id: "shieldioa-trainer-card", title: "Trainer Card" },
			{ id: "shieldioa-fashion", title: "Fashion" },
		],
	},
	tasks: {
		"shieldioa-catching": [
			{
				id: "shieldioa-catching-1",
				text: "Catch all the Legendaries",
				done: false,
				children: [
					{
						id: "shieldioa-catching-1-a",
						text: "Catch Urshifu",
						done: false,
						img: "imgs/sprites/gen8/sword-shield/base/892.png",
						dexSync: [
							{ game: "shieldioa", dexType: "regional", id: 150 },
						],
					},
				],
			},
		],
		"shieldioa-trainer-card": [
			{
				id: "shieldioa-trainer-card-1",
				text: "Obtain all League Card Backgrounds",
				done: false,
				children: [
					{ id: "shieldioa-trainer-card-1-1", text: "Master Dojo (Kitchen)", done: false, img: "imgs/trainer-cards/ioa/backgrounds/master-dojo-kitchen.png" },
					{ id: "shieldioa-trainer-card-1-2", text: "Master Dojo", done: false, img: "imgs/trainer-cards/ioa/backgrounds/master-dojo.png" },
					{ id: "shieldioa-trainer-card-1-3", text: "Master Dojo (Night)", done: false, img: "imgs/trainer-cards/ioa/backgrounds/master-dojo-night.png" },
					{ id: "shieldioa-trainer-card-1-4", text: "Master Dojo (Path)", done: false, img: "imgs/trainer-cards/ioa/backgrounds/master-dojo-path.png" },
					{ id: "shieldioa-trainer-card-1-5", text: "Master Dojo (Dojo)", done: false, img: "imgs/trainer-cards/ioa/backgrounds/master-dojo-dojo.png" },
					{ id: "shieldioa-trainer-card-1-6", text: "Cram-o-matic", done: false, img: "imgs/trainer-cards/ioa/backgrounds/cram-o-matic.png" },
					{ id: "shieldioa-trainer-card-1-7", text: "Tower of Darkness/Waters", done: false, img: ["imgs/trainer-cards/ioa/backgrounds/tower-of-darkness.png", "imgs/trainer-cards/ioa/backgrounds/tower-of-water.png"] },
					{ id: "shieldioa-trainer-card-1-8", text: "Tower of Darkness/Waters (Night)", done: false, img: ["imgs/trainer-cards/ioa/backgrounds/tower-of-darkness-night.png", "imgs/trainer-cards/ioa/backgrounds/tower-of-water-night.png"] },
					{ id: "shieldioa-trainer-card-1-9", text: "Soothing Wetlands", done: false, img: "imgs/trainer-cards/ioa/backgrounds/soothing-wetlands.png" },
					{ id: "shieldioa-trainer-card-1-10", text: "Soothing Wetlands (Night)", done: false, img: "imgs/trainer-cards/ioa/backgrounds/soothing-wetlands-night.png" },
					{ id: "shieldioa-trainer-card-1-11", text: "Loop Lagoon", done: false, img: "imgs/trainer-cards/ioa/backgrounds/loop-lagoon.png" },
					{ id: "shieldioa-trainer-card-1-12", text: "Loop Lagoon (Night)", done: false, img: "imgs/trainer-cards/ioa/backgrounds/loop-lagoon-night.png" },
					{ id: "shieldioa-trainer-card-1-13", text: "Workout Sea", done: false, img: "imgs/trainer-cards/ioa/backgrounds/workout-sea.png" },
					{ id: "shieldioa-trainer-card-1-14", text: "Workout Sea (Night)", done: false, img: "imgs/trainer-cards/ioa/backgrounds/workout-sea-night.png" },
					{ id: "shieldioa-trainer-card-1-15", text: "Forest of Focus", done: false, img: "imgs/trainer-cards/ioa/backgrounds/forest-of-focus.png" },
					{ id: "shieldioa-trainer-card-1-16", text: "Forest of Focus (Night)", done: false, img: "imgs/trainer-cards/ioa/backgrounds/forest-of-focus-night.png" },
					{ id: "shieldioa-trainer-card-1-17", text: "Potbottom Desert", done: false, img: "imgs/trainer-cards/ioa/backgrounds/potbottom-desert.png" },
					{ id: "shieldioa-trainer-card-1-18", text: "Potbottom Desert (Night)", done: false, img: "imgs/trainer-cards/ioa/backgrounds/potbottom-desert-night.png" },
					{ id: "shieldioa-trainer-card-1-19", text: "Honeycalm Island", done: false, img: "imgs/trainer-cards/ioa/backgrounds/honeycalm-island.png" },
					{ id: "shieldioa-trainer-card-1-20", text: "Honeycalm Island (Night)", done: false, img: "imgs/trainer-cards/ioa/backgrounds/honeycalm-island-night.png" },
					{ id: "shieldioa-trainer-card-1-21", text: "Master Dojo (Logo)", done: false, img: "imgs/trainer-cards/ioa/backgrounds/master-dojo-logo.png" },
				]
			},
			{
				id: "shieldioa-trainer-card-2",
				text: "Obtain all League Card Effects",
				done: false,
				children: [
					{ id: "shieldioa-trainer-card-2-1", text: "Effect 21", done: false, img: "imgs/trainer-cards/ioa/effects/22.png" },
					{ id: "shieldioa-trainer-card-2-2", text: "Effect 22", done: false, img: "imgs/trainer-cards/ioa/effects/23.png" },
					{ id: "shieldioa-trainer-card-2-3", text: "Effect 23", done: false, img: "imgs/trainer-cards/ioa/effects/24.png" },
				]
			},
			{
				id: "shieldioa-trainer-card-3",
				text: "Obtain all League Card Frames",
				done: false,
				children: [
					{ id: "shieldioa-trainer-card-3-1", text: "Frame 18", done: false, img: "imgs/trainer-cards/ioa/frames/20.png" },
					{ id: "shieldioa-trainer-card-3-2", text: "Frame 19", done: false, img: "imgs/trainer-cards/ioa/frames/21.png" },
					{ id: "shieldioa-trainer-card-3-3", text: "Frame 20", done: false, img: "imgs/trainer-cards/ioa/frames/22.png" },
					{ id: "shieldioa-trainer-card-3-4", text: "Frame 21", done: false, img: "imgs/trainer-cards/ioa/frames/23.png" },
				]
			},
		],
	},
});
