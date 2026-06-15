import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const response = await fetch(
			`https://gnews.io/api/v4/search?q=business&lang=en&country=in&max=10&apikey=${process.env.GNEWS_API_KEY}`
		);

		const data = await response.json();

		res.json(data);
	} catch (error) {
		console.error("News fetch error:", error);
		res.status(500).json({
			error: "Failed to fetch news",
		});
	}
});

export default router;