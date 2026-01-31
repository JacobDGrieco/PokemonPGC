(() => {
	const GAME_KEYS = ["swordct", "shieldct"];

	// local wrapper (binds to helpers.js global)
	const fashionItem = (gameKey, gender, category, name) => _fashionItem(gameKey, gender, category, name);

	const CATEGORIES = [
		{ id: "hats", label: "Hats" },
		{ id: "glasses", label: "Glasses" },
		{ id: "tops", label: "Tops" },
		{ id: "jackets", label: "Jackets" },
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
				id: 1, name: "Hard Hat", gender: "unisex", forms: [
					{ id: 1, name: "Original Style" },
					{ id: 2, name: "Gold" },
				]
			},
			{ id: 2, name: "Replica State Crown", gender: "unisex" },
			{ id: 3, name: "Sport Cap - Hex Nut", gender: "unisex", extraCredit: true },
		],
		"glasses": [
			{
				id: 1, name: "Futuristic Monocle", gender: "male", forms: [
					{ id: 1, name: "Blue" },
					{ id: 2, name: "Red" },
					{ id: 3, name: "White" },
					{ id: 4, name: "Yellow" },
				]
			},
			{ id: 2, name: "Futuristic Monocle - Blue", gender: "female" },
			{
				id: 3, name: "Futuristic Shades", gender: "male", forms: [
					{ id: 1, name: "Blue" },
					{ id: 2, name: "Red" },
					{ id: 3, name: "White" },
					{ id: 4, name: "Yellow" },
				]
			},
			{ id: 4, name: "Futuristic Shades - Blue", gender: "female" },
		],
		"tops": [
			{
				id: 1, name: "Boatneck Sweatshirt", gender: "male", forms: [
					{ id: 1, name: "Freeezington's Fame" },
					{ id: 2, name: "King" },
				]
			},
			{ id: 2, name: "Sport Top - Galarian Star Tournament", gender: "unisex" },
		],
		"jackets": [
			{
				id: 1, name: "Expedition Jacket", gender: "unisex", forms: [
					{ id: 1, name: "Original Style" },
					{ id: 2, name: "Gold" },
				]
			},
			{
				id: 2, name: "Hoodie", gender: "unisex", forms: [
					{ id: 1, name: "C x L" },
					{ id: 1, name: "Legendary R-D" },
					{ id: 1, name: "Legendary R-E" },
				]
			},
		],
		"bags": [
			{
				id: 1, name: "Expedition Rucksack", gender: "female", forms: [
					{ id: 1, name: "Original Style" },
					{ id: 2, name: "Gold" },
				]
			},
			{
				id: 2, name: "Expedition Travel Bag", gender: "male", forms: [
					{ id: 1, name: "Original Style" },
					{ id: 2, name: "Gold" },
				]
			},
		],
		"gloves": [
			{
				id: 1, name: "Expedition Gloves", gender: "unisex", forms: [
					{ id: 1, name: "Original Style" },
					{ id: 2, name: "Gold" },
				]
			},
			{ id: 2, name: "Sport Glove - Galarian Star Tournament", gender: "unisex" },
		],
		"bottoms": [
			{
				id: 1, name: "Expedition Pants", gender: "unisex", forms: [
					{ id: 1, name: "Original Style" },
					{ id: 2, name: "Gold" },
				]
			},
			{ id: 2, name: "Sporty Shorts - Galarian Star Tournament", gender: "unisex" },
		],
		"legwear": [
			{
				id: 1, name: "Hoodie", gender: "unisex", forms: [
					{ id: 1, name: "C x L" },
					{ id: 2, name: "Legendary R-D" },
					{ id: 3, name: "Legendary R-E" },
				]
			},
			{ id: 2, name: "Patterned Tights - C x L", gender: "unisex", },
			{ id: 3, name: "Sport Legwear - Galarian Star Tournament", gender: "unisex" },
		],
		"shoes": [
			{
				id: 1, name: "Hiking Boots", gender: "unisex", forms: [
					{ id: 1, name: "Original Style" },
					{ id: 2, name: "Gold" },
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
