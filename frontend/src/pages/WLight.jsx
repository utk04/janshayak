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
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#fef8f8] to-[#fff] overflow-hidden">
      <Menu/>
      <InvestorLogos />
      <FrameComponent />
      <Background />
      <Section />
      <TechnologyContainer />
<section className="w-full flex items-center justify-center py-20 px-6 bg-white text-center text-[2.344rem] text-slate-600 font-poppins">
  <div className="max-w-4xl w-full flex flex-col items-center justify-center gap-12 sm:gap-6">
    
    {/* Title */}
    <div className="text-4xl font-semibold leading-tight text-slate-700 sm:text-2xl">
      Micro-Investments
    </div>

    {/* Coming Soon */}
    <div className="bg-gradient-to-r from-lightskyblue to-sky-400 text-white text-3xl sm:text-xl px-8 py-6 rounded-2xl shadow-lg font-bold tracking-wide">
      Coming Soon...
    </div>

  </div>
</section>
      <Section3 />
      <InvestorLogos1 />
      <Footer />
    </div>
  );
};

export default WLight;
