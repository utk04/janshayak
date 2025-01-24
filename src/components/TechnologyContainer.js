import Section2 from "./Section2";
import PropTypes from "prop-types";

const TechnologyContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2.831rem] box-border max-w-full text-center text-[2.344rem] text-gray-100 font-poppins mq925:pb-[1.25rem] mq925:box-border mq1350:pb-[1.813rem] mq1350:box-border ${className}`}
    >
      <Section2 />
    </section>
  );
};

TechnologyContainer.propTypes = {
  className: PropTypes.string,
};

export default TechnologyContainer;
