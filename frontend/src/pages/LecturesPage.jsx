// frontend/src/pages/LecturesPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LecturesPage() {
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

  const markComplete = async (lectureId) => {
    try {
      await axios.post(
        `/api/learning/lectures/${lectureId}/complete`,
        {},
        { withCredentials: true }
      );
      await fetchModule();
    } catch (err) {
      console.error("Error completing lecture:", err);
    }
  };

  if (loading) return <div className="p-6">Loading lectures...</div>;
  if (!module) return <div className="p-6">No module data.</div>;

  const { lectures = [], progress = {} } = module;

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#fef8f8] to-white p-8">
      <h2 className="text-3xl font-bold text-slategray mb-8 text-center">
        Daily Lectures
      </h2>

      {lectures.length === 0 ? (
        <p className="text-center text-gray-500">No lectures found.</p>
      ) : (
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {lectures.map((lec) => {
            const unlocked = progress.unlockedLectureOrder >= lec.order;
            const completed = progress.completedLectures.includes(lec._id);

            return (
              <div
                key={lec._id}
                className={`flex flex-row items-center rounded-xl shadow-md border bg-white overflow-hidden hover:shadow-lg transition ${
                  unlocked ? "border-cadetblue" : "border-gray-200"
                }`}
              >
                {/* Left section: video or placeholder */}
                <div className="w-64 h-40 bg-gray-100 flex items-center justify-center">
                  {unlocked && lec.videoUrl ? (
                    <video
                      controls
                      src={lec.videoUrl}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm">Locked</span>
                  )}
                </div>

                {/* Right section: text + button */}
                <div className="flex-1 p-4 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-slategray">
                      {lec.order}. {lec.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        completed
                          ? "bg-green-100 text-green-600"
                          : unlocked
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {completed
                        ? "Completed"
                        : unlocked
                        ? "Unlocked"
                        : "Locked"}
                    </span>
                  </div>

                  {lec.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {lec.description}
                    </p>
                  )}

                  {unlocked && !completed && (
                    <button
                      onClick={() => markComplete(lec._id)}
                      className="self-start bg-cadetblue text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
                    >
                      Mark Complete
                    </button>
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
