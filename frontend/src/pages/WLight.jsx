// src/pages/WLight.jsx  (or wherever your WLight file lives)
import { useNavigate } from "react-router-dom";
import Menu from "../components/Home/Nav";
import InvestorLogos from "../components/Home/Hero";
import FrameComponent from "../components/Home/About";
import Background from "../components/Home/Literacy";
import Section from "../components/Home/Achievement";
import TechnologyContainer from "../components/Home/Business";
import Section3 from "../components/Home/Expense";
import InvestorLogos1 from "../components/Home/Investors";
import Footer from "../components/Home/Footer";

const WLight = () => {
  const navigate = useNavigate();

  const handleOpenLectures = () => {
    navigate("/lectures");
  };

  const handleOpenQuizzes = () => {
    navigate("/quizzes");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#fef8f8] to-[#fff] overflow-hidden">
      <Menu />
      <InvestorLogos />
      <FrameComponent />
      {/* Pass handlers so Background can navigate */}
      <Background onOpenLectures={handleOpenLectures} onOpenQuizzes={handleOpenQuizzes} />
      <Section />
      <TechnologyContainer />
      <section className="w-[92.063rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[20.837rem] box-border max-w-full text-left text-[2.344rem] text-slategray font-poppins mq925:pb-[13.563rem] mq925:box-border">
        <div className="w-[53.169rem] flex flex-col items-start justify-start gap-[6.068rem] max-w-full mq450:gap-[1.5rem] mq925:gap-[3.063rem]">
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[24.313rem] relative leading-[2.813rem] font-medium flex items-center shrink-0 max-w-full mq450:text-[1.375rem] mq450:leading-[1.688rem] mq925:text-[1.875rem] mq925:leading-[2.25rem]">
              Micro-Investments
            </div>
          </div>
          <h1 className="m-0 relative text-[2rem] tracking-[0.32px] leading-[1.5rem] font-bold font-[inherit] text-lightskyblue mq450:text-[1.188rem] mq450:leading-[0.875rem] mq925:text-[1.625rem] mq925:leading-[1.188rem]">
            VIKAS MAHAJAN
          </h1>
        </div>
      </section>
      <Section3 />
      <InvestorLogos1 />
      <Footer />
    </div>
  );
};

export default WLight;
