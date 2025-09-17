// backend/scripts/importLectures.js
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

import Lecture from '../models/Lecture.js';

const MONGO = process.env.MONGO_DB_URI;


if (!MONGO) {
  console.error('Missing MONGO_URI in .env. Set MONGO_URI and retry.');
  process.exit(1);
}

async function main() {
  try {
    await mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const filePath = path.resolve(process.cwd(), 'lectures.json');
    if (!fs.existsSync(filePath)) {
      console.error('lectures.json not found at', filePath);
      process.exit(1);
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!Array.isArray(data)) {
      throw new Error('lectures.json must contain a top-level array of lecture objects');
    }

    // Optional: you can clear existing lectures for the same courseId if needed (commented)
    // await Lecture.deleteMany({ courseId: data[0]?.courseId || { $exists: true } });

    const inserted = await Lecture.insertMany(data);
    console.log('Inserted lectures:');
    inserted.forEach(l => console.log(` - ${l._id}  |  ${l.order}  |  ${l.title}`));
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Import failed:', err);
    process.exit(1);
  }
}

main();
