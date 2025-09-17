// backend/scripts/unlockFirstLecture.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

import UserProgress from '../models/UserProgress.js';

const MONGO = process.env.MONGO_URI || process.env.MONGO_DB_URI;
if (!MONGO) {
  console.error('Missing MONGO_URI in .env.');
  process.exit(1);
}

async function run() {
  try {
    await mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    // Update existing user progress docs (set unlockedLectureOrder = 1)
    const result = await UserProgress.updateMany({}, { $set: { unlockedLectureOrder: 1, updatedAt: new Date() } });
    console.log('Updated userprogress docs:', result.modifiedCount, 'modified.');
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

run();
