import { useMemo } from "react";
import PropTypes from "prop-types";

const Container = ({
  className = "",
  containerFlex,
  containerPadding,
  frameDivPadding,
  component1,
  millionHeadingPadding,
  heading322000,
  heading3Display,
  heading3MinWidth,
  villagesCovered,
  millionHeadingContainerPadding,
}) => {
  const containerStyle = useMemo(() => {
    return {
      flex: containerFlex,
      padding: containerPadding,
    };
  }, [containerFlex, containerPadding]);

  const millionHeadingStyle = useMemo(() => {
    return {
      padding: millionHeadingPadding,
    };
  }, [millionHeadingPadding]);

  const heading3Style = useMemo(() => {
    return {
      display: heading3Display,
      minWidth: heading3MinWidth,
    };
  }, [heading3Display, heading3MinWidth]);

  const millionHeadingContainerStyle = useMemo(() => {
    return {
      padding: millionHeadingContainerPadding,
    };
  }, [millionHeadingContainerPadding]);

  return (
    <div
      className={`self-stretch flex-[0.8708] flex flex-col items-start justify-start pt-[0rem] pb-[0.937rem] pl-[5.5rem] pr-[5.437rem] box-border gap-[0.468rem] max-w-[82.5rem] text-left text-[1.875rem] text-gray-100 font-poppins mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq450:flex-1 mq1350:max-w-full ${className}`}
      style={containerStyle}
    >
      <div
        className="self-stretch flex-1 flex flex-row items-start justify-start py-[0rem] px-[1.5rem]"
        style={millionHeadingStyle}
      >
        <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start relative max-w-[6.563rem]">
          <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start max-w-[6.563rem]">
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-center">
              <div className="self-stretch h-[6.563rem] relative overflow-hidden shrink-0 hidden" />
            </div>
          </div>
          <div className="w-[120rem] !m-[0] absolute right-[-113.437rem] bottom-[-68.437rem] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[68.437rem] box-border min-w-[120rem] max-w-[120rem] min-h-[75rem] max-h-[75rem] z-[1]">
            <div className="overflow-hidden flex flex-row items-start justify-start">
              <img
                className="h-[6.563rem] w-[6.563rem] relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src={component1}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-start justify-start py-[0rem] px-[1rem]"
        style={millionHeadingContainerStyle}
      >
        <b
          className="relative leading-[2.25rem] inline-block min-w-[7.625rem] mq450:text-[1.125rem] mq450:leading-[1.375rem] mq925:text-[1.5rem] mq925:leading-[1.813rem]"
          style={heading3Style}
        >
          {heading322000}
        </b>
      </div>
      <div className="self-stretch relative text-[1.125rem] leading-[1.688rem] font-medium text-dimgray text-center">
        {villagesCovered}
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  component1: PropTypes.string,
  heading322000: PropTypes.string,
  villagesCovered: PropTypes.string,

  /** Style props */
  containerFlex: PropTypes.string,
  containerPadding: PropTypes.string,
  frameDivPadding: PropTypes.string,
  millionHeadingPadding: PropTypes.string,
  heading3Display: PropTypes.string,
  heading3MinWidth: PropTypes.string,
  millionHeadingContainerPadding: PropTypes.string,
};

export default Container;
