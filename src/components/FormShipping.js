import Text1 from "./Text1";
import InputField from "./InputField";
import SelectField from "./SelectField";
import ButtonGroup from "./ButtonGroup";
import PropTypes from "prop-types";

const FormShipping = ({ className = "" }) => {
  return (
    <form
      className={`m-0 h-[18.563rem] rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border flex flex-col items-start justify-start p-space-600 gap-space-600 min-w-[20rem] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-space-100">
        <h2 className="m-0 self-stretch relative text-[1.5rem] tracking-[-0.02em] leading-[120%] font-semibold font-body-link text-text-default-default text-left">
          Daily updation
        </h2>
        <Text1 text="We ship within 2 working days" />
      </div>
      <InputField
        state="Default"
        valueType="Placeholder"
        value="Value"
        description="Description"
        hasDescription={false}
        error="Error"
        hasLabel
        label="expenditure"
        hasError={false}
      />
      <SelectField
        state="Default"
        valueType="Default"
        value="Value"
        description="Description"
        hasDescription={false}
        open1={false}
        label="type of"
        hasLabel
      />
      <div className="w-[17rem] hidden flex-col items-start justify-start gap-space-200">
        <div className="w-[17rem] h-[1.375rem] relative text-[1rem] leading-[140%] font-body-link text-text-default-default text-left inline-block">
          Delivery note
        </div>
        <div className="w-[15rem] relative text-[1rem] leading-[140%] font-body-link text-text-default-secondary text-left hidden">
          Description
        </div>
        <div className="self-stretch rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start py-space-300 px-space-400 relative min-w-[15rem] min-h-[5rem]">
          <div className="h-[1.375rem] w-[15rem] relative text-[1rem] leading-[140%] font-body-link text-icon-default-tertiary text-left inline-block shrink-0 z-[0]">
            Value
          </div>
          <img
            className="w-[0.413rem] absolute !m-[0] right-[0.313rem] bottom-[0.375rem] h-[0.413rem] z-[1]"
            alt=""
            src="/drag.svg"
          />
        </div>
        <div className="w-[15rem] relative text-[1rem] leading-[140%] font-body-link text-text-default-secondary text-left hidden">
          Hint
        </div>
      </div>
      <div className="w-[17rem] hidden flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-center justify-start gap-space-300">
          <div className="w-[1rem] rounded-radius-100 bg-background-brand-default h-[1rem] overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <img
              className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
              alt=""
              src="/check.svg"
            />
          </div>
          <div className="h-[1.375rem] w-[15.25rem] relative text-[1rem] leading-[140%] font-body-link text-text-default-default text-left inline-block shrink-0">
            I accept the terms
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-space-300">
          <div className="w-[1rem] relative h-[1rem] overflow-hidden shrink-0" />
          <div className="h-[1.375rem] w-[15.25rem] relative text-[1rem] [text-decoration:underline] leading-[140%] font-body-link text-text-default-secondary text-left inline-block shrink-0">{`Read our T&Cs`}</div>
        </div>
      </div>
      <ButtonGroup align="Justify" buttonEnd buttonStart={false} />
    </form>
  );
};

FormShipping.propTypes = {
  className: PropTypes.string,
};

export default FormShipping;
