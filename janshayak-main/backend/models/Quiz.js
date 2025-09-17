// backend/models/Quiz.js
import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  q: { type: String, required: true },
  type: { type: String, enum: ['mcq','text'], default: 'mcq' },
  options: [String], // for mcq
  correctAnswerIndex: Number // for mcq
});

const QuizSchema = new mongoose.Schema({
  title: String,
  lectureId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lecture', required: true },
  order: { type: Number, required: true },
  passingPercent: { type: Number, default: 70 },
  questions: [QuestionSchema],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Quiz || mongoose.model('Quiz', QuizSchema);
