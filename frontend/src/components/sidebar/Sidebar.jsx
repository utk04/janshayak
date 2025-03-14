import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";
import { ArrowLeftCircleIcon } from 'lucide-react';

const Sidebar = () => {
	const navigate = useNavigate();
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<div
            onClick={() => navigate(-1)} 
            className="fixed top-80 left-4 cursor-pointer p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg 
                       hover:scale-110 transition-transform duration-200 hover:shadow-xl"
        >
            <ArrowLeftCircleIcon className="text-white w-8 h-8" />
        </div>
		</div>
	);
};
export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
