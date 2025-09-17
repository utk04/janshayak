// backend/scripts/listQuizzes.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Quiz from "../models/Quiz.js";

dotenv.config();

const run = async () => {
  try {
    if (!process.env.MONGO_DB_URI) {
      console.error("Missing MONGO_DB_URI in .env");
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB");

    const quizzes = await Quiz.find({});
    console.log(`Quizzes found: ${quizzes.length}`);
    quizzes.forEach(q => {
      console.log(
        `${q._id} | order: ${q.order} | ${q.title} | questions: ${q.questions.length}`
      );
      q.questions.forEach((ques, idx) => {
        console.log(`   Q${idx + 1}: ${ques.text}`);
        if (ques.options) {
          ques.options.forEach((opt, oi) => {
            console.log(`      ${oi}: ${opt}`);
          });
        }
        console.log(`      correctAnswerIndex: ${ques.correctAnswerIndex}`);
      });
    });
  } catch (err) {
    console.error("Error listing quizzes:", err);
  } finally {
    await mongoose.disconnect();
  }
};

run();
