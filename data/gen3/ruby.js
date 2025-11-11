PPGC.register({
    sections: {
        ruby: [
            { id: "ruby-catching", title: "Gotta Catch 'Em All" },
            { id: "ruby-distributions", title: "Distributions" },
            { id: "ruby-story", title: "Main Story" },
            { id: "ruby-sidequests", title: "Side Quests" },
            { id: "ruby-activities", title: "Activities" },
            { id: "ruby-battle", title: "Battle" },
            { id: "ruby-upgrades", title: "Upgrades" },
            { id: "ruby-collectables", title: "Collectables" },
            { id: "ruby-thms", title: "TMs/HMs" },
        ]
    },

    tasks: {
        "ruby-catching": [
            {
                id: "ruby-catching-1", text: "Catch all the Legendaries", done: false, children: [
                    { id: "ruby-catching-1-a", text: "Trade for Kyogre", done: false },
                    { id: "ruby-catching-1-b", text: "Catch Groudon", done: false },
                    { id: "ruby-catching-1-c", text: "Catch Rayquaza", done: false },
                    { id: "ruby-catching-1-d", text: "Catch Regirock", done: false },
                    { id: "ruby-catching-1-e", text: "Catch Registeel", done: false },
                    { id: "ruby-catching-1-f", text: "Catch Regice", done: false },
                    { id: "ruby-catching-1-g", text: "Trade for Latias", done: false },
                    { id: "ruby-catching-1-h", text: "Catch Latios", done: false },
                ]
            },
            {
                id: "ruby-catching-2", text: "Obtain all the Mythicals", done: false, children: [
                    { id: "ruby-catching-2-a", text: "Obtain Jirachi", done: false },
                    { id: "ruby-catching-2-b", text: "Obtain Deoxys", done: false },
                ]
            },
            { id: "ruby-catching-3", text: "Catch/Defeat Kecleon blocking Fortree City", done: false },
            {
                id: "ruby-catching-4", text: "Obtain all In-Game Gift Pokemon", done: false, children: [
                    { id: "ruby-catching-4-a", text: "Lileep / Anorith", done: false },
                    { id: "ruby-catching-4-b", text: "Beldum", done: false },
                    { id: "ruby-catching-4-c", text: "Castform", done: false },
                    { id: "ruby-catching-4-d", text: "Wynaut", done: false },
                ]
            },
            {
                id: "ruby-catching-5", text: "Complete all In-Game Trades", done: false, children: [
                    { id: "ruby-catching-5-a", text: "Slakoth for Makuhita", done: false },
                    { id: "ruby-catching-5-b", text: "Pikachu for Skitty", done: false },
                    { id: "ruby-catching-5-c", text: "Bellossum for Corsola", done: false },
                ]
            },
        ],
        "ruby-distributions": [
        ],
        "ruby-story": [
            { id: "ruby-story-1", text: "Defeat the Elite 4", done: false },
        ],
        "ruby-sidequests": [
            { id: "ruby-sidequests-1", text: "Find the Bug Maniac's Glasses on Route 116", done: false },
        ],
        "ruby-upgrades": [
            { id: "ruby-upgrades-1", text: "Obtain the National PokdDex", done: false },
            {
                id: "ruby-collectables-6", text: "Obtain the Gold 4-Star Trainer Card", done: false, children: [
                    { id: "ruby-collectables-6-a", text: "Defeat the Elite 4/Champion", done: false },
                    { id: "ruby-collectables-6-b", text: "Win all Master Rank Contests", done: false },
                    { id: "ruby-collectables-6-c", text: "Defeat the 50 trainer challenge in the Battle Tower", done: false },
                    { id: "ruby-collectables-6-d", text: "Complete the Hoeen Regional PokeDex (200)", done: false },
                ]
            },
        ],







        "ruby-collectables": [
            { id: "ruby-collectables-1", text: "Obtain the Bike", done: false },
            { id: "ruby-collectables-2", text: "Obtain the Coin Case", done: false },
            { id: "ruby-collectables-3", text: "Obtain the Squirtbottle", done: false },
            { id: "ruby-collectables-4", text: "Obtain the Exp. Share", done: false },
            { id: "ruby-collectables-5", text: "Obtain the EXPN Card", done: false },
            {
                id: "ruby-collectables-6", text: "Obtain all 3 fishing rods", done: false, children: [
                    { id: "ruby-collectables-6-a", text: "Old Rod", done: false },
                    { id: "ruby-collectables-6-b", text: "Good Rod", done: false },
                    { id: "ruby-collectables-6-c", text: "Super Rod", done: false },
                ]
            },
            { id: "ruby-collectables-7", text: "Obtain the Item Finder", done: false },
            { id: "ruby-collectables-8", text: "Find all hidden items with the Item Fidner", done: false }, // need to add a number input 0-88
        ],
        "ruby-thms": [
            {
                id: "ruby-thms-1", text: "Collect all HMs", done: false, children: [
                    { id: "ruby-thms-1-a", text: "HM01: Cut", done: false },
                    { id: "ruby-thms-1-b", text: "HM02: Fly", done: false },
                    { id: "ruby-thms-1-c", text: "HM03: Surf", done: false },
                    { id: "ruby-thms-1-d", text: "HM04: Strength", done: false },
                    { id: "ruby-thms-1-e", text: "HM05: Flash", done: false },
                    { id: "ruby-thms-1-f", text: "HM06: Whirlpool", done: false },
                    { id: "ruby-thms-1-g", text: "HM07: Waterfall", done: false },
                ]
            },
            { id: "ruby-thms-2", text: "Collect all TMs", done: false, children: [] },
        ]
    },

    dex: {
        ruby: [
            {
                id: 1,
                name: "Treecko",
                img: "imgs/gen3/ruby-sapphire/normal/normal/252.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/252.png",
                forms: [
                    {
                        name: "Male (Smaller Body Leaf)",
                        img: "imgs/pokemon_home/normal/gender_forms/315.png",
                        imgS: "imgs/pokemon_home/shiny/gender_forms/315.png",
                    },
                    {
                        name: "Female (Larger Body Leaf)",
                        img: "imgs/pokemon_home/normal/gender_forms/315-f.png",
                        imgS: "imgs/pokemon_home/shiny/gender_forms/315-f.png",
                    },
                ],
            },
            {
                id: 2,
                name: "Grovyle",
                img: "imgs/gen3/ruby-sapphire/normal/normal/253.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/253.png"
            },
            {
                id: 3,
                name: "Sceptile",
                img: "imgs/gen3/ruby-sapphire/normal/normal/254.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/254.png"
            },
            {
                id: 4,
                name: "Torchic",
                img: "imgs/gen3/ruby-sapphire/normal/normal/255.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/255.png"
            },
            {
                id: 5,
                name: "Combusken",
                img: "imgs/gen3/ruby-sapphire/normal/normal/256.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/256.png"
            },
            {
                id: 6,
                name: "Blaziken",
                img: "imgs/gen3/ruby-sapphire/normal/normal/257.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/257.png"
            },
            {
                id: 7,
                name: "Mudkip",
                img: "imgs/gen3/ruby-sapphire/normal/normal/258.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/258.png"
            },
            {
                id: 8,
                name: "Marshtomp",
                img: "imgs/gen3/ruby-sapphire/normal/normal/259.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/259.png"
            },
            {
                id: 9,
                name: "Swampert",
                img: "imgs/gen3/ruby-sapphire/normal/normal/260.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/260.png"
            },
            {
                id: 10,
                name: "Poochyena",
                img: "imgs/gen3/ruby-sapphire/normal/normal/261.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/261.png"
            },
            {
                id: 11,
                name: "Mightyena",
                img: "imgs/gen3/ruby-sapphire/normal/normal/262.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/262.png"
            },
            {
                id: 12,
                name: "Zigzagoon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/263.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/263.png"
            },
            {
                id: 13,
                name: "Linoone",
                img: "imgs/gen3/ruby-sapphire/normal/normal/264.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/264.png"
            },
            {
                id: 14,
                name: "Wurmple",
                img: "imgs/gen3/ruby-sapphire/normal/normal/265.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/265.png"
            },
            {
                id: 15,
                name: "Silcoon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/266.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/266.png"
            },
            {
                id: 16,
                name: "Beautifly",
                img: "imgs/gen3/ruby-sapphire/normal/normal/267.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/267.png"
            },
            {
                id: 17,
                name: "Cascoon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/268.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/268.png"
            },
            {
                id: 18,
                name: "Dustox",
                img: "imgs/gen3/ruby-sapphire/normal/normal/269.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/269.png"
            },
            {
                id: 19,
                name: "Lotad",
                img: "imgs/gen3/ruby-sapphire/normal/normal/270.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/270.png"
            },
            {
                id: 20,
                name: "Lombre",
                img: "imgs/gen3/ruby-sapphire/normal/normal/271.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/271.png"
            },
            {
                id: 21,
                name: "Ludicolo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/272.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/272.png"
            },
            {
                id: 22,
                name: "Seedot",
                img: "imgs/gen3/ruby-sapphire/normal/normal/273.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/273.png"
            },
            {
                id: 23,
                name: "Nuzleaf",
                img: "imgs/gen3/ruby-sapphire/normal/normal/274.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/274.png"
            },
            {
                id: 24,
                name: "Shiftry",
                img: "imgs/gen3/ruby-sapphire/normal/normal/275.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/275.png"
            },
            {
                id: 25,
                name: "Taillow",
                img: "imgs/gen3/ruby-sapphire/normal/normal/276.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/276.png"
            },
            {
                id: 26,
                name: "Swellow",
                img: "imgs/gen3/ruby-sapphire/normal/normal/277.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/277.png"
            },
            {
                id: 27,
                name: "Wingull",
                img: "imgs/gen3/ruby-sapphire/normal/normal/278.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/278.png"
            },
            {
                id: 28,
                name: "Pelipper",
                img: "imgs/gen3/ruby-sapphire/normal/normal/279.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/279.png"
            },
            {
                id: 29,
                name: "Ralts",
                img: "imgs/gen3/ruby-sapphire/normal/normal/280.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/280.png"
            },
            {
                id: 30,
                name: "Kirlia",
                img: "imgs/gen3/ruby-sapphire/normal/normal/281.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/281.png"
            },
            {
                id: 31,
                name: "Gardevoir",
                img: "imgs/gen3/ruby-sapphire/normal/normal/282.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/282.png"
            },
            {
                id: 32,
                name: "Surskit",
                img: "imgs/gen3/ruby-sapphire/normal/normal/283.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/283.png"
            },
            {
                id: 33,
                name: "Masquerain",
                img: "imgs/gen3/ruby-sapphire/normal/normal/284.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/284.png"
            },
            {
                id: 34,
                name: "Shroomish",
                img: "imgs/gen3/ruby-sapphire/normal/normal/285.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/285.png"
            },
            {
                id: 35,
                name: "Breloom",
                img: "imgs/gen3/ruby-sapphire/normal/normal/286.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/286.png"
            },
            {
                id: 36,
                name: "Slakoth",
                img: "imgs/gen3/ruby-sapphire/normal/normal/287.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/287.png"
            },
            {
                id: 37,
                name: "Vigoroth",
                img: "imgs/gen3/ruby-sapphire/normal/normal/288.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/288.png"
            },
            {
                id: 38,
                name: "Slaking",
                img: "imgs/gen3/ruby-sapphire/normal/normal/289.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/289.png"
            },
            {
                id: 39,
                name: "Abra",
                img: "imgs/gen3/ruby-sapphire/normal/normal/063.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/063.png"
            },
            {
                id: 40,
                name: "Kadabra",
                img: "imgs/gen3/ruby-sapphire/normal/normal/064.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/064.png"
            },
            {
                id: 41,
                name: "Alakazam",
                img: "imgs/gen3/ruby-sapphire/normal/normal/065.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/065.png"
            },
            {
                id: 42,
                name: "Nincada",
                img: "imgs/gen3/ruby-sapphire/normal/normal/290.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/290.png"
            },
            {
                id: 43,
                name: "Ninjask",
                img: "imgs/gen3/ruby-sapphire/normal/normal/291.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/291.png"
            },
            {
                id: 44,
                name: "Shedinja",
                img: "imgs/gen3/ruby-sapphire/normal/normal/292.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/292.png"
            },
            {
                id: 45,
                name: "Whismur",
                img: "imgs/gen3/ruby-sapphire/normal/normal/293.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/293.png"
            },
            {
                id: 46,
                name: "Loudred",
                img: "imgs/gen3/ruby-sapphire/normal/normal/294.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/294.png"
            },
            {
                id: 47,
                name: "Exploud",
                img: "imgs/gen3/ruby-sapphire/normal/normal/295.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/295.png"
            },
            {
                id: 48,
                name: "Makuhita",
                img: "imgs/gen3/ruby-sapphire/normal/normal/296.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/296.png"
            },
            {
                id: 49,
                name: "Hariyama",
                img: "imgs/gen3/ruby-sapphire/normal/normal/297.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/297.png"
            },
            {
                id: 50,
                name: "Goldeen",
                img: "imgs/gen3/ruby-sapphire/normal/normal/118.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/118.png"
            },
            {
                id: 51,
                name: "Seaking",
                img: "imgs/gen3/ruby-sapphire/normal/normal/119.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/119.png"
            },
            {
                id: 52,
                name: "Magikarp",
                img: "imgs/gen3/ruby-sapphire/normal/normal/129.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/129.png"
            },
            {
                id: 53,
                name: "Gyarados",
                img: "imgs/gen3/ruby-sapphire/normal/normal/130.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/130.png"
            },
            {
                id: 54,
                name: "Azurill",
                img: "imgs/gen3/ruby-sapphire/normal/normal/298.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/298.png"
            },
            {
                id: 55,
                name: "Marill",
                img: "imgs/gen3/ruby-sapphire/normal/normal/183.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/183.png"
            },
            {
                id: 56,
                name: "Azumarill",
                img: "imgs/gen3/ruby-sapphire/normal/normal/184.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/184.png"
            },
            {
                id: 57,
                name: "Geodude",
                img: "imgs/gen3/ruby-sapphire/normal/normal/074.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/074.png"
            },
            {
                id: 58,
                name: "Graveler",
                img: "imgs/gen3/ruby-sapphire/normal/normal/075.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/075.png"
            },
            {
                id: 59,
                name: "Golem",
                img: "imgs/gen3/ruby-sapphire/normal/normal/076.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/076.png"
            },
            {
                id: 60,
                name: "Nosepass",
                img: "imgs/gen3/ruby-sapphire/normal/normal/299.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/299.png"
            },
            {
                id: 61,
                name: "Skitty",
                img: "imgs/gen3/ruby-sapphire/normal/normal/300.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/300.png"
            },
            {
                id: 62,
                name: "Delcatty",
                img: "imgs/gen3/ruby-sapphire/normal/normal/301.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/301.png"
            },
            {
                id: 63,
                name: "Zubat",
                img: "imgs/gen3/ruby-sapphire/normal/normal/041.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/041.png"
            },
            {
                id: 64,
                name: "Golbat",
                img: "imgs/gen3/ruby-sapphire/normal/normal/042.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/042.png"
            },
            {
                id: 65,
                name: "Crobat",
                img: "imgs/gen3/ruby-sapphire/normal/normal/169.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/169.png"
            },
            {
                id: 66,
                name: "Tentacool",
                img: "imgs/gen3/ruby-sapphire/normal/normal/072.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/072.png"
            },
            {
                id: 67,
                name: "Tentacruel",
                img: "imgs/gen3/ruby-sapphire/normal/normal/073.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/073.png"
            },
            {
                id: 68,
                name: "Sableye",
                img: "imgs/gen3/ruby-sapphire/normal/normal/302.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/302.png"
            },
            {
                id: 69,
                name: "Mawile",
                img: "imgs/gen3/ruby-sapphire/normal/normal/303.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/303.png"
            },
            {
                id: 70,
                name: "Aron",
                img: "imgs/gen3/ruby-sapphire/normal/normal/304.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/304.png"
            },
            {
                id: 71,
                name: "Lairon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/305.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/305.png"
            },
            {
                id: 72,
                name: "Aggron",
                img: "imgs/gen3/ruby-sapphire/normal/normal/306.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/306.png"
            },
            {
                id: 73,
                name: "Machop",
                img: "imgs/gen3/ruby-sapphire/normal/normal/066.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/066.png"
            },
            {
                id: 74,
                name: "Machoke",
                img: "imgs/gen3/ruby-sapphire/normal/normal/067.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/067.png"
            },
            {
                id: 75,
                name: "Machamp",
                img: "imgs/gen3/ruby-sapphire/normal/normal/068.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/068.png"
            },
            {
                id: 76,
                name: "Meditite",
                img: "imgs/gen3/ruby-sapphire/normal/normal/307.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/307.png"
            },
            {
                id: 77,
                name: "Medicham",
                img: "imgs/gen3/ruby-sapphire/normal/normal/308.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/308.png"
            },
            {
                id: 78,
                name: "Electrike",
                img: "imgs/gen3/ruby-sapphire/normal/normal/309.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/309.png"
            },
            {
                id: 79,
                name: "Manectric",
                img: "imgs/gen3/ruby-sapphire/normal/normal/310.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/310.png"
            },
            {
                id: 80,
                name: "Plusle",
                img: "imgs/gen3/ruby-sapphire/normal/normal/311.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/311.png"
            },
            {
                id: 81,
                name: "Minun",
                img: "imgs/gen3/ruby-sapphire/normal/normal/312.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/312.png"
            },
            {
                id: 82,
                name: "Magnemite",
                img: "imgs/gen3/ruby-sapphire/normal/normal/081.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/081.png"
            },
            {
                id: 83,
                name: "Magneton",
                img: "imgs/gen3/ruby-sapphire/normal/normal/082.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/082.png"
            },
            {
                id: 84,
                name: "Voltorb",
                img: "imgs/gen3/ruby-sapphire/normal/normal/100.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/100.png"
            },
            {
                id: 85,
                name: "Electrode",
                img: "imgs/gen3/ruby-sapphire/normal/normal/101.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/101.png"
            },
            {
                id: 86,
                name: "Volbeat",
                img: "imgs/gen3/ruby-sapphire/normal/normal/313.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/313.png"
            },
            {
                id: 87,
                name: "Illumise",
                img: "imgs/gen3/ruby-sapphire/normal/normal/314.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/314.png"
            },
            {
                id: 88,
                name: "Oddish",
                img: "imgs/gen3/ruby-sapphire/normal/normal/043.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/043.png"
            },
            {
                id: 89,
                name: "Gloom",
                img: "imgs/gen3/ruby-sapphire/normal/normal/044.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/044.png"
            },
            {
                id: 90,
                name: "Vileplume",
                img: "imgs/gen3/ruby-sapphire/normal/normal/045.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/045.png"
            },
            {
                id: 91,
                name: "Bellossom",
                img: "imgs/gen3/ruby-sapphire/normal/normal/182.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/182.png"
            },
            {
                id: 92,
                name: "Doduo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/084.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/084.png"
            },
            {
                id: 93,
                name: "Dodrio",
                img: "imgs/gen3/ruby-sapphire/normal/normal/085.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/085.png"
            },
            {
                id: 94,
                name: "Roselia",
                img: "imgs/gen3/ruby-sapphire/normal/normal/315.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/315.png"
            },
            {
                id: 95,
                name: "Gulpin",
                img: "imgs/gen3/ruby-sapphire/normal/normal/316.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/316.png"
            },
            {
                id: 96,
                name: "Swalot",
                img: "imgs/gen3/ruby-sapphire/normal/normal/317.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/317.png"
            },
            {
                id: 97,
                name: "Carvanha",
                img: "imgs/gen3/ruby-sapphire/normal/normal/318.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/318.png"
            },
            {
                id: 98,
                name: "Sharpedo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/319.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/319.png"
            },
            {
                id: 99,
                name: "Wailmer",
                img: "imgs/gen3/ruby-sapphire/normal/normal/320.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/320.png"
            },
            {
                id: 100,
                name: "Wailord",
                img: "imgs/gen3/ruby-sapphire/normal/normal/321.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/321.png"
            },
            {
                id: 101,
                name: "Numel",
                img: "imgs/gen3/ruby-sapphire/normal/normal/322.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/322.png"
            },
            {
                id: 102,
                name: "Camerupt",
                img: "imgs/gen3/ruby-sapphire/normal/normal/323.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/323.png"
            },
            {
                id: 103,
                name: "Slugma",
                img: "imgs/gen3/ruby-sapphire/normal/normal/218.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/218.png"
            },
            {
                id: 104,
                name: "Magcargo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/219.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/219.png"
            },
            {
                id: 105,
                name: "Torkoal",
                img: "imgs/gen3/ruby-sapphire/normal/normal/324.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/324.png"
            },
            {
                id: 106,
                name: "Grimer",
                img: "imgs/gen3/ruby-sapphire/normal/normal/088.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/088.png"
            },
            {
                id: 107,
                name: "Muk",
                img: "imgs/gen3/ruby-sapphire/normal/normal/089.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/089.png"
            },
            {
                id: 108,
                name: "Koffing",
                img: "imgs/gen3/ruby-sapphire/normal/normal/109.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/109.png"
            },
            {
                id: 109,
                name: "Weezing",
                img: "imgs/gen3/ruby-sapphire/normal/normal/110.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/110.png"
            },
            {
                id: 110,
                name: "Spoink",
                img: "imgs/gen3/ruby-sapphire/normal/normal/325.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/325.png"
            },
            {
                id: 111,
                name: "Grumpig",
                img: "imgs/gen3/ruby-sapphire/normal/normal/326.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/326.png"
            },
            {
                id: 112,
                name: "Sandshrew",
                img: "imgs/gen3/ruby-sapphire/normal/normal/027.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/027.png"
            },
            {
                id: 113,
                name: "Sandslash",
                img: "imgs/gen3/ruby-sapphire/normal/normal/028.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/028.png"
            },
            {
                id: 114,
                name: "Spinda",
                img: "imgs/gen3/ruby-sapphire/normal/normal/327.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/327.png"
            },
            {
                id: 115,
                name: "Skarmory",
                img: "imgs/gen3/ruby-sapphire/normal/normal/227.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/227.png"
            },
            {
                id: 116,
                name: "Trapinch",
                img: "imgs/gen3/ruby-sapphire/normal/normal/328.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/328.png"
            },
            {
                id: 117,
                name: "Vibrava",
                img: "imgs/gen3/ruby-sapphire/normal/normal/329.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/329.png"
            },
            {
                id: 118,
                name: "Flygon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/330.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/330.png"
            },
            {
                id: 119,
                name: "Cacnea",
                img: "imgs/gen3/ruby-sapphire/normal/normal/331.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/331.png"
            },
            {
                id: 120,
                name: "Cacturne",
                img: "imgs/gen3/ruby-sapphire/normal/normal/332.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/332.png"
            },
            {
                id: 121,
                name: "Swablu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/333.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/333.png"
            },
            {
                id: 122,
                name: "Altaria",
                img: "imgs/gen3/ruby-sapphire/normal/normal/334.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/334.png"
            },
            {
                id: 123,
                name: "Zangoose",
                img: "imgs/gen3/ruby-sapphire/normal/normal/335.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/335.png"
            },
            {
                id: 124,
                name: "Seviper",
                img: "imgs/gen3/ruby-sapphire/normal/normal/336.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/336.png"
            },
            {
                id: 125,
                name: "Lunatone",
                img: "imgs/gen3/ruby-sapphire/normal/normal/337.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/337.png"
            },
            {
                id: 126,
                name: "Solrock",
                img: "imgs/gen3/ruby-sapphire/normal/normal/338.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/338.png"
            },
            {
                id: 127,
                name: "Barboach",
                img: "imgs/gen3/ruby-sapphire/normal/normal/339.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/339.png"
            },
            {
                id: 128,
                name: "Whiscash",
                img: "imgs/gen3/ruby-sapphire/normal/normal/340.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/340.png"
            },
            {
                id: 129,
                name: "Corphish",
                img: "imgs/gen3/ruby-sapphire/normal/normal/341.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/341.png"
            },
            {
                id: 130,
                name: "Crawdaunt",
                img: "imgs/gen3/ruby-sapphire/normal/normal/342.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/342.png"
            },
            {
                id: 131,
                name: "Baltoy",
                img: "imgs/gen3/ruby-sapphire/normal/normal/343.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/343.png"
            },
            {
                id: 132,
                name: "Claydol",
                img: "imgs/gen3/ruby-sapphire/normal/normal/344.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/344.png"
            },
            {
                id: 133,
                name: "Lileep",
                img: "imgs/gen3/ruby-sapphire/normal/normal/345.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/345.png"
            },
            {
                id: 134,
                name: "Cradily",
                img: "imgs/gen3/ruby-sapphire/normal/normal/346.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/346.png"
            },
            {
                id: 135,
                name: "Anorith",
                img: "imgs/gen3/ruby-sapphire/normal/normal/347.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/347.png"
            },
            {
                id: 136,
                name: "Armaldo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/348.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/348.png"
            },
            {
                id: 137,
                name: "Igglybuff",
                img: "imgs/gen3/ruby-sapphire/normal/normal/174.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/174.png"
            },
            {
                id: 138,
                name: "Jigglypuff",
                img: "imgs/gen3/ruby-sapphire/normal/normal/039.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/039.png"
            },
            {
                id: 139,
                name: "Wigglytuff",
                img: "imgs/gen3/ruby-sapphire/normal/normal/040.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/040.png"
            },
            {
                id: 140,
                name: "Feebas",
                img: "imgs/gen3/ruby-sapphire/normal/normal/349.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/349.png"
            },
            {
                id: 141,
                name: "Milotic",
                img: "imgs/gen3/ruby-sapphire/normal/normal/350.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/350.png"
            },
            {
                id: 142,
                name: "Castform",
                img: "imgs/gen3/ruby-sapphire/normal/normal/351.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/351.png"
            },
            {
                id: 143,
                name: "Staryu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/120.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/120.png"
            },
            {
                id: 144,
                name: "Starmie",
                img: "imgs/gen3/ruby-sapphire/normal/normal/121.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/121.png"
            },
            {
                id: 145,
                name: "Kecleon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/352.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/352.png"
            },
            {
                id: 146,
                name: "Shuppet",
                img: "imgs/gen3/ruby-sapphire/normal/normal/353.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/353.png"
            },
            {
                id: 147,
                name: "Banette",
                img: "imgs/gen3/ruby-sapphire/normal/normal/354.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/354.png"
            },
            {
                id: 148,
                name: "Duskull",
                img: "imgs/gen3/ruby-sapphire/normal/normal/355.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/355.png"
            },
            {
                id: 149,
                name: "Dusclops",
                img: "imgs/gen3/ruby-sapphire/normal/normal/356.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/356.png"
            },
            {
                id: 150,
                name: "Tropius",
                img: "imgs/gen3/ruby-sapphire/normal/normal/357.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/357.png"
            },
            {
                id: 151,
                name: "Chimecho",
                img: "imgs/gen3/ruby-sapphire/normal/normal/358.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/358.png"
            },
            {
                id: 152,
                name: "Absol",
                img: "imgs/gen3/ruby-sapphire/normal/normal/359.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/359.png"
            },
            {
                id: 153,
                name: "Vulpix",
                img: "imgs/gen3/ruby-sapphire/normal/normal/037.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/037.png"
            },
            {
                id: 154,
                name: "Ninetales",
                img: "imgs/gen3/ruby-sapphire/normal/normal/038.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/038.png"
            },
            {
                id: 155,
                name: "Pichu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/172.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/172.png"
            },
            {
                id: 156,
                name: "Pikachu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/025.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/025.png"
            },
            {
                id: 157,
                name: "Raichu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/026.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/026.png"
            },
            {
                id: 158,
                name: "Psyduck",
                img: "imgs/gen3/ruby-sapphire/normal/normal/054.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/054.png"
            },
            {
                id: 159,
                name: "Golduck",
                img: "imgs/gen3/ruby-sapphire/normal/normal/055.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/055.png"
            },
            {
                id: 160,
                name: "Wynaut",
                img: "imgs/gen3/ruby-sapphire/normal/normal/360.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/360.png"
            },
            {
                id: 161,
                name: "Wobbuffet",
                img: "imgs/gen3/ruby-sapphire/normal/normal/202.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/202.png"
            },
            {
                id: 162,
                name: "Natu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/177.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/177.png"
            },
            {
                id: 163,
                name: "Xatu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/178.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/178.png"
            },
            {
                id: 164,
                name: "Girafarig",
                img: "imgs/gen3/ruby-sapphire/normal/normal/203.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/203.png"
            },
            {
                id: 165,
                name: "Phanpy",
                img: "imgs/gen3/ruby-sapphire/normal/normal/231.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/231.png"
            },
            {
                id: 166,
                name: "Donphan",
                img: "imgs/gen3/ruby-sapphire/normal/normal/232.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/232.png"
            },
            {
                id: 167,
                name: "Pinsir",
                img: "imgs/gen3/ruby-sapphire/normal/normal/127.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/127.png"
            },
            {
                id: 168,
                name: "Heracross",
                img: "imgs/gen3/ruby-sapphire/normal/normal/214.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/214.png"
            },
            {
                id: 169,
                name: "Rhyhorn",
                img: "imgs/gen3/ruby-sapphire/normal/normal/111.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/111.png"
            },
            {
                id: 170,
                name: "Rhydon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/112.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/112.png"
            },
            {
                id: 171,
                name: "Snorunt",
                img: "imgs/gen3/ruby-sapphire/normal/normal/361.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/361.png"
            },
            {
                id: 172,
                name: "Glalie",
                img: "imgs/gen3/ruby-sapphire/normal/normal/362.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/362.png"
            },
            {
                id: 173,
                name: "Spheal",
                img: "imgs/gen3/ruby-sapphire/normal/normal/363.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/363.png"
            },
            {
                id: 174,
                name: "Sealeo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/364.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/364.png"
            },
            {
                id: 175,
                name: "Walrein",
                img: "imgs/gen3/ruby-sapphire/normal/normal/365.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/365.png"
            },
            {
                id: 176,
                name: "Clamperl",
                img: "imgs/gen3/ruby-sapphire/normal/normal/366.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/366.png"
            },
            {
                id: 177,
                name: "Huntail",
                img: "imgs/gen3/ruby-sapphire/normal/normal/367.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/367.png"
            },
            {
                id: 178,
                name: "Gorebyss",
                img: "imgs/gen3/ruby-sapphire/normal/normal/368.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/368.png"
            },
            {
                id: 179,
                name: "Relicanth",
                img: "imgs/gen3/ruby-sapphire/normal/normal/369.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/369.png"
            },
            {
                id: 180,
                name: "Corsola",
                img: "imgs/gen3/ruby-sapphire/normal/normal/222.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/222.png"
            },
            {
                id: 181,
                name: "Chinchou",
                img: "imgs/gen3/ruby-sapphire/normal/normal/170.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/170.png"
            },
            {
                id: 182,
                name: "Lanturn",
                img: "imgs/gen3/ruby-sapphire/normal/normal/171.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/171.png"
            },
            {
                id: 183,
                name: "Luvdisc",
                img: "imgs/gen3/ruby-sapphire/normal/normal/370.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/370.png"
            },
            {
                id: 184,
                name: "Horsea",
                img: "imgs/gen3/ruby-sapphire/normal/normal/116.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/116.png"
            },
            {
                id: 185,
                name: "Seadra",
                img: "imgs/gen3/ruby-sapphire/normal/normal/117.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/117.png"
            },
            {
                id: 186,
                name: "Kingdra",
                img: "imgs/gen3/ruby-sapphire/normal/normal/230.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/230.png"
            },
            {
                id: 187,
                name: "Bagon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/371.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/371.png"
            },
            {
                id: 188,
                name: "Shelgon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/372.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/372.png"
            },
            {
                id: 189,
                name: "Salamence",
                img: "imgs/gen3/ruby-sapphire/normal/normal/373.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/373.png"
            },
            {
                id: 190,
                name: "Beldum",
                img: "imgs/gen3/ruby-sapphire/normal/normal/374.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/374.png"
            },
            {
                id: 191,
                name: "Metang",
                img: "imgs/gen3/ruby-sapphire/normal/normal/375.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/375.png"
            },
            {
                id: 192,
                name: "Metagross",
                img: "imgs/gen3/ruby-sapphire/normal/normal/376.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/376.png"
            },
            {
                id: 193,
                name: "Regirock",
                img: "imgs/gen3/ruby-sapphire/normal/normal/377.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/377.png"
            },
            {
                id: 194,
                name: "Regice",
                img: "imgs/gen3/ruby-sapphire/normal/normal/378.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/378.png"
            },
            {
                id: 195,
                name: "Registeel",
                img: "imgs/gen3/ruby-sapphire/normal/normal/379.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/379.png"
            },
            {
                id: 196,
                name: "Latias",
                img: "imgs/gen3/ruby-sapphire/normal/normal/380.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/380.png"
            },
            {
                id: 197,
                name: "Latios",
                img: "imgs/gen3/ruby-sapphire/normal/normal/381.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/381.png"
            },
            {
                id: 198,
                name: "Kyogre",
                img: "imgs/gen3/ruby-sapphire/normal/normal/382.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/382.png"
            },
            {
                id: 199,
                name: "Groudon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/383.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/383.png"
            },
            {
                id: 200,
                name: "Rayquaza",
                img: "imgs/gen3/ruby-sapphire/normal/normal/384.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/384.png"
            },
            {
                id: 201,
                name: "Jirachi",
                img: "imgs/gen3/ruby-sapphire/normal/normal/385.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/385.png", dexSync: [{ game: "ruby", dexType: "national", id: 2 }],
                mythical: true
            },
            {
                id: 202,
                name: "Deoxys",
                img: "imgs/gen3/ruby-sapphire/normal/normal/386.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/386.png",
                mythical: true
            }
        ],
        "ruby-national": [
            {
                id: 1,
                name: "Bulbasaur",
                img: "imgs/gen3/ruby-sapphire/normal/normal/001.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/001.png"
            },
            {
                id: 2,
                name: "Ivysaur",
                img: "imgs/gen3/ruby-sapphire/normal/normal/002.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/002.png"
            },
            {
                id: 3,
                name: "Venusaur",
                img: "imgs/gen3/ruby-sapphire/normal/normal/003.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/003.png"
            },
            {
                id: 4,
                name: "Charmander",
                img: "imgs/gen3/ruby-sapphire/normal/normal/004.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/004.png"
            },
            {
                id: 5,
                name: "Charmeleon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/005.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/005.png"
            },
            {
                id: 6,
                name: "Charizard",
                img: "imgs/gen3/ruby-sapphire/normal/normal/006.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/006.png"
            },
            {
                id: 7,
                name: "Squirtle",
                img: "imgs/gen3/ruby-sapphire/normal/normal/007.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/007.png"
            },
            {
                id: 8,
                name: "Wartortle",
                img: "imgs/gen3/ruby-sapphire/normal/normal/008.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/008.png"
            },
            {
                id: 9,
                name: "Blastoise",
                img: "imgs/gen3/ruby-sapphire/normal/normal/009.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/009.png"
            },
            {
                id: 10,
                name: "Caterpie",
                img: "imgs/gen3/ruby-sapphire/normal/normal/010.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/010.png"
            },
            {
                id: 11,
                name: "Metapod",
                img: "imgs/gen3/ruby-sapphire/normal/normal/011.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/011.png"
            },
            {
                id: 12,
                name: "Butterfree",
                img: "imgs/gen3/ruby-sapphire/normal/normal/012.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/012.png"
            },
            {
                id: 13,
                name: "Weedle",
                img: "imgs/gen3/ruby-sapphire/normal/normal/013.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/013.png"
            },
            {
                id: 14,
                name: "Kakuna",
                img: "imgs/gen3/ruby-sapphire/normal/normal/014.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/014.png"
            },
            {
                id: 15,
                name: "Beedrill",
                img: "imgs/gen3/ruby-sapphire/normal/normal/015.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/015.png"
            },
            {
                id: 16,
                name: "Pidgey",
                img: "imgs/gen3/ruby-sapphire/normal/normal/016.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/016.png"
            },
            {
                id: 17,
                name: "Pidgeotto",
                img: "imgs/gen3/ruby-sapphire/normal/normal/017.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/017.png"
            },
            {
                id: 18,
                name: "Pidgeot",
                img: "imgs/gen3/ruby-sapphire/normal/normal/018.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/018.png"
            },
            {
                id: 19,
                name: "Rattata",
                img: "imgs/gen3/ruby-sapphire/normal/normal/019.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/019.png"
            },
            {
                id: 20,
                name: "Raticate",
                img: "imgs/gen3/ruby-sapphire/normal/normal/020.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/020.png"
            },
            {
                id: 21,
                name: "Spearow",
                img: "imgs/gen3/ruby-sapphire/normal/normal/021.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/021.png"
            },
            {
                id: 22,
                name: "Fearow",
                img: "imgs/gen3/ruby-sapphire/normal/normal/022.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/022.png"
            },
            {
                id: 23,
                name: "Ekans",
                img: "imgs/gen3/ruby-sapphire/normal/normal/023.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/023.png"
            },
            {
                id: 24,
                name: "Arbok",
                img: "imgs/gen3/ruby-sapphire/normal/normal/024.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/024.png"
            },
            {
                id: 25,
                name: "Pikachu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/025.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/025.png"
            },
            {
                id: 26,
                name: "Raichu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/026.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/026.png"
            },
            {
                id: 27,
                name: "Sandshrew",
                img: "imgs/gen3/ruby-sapphire/normal/normal/027.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/027.png"
            },
            {
                id: 28,
                name: "Sandslash",
                img: "imgs/gen3/ruby-sapphire/normal/normal/028.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/028.png"
            },
            {
                id: 29,
                name: "Nidoran♀",
                img: "imgs/gen3/ruby-sapphire/normal/normal/029.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/029.png"
            },
            {
                id: 30,
                name: "Nidorina",
                img: "imgs/gen3/ruby-sapphire/normal/normal/030.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/030.png"
            },
            {
                id: 31,
                name: "Nidoqueen",
                img: "imgs/gen3/ruby-sapphire/normal/normal/031.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/031.png"
            },
            {
                id: 32,
                name: "Nidoran♂",
                img: "imgs/gen3/ruby-sapphire/normal/normal/032.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/032.png"
            },
            {
                id: 33,
                name: "Nidorino",
                img: "imgs/gen3/ruby-sapphire/normal/normal/033.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/033.png"
            },
            {
                id: 34,
                name: "Nidoking",
                img: "imgs/gen3/ruby-sapphire/normal/normal/034.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/034.png"
            },
            {
                id: 35,
                name: "Clefairy",
                img: "imgs/gen3/ruby-sapphire/normal/normal/035.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/035.png"
            },
            {
                id: 36,
                name: "Clefable",
                img: "imgs/gen3/ruby-sapphire/normal/normal/036.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/036.png"
            },
            {
                id: 37,
                name: "Vulpix",
                img: "imgs/gen3/ruby-sapphire/normal/normal/037.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/037.png"
            },
            {
                id: 38,
                name: "Ninetales",
                img: "imgs/gen3/ruby-sapphire/normal/normal/038.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/038.png"
            },
            {
                id: 39,
                name: "Jigglypuff",
                img: "imgs/gen3/ruby-sapphire/normal/normal/039.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/039.png"
            },
            {
                id: 40,
                name: "Wigglytuff",
                img: "imgs/gen3/ruby-sapphire/normal/normal/040.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/040.png"
            },
            {
                id: 41,
                name: "Zubat",
                img: "imgs/gen3/ruby-sapphire/normal/normal/041.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/041.png"
            },
            {
                id: 42,
                name: "Golbat",
                img: "imgs/gen3/ruby-sapphire/normal/normal/042.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/042.png"
            },
            {
                id: 43,
                name: "Oddish",
                img: "imgs/gen3/ruby-sapphire/normal/normal/043.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/043.png"
            },
            {
                id: 44,
                name: "Gloom",
                img: "imgs/gen3/ruby-sapphire/normal/normal/044.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/044.png"
            },
            {
                id: 45,
                name: "Vileplume",
                img: "imgs/gen3/ruby-sapphire/normal/normal/045.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/045.png"
            },
            {
                id: 46,
                name: "Paras",
                img: "imgs/gen3/ruby-sapphire/normal/normal/046.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/046.png"
            },
            {
                id: 47,
                name: "Parasect",
                img: "imgs/gen3/ruby-sapphire/normal/normal/047.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/047.png"
            },
            {
                id: 48,
                name: "Venonat",
                img: "imgs/gen3/ruby-sapphire/normal/normal/048.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/048.png"
            },
            {
                id: 49,
                name: "Venomoth",
                img: "imgs/gen3/ruby-sapphire/normal/normal/049.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/049.png"
            },
            {
                id: 50,
                name: "Diglett",
                img: "imgs/gen3/ruby-sapphire/normal/normal/050.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/050.png"
            },
            {
                id: 51,
                name: "Dugtrio",
                img: "imgs/gen3/ruby-sapphire/normal/normal/051.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/051.png"
            },
            {
                id: 52,
                name: "Meowth",
                img: "imgs/gen3/ruby-sapphire/normal/normal/052.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/052.png"
            },
            {
                id: 53,
                name: "Persian",
                img: "imgs/gen3/ruby-sapphire/normal/normal/053.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/053.png"
            },
            {
                id: 54,
                name: "Psyduck",
                img: "imgs/gen3/ruby-sapphire/normal/normal/054.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/054.png"
            },
            {
                id: 55,
                name: "Golduck",
                img: "imgs/gen3/ruby-sapphire/normal/normal/055.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/055.png"
            },
            {
                id: 56,
                name: "Mankey",
                img: "imgs/gen3/ruby-sapphire/normal/normal/056.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/056.png"
            },
            {
                id: 57,
                name: "Primeape",
                img: "imgs/gen3/ruby-sapphire/normal/normal/057.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/057.png"
            },
            {
                id: 58,
                name: "Growlithe",
                img: "imgs/gen3/ruby-sapphire/normal/normal/058.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/058.png"
            },
            {
                id: 59,
                name: "Arcanine",
                img: "imgs/gen3/ruby-sapphire/normal/normal/059.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/059.png"
            },
            {
                id: 60,
                name: "Poliwag",
                img: "imgs/gen3/ruby-sapphire/normal/normal/060.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/060.png"
            },
            {
                id: 61,
                name: "Poliwhirl",
                img: "imgs/gen3/ruby-sapphire/normal/normal/061.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/061.png"
            },
            {
                id: 62,
                name: "Poliwrath",
                img: "imgs/gen3/ruby-sapphire/normal/normal/062.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/062.png"
            },
            {
                id: 63,
                name: "Abra",
                img: "imgs/gen3/ruby-sapphire/normal/normal/063.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/063.png"
            },
            {
                id: 64,
                name: "Kadabra",
                img: "imgs/gen3/ruby-sapphire/normal/normal/064.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/064.png"
            },
            {
                id: 65,
                name: "Alakazam",
                img: "imgs/gen3/ruby-sapphire/normal/normal/065.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/065.png"
            },
            {
                id: 66,
                name: "Machop",
                img: "imgs/gen3/ruby-sapphire/normal/normal/066.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/066.png"
            },
            {
                id: 67,
                name: "Machoke",
                img: "imgs/gen3/ruby-sapphire/normal/normal/067.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/067.png"
            },
            {
                id: 68,
                name: "Machamp",
                img: "imgs/gen3/ruby-sapphire/normal/normal/068.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/068.png"
            },
            {
                id: 69,
                name: "Bellsprout",
                img: "imgs/gen3/ruby-sapphire/normal/normal/069.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/069.png"
            },
            {
                id: 70,
                name: "Weepinbell",
                img: "imgs/gen3/ruby-sapphire/normal/normal/070.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/070.png"
            },
            {
                id: 71,
                name: "Victreebel",
                img: "imgs/gen3/ruby-sapphire/normal/normal/071.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/071.png"
            },
            {
                id: 72,
                name: "Tentacool",
                img: "imgs/gen3/ruby-sapphire/normal/normal/072.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/072.png"
            },
            {
                id: 73,
                name: "Tentacruel",
                img: "imgs/gen3/ruby-sapphire/normal/normal/073.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/073.png"
            },
            {
                id: 74,
                name: "Geodude",
                img: "imgs/gen3/ruby-sapphire/normal/normal/074.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/074.png"
            },
            {
                id: 75,
                name: "Graveler",
                img: "imgs/gen3/ruby-sapphire/normal/normal/075.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/075.png"
            },
            {
                id: 76,
                name: "Golem",
                img: "imgs/gen3/ruby-sapphire/normal/normal/076.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/076.png"
            },
            {
                id: 77,
                name: "Ponyta",
                img: "imgs/gen3/ruby-sapphire/normal/normal/077.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/077.png"
            },
            {
                id: 78,
                name: "Rapidash",
                img: "imgs/gen3/ruby-sapphire/normal/normal/078.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/078.png"
            },
            {
                id: 79,
                name: "Slowpoke",
                img: "imgs/gen3/ruby-sapphire/normal/normal/079.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/079.png"
            },
            {
                id: 80,
                name: "Slowbro",
                img: "imgs/gen3/ruby-sapphire/normal/normal/080.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/080.png"
            },
            {
                id: 81,
                name: "Magnemite",
                img: "imgs/gen3/ruby-sapphire/normal/normal/081.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/081.png"
            },
            {
                id: 82,
                name: "Magneton",
                img: "imgs/gen3/ruby-sapphire/normal/normal/082.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/082.png"
            },
            {
                id: 83,
                name: "Farfetch'd",
                img: "imgs/gen3/ruby-sapphire/normal/normal/083.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/083.png"
            },
            {
                id: 84,
                name: "Doduo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/084.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/084.png"
            },
            {
                id: 85,
                name: "Dodrio",
                img: "imgs/gen3/ruby-sapphire/normal/normal/085.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/085.png"
            },
            {
                id: 86,
                name: "Seel",
                img: "imgs/gen3/ruby-sapphire/normal/normal/086.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/086.png"
            },
            {
                id: 87,
                name: "Dewgong",
                img: "imgs/gen3/ruby-sapphire/normal/normal/087.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/087.png"
            },
            {
                id: 88,
                name: "Grimer",
                img: "imgs/gen3/ruby-sapphire/normal/normal/088.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/088.png"
            },
            {
                id: 89,
                name: "Muk",
                img: "imgs/gen3/ruby-sapphire/normal/normal/089.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/089.png"
            },
            {
                id: 90,
                name: "Shellder",
                img: "imgs/gen3/ruby-sapphire/normal/normal/090.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/090.png"
            },
            {
                id: 91,
                name: "Cloyster",
                img: "imgs/gen3/ruby-sapphire/normal/normal/091.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/091.png"
            },
            {
                id: 92,
                name: "Gastly",
                img: "imgs/gen3/ruby-sapphire/normal/normal/092.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/092.png"
            },
            {
                id: 93,
                name: "Haunter",
                img: "imgs/gen3/ruby-sapphire/normal/normal/093.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/093.png"
            },
            {
                id: 94,
                name: "Gengar",
                img: "imgs/gen3/ruby-sapphire/normal/normal/094.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/094.png"
            },
            {
                id: 95,
                name: "Onix",
                img: "imgs/gen3/ruby-sapphire/normal/normal/095.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/095.png"
            },
            {
                id: 96,
                name: "Drowzee",
                img: "imgs/gen3/ruby-sapphire/normal/normal/096.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/096.png"
            },
            {
                id: 97,
                name: "Hypno",
                img: "imgs/gen3/ruby-sapphire/normal/normal/097.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/097.png"
            },
            {
                id: 98,
                name: "Krabby",
                img: "imgs/gen3/ruby-sapphire/normal/normal/098.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/098.png"
            },
            {
                id: 99,
                name: "Kingler",
                img: "imgs/gen3/ruby-sapphire/normal/normal/099.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/099.png"
            },
            {
                id: 100,
                name: "Voltorb",
                img: "imgs/gen3/ruby-sapphire/normal/normal/100.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/100.png"
            },
            {
                id: 101,
                name: "Electrode",
                img: "imgs/gen3/ruby-sapphire/normal/normal/101.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/101.png"
            },
            {
                id: 102,
                name: "Exeggcute",
                img: "imgs/gen3/ruby-sapphire/normal/normal/102.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/102.png"
            },
            {
                id: 103,
                name: "Exeggutor",
                img: "imgs/gen3/ruby-sapphire/normal/normal/103.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/103.png"
            },
            {
                id: 104,
                name: "Cubone",
                img: "imgs/gen3/ruby-sapphire/normal/normal/104.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/104.png"
            },
            {
                id: 105,
                name: "Marowak",
                img: "imgs/gen3/ruby-sapphire/normal/normal/105.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/105.png"
            },
            {
                id: 106,
                name: "Hitmonlee",
                img: "imgs/gen3/ruby-sapphire/normal/normal/106.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/106.png"
            },
            {
                id: 107,
                name: "Hitmonchan",
                img: "imgs/gen3/ruby-sapphire/normal/normal/107.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/107.png"
            },
            {
                id: 108,
                name: "Lickitung",
                img: "imgs/gen3/ruby-sapphire/normal/normal/108.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/108.png"
            },
            {
                id: 109,
                name: "Koffing",
                img: "imgs/gen3/ruby-sapphire/normal/normal/109.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/109.png"
            },
            {
                id: 110,
                name: "Weezing",
                img: "imgs/gen3/ruby-sapphire/normal/normal/110.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/110.png"
            },
            {
                id: 111,
                name: "Rhyhorn",
                img: "imgs/gen3/ruby-sapphire/normal/normal/111.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/111.png"
            },
            {
                id: 112,
                name: "Rhydon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/112.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/112.png"
            },
            {
                id: 113,
                name: "Chansey",
                img: "imgs/gen3/ruby-sapphire/normal/normal/113.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/113.png"
            },
            {
                id: 114,
                name: "Tangela",
                img: "imgs/gen3/ruby-sapphire/normal/normal/114.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/114.png"
            },
            {
                id: 115,
                name: "Kangaskhan",
                img: "imgs/gen3/ruby-sapphire/normal/normal/115.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/115.png"
            },
            {
                id: 116,
                name: "Horsea",
                img: "imgs/gen3/ruby-sapphire/normal/normal/116.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/116.png"
            },
            {
                id: 117,
                name: "Seadra",
                img: "imgs/gen3/ruby-sapphire/normal/normal/117.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/117.png"
            },
            {
                id: 118,
                name: "Goldeen",
                img: "imgs/gen3/ruby-sapphire/normal/normal/118.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/118.png"
            },
            {
                id: 119,
                name: "Seaking",
                img: "imgs/gen3/ruby-sapphire/normal/normal/119.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/119.png"
            },
            {
                id: 120,
                name: "Staryu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/120.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/120.png"
            },
            {
                id: 121,
                name: "Starmie",
                img: "imgs/gen3/ruby-sapphire/normal/normal/121.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/121.png"
            },
            {
                id: 122,
                name: "Mr. Mime",
                img: "imgs/gen3/ruby-sapphire/normal/normal/122.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/122.png"
            },
            {
                id: 123,
                name: "Scyther",
                img: "imgs/gen3/ruby-sapphire/normal/normal/123.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/123.png"
            },
            {
                id: 124,
                name: "Jynx",
                img: "imgs/gen3/ruby-sapphire/normal/normal/124.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/124.png"
            },
            {
                id: 125,
                name: "Electabuzz",
                img: "imgs/gen3/ruby-sapphire/normal/normal/125.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/125.png"
            },
            {
                id: 126,
                name: "Magmar",
                img: "imgs/gen3/ruby-sapphire/normal/normal/126.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/126.png"
            },
            {
                id: 127,
                name: "Pinsir",
                img: "imgs/gen3/ruby-sapphire/normal/normal/127.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/127.png"
            },
            {
                id: 128,
                name: "Tauros",
                img: "imgs/gen3/ruby-sapphire/normal/normal/128.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/128.png"
            },
            {
                id: 129,
                name: "Magikarp",
                img: "imgs/gen3/ruby-sapphire/normal/normal/129.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/129.png"
            },
            {
                id: 130,
                name: "Gyarados",
                img: "imgs/gen3/ruby-sapphire/normal/normal/130.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/130.png"
            },
            {
                id: 131,
                name: "Lapras",
                img: "imgs/gen3/ruby-sapphire/normal/normal/131.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/131.png"
            },
            {
                id: 132,
                name: "Ditto",
                img: "imgs/gen3/ruby-sapphire/normal/normal/132.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/132.png"
            },
            {
                id: 133,
                name: "Eevee",
                img: "imgs/gen3/ruby-sapphire/normal/normal/133.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/133.png"
            },
            {
                id: 134,
                name: "Vaporeon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/134.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/134.png"
            },
            {
                id: 135,
                name: "Jolteon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/135.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/135.png"
            },
            {
                id: 136,
                name: "Flareon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/136.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/136.png"
            },
            {
                id: 137,
                name: "Porygon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/137.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/137.png"
            },
            {
                id: 138,
                name: "Omanyte",
                img: "imgs/gen3/ruby-sapphire/normal/normal/138.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/138.png"
            },
            {
                id: 139,
                name: "Omastar",
                img: "imgs/gen3/ruby-sapphire/normal/normal/139.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/139.png"
            },
            {
                id: 140,
                name: "Kabuto",
                img: "imgs/gen3/ruby-sapphire/normal/normal/140.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/140.png"
            },
            {
                id: 141,
                name: "Kabutops",
                img: "imgs/gen3/ruby-sapphire/normal/normal/141.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/141.png"
            },
            {
                id: 142,
                name: "Aerodactyl",
                img: "imgs/gen3/ruby-sapphire/normal/normal/142.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/142.png"
            },
            {
                id: 143,
                name: "Snorlax",
                img: "imgs/gen3/ruby-sapphire/normal/normal/143.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/143.png"
            },
            {
                id: 144,
                name: "Articuno",
                img: "imgs/gen3/ruby-sapphire/normal/normal/144.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/144.png"
            },
            {
                id: 145,
                name: "Zapdos",
                img: "imgs/gen3/ruby-sapphire/normal/normal/145.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/145.png"
            },
            {
                id: 146,
                name: "Moltres",
                img: "imgs/gen3/ruby-sapphire/normal/normal/146.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/146.png"
            },
            {
                id: 147,
                name: "Dratini",
                img: "imgs/gen3/ruby-sapphire/normal/normal/147.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/147.png"
            },
            {
                id: 148,
                name: "Dragonair",
                img: "imgs/gen3/ruby-sapphire/normal/normal/148.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/148.png"
            },
            {
                id: 149,
                name: "Dragonite",
                img: "imgs/gen3/ruby-sapphire/normal/normal/149.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/149.png"
            },
            {
                id: 150,
                name: "Mewtwo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/150.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/150.png"
            },
            {
                id: 151,
                name: "Mew",
                img: "imgs/gen3/ruby-sapphire/normal/normal/151.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/151.png",
                mythical: true
            },
            {
                id: 152,
                name: "Chikorita",
                img: "imgs/gen3/ruby-sapphire/normal/normal/152.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/152.png"
            },
            {
                id: 153,
                name: "Bayleef",
                img: "imgs/gen3/ruby-sapphire/normal/normal/153.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/153.png"
            },
            {
                id: 154,
                name: "Meganium",
                img: "imgs/gen3/ruby-sapphire/normal/normal/154.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/154.png"
            },
            {
                id: 155,
                name: "Cyndaquil",
                img: "imgs/gen3/ruby-sapphire/normal/normal/155.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/155.png"
            },
            {
                id: 156,
                name: "Quilava",
                img: "imgs/gen3/ruby-sapphire/normal/normal/156.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/156.png"
            },
            {
                id: 157,
                name: "Typhlosion",
                img: "imgs/gen3/ruby-sapphire/normal/normal/157.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/157.png"
            },
            {
                id: 158,
                name: "Totodile",
                img: "imgs/gen3/ruby-sapphire/normal/normal/158.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/158.png"
            },
            {
                id: 159,
                name: "Croconaw",
                img: "imgs/gen3/ruby-sapphire/normal/normal/159.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/159.png"
            },
            {
                id: 160,
                name: "Feraligatr",
                img: "imgs/gen3/ruby-sapphire/normal/normal/160.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/160.png"
            },
            {
                id: 161,
                name: "Sentret",
                img: "imgs/gen3/ruby-sapphire/normal/normal/161.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/161.png"
            },
            {
                id: 162,
                name: "Furret",
                img: "imgs/gen3/ruby-sapphire/normal/normal/162.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/162.png"
            },
            {
                id: 163,
                name: "Hoothoot",
                img: "imgs/gen3/ruby-sapphire/normal/normal/163.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/163.png"
            },
            {
                id: 164,
                name: "Noctowl",
                img: "imgs/gen3/ruby-sapphire/normal/normal/164.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/164.png"
            },
            {
                id: 165,
                name: "Ledyba",
                img: "imgs/gen3/ruby-sapphire/normal/normal/165.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/165.png"
            },
            {
                id: 166,
                name: "Ledian",
                img: "imgs/gen3/ruby-sapphire/normal/normal/166.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/166.png"
            },
            {
                id: 167,
                name: "Spinarak",
                img: "imgs/gen3/ruby-sapphire/normal/normal/167.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/167.png"
            },
            {
                id: 168,
                name: "Ariados",
                img: "imgs/gen3/ruby-sapphire/normal/normal/168.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/168.png"
            },
            {
                id: 169,
                name: "Crobat",
                img: "imgs/gen3/ruby-sapphire/normal/normal/169.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/169.png"
            },
            {
                id: 170,
                name: "Chinchou",
                img: "imgs/gen3/ruby-sapphire/normal/normal/170.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/170.png"
            },
            {
                id: 171,
                name: "Lanturn",
                img: "imgs/gen3/ruby-sapphire/normal/normal/171.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/171.png"
            },
            {
                id: 172,
                name: "Pichu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/172.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/172.png"
            },
            {
                id: 173,
                name: "Cleffa",
                img: "imgs/gen3/ruby-sapphire/normal/normal/173.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/173.png"
            },
            {
                id: 174,
                name: "Igglybuff",
                img: "imgs/gen3/ruby-sapphire/normal/normal/174.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/174.png"
            },
            {
                id: 175,
                name: "Togepi",
                img: "imgs/gen3/ruby-sapphire/normal/normal/175.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/175.png"
            },
            {
                id: 176,
                name: "Togetic",
                img: "imgs/gen3/ruby-sapphire/normal/normal/176.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/176.png"
            },
            {
                id: 177,
                name: "Natu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/177.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/177.png"
            },
            {
                id: 178,
                name: "Xatu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/178.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/178.png"
            },
            {
                id: 179,
                name: "Mareep",
                img: "imgs/gen3/ruby-sapphire/normal/normal/179.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/179.png"
            },
            {
                id: 180,
                name: "Flaaffy",
                img: "imgs/gen3/ruby-sapphire/normal/normal/180.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/180.png"
            },
            {
                id: 181,
                name: "Ampharos",
                img: "imgs/gen3/ruby-sapphire/normal/normal/181.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/181.png"
            },
            {
                id: 182,
                name: "Bellossom",
                img: "imgs/gen3/ruby-sapphire/normal/normal/182.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/182.png"
            },
            {
                id: 183,
                name: "Marill",
                img: "imgs/gen3/ruby-sapphire/normal/normal/183.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/183.png"
            },
            {
                id: 184,
                name: "Azumarill",
                img: "imgs/gen3/ruby-sapphire/normal/normal/184.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/184.png"
            },
            {
                id: 185,
                name: "Sudowoodo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/185.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/185.png"
            },
            {
                id: 186,
                name: "Politoed",
                img: "imgs/gen3/ruby-sapphire/normal/normal/186.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/186.png"
            },
            {
                id: 187,
                name: "Hoppip",
                img: "imgs/gen3/ruby-sapphire/normal/normal/187.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/187.png"
            },
            {
                id: 188,
                name: "Skiploom",
                img: "imgs/gen3/ruby-sapphire/normal/normal/188.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/188.png"
            },
            {
                id: 189,
                name: "Jumpluff",
                img: "imgs/gen3/ruby-sapphire/normal/normal/189.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/189.png"
            },
            {
                id: 190,
                name: "Aipom",
                img: "imgs/gen3/ruby-sapphire/normal/normal/190.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/190.png"
            },
            {
                id: 191,
                name: "Sunkern",
                img: "imgs/gen3/ruby-sapphire/normal/normal/191.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/191.png"
            },
            {
                id: 192,
                name: "Sunflora",
                img: "imgs/gen3/ruby-sapphire/normal/normal/192.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/192.png"
            },
            {
                id: 193,
                name: "Yanma",
                img: "imgs/gen3/ruby-sapphire/normal/normal/193.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/193.png"
            },
            {
                id: 194,
                name: "Wooper",
                img: "imgs/gen3/ruby-sapphire/normal/normal/194.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/194.png"
            },
            {
                id: 195,
                name: "Quagsire",
                img: "imgs/gen3/ruby-sapphire/normal/normal/195.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/195.png"
            },
            {
                id: 196,
                name: "Espeon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/196.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/196.png"
            },
            {
                id: 197,
                name: "Umbreon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/197.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/197.png"
            },
            {
                id: 198,
                name: "Murkrow",
                img: "imgs/gen3/ruby-sapphire/normal/normal/198.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/198.png"
            },
            {
                id: 199,
                name: "Slowking",
                img: "imgs/gen3/ruby-sapphire/normal/normal/199.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/199.png"
            },
            {
                id: 200,
                name: "Misdreavus",
                img: "imgs/gen3/ruby-sapphire/normal/normal/200.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/200.png"
            },
            {
                id: 201,
                name: "Unown",
                img: "imgs/gen3/ruby-sapphire/normal/normal/201.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/201.png"
            },
            {
                id: 202,
                name: "Wobbuffet",
                img: "imgs/gen3/ruby-sapphire/normal/normal/202.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/202.png"
            },
            {
                id: 203,
                name: "Girafarig",
                img: "imgs/gen3/ruby-sapphire/normal/normal/203.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/203.png"
            },
            {
                id: 204,
                name: "Pineco",
                img: "imgs/gen3/ruby-sapphire/normal/normal/204.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/204.png"
            },
            {
                id: 205,
                name: "Forretress",
                img: "imgs/gen3/ruby-sapphire/normal/normal/205.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/205.png"
            },
            {
                id: 206,
                name: "Dunsparce",
                img: "imgs/gen3/ruby-sapphire/normal/normal/206.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/206.png"
            },
            {
                id: 207,
                name: "Gligar",
                img: "imgs/gen3/ruby-sapphire/normal/normal/207.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/207.png"
            },
            {
                id: 208,
                name: "Steelix",
                img: "imgs/gen3/ruby-sapphire/normal/normal/208.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/208.png"
            },
            {
                id: 209,
                name: "Snubbull",
                img: "imgs/gen3/ruby-sapphire/normal/normal/209.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/209.png"
            },
            {
                id: 210,
                name: "Granbull",
                img: "imgs/gen3/ruby-sapphire/normal/normal/210.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/210.png"
            },
            {
                id: 211,
                name: "Qwilfish",
                img: "imgs/gen3/ruby-sapphire/normal/normal/211.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/211.png"
            },
            {
                id: 212,
                name: "Scizor",
                img: "imgs/gen3/ruby-sapphire/normal/normal/212.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/212.png"
            },
            {
                id: 213,
                name: "Shuckle",
                img: "imgs/gen3/ruby-sapphire/normal/normal/213.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/213.png"
            },
            {
                id: 214,
                name: "Heracross",
                img: "imgs/gen3/ruby-sapphire/normal/normal/214.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/214.png"
            },
            {
                id: 215,
                name: "Sneasel",
                img: "imgs/gen3/ruby-sapphire/normal/normal/215.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/215.png"
            },
            {
                id: 216,
                name: "Teddiursa",
                img: "imgs/gen3/ruby-sapphire/normal/normal/216.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/216.png"
            },
            {
                id: 217,
                name: "Ursaring",
                img: "imgs/gen3/ruby-sapphire/normal/normal/217.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/217.png"
            },
            {
                id: 218,
                name: "Slugma",
                img: "imgs/gen3/ruby-sapphire/normal/normal/218.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/218.png"
            },
            {
                id: 219,
                name: "Magcargo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/219.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/219.png"
            },
            {
                id: 220,
                name: "Swinub",
                img: "imgs/gen3/ruby-sapphire/normal/normal/220.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/220.png"
            },
            {
                id: 221,
                name: "Piloswine",
                img: "imgs/gen3/ruby-sapphire/normal/normal/221.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/221.png"
            },
            {
                id: 222,
                name: "Corsola",
                img: "imgs/gen3/ruby-sapphire/normal/normal/222.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/222.png"
            },
            {
                id: 223,
                name: "Remoraid",
                img: "imgs/gen3/ruby-sapphire/normal/normal/223.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/223.png"
            },
            {
                id: 224,
                name: "Octillery",
                img: "imgs/gen3/ruby-sapphire/normal/normal/224.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/224.png"
            },
            {
                id: 225,
                name: "Delibird",
                img: "imgs/gen3/ruby-sapphire/normal/normal/225.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/225.png"
            },
            {
                id: 226,
                name: "Mantine",
                img: "imgs/gen3/ruby-sapphire/normal/normal/226.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/226.png"
            },
            {
                id: 227,
                name: "Skarmory",
                img: "imgs/gen3/ruby-sapphire/normal/normal/227.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/227.png"
            },
            {
                id: 228,
                name: "Houndour",
                img: "imgs/gen3/ruby-sapphire/normal/normal/228.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/228.png"
            },
            {
                id: 229,
                name: "Houndoom",
                img: "imgs/gen3/ruby-sapphire/normal/normal/229.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/229.png"
            },
            {
                id: 230,
                name: "Kingdra",
                img: "imgs/gen3/ruby-sapphire/normal/normal/230.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/230.png"
            },
            {
                id: 231,
                name: "Phanpy",
                img: "imgs/gen3/ruby-sapphire/normal/normal/231.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/231.png"
            },
            {
                id: 232,
                name: "Donphan",
                img: "imgs/gen3/ruby-sapphire/normal/normal/232.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/232.png"
            },
            {
                id: 233,
                name: "Porygon2",
                img: "imgs/gen3/ruby-sapphire/normal/normal/233.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/233.png"
            },
            {
                id: 234,
                name: "Stantler",
                img: "imgs/gen3/ruby-sapphire/normal/normal/234.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/234.png"
            },
            {
                id: 235,
                name: "Smeargle",
                img: "imgs/gen3/ruby-sapphire/normal/normal/235.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/235.png"
            },
            {
                id: 236,
                name: "Tyrogue",
                img: "imgs/gen3/ruby-sapphire/normal/normal/236.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/236.png"
            },
            {
                id: 237,
                name: "Hitmontop",
                img: "imgs/gen3/ruby-sapphire/normal/normal/237.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/237.png"
            },
            {
                id: 238,
                name: "Smoochum",
                img: "imgs/gen3/ruby-sapphire/normal/normal/238.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/238.png"
            },
            {
                id: 239,
                name: "Elekid",
                img: "imgs/gen3/ruby-sapphire/normal/normal/239.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/239.png"
            },
            {
                id: 240,
                name: "Magby",
                img: "imgs/gen3/ruby-sapphire/normal/normal/240.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/240.png"
            },
            {
                id: 241,
                name: "Miltank",
                img: "imgs/gen3/ruby-sapphire/normal/normal/241.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/241.png"
            },
            {
                id: 242,
                name: "Blissey",
                img: "imgs/gen3/ruby-sapphire/normal/normal/242.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/242.png"
            },
            {
                id: 243,
                name: "Raikou",
                img: "imgs/gen3/ruby-sapphire/normal/normal/243.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/243.png"
            },
            {
                id: 244,
                name: "Entei",
                img: "imgs/gen3/ruby-sapphire/normal/normal/244.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/244.png"
            },
            {
                id: 245,
                name: "Suicune",
                img: "imgs/gen3/ruby-sapphire/normal/normal/245.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/245.png"
            },
            {
                id: 246,
                name: "Larvitar",
                img: "imgs/gen3/ruby-sapphire/normal/normal/246.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/246.png"
            },
            {
                id: 247,
                name: "Pupitar",
                img: "imgs/gen3/ruby-sapphire/normal/normal/247.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/247.png"
            },
            {
                id: 248,
                name: "Tyranitar",
                img: "imgs/gen3/ruby-sapphire/normal/normal/248.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/248.png"
            },
            {
                id: 249,
                name: "Lugia",
                img: "imgs/gen3/ruby-sapphire/normal/normal/249.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/249.png"
            },
            {
                id: 250,
                name: "Ho-oh",
                img: "imgs/gen3/ruby-sapphire/normal/normal/250.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/250.png"
            },
            {
                id: 251,
                name: "Celebi",
                img: "imgs/gen3/ruby-sapphire/normal/normal/251.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/251.png",
                mythical: true
            },
            {
                id: 252,
                name: "Treecko",
                img: "imgs/gen3/ruby-sapphire/normal/normal/252.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/252.png"
            },
            {
                id: 253,
                name: "Grovyle",
                img: "imgs/gen3/ruby-sapphire/normal/normal/253.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/253.png"
            },
            {
                id: 254,
                name: "Sceptile",
                img: "imgs/gen3/ruby-sapphire/normal/normal/254.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/254.png"
            },
            {
                id: 255,
                name: "Torchic",
                img: "imgs/gen3/ruby-sapphire/normal/normal/255.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/255.png"
            },
            {
                id: 256,
                name: "Combusken",
                img: "imgs/gen3/ruby-sapphire/normal/normal/256.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/256.png"
            },
            {
                id: 257,
                name: "Blaziken",
                img: "imgs/gen3/ruby-sapphire/normal/normal/257.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/257.png"
            },
            {
                id: 258,
                name: "Mudkip",
                img: "imgs/gen3/ruby-sapphire/normal/normal/258.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/258.png"
            },
            {
                id: 259,
                name: "Marshtomp",
                img: "imgs/gen3/ruby-sapphire/normal/normal/259.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/259.png"
            },
            {
                id: 260,
                name: "Swampert",
                img: "imgs/gen3/ruby-sapphire/normal/normal/260.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/260.png"
            },
            {
                id: 261,
                name: "Poochyena",
                img: "imgs/gen3/ruby-sapphire/normal/normal/261.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/261.png"
            },
            {
                id: 262,
                name: "Mightyena",
                img: "imgs/gen3/ruby-sapphire/normal/normal/262.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/262.png"
            },
            {
                id: 263,
                name: "Zigzagoon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/263.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/263.png"
            },
            {
                id: 264,
                name: "Linoone",
                img: "imgs/gen3/ruby-sapphire/normal/normal/264.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/264.png"
            },
            {
                id: 265,
                name: "Wurmple",
                img: "imgs/gen3/ruby-sapphire/normal/normal/265.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/265.png"
            },
            {
                id: 266,
                name: "Silcoon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/266.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/266.png"
            },
            {
                id: 267,
                name: "Beautifly",
                img: "imgs/gen3/ruby-sapphire/normal/normal/267.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/267.png"
            },
            {
                id: 268,
                name: "Cascoon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/268.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/268.png"
            },
            {
                id: 269,
                name: "Dustox",
                img: "imgs/gen3/ruby-sapphire/normal/normal/269.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/269.png"
            },
            {
                id: 270,
                name: "Lotad",
                img: "imgs/gen3/ruby-sapphire/normal/normal/270.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/270.png"
            },
            {
                id: 271,
                name: "Lombre",
                img: "imgs/gen3/ruby-sapphire/normal/normal/271.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/271.png"
            },
            {
                id: 272,
                name: "Ludicolo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/272.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/272.png"
            },
            {
                id: 273,
                name: "Seedot",
                img: "imgs/gen3/ruby-sapphire/normal/normal/273.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/273.png"
            },
            {
                id: 274,
                name: "Nuzleaf",
                img: "imgs/gen3/ruby-sapphire/normal/normal/274.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/274.png"
            },
            {
                id: 275,
                name: "Shiftry",
                img: "imgs/gen3/ruby-sapphire/normal/normal/275.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/275.png"
            },
            {
                id: 276,
                name: "Taillow",
                img: "imgs/gen3/ruby-sapphire/normal/normal/276.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/276.png"
            },
            {
                id: 277,
                name: "Swellow",
                img: "imgs/gen3/ruby-sapphire/normal/normal/277.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/277.png"
            },
            {
                id: 278,
                name: "Wingull",
                img: "imgs/gen3/ruby-sapphire/normal/normal/278.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/278.png"
            },
            {
                id: 279,
                name: "Pelipper",
                img: "imgs/gen3/ruby-sapphire/normal/normal/279.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/279.png"
            },
            {
                id: 280,
                name: "Ralts",
                img: "imgs/gen3/ruby-sapphire/normal/normal/280.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/280.png"
            },
            {
                id: 281,
                name: "Kirlia",
                img: "imgs/gen3/ruby-sapphire/normal/normal/281.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/281.png"
            },
            {
                id: 282,
                name: "Gardevoir",
                img: "imgs/gen3/ruby-sapphire/normal/normal/282.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/282.png"
            },
            {
                id: 283,
                name: "Surskit",
                img: "imgs/gen3/ruby-sapphire/normal/normal/283.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/283.png"
            },
            {
                id: 284,
                name: "Masquerain",
                img: "imgs/gen3/ruby-sapphire/normal/normal/284.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/284.png"
            },
            {
                id: 285,
                name: "Shroomish",
                img: "imgs/gen3/ruby-sapphire/normal/normal/285.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/285.png"
            },
            {
                id: 286,
                name: "Breloom",
                img: "imgs/gen3/ruby-sapphire/normal/normal/286.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/286.png"
            },
            {
                id: 287,
                name: "Slakoth",
                img: "imgs/gen3/ruby-sapphire/normal/normal/287.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/287.png"
            },
            {
                id: 288,
                name: "Vigoroth",
                img: "imgs/gen3/ruby-sapphire/normal/normal/288.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/288.png"
            },
            {
                id: 289,
                name: "Slaking",
                img: "imgs/gen3/ruby-sapphire/normal/normal/289.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/289.png"
            },
            {
                id: 290,
                name: "Nincada",
                img: "imgs/gen3/ruby-sapphire/normal/normal/290.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/290.png"
            },
            {
                id: 291,
                name: "Ninjask",
                img: "imgs/gen3/ruby-sapphire/normal/normal/291.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/291.png"
            },
            {
                id: 292,
                name: "Shedinja",
                img: "imgs/gen3/ruby-sapphire/normal/normal/292.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/292.png"
            },
            {
                id: 293,
                name: "Whismur",
                img: "imgs/gen3/ruby-sapphire/normal/normal/293.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/293.png"
            },
            {
                id: 294,
                name: "Loudred",
                img: "imgs/gen3/ruby-sapphire/normal/normal/294.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/294.png"
            },
            {
                id: 295,
                name: "Exploud",
                img: "imgs/gen3/ruby-sapphire/normal/normal/295.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/295.png"
            },
            {
                id: 296,
                name: "Makuhita",
                img: "imgs/gen3/ruby-sapphire/normal/normal/296.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/296.png"
            },
            {
                id: 297,
                name: "Hariyama",
                img: "imgs/gen3/ruby-sapphire/normal/normal/297.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/297.png"
            },
            {
                id: 298,
                name: "Azurill",
                img: "imgs/gen3/ruby-sapphire/normal/normal/298.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/298.png"
            },
            {
                id: 299,
                name: "Nosepass",
                img: "imgs/gen3/ruby-sapphire/normal/normal/299.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/299.png"
            },
            {
                id: 300,
                name: "Skitty",
                img: "imgs/gen3/ruby-sapphire/normal/normal/300.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/300.png"
            },
            {
                id: 301,
                name: "Delcatty",
                img: "imgs/gen3/ruby-sapphire/normal/normal/301.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/301.png"
            },
            {
                id: 302,
                name: "Sableye",
                img: "imgs/gen3/ruby-sapphire/normal/normal/302.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/302.png"
            },
            {
                id: 303,
                name: "Mawile",
                img: "imgs/gen3/ruby-sapphire/normal/normal/303.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/303.png"
            },
            {
                id: 304,
                name: "Aron",
                img: "imgs/gen3/ruby-sapphire/normal/normal/304.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/304.png"
            },
            {
                id: 305,
                name: "Lairon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/305.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/305.png"
            },
            {
                id: 306,
                name: "Aggron",
                img: "imgs/gen3/ruby-sapphire/normal/normal/306.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/306.png"
            },
            {
                id: 307,
                name: "Meditite",
                img: "imgs/gen3/ruby-sapphire/normal/normal/307.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/307.png"
            },
            {
                id: 308,
                name: "Medicham",
                img: "imgs/gen3/ruby-sapphire/normal/normal/308.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/308.png"
            },
            {
                id: 309,
                name: "Electrike",
                img: "imgs/gen3/ruby-sapphire/normal/normal/309.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/309.png"
            },
            {
                id: 310,
                name: "Manectric",
                img: "imgs/gen3/ruby-sapphire/normal/normal/310.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/310.png"
            },
            {
                id: 311,
                name: "Plusle",
                img: "imgs/gen3/ruby-sapphire/normal/normal/311.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/311.png"
            },
            {
                id: 312,
                name: "Minun",
                img: "imgs/gen3/ruby-sapphire/normal/normal/312.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/312.png"
            },
            {
                id: 313,
                name: "Volbeat",
                img: "imgs/gen3/ruby-sapphire/normal/normal/313.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/313.png"
            },
            {
                id: 314,
                name: "Illumise",
                img: "imgs/gen3/ruby-sapphire/normal/normal/314.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/314.png"
            },
            {
                id: 315,
                name: "Roselia",
                img: "imgs/gen3/ruby-sapphire/normal/normal/315.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/315.png"
            },
            {
                id: 316,
                name: "Gulpin",
                img: "imgs/gen3/ruby-sapphire/normal/normal/316.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/316.png"
            },
            {
                id: 317,
                name: "Swalot",
                img: "imgs/gen3/ruby-sapphire/normal/normal/317.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/317.png"
            },
            {
                id: 318,
                name: "Carvanha",
                img: "imgs/gen3/ruby-sapphire/normal/normal/318.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/318.png"
            },
            {
                id: 319,
                name: "Sharpedo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/319.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/319.png"
            },
            {
                id: 320,
                name: "Wailmer",
                img: "imgs/gen3/ruby-sapphire/normal/normal/320.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/320.png"
            },
            {
                id: 321,
                name: "Wailord",
                img: "imgs/gen3/ruby-sapphire/normal/normal/321.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/321.png"
            },
            {
                id: 322,
                name: "Numel",
                img: "imgs/gen3/ruby-sapphire/normal/normal/322.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/322.png"
            },
            {
                id: 323,
                name: "Camerupt",
                img: "imgs/gen3/ruby-sapphire/normal/normal/323.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/323.png"
            },
            {
                id: 324,
                name: "Torkoal",
                img: "imgs/gen3/ruby-sapphire/normal/normal/324.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/324.png"
            },
            {
                id: 325,
                name: "Spoink",
                img: "imgs/gen3/ruby-sapphire/normal/normal/325.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/325.png"
            },
            {
                id: 326,
                name: "Grumpig",
                img: "imgs/gen3/ruby-sapphire/normal/normal/326.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/326.png"
            },
            {
                id: 327,
                name: "Spinda",
                img: "imgs/gen3/ruby-sapphire/normal/normal/327.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/327.png"
            },
            {
                id: 328,
                name: "Trapinch",
                img: "imgs/gen3/ruby-sapphire/normal/normal/328.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/328.png"
            },
            {
                id: 329,
                name: "Vibrava",
                img: "imgs/gen3/ruby-sapphire/normal/normal/329.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/329.png"
            },
            {
                id: 330,
                name: "Flygon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/330.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/330.png"
            },
            {
                id: 331,
                name: "Cacnea",
                img: "imgs/gen3/ruby-sapphire/normal/normal/331.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/331.png"
            },
            {
                id: 332,
                name: "Cacturne",
                img: "imgs/gen3/ruby-sapphire/normal/normal/332.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/332.png"
            },
            {
                id: 333,
                name: "Swablu",
                img: "imgs/gen3/ruby-sapphire/normal/normal/333.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/333.png"
            },
            {
                id: 334,
                name: "Altaria",
                img: "imgs/gen3/ruby-sapphire/normal/normal/334.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/334.png"
            },
            {
                id: 335,
                name: "Zangoose",
                img: "imgs/gen3/ruby-sapphire/normal/normal/335.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/335.png"
            },
            {
                id: 336,
                name: "Seviper",
                img: "imgs/gen3/ruby-sapphire/normal/normal/336.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/336.png"
            },
            {
                id: 337,
                name: "Lunatone",
                img: "imgs/gen3/ruby-sapphire/normal/normal/337.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/337.png"
            },
            {
                id: 338,
                name: "Solrock",
                img: "imgs/gen3/ruby-sapphire/normal/normal/338.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/338.png"
            },
            {
                id: 339,
                name: "Barboach",
                img: "imgs/gen3/ruby-sapphire/normal/normal/339.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/339.png"
            },
            {
                id: 340,
                name: "Whiscash",
                img: "imgs/gen3/ruby-sapphire/normal/normal/340.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/340.png"
            },
            {
                id: 341,
                name: "Corphish",
                img: "imgs/gen3/ruby-sapphire/normal/normal/341.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/341.png"
            },
            {
                id: 342,
                name: "Crawdaunt",
                img: "imgs/gen3/ruby-sapphire/normal/normal/342.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/342.png"
            },
            {
                id: 343,
                name: "Baltoy",
                img: "imgs/gen3/ruby-sapphire/normal/normal/343.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/343.png"
            },
            {
                id: 344,
                name: "Claydol",
                img: "imgs/gen3/ruby-sapphire/normal/normal/344.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/344.png"
            },
            {
                id: 345,
                name: "Lileep",
                img: "imgs/gen3/ruby-sapphire/normal/normal/345.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/345.png"
            },
            {
                id: 346,
                name: "Cradily",
                img: "imgs/gen3/ruby-sapphire/normal/normal/346.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/346.png"
            },
            {
                id: 347,
                name: "Anorith",
                img: "imgs/gen3/ruby-sapphire/normal/normal/347.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/347.png"
            },
            {
                id: 348,
                name: "Armaldo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/348.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/348.png"
            },
            {
                id: 349,
                name: "Feebas",
                img: "imgs/gen3/ruby-sapphire/normal/normal/349.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/349.png"
            },
            {
                id: 350,
                name: "Milotic",
                img: "imgs/gen3/ruby-sapphire/normal/normal/350.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/350.png"
            },
            {
                id: 351,
                name: "Castform",
                img: "imgs/gen3/ruby-sapphire/normal/normal/351.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/351.png"
            },
            {
                id: 352,
                name: "Kecleon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/352.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/352.png"
            },
            {
                id: 353,
                name: "Shuppet",
                img: "imgs/gen3/ruby-sapphire/normal/normal/353.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/353.png"
            },
            {
                id: 354,
                name: "Banette",
                img: "imgs/gen3/ruby-sapphire/normal/normal/354.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/354.png"
            },
            {
                id: 355,
                name: "Duskull",
                img: "imgs/gen3/ruby-sapphire/normal/normal/355.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/355.png"
            },
            {
                id: 356,
                name: "Dusclops",
                img: "imgs/gen3/ruby-sapphire/normal/normal/356.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/356.png"
            },
            {
                id: 357,
                name: "Tropius",
                img: "imgs/gen3/ruby-sapphire/normal/normal/357.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/357.png"
            },
            {
                id: 358,
                name: "Chimecho",
                img: "imgs/gen3/ruby-sapphire/normal/normal/358.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/358.png"
            },
            {
                id: 359,
                name: "Absol",
                img: "imgs/gen3/ruby-sapphire/normal/normal/359.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/359.png"
            },
            {
                id: 360,
                name: "Wynaut",
                img: "imgs/gen3/ruby-sapphire/normal/normal/360.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/360.png"
            },
            {
                id: 361,
                name: "Snorunt",
                img: "imgs/gen3/ruby-sapphire/normal/normal/361.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/361.png"
            },
            {
                id: 362,
                name: "Glalie",
                img: "imgs/gen3/ruby-sapphire/normal/normal/362.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/362.png"
            },
            {
                id: 363,
                name: "Spheal",
                img: "imgs/gen3/ruby-sapphire/normal/normal/363.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/363.png"
            },
            {
                id: 364,
                name: "Sealeo",
                img: "imgs/gen3/ruby-sapphire/normal/normal/364.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/364.png"
            },
            {
                id: 365,
                name: "Walrein",
                img: "imgs/gen3/ruby-sapphire/normal/normal/365.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/365.png"
            },
            {
                id: 366,
                name: "Clamperl",
                img: "imgs/gen3/ruby-sapphire/normal/normal/366.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/366.png"
            },
            {
                id: 367,
                name: "Huntail",
                img: "imgs/gen3/ruby-sapphire/normal/normal/367.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/367.png"
            },
            {
                id: 368,
                name: "Gorebyss",
                img: "imgs/gen3/ruby-sapphire/normal/normal/368.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/368.png"
            },
            {
                id: 369,
                name: "Relicanth",
                img: "imgs/gen3/ruby-sapphire/normal/normal/369.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/369.png"
            },
            {
                id: 370,
                name: "Luvdisc",
                img: "imgs/gen3/ruby-sapphire/normal/normal/370.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/370.png"
            },
            {
                id: 371,
                name: "Bagon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/371.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/371.png"
            },
            {
                id: 372,
                name: "Shelgon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/372.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/372.png"
            },
            {
                id: 373,
                name: "Salamence",
                img: "imgs/gen3/ruby-sapphire/normal/normal/373.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/373.png"
            },
            {
                id: 374,
                name: "Beldum",
                img: "imgs/gen3/ruby-sapphire/normal/normal/374.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/374.png"
            },
            {
                id: 375,
                name: "Metang",
                img: "imgs/gen3/ruby-sapphire/normal/normal/375.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/375.png"
            },
            {
                id: 376,
                name: "Metagross",
                img: "imgs/gen3/ruby-sapphire/normal/normal/376.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/376.png"
            },
            {
                id: 377,
                name: "Regirock",
                img: "imgs/gen3/ruby-sapphire/normal/normal/377.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/377.png"
            },
            {
                id: 378,
                name: "Regice",
                img: "imgs/gen3/ruby-sapphire/normal/normal/378.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/378.png"
            },
            {
                id: 379,
                name: "Registeel",
                img: "imgs/gen3/ruby-sapphire/normal/normal/379.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/379.png"
            },
            {
                id: 380,
                name: "Latias",
                img: "imgs/gen3/ruby-sapphire/normal/normal/380.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/380.png"
            },
            {
                id: 381,
                name: "Latios",
                img: "imgs/gen3/ruby-sapphire/normal/normal/381.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/381.png"
            },
            {
                id: 382,
                name: "Kyogre",
                img: "imgs/gen3/ruby-sapphire/normal/normal/382.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/382.png"
            },
            {
                id: 383,
                name: "Groudon",
                img: "imgs/gen3/ruby-sapphire/normal/normal/383.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/383.png"
            },
            {
                id: 384,
                name: "Rayquaza",
                img: "imgs/gen3/ruby-sapphire/normal/normal/384.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/384.png"
            },
            {
                id: 385,
                name: "Jirachi",
                img: "imgs/gen3/ruby-sapphire/normal/normal/385.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/385.png",
                mythical: true
            },
            {
                id: 386,
                name: "Deoxys",
                img: "imgs/gen3/ruby-sapphire/normal/normal/386.png",
                imgS: "imgs/gen3/ruby-sapphire/shiny/shiny/386.png",
                mythical: true
            },
        ]
    },
});