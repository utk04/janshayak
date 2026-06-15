import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import expenseRoutes from "./routes/expene.routes.js";
import chatbotRoutes from "./routes/chatbot.routes.js";
import learningRoutes from "./routes/learning.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

import newsRoutes from "./routes/news.routes.js";

dotenv.config();

const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

// ✅ Enable JSON parsing
app.use(express.json());

// ✅ Enable cookies
app.use(cookieParser());

// ✅ Allow frontend to send cookies
app.use(
	cors({
		origin: [
			"http://localhost:5173", // local dev
			"https://jansahayak.onrender.com", // 🔹 replace with your actual Render frontend URL
			"http://localhost:3000",
			"http://localhost:5000",
		],
		credentials: true,
	})
);

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chatbot", chatbotRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/learning", learningRoutes);
app.use("/api/news", newsRoutes);

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// ✅ Start server
server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`🚀 Server running on port ${PORT}`);
});



