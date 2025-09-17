// frontend/src/pages/QuizzesPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function QuizzesPage() {
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchModule = async () => {
    try {
      const res = await axios.get("/api/learning/module/all", {
        withCredentials: true,
      });
      setModule(res.data);
    } catch (err) {
      console.error("fetch module error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModule();
  }, []);

  const autoPassQuiz = async (quizId) => {
    try {
      const res = await axios.post(
        `/api/learning/quizzes/${quizId}/submit`,
        { autoPass: true }, // quick flow for now
        { withCredentials: true }
      );
      alert(`Quiz submitted. Passed: ${res.data.passed}`);
      await fetchModule();
    } catch (err) {
      console.error("Error submitting quiz:", err);
    }
  };

  if (loading) return <div className="p-6">Loading quizzes...</div>;
  if (!module) return <div className="p-6">No module data.</div>;

  const { quizzes = [], progress = {} } = module;

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#fef8f8] to-white p-8">
      <h2 className="text-3xl font-bold text-slategray mb-8 text-center">
        Quizzes
      </h2>

      {quizzes.length === 0 ? (
        <p className="text-center text-gray-500">No quizzes found.</p>
      ) : (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {quizzes.map((quiz) => {
            const unlocked = progress.unlockedQuizOrder >= quiz.order;
            const passed = progress.passedQuizzes.includes(quiz._id);

            return (
              <div
                key={quiz._id}
                className={`flex flex-row items-center rounded-xl shadow-md border bg-white hover:shadow-lg transition ${
                  unlocked ? "border-cadetblue" : "border-gray-200"
                }`}
              >
                {/* Left section: quiz icon */}
                <div className="w-32 h-28 bg-gradient-to-br from-cadetblue/20 to-blue-100 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>

                {/* Right section */}
                <div className="flex-1 p-4 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-slategray">
                      {quiz.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        passed
                          ? "bg-green-100 text-green-600"
                          : unlocked
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {passed ? "Passed" : unlocked ? "Unlocked" : "Locked"}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">
                    Requires: Lecture {quiz.order}
                  </p>

                  {unlocked && !passed && (
                    <button
                      onClick={() => autoPassQuiz(quiz._id)}
                      className="self-start bg-cadetblue text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
                    >
                      Start Quiz
                    </button>
                  )}
                  {passed && (
                    <p className="text-sm text-green-600 font-medium">
                      ✅ You passed this quiz
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
