// backend/routes/learning.routes.js
import express from 'express';
import mongoose from 'mongoose';
import protectRoute from '../middleware/protectRoute.js';
import Lecture from '../models/Lecture.js';
import Quiz from '../models/Quiz.js';
import UserProgress from '../models/UserProgress.js';

const router = express.Router();

/**
 * GET /api/learning/module/:courseId
 * Returns lectures, quizzes and the user's progress.
 * If courseId === 'all' or 'null' -> returns all lectures/quizzes.
 * If courseId is a valid ObjectId -> filters by that courseId.
 * Otherwise -> no filter (same as 'all').
 */
// GET /api/learning/module/:courseId
router.get('/module/:courseId', protectRoute, async (req, res) => {
  try {
    const { courseId } = req.params;

    // determine filters: treat 'all' or 'null' as no filter
    let lectureFilter = {};
    let quizFilter = {};

    if (!(courseId === 'all' || courseId === 'null')) {
      if (mongoose.Types.ObjectId.isValid(courseId)) {
        lectureFilter = { courseId };
        quizFilter = { courseId };
      } else {
        lectureFilter = {};
        quizFilter = {};
      }
    }

    // fetch lectures & quizzes
    const lectures = await Lecture.find(lectureFilter).sort('order').lean();
    const quizzes = await Quiz.find(quizFilter).sort('order').lean();

    // --- AUTO-CREATE user progress if missing (Option 3) ---
    let progress = await UserProgress.findOne({ userId: req.user._id }).lean();
    if (!progress) {
      // create a new progress doc with lecture 1 unlocked
      // use model.create to return the document (not .lean()), then convert to plain object
      const created = await UserProgress.create({
        userId: req.user._id,
        completedLectures: [],
        passedQuizzes: [],
        unlockedLectureOrder: 1,
        unlockedQuizOrder: 0,
        updatedAt: new Date()
      });
      // ensure progress is a plain object for later logic
      progress = created.toObject ? created.toObject() : created;
      console.log(`[learning.routes] created initial UserProgress for user ${req.user._id}`);
    }

    // derive helper values from progress
    const unlockedLectureOrder = progress ? (progress.unlockedLectureOrder || 0) : 0;
    const unlockedQuizOrder = progress ? (progress.unlockedQuizOrder || 0) : 0;
    const completedLecturesSet = new Set((progress && Array.isArray(progress.completedLectures)) ? progress.completedLectures.map(String) : []);
    const passedQuizzesSet = new Set((progress && Array.isArray(progress.passedQuizzes)) ? progress.passedQuizzes.map(String) : []);

    // attach unlocked/completed flags to lectures
    const lecturesWithLock = lectures.map(l => {
      const unlocked = !!(l.order && l.order <= unlockedLectureOrder);
      return {
        ...l,
        unlocked,
        videoUrl: unlocked ? l.videoUrl : null,
        completed: completedLecturesSet.has(String(l._id))
      };
    });

    // build lecture order map so quizzes can reference lectureOrder
    const lectureOrderById = new Map();
    lectures.forEach(l => lectureOrderById.set(String(l._id), l.order || null));

    // attach unlocked/passed flags to quizzes
    const quizzesWithLock = quizzes.map(q => {
      const unlocked = !!(q.order && q.order <= unlockedQuizOrder);
      const lectureOrder = lectureOrderById.get(String(q.lectureId)) || null;
      return {
        ...q,
        unlocked,
        lectureOrder,
        passed: passedQuizzesSet.has(String(q._id))
      };
    });

    // send response
    res.json({
      lectures: lecturesWithLock,
      quizzes: quizzesWithLock,
      progress: progress || { unlockedLectureOrder, unlockedQuizOrder }
    });
  } catch (err) {
    console.error('Error in GET /api/learning/module/:courseId', err);
    res.status(500).json({ message: 'Server error' });
  }
});


/**
 * POST /api/learning/lectures/:id/complete
 * Mark lecture as completed for user. Unlock associated quiz(s) (by quiz.order).
 * If no quiz exists for the lecture, optionally unlock next lecture.
 */
