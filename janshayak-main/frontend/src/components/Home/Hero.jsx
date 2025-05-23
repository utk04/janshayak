import Menu from "./Nav";
import PropTypes from "prop-types";
import '../../styles/style.css'; 
import { useAuthContext } from "../../context/AuthContext";  // Import useAuthContext

const InvestorLogos = ({ className = "" }) => {
  const { authUser } = useAuthContext(); // Extract authUser from context

  return (
    <div className={`flex flex-col max-w-full text-[2.5rem] text-aquamarine-100 font-body-link ${className}`}>
      <div className="bg-cadetblue overflow-hidden flex flex-col sm:flex-row pl-[1.5rem] max-w-full h-[32rem]">
        
        {/* Left Section (Text) */}
        <div className="flex flex-col items-center sm:items-start justify-center w-full sm:w-1/2 pt-[4.5rem] px-4 box-border">
          
          {/* Welcome Message */}
          <div className="w-full flex flex-col items-center sm:items-start justify-center mb-4">
            <p className='text-xl text-white font-semibold'>
              Welcome 👋 {authUser?.fullName || "Guest"} ,
            </p>
          </div>

          <div className="w-full flex flex-col items-center sm:items-start justify-center">
            <h1 className="m-0 text-inherit tracking-[-0.04em] font-black text-center sm:text-left logo-title">
              Empowering Knowledge, Simplifying Finances
              <div className="underline"></div>
            </h1>
            <h2 className="m-0 text-[1.5rem] tracking-[-0.04em] font-normal text-aquamarine-200 text-center sm:text-left pt-4">
              Your one-stop platform for AI-powered literacy tools and budget management.
            </h2>
          </div>

          {/* Button */}
          <div className="mt-12">
            <button className="cursor-pointer border-none py-4 px-6 bg-background-default-default w-[20rem] rounded-3xs text-[1.5rem] font-body-link text-gray-200 text-center hover:bg-gainsboro">
              <b>Get Started | Learn More</b>
            </button>
          </div>
        </div>

        {/* Right Section (Image) - Hidden below 640px */}
        <div className="hidden sm:flex relative bg-crimson w-1/2 justify-center items-center">
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
