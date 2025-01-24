import PropTypes from "prop-types";

const Component2 = ({ className = "", variant = 1, text = "click here" }) => {
  return (
    <div
      className={`h-[1.438rem] flex flex-col items-center justify-start shrink-0 text-center text-[0.938rem] text-royalblue font-poppins ${className}`}
      data-variant={variant}
    >
      <div className="relative leading-[1.406rem]">{text}</div>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Variant props */
  variant: PropTypes.number,
};

export default Component2;
