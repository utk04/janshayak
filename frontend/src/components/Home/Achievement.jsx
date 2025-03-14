import Container from "./AchieveCont";
import PropTypes from "prop-types";

const Section = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-snow flex flex-row items-start justify-center py-[2.812rem] px-[1.25rem] box-border max-w-full z-[1] text-left text-[1.313rem] text-dimgray font-poppins mq450:pt-[1.813rem] mq450:pb-[1.813rem] mq450:box-border ${className}`}
    >
      <div className="w-[82.5rem] flex flex-col items-start justify-start pt-[2.1rem] px-[0rem] pb-[0rem] box-border gap-[4.462rem] max-w-[82.5rem] mq450:gap-[1.125rem] mq925:gap-[2.25rem] mq1350:max-w-full">
        <div className="flex flex-row items-start justify-start py-[0rem] pl-[7.437rem] pr-[7.312rem] mq925:pl-[1.813rem] mq925:pr-[1.813rem] mq925:box-border mq1350:pl-[3.688rem] mq1350:pr-[3.625rem] mq1350:box-border">
          <h3 className="m-0 relative text-inherit leading-[1.969rem] font-normal font-[inherit] mq450:text-[1.063rem] mq450:leading-[1.563rem]">
            Disrupting Rural Insurance thru an Assisted Tech Model – Leveraging
            technology and our rural networks
          </h3>
        </div>
        <div className="self-stretch h-[12.375rem] flex flex-row items-start justify-start max-w-full text-[1.875rem] text-gray-100 mq1350:flex-wrap">
          <Container
            component1="/component-1@2x.png"
            heading322000="22,000+"
            villagesCovered="Villages Covered"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[4.75rem] pb-[0.937rem] box-border gap-[0.468rem] max-w-[82.5rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1350:max-w-full">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[0rem] pl-[2.25rem] pr-[2.312rem]">
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
                      alt=""
                      src="/component-1-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-[0rem] px-[0.875rem]">
              <h1 className="m-0 relative text-inherit leading-[2.25rem] font-bold font-[inherit] mq450:text-[1.125rem] mq450:leading-[1.375rem] mq925:text-[1.5rem] mq925:leading-[1.813rem]">
                2 million+
              </h1>
            </div>
            <div className="self-stretch relative text-[1.125rem] leading-[1.688rem] font-medium text-dimgray text-center">
              Customers Enrolled
            </div>
          </div>
          <div className="self-stretch flex-[0.7865] flex flex-col items-start justify-start pt-[0rem] px-[5.937rem] pb-[0.937rem] box-border gap-[0.468rem] max-w-[82.5rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq450:flex-1 mq1350:max-w-full">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[0rem] pl-[1.062rem] pr-[1.125rem]">
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
                      alt=""
                      src="/component-1-2@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="m-0 relative text-inherit leading-[2.25rem] font-bold font-[inherit] mq450:text-[1.125rem] mq450:leading-[1.375rem] mq925:text-[1.5rem] mq925:leading-[1.813rem]">
              1 Million+
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.5rem] text-center text-[1.125rem] text-dimgray">
              <div className="flex-1 relative leading-[1.688rem] font-medium">
                Claim Settled
              </div>
            </div>
          </div>
          {/* <Container
            containerFlex="0.7247"
            containerPadding="0rem 6.25rem 0.937rem 6.312rem"
            component1="/component-1-3@2x.png"
            millionHeadingPadding="0rem 0.687rem"
            heading322000="4000+"
            heading3Display="unset"
            heading3MinWidth="unset"
            villagesCovered="Local Partners"
            millionHeadingContainerPadding="0rem 0.875rem 0rem 0.937rem"
          /> */}
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
