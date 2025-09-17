// backend/scripts/insertQuiz.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

import Quiz from "../models/Quiz.js";
import Lecture from "../models/Lecture.js";

const MONGO =
  process.env.MONGO_URI || process.env.MONGODB_URI || process.env.MONGO_DB_URI;
if (!MONGO) {
  console.error("Missing MONGO_URI / MONGODB_URI / MONGO_DB_URI in .env.");
  process.exit(1);
}

// CLI arguments
const lectureId = process.argv[2];
const quizTitle = process.argv[3] || "Untitled Quiz";

if (!lectureId) {
  console.error("Usage: node backend/scripts/insertQuiz.js <lectureId> <quizTitle>");
  process.exit(1);
}

async function run() {
  try {
    await mongoose.connect(MONGO);
    console.log("Connected to MongoDB");

    // fetch lecture to determine correct order
    const lecture = await Lecture.findById(lectureId);
    if (!lecture) {
      console.error("Lecture not found with id:", lectureId);
      process.exit(1);
    }

    const quizData = {
      title: quizTitle,
      lectureId,
      order: lecture.order, // keep quiz order same as lecture order
      passingPercent: 60,
      questions: [
        {
          q: "What is the key concept of this lecture?",
          type: "mcq",
          options: ["Concept A", "Concept B", "Concept C", "Concept D"],
          correctAnswerIndex: 0,
        },
      ],
      createdAt: new Date(),
    };

    const q = await Quiz.create(quizData);
    console.log(
      `Inserted quiz id: ${q._id} for lecture ${lecture.title} (order ${lecture.order})`
    );

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("Error inserting quiz:", err);
    process.exit(1);
  }
}

run();
