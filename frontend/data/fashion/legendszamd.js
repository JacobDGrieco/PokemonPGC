(() => {
	const GAME_KEYS = ["legendszamd"];

	// local wrapper (binds to helpers.js global)
	const fashionItem = (gameKey, gender, category, name) => _fashionItem(gameKey, gender, category, name);

	const CATEGORIES = [
		{ id: "tops", label: "Tops" },
		{ id: "bottoms", label: "Bottoms" },
		{ id: "all-in-one", label: "All-in-One" },
		{ id: "headwear", label: "Headwear" },
		{ id: "eyewear", label: "Eyewear" },
		{ id: "gloves", label: "Gloves" },
		{ id: "legwear", label: "Legwear" },
		{ id: "footwear", label: "Footwear" },
		{ id: "satchels", label: "Satchels" },
	];

	// Fashion data authoring format:
	// - item.id stays a slug (e.g. "boater")
	// - item.forms[].id is numeric (e.g. 1), and helpers format it to "hats:boater:001"
	const ITEMS_BY_CATEGORY = {
		"tops": [
			{
				id: "holo-blouson-and-off-shuolder", name: "Holo Blouson & Off-Shoulder", forms: [
					{ id: 1, name: "X - Holo Blue / White", startGame: true, },
					{ id: 2, name: "Y - Holo Pink", startGame: true, },
				],
			},
			{
				id: "holo-blouson-and-v-neck", name: "Holo Blouson & V-Neck", forms: [
					{ id: 1, name: "X - Holo Blue / White", startGame: true, },
					{ id: 2, name: "Y - Holo Pink", startGame: true, },
				],
			},
			{
				id: "grishams-chef-top", name: "Grisham's Chef Top Set", forms: [
					{ id: 1, name: "Gray / White", },
					{ id: 2, name: "White / Gray", },
				],
			},
		],
		"bottoms": [
			{
				id: "holo-skinny-jeans", name: "Holo Skinny Jeans", forms: [
					{ id: 1, name: "X - Holo Blue", startGame: true, },
					{ id: 2, name: "Y - Holo Pink", startGame: true, },
				],
			},
			{
				id: "holo-wide-leg-pants", name: "Holo Wide-Leg Pants", forms: [
					{ id: 1, name: "X - Holo Blue", startGame: true, },
					{ id: 2, name: "Y - Holo Pink", startGame: true, },
				],
			},
			{
				id: "grishams-aproned-pants", name: "Grisham's Aproned Pants", forms: [
					{ id: 1, name: "Light Gray", },
					{ id: 2, name: "White", },
				],
			},
		],
		"all-in-one": [
			{
				id: "canaris-tracksuit", name: "Canari's Tracksuit Set", forms: [
					{ id: 1, name: "Lemon Yellow", },
					{ id: 2, name: "Dusk Blue", },
				],
			},
			{
				id: "ivors-gi", name: "Ivor's Gi Set", forms: [
					{ id: 1, name: "Black", },
					{ id: 2, name: "", },
				],
			},
			{
				id: "corbeaus-suit-and-tie", name: "Corbeau's Suit & Tie Set", forms: [
					{ id: 1, name: "Raven Black", },
					{ id: 2, name: "Mauve Gray", },
				],
			},
			{
				id: "jacinthes-dress", name: "Jacinthe's Dress", forms: [
					{ id: 1, name: "Lilac", },
					{ id: 2, name: "Shell Pink", },
				],
			},
		],
		"headwear": [
			{
				id: "holo-striped-trilby", name: "Holo Striped Trilby", forms: [
					{ id: 1, name: "X - Black / Holo Blue", startGame: true, },
					{ id: 2, name: "Y - Black / Holo Pink", startGame: true, },
				]
			},
			{
				id: "jacinthes-pillbox-hat", name: "Jacinthe's Pillbox Hat", forms: [
					{ id: 1, name: "Lilac", },
					{ id: 2, name: "Shell Pink", },
				],
			},
		],
		"eyewear": [
			{
				id: "holo-visor", name: "Holo Visor", forms: [
					{ id: 1, name: "X - Holo Blue", startGame: true, },
					{ id: 2, name: "Y - Holo Pink", startGame: true, },
				],
			},
			{
				id: "corbeaus-glasses", name: "Corbeau's Glasses", forms: [
					{ id: 1, name: "Magenta Drops", },
					{ id: 2, name: "Purple Drops", },
				],
			},
			{
				id: "grishams-glasses", name: "Grisham's Glasses", forms: [
					{ id: 1, name: "White Frames", },
					{ id: 2, name: "Flare Lenses", },
				],
			},
		],
		"gloves": [
			{
				id: "ivors-training-gloves", name: "Ivor's Training Gloves", forms: [
					{ id: 1, name: "Orange / Black", },
					{ id: 2, name: "", },
				],
			},
			{
				id: "jacinthes-beribboned-gloves", name: "Jacinthe's Beribboned Gloves", forms: [
					{ id: 1, name: "Yellow Ribbon", },
					{ id: 2, name: "Pink Ribbon", },
				],
			},
		],
		"legwear": [
			{
				id: "jacinthes-mesh-tights", name: "Jacinthe's Mesh Tights", forms: [
					{ id: 1, name: "White", },
					{ id: 2, name: "Black", },
				],
			},
		],
		"footwear": [
			{
				id: "holo-mid-top-sneakers", name: "Holo Mid-Top Sneakers", forms: [
					{ id: 1, name: "X - Holo Blue", startGame: true, },
					{ id: 2, name: "Y - Holo Pink", startGame: true, },
				],
			},
			{
				id: "holo-sock-sneakers", name: "Holo Sock Sneakers", forms: [
					{ id: 1, name: "X - Holo Blue", startGame: true, },
					{ id: 2, name: "Y - Holo Pink", startGame: true, },
				],
			},
			{
				id: "ivors-geta-sandals", name: "Ivor's Geta Sandals", forms: [
					{ id: 1, name: "Black / Orange", },
					{ id: 2, name: "", },
				],
			},
			{
				id: "jacinthes-bejeweled-pumps", name: "Jacinthe's Bejeweled Pumps", forms: [
					{ id: 1, name: "Lilac", },
					{ id: 2, name: "Shell Pink", },
				],
			},
			{
				id: "grishams-leather-shoes", name: "Grisham's Leather Shoes", forms: [
					{ id: 1, name: "Navy / Black", },
					{ id: 2, name: "Red / White", },
				],
			},
		],
		"satchels": [
			{
				id: "holo-round", name: "Holo Round Satchel", forms: [
					{ id: 1, name: "X - Holo Blue", startGame: true, },
					{ id: 2, name: "Y - Holo Pink", startGame: true, },
				],
			},
			{
				id: "canaris-satchel", name: "Canari's Satchel", forms: [
					{ id: 1, name: "Regular Color", },
					{ id: 2, name: "Shiny Color", },
				],
			},
			{
				id: "ivors-clasped-satchel", name: "Ivor's Clasped Satchel", forms: [
					{ id: 1, name: "Regular Color", },
					{ id: 2, name: "", },
				],
			},
			{
				id: "corbeaus-leather-satchel", name: "Corbeau's Leather Satchel", forms: [
					{ id: 1, name: "Black / Magenta", },
					{ id: 2, name: "Gray / Purple", },
				],
			},
			{
				id: "jacinthes-bejeweled-satchel", name: "Jacinthe's Bejeweled Satchel", forms: [
					{ id: 1, name: "Lilac", },
					{ id: 2, name: "Shell Pink", },
				],
			},
			{
				id: "grishams-round-satchel", name: "Grisham's Round Satchel", forms: [
					{ id: 1, name: "Red / Black", },
					{ id: 2, name: "Red / White", },
				],
			},
		],
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

		// Build the runtime img function you want:
		// img: ({ gameKey }) => fashionItem(gameKey, categoryId, gender, imageId)
		const mkImg = (imageId) => ({ gameKey }) => fashionItem(gameKey, gender, categoryId, imageId);

		if (Array.isArray(out.forms) && out.forms.length) {
			out.forms = out.forms.map((f) => {
				const suffix = slugify(f.name ?? f.id);
				const imageId = `${out.id}-${suffix}`;

				return {
					...f,	// keep numeric ids as-is (your authoring format)
					img: f.img ?? mkImg(imageId),
				};
			});

			// Parent preview uses the first form image (unless author manually set one)
			out.img = out.img ?? out.forms[0].img;
		} else {			// No forms: image id is just the item id
			out.img = out.img ?? mkImg(out.id);
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

	defineFashionMany(GAME_KEYS, (gameKey) => buildFashionFor(gameKey));
})();
