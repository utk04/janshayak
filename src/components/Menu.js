import PropTypes from "prop-types";
import { useState } from "react";

const Menu = ({ className = "" }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <div
      className={`relative w-full bg-cadetblue flex items-center justify-between py-[0.312rem] box-border text-center text-[1.5rem] border-2 text-fonts font-body-link ${className}`}
    >
      <h1 className="ml-4 relative text-inherit leading-[2.813rem] font-bold font-[inherit] opacity-[0.79]">
        JAN-SAHAYAK
      </h1>
      <div className="relative flex h-[4.063rem] items-center justify-center text-[1.25rem] font-montserrat pr-4">
        <div
          className="absolute bottom-0 left-0 h-[0.2rem] bg-lightgray transition-all duration-500"
          style={{
            width: hoverIndex >= 0 ? `calc(100% / 6)` : 0,
            transform: hoverIndex >= 0 ? `translateX(calc(100% * ${hoverIndex}))` : "none",
          }}
        ></div>
        {["Home", "About", "Content", "Expense", "Events"].map((item, index) => (
          <a
            key={index}
            className="relative px-4 py-2 mx-2 text-lightgray font-semibold leading-[1.75rem] [text-decoration:none] hover:text-white border-gray-300 border"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
          >
            {item}
          </a>
        ))}
        <img
          className="h-[3rem] w-[3rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/message-square.svg"
        />
      </div>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
