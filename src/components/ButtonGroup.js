import Button from "./Button";
import PropTypes from "prop-types";

const ButtonGroup = ({
  className = "",
  align = "Start",
  buttonEnd = true,
  buttonStart = false,
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-space-400 ${className}`}
      data-align={align}
    >
      {buttonStart && (
        <Button
          size="Medium"
          state="Default"
          variant="Subtle"
          hasIconEnd={false}
          hasIconStart={false}
          label="Button"
          buttonFlex="unset"
          buttonWidth="7rem"
          star="/star.svg"
          x="/x.svg"
          buttonEnd={false}
        />
      )}
      {buttonEnd && (
        <Button
          size="Medium"
          state="Default"
          variant="Primary"
          hasIconEnd={false}
          hasIconStart={false}
          label="Save expenditure information"
          star="/star1.svg"
          x="/x1.svg"
          buttonEnd
        />
      )}
    </button>
  );
};

ButtonGroup.propTypes = {
  className: PropTypes.string,
  buttonEnd: PropTypes.bool,
  buttonStart: PropTypes.bool,

  /** Variant props */
  align: PropTypes.number,
};

export default ButtonGroup;
