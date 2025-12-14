const gen = 8.5;
const game = "legendsarceus";

const baseSprite = (natiId) =>
	wantAnimatedDexSprites(gen)
		? _frontSpriteAnimated(gen, game, natiId)
		: _frontSprite(gen, game, natiId);

const shinySprite = (natiId) =>
	wantAnimatedDexSprites(gen)
		? _frontSpriteShinyAnimated(gen, game, natiId)
		: _frontSpriteShiny(gen, game, natiId);

window.DATA.dexNames = Object.assign(window.DATA.dexNames || {}, {
	[game]: "Hisui Dex",
});
PPGC.register({
	dex: {
		[game]: [
			{
				id: 1, natiId: 722, name: "Rowlet", img: () => baseSprite(722), imgS: () => shinySprite(722), tags: ["starter"], research: [
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
				id: 2, natiId: 723, name: "Dartrix", img: () => baseSprite(723), imgS: () => shinySprite(723), tags: ["starter"], research: [
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
				id: 3, name: "Decidueye", img: () => baseSprite("724-h"), imgS: () => shinySprite("724-h"), tags: ["starter"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Triple Arrows", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Leaf Blade", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Leaf Storm", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 4, natiId: 155, name: "Cyndaquil", img: () => baseSprite(155), imgS: () => shinySprite(155), tags: ["starter"], research: [
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
				id: 5, natiId: 156, name: "Quilava", img: () => baseSprite(156), imgS: () => shinySprite(156), tags: ["starter"], research: [
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
				id: 6, name: "Typhlosion", img: () => baseSprite("157-h"), imgS: () => shinySprite("157-h"), tags: ["starter"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Infernal Parade", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Flamethrower", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Overheat", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 7, natiId: 501, name: "Oshawott", img: () => baseSprite(501), imgS: () => shinySprite(501), tags: ["starter"], research: [
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
				id: 8, natiId: 502, name: "Dewott", img: () => baseSprite(502), imgS: () => shinySprite(502), tags: ["starter"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Aqua Jet", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Water Pulse", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Slash", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },]
			},
			{
				id: 9, name: "Samurott", img: () => baseSprite("503-h"), imgS: () => shinySprite("503-h"), tags: ["starter"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Ceaseless Edge", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Aqua Tail", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Hydro Pump", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },]
			},
			{
				id: 10, natiId: 399, name: "Bidoof", img: () => baseSprite(399), imgS: () => shinySprite(399), forms: [
					{ name: "Male", img: () => baseSprite(399), imgS: () => shinySprite(399), },
					{ name: "Female", img: () => baseSprite("399-f"), imgS: () => shinySprite("399-f"), }
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
				id: 11, natiId: 400, name: "Bibarel", img: () => baseSprite(400), imgS: () => shinySprite(400), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(400), imgS: () => shinySprite(400), },
					{ name: "Female", img: () => baseSprite("400-f"), imgS: () => shinySprite("400-f"), }
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
				id: 12, natiId: 396, name: "Starly", img: () => baseSprite(396), imgS: () => shinySprite(396), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(396), imgS: () => shinySprite(396), },
					{ name: "Female", img: () => baseSprite("396-f"), imgS: () => shinySprite("396-f"), }
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
				id: 13, natiId: 397, name: "Staravia", img: () => baseSprite(397), imgS: () => shinySprite(397), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(397), imgS: () => shinySprite(397), },
					{ name: "Female", img: () => baseSprite("397-f"), imgS: () => shinySprite("397-f"), }
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
				id: 14, natiId: 398, name: "Staraptor", img: () => baseSprite(398), imgS: () => shinySprite(398), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(398), imgS: () => shinySprite(398), },
					{ name: "Female", img: () => baseSprite("398-f"), imgS: () => shinySprite("398-f"), }
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
				id: 15, natiId: 403, name: "Shinx", img: () => baseSprite(403), imgS: () => shinySprite(403), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(403), imgS: () => shinySprite(403), },
					{ name: "Female", img: () => baseSprite("403-f"), imgS: () => shinySprite("403-f"), }
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
				id: 16, natiId: 404, name: "Luxio", img: () => baseSprite(404), imgS: () => shinySprite(404), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(404), imgS: () => shinySprite(404), },
					{ name: "Female", img: () => baseSprite("404-f"), imgS: () => shinySprite("404-f"), }
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
				id: 17, natiId: 405, name: "Luxray", img: () => baseSprite(405), imgS: () => shinySprite(405), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(405), imgS: () => shinySprite(405), },
					{ name: "Female", img: () => baseSprite("405-f"), imgS: () => shinySprite("405-f"), }
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
				id: 18, natiId: 265, name: "Wurmple", img: () => baseSprite(265), imgS: () => shinySprite(265), research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of light specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Poison Sting", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 19, natiId: 266, name: "Silcoon", img: () => baseSprite(266), imgS: () => shinySprite(266), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number caught during daylight hours", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Flying-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Poison Sting", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 20, natiId: 267, name: "Beautifly", img: () => baseSprite(267), imgS: () => shinySprite(267), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(267), imgS: () => shinySprite(267), },
					{ name: "Female", img: () => baseSprite("267-f"), imgS: () => shinySprite("267-f"), }
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
				id: 21, natiId: 268, name: "Cascoon", img: () => baseSprite(268), imgS: () => shinySprite(268), research: [
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
				id: 22, natiId: 269, name: "Dustox", img: () => baseSprite(269), imgS: () => shinySprite(269), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(269), imgS: () => shinySprite(269), },
					{ name: "Female", img: () => baseSprite("269-f"), imgS: () => shinySprite("269-f"), }
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
				id: 23, natiId: 77, name: "Ponyta", img: () => baseSprite(77), imgS: () => shinySprite(77), forms: [
					{ name: "Kantonian", img: () => baseSprite(77), imgS: () => shinySprite(77), },
					{ name: "Galarian", img: () => baseSprite("077-g"), imgS: () => shinySprite("077-g"), }
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
				id: 24, natiId: 78, name: "Rapidash", img: () => baseSprite(78), imgS: () => shinySprite(78), forms: [
					{ name: "Kantonian", img: () => baseSprite(78), imgS: () => shinySprite(78), },
					{ name: "Galarian", img: () => baseSprite("078-g"), imgS: () => shinySprite("078-g"), }
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
				id: 25, natiId: 133, name: "Eevee", img: () => baseSprite(133), imgS: () => shinySprite(133), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(133), imgS: () => shinySprite(133), },
					{ name: "Female", img: () => baseSprite("133-f"), imgS: () => shinySprite("133-f"), },
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
				id: 26, natiId: 134, name: "Vaporeon", img: () => baseSprite(134), imgS: () => shinySprite(134), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Aqua Tail", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 27, natiId: 135, name: "Jolteon", img: () => baseSprite(135), imgS: () => shinySprite(135), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Thunderbolt", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 28, natiId: 136, name: "Flareon", img: () => baseSprite(136), imgS: () => shinySprite(136), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Flamethrower", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 29, natiId: 196, name: "Espeon", img: () => baseSprite(196), imgS: () => shinySprite(196), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Psychic", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 30, natiId: 197, name: "Umbreon", img: () => baseSprite(197), imgS: () => shinySprite(197), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Dark Pulse", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 31, natiId: 470, name: "Leafeon", img: () => baseSprite(470), imgS: () => shinySprite(470), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Leaf Blade", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 32, natiId: 471, name: "Glaceon", img: () => baseSprite(471), imgS: () => shinySprite(471), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Ice Beam", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 33, natiId: 700, name: "Sylveon", img: () => baseSprite(700), imgS: () => shinySprite(700), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Fairy Wind", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 34, natiId: 41, name: "Zubat", img: () => baseSprite(41), imgS: () => shinySprite(41), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(41), imgS: () => shinySprite(41), },
					{ name: "Female", img: () => baseSprite("041-f"), imgS: () => shinySprite("041-f"), }
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
				id: 35, natiId: 42, name: "Golbat", img: () => baseSprite(42), imgS: () => shinySprite(42), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(42), imgS: () => shinySprite(42), },
					{ name: "Female", img: () => baseSprite("042-f"), imgS: () => shinySprite("042-f"), }
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
				id: 36, natiId: 169, name: "Crobat", img: () => baseSprite(169), imgS: () => shinySprite(169), research: [
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
				id: 37, natiId: 425, name: "Drifloon", img: () => baseSprite(425), imgS: () => shinySprite(425), research: [
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
				id: 38, natiId: 426, name: "Drifblim", img: () => baseSprite(426), imgS: () => shinySprite(426), research: [
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
				id: 39, natiId: 401, name: "Kricketot", img: () => baseSprite(401), imgS: () => shinySprite(401), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(401), imgS: () => shinySprite(401), },
					{ name: "Female", img: () => baseSprite("401-f"), imgS: () => shinySprite("401-f"), }
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
				id: 40, natiId: 402, name: "Kricketune", img: () => baseSprite(402), imgS: () => shinySprite(402), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(402), imgS: () => shinySprite(402), },
					{ name: "Female", img: () => baseSprite("402-f"), imgS: () => shinySprite("402-f"), }
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
				id: 41, natiId: 418, name: "Buizel", img: () => baseSprite(418), imgS: () => shinySprite(418), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(418), imgS: () => shinySprite(418), },
					{ name: "Female", img: () => baseSprite("418-f"), imgS: () => shinySprite("418-f"), }
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
				id: 42, natiId: 419, name: "Floatzel", img: () => baseSprite(419), imgS: () => shinySprite(419), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(419), imgS: () => shinySprite(419), },
					{ name: "Female", img: () => baseSprite("419-f"), imgS: () => shinySprite("419-f"), }
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
				id: 43, natiId: 412, name: "Burmy", img: () => baseSprite(412), imgS: () => shinySprite(412), maxStatus: "shiny", tags: ["other"], forms: [
					{ name: "Plant Cloak", img: () => baseSprite(412), imgS: () => shinySprite(412), maxStatus: "shiny", },
					{ name: "Sandy Cloak", img: () => baseSprite("412-s"), imgS: () => shinySprite("412-s"), maxStatus: "shiny", },
					{ name: "Trash Cloak", img: () => baseSprite("412-t"), imgS: () => shinySprite("412-t"), maxStatus: "shiny", }
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
				id: 44, natiId: 413, name: "Wormadam", img: () => baseSprite(413), imgS: () => shinySprite(413), maxStatus: "shiny", tags: ["other"], forms: [
					{ name: "Plant Cloak", img: () => baseSprite(413), imgS: () => shinySprite(413), maxStatus: "shiny", },
					{ name: "Sandy Cloak", img: () => baseSprite("413-s"), imgS: () => shinySprite("413-s"), maxStatus: "shiny", },
					{ name: "Trash Cloak", img: () => baseSprite("413-t"), imgS: () => shinySprite("413-t"), maxStatus: "shiny", }
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
				id: 45, natiId: 414, name: "Mothim", img: () => baseSprite(414), imgS: () => shinySprite(414), maxStatus: "shiny", research: [
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
				id: 46, natiId: 74, name: "Geodude", img: () => baseSprite(74), imgS: () => shinySprite(74), research: [
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
				id: 47, natiId: 75, name: "Graveler", img: () => baseSprite(75), imgS: () => shinySprite(75), research: [
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
				id: 48, natiId: 76, name: "Golem", img: () => baseSprite(76), imgS: () => shinySprite(76), research: [
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
				id: 49, natiId: 234, name: "Stantler", img: () => baseSprite(234), imgS: () => shinySprite(234), research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Psyshield Bash", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 50, natiId: 899, name: "Wyrdeer", img: () => baseSprite(899), imgS: () => shinySprite(899), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Psyshield Bash", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Extrasensory", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },]
			},
			{
				id: 51, natiId: 446, name: "Munchlax", img: () => baseSprite(446), imgS: () => shinySprite(446), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Rest", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 5, 10, 15, 20] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 52, natiId: 143, name: "Snorlax", img: () => baseSprite(143), imgS: () => shinySprite(143), research: [
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
				id: 53, natiId: 46, name: "Paras", img: () => baseSprite(46), imgS: () => shinySprite(46), research: [
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
				id: 54, natiId: 47, name: "Parasect", img: () => baseSprite(47), imgS: () => shinySprite(47), research: [
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
				id: 55, natiId: 172, name: "Pichu", img: () => baseSprite(172), imgS: () => shinySprite(172), research: [
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
				id: 56, natiId: 25, name: "Pikachu", img: () => baseSprite(25), imgS: () => shinySprite(25), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(25), imgS: () => shinySprite(25), },
					{ name: "Female", img: () => baseSprite("025-f"), imgS: () => shinySprite("025-f"), },
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
				id: 57, natiId: 26, name: "Raichu", img: () => baseSprite(26), imgS: () => shinySprite(26), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(26), imgS: () => shinySprite(26), },
					{ name: "Female", img: () => baseSprite("026-f"), imgS: () => shinySprite("026-f"), },
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
				id: 58, natiId: 63, name: "Abra", img: () => baseSprite(63), imgS: () => shinySprite(63), research: [
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
				id: 59, natiId: 64, name: "Kadabra", img: () => baseSprite(64), imgS: () => shinySprite(64), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(64), imgS: () => shinySprite(64), },
					{ name: "Female", img: () => baseSprite("064-f"), imgS: () => shinySprite("064-f"), }
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
				id: 60, natiId: 65, name: "Alakazam", img: () => baseSprite(65), imgS: () => shinySprite(65), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(65), imgS: () => shinySprite(65), },
					{ name: "Female", img: () => baseSprite("065-f"), imgS: () => shinySprite("065-f"), },
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
				id: 61, natiId: 390, name: "Chimchar", img: () => baseSprite(390), imgS: () => shinySprite(390), tags: ["starter"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Ember", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 62, natiId: 391, name: "Monferno", img: () => baseSprite(391), imgS: () => shinySprite(391), tags: ["starter"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Flame Wheel", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Flamethrower", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 63, natiId: 392, name: "Infernape", img: () => baseSprite(392), imgS: () => shinySprite(392), tags: ["starter"], research: [
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
				id: 64, natiId: 427, name: "Buneary", img: () => baseSprite(427), imgS: () => shinySprite(427), research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 5, 10, 20] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 65, natiId: 428, name: "Lopunny", img: () => baseSprite(428), imgS: () => shinySprite(428), research: [
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
				id: 66, natiId: 420, name: "Cherubi", img: () => baseSprite(420), imgS: () => shinySprite(420), maxStatus: "shiny", research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 5, 10] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Absorb", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Number you've seen leap out of trees", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 67, natiId: 421, name: "Cherrim", img: () => baseSprite(421), imgS: () => shinySprite(421), maxStatus: "shiny", tags: ["other"], forms: [
					{ name: "Overcast", img: () => baseSprite(421), imgS: () => shinySprite(421), maxStatus: "shiny", },
					{ name: "Sunshine", img: () => baseSprite("421-s"), imgS: () => shinySprite("421-s"), maxStatus: "shiny", }
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
				id: 68, natiId: 54, name: "Psyduck", img: () => baseSprite(54), imgS: () => shinySprite(54), research: [
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
				id: 69, natiId: 55, name: "Golduck", img: () => baseSprite(55), imgS: () => shinySprite(55), research: [
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
				id: 70, natiId: 415, name: "Combee", img: () => baseSprite(415), imgS: () => shinySprite(415), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(415), imgS: () => shinySprite(415), },
					{ name: "Female", img: () => baseSprite("415-f"), imgS: () => shinySprite("415-f"), }
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
				id: 71, natiId: 416, name: "Vespiquen", img: () => baseSprite(416), imgS: () => shinySprite(416), research: [
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
				id: 72, natiId: 123, name: "Scyther", img: () => baseSprite(123), imgS: () => shinySprite(123), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(123), imgS: () => shinySprite(123), },
					{ name: "Female", img: () => baseSprite("123-f"), imgS: () => shinySprite("123-f"), }
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
				id: 73, natiId: 900, name: "Kleavor", img: () => baseSprite(900), imgS: () => shinySprite(900), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Stone Axe", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use X-Scissor", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },]
			},
			{
				id: 74, natiId: 212, name: "Scizor", img: () => baseSprite(212), imgS: () => shinySprite(212), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(212), imgS: () => shinySprite(212), },
					{ name: "Female", img: () => baseSprite("212-f"), imgS: () => shinySprite("212-f"), },
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
				id: 75, natiId: 214, name: "Heracross", img: () => baseSprite(214), imgS: () => shinySprite(214), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(214), imgS: () => shinySprite(214), },
					{ name: "Female", img: () => baseSprite("214-f"), imgS: () => shinySprite("214-f"), },
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
				id: 76, natiId: 439, name: "Mime Jr.", img: () => baseSprite(439), imgS: () => shinySprite(439), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Mimic", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 77, natiId: 122, name: "Mr. Mime", img: () => baseSprite(122), imgS: () => shinySprite(122), research: [
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
				id: 78, natiId: 190, name: "Aipom", img: () => baseSprite(190), imgS: () => shinySprite(190), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(190), imgS: () => shinySprite(190), },
					{ name: "Female", img: () => baseSprite("190-f"), imgS: () => shinySprite("190-f"), }
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
				id: 79, natiId: 424, name: "Ambipom", img: () => baseSprite(424), imgS: () => shinySprite(424), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(424), imgS: () => shinySprite(424), },
					{ name: "Female", img: () => baseSprite("424-f"), imgS: () => shinySprite("424-f"), }
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
				id: 80, natiId: 129, name: "Magikarp", img: () => baseSprite(129), imgS: () => shinySprite(129), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(129), imgS: () => shinySprite(129), },
					{ name: "Female", img: () => baseSprite("129-f"), imgS: () => shinySprite("129-f"), }
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
				id: 81, natiId: 130, name: "Gyarados", img: () => baseSprite(130), imgS: () => shinySprite(130), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(130), imgS: () => shinySprite(130), },
					{ name: "Female", img: () => baseSprite("130-f"), imgS: () => shinySprite("130-f"), },
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
				id: 82, natiId: 422, name: "Shellos", img: () => baseSprite(422), imgS: () => shinySprite(422), tags: ["other"], forms: [
					{ name: "West Sea", img: () => baseSprite(422), imgS: () => shinySprite(422), },
					{ name: "East Sea", img: () => baseSprite("422-e"), imgS: () => shinySprite("422-e"), },
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
				id: 83, natiId: 423, name: "Gastrodon", img: () => baseSprite(423), imgS: () => shinySprite(423), tags: ["other"], forms: [
					{ name: "West Sea", img: () => baseSprite(423), imgS: () => shinySprite(423), },
					{ name: "East Sea", img: () => baseSprite("423-e"), imgS: () => shinySprite("423-e"), },
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
				id: 84, name: "Qwilfish", img: () => baseSprite("211-h"), imgS: () => shinySprite("211-h"), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Times you have seen it use Barb Barrage", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 85, natiId: 904, name: "Overqwil", img: () => baseSprite(904), imgS: () => shinySprite(904), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Barb Barrage", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Dark Pulse", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },]
			},
			{
				id: 86, natiId: 440, name: "Happiny", img: () => baseSprite(440), imgS: () => shinySprite(440), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Baby-Doll Eyes", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 87, natiId: 113, name: "Chansey", img: () => baseSprite(113), imgS: () => shinySprite(113), research: [
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
				id: 88, natiId: 242, name: "Blissey", img: () => baseSprite(242), imgS: () => shinySprite(242), research: [
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
				id: 89, natiId: 406, name: "Budew", img: () => baseSprite(406), imgS: () => shinySprite(406), research: [
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
				id: 90, natiId: 315, name: "Roselia", img: () => baseSprite(315), imgS: () => shinySprite(315), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(315), imgS: () => shinySprite(315), },
					{ name: "Female", img: () => baseSprite("315-f"), imgS: () => shinySprite("315-f"), }
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
				id: 91, natiId: 407, name: "Roserade", img: () => baseSprite(407), imgS: () => shinySprite(407), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(407), imgS: () => shinySprite(407), },
					{ name: "Female", img: () => baseSprite("407-f"), imgS: () => shinySprite("407-f"), }
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
				id: 92, natiId: 455, name: "Carnivine", img: () => baseSprite(455), imgS: () => shinySprite(455), research: [
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
				id: 93, natiId: 548, name: "Petilil", img: () => baseSprite(548), imgS: () => shinySprite(548), research: [
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
				id: 94, name: "Lilligant", img: () => baseSprite("549-h"), imgS: () => shinySprite("549-h"), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Petal Dance", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Victory Dance", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 95, natiId: 114, name: "Tangela", img: () => baseSprite(114), imgS: () => shinySprite(114), research: [
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
				id: 96, natiId: 465, name: "Tangrowth", img: () => baseSprite(465), imgS: () => shinySprite(465), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(465), imgS: () => shinySprite(465), },
					{ name: "Female", img: () => baseSprite("465-f"), imgS: () => shinySprite("465-f"), }
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
				id: 97, natiId: 339, name: "Barboach", img: () => baseSprite(339), imgS: () => shinySprite(339), research: [
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
				id: 98, natiId: 340, name: "Whiscash", img: () => baseSprite(340), imgS: () => shinySprite(340), research: [
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
				id: 99, natiId: 453, name: "Croagunk", img: () => baseSprite(453), imgS: () => shinySprite(453), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(453), imgS: () => shinySprite(453), },
					{ name: "Female", img: () => baseSprite("453-f"), imgS: () => shinySprite("453-f"), }
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
				id: 100, natiId: 454, name: "Toxicroak", img: () => baseSprite(454), imgS: () => shinySprite(454), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(454), imgS: () => shinySprite(454), },
					{ name: "Female", img: () => baseSprite("454-f"), imgS: () => shinySprite("454-f"), }
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
				id: 101, natiId: 280, name: "Ralts", img: () => baseSprite(280), imgS: () => shinySprite(280), research: [
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
				id: 102, natiId: 281, name: "Kirlia", img: () => baseSprite(281), imgS: () => shinySprite(281), research: [
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
				id: 103, natiId: 282, name: "Gardevoir", img: () => baseSprite(282), imgS: () => shinySprite(282), research: [
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
				id: 104, natiId: 475, name: "Gallade", img: () => baseSprite(475), imgS: () => shinySprite(475), research: [
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
				id: 105, natiId: 193, name: "Yanma", img: () => baseSprite(193), imgS: () => shinySprite(193), research: [
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
				id: 106, natiId: 469, name: "Yanmega", img: () => baseSprite(469), imgS: () => shinySprite(469), research: [
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
				id: 107, natiId: 449, name: "Hippopotas", img: () => baseSprite(449), imgS: () => shinySprite(449), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(449), imgS: () => shinySprite(449), },
					{ name: "Female", img: () => baseSprite("449-f"), imgS: () => shinySprite("449-f"), }
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
				id: 108, natiId: 450, name: "Hippowdon", img: () => baseSprite(450), imgS: () => shinySprite(450), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(450), imgS: () => shinySprite(450), },
					{ name: "Female", img: () => baseSprite("450-f"), imgS: () => shinySprite("450-f"), }
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
				id: 109, natiId: 417, name: "Pachirisu", img: () => baseSprite(417), imgS: () => shinySprite(417), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(417), imgS: () => shinySprite(417), },
					{ name: "Female", img: () => baseSprite("417-f"), imgS: () => shinySprite("417-f"), }
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
				id: 110, natiId: 434, name: "Stunky", img: () => baseSprite(434), imgS: () => shinySprite(434), research: [
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
				id: 111, natiId: 435, name: "Skuntank", img: () => baseSprite(435), imgS: () => shinySprite(435), research: [
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
				id: 112, natiId: 216, name: "Teddiursa", img: () => baseSprite(216), imgS: () => shinySprite(216), research: [
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
				id: 113, natiId: 217, name: "Ursaring", img: () => baseSprite(217), imgS: () => shinySprite(217), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(217), imgS: () => shinySprite(217), },
					{ name: "Female", img: () => baseSprite("217-f"), imgS: () => shinySprite("217-f"), }
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
				id: 114, natiId: 901, name: "Ursaluna", img: () => baseSprite(901), imgS: () => shinySprite(901), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Headlong Rush", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },]
			},
			{
				id: 115, natiId: 704, name: "Goomy", img: () => baseSprite(704), imgS: () => shinySprite(704), tags: ["pseudo"], research: [
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
				id: 116, name: "Sliggoo", img: () => baseSprite("705-h"), imgS: () => shinySprite("705-h"), tags: ["pseudo"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Ground-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Water Pulse", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Iron Head", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 117, name: "Goodra", img: () => baseSprite("706-h"), imgS: () => shinySprite("706-h"), tags: ["pseudo"], research: [
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
				id: 118, natiId: 95, name: "Onix", img: () => baseSprite(95), imgS: () => shinySprite(95), research: [
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
				id: 119, natiId: 208, name: "Steelix", img: () => baseSprite(208), imgS: () => shinySprite(208), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(208), imgS: () => shinySprite(208), },
					{ name: "Female", img: () => baseSprite("208-f"), imgS: () => shinySprite("208-f"), },
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
				id: 120, natiId: 111, name: "Rhyhorn", img: () => baseSprite(111), imgS: () => shinySprite(111), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(111), imgS: () => shinySprite(111), },
					{ name: "Female", img: () => baseSprite("111-f"), imgS: () => shinySprite("111-f"), }
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
				id: 121, natiId: 112, name: "Rhydon", img: () => baseSprite(112), imgS: () => shinySprite(112), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(112), imgS: () => shinySprite(112), },
					{ name: "Female", img: () => baseSprite("112-f"), imgS: () => shinySprite("112-f"), }
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
				id: 122, natiId: 464, name: "Rhyperior", img: () => baseSprite(464), imgS: () => shinySprite(464), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(464), imgS: () => shinySprite(464), },
					{ name: "Female", img: () => baseSprite("464-f"), imgS: () => shinySprite("464-f"), }
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
				id: 123, natiId: 438, name: "Bonsly", img: () => baseSprite(438), imgS: () => shinySprite(438), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Mimic", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've seen leap out of ore deposits", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 124, natiId: 185, name: "Sudowoodo", img: () => baseSprite(185), imgS: () => shinySprite(185), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(185), imgS: () => shinySprite(185), },
					{ name: "Female", img: () => baseSprite("185-f"), imgS: () => shinySprite("185-f"), }
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
				id: 125, natiId: 108, name: "Lickitung", img: () => baseSprite(108), imgS: () => shinySprite(108), research: [
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
				id: 126, natiId: 463, name: "Lickilicky", img: () => baseSprite(463), imgS: () => shinySprite(463), research: [
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
				id: 127, natiId: 175, name: "Togepi", img: () => baseSprite(175), imgS: () => shinySprite(175), maxStatus: "shiny", research: [
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
				id: 128, natiId: 176, name: "Togetic", img: () => baseSprite(176), imgS: () => shinySprite(176), maxStatus: "shiny", research: [
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
				id: 129, natiId: 468, name: "Togekiss", img: () => baseSprite(468), imgS: () => shinySprite(468), maxStatus: "shiny", research: [
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
				id: 130, natiId: 387, name: "Turtwig", img: () => baseSprite(387), imgS: () => shinySprite(387), tags: ["starter"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Leafage", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 131, natiId: 388, name: "Grotle", img: () => baseSprite(388), imgS: () => shinySprite(388), tags: ["starter"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Bite", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Leaf Blade", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 132, natiId: 389, name: "Torterra", img: () => baseSprite(389), imgS: () => shinySprite(389), tags: ["starter"], research: [
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
				id: 133, natiId: 137, name: "Porygon", img: () => baseSprite(137), imgS: () => shinySprite(137), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Tackle", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Times you have seen it use Tri Attack", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 134, natiId: 233, name: "Porygon2", img: () => baseSprite(233), imgS: () => shinySprite(233), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Thunderbolt", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Recover", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 135, natiId: 474, name: "Porygon-Z", img: () => baseSprite(474), imgS: () => shinySprite(474), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Thunderbolt", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Recover", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Hyper Beam", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 136, natiId: 92, name: "Gastly", img: () => baseSprite(92), imgS: () => shinySprite(92), research: [
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
				id: 137, natiId: 93, name: "Haunter", img: () => baseSprite(93), imgS: () => shinySprite(93), research: [
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
				id: 138, natiId: 94, name: "Gengar", img: () => baseSprite(94), imgS: () => shinySprite(94), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Hypnosis", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Shadow Ball", tiers: [1, 3, 10, 30, 70] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 139, natiId: 442, name: "Spiritomb", img: () => baseSprite(442), imgS: () => shinySprite(442), research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: true, text: "Times you have seen it use Hex", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Dark Pulse", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 140, natiId: 198, name: "Murkrow", img: () => baseSprite(198), imgS: () => shinySprite(198), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(198), imgS: () => shinySprite(198), },
					{ name: "Female", img: () => baseSprite("198-f"), imgS: () => shinySprite("198-f"), }
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
				id: 141, natiId: 430, name: "Honchkrow", img: () => baseSprite(430), imgS: () => shinySprite(430), research: [
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
				id: 142, natiId: 201, name: "Unown", img: () => baseSprite(201), imgS: () => shinySprite(201), maxStatus: "shiny", tags: ["other"], forms: [
					{ name: "A", img: () => baseSprite("201-a"), imgS: () => shinySprite("201-a"), maxStatus: "shiny", },
					{ name: "B", img: () => baseSprite("201-b"), imgS: () => shinySprite("201-b"), maxStatus: "shiny", },
					{ name: "C", img: () => baseSprite("201-c"), imgS: () => shinySprite("201-c"), maxStatus: "shiny", },
					{ name: "D", img: () => baseSprite("201-d"), imgS: () => shinySprite("201-d"), maxStatus: "shiny", },
					{ name: "E", img: () => baseSprite("201-e"), imgS: () => shinySprite("201-e"), maxStatus: "shiny", },
					{ name: "F", img: () => baseSprite("201-f"), imgS: () => shinySprite("201-f"), maxStatus: "shiny", },
					{ name: "G", img: () => baseSprite("201-g"), imgS: () => shinySprite("201-g"), maxStatus: "shiny", },
					{ name: "H", img: () => baseSprite("201-h"), imgS: () => shinySprite("201-h"), maxStatus: "shiny", },
					{ name: "I", img: () => baseSprite("201-i"), imgS: () => shinySprite("201-i"), maxStatus: "shiny", },
					{ name: "J", img: () => baseSprite("201-j"), imgS: () => shinySprite("201-j"), maxStatus: "shiny", },
					{ name: "K", img: () => baseSprite("201-k"), imgS: () => shinySprite("201-k"), maxStatus: "shiny", },
					{ name: "L", img: () => baseSprite("201-l"), imgS: () => shinySprite("201-l"), maxStatus: "shiny", },
					{ name: "M", img: () => baseSprite("201-m"), imgS: () => shinySprite("201-m"), maxStatus: "shiny", },
					{ name: "N", img: () => baseSprite("201-n"), imgS: () => shinySprite("201-n"), maxStatus: "shiny", },
					{ name: "O", img: () => baseSprite("201-o"), imgS: () => shinySprite("201-o"), maxStatus: "shiny", },
					{ name: "P", img: () => baseSprite("201-p"), imgS: () => shinySprite("201-p"), maxStatus: "shiny", },
					{ name: "Q", img: () => baseSprite("201-q"), imgS: () => shinySprite("201-q"), maxStatus: "shiny", },
					{ name: "R", img: () => baseSprite("201-r"), imgS: () => shinySprite("201-r"), maxStatus: "shiny", },
					{ name: "S", img: () => baseSprite("201-s"), imgS: () => shinySprite("201-s"), maxStatus: "shiny", },
					{ name: "T", img: () => baseSprite("201-t"), imgS: () => shinySprite("201-t"), maxStatus: "shiny", },
					{ name: "U", img: () => baseSprite("201-u"), imgS: () => shinySprite("201-u"), maxStatus: "shiny", },
					{ name: "V", img: () => baseSprite("201-v"), imgS: () => shinySprite("201-v"), maxStatus: "shiny", },
					{ name: "W", img: () => baseSprite("201-w"), imgS: () => shinySprite("201-w"), maxStatus: "shiny", },
					{ name: "X", img: () => baseSprite("201-x"), imgS: () => shinySprite("201-x"), maxStatus: "shiny", },
					{ name: "Y", img: () => baseSprite("201-y"), imgS: () => shinySprite("201-y"), maxStatus: "shiny", },
					{ name: "Z", img: () => baseSprite("201-z"), imgS: () => shinySprite("201-z"), maxStatus: "shiny", },
					{ name: "!", img: () => baseSprite("201-em"), imgS: () => shinySprite("201-em"), maxStatus: "shiny", },
					{ name: "?", img: () => baseSprite("201-qm"), imgS: () => shinySprite("201-qm"), maxStatus: "shiny", },
				],
				research: [{ boost: true, text: "Number of different forms you've obtained", tiers: [1, 5, 10, 15, 28] },
				],
			},
			{
				id: 143, natiId: 363, name: "Spheal", img: () => baseSprite(363), imgS: () => shinySprite(363), research: [
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
				id: 144, natiId: 364, name: "Sealeo", img: () => baseSprite(364), imgS: () => shinySprite(364), research: [
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
				id: 145, natiId: 365, name: "Walrein", img: () => baseSprite(365), imgS: () => shinySprite(365), research: [
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
				id: 146, natiId: 223, name: "Remoraid", img: () => baseSprite(223), imgS: () => shinySprite(223), research: [
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
				id: 147, natiId: 224, name: "Octillery", img: () => baseSprite(224), imgS: () => shinySprite(224), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(224), imgS: () => shinySprite(224), },
					{ name: "Female", img: () => baseSprite("224-f"), imgS: () => shinySprite("224-f"), }
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
				id: 148, natiId: 451, name: "Skorupi", img: () => baseSprite(451), imgS: () => shinySprite(451), research: [
					{ boost: true, text: "Number caught", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Number of small specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: false, text: "Number defeated", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number of you've defeated with Fire-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Poison Sting", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 149, natiId: 452, name: "Drapion", img: () => baseSprite(452), imgS: () => shinySprite(452), research: [
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
				id: 150, name: "Growlithe", img: () => baseSprite("058-h"), imgS: () => shinySprite("058-h"), research: [
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
				id: 151, name: "Arcanine", img: () => baseSprite("059-h"), imgS: () => shinySprite("059-h"), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Rock Slide", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Raging Fury", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Flare Blitz", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
				],
			},
			{
				id: 152, natiId: 431, name: "Glameow", img: () => baseSprite(431), imgS: () => shinySprite(431), research: [
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
				id: 153, natiId: 432, name: "Purugly", img: () => baseSprite(432), imgS: () => shinySprite(432), research: [
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
				id: 154, natiId: 66, name: "Machop", img: () => baseSprite(66), imgS: () => shinySprite(66), research: [
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
				id: 155, natiId: 67, name: "Machoke", img: () => baseSprite(67), imgS: () => shinySprite(67), research: [
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
				id: 156, natiId: 68, name: "Machamp", img: () => baseSprite(68), imgS: () => shinySprite(68), research: [
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
				id: 157, natiId: 441, name: "Chatot", img: () => baseSprite(441), imgS: () => shinySprite(441), research: [
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
				id: 158, natiId: 355, name: "Duskull", img: () => baseSprite(355), imgS: () => shinySprite(355), research: [
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
				id: 159, natiId: 356, name: "Dusclops", img: () => baseSprite(356), imgS: () => shinySprite(356), research: [
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
				id: 160, natiId: 477, name: "Dusknoir", img: () => baseSprite(477), imgS: () => shinySprite(477), research: [
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
				id: 161, natiId: 393, name: "Piplup", img: () => baseSprite(393), imgS: () => shinySprite(393), tags: ["starter"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Bubble", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 162, natiId: 394, name: "Prinplup", img: () => baseSprite(394), imgS: () => shinySprite(394), tags: ["starter"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Water Pulse", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Roost", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 163, natiId: 395, name: "Empoleon", img: () => baseSprite(395), imgS: () => shinySprite(395), tags: ["starter"], research: [
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
				id: 164, natiId: 458, name: "Mantyke", img: () => baseSprite(458), imgS: () => shinySprite(458), maxStatus: "shiny", research: [
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
				id: 165, natiId: 226, name: "Mantine", img: () => baseSprite(226), imgS: () => shinySprite(226), maxStatus: "shiny", research: [
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
				id: 166, name: "Basculin", img: () => baseSprite("550-w"), imgS: () => shinySprite("550-w"), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 3, 5, 7] },
					{ boost: true, text: "Times you have seen it use Wave Crash", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 167, natiId: 902, name: "Basculegion", img: () => baseSprite(902), imgS: () => shinySprite(902), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(902), imgS: () => shinySprite(902), },
					{ name: "Female", img: () => baseSprite("902-f"), imgS: () => shinySprite("902-f"), }
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Wave Crash", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Shadow Ball", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },]
			},
			{
				id: 168, natiId: 37, name: "Vulpix", img: () => baseSprite(37), imgS: () => shinySprite(37), forms: [
					{ name: "Kantonian", img: () => baseSprite(37), imgS: () => shinySprite(37), },
					{ name: "Alolan", img: () => baseSprite("037-a"), imgS: () => shinySprite("037-a"), tags: ["alolan"], }
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
				id: 169, natiId: 38, name: "Ninetales", img: () => baseSprite(38), imgS: () => shinySprite(38), forms: [
					{ name: "Kantonian", img: () => baseSprite(38), imgS: () => shinySprite(38), },
					{ name: "Alolan", img: () => baseSprite("038-a"), imgS: () => shinySprite("038-a"), tags: ["alolan"], }
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
				id: 170, natiId: 72, name: "Tentacool", img: () => baseSprite(72), imgS: () => shinySprite(72), research: [
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
				id: 171, natiId: 73, name: "Tentacruel", img: () => baseSprite(73), imgS: () => shinySprite(73), research: [
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
				id: 172, natiId: 456, name: "Finneon", img: () => baseSprite(456), imgS: () => shinySprite(456), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(456), imgS: () => shinySprite(456), },
					{ name: "Female", img: () => baseSprite("456-f"), imgS: () => shinySprite("456-f"), }
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
				id: 173, natiId: 457, name: "Lumineon", img: () => baseSprite(457), imgS: () => shinySprite(457), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(457), imgS: () => shinySprite(457), },
					{ name: "Female", img: () => baseSprite("457-f"), imgS: () => shinySprite("457-f"), }
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
				id: 174, natiId: 240, name: "Magby", img: () => baseSprite(240), imgS: () => shinySprite(240), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Flame Wheel", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 175, natiId: 126, name: "Magmar", img: () => baseSprite(126), imgS: () => shinySprite(126), research: [
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
				id: 176, natiId: 467, name: "Magmortar", img: () => baseSprite(467), imgS: () => shinySprite(467), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Fire Punch", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Flamethrower", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Fire Blast", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 177, natiId: 81, name: "Magnemite", img: () => baseSprite(81), imgS: () => shinySprite(81), research: [
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
				id: 178, natiId: 82, name: "Magneton", img: () => baseSprite(82), imgS: () => shinySprite(82), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Spark", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Tri Attack", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 179, natiId: 462, name: "Magnezone", img: () => baseSprite(462), imgS: () => shinySprite(462), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've caught while they were in the air", tiers: [1, 2, 3] },
					{ boost: false, text: "Times you have seen it use Flash Cannon", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Thunderbolt", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 180, natiId: 436, name: "Bronzor", img: () => baseSprite(436), imgS: () => shinySprite(436), research: [
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
				id: 181, natiId: 437, name: "Bronzong", img: () => baseSprite(437), imgS: () => shinySprite(437), research: [
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
				id: 182, natiId: 239, name: "Elekid", img: () => baseSprite(239), imgS: () => shinySprite(239), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Number you've caught without being spotted", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number you've caught while they were sleeping", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Spark", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1, 2, 3] },
				],
			},
			{
				id: 183, natiId: 125, name: "Electabuzz", img: () => baseSprite(125), imgS: () => shinySprite(125), research: [
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
				id: 184, natiId: 466, name: "Electivire", img: () => baseSprite(466), imgS: () => shinySprite(466), research: [
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
				id: 185, natiId: 207, name: "Gligar", img: () => baseSprite(207), imgS: () => shinySprite(207), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(207), imgS: () => shinySprite(207), },
					{ name: "Female", img: () => baseSprite("207-f"), imgS: () => shinySprite("207-f"), }
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
				id: 186, natiId: 472, name: "Gliscor", img: () => baseSprite(472), imgS: () => shinySprite(472), research: [
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
				id: 187, natiId: 443, name: "Gible", img: () => baseSprite(443), imgS: () => shinySprite(443), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: () => baseSprite(443), imgS: () => shinySprite(443), },
					{ name: "Female", img: () => baseSprite("443-f"), imgS: () => shinySprite("443-f"), }
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
				id: 188, natiId: 444, name: "Gabite", img: () => baseSprite(444), imgS: () => shinySprite(444), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: () => baseSprite(444), imgS: () => shinySprite(444), },
					{ name: "Female", img: () => baseSprite("444-f"), imgS: () => shinySprite("444-f"), }
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
				id: 189, natiId: 445, name: "Garchomp", img: () => baseSprite(445), imgS: () => shinySprite(445), tags: ["gender", "pseudo"], forms: [
					{ name: "Male", img: () => baseSprite(445), imgS: () => shinySprite(445), },
					{ name: "Female", img: () => baseSprite("445-f"), imgS: () => shinySprite("445-f"), },
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
				id: 190, natiId: 299, name: "Nosepass", img: () => baseSprite(299), imgS: () => shinySprite(299), research: [
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
				id: 191, natiId: 476, name: "Probopass", img: () => baseSprite(476), imgS: () => shinySprite(476), research: [
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
				id: 192, name: "Voltorb", img: () => baseSprite("100-h"), imgS: () => shinySprite("100-h"), research: [
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
				id: 193, name: "Electrode", img: () => baseSprite("101-h"), imgS: () => shinySprite("101-h"), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Thunder", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Chloroblast", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Self-Destruct", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 194, natiId: 479, name: "Rotom", img: () => baseSprite(479), imgS: () => shinySprite(479), tags: ["other"], forms: [
					{ name: "Normal", img: () => baseSprite(479), imgS: () => shinySprite(479), },
					{ name: "Fan", img: () => baseSprite("479-fa"), imgS: () => shinySprite("479-fa"), },
					{ name: "Frost", img: () => baseSprite("479-fr"), imgS: () => shinySprite("479-fr"), },
					{ name: "Heat", img: () => baseSprite("479-h"), imgS: () => shinySprite("479-h"), },
					{ name: "Mow", img: () => baseSprite("479-m"), imgS: () => shinySprite("479-m"), },
					{ name: "Wash", img: () => baseSprite("479-w"), imgS: () => shinySprite("479-w"), }
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
				id: 195, natiId: 433, name: "Chingling", img: () => baseSprite(433), imgS: () => shinySprite(433), research: [
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
				id: 196, natiId: 358, name: "Chimecho", img: () => baseSprite(358), imgS: () => shinySprite(358), research: [
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
				id: 197, natiId: 200, name: "Misdreavus", img: () => baseSprite(200), imgS: () => shinySprite(200), research: [
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
				id: 198, natiId: 429, name: "Mismagius", img: () => baseSprite(429), imgS: () => shinySprite(429), research: [
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
				id: 199, natiId: 173, name: "Cleffa", img: () => baseSprite(173), imgS: () => shinySprite(173), research: [
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
				id: 200, natiId: 35, name: "Clefairy", img: () => baseSprite(35), imgS: () => shinySprite(35), research: [
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
				id: 201, natiId: 36, name: "Clefable", img: () => baseSprite(36), imgS: () => shinySprite(36), research: [
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
				id: 202, name: "Sneasel", img: () => baseSprite("215-h"), imgS: () => shinySprite("215-h"), tags: ["gender"], forms: [
					{ name: "Johtonian Male", img: () => baseSprite(215), imgS: () => shinySprite(215), },
					{ name: "Johtonian Female", img: () => baseSprite("215-f"), imgS: () => shinySprite("215-f"), },
					{ name: "Hisuian Male", img: () => baseSprite("215-h"), imgS: () => shinySprite("215-h"), tags: ["hisuian"], },
					{ name: "Hisuian Female", img: () => baseSprite("215-h-f"), imgS: () => shinySprite("215-h-f"), tags: ["hisuian"], }
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
				id: 203, natiId: 903, name: "Sneasler", img: () => baseSprite(903), imgS: () => shinySprite(903), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Dire Claw", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Swords Dance", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },]
			},
			{
				id: 204, natiId: 461, name: "Weavile", img: () => baseSprite(461), imgS: () => shinySprite(461), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(461), imgS: () => shinySprite(461), },
					{ name: "Female", img: () => baseSprite("461-f"), imgS: () => shinySprite("461-f"), }
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
				id: 205, natiId: 361, name: "Snorunt", img: () => baseSprite(361), imgS: () => shinySprite(361), research: [
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
				id: 206, natiId: 362, name: "Glalie", img: () => baseSprite(362), imgS: () => shinySprite(362), research: [
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
				id: 207, natiId: 478, name: "Froslass", img: () => baseSprite(478), imgS: () => shinySprite(478), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of alpha specimens caught", tiers: [1, 2, 3] },
					{ boost: false, text: "Number defeated", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Icicle Crash", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
				],
			},
			{
				id: 208, natiId: 408, name: "Cranidos", img: () => baseSprite(408), imgS: () => shinySprite(408), tags: ["fossil"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Number of large specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Ancient Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 209, natiId: 409, name: "Rampardos", img: () => baseSprite(409), imgS: () => shinySprite(409), tags: ["fossil"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Iron Head", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Double-Edge", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Head Smash", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 2, 4, 10, 15] },
				],
			},
			{
				id: 210, natiId: 410, name: "Shieldon", img: () => baseSprite(410), imgS: () => shinySprite(410), tags: ["fossil"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: true, text: "Number of heavy specimens caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you have seen it use Ancient Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 211, natiId: 411, name: "Bastiodon", img: () => baseSprite(411), imgS: () => shinySprite(411), tags: ["fossil"], research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Iron Defense", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Earth Power", tiers: [1, 3, 8, 20, 40] },
					{ boost: true, text: "Times you have seen it use Stealth Rock", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 2, 4, 10, 15] },
				],
			},
			{
				id: 212, natiId: 220, name: "Swinub", img: () => baseSprite(220), imgS: () => shinySprite(220), research: [
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
				id: 213, natiId: 221, name: "Piloswine", img: () => baseSprite(221), imgS: () => shinySprite(221), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(221), imgS: () => shinySprite(221), },
					{ name: "Female", img: () => baseSprite("221-f"), imgS: () => shinySprite("221-f"), }
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
				id: 214, natiId: 473, name: "Mamoswine", img: () => baseSprite(473), imgS: () => shinySprite(473), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(473), imgS: () => shinySprite(473), },
					{ name: "Female", img: () => baseSprite("473-f"), imgS: () => shinySprite("473-f"), }
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
				id: 215, natiId: 712, name: "Bergmite", img: () => baseSprite(712), imgS: () => shinySprite(712), research: [
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
				id: 216, name: "Avalugg", img: () => baseSprite("713-h"), imgS: () => shinySprite("713-h"), research: [
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
				id: 217, natiId: 459, name: "Snover", img: () => baseSprite(459), imgS: () => shinySprite(459), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(459), imgS: () => shinySprite(459), },
					{ name: "Female", img: () => baseSprite("459-f"), imgS: () => shinySprite("459-f"), }
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
				id: 218, natiId: 460, name: "Abomasnow", img: () => baseSprite(460), imgS: () => shinySprite(460), tags: ["gender"], forms: [
					{ name: "Male", img: () => baseSprite(460), imgS: () => shinySprite(460), },
					{ name: "Female", img: () => baseSprite("460-f"), imgS: () => shinySprite("460-f"), },
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
				id: 219, name: "Zorua", img: () => baseSprite("570-h"), imgS: () => shinySprite("570-h"), research: [
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
				id: 220, name: "Zoroark", img: () => baseSprite("571-h"), imgS: () => shinySprite("571-h"), research: [
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
				id: 221, natiId: 627, name: "Rufflet", img: () => baseSprite(627), imgS: () => shinySprite(627), research: [
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
				id: 222, name: "Braviary", img: () => baseSprite("628-h"), imgS: () => shinySprite("628-h"), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: true, text: "Number you've caught while they were in the air", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Esper Wing", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Brave Bird", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 223, natiId: 447, name: "Riolu", img: () => baseSprite(447), imgS: () => shinySprite(447), research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 4, 10, 15] },
					{ boost: false, text: "Number of you've defeated with Flying-type moves", tiers: [1, 2, 4, 6, 10] },
					{ boost: false, text: "Times you have seen it use Rock Smash", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've given it food", tiers: [1, 2, 3, 4, 5] },
					{ boost: false, text: "Times you've stunned it by using items", tiers: [1, 3, 5, 7, 10] },
					{ boost: true, text: "Number you've evolved", tiers: [1] },
				],
			},
			{
				id: 224, natiId: 448, name: "Lucario", img: () => baseSprite(448), imgS: () => shinySprite(448), research: [
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
				id: 225, natiId: 480, name: "Uxie", img: () => baseSprite(480), imgS: () => shinySprite(480), maxStatus: "shiny", tags: ["legendary"], research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Mystical Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Calm Mind", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 226, natiId: 481, name: "Mesprit", img: () => baseSprite(481), imgS: () => shinySprite(481), maxStatus: "shiny", tags: ["legendary"], research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Mystical Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Recover", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 227, natiId: 482, name: "Azelf", img: () => baseSprite(482), imgS: () => shinySprite(482), maxStatus: "shiny", tags: ["legendary"], research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Mystical Power", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Self-Destruct", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 10, 30, 70] },
				],
			},
			{
				id: 228, natiId: 485, name: "Heatran", img: () => baseSprite(485), imgS: () => shinySprite(485), maxStatus: "shiny", tags: ["legendary"], research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Fire Fang", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Magma Storm", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 229, natiId: 486, name: "Regigigas", img: () => baseSprite(486), imgS: () => shinySprite(486), maxStatus: "shiny", tags: ["legendary"], research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Iron Head", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Giga Impact", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use a strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 230, natiId: 488, name: "Cresselia", img: () => baseSprite(488), imgS: () => shinySprite(488), maxStatus: "shiny", tags: ["legendary"], research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: true, text: "Times you have seen it use Moonblast", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Lunar Blessing", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 231, natiId: 641, name: "Tornadus", img: () => baseSprite(641), imgS: () => shinySprite(641), maxStatus: "shiny", tags: ["other", "legendary"], forms: [
					{ name: "Incarnate", img: () => baseSprite(641), imgS: () => shinySprite(641), maxStatus: "shiny", tags: ["legendary"], },
					{ name: "Therian", img: () => baseSprite("641-t"), imgS: () => shinySprite("641-t"), maxStatus: "shiny", tags: ["legendary"], }
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
				id: 232, natiId: 642, name: "Thundurus", img: () => baseSprite(642), imgS: () => shinySprite(642), maxStatus: "shiny", tags: ["other", "legendary"], forms: [
					{ name: "Incarnate", img: () => baseSprite(642), imgS: () => shinySprite(642), maxStatus: "shiny", tags: ["legendary"], },
					{ name: "Therian", img: () => baseSprite("642-t"), imgS: () => shinySprite("642-t"), maxStatus: "shiny", tags: ["legendary"], }
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
				id: 233, natiId: 645, name: "Landorus", img: () => baseSprite(645), imgS: () => shinySprite(645), maxStatus: "shiny", tags: ["other", "legendary"], forms: [
					{ name: "Incarnate", img: () => baseSprite(645), imgS: () => shinySprite(645), maxStatus: "shiny", tags: ["legendary"], },
					{ name: "Therian", img: () => baseSprite("645-t"), imgS: () => shinySprite("645-t"), maxStatus: "shiny", tags: ["legendary"], }
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
				id: 234, natiId: 905, name: "Enamorus", img: () => baseSprite(905), imgS: () => shinySprite(905), maxStatus: "shiny", tags: ["other", "legendary"], forms: [
					{ name: "Incarnate", img: () => baseSprite(905), imgS: () => shinySprite(905), maxStatus: "shiny", tags: ["legendary"], },
					{ name: "Therian", img: () => baseSprite("905-t"), imgS: () => shinySprite("905-t"), maxStatus: "shiny", tags: ["legendary"], }
				],
				research: [
					{ boost: true, text: "Number caught", tiers: [1, 2, 3, 4, 5] },
					{ boost: true, text: "Times you have seen it use Extrasensory", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you have seen it use Springtide Storm", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an strong style move", tiers: [1, 3, 8, 20, 40] },
					{ boost: false, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },]
			},
			{
				id: 235, natiId: 483, name: "Dialga", img: () => baseSprite(483), imgS: () => shinySprite(483), maxStatus: "shiny", tags: ["other", "legendary"], forms: [
					{ name: "Altered", img: () => baseSprite(483), imgS: () => shinySprite(483), maxStatus: "shiny", tags: ["legendary"], },
					{ name: "Origin", img: () => baseSprite("483-o"), imgS: () => shinySprite("483-o"), maxStatus: "shiny", tags: ["legendary"], }
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
				id: 236, natiId: 484, name: "Palkia", img: () => baseSprite(484), imgS: () => shinySprite(484), maxStatus: "shiny", tags: ["other", "legendary"], forms: [
					{ name: "Altered", img: () => baseSprite(484), imgS: () => shinySprite(484), maxStatus: "shiny", tags: ["legendary"], },
					{ name: "Origin", img: () => baseSprite("484-o"), imgS: () => shinySprite("484-o"), maxStatus: "shiny", tags: ["legendary"], }
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
				id: 237, natiId: 487, name: "Giratina", img: () => baseSprite(487), imgS: () => shinySprite(487), maxStatus: "shiny", tags: ["other", "legendary"], forms: [
					{ name: "Altered", img: () => baseSprite(487), imgS: () => shinySprite(487), maxStatus: "shiny", tags: ["legendary"], },
					{ name: "Origin", img: () => baseSprite("487-o"), imgS: () => shinySprite("487-o"), maxStatus: "shiny", tags: ["legendary"], }
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
				id: 238, natiId: 493, name: "Arceus", img: () => baseSprite(493), imgS: () => shinySprite(493), maxStatus: "shiny", tags: ["legendary"], research: [
					{ boost: true, text: "Received a part of Arceus", tiers: [1] },
				],
			},
			{
				id: 239, natiId: 489, name: "Phione", img: () => baseSprite(489), imgS: () => shinySprite(489), maxStatus: "shiny", tags: ["legendary"], research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: true, text: "Times you have seen it use Water Pulse", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you have seen it use Zen Headbutt", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
				],
			},
			{
				id: 240, natiId: 490, name: "Manaphy", img: () => baseSprite(490), imgS: () => shinySprite(490), maxStatus: "shiny", tags: ["legendary"], research: [
					{ boost: true, text: "Number caught", tiers: [1] },
					{ boost: false, text: "Times you have seen it use Moonblast", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you have seen it use Take Heart", tiers: [1, 3, 6, 12, 25] },
					{ boost: false, text: "Times you've seen it use a strong style move", tiers: [1, 3, 6, 12, 25] },
					{ boost: true, text: "Times you've seen it use an agile style move", tiers: [1, 3, 8, 20, 40] },
				],
			},
			{
				id: 241, natiId: 492, name: "Shaymin", img: () => baseSprite(492), imgS: () => shinySprite(492), maxStatus: "shiny", tags: ["other", "mythical"], forms: [
					{ name: "Land", img: () => baseSprite(492), imgS: () => shinySprite(492), maxStatus: "shiny", mythical: true },
					{ name: "Sky", img: () => baseSprite("492-s"), imgS: () => shinySprite("492-s"), maxStatus: "shiny", mythical: true },
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
				id: 242, natiId: 491, name: "Darkrai", img: () => baseSprite(491), imgS: () => shinySprite(491), maxStatus: "shiny", tags: ["mythical"], research: [
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
