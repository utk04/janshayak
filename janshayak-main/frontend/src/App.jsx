import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Landing from "./pages/WLight";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import LecturesPage from "./pages/LecturesPage";
import QuizzesPage from "./pages/QuizzesPage";function App() {
	const { authUser } = useAuthContext();
	return (
		<div className=' min-h-screen flex items-center justify-center overflow-auto'>
			<Routes>
				<Route path='/' element={authUser ? <Landing/> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
				<Route path='/inbox' element={<Home />} />
				<Route path='/lectures' element={<LecturesPage />} />
      			<Route path='/quizzes' element={<QuizzesPage />} />	
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
