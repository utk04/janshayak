// import Section1 from "./Section1";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  const items = [
    { src: "/image-1@2x.png", text: "Assisted Tech Model" },
    { src: "/image-2@2x.png", text: "Market Place Updates" },
    { src: "/image-3@2x.png", text: "Community Support" },
    { src: "/image-4@2x.png", text: "Innovative Solutions" },
  ];
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-[0rem] px-[18.75rem] box-border max-w-full text-left text-[2.344rem] text-slategray font-poppins mq925:pl-[4.688rem] mq925:pr-[4.688rem] mq925:box-border mq1350:pl-[9.375rem] mq1350:pr-[9.375rem] mq1350:box-border ${className}`}
    >
      {/* <Section1 /> */}
      <div
      className={`flex w-[100%] h-[18rem] bg-background-default-default flex-row items-start justify-between p-[1rem]  text-left text-slategray font-poppins ${className}`}
    >
      {/* "Who We Are" Section */}
      <div className="flex-1 flex flex-col ">
        <h2 className="text-[1.5rem] font-bold text-gray-800">Who We Are</h2>
        <p className="text-[1rem] leading-[1.75rem] font-light text-dimgray">
          We empower individuals with AI-driven financial tools, personalized
          education, and a supportive community. Our platform simplifies
          financial planning, micro-investments, and budgeting, fostering
          independence and confidence for a secure future.
        </p>
      </div>

      {/* "Pillars of Our Strength" Section */}
      <div className="flex-1 flex flex-col items-center gap-[1.5rem] text-center">
        <h2 className="text-[1.5rem] font-bold text-gray-800">
          Pillars of Our Strength
        </h2>
        <div className="flex flex-row items-center ">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full max-w-[11rem]"
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
