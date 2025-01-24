import PropTypes from "prop-types";

const SelectField = ({
  className = "",
  state = "Default",
  valueType = "Default",
  value = "Value",
  description = "Description",
  hasDescription = false,
  open1 = false,
  label = "type of",
  hasLabel = true,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start relative gap-space-200 text-left text-[1rem] text-text-default-default font-body-link ${className}`}
      data-state={state}
      data-valueType={valueType}
    >
      {hasLabel && (
        <div className="self-stretch relative leading-[140%] z-[0]">
          {label}
        </div>
      )}
      {hasDescription && (
        <div className="w-[15rem] relative leading-[140%] text-text-default-secondary z-[1]">
          {description}
        </div>
      )}
      <div className="self-stretch h-[2.563rem] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border flex flex-row items-center justify-start py-space-300 pl-space-400 pr-space-300 relative gap-space-200 min-w-[15rem] z-[2]">
        <div className="w-[13.75rem] relative leading-[100%] inline-block shrink-0 z-[0]">
          {value}
        </div>
        <img
          className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/chevron-down.svg"
        />
        {open1 && (
          <div className="!m-[0] absolute top-[0.5rem] left-[0.5rem] shadow-[0px_1px_4px_rgba(12,_12,_13,_0.1),_0px_1px_4px_rgba(12,_12,_13,_0.05)] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid flex flex-col items-start justify-start p-space-200 gap-space-200 z-[2]">
            <div className="w-[5.563rem] h-[1.375rem] relative leading-[140%] font-semibold inline-block">
              Hello World
            </div>
            <div className="w-[4.063rem] h-[1.375rem] relative leading-[140%] inline-block">
              Option 2
            </div>
            <div className="w-[4.125rem] h-[1.375rem] relative leading-[140%] inline-block">
              Option 3
            </div>
            <div className="w-[4.125rem] h-[1.375rem] relative leading-[140%] inline-block">
              Option 4
            </div>
            <div className="w-[4.063rem] h-[1.375rem] relative leading-[140%] inline-block">
              Option 5
            </div>
          </div>
        )}
      </div>
      <div className="!m-[0] absolute top-[0.5rem] left-[0.5rem] shadow-[0px_1px_4px_rgba(12,_12,_13,_0.1),_0px_1px_4px_rgba(12,_12,_13,_0.05)] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid hidden flex-col items-start justify-start p-padding-sm gap-space-200 z-[3]">
        <div className="w-[2.75rem] h-[1.375rem] relative leading-[140%] font-semibold inline-block">
          Value
        </div>
        <div className="w-[4.063rem] h-[1.375rem] relative leading-[140%] inline-block">
          Option 2
        </div>
        <div className="w-[4.125rem] h-[1.375rem] relative leading-[140%] inline-block">
          Option 3
        </div>
        <div className="w-[4.125rem] h-[1.375rem] relative leading-[140%] inline-block">
          Option 4
        </div>
        <div className="w-[4.063rem] h-[1.375rem] relative leading-[140%] inline-block">
          Option 5
        </div>
      </div>
    </div>
  );
};

SelectField.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  hasDescription: PropTypes.bool,
  open1: PropTypes.bool,
  label: PropTypes.string,
  hasLabel: PropTypes.bool,

  /** Variant props */
  state: PropTypes.number,
  valueType: PropTypes.number,
};

export default SelectField;
