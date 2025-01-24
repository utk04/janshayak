import PropTypes from "prop-types";

const InputField = ({
  className = "",
  state = "Default",
  valueType = "Placeholder",
  value = "Value",
  description = "Description",
  hasDescription = false,
  error = "Error",
  hasLabel = true,
  label = "expenditure",
  hasError = false,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-space-200 text-left text-[1rem] text-text-default-default font-body-link ${className}`}
      data-state={state}
      data-valueType={valueType}
    >
      {hasLabel && (
        <div className="self-stretch relative leading-[140%]">{label}</div>
      )}
      {hasDescription && (
        <div className="w-[15rem] relative leading-[140%] text-text-default-secondary">
          {description}
        </div>
      )}
      <div className="self-stretch rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start py-space-300 px-space-400 min-w-[15rem]">
        <input
          className="w-full [border:none] [outline:none] font-body-link text-[1rem] bg-[transparent] flex-1 relative leading-[100%] text-icon-default-tertiary text-left inline-block"
          placeholder="Value"
          type="text"
        />
      </div>
      {hasError && <div className="relative leading-[140%]">{error}</div>}
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  hasDescription: PropTypes.bool,
  error: PropTypes.string,
  hasLabel: PropTypes.bool,
  label: PropTypes.string,
  hasError: PropTypes.bool,

  /** Variant props */
  state: PropTypes.number,
  valueType: PropTypes.number,
};

export default InputField;
