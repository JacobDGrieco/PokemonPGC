// Gen & Game
const gen = "9_2";
const game = "legendsza";

// Local wrappers
const regionalDex = (id) => _dex(game, "regional", id);
const baseSprite = (id) => _sprite(game, false, id);
const baseSpriteIcon = (id) => _sprite(game, false, id, true);
const shinySprite = (id) => _sprite(game, true, id);
const shinySpriteIcon = (id) => _sprite(game, true, id, true);
const task = (id) => _task(game, id);
const npc = (id) => _npc(game, id);
const location = (id) => _location(game, id);
const item = (id) => _item(game, id);
const hm = (type) => _hm(gen, type);
const tm = (type) => _tm(gen, type);

// Categories
const catching = game + "-catching";
const story = game + "-story";
const sideQuests = game + "-side-quests";
const upgrades = game + "-upgrades";
const collectables = game + "-collectables";
const thms = game + "-thms";
const extraCredit = game + "-extra-credit";

// Data
PPGC.register({
	sections: {
		[game]: [
			{ id: "legendsza-catching", title: "Gotta Catch 'Em All" },
			{ id: "legendsza-story", title: "Main Story" },
			{ id: "legendsza-side-quests", title: "Side Quests" },
			{ id: "legendsza-mabels-research", title: "Mabel's Research" },
			{ id: "legendsza-activities", title: "Activities" },
			{ id: "legendsza-battle", title: "Battle" },
			{ id: "legendsza-upgrades", title: "Upgrades" },
			{ id: "legendsza-collectables", title: "Collectables" },
			{ id: "legendsza-mega-stones", title: "Mega Stones" },
			{ id: "legendsza-fashion", title: "Fashion" },
			{ id: "legendsza-tms", title: "TMs" },
			{ id: "legendsza-distributions", title: "Distributions" },
			{ id: "legendsza-extra-credit", title: "Extra Credit" },
		],
	},
	tasks: {
		"legendsza-catching": [
			{
				id: "legendsza-catching-1",
				text: "Catch all the Legendaries",
				children: [
					{
						id: "legendsza-catching-1-a",
						text: "Catch Xerneas",
						img: baseSpriteIcon(716),
						taskSync: ["legendsza-story-2-b"],
						dexSync: [{ game: "legendsza", dexType: "regional", id: 228 }],
					},
					{
						id: "legendsza-catching-1-b",
						text: "Catch Yveltal",
						img: baseSpriteIcon(717),
						taskSync: ["legendsza-story-2-c"],
						dexSync: [{ game: "legendsza", dexType: "regional", id: 229 }],
					},
					{
						id: "legendsza-catching-1-c",
						text: "Catch Zygarde",
						img: baseSpriteIcon(718),
						taskSync: ["legendsza-story-2-d"],
						dexSync: [{ game: "legendsza", dexType: "regional", id: 230 }],
					},
				],
			},
			{
				id: "legendsza-catching-2",
				text: "Obtain all In-Game Gift Pokémon",
				children: [
					{
						id: "legendsza-catching-2-a",
						text: "Absol",
						img: "imgs/sprites/gen9/legendsza/base-icons/359.png",
					},
					{
						id: "legendsza-catching-2-b",
						text: "Chespin",
						img: "imgs/sprites/gen9/legendsza/base-icons/650.png",
						taskSync: ["legendsza-side-quests-7"],
					},
					{
						id: "legendsza-catching-2-c",
						text: "Fennekin",
						img: "imgs/sprites/gen9/legendsza/base-icons/653.png",
						taskSync: ["legendsza-side-quests-8"],
					},
					{
						id: "legendsza-catching-2-d",
						text: "Froakie",
						img: "imgs/sprites/gen9/legendsza/base-icons/656.png",
						taskSync: ["legendsza-side-quests-9"],
					},
					{
						id: "legendsza-catching-2-e",
						text: "Spewpa",
						img: "imgs/sprites/gen9/legendsza/base-icons/665.png",
						taskSync: ["legendsza-side-quests-21"],
					},
					{
						id: "legendsza-catching-2-f",
						text: "Kanto Starter",
						img: "imgs/task-imgs/gen9/legendsza/kanto_starters.png",
						taskSync: ["legendsza-side-quests-22"],
					},
					{
						id: "legendsza-catching-2-g",
						text: "Galarian Stunfisk",
						img: "imgs/sprites/gen9/legendsza/base-icons/618-g.png",
						taskSync: ["legendsza-side-quests-72"],
						dexSync: [
							{
								game: "legendsza",
								dexType: "regional",
								id: 157,
								form: "Galarian",
							},
						],
					},
					{
						id: "legendsza-catching-2-h",
						text: "Lucario",
						img: "imgs/sprites/gen9/legendsza/base-icons/448.png",
					},
					{
						id: "legendsza-catching-2-i",
						text: "AZ's Floette",
						img: "imgs/sprites/gen9/legendsza/base-icons/670-e.png",
						taskSync: ["legendsza-story-2-a", "legendsza-mega-stones-26"],
						dexSync: [
							{
								game: "legendsza",
								dexType: "regional",
								id: 39,
								form: "Eternal Flower",
							},
						],
					},
				],
			},
			{
				id: "legendsza-catching-3",
				text: "Complete all In-Game Trades",
				children: [
					{
						id: "legendsza-catching-3-a",
						text: "Pichu for Heracross",
						img: "imgs/task-imgs/gen9/legendsza/pichu-for-heracross.png",
						taskSync: ["legendsza-side-quests-2"],
					},
					{
						id: "legendsza-catching-3-b",
						text: "Abra for Riolu",
						img: "imgs/task-imgs/gen9/legendsza/abra-for-riolu.png",
						taskSync: ["legendsza-side-quests-24"],
					},
					{
						id: "legendsza-catching-3-c",
						text: "Kantonian Slowpoke for Galarian Slowpoke",
						img: "imgs/task-imgs/gen9/legendsza/slowpoke-for-slowpoke.png",
						taskSync: ["legendsza-side-quests-39"],
						dexSync: [
							{
								game: "legendsza",
								dexType: "regional",
								id: 137,
								form: "Galarian",
							},
						],
					},
					{
						id: "legendsza-catching-3-d",
						text: "Kantonian Raichu for Alolan Raichu",
						img: "imgs/task-imgs/gen9/legendsza/raichu-for-raichu.png",
						taskSync: ["legendsza-side-quests-108"],
						dexSync: [
							{
								game: "legendsza",
								dexType: "regional",
								id: 54,
								form: "Alolan",
							},
						],
					},
				],
			},
		],
		"legendsza-story": [
			{
				id: "legendsza-story-1",
				text: "Complete the first 38 Main Missions",
				taskSync: ["legendsza-catching-1-b"],
				noCenter: true,
			},
			{
				id: "legendsza-story-2",
				text: "Epilogue",
				children: [
					{
						id: "legendsza-story-2-a",
						text: "Main Mission 39 - The Infinite Z-A Royale",
						taskSync: ["legendsza-catching-2-i", "legendsza-mega-stones-26"],
						dexSync: [
							{
								game: "legendsza",
								dexType: "regional",
								id: 39,
								form: "Eternal Flower",
							},
						],
					},
					{
						id: "legendsza-story-2-b",
						text: "Main Mission 40 - The One That Gives",
						taskSync: ["legendsza-catching-1-a"],
						dexSync: [{ game: "legendsza", dexType: "regional", id: 228 }],
					},
					{
						id: "legendsza-story-2-c",
						text: "Main Mission 41 - The One That Takes",
						taskSync: ["legendsza-catching-1-b"],
						dexSync: [{ game: "legendsza", dexType: "regional", id: 229 }],
					},
					{
						id: "legendsza-story-2-d",
						text: "Main Mission 42 - To Keep the World in Balance",
						taskSync: ["legendsza-catching-1-c"],
						dexSync: [{ game: "legendsza", dexType: "regional", id: 230 }],
					},
				],
			},
		],
		"legendsza-side-quests": [
			{
				id: "legendsza-side-quests-1",
				text: "01 - A Big Ol' Bunnelby",
			},
			{
				id: "legendsza-side-quests-2",
				text: "02 - A Use for an Evolution Stone",
				taskSync: ["legendsza-catching-3-a"],
			},
			{
				id: "legendsza-side-quests-3",
				text: "03 - Sableye in the Cemetery",
			},
			{
				id: "legendsza-side-quests-4",
				text: "04 - A Break Time Battle",
			},
			{
				id: "legendsza-side-quests-5",
				text: "05 - I'd Like to See an Ekans",
			},
			{
				id: "legendsza-side-quests-6",
				text: "06 - Long-Range Moves Have Style",
			},
			{
				id: "legendsza-side-quests-7",
				text: "07 - A Feisty Chespin",
				taskSync: ["legendsza-catching-2-b"],
			},
			{
				id: "legendsza-side-quests-8",
				text: "08 - Get Well, Fennekin",
				taskSync: ["legendsza-catching-2-c"],
			},
			{
				id: "legendsza-side-quests-9",
				text: "09 - A Challenge from Froakie",
				taskSync: ["legendsza-catching-2-d"],
			},
			{
				id: "legendsza-side-quests-10",
				text: "10 - Skiddo's Fragrant Leaves",
			},
			{
				id: "legendsza-side-quests-11",
				text: "11 - The Kakuna Master",
			},
			{
				id: "legendsza-side-quests-12",
				text: "12 - The Many Flowers of Flabébé",
			},
			{
				id: "legendsza-side-quests-13",
				text: "13 - Stumped at the Fountain",
			},
			{
				id: "legendsza-side-quests-14",
				text: "14 - Slurpuff's Café Visit",
			},
			{
				id: "legendsza-side-quests-15",
				text: "15 - A Sensitive Audino",
			},
			{
				id: "legendsza-side-quests-16",
				text: "16 - The Budew Show",
			},
			{
				id: "legendsza-side-quests-17",
				text: "17 - A Shiny Mareep",
			},
			{
				id: "legendsza-side-quests-18",
				text: "18 - A Pan-tastic Pot of Tea",
			},
			{
				id: "legendsza-side-quests-19",
				text: "19 - Poisonous, Paralyzing Strategies",
			},
			{
				id: "legendsza-side-quests-20",
				text: "20 - A Berry Clever Plan",
			},
			{
				id: "legendsza-side-quests-21",
				text: "21 - Spewpa in the Museum",
				taskSync: ["legendsza-catching-2-e"],
			},
			{
				id: "legendsza-side-quests-22",
				text: "22 - A Call from Mable",
				taskSync: ["legendsza-catching-2-f"],
			},
			{
				id: "legendsza-side-quests-23",
				text: "23 - Underneath the Holovator",
			},
			{
				id: "legendsza-side-quests-24",
				text: "24 - An Abra Playmate",
				taskSync: ["legendsza-catching-3-b"],
			},
			{
				id: "legendsza-side-quests-25",
				text: "25 - Trubblesome Patrons",
			},
			{
				id: "legendsza-side-quests-26",
				text: "26 - Burn, Litleo, Burn",
				taskSync: ["legendsza-tms-57"],
			},
			{
				id: "legendsza-side-quests-27",
				text: "27 - Restored from a Fossil",
			},
			{
				id: "legendsza-side-quests-28",
				text: "28 - Who Says Normal Is Weak",
			},
			{
				id: "legendsza-side-quests-29",
				text: "29 - Full Course of Battles: One Star",
				taskSync: ["legendsza-tms-85"],
			},
			{
				id: "legendsza-side-quests-30",
				text: "30 - Show Me a Mega Camerupt",
			},
			{
				id: "legendsza-side-quests-31",
				text: "31 - Show Me a Mega Sableye",
			},
			{
				id: "legendsza-side-quests-32",
				text: "32 - Show Me a Mega Medicham",
			},
			{
				id: "legendsza-side-quests-33",
				text: "33 - Who Has the Bigger Magikarp",
			},
			{
				id: "legendsza-side-quests-34",
				text: "34 - Moves That Put Up a Wall",
				taskSync: ["legendsza-tms-31"],
			},
			{
				id: "legendsza-side-quests-35",
				text: "35 - Guidance from a Yoga Master",
			},
			{
				id: "legendsza-side-quests-36",
				text: "36 - Some Friendly Competition",
			},
			{
				id: "legendsza-side-quests-37",
				text: "37 - Binacle by the Boatload",
			},
			{
				id: "legendsza-side-quests-38",
				text: "38 - Chasing Status",
			},
			{
				id: "legendsza-side-quests-39",
				text: "39 - Slowpoke for Slowpoke",
				taskSync: ["legendsza-catching-3-c"],
			},
			{
				id: "legendsza-side-quests-40",
				text: "40 - A Holovator Without Power",
			},
			{
				id: "legendsza-side-quests-41",
				text: "41 - Watch Out for Traps",
				taskSync: ["legendsza-tms-88"],
			},
			{
				id: "legendsza-side-quests-42",
				text: "42 - A Fan of Fairy Types",
			},
			{
				id: "legendsza-side-quests-43",
				text: "43 - A Big Weedle Problem",
			},
			{
				id: "legendsza-side-quests-44",
				text: "44 - Vanillite's Fragrant Snow",
			},
			{
				id: "legendsza-side-quests-45",
				text: "45 - On Maintenance Duty",
			},
			{
				id: "legendsza-side-quests-46",
				text: "46 - Pidgeot Soaring High",
				taskSync: ["legendsza-tms-43"],
			},
			{
				id: "legendsza-side-quests-47",
				text: "47 - Becoming a Furfrou Trimmer",
			},
			{ id: "legendsza-side-quests-48", text: "48 - All Tied Up", },
			{
				id: "legendsza-side-quests-49",
				text: "49 - Hit and Heal",
			},
			{
				id: "legendsza-side-quests-50",
				text: "50 - Just a Few Questions for You...",
			},
			{
				id: "legendsza-side-quests-51",
				text: "51 - Floette Frolicking with Flowers",
			},
			{
				id: "legendsza-side-quests-52",
				text: "52 - Numel Frozen Solid",
			},
			{
				id: "legendsza-side-quests-53",
				text: "53 - The Most Electrifying Eelektrik",
			},
			{
				id: "legendsza-side-quests-54",
				text: "54 - Get ENERGIZED",
			},
			{
				id: "legendsza-side-quests-55",
				text: "55 - Carvanha, Menace of the Deep",
			},
			{
				id: "legendsza-side-quests-56",
				text: "56 - We'll Just Muscle Our Way Through",
			},
			{
				id: "legendsza-side-quests-57",
				text: "57 - The Camerupt Entrepreneur",
			},
			{
				id: "legendsza-side-quests-58",
				text: "58 - Better to Detect Than to Protect",
			},
			{
				id: "legendsza-side-quests-59",
				text: "59 - A Rematch with Hawlucha",
			},
			{
				id: "legendsza-side-quests-60",
				text: "60 - Full Course of Battles: Two Stars",
				taskSync: ["legendsza-tms-70"],
			},
			{
				id: "legendsza-side-quests-61",
				text: "61 - My Favorite Holovator",
			},
			{
				id: "legendsza-side-quests-62",
				text: "62 - Becoming a Pro Furfrou Trimmer",
			},
			{
				id: "legendsza-side-quests-63",
				text: "63 - An Extra-Large Gogoat",
			},
			{
				id: "legendsza-side-quests-64",
				text: "64 - Let It Rain, Let It Pour",
			},
			{
				id: "legendsza-side-quests-65",
				text: "65 - Apartment Block Eeriness",
			},
			{
				id: "legendsza-side-quests-66",
				text: "66 - Investigating with Shuppet",
			},
			{
				id: "legendsza-side-quests-67",
				text: "67 - Sylveon the Soother",
			},
			{
				id: "legendsza-side-quests-68",
				text: "68 - The Best Use for Leftovers",
			},
			{
				id: "legendsza-side-quests-69",
				text: "69 - A Sky Battle, for Old Times' Sake",
			},
			{
				id: "legendsza-side-quests-70",
				text: "70 - Who's the Strongest, Huh?",
			},
			{
				id: "legendsza-side-quests-71",
				text: "71 - The Burning Gaze of Watchog",
			},
			{
				id: "legendsza-side-quests-72",
				text: "72 - Find My Galarian Stunfisk",
				taskSync: ["legendsza-catching-2-g"],
				dexSync: [
					{
						game: "legendsza",
						dexType: "regional",
						id: 157,
						form: "Galarian",
					},
				],
			},
			{
				id: "legendsza-side-quests-73",
				text: "73 - Full Course of Battles: High Rolling",
			},
			{
				id: "legendsza-side-quests-74",
				text: "74 - Delibird Gets in a Flap",
			},
			{
				id: "legendsza-side-quests-75",
				text: "75 - Some Unusual Pokémon",
			},
			{
				id: "legendsza-side-quests-76",
				text: "76 - Let's Learn About Mega Evolution",
			},
			{
				id: "legendsza-side-quests-77",
				text: "77 - Catch Mawile If You Can",
			},
			{
				id: "legendsza-side-quests-78",
				text: "78 - Inkay's Fragrant Ink",
			},
			{
				id: "legendsza-side-quests-79",
				text: "79 - A Fateful Swing of a Metronome",
				taskSync: ["legendsza-tms-99"],
			},
			{
				id: "legendsza-side-quests-80",
				text: "80 - A Shocking Territorial Dispute",
			},
			{
				id: "legendsza-side-quests-81",
				text: "81 - Pancham the Courier",
			},
			{
				id: "legendsza-side-quests-82",
				text: "82 - Clauncher Launching Water Gun",
			},
			{
				id: "legendsza-side-quests-83",
				text: "83 - Honedge's Cutting Edge",
			},
			{
				id: "legendsza-side-quests-84",
				text: "84 - Strike First to Make 'Em Flinch",
			},
			{
				id: "legendsza-side-quests-85",
				text: "85 - Follow Litwick",
			},
			{
				id: "legendsza-side-quests-86",
				text: "86 - Who Messed Up the Garden",
			},
			{
				id: "legendsza-side-quests-87",
				text: "87 - Becoming a Peerless Furfrou Trimmer",
			},
			{
				id: "legendsza-side-quests-88",
				text: "88 - The Nervous Novice Cabbie",
			},
			{
				id: "legendsza-side-quests-89",
				text: "89 - Up, Up, and Away After Emolga",
			},
			{
				id: "legendsza-side-quests-90",
				text: "90 - Froslass's Unfinished Business",
			},
			{
				id: "legendsza-side-quests-91",
				text: "91 - Dragon You into Battle",
			},
			{
				id: "legendsza-side-quests-92",
				text: "92 - The Beldum Blockade",
			},
			{
				id: "legendsza-side-quests-93",
				text: "93 - Finding a Place for Heliolisk",
			},
			{
				id: "legendsza-side-quests-94",
				text: "94 - Full Course of Battles: Three Stars",
			},
			{
				id: "legendsza-side-quests-95",
				text: "95 - A Haunting Experience",
			},
			{
				id: "legendsza-side-quests-96",
				text: "96 - Let Us Battle...Artistically",
				taskSync: ["legendsza-tms-48"],
			},
			{
				id: "legendsza-side-quests-97",
				text: "97 - Stop the Runaway Whirlipede",
			},
			{
				id: "legendsza-side-quests-98",
				text: "98 - Jumbo Variety Pumpkaboo",
			},
			{
				id: "legendsza-side-quests-99",
				text: "99 - Pleasing Aron's Palate",
			},
			{
				id: "legendsza-side-quests-100",
				text: "100 - Starmie on High",
			},
			{
				id: "legendsza-side-quests-101",
				text: "101 - Steadfast as Steel",
			},
			{
				id: "legendsza-side-quests-102",
				text: "102 - A Chilling Challenge",
			},
			{
				id: "legendsza-side-quests-103",
				text: "103 - Facing the Furfrou League",
			},
			{
				id: "legendsza-side-quests-104",
				text: "104 - Abuzz About Bug Types",
			},
			{
				id: "legendsza-side-quests-105",
				text: "105 - Trevenant, the Haunted Elder Tree",
			},
			{
				id: "legendsza-side-quests-106",
				text: "106 - Klefki's Lost Key",
			},
			{
				id: "legendsza-side-quests-107",
				text: "107 - The World's Greatest Pikachu",
			},
			{
				id: "legendsza-side-quests-108",
				text: "108 - Alola, Raichu",
				taskSync: ["legendsza-catching-3-d"],
			},
			{
				id: "legendsza-side-quests-109",
				text: "109 - Wondrous Self-Healing Pokémon",
			},
			{
				id: "legendsza-side-quests-110",
				text: "110 - A Tune That Beckons Doom",
			},
			{
				id: "legendsza-side-quests-111",
				text: "111 - My Adorable, Adorable Babies",
			},
			{
				id: "legendsza-side-quests-112",
				text: "112 - Exploring the Scents of Spritzee",
			},
			{
				id: "legendsza-side-quests-113",
				text: "113 - Bergmite sur un Avalugg",
			},
			{
				id: "legendsza-side-quests-114",
				text: "114 - A Feather from Skarmory",
			},
			{
				id: "legendsza-side-quests-115",
				text: "115 - Tyrantrum's Furious Jaws",
			},
			{
				id: "legendsza-side-quests-116",
				text: "116 - Show the Power of Aurorus",
			},
			{
				id: "legendsza-side-quests-117",
				text: "117 - Josée's Training",
			},
			{
				id: "legendsza-side-quests-118",
				text: "118 - Goodbye, Gengar",
			},
			{
				id: "legendsza-side-quests-119",
				text: "119 - Le Super-Tournoi de Jacinthe O",
			},
		],
		"legendsza-mabels-research": [
			{
				id: "legendsza-mabels-research-1",
				text: "Filling Your Pokedex",
				type: "tiered",
				tiers: [range(5, 230, 5)],
				tooltip:
					"Catch unique Pokémon for your Pokedex.\nTier thresholds are every 5 new Pokémon caught.",
			},
			{
				id: "legendsza-mabels-research-2",
				text: "Filling Your Mega Evolution Dex",
				type: "tiered",
				tiers: [range(5, 55, 5), 62],
				tooltip:
					"Collect Mega Stones.\nTier thresholds are every 5 new stones, except for the last tier which requires 7.",
			},
			{
				id: "legendsza-mabels-research-3",
				text: "Catching Normal Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Normal-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-4",
				text: "Catching Fire Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Fire-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-5",
				text: "Catching Water Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Water-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-6",
				text: "Catching Electric Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Electric-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-7",
				text: "Catching Grass Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Grass-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-8",
				text: "Catching Ice Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Ice-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-9",
				text: "Catching Fighting Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Fighting-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-10",
				text: "Catching Poison Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Poison-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-11",
				text: "Catching Ground Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Ground-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-12",
				text: "Catching Flying Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Flying-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-13",
				text: "Catching Psychic Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Psychic-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-14",
				text: "Catching Bug Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Bug-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-15",
				text: "Catching Rock Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Rock-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-16",
				text: "Catching Ghost Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Ghost-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-17",
				text: "Catching Dragon Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Dragon-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-18",
				text: "Catching Dark Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Dark-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-19",
				text: "Catching Steel Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Steel-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-20",
				text: "Catching Fairy Types",
				type: "tiered",
				tiers: [3, 8, 15, 25, 50],
				tooltip:
					"Catch Fairy-type Pokémon.\nTier thresholds are 3, 8, 15, 25, and 50.",
			},
			{
				id: "legendsza-mabels-research-41",
				text: "Evolving Pokémon",
				type: "tiered",
				tiers: [3, 6, range(10, 45, 5)],
				tooltip:
					"Evolve any Pokémon by any means.\nTier thresholds are 3, 6, 10, and every 5 from there.",
			},
			{
				id: "legendsza-mabels-research-42",
				text: "Evolving via Items",
				type: "tiered",
				tiers: [1, 5, 10],
				tooltip:
					"Evolve Pokémon that require an item to evolve.\nTier thresholds are 1, 5, and 10.",
			},
			{
				id: "legendsza-mabels-research-43",
				text: "Evolving via Link Trade",
				type: "tiered",
				tiers: [1, 3, 5],
				tooltip:
					"Evolve Pokémon that require a Link Trade to evolve.\nTier thresholds are 1, 3, 5.",
			},
			{
				id: "legendsza-mabels-research-47",
				text: "Winning Pokémon Battles",
				type: "tiered",
				tiers: [20, range(50, 350, 50), 500, 1000],
				tooltip:
					"Win battles against NPC trainers.\nTier thresholds are annoying, just get to 1000 at Resturant Le Nah.",
			},
			{
				id: "legendsza-mabels-research-48",
				text: "Smashing Mega Crystals",
				type: "tiered",
				tiers: [20, range(50, 350, 50), 500, 1000],
				tooltip:
					"Use Pokémon to destroy mega crystals around the city.\nTier thresholds are annoying, just smash 1000.",
			},
			{
				id: "legendsza-mabels-research-21",
				text: "Surveying Wild Zone 1",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 1.",
			},
			{
				id: "legendsza-mabels-research-22",
				text: "Surveying Wild Zone 2",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 2.",
			},
			{
				id: "legendsza-mabels-research-23",
				text: "Surveying Wild Zone 3",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 3.",
			},
			{
				id: "legendsza-mabels-research-24",
				text: "Surveying Wild Zone 4",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 4.",
			},
			{
				id: "legendsza-mabels-research-25",
				text: "Surveying Wild Zone 5",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 5.",
			},
			{
				id: "legendsza-mabels-research-26",
				text: "Surveying Wild Zone 6",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 6.",
			},
			{
				id: "legendsza-mabels-research-27",
				text: "Surveying Wild Zone 7",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 7.",
			},
			{
				id: "legendsza-mabels-research-28",
				text: "Surveying Wild Zone 8",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 8.",
			},
			{
				id: "legendsza-mabels-research-29",
				text: "Surveying Wild Zone 9",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 9.",
			},
			{
				id: "legendsza-mabels-research-30",
				text: "Surveying Wild Zone 10",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 10.",
			},
			{
				id: "legendsza-mabels-research-31",
				text: "Surveying Wild Zone 11",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 11.",
			},
			{
				id: "legendsza-mabels-research-32",
				text: "Surveying Wild Zone 12",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 12.",
			},
			{
				id: "legendsza-mabels-research-33",
				text: "Surveying Wild Zone 13",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 13.",
			},
			{
				id: "legendsza-mabels-research-34",
				text: "Surveying Wild Zone 14",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 14.",
			},
			{
				id: "legendsza-mabels-research-35",
				text: "Surveying Wild Zone 15",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 15.",
			},
			{
				id: "legendsza-mabels-research-36",
				text: "Surveying Wild Zone 16",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 16.",
			},
			{
				id: "legendsza-mabels-research-37",
				text: "Surveying Wild Zone 17",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 17.",
			},
			{
				id: "legendsza-mabels-research-38",
				text: "Surveying Wild Zone 18",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 18.",
			},
			{
				id: "legendsza-mabels-research-39",
				text: "Surveying Wild Zone 19",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 19.",
			},
			{
				id: "legendsza-mabels-research-40",
				text: "Surveying Wild Zone 20",
				tooltip:
					"Catch one of every non-Alpha Pokémon available in Wild Zone 20.",
			},
			{
				id: "legendsza-mabels-research-44",
				text: "Restoring Fossils",
				tooltip: "Restore any 3 fossils (Jaw, Sail, or Amber).",
			},
			{
				id: "legendsza-mabels-research-45",
				text: "Relaxing at Cafés",
				tooltip: "Sit and relax at any Café 3 times.",
			},
			{
				id: "legendsza-mabels-research-46",
				text: "Chilling on Benches",
				tooltip: "Sit and relax at any bench 3 times.",
			},
			{
				id: "legendsza-mabels-research-49",
				text: "Investivating Anomalous Alphas",
				tooltip:
					"Catch/Defeat the anomalous alpha Pokémon in Wild Zones 3, 5, and 9.\n(MUST BE IN POST-GAME)",
			},
		],
		"legendsza-activities": [
			{
				id: "legendsza-activities-1",
				text: "Register your birthday at a PokeCenter",
				tooltip: "Go to a PokeCenter and put in your birth month and day",
			},
		],
		"legendsza-battle": [
			{
				id: "legendsza-battle-1",
				text: "Obtain all available titles",
				children: [
					{
						id: "legendsza-battle-1-a",
						text: "Novice Trainer",

						tooltip: "You get by default",
					},
					{
						id: "legendsza-battle-1-b",
						text: "Savior of Lumiose",

						taskSync: ["legendsza-story-1"],
						tooltip: "Complete the first 38 Main Missions",
					},
					{
						id: "legendsza-battle-1-c",
						text: "Shiny Collector",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Catch Shiny Pokémon.\nTier thresholds are 1, 5, and 10 Shiny Pokémon.",
					},
					{
						id: "legendsza-battle-1-d",
						text: "Leveling-Up Pro",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Raise Pokémon to level 100.\nTier thresholds are 1, 5, and 10 Pokémon.",
					},
					{
						id: "legendsza-battle-1-e",
						text: "Pokémon Professor",

						tooltip: "Complete the Pokedex",
					},
					{
						id: "legendsza-battle-1-f",
						text: "Fashion Leader",

						tooltip:
							"Spend money buying fashion items.\nTier thresholds are $200,000, $500,000, and $1,000,000.",
					},
					{
						id: "legendsza-battle-1-g",
						text: "True-Blue Canatic",

						taskSync: ["legendsza-upgrades-1"],
						tooltip: "Collect all the Canari plushies",
					},
					{
						id: "legendsza-battle-1-h",
						text: "Big Money Maker",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Collect money.\nTier thresholds are $500,000, $1,000,000, and $3,000,000.",
					},
					{
						id: "legendsza-battle-1-i",
						text: "All-Around Town Helper",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Complete side missions.\nTier thresholds are 20, 50, and 100 quests.",
					},
					{
						id: "legendsza-battle-1-j",
						text: "Tidy Trainer",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Smash Mega Crystals.\nTier thresholds are 100, 200, and 500 smashed crystals.",
					},
					{
						id: "legendsza-battle-1-k",
						text: "Cafe Regular",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Visit cafes in Lumiose City.\nTier thresholds are 5, 20, 50 times.",
					},
					{
						id: "legendsza-battle-1-l",
						text: "Mable Enabler",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Complete Mabel's research tasks.\nTier thresholds are 50, 100, and 213 tasks.",
					},
					{
						id: "legendsza-battle-1-m",
						text: "Infinite Trainer",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Claim victories in the Z-A Royale.\nTier thresholds are 20, 40, and 60 victories.",
					},
				],
			},
		],
		"legendsza-upgrades": [
			{
				id: "legendsza-upgrades-1",
				text: "Buy all the Canari Plushies",
				taskSync: ["legendsza-catching-1-g"],
				tooltip:
					"Can buy out front the Racine Construction building after defeating Canari",
				children: [
					{
						id: "legendsza-upgrades-1-a",
						text: "Red Canari Plush",
						img: "imgs/items/gen9/legendsza/redcanariplushlv.3.png",
						type: "tiered",
						tiers: [3, 5, 8],
						currentTier: 0,
						currentCount: 0,
						unit: "caught",
						tooltip:
							"Increase EXP Points gained.\nTier thresholds are 3, 5, and 8 Colorful Screws.",
					},
					{
						id: "legendsza-upgrades-1-b",
						text: "Gold Canari Plush",
						img: "imgs/items/gen9/legendsza/goldcanariplushlv.3.png",
						type: "tiered",
						tiers: [3, 5, 8],
						currentTier: 0,
						currentCount: 0,
						unit: "caught",
						tooltip:
							"Increase prize money gained.\nTier thresholds are 3, 5, and 8 Colorful Screws.",
					},
					{
						id: "legendsza-upgrades-1-c",
						text: "Pink Canari Plush",
						img: "imgs/items/gen9/legendsza/pinkcanariplushlv.3.png",
						type: "tiered",
						tiers: [3, 5, 8],
						currentTier: 0,
						currentCount: 0,
						unit: "caught",
						tooltip:
							"Increase amount of Mega Shards dropped.\nTier thresholds are 3, 5, and 8 Colorful Screws.",
					},
					{
						id: "legendsza-upgrades-1-d",
						text: "Green Canari Plush",
						img: "imgs/items/gen9/legendsza/greencanariplushlv.3.png",
						type: "tiered",
						tiers: [3, 5, 8],
						currentTier: 0,
						currentCount: 0,
						unit: "caught",
						tooltip:
							"Increase trainer health.\nTier thresholds are 3, 5, and 8 Colorful Screws.",
					},
					{
						id: "legendsza-upgrades-1-e",
						text: "Blue Canari Plush",
						img: "imgs/items/gen9/legendsza/bluecanariplushlv.3.png",
						type: "tiered",
						tiers: [3, 5, 8],
						currentTier: 0,
						currentCount: 0,
						unit: "caught",
						tooltip:
							"Increase Pokémon catch rate.\nTier thresholds are 3, 5, and 8 Colorful Screws.",
					},
				],
			},
		],
		"legendsza-collectables": [
			{
				id: "legendsza-collectables-1",
				text: "Obtain the Shiny Charm",
				img: "imgs/items/shiny-charm.png",
				tooltip: "Get Mabel's Research to level 50",
				noCenter: true,
			},
			{
				id: "legendsza-collectables-2",
				text: "Collect all 100 Colorful Screws",
				img: "imgs/items/gen9/legendsza/colorfulscrew.png",
				type: "tiered",
				tiers: [range(1, 100)],
				currentTier: 0,
				currentCount: 0,
				unit: "collected",
				tooltip: "Find purple glowing Pokeballs around the map.",
				noCenter: true,
			},
		],
		"legendsza-mega-stones": [
			{
				id: "legendsza-mega-stones-1",
				text: "Abomasite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/460-m.png", "imgs/mega-stones/gen9_2/abomasite.png"],
			},
			{
				id: "legendsza-mega-stones-2",
				text: "Absolite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/359-m.png", "imgs/mega-stones/gen9_2/absolite.png"],
			},
			{
				id: "legendsza-mega-stones-3",
				text: "Aerodactylite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/142-m.png", "imgs/mega-stones/gen9_2/aerodactylite.png"],
			},
			{
				id: "legendsza-mega-stones-4",
				text: "Aggronite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/306-m.png", "imgs/mega-stones/gen9_2/aggronite.png"],
			},
			{
				id: "legendsza-mega-stones-5",
				text: "Alakazite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/065-m.png", "imgs/mega-stones/gen9_2/alakazite.png"],
			},
			{
				id: "legendsza-mega-stones-6",
				text: "Altarianite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/334-m.png", "imgs/mega-stones/gen9_2/altarianite.png"],
			},
			{
				id: "legendsza-mega-stones-7",
				text: "Ampharosite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/181-m.png", "imgs/mega-stones/gen9_2/ampharosite.png"],
			},
			{
				id: "legendsza-mega-stones-8",
				text: "Audinite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/531-m.png", "imgs/mega-stones/gen9_2/audinite.png"],
			},
			{
				id: "legendsza-mega-stones-9",
				text: "Banettite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/354-m.png", "imgs/mega-stones/gen9_2/banettite.png"],
			},
			{
				id: "legendsza-mega-stones-10",
				text: "Barbaracite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/689-m.png", "imgs/mega-stones/gen9_2/barbaracite.png"],
			},
			{
				id: "legendsza-mega-stones-11",
				text: "Beedrillite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/015-m.png", "imgs/mega-stones/gen9_2/beedrillite.png"],
			},
			{
				id: "legendsza-mega-stones-12",
				text: "Blastoisinite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/009-m.png", "imgs/mega-stones/gen9_2/blastoisinite.png"],
			},
			{
				id: "legendsza-mega-stones-13",
				text: "Cameruptite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/323-m.png", "imgs/mega-stones/gen9_2/cameruptite.png"],
			},
			{
				id: "legendsza-mega-stones-14",
				text: "Chandelurite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/609-m.png", "imgs/mega-stones/gen9_2/chandelurite.png"],
			},
			{
				id: "legendsza-mega-stones-15",
				text: "Charizardite X",
				img: ["imgs/sprites/gen9/legendsza/base-icons/006-mx.png", "imgs/mega-stones/gen9_2/charizardite-x.png"],
			},
			{
				id: "legendsza-mega-stones-16",
				text: "Charizardite Y",
				img: ["imgs/sprites/gen9/legendsza/base-icons/006-my.png", "imgs/mega-stones/gen9_2/charizardite-y.png"],
			},
			{
				id: "legendsza-mega-stones-17",
				text: "Clefablite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/036-m.png", "imgs/mega-stones/gen9_2/clefablite.png"],
			},
			{
				id: "legendsza-mega-stones-18",
				text: "Dragalgite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/691-m.png", "imgs/mega-stones/gen9_2/dragalgite.png"],
			},
			{
				id: "legendsza-mega-stones-19",
				text: "Dragoninite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/149-m.png", "imgs/mega-stones/gen9_2/dragoninite.png"],
			},
			{
				id: "legendsza-mega-stones-20",
				text: "Drampanite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/780-m.png", "imgs/mega-stones/gen9_2/drampanite.png"],
			},
			{
				id: "legendsza-mega-stones-21",
				text: "Eelektrossite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/604-m.png", "imgs/mega-stones/gen9_2/eelektrossite.png"],
			},
			{
				id: "legendsza-mega-stones-22",
				text: "Emboarite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/500-m.png", "imgs/mega-stones/gen9_2/emboarite.png"],
			},
			{
				id: "legendsza-mega-stones-23",
				text: "Excadrite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/530-m.png", "imgs/mega-stones/gen9_2/excadrite.png"],
			},
			{
				id: "legendsza-mega-stones-24",
				text: "Falinksite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/870-m.png", "imgs/mega-stones/gen9_2/falinksite.png"],
			},
			{
				id: "legendsza-mega-stones-25",
				text: "Feraligite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/160-m.png", "imgs/mega-stones/gen9_2/feraligite.png"],
			},
			{
				id: "legendsza-mega-stones-26",
				text: "Floettite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/670-em.png", "imgs/mega-stones/gen9_2/floettite.png"],
				taskSync: ["legendsza-catching-2-i", "legendsza-story-2-a"],
				dexSync: [
					{
						game: "legendsza",
						dexType: "regional",
						id: 39,
						form: "Eternal Flower",
					},
				],
			},
			{
				id: "legendsza-mega-stones-27",
				text: "Froslassite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/478-m.png", "imgs/mega-stones/gen9_2/froslassite.png"],
			},
			{
				id: "legendsza-mega-stones-28",
				text: "Galladite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/475-m.png", "imgs/mega-stones/gen9_2/galladite.png"],
			},
			{
				id: "legendsza-mega-stones-29",
				text: "Garchompite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/445-m.png", "imgs/mega-stones/gen9_2/garchompite.png"],
			},
			{
				id: "legendsza-mega-stones-30",
				text: "Gardevoirite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/282-m.png", "imgs/mega-stones/gen9_2/gardevoirite.png"],
			},
			{
				id: "legendsza-mega-stones-31",
				text: "Gengarite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/094-m.png", "imgs/mega-stones/gen9_2/gengarite.png"],
			},
			{
				id: "legendsza-mega-stones-32",
				text: "Glalitite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/362-m.png", "imgs/mega-stones/gen9_2/glalitite.png"],
			},
			{
				id: "legendsza-mega-stones-33",
				text: "Gyaradosite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/130-m.png", "imgs/mega-stones/gen9_2/gyaradosite.png"],
			},
			{
				id: "legendsza-mega-stones-34",
				text: "Hawluchanite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/701-m.png", "imgs/mega-stones/gen9_2/hawluchanite.png"],
			},
			{
				id: "legendsza-mega-stones-35",
				text: "Heracronite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/214-m.png", "imgs/mega-stones/gen9_2/heracronite.png"],
			},
			{
				id: "legendsza-mega-stones-36",
				text: "Houndoominite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/229-m.png", "imgs/mega-stones/gen9_2/houndoominite.png"],
			},
			{
				id: "legendsza-mega-stones-37",
				text: "Kangaskhanite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/115-m.png", "imgs/mega-stones/gen9_2/kangaskhanite.png"],
			},
			{
				id: "legendsza-mega-stones-38",
				text: "Lopunnite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/428-m.png", "imgs/mega-stones/gen9_2/lopunnite.png"],
			},
			{
				id: "legendsza-mega-stones-39",
				text: "Lucarionite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/448-m.png", "imgs/mega-stones/gen9_2/lucarionite.png"],
			},
			{
				id: "legendsza-mega-stones-40",
				text: "Malamarite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/687-m.png", "imgs/mega-stones/gen9_2/malamarite.png"],
			},
			{
				id: "legendsza-mega-stones-41",
				text: "Manectite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/310-m.png", "imgs/mega-stones/gen9_2/manectite.png"],
			},
			{
				id: "legendsza-mega-stones-42",
				text: "Mawilite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/303-m.png", "imgs/mega-stones/gen9_2/mawilite.png"],
			},
			{
				id: "legendsza-mega-stones-43",
				text: "Medichamite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/308-m.png", "imgs/mega-stones/gen9_2/medichamite.png"],
			},
			{
				id: "legendsza-mega-stones-44",
				text: "Meganiumite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/154-m.png", "imgs/mega-stones/gen9_2/meganiumite.png"],
			},
			{
				id: "legendsza-mega-stones-45",
				text: "Metagrossite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/376-m.png", "imgs/mega-stones/gen9_2/metagrossite.png"],
			},
			{
				id: "legendsza-mega-stones-46",
				text: "Pidgeotite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/018-m.png", "imgs/mega-stones/gen9_2/pidgeotite.png"],
			},
			{
				id: "legendsza-mega-stones-47",
				text: "Pinsirite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/127-m.png", "imgs/mega-stones/gen9_2/pinsirite.png"],
			},
			{
				id: "legendsza-mega-stones-48",
				text: "Pyroarite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/668-m.png", "imgs/mega-stones/gen9_2/pyroarite.png"],
			},
			{
				id: "legendsza-mega-stones-49",
				text: "Sablenite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/302-m.png", "imgs/mega-stones/gen9_2/sablenite.png"],
			},
			{
				id: "legendsza-mega-stones-50",
				text: "Salamencite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/373-m.png", "imgs/mega-stones/gen9_2/salamencite.png"],
			},
			{
				id: "legendsza-mega-stones-51",
				text: "Scizorite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/212-m.png", "imgs/mega-stones/gen9_2/scizorite.png"],
			},
			{
				id: "legendsza-mega-stones-52",
				text: "Scolipite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/545-m.png", "imgs/mega-stones/gen9_2/scolipite.png"],
			},
			{
				id: "legendsza-mega-stones-53",
				text: "Scraftinite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/560-m.png", "imgs/mega-stones/gen9_2/scraftinite.png"],
			},
			{
				id: "legendsza-mega-stones-54",
				text: "Sharpedonite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/319-m.png", "imgs/mega-stones/gen9_2/sharpedonite.png"],
			},
			{
				id: "legendsza-mega-stones-55",
				text: "Skarmorite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/227-m.png", "imgs/mega-stones/gen9_2/skarmorite.png"],
			},
			{
				id: "legendsza-mega-stones-56",
				text: "Slowbronite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/080-m.png", "imgs/mega-stones/gen9_2/slowbronite.png"],
			},
			{
				id: "legendsza-mega-stones-57",
				text: "Starminite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/121-m.png", "imgs/mega-stones/gen9_2/starminite.png"],
			},
			{
				id: "legendsza-mega-stones-58",
				text: "Steelixite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/208-m.png", "imgs/mega-stones/gen9_2/steelixite.png"],
			},
			{
				id: "legendsza-mega-stones-59",
				text: "Tyranitarite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/248-m.png", "imgs/mega-stones/gen9_2/tyranitarite.png"],
			},
			{
				id: "legendsza-mega-stones-60",
				text: "Venusaurite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/003-m.png", "imgs/mega-stones/gen9_2/venusaurite.png"],
			},
			{
				id: "legendsza-mega-stones-61",
				text: "Victreebelite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/071-m.png", "imgs/mega-stones/gen9_2/victreebelite.png"],
			},
			{
				id: "legendsza-mega-stones-62",
				text: "Zygardite",
				img: ["imgs/sprites/gen9/legendsza/base-icons/718-m.png", "imgs/mega-stones/gen9_2/zygardite.png"],
			},
		],
		"legendsza-tms": [
			{
				id: "legendsza-tms-1",
				text: "TM 01 - Headbutt",
				img: "imgs/tms/gen9_2/normal.png",
			},
			{ id: "legendsza-tms-2", text: "TM 02 - Dragon Claw", img: "imgs/tms/gen9_2/dragon.png" },
			{ id: "legendsza-tms-3", text: "TM 03 - Psyshock", img: "imgs/tms/gen9_2/psychic.png" },
			{ id: "legendsza-tms-4", text: "TM 04 - Rock Smash", img: "imgs/tms/gen9_2/fighting.png" },
			{
				id: "legendsza-tms-5",
				text: "TM 05 - Roar",
				img: "imgs/tms/gen9_2/normal.png",
			},
			{ id: "legendsza-tms-6", text: "TM 06 - Calm Mind", img: "imgs/tms/gen9_2/psychic.png" },
			{ id: "legendsza-tms-7", text: "TM 07 - Toxic", img: "imgs/tms/gen9_2/poison.png" },
			{ id: "legendsza-tms-8", text: "TM 08 - Thunder Wave", img: "imgs/tms/gen9_2/electric.png" },
			{ id: "legendsza-tms-9", text: "TM 09 - Flip Turn", img: "imgs/tms/gen9_2/water.png" },
			{ id: "legendsza-tms-10", text: "TM 10 - Brick Break", img: "imgs/tms/gen9_2/fighting.png" },
			{ id: "legendsza-tms-11", text: "TM 11 - Bulk Up", img: "imgs/tms/gen9_2/fighting.png" },
			{ id: "legendsza-tms-12", text: "TM 12 - Rock Slide", img: "imgs/tms/gen9_2/rock.png" },
			{ id: "legendsza-tms-13", text: "TM 13 - Ice Beam", img: "imgs/tms/gen9_2/ice.png" },
			{ id: "legendsza-tms-14", text: "TM 14 - Fire Fang", img: "imgs/tms/gen9_2/fire.png" },
			{ id: "legendsza-tms-15", text: "TM 15 - Ice Fang", img: "imgs/tms/gen9_2/ice.png" },
			{ id: "legendsza-tms-16", text: "TM 16 - Light Screen", img: "imgs/tms/gen9_2/psychic.png" },
			{ id: "legendsza-tms-17", text: "TM 17 - Protect", img: "imgs/tms/gen9_2/normal.png" },
			{ id: "legendsza-tms-18", text: "TM 18 - Power-Up Punch", img: "imgs/tms/gen9_2/fighting.png" },
			{ id: "legendsza-tms-19", text: "TM 19 - Power Gem", img: "imgs/tms/gen9_2/rock.png" },
			{ id: "legendsza-tms-20", text: "TM 20 - Play Rough", img: "imgs/tms/gen9_2/fairy.png" },
			{ id: "legendsza-tms-21", text: "TM 21 - Thunder Fang", img: "imgs/tms/gen9_2/electric.png" },
			{ id: "legendsza-tms-22", text: "TM 22 - Aerial Ace", img: "imgs/tms/gen9_2/flying.png" },
			{ id: "legendsza-tms-23", text: "TM 23 - Thunder Punch", img: "imgs/tms/gen9_2/electric.png" },
			{ id: "legendsza-tms-24", text: "TM 24 - Ice Punch", img: "imgs/tms/gen9_2/ice.png" },
			{ id: "legendsza-tms-25", text: "TM 25 - Crunch", img: "imgs/tms/gen9_2/dark.png" },
			{ id: "legendsza-tms-26", text: "TM 26 - Energy Ball", img: "imgs/tms/gen9_2/grass.png" },
			{ id: "legendsza-tms-27", text: "TM 27 - Swift", img: "imgs/tms/gen9_2/normal.png" },
			{ id: "legendsza-tms-28", text: "TM 28 - Dig", img: "imgs/tms/gen9_2/ground.png" },
			{ id: "legendsza-tms-29", text: "TM 29 - Fire Punch", img: "imgs/tms/gen9_2/fire.png" },
			{ id: "legendsza-tms-30", text: "TM 30 - Swords Dance", img: "imgs/tms/gen9_2/normal.png" },
			{
				id: "legendsza-tms-31",
				text: "TM 31 - Reflect",
				img: "imgs/tms/gen9_2/psychic.png",
				taskSync: ["legendsza-side-quests-34"],
			},
			{ id: "legendsza-tms-32", text: "TM 32 - Double Team", img: "imgs/tms/gen9_2/normal.png" },
			{ id: "legendsza-tms-33", text: "TM 33 - Body Slam", img: "imgs/tms/gen9_2/normal.png" },
			{ id: "legendsza-tms-34", text: "TM 34 - Night Slash", img: "imgs/tms/gen9_2/dark.png" },
			{ id: "legendsza-tms-35", text: "TM 35 - Endure", img: "imgs/tms/gen9_2/normal.png" },
			{ id: "legendsza-tms-36", text: "TM 36 - Rock Tomb", img: "imgs/tms/gen9_2/rock.png" },
			{ id: "legendsza-tms-37", text: "TM 37 - Stealth Rock", img: "imgs/tms/gen9_2/rock.png" },
			{ id: "legendsza-tms-38", text: "TM 38 - Fire Blast", img: "imgs/tms/gen9_2/fire.png" },
			{ id: "legendsza-tms-39", text: "TM 39 - Discharge", img: "imgs/tms/gen9_2/electric.png" },
			{ id: "legendsza-tms-40", text: "TM 40 - Bullet Seed", img: "imgs/tms/gen9_2/grass.png" },
			{ id: "legendsza-tms-41", text: "TM 41 - Water Pulse", img: "imgs/tms/gen9_2/water.png" },
			{ id: "legendsza-tms-42", text: "TM 42 - Giga Drain", img: "imgs/tms/gen9_2/grass.png" },
			{
				id: "legendsza-tms-43",
				text: "TM 43 - Fly",
				img: "imgs/tms/gen9_2/flying.png",
				taskSync: ["legendsza-side-quests-46"],
			},
			{ id: "legendsza-tms-44", text: "TM 44 - Hyper Beam", img: "imgs/tms/gen9_2/normal.png" },
			{ id: "legendsza-tms-45", text: "TM 45 - Knock Off", img: "imgs/tms/gen9_2/dark.png" },
			{ id: "legendsza-tms-46", text: "TM 46 - Mud Shot", img: "imgs/tms/gen9_2/ground.png" },
			{ id: "legendsza-tms-47", text: "TM 47 - Agility", img: "imgs/tms/gen9_2/psychic.png" },
			{
				id: "legendsza-tms-48",
				text: "TM 48 - Self-Destruct",
				img: "imgs/tms/gen9_2/normal.png",
				taskSync: ["legendsza-side-quests-96"],
			},
			{ id: "legendsza-tms-49", text: "TM 49 - Icy Wind", img: "imgs/tms/gen9_2/ice.png" },
			{ id: "legendsza-tms-50", text: "TM 50 - Overheat", img: "imgs/tms/gen9_2/fire.png" },
			{ id: "legendsza-tms-51", text: "TM 51 - Safeguard", img: "imgs/tms/gen9_2/normal.png" },
			{ id: "legendsza-tms-52", text: "TM 52 - Earth Power", img: "imgs/tms/gen9_2/ground.png" },
			{ id: "legendsza-tms-53", text: "TM 53 - Sludge Bomb", img: "imgs/tms/gen9_2/poison.png" },
			{ id: "legendsza-tms-54", text: "TM 54 - Draco Meteor", img: "imgs/tms/gen9_2/dragon.png" },
			{ id: "legendsza-tms-55", text: "TM 55 - Giga Impact", img: "imgs/tms/gen9_2/normal.png" },
			{ id: "legendsza-tms-56", text: "TM 56 - Double-Edge", img: "imgs/tms/gen9_2/normal.png" },
			{
				id: "legendsza-tms-57",
				text: "TM 57 - Will-O-Wisp",
				img: "imgs/tms/gen9_2/fire.png",
				taskSync: ["legendsza-side-quests-26"],
			},
			{ id: "legendsza-tms-58", text: "TM 58 - Iron Head", img: "imgs/tms/gen9_2/steel.png" },
			{ id: "legendsza-tms-59", text: "TM 59 - Zen Headbutt", img: "imgs/tms/gen9_2/psychic.png" },
			{ id: "legendsza-tms-60", text: "TM 60 - Future Sight", img: "imgs/tms/gen9_2/psychic.png" },
			{ id: "legendsza-tms-61", text: "TM 61 - Shadow Claw", img: "imgs/tms/gen9_2/ghost.png" },
			{ id: "legendsza-tms-62", text: "TM 62 - Flamethrower", img: "imgs/tms/gen9_2/fire.png" },
			{ id: "legendsza-tms-63", text: "TM 63 - Psychic", img: "imgs/tms/gen9_2/psychic.png" },
			{ id: "legendsza-tms-64", text: "TM 64 - Solar Beam", img: "imgs/tms/gen9_2/grass.png" },
			{ id: "legendsza-tms-65", text: "TM 65 - Stone Edge", img: "imgs/tms/gen9_2/rock.png" },
			{ id: "legendsza-tms-66", text: "TM 66 - Volt Switch", img: "imgs/tms/gen9_2/electric.png" },
			{ id: "legendsza-tms-67", text: "TM 67 - Thunderbolt", img: "imgs/tms/gen9_2/electric.png" },
			{ id: "legendsza-tms-68", text: "TM 68 - Heat Wave", img: "imgs/tms/gen9_2/fire.png" },
			{ id: "legendsza-tms-69", text: "TM 69 - Earthquake", img: "imgs/tms/gen9_2/ground.png" },
			{ id: "legendsza-tms-70", text: "TM 70 - Whirlpool", img: "imgs/tms/gen9_2/water.png" },
			{ id: "legendsza-tms-71", text: "TM 71 - Hyper Voice", img: "imgs/tms/gen9_2/normal.png" },
			{ id: "legendsza-tms-72", text: "TM 72 - Fire Spin", img: "imgs/tms/gen9_2/fire.png" },
			{ id: "legendsza-tms-73", text: "TM 73 - Surf", img: "imgs/tms/gen9_2/water.png" },
			{ id: "legendsza-tms-74", text: "TM 74 - Shadow Ball", img: "imgs/tms/gen9_2/ghost.png" },
			{ id: "legendsza-tms-75", text: "TM 75 - Dragon Pulse", img: "imgs/tms/gen9_2/dragon.png" },
			{ id: "legendsza-tms-76", text: "TM 76 - Liquidation", img: "imgs/tms/gen9_2/water.png" },
			{ id: "legendsza-tms-77", text: "TM 77 - Poison Jab", img: "imgs/tms/gen9_2/poison.png" },
			{ id: "legendsza-tms-78", text: "TM 78 - Bulldoze", img: "imgs/tms/gen9_2/ground.png" },
			{ id: "legendsza-tms-79", text: "TM 79 - Hurricane", img: "imgs/tms/gen9_2/flying.png" },
			{ id: "legendsza-tms-80", text: "TM 80 - Iron Defense", img: "imgs/tms/gen9_2/steel.png" },
			{ id: "legendsza-tms-81", text: "TM 81 - X-Scissor", img: "imgs/tms/gen9_2/bug.png" },
			{ id: "legendsza-tms-82", text: "TM 82 - U-turn", img: "imgs/tms/gen9_2/bug.png" },
			{ id: "legendsza-tms-83", text: "TM 83 - Nasty Plot", img: "imgs/tms/gen9_2/dark.png" },
			{ id: "legendsza-tms-84", text: "TM 84 - Flash Cannon", },
			{
				id: "legendsza-tms-85",
				text: "TM 85 - Substitute",
				img: "imgs/tms/gen9_2/normal.png",
				taskSync: ["legendsza-side-quests-29"],
			},
			{ id: "legendsza-tms-86", text: "TM 86 - Wild Charge", img: "imgs/tms/gen9_2/electric.png" },
			{ id: "legendsza-tms-87", text: "TM 87 - Iron Tail", img: "imgs/tms/gen9_2/steel.png" },
			{
				id: "legendsza-tms-88",
				text: "TM 88 - Spikes",
				img: "imgs/tms/gen9_2/ground.png",
				taskSync: ["legendsza-side-quests-41"],
			},
			{ id: "legendsza-tms-89", text: "TM 89 - Toxic Spikes", img: "imgs/tms/gen9_2/poison.png" },
			{ id: "legendsza-tms-90", text: "TM 90 - Dark Pulse", img: "imgs/tms/gen9_2/dark.png" },
			{ id: "legendsza-tms-91", text: "TM 91 - Curse", img: "imgs/tms/gen9_2/ghost.png" },
			{ id: "legendsza-tms-92", text: "TM 92 - Dazzling Gleam", img: "imgs/tms/gen9_2/fairy.png" },
			{ id: "legendsza-tms-93", text: "TM 93 - Outrage", img: "imgs/tms/gen9_2/dragon.png" },
			{
				id: "legendsza-tms-94",
				text: "TM 94 - Whirlwind",
				img: "imgs/tms/gen9_2/normal.png",
				taskSync: ["legendsza-side-quests-60"],
			},
			{ id: "legendsza-tms-95", text: "TM 95 - Taunt", img: "imgs/tms/gen9_2/dark.png" },
			{ id: "legendsza-tms-96", text: "TM 96 - Hydro Pump", img: "imgs/tms/gen9_2/water.png" },
			{ id: "legendsza-tms-97", text: "TM 97 - Heal Block", img: "imgs/tms/gen9_2/psychic.png" },
			{ id: "legendsza-tms-98", text: "TM 98 - Waterfall", img: "imgs/tms/gen9_2/water.png" },
			{
				id: "legendsza-tms-99",
				text: "TM 99 - Metronome",
				img: "imgs/tms/gen9_2/normal.png",
				taskSync: ["legendsza-side-quests-79"],
			},
			{ id: "legendsza-tms-100", text: "TM 100 - Gunk Shot", img: "imgs/tms/gen9_2/poison.png" },
			{ id: "legendsza-tms-101", text: "TM 101 - Electroweb", img: "imgs/tms/gen9_2/electric.png" },
			{ id: "legendsza-tms-102", text: "TM 102 - Focus Blast", img: "imgs/tms/gen9_2/fighting.png" },
			{ id: "legendsza-tms-103", text: "TM 103 - Work Up", img: "imgs/tms/gen9_2/normal.png" },
			{ id: "legendsza-tms-104", text: "TM 104 - Flare Blitz", img: "imgs/tms/gen9_2/fire.png" },
			{ id: "legendsza-tms-105", text: "TM 105 - Blizzard", img: "imgs/tms/gen9_2/ice.png" },
			{ id: "legendsza-tms-106", text: "TM 106 - Thunder", img: "imgs/tms/gen9_2/electric.png" },
			{ id: "legendsza-tms-107", text: "TM 107 - Close Combat", img: "imgs/tms/gen9_2/fighting.png" },
		],
		"legendsza-extra-credit": [
			{
				id: "legendsza-extra-credit-1",
				text: "Get Mega Stones from Ranked Battling",
				children: [
					{
						id: "legendsza-extra-credit-1-a",
						text: "Greninjite",
						img: ["imgs/sprites/gen9/legendsza/base-icons/658-m.png", "imgs/mega-stones/gen9_2/greninjite.png"]
					},
					{
						id: "legendsza-extra-credit-1-b",
						text: "Delphoxite",
						img: ["imgs/sprites/gen9/legendsza/base-icons/655-m.png", "imgs/mega-stones/gen9_2/delphoxite.png"]
					},
					{
						id: "legendsza-extra-credit-1-c",
						text: "Chesnaughtite",
						img: ["imgs/sprites/gen9/legendsza/base-icons/652-m.png", "imgs/mega-stones/gen9_2/chesnaughtite.png"]
					},
					{
						id: "legendsza-extra-credit-1-d",
						text: "Baxalibrite",
						img: ["imgs/sprites/gen9/legendsza/base-icons/998-m.png", "imgs/mega-stones/gen9_2/baxalibrite.png"]
					},
				],
			},
			{
				id: "legendsza-extra-credit-2",
				text: "Get the Trench Coat & Pants Set - Beige",
				img: "imgs/task-imgs/gen9/legendsza/trenchcoat.png",
				tooltip: "Had to pre-order Pokémon Legends: Z-A from Amazon (Japan), GameStop (USA), EB Games (Australia), or Game/ShopTo (UK)",
				noCenter: true,
			},
			{
				id: "legendsza-extra-credit-3",
				text: "Obtain all titles from Ranked Battling",
				children: [
					{
						id: "legendsza-extra-credit-3-a",
						text: "Normal-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Normal-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-b",
						text: "Fire-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Fire-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-c",
						text: "Water-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Water-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-d",
						text: "Electric-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Electric-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-e",
						text: "Grass-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Grass-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-f",
						text: "Ice-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Ice-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-g",
						text: "Fighting-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Fighting-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-h",
						text: "Poison-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Poison-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-i",
						text: "Ground-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Ground-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-j",
						text: "Flying-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Flying-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-k",
						text: "Psychic-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Psychic-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-l",
						text: "Bug-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Bug-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-m",
						text: "Rock-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Rock-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-n",
						text: "Ghost-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Ghost-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-o",
						text: "Dragon-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Dragon-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-p",
						text: "Dark-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Dark-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-q",
						text: "Steel-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Steel-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-r",
						text: "Fairy-Type User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Fairy-Type Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-s",
						text: "Total Type Master",
						tooltip: "Obtain all other titles for Pokémon typings.",
					},
					{
						id: "legendsza-extra-credit-3-t",
						text: "Experienced Trainer",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Battle in Link Battles.\nTier thresholds are 50, 100, and 200 battles.",
					},
					{
						id: "legendsza-extra-credit-3-u",
						text: "Elite Trainer",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Come 1st in Link Battles.\nTier thresholds are 10, 30, and 50 battles.",
					},
					{
						id: "legendsza-extra-credit-3-v",
						text: "Mightiest Trainer",
						tooltip: "Come first in 100 Link Battles.",
					},
					{
						id: "legendsza-extra-credit-3-w",
						text: "Type Matchup Master",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Land super-effective hits in Link Battles.\nTier thresholds are 50, 100, and 300 hits.",
					},
					{
						id: "legendsza-extra-credit-3-x",
						text: "Mega Evolution User",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Mega Evolution in Link Battles.\nTier thresholds are 50, 100, and 300 evolutions.",
					},
					{
						id: "legendsza-extra-credit-3-y",
						text: "Alpha Wielder",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Use Alpha Pokémon in Link Battles.\nTier thresholds are 20, 50, and 100.",
					},
					{
						id: "legendsza-extra-credit-3-z",
						text: "First Attacker",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							'Earn the "Dealt first attack" bonus in Ranked Battles.\nTier thresholds are 30, 75, and 150 times.',
					},
					{
						id: "legendsza-extra-credit-3-aa",
						text: "Consummate Gamer",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							'Earn the "Flawless Survivor" bonus in Ranked Battles.\nTier thresholds are 10, 25, and 50 times.',
					},
					{
						id: "legendsza-extra-credit-3-ab",
						text: "Comeback Kid",
						type: "tiered",
						tiers: ["Bronze", "Silver", "Gold"],
						currentTier: 0,
						currentCount: 0,
						unit: "obtained",
						tooltip:
							"Go from last to 1st within the last 30 seconds in Ranked Battles.\nTier thresholds are 1, 5, and 10 times.",
					},
					{
						id: "legendsza-extra-credit-3-ac",
						text: "Z-A Battle Club Rookie",
						tooltip: "Reach Rank A during a Ranked Battle season.",
					},
					{
						id: "legendsza-extra-credit-3-ad",
						text: "Z-A Battle Club Ranked",
						tooltip: "Reach Rank A 3 times in Ranked Battle seasons.",
					},
					{
						id: "legendsza-extra-credit-3-ae",
						text: "Z-A Battle Club Top-Ranked",
						tooltip: "Reach Rank A 5 times in Ranked Battle seasons.",
					},
					{
						id: "legendsza-extra-credit-3-af",
						text: "Seasoned Player",
						tooltip: "Take part in a Ranked Battle.",
					},
					{
						id: "legendsza-extra-credit-3-ag",
						text: "Season Semi-Regular",
						tooltip: "Take part in a Ranked Battle across 3 season.",
					},
					{
						id: "legendsza-extra-credit-3-ah",
						text: "Season Regular",
						tooltip: "Take part in a Ranked Battle across 5 season.",
					},
					{
						id: "legendsza-extra-credit-3-ai",
						text: "Season Veteran",
						tooltip: "Take part in a Ranked Battle across 10 season.",
					},
				],
			},
		],
	},
});
