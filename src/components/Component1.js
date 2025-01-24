import PropTypes from "prop-types";

const Component1 = ({ className = "", variant = 1, text = "HOME" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start text-left text-[1.125rem] text-gray-100 font-poppins ${className}`}
      data-variant={variant}
    >
      <div className="relative leading-[1.688rem] uppercase font-medium">
        {text}
      </div>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Variant props */
  variant: PropTypes.number,
};

export default Component1;
