// backend/scripts/listLectures.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

import Lecture from "../models/Lecture.js";

const MONGO =
  process.env.MONGO_URI ||
  process.env.MONGODB_URI ||
  process.env.MONGO_DB_URI;

if (!MONGO) {
  console.error(
    "Missing MONGO_URI / MONGODB_URI / MONGO_DB_URI in .env."
  );
  process.exit(1);
}

async function run() {
  try {
    await mongoose.connect(MONGO);
    const docs = await Lecture.find({}).sort("order").lean();
    console.log("Lectures found:", docs.length);
    docs.forEach((d) =>
      console.log(
        `${d._id}  | order: ${d.order}  |  ${d.title}  |  ${d.videoUrl}`
      )
    );
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
