import { Router } from "express";
import bcrypt from "bcrypt";

const router = Router();

// TEMP in-memory user store for dev
// Later: replace with DB (Postgres + Prisma)
const users = new Map(); // key: email, value: { id, email, passwordHash }

let nextUserId = 1;

// Sign up
router.post("/signup", async (req, res) => {
	const { email, password } = req.body || {};

	if (!email || !password) {
		return res.status(400).json({ error: "Email and password required." });
	}

	if (users.has(email)) {
		return res.status(409).json({ error: "User already exists." });
	}

	const passwordHash = await bcrypt.hash(password, 10);
	const user = { id: nextUserId++, email, passwordHash };
	users.set(email, user);

	// Store user info in session
	req.session.userId = user.id;
	req.session.email = user.email;

	res.json({ id: user.id, email: user.email });
});

// Login
router.post("/login", async (req, res) => {
	const { email, password } = req.body || {};
	if (!email || !password) {
		return res.status(400).json({ error: "Email and password required." });
	}

	const user = users.get(email);
	if (!user) {
		return res.status(401).json({ error: "Invalid email or password." });
	}

	const ok = await bcrypt.compare(password, user.passwordHash);
	if (!ok) {
		return res.status(401).json({ error: "Invalid email or password." });
	}

	req.session.userId = user.id;
	req.session.email = user.email;

	res.json({ id: user.id, email: user.email });
});

// Logout
router.post("/logout", (req, res) => {
	req.session = null;
	res.json({ ok: true });
});

// Who am I?
router.get("/me", (req, res) => {
	if (!req.session || !req.session.userId) {
		return res.status(401).json({ user: null });
	}

	res.json({
		user: {
			id: req.session.userId,
			email: req.session.email,
		},
	});
});

export default router;
