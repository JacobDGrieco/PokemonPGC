(() => {
	const GAME_KEYS = ["swordioa", "shieldioa"];

	// local wrapper (binds to helpers.js global)
	const fashionItem = (gameKey, gender, category, name) => _fashionItem(gameKey, gender, category, name);

	const CATEGORIES = [
		{ id: "hats", label: "Hats" },
		{ id: "tops", label: "Tops" },
		{ id: "jackets", label: "Jackets" },
		{ id: "dresses", label: "Dresses" },
		{ id: "bags", label: "Bags" },
		{ id: "gloves", label: "Gloves" },
		{ id: "bottoms", label: "Bottoms" },
		{ id: "legwear", label: "Legwear" },
		{ id: "shoes", label: "Shoes" }
	];

	// Fashion data authoring format:
	// - item.id stays a slug (e.g. "boater")
	// - item.forms[].id is numeric (e.g. 1), and helpers format it to "hats:boater:001"
	const ITEMS_BY_CATEGORY = {
		"hats": [
			{
				id: 1, name: "Bucket Hat", gender: "unisex", forms: [
					{ id: 1, name: "Blue IOA" },
					{ id: 2, name: "Green IOA" },
					{ id: 3, name: "Pink IOA" },
				]
			},
			{ id: 2, name: "Partner Cap", gender: "unisex", extraCredit: true },
			{ id: 3, name: "Replica Gold Crown", gender: "unisex" },
			{
				id: 4, name: "Sport Cap", gender: "unisex", forms: [
					{ id: 1, name: "Dynamax" },
					{ id: 2, name: "Stuff Cheeks" },
					{ id: 3, name: "W x F x G" },
				]
			},
		],
		"tops": [
			{
				id: 1, name: "Boatneck Sweatshirt", gender: "male", forms: [
					{ id: 1, name: "Bro" },
					{ id: 2, name: "Poke" },
				]
			},
			{ id: 1, name: "Boatneck Sweatshirt - Poke", gender: "female" },
			{
				id: 1, name: "Cable-Knit Sweater", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Gray" },
					{ id: 3, name: "Maroon" },
					{ id: 4, name: "Navy" },
					{ id: 5, name: "White" },
				]
			},
			{
				id: 1, name: "Casual Tee", gender: "unisex", forms: [
					{ id: 1, name: "7" },
					{ id: 2, name: "8" },
					{ id: 3, name: "9" },
					{ id: 4, name: "Auldlands Amble" },
					{ id: 5, name: "Avery/Klara 4-ever" },
					{ id: 6, name: "Cream" },
					{ id: 7, name: "Festive Feldlands" },
					{ id: 8, name: "Great Wave, Greater Dragon" },
					{ id: 9, name: "Middlelands March" },
					{ id: 10, name: "Penguin" },
					{ id: 11, name: "Ramblin' Rondelands" },
					{ id: 12, name: "The Masterly Mustard" },
					{ id: 13, name: "W x F x G" },
				]
			},
			{ id: 1, name: "Dojo Tee", gender: "unisex" },
			{
				id: 1, name: "Knit Sweater", gender: "male", forms: [
					{ id: 1, name: "Peaceful Pastures" },
					{ id: 2, name: "Rad Applin" },
					{ id: 3, name: "Tapping Feet" },
				]
			},
			{
				id: 3, name: "Vest and Tie Ensemble", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Gray" },
					{ id: 4, name: "Green" },
					{ id: 5, name: "Navy" },
					{ id: 6, name: "Orange" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Purple" },
					{ id: 9, name: "Red" },
					{ id: 10, name: "Tan" },
					{ id: 11, name: "White" },
					{ id: 12, name: "Yellow" },
				]
			},
		],
		"jackets": [
			{ id: 1, name: "Dojo Jacket", gender: "unisex" },
			{ id: 2, name: "Hoodie - W x F x G", gender: "unisex" },
			{
				id: 3, name: "Punk Vest", gender: "male", forms: [
					{ id: 1, name: "Faded Black" },
					{ id: 2, name: "Light Blue" },
					{ id: 3, name: "Red" },
				]
			},
			{
				id: 4, name: "Suit Jacket", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Gray" },
					{ id: 4, name: "Green" },
					{ id: 5, name: "Navy" },
					{ id: 6, name: "Orange" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Purple" },
					{ id: 9, name: "Red" },
					{ id: 10, name: "Tan" },
					{ id: 11, name: "White" },
					{ id: 12, name: "Yellow" },
				]
			},
		],
		"dresses": [
			{
				id: 1, name: "Party Dress", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Gray" },
					{ id: 4, name: "Green" },
					{ id: 5, name: "Navy" },
					{ id: 6, name: "Orange" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Purple" },
					{ id: 9, name: "Red" },
					{ id: 10, name: "Tan" },
					{ id: 11, name: "White" },
					{ id: 12, name: "Yellow" },
				]
			},
			{
				id: 2, name: "Sleeveless Dress", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Indigo" },
					{ id: 3, name: "Pink" },
					{ id: 4, name: "Sand" },
					{ id: 5, name: "White" },
				]
			},
		],
		"bags": [
			{
				id: 1, name: "Designer Leather Rucksack", gender: "female", forms: [
					{ id: 1, name: "Black/Red" },
					{ id: 2, name: "Green/Black" },
					{ id: 3, name: "Pink/White" },
					{ id: 4, name: "Red/Black" },
					{ id: 5, name: "White/Black" },
				]
			},
			{ id: 2, name: "Dojo Travel Bag", gender: "unisex" },
			{
				id: 3, name: "Luxury Rucksack", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Black/White" },
					{ id: 3, name: "White" },
					{ id: 4, name: "White/Black" },
					{ id: 5, name: "White/Red" },
				]
			},
			{
				id: 4, name: "Luxury Travel Bag", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Black/Red" },
					{ id: 3, name: "Black/White" },
					{ id: 4, name: "White" },
					{ id: 5, name: "White/Red" },
				]
			},
		],
		"gloves": [
			{ id: 1, name: "Dojo Gloves", gender: "unisex" },
			{
				id: 2, name: "Formal Gloves", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Gray" },
					{ id: 4, name: "Green" },
					{ id: 5, name: "Navy" },
					{ id: 6, name: "Orange" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Purple" },
					{ id: 9, name: "Red" },
					{ id: 10, name: "Tan" },
					{ id: 11, name: "White" },
					{ id: 12, name: "Yellow" },
				]
			},
			{
				id: 3, name: "Lace Part Gloves", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Gray" },
					{ id: 4, name: "Green" },
					{ id: 5, name: "Navy" },
					{ id: 6, name: "Orange" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Purple" },
					{ id: 9, name: "Red" },
					{ id: 10, name: "Tan" },
					{ id: 11, name: "White" },
					{ id: 12, name: "Yellow" },
				]
			},
			{ id: 4, name: "Punk Gloves - Black", gender: "unisex" },
			{
				id: 5, name: "Sport Glove", gender: "unisex", forms: [
					{ id: 1, name: "Eevee Kit" },
					{ id: 2, name: "Pikachu Kit" },
				]
			},
		],
		"bottoms": [
			{ id: 1, name: "Dojo Shorts", gender: "unisex" },
			{
				id: 2, name: "Dress Pants", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Gray" },
					{ id: 4, name: "Green" },
					{ id: 5, name: "Navy" },
					{ id: 6, name: "Orange" },
					{ id: 7, name: "Pink" },
					{ id: 8, name: "Purple" },
					{ id: 9, name: "Red" },
					{ id: 10, name: "Tan" },
					{ id: 11, name: "White" },
					{ id: 12, name: "Yellow" },
				]
			},
			{
				id: 3, name: "Punk Skirt", gender: "female", forms: [
					{ id: 1, name: "Faded Black" },
					{ id: 2, name: "Light Blue" },
					{ id: 3, name: "Red" },
				]
			},
			{
				id: 4, name: "Punk Trousers", gender: "male", forms: [
					{ id: 1, name: "Faded Black" },
					{ id: 2, name: "Light Blue" },
					{ id: 3, name: "Red" },
				]
			},
			{
				id: 5, name: "Sporty Shorts", gender: "unisex", forms: [
					{ id: 1, name: "Eevee Kit" },
					{ id: 2, name: "Pikachu Kit" },
				]
			},
		],
		"legwear": [
			{ id: 1, name: "Dojo Legwear", gender: "unisex" },
			{ id: 2, name: "Patterned Tights - W x F x G", gender: "unisex", },
			{
				id: 3, name: "Sport Legwear", gender: "unisex", forms: [
					{ id: 1, name: "Eevee Kit" },
					{ id: 2, name: "Pikachu Kit" },
				]
			},
		],
		"shoes": [
			{
				id: 1, name: "Designer Leather Boots", gender: "female", forms: [
					{ id: 1, name: "Black/Pink" },
					{ id: 2, name: "Black/White" },
					{ id: 3, name: "Caramel/Black" },
					{ id: 4, name: "Red/Black" },
					{ id: 5, name: "White/Pink" },
				]
			},
			{ id: 2, name: "Dojo Shoes", gender: "unisex" },
			{
				id: 3, name: "Luxury Loafers", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Black/Red" },
					{ id: 3, name: "Black/White" },
					{ id: 4, name: "White" },
					{ id: 5, name: "White/Red" },
				]
			},
			{
				id: 4, name: "Luxury Pumps", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Black/Red" },
					{ id: 3, name: "Black/White" },
					{ id: 4, name: "White" },
					{ id: 5, name: "White/Red" },
				]
			},
			{
				id: 5, name: "Pump Boots", gender: "unisex", forms: [
					{ id: 1, name: "Blue" },
					{ id: 2, name: "Pink" },
					{ id: 3, name: "Yellow" },
				]
			},
			{
				id: 6, name: "Sport High-Tops", gender: "unisex", forms: [
					{ id: 1, name: "Eevee Kit" },
					{ id: 2, name: "Pikachu Kit" },
				]
			},
		]
	};

	window.DATA = window.DATA || {};
	window.DATA.fashion = window.DATA.fashion || {};

	function slugify(s) {
		return String(s || "")
			.trim()
			.toLowerCase()
			.replace(/\s*\/\s*/g, "-")    // "Black / Red" -> "black-red"
			.replace(/\s+/g, "-")          // spaces -> hyphens
			.replace(/[^a-z0-9\-]/g, "")   // drop anything else
			.replace(/\-+/g, "-");         // collapse
	}

	function mapItem(categoryId, item) {
		const out = { ...item };

		// normalize gender folder
		let gender = (out.gender || "unisex").toLowerCase();

		// img: ({ gameKey }) => fashionItem(gameKey, gender, categoryId, imageId)
		const mkImg = (imageId) => ({ gameKey }) => fashionItem(gameKey, gender, categoryId, imageId);

		// ✅ IMPORTANT: build image ids from NAME slugs, not numeric ids
		const slug = (s) => (window._fashionSlug ? window._fashionSlug(s) : slugify(s));
		const itemSlug = slug(out.name);

		if (Array.isArray(out.forms) && out.forms.length) {
			out.forms = out.forms.map((f) => {
				const formSlug = slug(f.name ?? f.id);
				const imageId = `${itemSlug}-${formSlug}`;

				return {
					...f, // keep numeric ids as-is (authoring format)
					img: f.img ?? mkImg(imageId),
				};
			});

			// Parent preview uses the first form image (unless author manually set one)
			out.img = out.img ?? out.forms[0].img;
		} else {
			// No forms: image id is just the item name slug
			out.img = out.img ?? mkImg(itemSlug);
		}

		return out;
	}

	function buildFashionFor(gameKey) {
		return {
			categories: CATEGORIES.map((c) => ({
				id: c.id, label: c.label, items: (ITEMS_BY_CATEGORY[c.id] || []).map((it) => mapItem(c.id, it)),
			})),
		};
	}

	function buildFashionFor(gameKey) {
		return {
			categories: CATEGORIES.map((c) => ({
				id: c.id,
				label: c.label,
				items: (ITEMS_BY_CATEGORY[c.id] || []).map((it) => mapItem(c.id, it)),
			})),
		};
	}

	defineFashionMany(GAME_KEYS, (gameKey) => buildFashionFor(gameKey));
})();
