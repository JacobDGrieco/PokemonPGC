// backend/src/routes/auth.js
import { Router } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../db.js";

const router = Router();

// POST /api/auth/signup
router.post("/signup", async (req, res) => {
	const { email, password } = req.body || {};

	if (!email || !password) {
		return res.status(400).json({ error: "Email and password required." });
	}

	try {
		const existing = await prisma.user.findUnique({ where: { email } });
		if (existing) {
			return res.status(409).json({ error: "User already exists." });
		}

		const passwordHash = await bcrypt.hash(password, 10);
		const user = await prisma.user.create({
			data: {
				email,
				passwordHash,
				icon: "default",
			},
			select: {
				id: true,
				email: true,
				icon: true,
			},
		});

		req.session.userId = user.id;
		req.session.email = user.email;

		return res.json(user); // { id, email, icon }
	} catch (err) {
		console.error("[auth] signup error:", err);
		return res.status(500).json({ error: "Internal error." });
	}
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
	const { email, password } = req.body || {};

	if (!email || !password) {
		return res.status(400).json({ error: "Email and password required." });
	}

	try {
		const user = await prisma.user.findUnique({
			where: { email },
			select: {
				id: true,
				email: true,
				passwordHash: true,
				icon: true,
			},
		});

		if (!user) {
			return res.status(401).json({ error: "Invalid email or password." });
		}

		const ok = await bcrypt.compare(password, user.passwordHash);
		if (!ok) {
			return res.status(401).json({ error: "Invalid email or password." });
		}

		req.session.userId = user.id;
		req.session.email = user.email;

		return res.json({
			id: user.id,
			email: user.email,
			icon: user.icon,
		});
	} catch (err) {
		console.error("[auth] login error:", err);
		return res.status(500).json({ error: "Internal error." });
	}
});

// GET /api/auth/me
router.get("/me", async (req, res) => {
	if (!req.session || !req.session.userId) {
		return res.status(200).json({ user: null });
	}

	try {
		const user = await prisma.user.findUnique({
			where: { id: req.session.userId },
			select: { id: true, email: true, icon: true },
		});

		return res.json({ user: user || null });
	} catch (err) {
		console.error("[auth] me error:", err);
		return res.status(500).json({ user: null });
	}
});

// PATCH /api/auth/me  <-- this is what the icon picker uses
router.patch("/me", async (req, res) => {
	if (!req.session || !req.session.userId) {
		return res.status(401).json({ error: "Not authenticated." });
	}

	const { icon } = req.body || {};

	try {
		const user = await prisma.user.update({
			where: { id: req.session.userId },
			data: {
				icon: icon || undefined,
			},
			select: { id: true, email: true, icon: true },
		});

		return res.json({ user });
	} catch (err) {
		console.error("[auth] update me error:", err);
		return res.status(500).json({ error: "Internal error." });
	}
});

// POST /api/auth/logout
router.post("/logout", (req, res) => {
	req.session = null;
	res.json({ ok: true });
});

export default router;