router.post('/lectures/:id/complete', protectRoute, async (req, res) => {
  try {
    const lectureId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(lectureId)) return res.status(400).json({ message: 'Invalid lecture id' });

    const lecture = await Lecture.findById(lectureId).lean();
    if (!lecture) return res.status(404).json({ message: 'Lecture not found' });

    // upsert userprogress and add lecture to completedLectures
    let prog = await UserProgress.findOne({ userId: req.user._id });
    if (!prog) {
      prog = await UserProgress.create({
        userId: req.user._id,
        completedLectures: [lecture._id],
        passedQuizzes: [],
        unlockedLectureOrder: lecture.order || 0,
        unlockedQuizOrder: 0,
        updatedAt: new Date()
      });
    } else {
      // add to completedLectures
      if (!prog.completedLectures.map(String).includes(String(lecture._id))) {
        prog.completedLectures.push(lecture._id);
      }
    }

    // find quizzes linked to this lecture
    const lectureQuizzes = await Quiz.find({ lectureId: lecture._id }).sort('order').lean();

    if (lectureQuizzes && lectureQuizzes.length > 0) {
      // unlock quizzes of this lecture by setting unlockedQuizOrder to max existing vs quiz.order
      let maxQuizOrder = prog.unlockedQuizOrder || 0;
      for (const q of lectureQuizzes) {
        if (q.order > maxQuizOrder) maxQuizOrder = q.order;
      }
      prog.unlockedQuizOrder = Math.max(prog.unlockedQuizOrder || 0, maxQuizOrder);
    } else {
      // if no quiz: optionally unlock next lecture automatically
      const nextLecture = await Lecture.findOne({ courseId: lecture.courseId, order: lecture.order + 1 }).lean();
      if (nextLecture) {
        prog.unlockedLectureOrder = Math.max(prog.unlockedLectureOrder || 0, nextLecture.order);
      }
    }

    prog.updatedAt = new Date();
    await prog.save();

    res.json({ ok: true, progress: prog });
  } catch (err) {
    console.error('Error in POST /lectures/:id/complete', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * POST /api/learning/quizzes/:id/submit
 * Submit answers, grade and (if passed) unlock the next lecture
 * Body: { answers: [{ questionIndex: 0, answerIndex: 2 }, ...] }
 */
router.post('/quizzes/:id/submit', protectRoute, async (req, res) => {
  try {
    const quizId = req.params.id;
    const answers = req.body.answers || [];

    if (!mongoose.Types.ObjectId.isValid(quizId)) return res.status(400).json({ message: 'Invalid quiz id' });

    const quiz = await Quiz.findById(quizId).lean();
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    // grade MCQs
    let correctCount = 0;
    for (let i = 0; i < (quiz.questions || []).length; i++) {
      const q = quiz.questions[i];
      const submitted = answers.find(a => a.questionIndex === i);
      if (!submitted) continue;
      if (q.type === 'mcq' && q.correctAnswerIndex === submitted.answerIndex) correctCount++;
      // extend for other types as needed
    }

    const total = (quiz.questions && quiz.questions.length) || 1;
    const percent = Math.round((correctCount / total) * 100);
    const passed = percent >= (quiz.passingPercent || 70);

    // update user progress
    let prog = await UserProgress.findOne({ userId: req.user._id });
    if (!prog) {
      // create new progress doc if missing
      prog = await UserProgress.create({
        userId: req.user._id,
        completedLectures: [],
        passedQuizzes: passed ? [quiz._id] : [],
        unlockedLectureOrder: passed ? 0 : 0,
        unlockedQuizOrder: passed ? (quiz.order || 0) : 0,
        updatedAt: new Date()
      });
    } else {
      if (passed) {
        if (!prog.passedQuizzes.map(String).includes(String(quiz._id))) {
          prog.passedQuizzes.push(quiz._id);
        }
      }
      prog.updatedAt = new Date();
    }

    // if passed -> unlock next lecture (lecture.order + 1)
    if (passed) {
      const lecture = await Lecture.findById(quiz.lectureId).lean();
      if (lecture) {
        const nextLecture = await Lecture.findOne({ courseId: lecture.courseId, order: lecture.order + 1 }).lean();
        if (nextLecture) {
          prog.unlockedLectureOrder = Math.max(prog.unlockedLectureOrder || 0, nextLecture.order);
        }
      }
      await prog.save();
    } else {
      await prog.save();
    }

    res.json({ ok: true, percent, passed, progress: prog });
  } catch (err) {
    console.error('Error in POST /quizzes/:id/submit', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * Admin helper endpoints (optional)
 * POST /api/learning/lectures  -> create lecture
 * POST /api/learning/quizzes   -> create quiz
 * (Protect these or add admin-only checks in production.)
 */
router.post('/lectures', protectRoute, async (req, res) => {
  try {
    const data = req.body;
    const lecture = await Lecture.create(data);
    res.json({ ok: true, lecture });
  } catch (err) {
    console.error('Error creating lecture:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/quizzes', protectRoute, async (req, res) => {
  try {
    const data = req.body;
    const quiz = await Quiz.create(data);
    res.json({ ok: true, quiz });
  } catch (err) {
    console.error('Error creating quiz:', err);
    res.status(500).json({ message: 'Server error' });
  }
});
// GET /api/learning/quizzes/:id
router.get('/quizzes/:id', protectRoute, async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid quiz id" });
    }

    const quiz = await Quiz.findById(id).lean();
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.json({ quiz });
  } catch (err) {
    console.error("Error in GET /api/learning/quizzes/:id", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
