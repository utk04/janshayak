import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  const items = [
    { src: "/image-1@2x.png", text: "Assisted Tech Model" },
    { src: "/image-2@2x.png", text: "Market Place Updates" },
    { src: "/image-3@2x.png", text: "Community Support" },
    { src: "/image-4@2x.png", text: "Innovative Solutions" },
  ];

  const fullText =
    "We empower individuals with AI-driven financial tools, personalized education, and a supportive community. Our platform simplifies financial planning, micro-investments, and budgeting, fostering independence and confidence for a secure future.";

  const [isReadMore, setIsReadMore] = useState(false);
  const [wordLimit, setWordLimit] = useState(20);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);

    if (window.innerWidth < 800) {
      setWordLimit(10);
    } else if (window.innerWidth < 885) {
      setWordLimit(20);
    } else {
      setWordLimit(fullText.split(" ").length);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial values
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={`self-stretch flex flex-col md:flex-row items-start justify-start py-[0rem] px-[18.75rem] box-border max-w-full text-left text-[2.344rem] text-slategray font-poppins 
        mq925:pl-[4.688rem] mq925:pr-[4.688rem] mq925:box-border mq1350:pl-[9.375rem] mq1350:pr-[9.375rem] mq1350:box-border ${className}`}
    >
      <div
        className={`flex w-full bg-background-default-default flex-row items-start justify-between p-[1rem] text-left text-slategray font-poppins ${className}`}
      >
        {/* "Who We Are" Section (Hidden Below 768px) */}
        {!isSmallScreen && (
          <div className="flex-1 flex flex-col">
            <h2 className="text-[1.5rem] font-bold text-gray-800">Who We Are</h2>
            <p className="text-[1rem] leading-[1.75rem] font-light text-dimgray">
              {!isReadMore ? fullText.split(" ").slice(0, wordLimit).join(" ") + "..." : fullText}
              {wordLimit < fullText.split(" ").length && (
                <span
                  style={{
                    color: "#12b8c8",
                    textTransform: "capitalize",
                    cursor: "pointer",
                    marginLeft: "8px",
                  }}
                  onClick={toggleReadMore}
                >
                  {isReadMore ? " Show Less" : " Read More"}
                </span>
              )}
            </p>
          </div>
        )}

        {/* "Pillars of Our Strength" Section (Takes Full Width Below 768px) */}
        <div
          className={`flex-1 flex flex-col items-center gap-[1.5rem] text-center ${
            isSmallScreen ? "w-full" : ""
          }`}
        >
          <h2 className="text-[1.5rem] font-bold text-gray-800">
            Pillars of Our Strength
          </h2>
          <div
            className={`flex items-center ${
              isSmallScreen ? "flex-wrap justify-center gap-6" : "flex-row justify-between w-full"
            }`}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center max-w-[11rem] mx-2"
              >
                <img
                  className="w-[6rem] h-auto object-cover rounded-md"
                  src={item.src}
                  alt={item.text}
                />
                <p className="text-[1rem] font-medium text-gray-800">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
