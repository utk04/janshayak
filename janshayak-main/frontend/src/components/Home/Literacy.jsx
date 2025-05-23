import PropTypes from "prop-types";

const Background = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch rounded-11xl bg-cadetblue flex flex-row items-start justify-center pt-[1.812rem] px-[1.25rem] box-border max-w-full z-[2] text-center text-[2.244rem] text-slategray font-poppins mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border mq925:pt-[1.813rem] mq925:pb-[1.813rem] mq925:box-border ${className}`}
    >
      <div className=" flex flex-col items-end justify-start pt-[0.006rem]  pl-[0.687rem] pr-[1.437rem] box-border gap-[3.268rem] max-w-[82.5rem] mq450:gap-[1.063rem] mq925:gap-[2.125rem] mq1350:max-w-full">
        <div className="w-[79.469rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[47.431rem] flex flex-col items-start justify-start gap-[1rem] max-w-full">
            <div className="w-[46.019rem] flex flex-row items-start justify-start py-[0rem]  box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq925:pl-[2.938rem] mq925:pr-[2.875rem] mq925:box-border">
              <div className="flex-1 relative leading-[2.813rem] font-medium inline-block max-w-full mq450:text-[1.375rem] mq450:leading-[1.688rem] mq925:text-[1.875rem] mq925:leading-[2.25rem]">
                Interactive Literacy Modules
              </div>
            </div>
            <h3 className="m-0 relative text-[1.2rem] leading-[1.688rem] font-normal font-[inherit] text-gray-100 mq450:text-[1.063rem] mq450:leading-[1.375rem]">
              Engaging quizzes and gamified videos unlock essential knowledge on
              saving, budgeting, and investments.
            </h3>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] max-w-full text-left text-[1.175rem] text-gray-100 mq1350:flex-wrap">
          <div className="h-[31rem] flex-1 overflow-hidden flex flex-row items-start justify-start relative max-w-[38.25rem] mq925:max-w-full mq925:min-w-full">
            <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start max-w-[38.844rem] mq925:max-w-full">
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-center max-w-full">
                <div className="self-stretch h-[34.119rem] relative overflow-hidden shrink-0 hidden" />
              </div>
            </div>
            <img
              className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.844rem] px-[0rem] pb-[0rem] box-border max-w-full mq925:min-w-full mq1350:flex-1">
  {[
    {
      imageSrc: "/image-5@2x.png",
      title: "Daily Lectures",
      description: [
        "Customer onboarding | Policy download | Payment collection | Claim processing | SMS notification"
      ]
    },
    {
      imageSrc: "/image-6@2x.png",
      title: "Quizes",
      description: [
        "Village level entrepreneurs | Social impact organisations | Financial inclusion agencies | Not for profit organisations Foundations & Government bodies"
      ]
    },
    {
      imageSrc: "/image-7@2x.png",
      title: "Govt Schemes Updates",
      description: [
        "Direct document upload & processing API integration with Insurance companies"
      ]
    },
    {
      imageSrc: "/image-8@2x.png",
      title: "Personalized mentorship",
      description: [
        "Interactive dashboard for insurance companies Real-time updates,reports & insights"
      ]
    }
  ].map((section, index) => (
    <div key={index} className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0rem] pr-[0rem] box-border max-w-full cursor-pointer">
      <div className="flex-1 flex flex-row items-start justify-start gap-[1.7rem] max-w-full mq925:flex-wrap m-1 p-2">
      <div className="h-[4rem] w-[4rem] overflow-hidden shrink-0 flex items-center justify-center relative max-w-[5.5rem]">
  <div className="h-full w-full flex items-center justify-center">
    <img
      className="h-full w-full object-contain"
      alt=""
      src={section.imageSrc}
    />
  </div>
</div>

        <div className="flex-1 flex flex-col items-start justify-start gap-[0.418rem] min-w-[20.375rem] max-w-full">
          <div className="w-auto relative leading-[1.406rem] font-medium flex items-center">
            {section.title}
          </div>
          <div className="relative text-[0.938rem] leading-[1.406rem]">
            {section.description.map((line, i) => (
              <p key={i} className="m-0">{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
