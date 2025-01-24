import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  size = "Medium",
  state = "Default",
  variant = "Primary",
  hasIconEnd = false,
  hasIconStart = false,
  label = "Save expenditure information",
  buttonFlex,
  buttonWidth,
  star,
  x,
  buttonEnd,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      flex: buttonFlex,
      width: buttonWidth,
    };
  }, [buttonFlex, buttonWidth]);

  return (
    <div
      className={`flex-1 rounded-radius-200 bg-background-brand-default border-background-brand-default border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200 text-left text-[1rem] text-text-brand-on-brand font-body-link data-[size='Medium']:data-[state='Default']:data-[variant='Subtle']:bg-[unset] data-[size='Medium']:data-[state='Default']:data-[variant='Subtle']:[border:unset] data-[size='Medium']:data-[state='Default']:data-[variant='Subtle']:hidden data-[size='Medium']:data-[state='Default']:data-[variant='Subtle']:box-border [&_.star-icon]:data-[size='Medium']:data-[state='Default']:data-[variant='Subtle']:hidden [&_.button1]:data-[size='Medium']:data-[state='Default']:data-[variant='Subtle']:text-text-neutral-default [&_.button1]:data-[size='Medium']:data-[state='Default']:data-[variant='Subtle']:h-[1rem] [&_.button1]:data-[size='Medium']:data-[state='Default']:data-[variant='Subtle']:w-[3.188rem] [&_.button1]:data-[size='Medium']:data-[state='Default']:data-[variant='Subtle']:inline-block [&_.x-icon]:data-[size='Medium']:data-[state='Default']:data-[variant='Subtle']:hidden ${className}`}
      data-size={size}
      data-state={state}
      data-variant={variant}
      style={buttonStyle}
    >
      {hasIconStart && (
        <img
          className="star-icon w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
          alt=""
          src={star}
        />
      )}
      <div className="button1 relative leading-[100%]">{label}</div>
      {hasIconEnd && (
        <img
          className="x-icon w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
          alt=""
          src={x}
        />
      )}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  hasIconEnd: PropTypes.bool,
  hasIconStart: PropTypes.bool,
  label: PropTypes.string,
  star: PropTypes.string,
  x: PropTypes.string,
  buttonEnd: PropTypes.bool,

  /** Variant props */
  size: PropTypes.number,
  state: PropTypes.number,
  variant: PropTypes.string,

  /** Style props */
  buttonFlex: PropTypes.string,
  buttonWidth: PropTypes.string,
};

export default Button;
