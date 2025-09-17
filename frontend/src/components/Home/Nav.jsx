import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import { Mail } from "lucide-react"; // ✅ Import Mail icon from lucide-react
import LogoutButton from "../sidebar/LogoutButton";

const Menu = ({ className = "" }) => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const scrollToContent = () => {
    if (pathname !== "/") {
      navigate("/");
    }

    if (pathname === "/" && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    scrollToContent();
  };

  return (
    <div
      className={`flex items-center sticky top-0 w-full justify-between px-6 md:px-8 z-50 ${
        pathname !== "/" ? "bg-[#F9EFDB] text-black" : "bg-black text-white"
      } backdrop-blur-sm max-h-min transition-all duration-300`}
    >
      {/* Logo */}
      <NavLink to="/" className="flex justify-center items-center space-x-2 my-2">
        <div
          className={`relative min-w-fit mt-[-1px] pl-2 font-bold ${
            pathname !== "/" ? "text-black" : "text-white"
          } text-[1.2rem] md:text-[1.4rem] text-center leading-[19px] space-y-1 flex-col items-center justify-center`}
        >
          <div className="font-bold flex justify-center content-center">JANSAHAYAK</div>
          <div className={`w-full border ${pathname !== "/" ? "border-black" : "border-white"}`} />
        </div>
      </NavLink>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center gap-[1rem] mr-10 my-2">
        <NavLink
          to="/"
          className="relative w-fit font-semibold text-lightgray text-[1.2rem] md:text-[1.4rem] tracking-[-1.5px] leading-[28px] whitespace-nowrap border-r border-gray-500 pr-4"
        >
          Home
        </NavLink>
        <NavLink
          to="/OfficeBearer"
          className="relative w-fit font-semibold text-lightgray text-[1.2rem] md:text-[1.4rem] tracking-[-1.5px] leading-[28px] whitespace-nowrap border-r border-gray-500 pr-4"
        >
          Content
        </NavLink>
        <NavLink
          to="/"
          onClick={handleClick}
          className="relative w-fit font-semibold text-lightgray text-[1.2rem] md:text-[1.4rem] tracking-[-1.5px] leading-[28px] whitespace-nowrap border-r border-gray-500 pr-4 cursor-pointer"
        >
          Expense
        </NavLink>
        <NavLink
          to="/Events"
          className="relative w-fit font-semibold text-lightgray text-[1.2rem] md:text-[1.4rem] tracking-[-1.5px] leading-[28px] whitespace-nowrap border-r border-gray-500 pr-4"
        >
          Events
        </NavLink>

        {/* Inbox Icon Button */}
        <NavLink to="/inbox" className="p-2 rounded-full hover:bg-gray-200 transition">
          <Mail className="w-6 h-6 text-gray-700" />
        </NavLink>
      <LogoutButton/>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden relative mr-10">
        <Hamburger toggled={isOpen} toggle={setOpen} aria-expanded={isOpen} />

        {isOpen && (
          <ul className="absolute right-0 bg-white shadow-lg text-black px-6 py-2 rounded-lg mt-2 transition-opacity duration-300">
            <li className="py-1 font-semibold text-[1rem] tracking-[-1px]">
              <NavLink to="/" onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>
            <li className="py-1 font-semibold text-[1rem] tracking-[-1px]">
              <NavLink to="/OfficeBearer" onClick={() => setOpen(false)}>
                Office Bearers
              </NavLink>
            </li>
            <li className="py-1 font-semibold text-[1rem] tracking-[-1px] cursor-pointer" onClick={handleClick}>
              Sports
            </li>
            <li className="py-1 font-semibold text-[1rem] tracking-[-1px]">
              <NavLink to="/Events" onClick={() => setOpen(false)}>
                Events
              </NavLink>
            </li>

            {/* Inbox for Mobile */}
            <li className="py-1 font-semibold text-[1rem] tracking-[-1px] flex items-center">
              <NavLink to="/inbox" onClick={() => setOpen(false)} className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-black" />
                Inbox
              </NavLink>
            </li>
            <li><LogoutButton/></li>
          </ul>
        )}
      </div>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
