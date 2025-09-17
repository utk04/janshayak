// backend/models/UserProgress.js
import mongoose from 'mongoose';

const UserProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true },
  completedLectures: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }],
  passedQuizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
  unlockedLectureOrder: { type: Number, default: 0 }, // highest lecture.order unlocked for this user
  unlockedQuizOrder: { type: Number, default: 0 }, // highest quiz.order unlocked
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.UserProgress || mongoose.model('UserProgress', UserProgressSchema);
