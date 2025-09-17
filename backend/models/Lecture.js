// backend/models/Lecture.js
import mongoose from 'mongoose';

const LectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', default: null },
  order: { type: Number, required: true }, // 1,2,3...
  videoUrl: { type: String, required: true }, // Cloudinary URL or signed URL
  durationSec: Number,
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Lecture || mongoose.model('Lecture', LectureSchema);
