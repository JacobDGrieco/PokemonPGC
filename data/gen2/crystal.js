PPGC.register({
    sections: {
        crystal: [
            { id: "crystal-catching", title: "Gotta Catch 'Em All" },
            { id: "crystal-story", title: "Main Story" },
            { id: "crystal-sidequests", title: "Side Quests" },
            { id: "crystal-upgrades", title: "Upgrades" },
            { id: "crystal-collectables", title: "Collectables" },
            { id: "crystal-thms", title: "TMs/HMs" },
        ]
    },

    tasks: {
        "crystal-catching": [
            {
                id: "crystal-catching-1", text: "Catch all the Legendaries", done: false, children: [
                    { id: "crystal-catching-1-a", text: "Catch Raikou", done: false },
                    { id: "crystal-catching-1-b", text: "Catch Entei", done: false },
                    { id: "crystal-catching-1-c", text: "Catch Suicune", done: false },
                    { id: "crystal-catching-1-d", text: "Catch Ho-Oh", done: false },
                    { id: "crystal-catching-1-d", text: "Catch Lugia", done: false },
                ]
            },
            {
                id: "crystal-catching-2", text: "Obtain all the Mythicals", done: false, children: [
                    { id: "crystal-catching-2-a", text: "Obtain Celebi", done: false },
                ]
            },
            { id: "crystal-catching-3", text: "Catch/Defeat the Sudowoodo on Route 36", done: false },
            { id: "crystal-catching-4", text: "Catch/Defeat the \"Red\" Gyarados at the Lake of Rage", done: false },
            { id: "crystal-catching-5", text: "Catch the Lapras in Union Cave", done: false },
            { id: "crystal-catching-6", text: "Catch/Defeat the Snorlax in Vermillion City", done: false },
            {
                id: "crystal-catching-7", text: "Obtain all In-Game Gift Pokemon", done: false, children: [
                    { id: "crystal-catching-6-a", text: "Spearow", done: false },
                    { id: "crystal-catching-6-b", text: "Shuckle", done: false },
                    { id: "crystal-catching-6-c", text: "Eevee", done: false },
                    { id: "crystal-catching-6-d", text: "Tyrogue", done: false },
                    { id: "crystal-catching-6-e", text: "Togepi", done: false },
                    { id: "crystal-catching-6-f", text: "Odd Egg", done: false }
                ]
            },
            {
                id: "crystal-catching-8", text: "Complete all In-Game Trades", done: false, children: [
                    { id: "crystal-catching-7-a", text: "Bellsprout for Onix", done: false },
                    { id: "crystal-catching-7-b", text: "Drowzee for Machop", done: false },
                    { id: "crystal-catching-7-c", text: "Krabby for Voltorb", done: false },
                    { id: "crystal-catching-7-d", text: "Dragonair for Rhydon", done: false },
                    { id: "crystal-catching-7-e", text: "Gloom for Rapidash", done: false },
                    { id: "crystal-catching-7-f", text: "Chansey for Aerodactyl", done: false },
                ]
            },
        ],
        "crystal-story": [
            { id: "crystal-story-1", text: "Defeat the Elite 4", done: false },
            {
                id: "crystal-story-2", text: "Epilogue", done: false, children: [
                    { id: "crystal-story-2-a", text: "Restore power to the Kanto Power Plant", done: false },
                    { id: "crystal-story-2-b", text: "Find Champion Blue on Cinnabar Island", done: false },
                    { id: "crystal-story-2-c", text: "Defeat Blain on the Seafoam Islands", done: false },
                    { id: "crystal-story-2-d", text: "Defeat Red atop Mt. crystal", done: false },
                    {
                        id: "crystal-story-2-e", text: "Collect all 8 Kanto Gym Badges", done: false, children: [
                            { id: "crystal-story-2-e-a", text: "Boulder Badge", done: false },
                            { id: "crystal-story-2-e-b", text: "Cascade Badge", done: false },
                            { id: "crystal-story-2-e-c", text: "Thunder Badge", done: false },
                            { id: "crystal-story-2-e-d", text: "Rainbow Badge", done: false },
                            { id: "crystal-story-2-e-e", text: "Soul Badge", done: false },
                            { id: "crystal-story-2-e-f", text: "Marsh Badge", done: false },
                            { id: "crystal-story-2-e-g", text: "Volcano Badge", done: false },
                            { id: "crystal-story-2-e-h", text: "Earth Badge", done: false },
                        ]
                    },
                ]
            },
        ],
        "crystal-sidequests": [
            { id: "crystal-sidequests-1", text: "Show Elm the hatched egg", done: false },
            { id: "crystal-sidequests-2", text: "Deliver the mail for the guard on Route 36 to the fat guy on Route 31", done: false },
            { id: "crystal-sidequests-3", text: "Cure the Miltank on Route 39", done: false },
            { id: "crystal-sidequests-4", text: "Talk to Mary in the Radio Tower after beating Team Rocket", done: false },
            { id: "crystal-sidequests-5", text: "Return the lost doll to the woman in Saffrom City", done: false },
            {
                id: "crystal-sidequests-6", text: "Meet all the Week Siblings", done: false, children: [
                    { id: "crystal-catching-6-a", text: "Monica", done: false },
                    { id: "crystal-catching-6-b", text: "Tuscany", done: false },
                    { id: "crystal-catching-6-c", text: "Wesley", done: false },
                    { id: "crystal-catching-6-d", text: "Arthur", done: false },
                    { id: "crystal-catching-6-e", text: "Frieda", done: false },
                    { id: "crystal-catching-6-f", text: "Santos", done: false },
                    { id: "crystal-catching-6-g", text: "Sunny", done: false },
                ]
            },
        ],
        "crystal-upgrades": [
            { id: "crystal-upgrades-1", text: "Get the Town Map", done: false },
            { id: "crystal-upgrades-2", text: "Get the Radio", done: false },
            { id: "crystal-upgrades-3", text: "Get the Unown PokeDex tab", done: false },
        ],
        "crystal-collectables": [
            { id: "crystal-collectables-1", text: "Obtain the Bike", done: false },
            { id: "crystal-collectables-2", text: "Obtain the Coin Case", done: false },
            { id: "crystal-collectables-3", text: "Obtain the Squirtbottle", done: false },
            { id: "crystal-collectables-4", text: "Obtain the Exp. Share", done: false },
            { id: "crystal-collectables-5", text: "Obtain the EXPN Card", done: false },
            {
                id: "crystal-collectables-6", text: "Obtain all 3 fishing rods", done: false, children: [
                    { id: "crystal-collectables-6-a", text: "Old Rod", done: false },
                    { id: "crystal-collectables-6-b", text: "Good Rod", done: false },
                    { id: "crystal-collectables-6-c", text: "Super Rod", done: false },
                ]
            },
            { id: "crystal-collectables-7", text: "Obtain the Item Finder", done: false },
            { id: "crystal-collectables-8", text: "Find all hidden items with the Item Fidner", done: false }, // need to add a number input 0-88
        ],
        "crystal-thms": [
            {
                id: "crystal-thms-1", text: "Collect all HMs", done: false, children: [
                    { id: "crystal-thms-1-a", text: "HM01: Cut", done: false },
                    { id: "crystal-thms-1-b", text: "HM02: Fly", done: false },
                    { id: "crystal-thms-1-c", text: "HM03: Surf", done: false },
                    { id: "crystal-thms-1-d", text: "HM04: Strength", done: false },
                    { id: "crystal-thms-1-e", text: "HM05: Flash", done: false },
                    { id: "crystal-thms-1-f", text: "HM06: Whirlpool", done: false },
                    { id: "crystal-thms-1-g", text: "HM07: Waterfall", done: false },
                ]
            },
            { id: "crystal-thms-2", text: "Collect all TMs", done: false, children: [] },
        ]
    },

    dex: {
        crystal: [
            {
                id: 1,
                name: "Chikorita",
                img: "imgs/gen2/gold/normal/normal/152.png",
                imgS: "imgs/gen2/gold/shiny/shiny/152.png"
            },
            {
                id: 2,
                name: "Bayleef",
                img: "imgs/gen2/gold/normal/normal/153.png",
                imgS: "imgs/gen2/gold/shiny/shiny/153.png"
            },
            {
                id: 3,
                name: "Meganium",
                img: "imgs/gen2/gold/normal/normal/154.png",
                imgS: "imgs/gen2/gold/shiny/shiny/154.png"
            },
            {
                id: 4,
                name: "Cyndaquil",
                img: "imgs/gen2/gold/normal/normal/155.png",
                imgS: "imgs/gen2/gold/shiny/shiny/155.png"
            },
            {
                id: 5,
                name: "Quilava",
                img: "imgs/gen2/gold/normal/normal/156.png",
                imgS: "imgs/gen2/gold/shiny/shiny/156.png"
            },
            {
                id: 6,
                name: "Typhlosion",
                img: "imgs/gen2/gold/normal/normal/157.png",
                imgS: "imgs/gen2/gold/shiny/shiny/157.png"
            },
            {
                id: 7,
                name: "Totodile",
                img: "imgs/gen2/gold/normal/normal/158.png",
                imgS: "imgs/gen2/gold/shiny/shiny/158.png"
            },
            {
                id: 8,
                name: "Croconaw",
                img: "imgs/gen2/gold/normal/normal/159.png",
                imgS: "imgs/gen2/gold/shiny/shiny/159.png"
            },
            {
                id: 9,
                name: "Feraligatr",
                img: "imgs/gen2/gold/normal/normal/160.png",
                imgS: "imgs/gen2/gold/shiny/shiny/160.png"
            },
            {
                id: 10,
                name: "Pidgey",
                img: "imgs/gen2/gold/normal/normal/016.png",
                imgS: "imgs/gen2/gold/shiny/shiny/016.png"
            },
            {
                id: 11,
                name: "Pidgeotto",
                img: "imgs/gen2/gold/normal/normal/017.png",
                imgS: "imgs/gen2/gold/shiny/shiny/017.png"
            },
            {
                id: 12,
                name: "Pidgeot",
                img: "imgs/gen2/gold/normal/normal/018.png",
                imgS: "imgs/gen2/gold/shiny/shiny/018.png"
            },
            {
                id: 13,
                name: "Spearow",
                img: "imgs/gen2/gold/normal/normal/021.png",
                imgS: "imgs/gen2/gold/shiny/shiny/021.png"
            },
            {
                id: 14,
                name: "Fearow",
                img: "imgs/gen2/gold/normal/normal/022.png",
                imgS: "imgs/gen2/gold/shiny/shiny/022.png"
            },
            {
                id: 15,
                name: "Hoothoot",
                img: "imgs/gen2/gold/normal/normal/163.png",
                imgS: "imgs/gen2/gold/shiny/shiny/163.png"
            },
            {
                id: 16,
                name: "Noctowl",
                img: "imgs/gen2/gold/normal/normal/164.png",
                imgS: "imgs/gen2/gold/shiny/shiny/164.png"
            },
            {
                id: 17,
                name: "Rattata",
                img: "imgs/gen2/gold/normal/normal/019.png",
                imgS: "imgs/gen2/gold/shiny/shiny/019.png"
            },
            {
                id: 18,
                name: "Raticate",
                img: "imgs/gen2/gold/normal/normal/020.png",
                imgS: "imgs/gen2/gold/shiny/shiny/020.png"
            },
            {
                id: 19,
                name: "Sentret",
                img: "imgs/gen2/gold/normal/normal/161.png",
                imgS: "imgs/gen2/gold/shiny/shiny/161.png"
            },
            {
                id: 20,
                name: "Furret",
                img: "imgs/gen2/gold/normal/normal/162.png",
                imgS: "imgs/gen2/gold/shiny/shiny/162.png"
            },
            {
                id: 21,
                name: "Pichu",
                img: "imgs/gen2/gold/normal/normal/172.png",
                imgS: "imgs/gen2/gold/shiny/shiny/172.png"
            },
            {
                id: 22,
                name: "Pikachu",
                img: "imgs/gen2/gold/normal/normal/025.png",
                imgS: "imgs/gen2/gold/shiny/shiny/025.png"
            },
            {
                id: 23,
                name: "Raichu",
                img: "imgs/gen2/gold/normal/normal/026.png",
                imgS: "imgs/gen2/gold/shiny/shiny/026.png"
            },
            {
                id: 24,
                name: "Caterpie",
                img: "imgs/gen2/gold/normal/normal/010.png",
                imgS: "imgs/gen2/gold/shiny/shiny/010.png"
            },
            {
                id: 25,
                name: "Metapod",
                img: "imgs/gen2/gold/normal/normal/011.png",
                imgS: "imgs/gen2/gold/shiny/shiny/011.png"
            },
            {
                id: 26,
                name: "Butterfree",
                img: "imgs/gen2/gold/normal/normal/012.png",
                imgS: "imgs/gen2/gold/shiny/shiny/012.png"
            },
            {
                id: 27,
                name: "Weedle",
                img: "imgs/gen2/gold/normal/normal/013.png",
                imgS: "imgs/gen2/gold/shiny/shiny/013.png"
            },
            {
                id: 28,
                name: "Kakuna",
                img: "imgs/gen2/gold/normal/normal/014.png",
                imgS: "imgs/gen2/gold/shiny/shiny/014.png"
            },
            {
                id: 29,
                name: "Beedrill",
                img: "imgs/gen2/gold/normal/normal/015.png",
                imgS: "imgs/gen2/gold/shiny/shiny/015.png"
            },
            {
                id: 30,
                name: "Ledyba",
                img: "imgs/gen2/gold/normal/normal/165.png",
                imgS: "imgs/gen2/gold/shiny/shiny/165.png"
            },
            {
                id: 31,
                name: "Ledian",
                img: "imgs/gen2/gold/normal/normal/166.png",
                imgS: "imgs/gen2/gold/shiny/shiny/166.png"
            },
            {
                id: 32,
                name: "Spinarak",
                img: "imgs/gen2/gold/normal/normal/167.png",
                imgS: "imgs/gen2/gold/shiny/shiny/167.png"
            },
            {
                id: 33,
                name: "Ariados",
                img: "imgs/gen2/gold/normal/normal/168.png",
                imgS: "imgs/gen2/gold/shiny/shiny/168.png"
            },
            {
                id: 34,
                name: "Geodude",
                img: "imgs/gen2/gold/normal/normal/074.png",
                imgS: "imgs/gen2/gold/shiny/shiny/074.png"
            },
            {
                id: 35,
                name: "Graveler",
                img: "imgs/gen2/gold/normal/normal/075.png",
                imgS: "imgs/gen2/gold/shiny/shiny/075.png"
            },
            {
                id: 36,
                name: "Golem",
                img: "imgs/gen2/gold/normal/normal/076.png",
                imgS: "imgs/gen2/gold/shiny/shiny/076.png"
            },
            {
                id: 37,
                name: "Zubat",
                img: "imgs/gen2/gold/normal/normal/041.png",
                imgS: "imgs/gen2/gold/shiny/shiny/041.png"
            },
            {
                id: 38,
                name: "Golbat",
                img: "imgs/gen2/gold/normal/normal/042.png",
                imgS: "imgs/gen2/gold/shiny/shiny/042.png"
            },
            {
                id: 39,
                name: "Crobat",
                img: "imgs/gen2/gold/normal/normal/169.png",
                imgS: "imgs/gen2/gold/shiny/shiny/169.png"
            },
            {
                id: 40,
                name: "Cleffa",
                img: "imgs/gen2/gold/normal/normal/173.png",
                imgS: "imgs/gen2/gold/shiny/shiny/173.png"
            },
            {
                id: 41,
                name: "Clefairy",
                img: "imgs/gen2/gold/normal/normal/035.png",
                imgS: "imgs/gen2/gold/shiny/shiny/035.png"
            },
            {
                id: 42,
                name: "Clefable",
                img: "imgs/gen2/gold/normal/normal/036.png",
                imgS: "imgs/gen2/gold/shiny/shiny/036.png"
            },
            {
                id: 43,
                name: "Igglybuff",
                img: "imgs/gen2/gold/normal/normal/174.png",
                imgS: "imgs/gen2/gold/shiny/shiny/174.png"
            },
            {
                id: 44,
                name: "Jigglypuff",
                img: "imgs/gen2/gold/normal/normal/039.png",
                imgS: "imgs/gen2/gold/shiny/shiny/039.png"
            },
            {
                id: 45,
                name: "Wigglytuff",
                img: "imgs/gen2/gold/normal/normal/040.png",
                imgS: "imgs/gen2/gold/shiny/shiny/040.png"
            },
            {
                id: 46,
                name: "Togepi",
                img: "imgs/gen2/gold/normal/normal/175.png",
                imgS: "imgs/gen2/gold/shiny/shiny/175.png"
            },
            {
                id: 47,
                name: "Togetic",
                img: "imgs/gen2/gold/normal/normal/176.png",
                imgS: "imgs/gen2/gold/shiny/shiny/176.png"
            },
            {
                id: 48,
                name: "Sandshrew",
                img: "imgs/gen2/gold/normal/normal/027.png",
                imgS: "imgs/gen2/gold/shiny/shiny/027.png"
            },
            {
                id: 49,
                name: "Sandslash",
                img: "imgs/gen2/gold/normal/normal/028.png",
                imgS: "imgs/gen2/gold/shiny/shiny/028.png"
            },
            {
                id: 50,
                name: "Ekans",
                img: "imgs/gen2/gold/normal/normal/023.png",
                imgS: "imgs/gen2/gold/shiny/shiny/023.png"
            },
            {
                id: 51,
                name: "Arbok",
                img: "imgs/gen2/gold/normal/normal/024.png",
                imgS: "imgs/gen2/gold/shiny/shiny/024.png"
            },
            {
                id: 52,
                name: "Dunsparce",
                img: "imgs/gen2/gold/normal/normal/206.png",
                imgS: "imgs/gen2/gold/shiny/shiny/206.png"
            },
            {
                id: 53,
                name: "Mareep",
                img: "imgs/gen2/gold/normal/normal/179.png",
                imgS: "imgs/gen2/gold/shiny/shiny/179.png"
            },
            {
                id: 54,
                name: "Flaaffy",
                img: "imgs/gen2/gold/normal/normal/180.png",
                imgS: "imgs/gen2/gold/shiny/shiny/180.png"
            },
            {
                id: 55,
                name: "Ampharos",
                img: "imgs/gen2/gold/normal/normal/181.png",
                imgS: "imgs/gen2/gold/shiny/shiny/181.png"
            },
            {
                id: 56,
                name: "Wooper",
                img: "imgs/gen2/gold/normal/normal/194.png",
                imgS: "imgs/gen2/gold/shiny/shiny/194.png"
            },
            {
                id: 57,
                name: "Quagsire",
                img: "imgs/gen2/gold/normal/normal/195.png",
                imgS: "imgs/gen2/gold/shiny/shiny/195.png"
            },
            {
                id: 58,
                name: "Gastly",
                img: "imgs/gen2/gold/normal/normal/092.png",
                imgS: "imgs/gen2/gold/shiny/shiny/092.png"
            },
            {
                id: 59,
                name: "Haunter",
                img: "imgs/gen2/gold/normal/normal/093.png",
                imgS: "imgs/gen2/gold/shiny/shiny/093.png"
            },
            {
                id: 60,
                name: "Gengar",
                img: "imgs/gen2/gold/normal/normal/094.png",
                imgS: "imgs/gen2/gold/shiny/shiny/094.png"
            },
            {
                id: 61,
                name: "Unown",
                img: "imgs/gen2/gold/normal/normal/201.png",
                imgS: "imgs/gen2/gold/shiny/shiny/201.png"
            },
            {
                id: 62,
                name: "Onix",
                img: "imgs/gen2/gold/normal/normal/095.png",
                imgS: "imgs/gen2/gold/shiny/shiny/095.png"
            },
            {
                id: 63,
                name: "Steelix",
                img: "imgs/gen2/gold/normal/normal/208.png",
                imgS: "imgs/gen2/gold/shiny/shiny/208.png"
            },
            {
                id: 64,
                name: "Bellsprout",
                img: "imgs/gen2/gold/normal/normal/069.png",
                imgS: "imgs/gen2/gold/shiny/shiny/069.png"
            },
            {
                id: 65,
                name: "Weepinbell",
                img: "imgs/gen2/gold/normal/normal/070.png",
                imgS: "imgs/gen2/gold/shiny/shiny/070.png"
            },
            {
                id: 66,
                name: "Victreebel",
                img: "imgs/gen2/gold/normal/normal/071.png",
                imgS: "imgs/gen2/gold/shiny/shiny/071.png"
            },
            {
                id: 67,
                name: "Hoppip",
                img: "imgs/gen2/gold/normal/normal/187.png",
                imgS: "imgs/gen2/gold/shiny/shiny/187.png"
            },
            {
                id: 68,
                name: "Skiploom",
                img: "imgs/gen2/gold/normal/normal/188.png",
                imgS: "imgs/gen2/gold/shiny/shiny/188.png"
            },
            {
                id: 69,
                name: "Jumpluff",
                img: "imgs/gen2/gold/normal/normal/189.png",
                imgS: "imgs/gen2/gold/shiny/shiny/189.png"
            },
            {
                id: 70,
                name: "Paras",
                img: "imgs/gen2/gold/normal/normal/046.png",
                imgS: "imgs/gen2/gold/shiny/shiny/046.png"
            },
            {
                id: 71,
                name: "Parasect",
                img: "imgs/gen2/gold/normal/normal/047.png",
                imgS: "imgs/gen2/gold/shiny/shiny/047.png"
            },
            {
                id: 72,
                name: "Poliwag",
                img: "imgs/gen2/gold/normal/normal/060.png",
                imgS: "imgs/gen2/gold/shiny/shiny/060.png"
            },
            {
                id: 73,
                name: "Poliwhirl",
                img: "imgs/gen2/gold/normal/normal/061.png",
                imgS: "imgs/gen2/gold/shiny/shiny/061.png"
            },
            {
                id: 74,
                name: "Poliwrath",
                img: "imgs/gen2/gold/normal/normal/062.png",
                imgS: "imgs/gen2/gold/shiny/shiny/062.png"
            },
            {
                id: 75,
                name: "Politoed",
                img: "imgs/gen2/gold/normal/normal/186.png",
                imgS: "imgs/gen2/gold/shiny/shiny/186.png"
            },
            {
                id: 76,
                name: "Magikarp",
                img: "imgs/gen2/gold/normal/normal/129.png",
                imgS: "imgs/gen2/gold/shiny/shiny/129.png"
            },
            {
                id: 77,
                name: "Gyarados",
                img: "imgs/gen2/gold/normal/normal/130.png",
                imgS: "imgs/gen2/gold/shiny/shiny/130.png"
            },
            {
                id: 78,
                name: "Goldeen",
                img: "imgs/gen2/gold/normal/normal/118.png",
                imgS: "imgs/gen2/gold/shiny/shiny/118.png"
            },
            {
                id: 79,
                name: "Seaking",
                img: "imgs/gen2/gold/normal/normal/119.png",
                imgS: "imgs/gen2/gold/shiny/shiny/119.png"
            },
            {
                id: 80,
                name: "Slowpoke",
                img: "imgs/gen2/gold/normal/normal/079.png",
                imgS: "imgs/gen2/gold/shiny/shiny/079.png"
            },
            {
                id: 81,
                name: "Slowbro",
                img: "imgs/gen2/gold/normal/normal/080.png",
                imgS: "imgs/gen2/gold/shiny/shiny/080.png"
            },
            {
                id: 82,
                name: "Slowking",
                img: "imgs/gen2/gold/normal/normal/199.png",
                imgS: "imgs/gen2/gold/shiny/shiny/199.png"
            },
            {
                id: 83,
                name: "Oddish",
                img: "imgs/gen2/gold/normal/normal/043.png",
                imgS: "imgs/gen2/gold/shiny/shiny/043.png"
            },
            {
                id: 84,
                name: "Gloom",
                img: "imgs/gen2/gold/normal/normal/044.png",
                imgS: "imgs/gen2/gold/shiny/shiny/044.png"
            },
            {
                id: 85,
                name: "Vileplume",
                img: "imgs/gen2/gold/normal/normal/045.png",
                imgS: "imgs/gen2/gold/shiny/shiny/045.png"
            },
            {
                id: 86,
                name: "Bellossom",
                img: "imgs/gen2/gold/normal/normal/182.png",
                imgS: "imgs/gen2/gold/shiny/shiny/182.png"
            },
            {
                id: 87,
                name: "Drowzee",
                img: "imgs/gen2/gold/normal/normal/096.png",
                imgS: "imgs/gen2/gold/shiny/shiny/096.png"
            },
            {
                id: 88,
                name: "Hypno",
                img: "imgs/gen2/gold/normal/normal/097.png",
                imgS: "imgs/gen2/gold/shiny/shiny/097.png"
            },
            {
                id: 89,
                name: "Abra",
                img: "imgs/gen2/gold/normal/normal/063.png",
                imgS: "imgs/gen2/gold/shiny/shiny/063.png"
            },
            {
                id: 90,
                name: "Kadabra",
                img: "imgs/gen2/gold/normal/normal/064.png",
                imgS: "imgs/gen2/gold/shiny/shiny/064.png"
            },
            {
                id: 91,
                name: "Alakazam",
                img: "imgs/gen2/gold/normal/normal/065.png",
                imgS: "imgs/gen2/gold/shiny/shiny/065.png"
            },
            {
                id: 92,
                name: "Ditto",
                img: "imgs/gen2/gold/normal/normal/132.png",
                imgS: "imgs/gen2/gold/shiny/shiny/132.png"
            },
            {
                id: 93,
                name: "Pineco",
                img: "imgs/gen2/gold/normal/normal/204.png",
                imgS: "imgs/gen2/gold/shiny/shiny/204.png"
            },
            {
                id: 94,
                name: "Forretress",
                img: "imgs/gen2/gold/normal/normal/205.png",
                imgS: "imgs/gen2/gold/shiny/shiny/205.png"
            },
            {
                id: 95,
                name: "Nidoran♀",
                img: "imgs/gen2/gold/normal/normal/029.png",
                imgS: "imgs/gen2/gold/shiny/shiny/029.png"
            },
            {
                id: 96,
                name: "Nidorina",
                img: "imgs/gen2/gold/normal/normal/030.png",
                imgS: "imgs/gen2/gold/shiny/shiny/030.png"
            },
            {
                id: 97,
                name: "Nidoqueen",
                img: "imgs/gen2/gold/normal/normal/031.png",
                imgS: "imgs/gen2/gold/shiny/shiny/031.png"
            },
            {
                id: 98,
                name: "Nidoran♂",
                img: "imgs/gen2/gold/normal/normal/032.png",
                imgS: "imgs/gen2/gold/shiny/shiny/032.png"
            },
            {
                id: 99,
                name: "Nidorino",
                img: "imgs/gen2/gold/normal/normal/033.png",
                imgS: "imgs/gen2/gold/shiny/shiny/033.png"
            },
            {
                id: 100,
                name: "Nidoking",
                img: "imgs/gen2/gold/normal/normal/034.png",
                imgS: "imgs/gen2/gold/shiny/shiny/034.png"
            },
            {
                id: 101,
                name: "Yanma",
                img: "imgs/gen2/gold/normal/normal/193.png",
                imgS: "imgs/gen2/gold/shiny/shiny/193.png"
            },
            {
                id: 102,
                name: "Sunkern",
                img: "imgs/gen2/gold/normal/normal/191.png",
                imgS: "imgs/gen2/gold/shiny/shiny/191.png"
            },
            {
                id: 103,
                name: "Sunflora",
                img: "imgs/gen2/gold/normal/normal/192.png",
                imgS: "imgs/gen2/gold/shiny/shiny/192.png"
            },
            {
                id: 104,
                name: "Exeggcute",
                img: "imgs/gen2/gold/normal/normal/102.png",
                imgS: "imgs/gen2/gold/shiny/shiny/102.png"
            },
            {
                id: 105,
                name: "Exeggutor",
                img: "imgs/gen2/gold/normal/normal/103.png",
                imgS: "imgs/gen2/gold/shiny/shiny/103.png"
            },
            {
                id: 106,
                name: "Sudowoodo",
                img: "imgs/gen2/gold/normal/normal/185.png",
                imgS: "imgs/gen2/gold/shiny/shiny/185.png"
            },
            {
                id: 107,
                name: "Wobbuffet",
                img: "imgs/gen2/gold/normal/normal/202.png",
                imgS: "imgs/gen2/gold/shiny/shiny/202.png"
            },
            {
                id: 108,
                name: "Venonat",
                img: "imgs/gen2/gold/normal/normal/048.png",
                imgS: "imgs/gen2/gold/shiny/shiny/048.png"
            },
            {
                id: 109,
                name: "Venomoth",
                img: "imgs/gen2/gold/normal/normal/049.png",
                imgS: "imgs/gen2/gold/shiny/shiny/049.png"
            },
            {
                id: 110,
                name: "Scyther",
                img: "imgs/gen2/gold/normal/normal/123.png",
                imgS: "imgs/gen2/gold/shiny/shiny/123.png"
            },
            {
                id: 111,
                name: "Scizor",
                img: "imgs/gen2/gold/normal/normal/212.png",
                imgS: "imgs/gen2/gold/shiny/shiny/212.png"
            },
            {
                id: 112,
                name: "Pinsir",
                img: "imgs/gen2/gold/normal/normal/127.png",
                imgS: "imgs/gen2/gold/shiny/shiny/127.png"
            },
            {
                id: 113,
                name: "Heracross",
                img: "imgs/gen2/gold/normal/normal/214.png",
                imgS: "imgs/gen2/gold/shiny/shiny/214.png"
            },
            {
                id: 114,
                name: "Koffing",
                img: "imgs/gen2/gold/normal/normal/109.png",
                imgS: "imgs/gen2/gold/shiny/shiny/109.png"
            },
            {
                id: 115,
                name: "Weezing",
                img: "imgs/gen2/gold/normal/normal/110.png",
                imgS: "imgs/gen2/gold/shiny/shiny/110.png"
            },
            {
                id: 116,
                name: "Grimer",
                img: "imgs/gen2/gold/normal/normal/088.png",
                imgS: "imgs/gen2/gold/shiny/shiny/088.png"
            },
            {
                id: 117,
                name: "Muk",
                img: "imgs/gen2/gold/normal/normal/089.png",
                imgS: "imgs/gen2/gold/shiny/shiny/089.png"
            },
            {
                id: 118,
                name: "Magnemite",
                img: "imgs/gen2/gold/normal/normal/081.png",
                imgS: "imgs/gen2/gold/shiny/shiny/081.png"
            },
            {
                id: 119,
                name: "Magneton",
                img: "imgs/gen2/gold/normal/normal/082.png",
                imgS: "imgs/gen2/gold/shiny/shiny/082.png"
            },
            {
                id: 120,
                name: "Voltorb",
                img: "imgs/gen2/gold/normal/normal/100.png",
                imgS: "imgs/gen2/gold/shiny/shiny/100.png"
            },
            {
                id: 121,
                name: "Electrode",
                img: "imgs/gen2/gold/normal/normal/101.png",
                imgS: "imgs/gen2/gold/shiny/shiny/101.png"
            },
            {
                id: 122,
                name: "Aipom",
                img: "imgs/gen2/gold/normal/normal/190.png",
                imgS: "imgs/gen2/gold/shiny/shiny/190.png"
            },
            {
                id: 123,
                name: "Snubbull",
                img: "imgs/gen2/gold/normal/normal/209.png",
                imgS: "imgs/gen2/gold/shiny/shiny/209.png"
            },
            {
                id: 124,
                name: "Granbull",
                img: "imgs/gen2/gold/normal/normal/210.png",
                imgS: "imgs/gen2/gold/shiny/shiny/210.png"
            },
            {
                id: 125,
                name: "Vulpix",
                img: "imgs/gen2/gold/normal/normal/037.png",
                imgS: "imgs/gen2/gold/shiny/shiny/037.png"
            },
            {
                id: 126,
                name: "Ninetales",
                img: "imgs/gen2/gold/normal/normal/038.png",
                imgS: "imgs/gen2/gold/shiny/shiny/038.png"
            },
            {
                id: 127,
                name: "Growlithe",
                img: "imgs/gen2/gold/normal/normal/058.png",
                imgS: "imgs/gen2/gold/shiny/shiny/058.png"
            },
            {
                id: 128,
                name: "Arcanine",
                img: "imgs/gen2/gold/normal/normal/059.png",
                imgS: "imgs/gen2/gold/shiny/shiny/059.png"
            },
            {
                id: 129,
                name: "Stantler",
                img: "imgs/gen2/gold/normal/normal/234.png",
                imgS: "imgs/gen2/gold/shiny/shiny/234.png"
            },
            {
                id: 130,
                name: "Marill",
                img: "imgs/gen2/gold/normal/normal/183.png",
                imgS: "imgs/gen2/gold/shiny/shiny/183.png"
            },
            {
                id: 131,
                name: "Azumarill",
                img: "imgs/gen2/gold/normal/normal/184.png",
                imgS: "imgs/gen2/gold/shiny/shiny/184.png"
            },
            {
                id: 132,
                name: "Diglett",
                img: "imgs/gen2/gold/normal/normal/050.png",
                imgS: "imgs/gen2/gold/shiny/shiny/050.png"
            },
            {
                id: 133,
                name: "Dugtrio",
                img: "imgs/gen2/gold/normal/normal/051.png",
                imgS: "imgs/gen2/gold/shiny/shiny/051.png"
            },
            {
                id: 134,
                name: "Mankey",
                img: "imgs/gen2/gold/normal/normal/056.png",
                imgS: "imgs/gen2/gold/shiny/shiny/056.png"
            },
            {
                id: 135,
                name: "Primeape",
                img: "imgs/gen2/gold/normal/normal/057.png",
                imgS: "imgs/gen2/gold/shiny/shiny/057.png"
            },
            {
                id: 136,
                name: "Meowth",
                img: "imgs/gen2/gold/normal/normal/052.png",
                imgS: "imgs/gen2/gold/shiny/shiny/052.png"
            },
            {
                id: 137,
                name: "Persian",
                img: "imgs/gen2/gold/normal/normal/053.png",
                imgS: "imgs/gen2/gold/shiny/shiny/053.png"
            },
            {
                id: 138,
                name: "Psyduck",
                img: "imgs/gen2/gold/normal/normal/054.png",
                imgS: "imgs/gen2/gold/shiny/shiny/054.png"
            },
            {
                id: 139,
                name: "Golduck",
                img: "imgs/gen2/gold/normal/normal/055.png",
                imgS: "imgs/gen2/gold/shiny/shiny/055.png"
            },
            {
                id: 140,
                name: "Machop",
                img: "imgs/gen2/gold/normal/normal/066.png",
                imgS: "imgs/gen2/gold/shiny/shiny/066.png"
            },
            {
                id: 141,
                name: "Machoke",
                img: "imgs/gen2/gold/normal/normal/067.png",
                imgS: "imgs/gen2/gold/shiny/shiny/067.png"
            },
            {
                id: 142,
                name: "Machamp",
                img: "imgs/gen2/gold/normal/normal/068.png",
                imgS: "imgs/gen2/gold/shiny/shiny/068.png"
            },
            {
                id: 143,
                name: "Tyrogue",
                img: "imgs/gen2/gold/normal/normal/236.png",
                imgS: "imgs/gen2/gold/shiny/shiny/236.png"
            },
            {
                id: 144,
                name: "Hitmonlee",
                img: "imgs/gen2/gold/normal/normal/106.png",
                imgS: "imgs/gen2/gold/shiny/shiny/106.png"
            },
            {
                id: 145,
                name: "Hitmonchan",
                img: "imgs/gen2/gold/normal/normal/107.png",
                imgS: "imgs/gen2/gold/shiny/shiny/107.png"
            },
            {
                id: 146,
                name: "Hitmontop",
                img: "imgs/gen2/gold/normal/normal/237.png",
                imgS: "imgs/gen2/gold/shiny/shiny/237.png"
            },
            {
                id: 147,
                name: "Girafarig",
                img: "imgs/gen2/gold/normal/normal/203.png",
                imgS: "imgs/gen2/gold/shiny/shiny/203.png"
            },
            {
                id: 148,
                name: "Tauros",
                img: "imgs/gen2/gold/normal/normal/128.png",
                imgS: "imgs/gen2/gold/shiny/shiny/128.png"
            },
            {
                id: 149,
                name: "Miltank",
                img: "imgs/gen2/gold/normal/normal/241.png",
                imgS: "imgs/gen2/gold/shiny/shiny/241.png"
            },
            {
                id: 150,
                name: "Magby",
                img: "imgs/gen2/gold/normal/normal/240.png",
                imgS: "imgs/gen2/gold/shiny/shiny/240.png"
            },
            {
                id: 151,
                name: "Magmar",
                img: "imgs/gen2/gold/normal/normal/126.png",
                imgS: "imgs/gen2/gold/shiny/shiny/126.png"
            },
            {
                id: 152,
                name: "Smoochum",
                img: "imgs/gen2/gold/normal/normal/238.png",
                imgS: "imgs/gen2/gold/shiny/shiny/238.png"
            },
            {
                id: 153,
                name: "Jynx",
                img: "imgs/gen2/gold/normal/normal/124.png",
                imgS: "imgs/gen2/gold/shiny/shiny/124.png"
            },
            {
                id: 154,
                name: "Elekid",
                img: "imgs/gen2/gold/normal/normal/239.png",
                imgS: "imgs/gen2/gold/shiny/shiny/239.png"
            },
            {
                id: 155,
                name: "Electabuzz",
                img: "imgs/gen2/gold/normal/normal/125.png",
                imgS: "imgs/gen2/gold/shiny/shiny/125.png"
            },
            {
                id: 156,
                name: "Mr. Mime",
                img: "imgs/gen2/gold/normal/normal/122.png",
                imgS: "imgs/gen2/gold/shiny/shiny/122.png"
            },
            {
                id: 157,
                name: "Smeargle",
                img: "imgs/gen2/gold/normal/normal/235.png",
                imgS: "imgs/gen2/gold/shiny/shiny/235.png"
            },
            {
                id: 158,
                name: "Farfetch'd",
                img: "imgs/gen2/gold/normal/normal/083.png",
                imgS: "imgs/gen2/gold/shiny/shiny/083.png"
            },
            {
                id: 159,
                name: "Natu",
                img: "imgs/gen2/gold/normal/normal/177.png",
                imgS: "imgs/gen2/gold/shiny/shiny/177.png"
            },
            {
                id: 160,
                name: "Xatu",
                img: "imgs/gen2/gold/normal/normal/178.png",
                imgS: "imgs/gen2/gold/shiny/shiny/178.png"
            },
            {
                id: 161,
                name: "Qwilfish",
                img: "imgs/gen2/gold/normal/normal/211.png",
                imgS: "imgs/gen2/gold/shiny/shiny/211.png"
            },
            {
                id: 162,
                name: "Tentacool",
                img: "imgs/gen2/gold/normal/normal/072.png",
                imgS: "imgs/gen2/gold/shiny/shiny/072.png"
            },
            {
                id: 163,
                name: "Tentacruel",
                img: "imgs/gen2/gold/normal/normal/073.png",
                imgS: "imgs/gen2/gold/shiny/shiny/073.png"
            },
            {
                id: 164,
                name: "Krabby",
                img: "imgs/gen2/gold/normal/normal/098.png",
                imgS: "imgs/gen2/gold/shiny/shiny/098.png"
            },
            {
                id: 165,
                name: "Kingler",
                img: "imgs/gen2/gold/normal/normal/099.png",
                imgS: "imgs/gen2/gold/shiny/shiny/099.png"
            },
            {
                id: 166,
                name: "Shuckle",
                img: "imgs/gen2/gold/normal/normal/213.png",
                imgS: "imgs/gen2/gold/shiny/shiny/213.png"
            },
            {
                id: 167,
                name: "Staryu",
                img: "imgs/gen2/gold/normal/normal/120.png",
                imgS: "imgs/gen2/gold/shiny/shiny/120.png"
            },
            {
                id: 168,
                name: "Starmie",
                img: "imgs/gen2/gold/normal/normal/121.png",
                imgS: "imgs/gen2/gold/shiny/shiny/121.png"
            },
            {
                id: 169,
                name: "Shellder",
                img: "imgs/gen2/gold/normal/normal/090.png",
                imgS: "imgs/gen2/gold/shiny/shiny/090.png"
            },
            {
                id: 170,
                name: "Cloyster",
                img: "imgs/gen2/gold/normal/normal/091.png",
                imgS: "imgs/gen2/gold/shiny/shiny/091.png"
            },
            {
                id: 171,
                name: "Corsola",
                img: "imgs/gen2/gold/normal/normal/222.png",
                imgS: "imgs/gen2/gold/shiny/shiny/222.png"
            },
            {
                id: 172,
                name: "Remoraid",
                img: "imgs/gen2/gold/normal/normal/223.png",
                imgS: "imgs/gen2/gold/shiny/shiny/223.png"
            },
            {
                id: 173,
                name: "Octillery",
                img: "imgs/gen2/gold/normal/normal/224.png",
                imgS: "imgs/gen2/gold/shiny/shiny/224.png"
            },
            {
                id: 174,
                name: "Chinchou",
                img: "imgs/gen2/gold/normal/normal/170.png",
                imgS: "imgs/gen2/gold/shiny/shiny/170.png"
            },
            {
                id: 175,
                name: "Lanturn",
                img: "imgs/gen2/gold/normal/normal/171.png",
                imgS: "imgs/gen2/gold/shiny/shiny/171.png"
            },
            {
                id: 176,
                name: "Seel",
                img: "imgs/gen2/gold/normal/normal/086.png",
                imgS: "imgs/gen2/gold/shiny/shiny/086.png"
            },
            {
                id: 177,
                name: "Dewgong",
                img: "imgs/gen2/gold/normal/normal/087.png",
                imgS: "imgs/gen2/gold/shiny/shiny/087.png"
            },
            {
                id: 178,
                name: "Lickitung",
                img: "imgs/gen2/gold/normal/normal/108.png",
                imgS: "imgs/gen2/gold/shiny/shiny/108.png"
            },
            {
                id: 179,
                name: "Tangela",
                img: "imgs/gen2/gold/normal/normal/114.png",
                imgS: "imgs/gen2/gold/shiny/shiny/114.png"
            },
            {
                id: 180,
                name: "Eevee",
                img: "imgs/gen2/gold/normal/normal/133.png",
                imgS: "imgs/gen2/gold/shiny/shiny/133.png"
            },
            {
                id: 181,
                name: "Vaporeon",
                img: "imgs/gen2/gold/normal/normal/134.png",
                imgS: "imgs/gen2/gold/shiny/shiny/134.png"
            },
            {
                id: 182,
                name: "Jolteon",
                img: "imgs/gen2/gold/normal/normal/135.png",
                imgS: "imgs/gen2/gold/shiny/shiny/135.png"
            },
            {
                id: 183,
                name: "Flareon",
                img: "imgs/gen2/gold/normal/normal/136.png",
                imgS: "imgs/gen2/gold/shiny/shiny/136.png"
            },
            {
                id: 184,
                name: "Espeon",
                img: "imgs/gen2/gold/normal/normal/196.png",
                imgS: "imgs/gen2/gold/shiny/shiny/196.png"
            },
            {
                id: 185,
                name: "Umbreon",
                img: "imgs/gen2/gold/normal/normal/197.png",
                imgS: "imgs/gen2/gold/shiny/shiny/197.png"
            },
            {
                id: 186,
                name: "Horsea",
                img: "imgs/gen2/gold/normal/normal/116.png",
                imgS: "imgs/gen2/gold/shiny/shiny/116.png"
            },
            {
                id: 187,
                name: "Seadra",
                img: "imgs/gen2/gold/normal/normal/117.png",
                imgS: "imgs/gen2/gold/shiny/shiny/117.png"
            },
            {
                id: 188,
                name: "Kingdra",
                img: "imgs/gen2/gold/normal/normal/230.png",
                imgS: "imgs/gen2/gold/shiny/shiny/230.png"
            },
            {
                id: 189,
                name: "Gligar",
                img: "imgs/gen2/gold/normal/normal/207.png",
                imgS: "imgs/gen2/gold/shiny/shiny/207.png"
            },
            {
                id: 190,
                name: "Delibird",
                img: "imgs/gen2/gold/normal/normal/225.png",
                imgS: "imgs/gen2/gold/shiny/shiny/225.png"
            },
            {
                id: 191,
                name: "Swinub",
                img: "imgs/gen2/gold/normal/normal/220.png",
                imgS: "imgs/gen2/gold/shiny/shiny/220.png"
            },
            {
                id: 192,
                name: "Piloswine",
                img: "imgs/gen2/gold/normal/normal/221.png",
                imgS: "imgs/gen2/gold/shiny/shiny/221.png"
            },
            {
                id: 193,
                name: "Teddiursa",
                img: "imgs/gen2/gold/normal/normal/216.png",
                imgS: "imgs/gen2/gold/shiny/shiny/216.png"
            },
            {
                id: 194,
                name: "Ursaring",
                img: "imgs/gen2/gold/normal/normal/217.png",
                imgS: "imgs/gen2/gold/shiny/shiny/217.png"
            },
            {
                id: 195,
                name: "Phanpy",
                img: "imgs/gen2/gold/normal/normal/231.png",
                imgS: "imgs/gen2/gold/shiny/shiny/231.png"
            },
            {
                id: 196,
                name: "Donphan",
                img: "imgs/gen2/gold/normal/normal/232.png",
                imgS: "imgs/gen2/gold/shiny/shiny/232.png"
            },
            {
                id: 197,
                name: "Mantine",
                img: "imgs/gen2/gold/normal/normal/226.png",
                imgS: "imgs/gen2/gold/shiny/shiny/226.png"
            },
            {
                id: 198,
                name: "Skarmory",
                img: "imgs/gen2/gold/normal/normal/227.png",
                imgS: "imgs/gen2/gold/shiny/shiny/227.png"
            },
            {
                id: 199,
                name: "Doduo",
                img: "imgs/gen2/gold/normal/normal/084.png",
                imgS: "imgs/gen2/gold/shiny/shiny/084.png"
            },
            {
                id: 200,
                name: "Dodrio",
                img: "imgs/gen2/gold/normal/normal/085.png",
                imgS: "imgs/gen2/gold/shiny/shiny/085.png"
            },
            {
                id: 201,
                name: "Ponyta",
                img: "imgs/gen2/gold/normal/normal/077.png",
                imgS: "imgs/gen2/gold/shiny/shiny/077.png"
            },
            {
                id: 202,
                name: "Rapidash",
                img: "imgs/gen2/gold/normal/normal/078.png",
                imgS: "imgs/gen2/gold/shiny/shiny/078.png"
            },
            {
                id: 203,
                name: "Cubone",
                img: "imgs/gen2/gold/normal/normal/104.png",
                imgS: "imgs/gen2/gold/shiny/shiny/104.png"
            },
            {
                id: 204,
                name: "Marowak",
                img: "imgs/gen2/gold/normal/normal/105.png",
                imgS: "imgs/gen2/gold/shiny/shiny/105.png"
            },
            {
                id: 205,
                name: "Kangaskhan",
                img: "imgs/gen2/gold/normal/normal/115.png",
                imgS: "imgs/gen2/gold/shiny/shiny/115.png"
            },
            {
                id: 206,
                name: "Rhyhorn",
                img: "imgs/gen2/gold/normal/normal/111.png",
                imgS: "imgs/gen2/gold/shiny/shiny/111.png"
            },
            {
                id: 207,
                name: "Rhydon",
                img: "imgs/gen2/gold/normal/normal/112.png",
                imgS: "imgs/gen2/gold/shiny/shiny/112.png"
            },
            {
                id: 208,
                name: "Murkrow",
                img: "imgs/gen2/gold/normal/normal/198.png",
                imgS: "imgs/gen2/gold/shiny/shiny/198.png"
            },
            {
                id: 209,
                name: "Houndour",
                img: "imgs/gen2/gold/normal/normal/228.png",
                imgS: "imgs/gen2/gold/shiny/shiny/228.png"
            },
            {
                id: 210,
                name: "Houndoom",
                img: "imgs/gen2/gold/normal/normal/229.png",
                imgS: "imgs/gen2/gold/shiny/shiny/229.png"
            },
            {
                id: 211,
                name: "Slugma",
                img: "imgs/gen2/gold/normal/normal/218.png",
                imgS: "imgs/gen2/gold/shiny/shiny/218.png"
            },
            {
                id: 212,
                name: "Magcargo",
                img: "imgs/gen2/gold/normal/normal/219.png",
                imgS: "imgs/gen2/gold/shiny/shiny/219.png"
            },
            {
                id: 213,
                name: "Sneasel",
                img: "imgs/gen2/gold/normal/normal/215.png",
                imgS: "imgs/gen2/gold/shiny/shiny/215.png"
            },
            {
                id: 214,
                name: "Misdreavus",
                img: "imgs/gen2/gold/normal/normal/200.png",
                imgS: "imgs/gen2/gold/shiny/shiny/200.png"
            },
            {
                id: 215,
                name: "Porygon",
                img: "imgs/gen2/gold/normal/normal/137.png",
                imgS: "imgs/gen2/gold/shiny/shiny/137.png"
            },
            {
                id: 216,
                name: "Porygon2",
                img: "imgs/gen2/gold/normal/normal/233.png",
                imgS: "imgs/gen2/gold/shiny/shiny/233.png"
            },
            {
                id: 217,
                name: "Chansey",
                img: "imgs/gen2/gold/normal/normal/113.png",
                imgS: "imgs/gen2/gold/shiny/shiny/113.png"
            },
            {
                id: 218,
                name: "Blissey",
                img: "imgs/gen2/gold/normal/normal/242.png",
                imgS: "imgs/gen2/gold/shiny/shiny/242.png"
            },
            {
                id: 219,
                name: "Lapras",
                img: "imgs/gen2/gold/normal/normal/131.png",
                imgS: "imgs/gen2/gold/shiny/shiny/131.png"
            },
            {
                id: 220,
                name: "Omanyte",
                img: "imgs/gen2/gold/normal/normal/138.png",
                imgS: "imgs/gen2/gold/shiny/shiny/138.png"
            },
            {
                id: 221,
                name: "Omastar",
                img: "imgs/gen2/gold/normal/normal/139.png",
                imgS: "imgs/gen2/gold/shiny/shiny/139.png"
            },
            {
                id: 222,
                name: "Kabuto",
                img: "imgs/gen2/gold/normal/normal/140.png",
                imgS: "imgs/gen2/gold/shiny/shiny/140.png"
            },
            {
                id: 223,
                name: "Kabutops",
                img: "imgs/gen2/gold/normal/normal/141.png",
                imgS: "imgs/gen2/gold/shiny/shiny/141.png"
            },
            {
                id: 224,
                name: "Aerodactyl",
                img: "imgs/gen2/gold/normal/normal/142.png",
                imgS: "imgs/gen2/gold/shiny/shiny/142.png"
            },
            {
                id: 225,
                name: "Snorlax",
                img: "imgs/gen2/gold/normal/normal/143.png",
                imgS: "imgs/gen2/gold/shiny/shiny/143.png"
            },
            {
                id: 226,
                name: "Bulbasaur",
                img: "imgs/gen2/gold/normal/normal/001.png",
                imgS: "imgs/gen2/gold/shiny/shiny/001.png"
            },
            {
                id: 227,
                name: "Ivysaur",
                img: "imgs/gen2/gold/normal/normal/002.png",
                imgS: "imgs/gen2/gold/shiny/shiny/002.png"
            },
            {
                id: 228,
                name: "Venusaur",
                img: "imgs/gen2/gold/normal/normal/003.png",
                imgS: "imgs/gen2/gold/shiny/shiny/003.png"
            },
            {
                id: 229,
                name: "Charmander",
                img: "imgs/gen2/gold/normal/normal/004.png",
                imgS: "imgs/gen2/gold/shiny/shiny/004.png"
            },
            {
                id: 230,
                name: "Charmeleon",
                img: "imgs/gen2/gold/normal/normal/005.png",
                imgS: "imgs/gen2/gold/shiny/shiny/005.png"
            },
            {
                id: 231,
                name: "Charizard",
                img: "imgs/gen2/gold/normal/normal/006.png",
                imgS: "imgs/gen2/gold/shiny/shiny/006.png"
            },
            {
                id: 232,
                name: "Squirtle",
                img: "imgs/gen2/gold/normal/normal/007.png",
                imgS: "imgs/gen2/gold/shiny/shiny/007.png"
            },
            {
                id: 233,
                name: "Wartortle",
                img: "imgs/gen2/gold/normal/normal/008.png",
                imgS: "imgs/gen2/gold/shiny/shiny/008.png"
            },
            {
                id: 234,
                name: "Blastoise",
                img: "imgs/gen2/gold/normal/normal/009.png",
                imgS: "imgs/gen2/gold/shiny/shiny/009.png"
            },
            {
                id: 235,
                name: "Articuno",
                img: "imgs/gen2/gold/normal/normal/144.png",
                imgS: "imgs/gen2/gold/shiny/shiny/144.png"
            },
            {
                id: 236,
                name: "Zapdos",
                img: "imgs/gen2/gold/normal/normal/145.png",
                imgS: "imgs/gen2/gold/shiny/shiny/145.png"
            },
            {
                id: 237,
                name: "Moltres",
                img: "imgs/gen2/gold/normal/normal/146.png",
                imgS: "imgs/gen2/gold/shiny/shiny/146.png"
            },
            {
                id: 238,
                name: "Raikou",
                img: "imgs/gen2/gold/normal/normal/243.png",
                imgS: "imgs/gen2/gold/shiny/shiny/243.png"
            },
            {
                id: 239,
                name: "Entei",
                img: "imgs/gen2/gold/normal/normal/244.png",
                imgS: "imgs/gen2/gold/shiny/shiny/244.png"
            },
            {
                id: 240,
                name: "Suicune",
                img: "imgs/gen2/gold/normal/normal/245.png",
                imgS: "imgs/gen2/gold/shiny/shiny/245.png"
            },
            {
                id: 241,
                name: "Dratini",
                img: "imgs/gen2/gold/normal/normal/147.png",
                imgS: "imgs/gen2/gold/shiny/shiny/147.png"
            },
            {
                id: 242,
                name: "Dragonair",
                img: "imgs/gen2/gold/normal/normal/148.png",
                imgS: "imgs/gen2/gold/shiny/shiny/148.png"
            },
            {
                id: 243,
                name: "Dragonite",
                img: "imgs/gen2/gold/normal/normal/149.png",
                imgS: "imgs/gen2/gold/shiny/shiny/149.png"
            },
            {
                id: 244,
                name: "Larvitar",
                img: "imgs/gen2/gold/normal/normal/246.png",
                imgS: "imgs/gen2/gold/shiny/shiny/246.png"
            },
            {
                id: 245,
                name: "Pupitar",
                img: "imgs/gen2/gold/normal/normal/247.png",
                imgS: "imgs/gen2/gold/shiny/shiny/247.png"
            },
            {
                id: 246,
                name: "Tyranitar",
                img: "imgs/gen2/gold/normal/normal/248.png",
                imgS: "imgs/gen2/gold/shiny/shiny/248.png"
            },
            {
                id: 247,
                name: "Lugia",
                img: "imgs/gen2/gold/normal/normal/249.png",
                imgS: "imgs/gen2/gold/shiny/shiny/249.png"
            },
            {
                id: 248,
                name: "Ho-oh",
                img: "imgs/gen2/gold/normal/normal/250.png",
                imgS: "imgs/gen2/gold/shiny/shiny/250.png"
            },
            {
                id: 249,
                name: "Mewtwo",
                img: "imgs/gen2/gold/normal/normal/150.png",
                imgS: "imgs/gen2/gold/shiny/shiny/150.png"
            },
            {
                id: 250,
                name: "Mew",
                img: "imgs/gen2/gold/normal/normal/151.png",
                imgS: "imgs/gen2/gold/shiny/shiny/151.png",
                mythical: true
            },
            {
                id: 251,
                name: "Celebi",
                img: "imgs/gen2/gold/normal/normal/251.png",
                imgS: "imgs/gen2/gold/shiny/shiny/251.png",
                mythical: true
            }
        ]
    },
});