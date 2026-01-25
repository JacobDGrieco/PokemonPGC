(() => {
	const GAME_KEYS = ["x", "y"];

	// local wrapper (binds to helpers.js global)
	const fashionItem = (gameKey, gender, category, name) => _fashionItem(gameKey, gender, category, name);

	const CATEGORIES = [
		{ id: "hats", label: "Hats" },
		{ id: "tops", label: "Tops" },
		{ id: "trousers", label: "Trousers" },
		{ id: "dresses", label: "Dresses" },
		{ id: "socks", label: "Socks" },
		{ id: "shoes", label: "Shoes" },
		{ id: "Bags", label: "Bags" },
		{ id: "accessories", label: "Accessories" }
	];

	// Fashion data authoring format:
	// - item.id stays a slug (e.g. "boater")
	// - item.forms[].id is numeric (e.g. 1), and helpers format it to "hats:boater:001"
	const ITEMS_BY_CATEGORY = {
		"hats": [
			{ id: "bamboo-sprig-hat", name: "Bamboo Spring Hat", gender: "male" },
			{
				id: "boater", name: "Boater", gender: "female", forms: [
					{ id: 1, name: "Blue" },
					{ id: 2, name: "Red" }
				],
			},
			{
				id: "camo-cap", name: "Camo Cap", gender: "male", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Olive" }
				],
			},
			{
				id: "cycling-cap", name: "Cycling Cap", gender: "female", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "White" }
				],
			},
			{
				id: "exotic-cap", name: "Exotic Cap", gender: "female", forms: [
					{ id: 1, name: "Brown" },
					{ id: 2, name: "Purple" }
				],
			},
			{
				id: "fedora", name: "Fedora", gender: "male", forms: [
					{ id: 1, name: "Checkered Black" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Gray" },
					{ id: 4, name: "Red" }
				],
			},
			{
				id: "fedora", name: "Fedora", gender: "female", forms: [
					{ id: 1, name: "Brown" },
					{ id: 2, name: "Green" },
					{ id: 3, name: "Purple" },
					{ id: 4, name: "Red" },
					{ id: 5, name: "White" },
					{ id: 6, name: "Yellow" }
				],
			},
			{
				id: "felt-hat", name: "Felt Hat", gender: "female", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Beige" },
					{ id: 3, name: "Black" },
					{ id: 4, name: "Brown" },
					{ id: 5, name: "Gray" },
					{ id: 6, name: "Navy Blue" },
					{ id: 7, name: "Pale Pink" },
					{ id: 8, name: "Red" },
					{ id: 9, name: "White" }
				],
			},
			{
				id: "knit-cap", name: "Knit Cap", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Orange" },
					{ id: 3, name: "Purple" },
					{ id: 4, name: "White" }
				],
			},
			{
				id: "logo-cap", name: "Logo Cap", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Red" }
				],
			},
			{
				id: "logo-cap", name: "Logo Cap", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Pink" }
				],
			},
			{
				id: "outdoors-cap", name: "Outdoors Cap", gender: "male", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Olive" },
					{ id: 4, name: "Red" }
				],
			},
			{
				id: "sports-cap", name: "Sports Cap", gender: "female", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Green" },
					{ id: 3, name: "Yellow" }
				],
			}
		],
		"tops": [
			{
				id: "down-jacket", name: "Down Jacket", gender: "male", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Red" }
				],
			},
			{
				id: "exotic-top", name: "Exotic Top", gender: "female", forms: [
					{ id: 1, name: "Lime Green" },
					{ id: 2, name: "Orange" }
				],
			},
			{ id: "glitzy-scarf-top", name: "Glitzy Scarf Top", gender: "female" },
			{
				id: "hoodie", name: "Hoodie", gender: "male", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Olive" },
					{ id: 3, name: "Yellow" }
				],
			},
			{ id: "king-tshirt", name: "King T-Shirt", gender: "male" },
			{
				id: "logo-tshirt", name: "Logo T-Shirt", gender: "male", forms: [
					{ id: 1, name: "Blue" },
					{ id: 2, name: "Green" },
					{ id: 3, name: "Orange" },
					{ id: 4, name: "White" },
					{ id: 5, name: "Yellow" }
				],
			},
			{
				id: "midriff-halter-top", name: "Midriff Halter Top", gender: "female", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Orange" }
				],
			},
			{
				id: "plaid-shirt-combo", name: "Plaid Shirt Combo", gender: "male", forms: [
					{ id: 1, name: "Gray" },
					{ id: 2, name: "Red" }
				],
			},
			{
				id: "poke-ball-baby-doll-tee", name: "Poke Ball Baby Doll Tee", gender: "female", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Green" },
					{ id: 3, name: "Purple" },
					{ id: 4, name: "Yellow" }
				],
			},
			{
				id: "ribbon-smock-top", name: "Ribbon Smock Top", gender: "female", forms: [
					{ id: 1, name: "Brown" },
					{ id: 2, name: "Pale Pink" },
					{ id: 3, name: "Purple" },
					{ id: 4, name: "Yellow" }
				],
			},
			{
				id: "ruffled-camisole", name: "Ruffled Camisole", gender: "female", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Pink" },
					{ id: 3, name: "Yellow" }
				],
			},
			{ id: "ruffled-tank-top", name: "Ruffled Tank Top", gender: "female" },
			{
				id: "scarf-top", name: "Scarf Top", gender: "female", forms: [
					{ id: 1, name: "Pale Pink" },
					{ id: 2, name: "Purple" },
					{ id: 3, name: "Yellow" }
				],
			},
			{
				id: "shirt-and-tie", name: "Shirt and Tie", gender: "female", forms: [
					{ id: 1, name: "Blue" },
					{ id: 2, name: "Red" },
					{ id: 3, name: "Green" }
				],
			},
			{
				id: "short-parka", name: "Short Parka", gender: "female", forms: [
					{ id: 1, name: "Blue" },
					{ id: 2, name: "Lime Green" },
					{ id: 3, name: "Pink" },
					{ id: 4, name: "Red" }
				],
			},
			{
				id: "sleeveless-turtleneck", name: "Sleeveless Turtleneck", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "White" }
				],
			},
			{
				id: "splatter-paint-tshirt", name: "Splatter Paint T-Shirt", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Purple" },
					{ id: 3, name: "Red" }
				],
			},
			{
				id: "striped-shirt-combo", name: "Striped Shirt Combo", gender: "male", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Pink" },
					{ id: 3, name: "Purple" },
					{ id: 4, name: "Red" }
				],
			},
			{
				id: "striped-tank-top", name: "Striped Tank Top", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Pink" }
				],
			},
			{
				id: "tie-neck-blouse", name: "Tie-Neck Blouse", gender: "female", forms: [
					{ id: 1, name: "Gray" },
					{ id: 2, name: "Red" }
				],
			},
			{ id: "twin-tshirt", name: "Twin T-Shirt", gender: "male" },
			{
				id: "vneck-tshirt", name: "V-Neck T-Shirt", gender: "male", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Pink" },
					{ id: 4, name: "White" }
				],
			},
			{
				id: "zipped-jacket", name: "Zipped Jacket", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Navy Blue" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Red" }
				],
			},
			{
				id: "zipped-shirt-combo", name: "Zipped Shirt Combo", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "White" }
				],
			}
		],
		"trousers": [
			{
				id: "accented-jeans", name: "Accented Jeans", gender: "female", forms: [
					{ id: 1, name: "Blue" },
					{ id: 2, name: "Lime Green" },
					{ id: 3, name: "Red" },
					{ id: 4, name: "Yellow" }
				],
			},
			{
				id: "bold-striped-pants", name: "Bold Striped Pants", gender: "female", forms: [
					{ id: 1, name: "Blue" },
					{ id: 2, name: "Gray" },
					{ id: 3, name: "Green" }
				],
			},
			{
				id: "camo-pants", name: "Camo Pants", gender: "male", forms: [
					{ id: 1, name: "Gray" },
					{ id: 2, name: "Green" }
				],
			},
			{
				id: "checked-pants", name: "Checked Pants", gender: "male", forms: [
					{ id: 1, name: "Gray" },
					{ id: 2, name: "Red" }
				],
			},
			{
				id: "chinos", name: "Chinos", gender: "male", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" }
				],
			},
			{
				id: "cross-laced-shorts", name: "Cross-Laced Shorts", gender: "female", forms: [
					{ id: 1, name: "Brown" },
					{ id: 2, name: "Olive" }
				],
			},
			{ id: "cuffed-jeans", name: "Cuffed Jeans", gender: "male" },
			{ id: "damaged-jeans", name: "Damaged Jeans", gender: "male" },
			{ id: "damaged-jean-shorts", name: "Damaged Jean Shorts", gender: "female" },
			{ id: "damaged-skinny-jeans", name: "Damaged Skinny Jeans", gender: "female" },
			{
				id: "denim-mini-skirt", name: "Denim Miniskirt", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Olive" }
				],
			},
			{
				id: "jean-shorts", name: "Jean Shorts", gender: "female", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Brown" },
					{ id: 4, name: "Gray" },
					{ id: 5, name: "Orange" },
					{ id: 6, name: "Pink" },
					{ id: 7, name: "White" }
				],
			},
			{
				id: "pleated-kilt-skirt", name: "Jean Shorts", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Red" }
				],
			},
			{
				id: "pleated-skirt", name: "Pleated Skirt", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Red" },
					{ id: 4, name: "White" }
				],
			},
			{
				id: "scalloped-skirt", name: "Scalloped Skirt", gender: "female", forms: [
					{ id: 1, name: "Orange" },
					{ id: 2, name: "Red" }
				],
			},
			{
				id: "scalloped-tiered-skirt", name: "Scalloped Tiered Skirt", gender: "female", forms: [
					{ id: 1, name: "Pink" },
					{ id: 2, name: "White" },
					{ id: 3, name: "Yellow" }
				],
			},
			{
				id: "short-cargo-pants", name: "Short Cargo Pants", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Olive" },
					{ id: 3, name: "Purple" }
				],
			},
			{
				id: "skinny-jeans", name: "Skinny Jeans", gender: "male", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Brown" },
					{ id: 4, name: "Red" }
				],
			},
			{
				id: "skinny-jeans", name: "Skinny Jeans", gender: "female", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Beige" },
					{ id: 3, name: "Black" },
					{ id: 4, name: "Blue" },
					{ id: 5, name: "Olive" },
					{ id: 6, name: "Red" },
					{ id: 7, name: "White" }
				],
			},
			{
				id: "striped-pleated-skirt", name: "Striped Pleated Skirt", gender: "female", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Pink" },
					{ id: 3, name: "Yellow" }
				],
			},
			{
				id: "tiered-satin-skirt", name: "Tiered Satin Skirt", gender: "female", forms: [
					{ id: 1, name: "Purple" },
					{ id: 2, name: "White" }
				],
			},
			{
				id: "vinyl-pants", name: "Vinyl Pants", gender: "male"
			}
		],
		"dresses": [
			{ id: "double-front-coat-dress", name: "Double-Front Coat Dress", gender: "female" },
			{ id: "frilly-dress", name: "Frilly Dress", gender: "female" },
			{
				id: "high-waisted-outfit", name: "Double-Front Coat Dress", gender: "female", forms: [
					{ id: 1, name: "Black / Red" },
					{ id: 2, name: "White / Blue" }
				],
			},
			{ id: "little-black-dress", name: "Little Black Dress", gender: "female" },
			{ id: "single-front-coat-dress", name: "Single-Front Coat Dress", gender: "female" },
			{ id: "sparkly-bolero-dress", name: "Sparkly Bolero Dress", gender: "female" },
			{ id: "sundae-dress", name: "Sundae Dress", gender: "female" },
			{
				id: "trench-coat-dress", name: "Double-Front Coat Dress", gender: "female", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" }
				],
			}
		],
		"socks": [
			{
				id: "ankle-socks", name: "Ankle Socks", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Green" },
					{ id: 3, name: "Purple" },
					{ id: 4, name: "Red" }
				],
			},
			{ id: "camo-otk-socks", name: "Camo OTK Socks", gender: "female" },
			{
				id: "knee-socks", name: "Knee Socks", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Green" },
					{ id: 4, name: "Pink" },
					{ id: 5, name: "Red" },
					{ id: 6, name: "White" },
					{ id: 7, name: "Yellow" }
				],
			},
			{ id: "leggings", name: "Leggings", gender: "female" },
			{
				id: "otk-socks", name: "OTK Socks", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Brown" },
					{ id: 3, name: "Gray" },
					{ id: 4, name: "Green" },
					{ id: 5, name: "Pink" },
					{ id: 6, name: "Red" },
					{ id: 7, name: "White" }
				],
			},
			{ id: "punk-otk-socks", name: "Punk OTK Socks", gender: "female" },
			{ id: "single-stripe-otk-socks", name: "Single-Stripe OTK Socks", gender: "female" },
			{
				id: "tights", name: "Tights", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Navy Blue" },
					{ id: 3, name: "Orange" },
					{ id: 4, name: "Pale Pink" },
					{ id: 5, name: "Pink" },
					{ id: 6, name: "Purple" }
				],
			},
			{
				id: "wide-stripe-otk-socks", name: "Wide-Stripe OTK Socks", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Pale Pink" }
				],
			}
		],
		"shoes": [
			{
				id: "bow-shoes", name: "Bow Shoes", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Brown" }
				],
			},
			{
				id: "high-tops", name: "High Tops", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Pink" },
					{ id: 3, name: "Purple" },
					{ id: 4, name: "Yellow" }
				],
			},
			{
				id: "laced-boots", name: "Bow Shoes", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Brown" }
				],
			},
			{
				id: "loafers", name: "Loafers", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Brown" }
				],
			},
			{
				id: "mary-jane-shoes", name: "Mary Jane Shoes", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Pink" },
					{ id: 3, name: "Purple" },
					{ id: 4, name: "Yellow" },
					{ id: 5, name: "Red" },
					{ id: 6, name: "White" }
				],
			},
			{
				id: "riding-boots", name: "Mary Jane Shoes", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Brown" },
					{ id: 3, name: "Gray" },
					{ id: 4, name: "Pink" },
					{ id: 5, name: "White" }
				],
			},
			{
				id: "saddle-shoes", name: "Bow Shoes", gender: "female", forms: [
					{ id: 1, name: "Brown" },
					{ id: 2, name: "Navy Blue" },
					{ id: 3, name: "White" }
				],
			},
			{
				id: "short-boots", name: "Short Boots", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Brown" },
					{ id: 3, name: "Red" }
				],
			},
			{
				id: "sneakers", name: "Sneakers", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Brown" },
					{ id: 3, name: "Red" },
					{ id: 4, name: "White" },
					{ id: 5, name: "Yellow" }
				],
			},
			{
				id: "zipped-boots", name: "Zipped Boots", gender: "female"
			}
		],
		"Bags": [
			{
				id: "enamel-striped-purse", name: "Enamel-Striped Purse", gender: "female", forms: [
					{ id: 1, name: "Blue" },
					{ id: 2, name: "Red" }
				],
			},
			{
				id: "ribbon-purse", name: "Ribbon Purse", gender: "female", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Pale Pink" }
				],
			},
			{
				id: "strappy-purse", name: "Strappy Purse", gender: "female", forms: [
					{ id: 1, name: "Beige" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Brown" },
					{ id: 4, name: "Purple" },
					{ id: 5, name: "White" }
				],
			},
			{
				id: "tassel-purse", name: "Tassel Purse", gender: "female", forms: [
					{ id: 1, name: "Green" },
					{ id: 2, name: "Purple" }
				],
			},
			{
				id: "tote-bag", name: "Tote Bag", gender: "female", forms: [
					{ id: 1, name: "Pink" },
					{ id: 2, name: "Red" },
					{ id: 3, name: "White" },
					{ id: 4, name: "Yellow" }
				],
			},
			{
				id: "two-tone-bag", name: "Two-Tone Bag", gender: "male", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Black" },
					{ id: 3, name: "Olive" },
					{ id: 4, name: "Orange" },
					{ id: 5, name: "Red" }
				],
			},
			{
				id: "vinyl-messenger-bag", name: "Vinyl Messenger Bag", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Brown" }
				],
			}
		],
		"accessories": [
			{
				id: "artificial-flower-pin", name: "Artificial Flower Pin", gender: "female", forms: [
					{ id: 1, name: "Aqua" },
					{ id: 2, name: "Pale Pink" },
					{ id: 3, name: "Pink" },
					{ id: 4, name: "Yellow" }
				],
			},
			{
				id: "button-accessory", name: "Button Accessory", gender: "unisex", forms: [
					{ id: 1, name: "Gray" },
					{ id: 2, name: "Lime Green" },
					{ id: 3, name: "Pink" },
					{ id: 4, name: "Purple" },
					{ id: 5, name: "Yellow" }
				],
			},
			{
				id: "feather-accessory", name: "Feather Accessory", gender: "unisex", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Green" },
					{ id: 3, name: "Red" }
				],
			},
			{
				id: "hat-ribbon-accessory", name: "Hat Ribbon Accessory", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Blue" },
					{ id: 3, name: "Pale Pink" },
					{ id: 4, name: "Red" },
					{ id: 5, name: "White" }
				],
			},
			{
				id: "metal-pin", name: "Metal Pin", gender: "female", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Gold" },
					{ id: 3, name: "Silver" }
				],
			},
			{
				id: "wide-frame-sunglasses", name: "Wide-Frame Sunglasses", gender: "male", forms: [
					{ id: 1, name: "Black" },
					{ id: 2, name: "Red" },
					{ id: 3, name: "White" },
					{ id: 4, name: "Yellow" }
				],
			},
			{
				id: "wide-frame-sunglasses", name: "Wide-Frame Sunglasses", gender: "female", forms: [
					{ id: 1, name: "Blue" },
					{ id: 2, name: "Red" },
					{ id: 3, name: "White" },
					{ id: 4, name: "Yellow" }
				],
			}
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

		// Build the runtime img function you want:
		// img: ({ gameKey }) => fashionItem(gameKey, categoryId, gender, imageId)
		const mkImg = (imageId) => ({ gameKey }) => fashionItem(gameKey, gender, categoryId, imageId);

		if (Array.isArray(out.forms) && out.forms.length) {
			out.forms = out.forms.map((f) => {
				const suffix = slugify(f.name ?? f.id);
				const imageId = `${out.id}-${suffix}`;

				return {
					...f,
					// keep numeric ids as-is (your authoring format)
					img: f.img ?? mkImg(imageId),
				};
			});

			// Parent preview uses the first form image (unless author manually set one)
			out.img = out.img ?? out.forms[0].img;
		} else {
			// No forms: image id is just the item id
			out.img = out.img ?? mkImg(out.id);
		}

		return out;
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
