import Menu from "../components/Menu";
import InvestorLogos from "../components/InvestorLogos";
import FrameComponent from "../components/FrameComponent";
import Background from "../components/Background";
import Section from "../components/Section";
import TechnologyContainer from "../components/TechnologyContainer";
import Section3 from "../components/Section3";
import InvestorLogos1 from "../components/InvestorLogos1";
import Footer from "../components/Footer";

const WLight = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#fef8f8] to-[#fff] overflow-hidden">
      <Menu/>
      <InvestorLogos />
      <FrameComponent />
      <Background />
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
      {/* <div className="flex flex-row items-start justify-start pt-[0rem] pb-[3.75rem] pl-[54.625rem] pr-[54.562rem] mq925:pl-[13.625rem] mq925:pr-[13.625rem] mq925:box-border mq1350:pl-[27.313rem] mq1350:pr-[27.25rem] mq1350:box-border">
        <div className="relative leading-[2.813rem] font-medium mq450:text-[1.375rem] mq450:leading-[1.688rem] mq925:text-[1.875rem] mq925:leading-[2.25rem]">
          Investors
        </div>
      </div> */}
      <InvestorLogos1 />
      <Footer />
    </div>
  );
};

export default WLight;
