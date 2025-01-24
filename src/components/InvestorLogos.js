import Menu from "./Menu";
import PropTypes from "prop-types";
import '../styles/style.css';  // Ensure you have the style.css file imported

const InvestorLogos = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col max-w-full text-[2.5rem] text-aquamarine-100 font-body-link ${className}`}
    >
      <div className="bg-cadetblue overflow-hidden flex pl-[1.5rem] max-w-full h-[32rem]">
        <div className="flex flex-col items-start justify-start pt-[4.5rem] box-border w-[45rem]">
          <div className="w-full overflow-hidden flex flex-col items-center justify-center">
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[1.5rem] max-w-full">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.04em] font-black font-[inherit] inline-block pt-2 logo-title">
                  Empowering Knowledge, Simplifying Finances
                  <div className="underline"></div>
                </h1>
              </div>
              <h2 className="m-0 h-[3.625rem] relative text-[1.5rem] tracking-[-0.04em] font-normal font-[inherit] text-aquamarine-200 inline-block shrink-0 mq450:text-[1.188rem] pt-4">
                Your one-stop platform for AI-powered literacy tools and budget
                management.
              </h2>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start mt-12">
              <button className="cursor-pointer [border:none] py-[1.5rem] px-[1.437rem] bg-background-default-default w-[20rem] rounded-3xs overflow-hidden shrink-0 flex flex-row items-center justify-center box-border max-w-[20rem] hover:bg-gainsboro">
                <b className="flex-1 relative text-[1.5rem] tracking-[-0.04em] font-body-link text-gray-200 text-center">
                  Get Started | Learn More
                </b>
              </button>
            </div>
          </div>
        </div>
        <div className="flex relative bg-crimson w-1/2 justify-center items-center">
        <div className="m-4 p-4 flex justify-center items-center">
          <img
            className="max-w-full max-h-full object-contain"
            loading="lazy"
            alt="Empowering Knowledge"
            src="/image-110@2x.png"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

InvestorLogos.propTypes = {
  className: PropTypes.string,
};

export default InvestorLogos;
