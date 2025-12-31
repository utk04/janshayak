import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
		httpOnly: true, // prevents JS access
		secure: process.env.NODE_ENV === "production", // only true in prod
		sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", 
	});
};

export default generateTokenAndSetCookie;
