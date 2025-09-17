// // frontend/src/pages/ModulePage.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ModulePage = () => {
//   const [module, setModule] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [submittingQuizId, setSubmittingQuizId] = useState(null);

//   const fetchModule = async () => {
//     try {
//       console.log("[ModulePage] fetching /api/learning/module/all");
//       const res = await axios.get("/api/learning/module/all", {
//         withCredentials: true,
//       });
//       setModule(res.data);
//       console.log("[ModulePage] response data:", res.data);
//     } catch (err) {
//       console.error("Error fetching module:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchModule();
//   }, []);

//   const markComplete = async (lectureId) => {
//     try {
//       await axios.post(
//         `/api/learning/lectures/${lectureId}/complete`,
//         {},
//         { withCredentials: true }
//       );
//       await fetchModule();
//     } catch (err) {
//       console.error("Error completing lecture:", err);
//     }
//   };

//   const autoPassQuiz = async (quizId) => {
//     try {
//       setSubmittingQuizId(quizId);
//       // fetch quiz details
//       const details = await axios.get(`/api/learning/quizzes/${quizId}`, {
//         withCredentials: true,
//       });
//       const quiz = details.data.quiz;

//       if (!quiz || !Array.isArray(quiz.questions)) {
//         alert("Quiz data not available");
//         return;
//       }

//       // build correct answers
//       const answers = quiz.questions.map((q, idx) => ({
//         questionIndex: idx,
//         answerIndex: q.correctAnswerIndex,
//       }));

//       // submit
//       const res = await axios.post(
//         `/api/learning/quizzes/${quizId}/submit`,
//         { answers },
//         { withCredentials: true }
//       );

//       alert(
//         `Quiz submitted. Passed: ${res.data.passed}, Percent: ${res.data.percent}`
//       );
//       await fetchModule();
//     } catch (err) {
//       console.error("autoPassQuiz error", err);
//       alert("Error submitting quiz: " + (err?.response?.data?.message || err.message));
//     } finally {
//       setSubmittingQuizId(null);
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (!module) return <div>No module data found</div>;

//   const { lectures, quizzes, progress } = module;

//   return (
//     <div style={{ padding: "1rem" }}>
//       <h2>Interactive Literacy Module</h2>

//       {/* Lectures Section */}
//       <h3>Lectures</h3>
//       {lectures.length === 0 && <p>No lectures found.</p>}
//       {lectures.map((lec) => (
//         <div
//           key={lec._id}
//           style={{
//             border: "1px solid #ccc",
//             padding: 12,
//             marginBottom: 16,
//             borderRadius: 8,
//           }}
//         >
//           <div>
//             <b>{lec.title}</b> (Order {lec.order}) — Unlocked:{" "}
//             {progress.unlockedLectureOrder >= lec.order ? "Yes" : "No"}
//           </div>

//           {/* Show video if unlocked */}
//           {progress.unlockedLectureOrder >= lec.order && (
//             <video
//               src={lec.videoUrl}
//               controls
//               style={{
//                 width: "100%",
//                 maxWidth: "600px",
//                 marginTop: "8px",
//                 borderRadius: "6px",
//               }}
//             />
//           )}

//           {/* Mark Complete button */}
//           {progress.unlockedLectureOrder >= lec.order &&
//             !progress.completedLectures.includes(lec._id) && (
//               <button
//                 onClick={() => markComplete(lec._id)}
//                 style={{ marginTop: 8 }}
//               >
//                 Mark Complete
//               </button>
//             )}
//         </div>
//       ))}

//       {/* Quizzes Section */}
//       <h3>Quizzes</h3>
//       {quizzes.length === 0 && <p>No quizzes found.</p>}
//       {quizzes.map((quiz) => (
//         <div
//           key={quiz._id}
//           style={{
//             border: "1px solid #ccc",
//             padding: 12,
//             marginBottom: 16,
//             borderRadius: 8,
//           }}
//         >
//           <div>
//             <b>{quiz.title}</b> (Order {quiz.order}) — Unlocked:{" "}
//             {progress.unlockedQuizOrder >= quiz.order ? "Yes" : "No"}
//           </div>

//           {progress.unlockedQuizOrder >= quiz.order && (
//             <button
//               disabled={submittingQuizId === quiz._id}
//               onClick={() => autoPassQuiz(quiz._id)}
//               style={{ marginTop: 8 }}
//             >
//               {submittingQuizId === quiz._id
//                 ? "Submitting..."
//                 : "Start Quiz (auto-pass)"}
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ModulePage;
