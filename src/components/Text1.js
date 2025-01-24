import PropTypes from "prop-types";

const Text1 = ({ className = "", text = "We ship within 2 working days" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start text-left text-[1rem] text-text-default-secondary font-body-link ${className}`}
    >
      <div className="relative leading-[140%]">{text}</div>
    </div>
  );
};

Text1.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Text1;
