window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	legendsarceus: "Hisui Dex",
});
PPGC.register({
	dex: {
		legendsarceus: [
			{
				id: 1,
				name: "Rowlet",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/722.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/722.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Leafage", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Roost", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Aerial Ace", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1] }
				]
			},
			{
				id: 2,
				name: "Dartrix",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/723.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/723.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Leafage", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Roost", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Aerial Ace", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 3,
				name: "Decidueye",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/724-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/724-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Triple Arrows", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Leaf Blade", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Leaf Storm", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 4,
				name: "Cyndaquil",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/155.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/155.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Ember", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Quick Attack", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Flame Wheel", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 5,
				name: "Quilava",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/156.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/156.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Ember", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Quick Attack", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Flame Wheel", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 6,
				name: "Typhlosion",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/157-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/157-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Infernal Parade", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Flamethrower", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Overheat", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 7,
				name: "Oshawott",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/501.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/501.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Aqua Jet", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Water Pulse", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Slash", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 8,
				name: "Dewott",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/502.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/502.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Aqua Jet", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Water Pulse", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Slash", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				]
			},
			{
				id: 9,
				name: "Samurott",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/503-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/503-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Ceaseless Edge", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Aqua Tail", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Hydro Pump", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				]
			},
			{
				id: 10,
				name: "Bidoof",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/399.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/399.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/399.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/399.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/399-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/399-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
					{ boost: true, text: "Investigated the Bidoof that bother the village", tiers: [1] },
				],
			},
			{
				id: 11,
				name: "Bibarel",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/400.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/400.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/400.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/400.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/400-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/400-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 20] },
					{ boost: false, text: "Times you have seen it use Bite", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Aqua Tail", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 12,
				name: "Starly",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/396.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/396.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/396.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/396.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/396-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/396-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 13,
				name: "Staravia",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/397.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/397.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/397.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/397.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/397-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/397-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of you've defeated with Electric-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Aerial Ace", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 14,
				name: "Staraptor",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/398.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/398.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/398.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/398.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/398-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/398-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've caught while they were in the air", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of you've defeated with Rock-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Air Slash", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Brave Bird", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 15,
				name: "Shinx",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/403.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/403.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/403.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/403.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/403-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/403-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Quick Attack", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Bite", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 16,
				name: "Luxio",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/404.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/404.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/404.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/404.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/404-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/404-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Bite", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Thunder Fang", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 17,
				name: "Luxray",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/405.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/405.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/405.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/405.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/405-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/405-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Thunder Fang", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Crunch", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Wild Charge", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 18,
				name: "Wurmple",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/265.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/265.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Poison Sting", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 19,
				name: "Silcoon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/266.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/266.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number caught during daylight hours", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Flying-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Poison Sting", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 20,
				name: "Beautifly",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/267.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/267.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/267.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/267.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/267-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/267-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number caught during daylight hours", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Rock-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Stun Spore", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 21,
				name: "Cascoon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/268.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/268.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 20] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Poison Sting", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
					{ boost: true, text: "Investigated how Silcoon and Cascoon differ", tiers: [1] },
				],
			},
			{
				id: 22,
				name: "Dustox",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/269.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/269.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/269.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/269.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/269-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/269-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Psychic-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Poison Powder", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 23,
				name: "Ponyta",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/077.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/077.png",
				forms: [
					{
						name: "Kantonian",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/077.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/077.png"
					},
					{
						name: "Galarian",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/077-g.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/077-g.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Water-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Ember", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Investigated a sighting of an unusual Ponyta", tiers: [1] },
				],
			},
			{
				id: 24,
				name: "Rapidash",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/078.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/078.png",
				forms: [
					{
						name: "Kantonian",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/078.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/078.png"
					},
					{
						name: "Galarian",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/078-g.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/078-g.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Water-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Fire Blast", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 25,
				name: "Eevee",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/133.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/133.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/133.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/133.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/133-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/133-f.png"
					},
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Quick Attack", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3, 5, 10] },
					{ boost: true, text: "Investigated more about how Eevee evolves", tiers: [1] },
				],
			},
			{
				id: 26,
				name: "Vaporeon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/134.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/134.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Aqua Tail", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 27,
				name: "Jolteon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/135.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/135.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Thunderbolt", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 28,
				name: "Flareon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/136.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/136.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Flamethrower", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 29,
				name: "Espeon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/196.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/196.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Psychic", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 30,
				name: "Umbreon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/197.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/197.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Dark Pulse", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 31,
				name: "Leafeon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/470.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/470.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Leaf Blade", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 32,
				name: "Glaceon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/471.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/471.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Ice Beam", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 33,
				name: "Sylveon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/700.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/700.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Fairy Wind", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 34,
				name: "Zubat",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/041.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/041.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/041.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/041.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/041-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/041-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number caught during daylight hours", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Rock-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Gust", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
					{ boost: true, text: "Investigated Zubat’s knack for navigating in the dark", tiers: [1] },
				],
			},
			{
				id: 35,
				name: "Golbat",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/042.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/042.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/042.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/042.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/042-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/042-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of you've defeated with Ice-type moves", tiers: [1, 2, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Psychic-type moves", tiers: [1, 2, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Bite", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Air Cutter", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 36,
				name: "Crobat",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/169.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/169.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: true, text: "Number you've caught while they were in the air", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of you've defeated with Ice-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Cross Poison", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Leech Life", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 37,
				name: "Drifloon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/425.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/425.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of you've defeated with Ghost-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Confusion", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Hypnosis", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
					{ boost: true, text: "Investigated whether Drifloon truly does play with kids", tiers: [1] },
				],
			},
			{
				id: 38,
				name: "Drifblim",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/426.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/426.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of you've defeated with Dark-type moves", tiers: [1, 3, 10, 25, 40] },
					{ boost: false, text: "Times you have seen it use Mystical Fire", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Self-Destruct", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 39,
				name: "Kricketot",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/401.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/401.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/401.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/401.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/401-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/401-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 6, 12, 25] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 4, 6, 8] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 40,
				name: "Kricketune",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/402.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/402.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/402.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/402.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/402-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/402-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: true, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Slash", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use X-Scissor", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 41,
				name: "Buizel",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/418.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/418.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/418.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/418.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/418-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/418-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: true, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Electric-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Aqua Jet", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 42,
				name: "Floatzel",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/419.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/419.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/419.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/419.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/419-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/419-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Grass-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: true, text: "Times you have seen it use Water Pulse", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 43,
				name: "Burmy",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/412.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/412.png",
				maxStatus: "shiny",
				forms: [
					{
						name: "Plant Cloak",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/412.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/412.png",
						maxStatus: "shiny",
					},
					{
						name: "Sandy Cloak",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/412-s.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/412-s.png",
						maxStatus: "shiny",
					},
					{
						name: "Trash Cloak",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/412-t.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/412-t.png",
						maxStatus: "shiny",
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Flying-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Struggle Bug", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of different forms you've obtained", tiers: [3] },
					{ boost: false, text: "Number you've seen leap out of trees", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 44,
				name: "Wormadam",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/413.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/413.png",
				maxStatus: "shiny",
				forms: [
					{
						name: "Plant Cloak",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/413.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/413.png",
						maxStatus: "shiny",
					},
					{
						name: "Sandy Cloak",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/413-s.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/413-s.png",
						maxStatus: "shiny",
					},
					{
						name: "Trash Cloak",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/413-t.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/413-t.png",
						maxStatus: "shiny",
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Confusion", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Bug Buzz", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Number you've seen leap out of trees", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of different forms you've obtained", tiers: [3] },
				],
			},
			{
				id: 45,
				name: "Mothim",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/414.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/414.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of you've defeated with Rock-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Silver Wind", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Bug Buzz", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 46,
				name: "Geodude",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/074.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/074.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Rollout", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Water-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number of you've defeated with Grass-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: true, text: "Number you've seen leap out of ore deposits", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 47,
				name: "Graveler",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/075.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/075.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Rock Slide", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've seen leap out of ore deposits", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 48,
				name: "Golem",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/076.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/076.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Steel-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Stealth Rock", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
				],
			},
			{
				id: 49,
				name: "Stantler",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/234.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/234.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Psyshield Bash", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 50,
				name: "Wyrdeer",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/899.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/899.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Psyshield Bash", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Extrasensory", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				]
			},
			{
				id: 51,
				name: "Munchlax",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/446.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/446.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Rest", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 5, 10, 15, 20] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 52,
				name: "Snorlax",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/143.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/143.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 3] },
					{ boost: true, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 10, 20, 30, 50] },
				],
			},
			{
				id: 53,
				name: "Paras",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/046.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/046.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Absorb", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Stun Spore", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 54,
				name: "Parasect",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/047.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/047.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of you've defeated with Flying-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Spore", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Venoshock", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Investigated the mushroom growing on Parasect", tiers: [1] },
				],
			},
			{
				id: 55,
				name: "Pichu",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/172.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/172.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of small specimens caught", tiers: [1, 2, 3] },
					{ boost: true, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Number caught during daylight hours", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 56,
				name: "Pikachu",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/025.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/025.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/025.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/025.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/025-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/025-f.png"
					},
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Thunder Shock", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Thunderbolt", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 57,
				name: "Raichu",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/026.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/026.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/026.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/026.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/026-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/026-f.png"
					},
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Iron Tail", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Thunder", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 58,
				name: "Abra",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/063.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/063.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Teleport", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 59,
				name: "Kadabra",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/064.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/064.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/064.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/064.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/064-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/064-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of you've defeated with Bug-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Calm Mind", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Psycho Cut", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 60,
				name: "Alakazam",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/065.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/065.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/065.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/065.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/065-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/065-f.png"
					},
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Dark-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Recover", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Psychic", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 61,
				name: "Chimchar",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/390.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/390.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Ember", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 62,
				name: "Monferno",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/391.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/391.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Flame Wheel", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Flamethrower", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 63,
				name: "Infernape",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/392.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/392.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 3] },
					{ boost: true, text: "Times you have seen it use Flare Blitz", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Raging Fury", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 64,
				name: "Buneary",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/427.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/427.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 65,
				name: "Lopunny",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/428.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/428.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Draining Kiss", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Close Combat", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 66,
				name: "Cherubi",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/420.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/420.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 5, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Absorb", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number you've seen leap out of trees", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 67,
				name: "Cherrim",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/421.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/421.png",
				maxStatus: "shiny",
				forms: [
					{
						name: "Overcast",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/421.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/421.png",
						maxStatus: "shiny",
					},
					{
						name: "Sunshine",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/421-s.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/421-s.png",
						maxStatus: "shiny",
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number caught during daylight hours", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Petal Dance", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've seen leap out of trees", tiers: [1, 2, 4, 10, 15] },
				],
			},
			{
				id: 68,
				name: "Psyduck",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/054.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/054.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of you've defeated with Electric-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Confusion", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 69,
				name: "Golduck",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/055.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/055.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of you've defeated with Grass-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Zen Headbutt", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Aqua Tail", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 70,
				name: "Combee",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/415.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/415.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/415.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/415.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/415-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/415-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Rock-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Gust", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've seen leap out of trees", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
					{ boost: true, text: "Investigated the different flavors of Combee honey", tiers: [1] },
				],
			},
			{
				id: 71,
				name: "Vespiquen",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/416.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/416.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Air Slash", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Bug Buzz", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've seen leap out of trees", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 72,
				name: "Scyther",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/123.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/123.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/123.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/123.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/123-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/123-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Rock-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Air Slash", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use X-Scissor", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 73,
				name: "Kleavor",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/900.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/900.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Stone Axe", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use X-Scissor", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				]
			},
			{
				id: 74,
				name: "Scizor",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/212.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/212.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/212.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/212.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/212-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/212-f.png"
					},
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Double Hit", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use X-Scissor", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 75,
				name: "Heracross",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/214.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/214.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/214.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/214.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/214-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/214-f.png"
					},
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of large specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number you've seen leap out of trees", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 76,
				name: "Mime Jr.",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/439.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/439.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Mimic", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 77,
				name: "Mr. Mime",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/122.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/122.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Mimic", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Investigated the suspicious movements of Mr. Mime", tiers: [1] },
				],
			},
			{
				id: 78,
				name: "Aipom",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/190.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/190.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/190.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/190.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/190-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/190-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: true, text: "Times you have seen it use Double Hit", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 4, 6, 8] },
					{ boost: false, text: "Number you've seen leap out of trees", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 79,
				name: "Ambipom",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/424.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/424.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/424.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/424.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/424-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/424-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: true, text: "Times you have seen it use Double Hit", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Iron Tail", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 80,
				name: "Magikarp",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/129.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/129.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/129.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/129.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/129-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/129-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Splash", tiers: [1, 5, 20, 50, 100] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3, 5, 10] },
				],
			},
			{
				id: 81,
				name: "Gyarados",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/130.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/130.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/130.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/130.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/130-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/130-f.png"
					},
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've caught while they were in the air", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Electric-type moves", tiers: [1, 2, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Bite", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Hurricane", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 82,
				name: "Shellos",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/422.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/422.png",
				forms: [
					{
						name: "West Sea",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/422.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/422.png"
					},
					{
						name: "East Sea",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/422-e.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/422-e.png"
					},
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of small specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Water Pulse", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 4, 6, 8] },
					{ boost: true, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 83,
				name: "Gastrodon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/423.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/423.png",
				forms: [
					{
						name: "West Sea",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/423.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/423.png"
					},
					{
						name: "East Sea",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/423-e.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/423-e.png"
					},
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Mud Bomb", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 84,
				name: "Qwilfish",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/211-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/211-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Barb Barrage", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 85,
				name: "Overqwil",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/904.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/904.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Barb Barrage", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Dark Pulse", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				]
			},
			{
				id: 86,
				name: "Happiny",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/440.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/440.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 87,
				name: "Chansey",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/113.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/113.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Soft-Boiled", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 5, 10, 15, 20] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 88,
				name: "Blissey",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/242.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/242.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Draining Kiss", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Investigated what would make Blissey help a human", tiers: [1] },
				],
			},
			{
				id: 89,
				name: "Budew",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/406.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/406.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number caught during daylight hours", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Absorb", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 90,
				name: "Roselia",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/315.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/315.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/315.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/315.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/315-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/315-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number caught during daylight hours", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of you've defeated with Psychic-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Poison Powder", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 91,
				name: "Roserade",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/407.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/407.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/407.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/407.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/407-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/407-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of you've defeated with Flying-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Energy Ball", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Petal Dance", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 3, 5, 7, 10] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 92,
				name: "Carnivine",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/455.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/455.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of you've defeated with Flying-type moves", tiers: [1, 2, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Acid Spray", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 93,
				name: "Petilil",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/548.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/548.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of small specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Poison Powder", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 94,
				name: "Lilligant",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/549-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/549-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Petal Dance", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Victory Dance", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 95,
				name: "Tangela",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/114.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/114.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Ancient Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 96,
				name: "Tangrowth",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/465.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/465.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/465.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/465.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/465-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/465-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of you've defeated with Poison-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Double Hit", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Energy Ball", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 97,
				name: "Barboach",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/339.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/339.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Grass-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Mud-Slap", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Mud Bomb", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 98,
				name: "Whiscash",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/340.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/340.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of you've defeated with Grass-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Mud Bomb", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Aqua Tail", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 99,
				name: "Croagunk",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/453.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/453.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/453.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/453.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/453-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/453-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number of you've defeated with Psychic-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Mud Bomb", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
					{ boost: true, text: "Investigated Croagunk poison’s medicinal properties", tiers: [1] },
				],
			},
			{
				id: 100,
				name: "Toxicroak",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/454.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/454.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/454.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/454.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/454-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/454-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Psychic-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: true, text: "Times you have seen it use Venoshock", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Nasty Plot", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 101,
				name: "Ralts",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/280.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/280.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of small specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Hypnosis", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 102,
				name: "Kirlia",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/281.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/281.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of small specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Draining Kiss", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 103,
				name: "Gardevoir",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/282.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/282.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Steel-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Dazzling Gleam", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Psychic", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 104,
				name: "Gallade",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/475.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/475.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of you've defeated with Ghost-type moves", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Swords Dance", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Close Combat", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 105,
				name: "Yanma",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/193.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/193.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number caught in the evening", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Rock-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Ancient Power", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 106,
				name: "Yanmega",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/469.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/469.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: true, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Flying-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Ancient Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Bug Buzz", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 107,
				name: "Hippopotas",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/449.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/449.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/449.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/449.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/449-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/449-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Grass-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Bite", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 4, 6, 8] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 108,
				name: "Hippowdon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/450.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/450.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/450.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/450.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/450-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/450-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Ice-type moves", tiers: [1, 2, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Mud Bomb", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 109,
				name: "Pachirisu",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/417.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/417.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/417.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/417.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/417-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/417-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Spark", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've seen leap out of trees", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Investigated strategies for battling with Pachirisu", tiers: [1] },
				],
			},
			{
				id: 110,
				name: "Stunky",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/434.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/434.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Poison Gas", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Acid Spray", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 111,
				name: "Skuntank",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/435.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/435.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Venoshock", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Flamethrower", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 112,
				name: "Teddiursa",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/216.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/216.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 113,
				name: "Ursaring",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/217.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/217.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/217.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/217.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/217-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/217-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: true, text: "Times you have seen it use Bulldoze", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Slash", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 114,
				name: "Ursaluna",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/901.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/901.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Headlong Rush", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				]
			},
			{
				id: 115,
				name: "Goomy",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/704.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/704.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Acid Spray", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Acid Armor", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 4, 6, 8] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 116,
				name: "Sliggoo",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/705-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/705-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Water Pulse", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Iron Head", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 117,
				name: "Goodra",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/706-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/706-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Dragon Pulse", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Shelter", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 118,
				name: "Onix",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/095.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/095.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Water-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Rock Slide", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Stealth Rock", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 119,
				name: "Steelix",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/208.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/208.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/208.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/208.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/208-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/208-f.png"
					},
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Stealth Rock", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Iron Tail", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 120,
				name: "Rhyhorn",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/111.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/111.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/111.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/111.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/111-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/111-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Grass-type moves", tiers: [1, 2, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Stealth Rock", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 121,
				name: "Rhydon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/112.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/112.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/112.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/112.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/112-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/112-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of you've defeated with Water-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Rock Slide", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 122,
				name: "Rhyperior",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/464.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/464.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/464.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/464.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/464-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/464-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of you've defeated with Ice-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Rock Slide", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 123,
				name: "Bonsly",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/438.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/438.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Mimic", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've seen leap out of ore deposits", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 124,
				name: "Sudowoodo",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/185.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/185.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/185.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/185.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/185-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/185-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of you've defeated with Water-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Mimic", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Investigated the causes behind a listless Sudowoodo", tiers: [1] },
				],
			},
			{
				id: 125,
				name: "Lickitung",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/108.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/108.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Rollout", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 10, 20, 30, 50] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 126,
				name: "Lickilicky",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/463.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/463.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Zen Headbutt", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Giga Impact", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3] },
				],
			},
			{
				id: 127,
				name: "Togepi",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/175.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/175.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of small specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Draining Kiss", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 128,
				name: "Togetic",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/176.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/176.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've caught while they were in the air", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Fairy Wind", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Air Slash", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 129,
				name: "Togekiss",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/468.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/468.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 3] },
					{ boost: true, text: "Number you've caught while they were in the air", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Air Slash", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Extrasensory", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Moonblast", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 130,
				name: "Turtwig",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/387.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/387.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Leafage", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 131,
				name: "Grotle",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/388.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/388.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Bite", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Leaf Blade", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 132,
				name: "Torterra",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/389.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/389.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of you've defeated with Ice-type moves", tiers: [1, 2, 3] },
					{ boost: true, text: "Times you have seen it use Wood Hammer", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Headlong Rush", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 133,
				name: "Porygon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/137.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/137.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Tackle", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Tri Attack", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 134,
				name: "Porygon2",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/233.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/233.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Thunderbolt", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Recover", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 135,
				name: "Porygon-Z",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/474.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/474.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Thunderbolt", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Recover", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Hyper Beam", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 136,
				name: "Gastly",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/092.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/092.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Ghost-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Astonish", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 137,
				name: "Haunter",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/093.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/093.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of you've defeated with Dark-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Venoshock", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 5, 7] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 138,
				name: "Gengar",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/094.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/094.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Hypnosis", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Shadow Ball", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 139,
				name: "Spiritomb",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/442.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/442.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: true, text: "Times you have seen it use Hex", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Dark Pulse", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 140,
				name: "Murkrow",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/198.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/198.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/198.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/198.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/198-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/198-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Rock-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: true, text: "Times you have seen it use Roost", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 141,
				name: "Honchkrow",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/430.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/430.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: true, text: "Number you've caught while they were in the air", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Fairy-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Snarl", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Dark Pulse", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 142,
				name: "Unown",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/201.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201.png",
				maxStatus: "shiny",
				forms: [
					{
						name: "A",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-a.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-a.png",
						maxStatus: "shiny",
					},
					{
						name: "B",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-b.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-b.png",
						maxStatus: "shiny",
					},
					{
						name: "C",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-c.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-c.png",
						maxStatus: "shiny",
					},
					{
						name: "D",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-d.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-d.png",
						maxStatus: "shiny",
					},
					{
						name: "E",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-e.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-e.png",
						maxStatus: "shiny",
					},
					{
						name: "F",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-f.png",
						maxStatus: "shiny",
					},
					{
						name: "G",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-g.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-g.png",
						maxStatus: "shiny",
					},
					{
						name: "H",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-h.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-h.png",
						maxStatus: "shiny",
					},
					{
						name: "I",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-i.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-i.png",
						maxStatus: "shiny",
					},
					{
						name: "J",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-j.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-j.png",
						maxStatus: "shiny",
					},
					{
						name: "K",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-k.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-k.png",
						maxStatus: "shiny",
					},
					{
						name: "L",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-l.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-l.png",
						maxStatus: "shiny",
					},
					{
						name: "M",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-m.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-m.png",
						maxStatus: "shiny",
					},
					{
						name: "N",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-n.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-n.png",
						maxStatus: "shiny",
					},
					{
						name: "O",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-o.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-o.png",
						maxStatus: "shiny",
					},
					{
						name: "P",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-p.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-p.png",
						maxStatus: "shiny",
					},
					{
						name: "Q",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-q.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-q.png",
						maxStatus: "shiny",
					},
					{
						name: "R",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-r.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-r.png",
						maxStatus: "shiny",
					},
					{
						name: "S",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-s.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-s.png",
						maxStatus: "shiny",
					},
					{
						name: "T",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-t.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-t.png",
						maxStatus: "shiny",
					},
					{
						name: "U",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-u.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-u.png",
						maxStatus: "shiny",
					},
					{
						name: "V",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-v.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-v.png",
						maxStatus: "shiny",
					},
					{
						name: "W",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-w.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-w.png",
						maxStatus: "shiny",
					},
					{
						name: "X",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-x.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-x.png",
						maxStatus: "shiny",
					},
					{
						name: "Y",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-y.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-y.png",
						maxStatus: "shiny",
					},
					{
						name: "Z",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-z.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-z.png",
						maxStatus: "shiny",
					},
					{
						name: "!",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-em.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-em.png",
						maxStatus: "shiny",
					},
					{
						name: "?",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/201-qm.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/201-qm.png",
						maxStatus: "shiny",
					},
				],
				research: [
					{ boost: true, text: "Number of different forms you've obtained", tiers: [1, 5, 10, 15, 28] },
				],
			},
			{
				id: 143,
				name: "Spheal",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/363.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/363.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Rollout", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 4, 6, 8] },
					{ boost: false, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 144,
				name: "Sealeo",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/364.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/364.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Rock-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Liquidation", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 145,
				name: "Walrein",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/365.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/365.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Ice Beam", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Blizzard", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 4, 6, 8] },
				],
			},
			{
				id: 146,
				name: "Remoraid",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/223.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/223.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Grass-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Charge Beam", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Ice Beam", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 147,
				name: "Octillery",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/224.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/224.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/224.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/224.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/224-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/224-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Electric-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Hydro Pump", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Hyper Beam", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 148,
				name: "Skorupi",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/451.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/451.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of small specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Poison Sting", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 149,
				name: "Drapion",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/452.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/452.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Venoshock", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Cross Poison", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've stunned it by using items", tiers: [1, 3, 5, 7, 10] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 150,
				name: "Growlithe",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/058-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/058-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Water-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Fire Fang", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 151,
				name: "Arcanine",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/059-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/059-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Rock Slide", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Raging Fury", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Flare Blitz", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
				],
			},
			{
				id: 152,
				name: "Glameow",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/431.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/431.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Nasty Plot", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 153,
				name: "Purugly",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/432.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/432.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Play Rough", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 5, 10, 15, 20] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 154,
				name: "Machop",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/066.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/066.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of you've defeated with Flying-type moves", tiers: [1, 2, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Rock Smash", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 155,
				name: "Machoke",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/067.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/067.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of you've defeated with Psychic-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Bullet Punch", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 156,
				name: "Machamp",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/068.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/068.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Fairy-type moves", tiers: [1, 2, 3] },
					{ boost: true, text: "Times you have seen it use Bulk Up", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Close Combat", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 157,
				name: "Chatot",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/441.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/441.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number caught during daylight hours", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Electric-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Air Cutter", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 158,
				name: "Duskull",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/355.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/355.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Ghost-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Hex", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 159,
				name: "Dusclops",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/356.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/356.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Ghost-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Dark Pulse", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Shadow Ball", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 160,
				name: "Dusknoir",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/477.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/477.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of you've defeated with Dark-type moves", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Dark Pulse", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Shadow Ball", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 161,
				name: "Piplup",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/393.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/393.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Bubble", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 162,
				name: "Prinplup",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/394.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/394.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Water Pulse", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Roost", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 163,
				name: "Empoleon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/395.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/395.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 3] },
					{ boost: true, text: "Times you have seen it use Hydro Pump", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Wave Crash", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 164,
				name: "Mantyke",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/458.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/458.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of small specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Electric-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Water Pulse", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 165,
				name: "Mantine",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/226.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/226.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of you've defeated with Electric-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Air Slash", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 166,
				name: "Basculin",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/550-w.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/550-w.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: true, text: "Times you have seen it use Wave Crash", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 167,
				name: "Basculegion",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/902.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/902.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/902.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/902.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/902-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/902-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Wave Crash", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Shadow Ball", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				]
			},
			{
				id: 168,
				name: "Vulpix",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/037.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/037.png",
				forms: [
					{
						name: "Kantonian",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/037.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/037.png"
					},
					{
						name: "Alolan",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/037-a.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/037-a.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Ember", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
					{ boost: true, text: "Investigated about Vulpix from the Alola region", tiers: [1] },
				],
			},
			{
				id: 169,
				name: "Ninetales",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/038.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/038.png",
				forms: [
					{
						name: "Kantonian",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/038.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/038.png"
					},
					{
						name: "Alolan",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/038-a.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/038-a.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of you've defeated with Water-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Flamethrower", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Fire Blast", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 170,
				name: "Tentacool",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/072.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/072.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: true, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Electric-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Bubble", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 171,
				name: "Tentacruel",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/073.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/073.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Electric-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Poison Jab", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Hydro Pump", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 172,
				name: "Finneon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/456.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/456.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/456.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/456.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/456-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/456-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Grass-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Bubble", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 173,
				name: "Lumineon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/457.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/457.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/457.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/457.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/457-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/457-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Electric-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Silver Wind", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 174,
				name: "Magby",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/240.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/240.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Flame Wheel", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 175,
				name: "Magmar",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/126.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/126.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Water-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: true, text: "Times you have seen it use Flamethrower", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Fire Blast", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 176,
				name: "Magmortar",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/467.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/467.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Fire Punch", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Flamethrower", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Fire Blast", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 177,
				name: "Magnemite",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/081.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/081.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Thunder Shock", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Thunder Wave", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 178,
				name: "Magneton",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/082.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/082.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Spark", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Tri Attack", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 179,
				name: "Magnezone",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/462.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/462.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've caught while they were in the air", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Flash Cannon", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Thunderbolt", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 180,
				name: "Bronzor",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/436.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/436.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Confusion", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've seen leap out of ore deposits", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 181,
				name: "Bronzong",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/437.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/437.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Ghost-type moves", tiers: [1, 2, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Flash Cannon", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Extrasensory", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 182,
				name: "Elekid",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/239.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/239.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Spark", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 183,
				name: "Electabuzz",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/125.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/125.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: true, text: "Times you have seen it use Thunder Punch", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Thunder", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 184,
				name: "Electivire",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/466.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/466.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Thunder Wave", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Thunder Punch", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3] },
				],
			},
			{
				id: 185,
				name: "Gligar",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/207.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/207.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/207.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/207.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/207-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/207-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of you've defeated with Ice-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: true, text: "Times you have seen it use Mud Bomb", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 4, 6, 8] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 186,
				name: "Gliscor",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/472.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/472.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Water-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Mud Bomb", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use X-Scissor", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
					{ boost: true, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 187,
				name: "Gible",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/443.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/443.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/443.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/443.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/443-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/443-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Ice-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Twister", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Slash", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 188,
				name: "Gabite",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/444.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/444.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/444.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/444.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/444-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/444-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Dragon-type moves", tiers: [1, 2, 3] },
					{ boost: true, text: "Times you have seen it use Dragon Claw", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 4, 6, 8] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 189,
				name: "Garchomp",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/445.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/445.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/445.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/445.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/445-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/445-f.png"
					},
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of you've defeated with Fairy-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Dragon Claw", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Outrage", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 5, 20, 50, 100] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 190,
				name: "Nosepass",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/299.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/299.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 6, 12, 25] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Grass-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Iron Defense", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've seen leap out of ore deposits", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
					{ boost: true, text: "Investigated an old saying about Nosepass’s handiness", tiers: [1] },
				],
			},
			{
				id: 191,
				name: "Probopass",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/476.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/476.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Power Gem", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Earth Power", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
					{ boost: true, text: "Times you've stunned it by using items", tiers: [1, 3, 5, 7, 10] },
				],
			},
			{
				id: 192,
				name: "Voltorb",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/100-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/100-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Spark", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 5, 7] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 193,
				name: "Electrode",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/101-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/101-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Thunder", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Chloroblast", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Self-Destruct", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 194,
				name: "Rotom",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/479.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/479.png",
				forms: [
					{
						name: "Normal",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/479.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/479.png"
					},
					{
						name: "Fan",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/479-fa.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/479-fa.png"
					},
					{
						name: "Frost",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/479-fr.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/479-fr.png"
					},
					{
						name: "Heat",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/479-h.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/479-h.png"
					},
					{
						name: "Mow",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/479-m.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/479-m.png"
					},
					{
						name: "Wash",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/479-w.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/479-w.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Thunder Shock", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number of different forms you've obtained", tiers: [2, 4, 6] },
				],
			},
			{
				id: 195,
				name: "Chingling",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/433.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/433.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Confusion", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: false, text: "Times you've scared it off with a Scatter Bang", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 196,
				name: "Chimecho",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/358.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/358.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Ominous Wind", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Extrasensory", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Investigated a Chimecho settled in a human home", tiers: [1] },
				],
			},
			{
				id: 197,
				name: "Misdreavus",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/200.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/200.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 5, 10, 20] },
					{ boost: true, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Hex", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 4, 6, 8] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 198,
				name: "Mismagius",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/429.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/429.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Dark-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Hex", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Power Gem", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 199,
				name: "Cleffa",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/173.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/173.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of small specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 200,
				name: "Clefairy",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/035.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/035.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Draining Kiss", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
					{ boost: true, text: "Investigated whether Clefairy dance under a full moon", tiers: [1] },
				],
			},
			{
				id: 201,
				name: "Clefable",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/036.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/036.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 6, 12, 25] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Poison-type moves", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Psychic", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Moonblast", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
				],
			},
			{
				id: 202,
				name: "Sneasel",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/215-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/215-h.png",
				forms: [
					{
						name: "Johtonian Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/215.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/215.png"
					},
					{
						name: "Johtonian Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/215-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/215-f.png"
					},
					{
						name: "Hisuian Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/215-h.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/215-h.png"
					},
					{
						name: "Hisuian Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/215-h-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/215-h-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Slash", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 4, 6, 8] },
					{ boost: true, text: "Number of different forms you've obtained", tiers: [4] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 203,
				name: "Sneasler",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/903.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/903.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Dire Claw", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Swords Dance", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				]
			},
			{
				id: 204,
				name: "Weavile",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/461.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/461.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/461.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/461.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/461-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/461-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Slash", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Swords Dance", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 205,
				name: "Snorunt",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/361.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/361.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Ice Fang", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 206,
				name: "Glalie",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/362.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/362.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of heavy specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number of you've defeated with Steel-type moves", tiers: [1, 2, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Ice Fang", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Crunch", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
				],
			},
			{
				id: 207,
				name: "Froslass",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/478.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/478.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Icicle Crash", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
				],
			},
			{
				id: 208,
				name: "Cranidos",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/408.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/408.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Ancient Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 209,
				name: "Rampardos",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/409.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/409.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Iron Head", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Head Smash", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
				],
			},
			{
				id: 210,
				name: "Shieldon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/410.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/410.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Ancient Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 211,
				name: "Bastiodon",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/411.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/411.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Iron Defense", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Earth Power", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Stealth Rock", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
				],
			},
			{
				id: 212,
				name: "Swinub",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/220.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/220.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Ice Shard", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
					{ boost: true, text: "Investigated Swinub’s supposed special skill", tiers: [1] },
				],
			},
			{
				id: 213,
				name: "Piloswine",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/221.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/221.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/221.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/221.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/221-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/221-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Grass-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: true, text: "Times you have seen it use Ancient Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 214,
				name: "Mamoswine",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/473.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/473.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/473.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/473.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/473-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/473-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use High Horsepower", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Blizzard", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 215,
				name: "Bergmite",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/712.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/712.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Ice Shard", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: false, text: "Number you've seen leap out of ore deposits", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 216,
				name: "Avalugg",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/713-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/713-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Fighting-type moves", tiers: [1, 2, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Mountain Gale", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Blizzard", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 217,
				name: "Snover",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/459.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/459.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/459.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/459.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/459-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/459-f.png"
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Powder Snow", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 218,
				name: "Abomasnow",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/460.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/460.png",
				forms: [
					{
						name: "Male",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/460.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/460.png"
					},
					{
						name: "Female",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/460-f.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/460-f.png"
					},
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Times you have seen it use Blizzard", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Wood Hammer", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Number of different forms you've obtained", tiers: [2] },
				],
			},
			{
				id: 219,
				name: "Zorua",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/570-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/570-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number caught at night", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of you've defeated with Dark-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Snarl", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 220,
				name: "Zoroark",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/571-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/571-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of you've defeated with Dark-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Bitter Malice", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Nasty Plot", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 3, 5, 7, 10] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 221,
				name: "Rufflet",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/627.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/627.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 5, 7, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number of you've defeated with Electric-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Air Slash", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Roost", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 222,
				name: "Braviary",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/628-h.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/628-h.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've caught while they were in the air", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Esper Wing", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Brave Bird", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 223,
				name: "Riolu",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/447.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/447.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Flying-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Rock Smash", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 224,
				name: "Lucario",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/448.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/448.png",
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of alpha specimens caught", tiers: [1] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Aura Sphere", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Times you have seen it use Close Combat", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
					{ boost: true, text: "Times you've stunned it by using items", tiers: [1, 5, 10, 15, 20] },
				],
			},
			{
				id: 225,
				name: "Uxie",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/480.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/480.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Mystical Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Calm Mind", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 226,
				name: "Mesprit",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/481.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/481.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Mystical Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Recover", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 227,
				name: "Azelf",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/482.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/482.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Mystical Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Self-Destruct", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 228,
				name: "Heatran",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/485.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/485.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Fire Fang", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Magma Storm", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 229,
				name: "Regigigas",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/486.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/486.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Iron Head", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Giga Impact", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 230,
				name: "Cresselia",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/488.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/488.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: true, text: "Times you have seen it use Moonblast", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Lunar Blessing", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 231,
				name: "Tornadus",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/641.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/641.png",
				maxStatus: "shiny",
				forms: [
					{
						name: "Incarnate",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/641.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/641.png",
						maxStatus: "shiny",
					},
					{
						name: "Therian",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/641-t.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/641-t.png",
						maxStatus: "shiny",
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Extrasensory", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Bleakwind Storm", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 232,
				name: "Thundurus",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/642.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/642.png",
				maxStatus: "shiny",
				forms: [
					{
						name: "Incarnate",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/642.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/642.png",
						maxStatus: "shiny",
					},
					{
						name: "Therian",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/642-t.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/642-t.png",
						maxStatus: "shiny",
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Extrasensory", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Wildbolt Storm", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 233,
				name: "Landorus",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/645.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/645.png",
				maxStatus: "shiny",
				forms: [
					{
						name: "Incarnate",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/645.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/645.png",
						maxStatus: "shiny",
					},
					{
						name: "Therian",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/645-t.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/645-t.png",
						maxStatus: "shiny",
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Extrasensory", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Sandsear Storm", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 234,
				name: "Enamorus",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/905.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/905.png",
				maxStatus: "shiny",
				forms: [
					{
						name: "Incarnate",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/905.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/905.png",
						maxStatus: "shiny",
					},
					{
						name: "Therian",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/905-t.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/905-t.png",
						maxStatus: "shiny",
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Extrasensory", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Springtide Storm", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				]
			},
			{
				id: 235,
				name: "Dialga",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/483.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/483.png",
				maxStatus: "shiny",
				forms: [
					{
						name: "Altered",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/483.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/483.png",
						maxStatus: "shiny",
					},
					{
						name: "Origin",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/483-o.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/483-o.png",
						maxStatus: "shiny",
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Iron Tail", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Roar of Time", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 236,
				name: "Palkia",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/484.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/484.png",
				maxStatus: "shiny",
				forms: [
					{
						name: "Altered",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/484.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/484.png",
						maxStatus: "shiny",
					},
					{
						name: "Origin",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/484-o.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/484-o.png",
						maxStatus: "shiny",
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Aqua Tail", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Spacial Rend", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 237,
				name: "Giratina",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/487.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/487.png",
				maxStatus: "shiny",
				forms: [
					{
						name: "Altered",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/487.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/487.png",
						maxStatus: "shiny",
					},
					{
						name: "Origin",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/487-o.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/487-o.png",
						maxStatus: "shiny",
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Shadow Claw", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Shadow Force", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 238,
				name: "Arceus",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/493.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/493.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Received a part of Arceus", tiers: [1] },
				],
			},
			{
				id: 239,
				name: "Phione",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/489.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/489.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: true, text: "Times you have seen it use Water Pulse", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Zen Headbutt", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 240,
				name: "Manaphy",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/490.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/490.png",
				maxStatus: "shiny",
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Moonblast", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Take Heart", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 241,
				name: "Shaymin",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/492.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/492.png",
				maxStatus: "shiny",
				mythical: true,
				forms: [
					{
						name: "Land",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/492.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/492.png",
						maxStatus: "shiny",
						mythical: true
					},
					{
						name: "Sky",
						img: "imgs/sprites/gen8/legendsarceus/base-icons/492-s.png",
						imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/492-s.png",
						maxStatus: "shiny",
						mythical: true
					}
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Earth Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Seed Flare", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 242,
				name: "Darkrai",
				img: "imgs/sprites/gen8/legendsarceus/base-icons/491.png",
				imgS: "imgs/sprites/gen8/legendsarceus/shiny-icons/491.png",
				maxStatus: "shiny",
				mythical: true,
				research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Shadow Ball", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Dark Void", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
				],
			}
		],
	},
});
