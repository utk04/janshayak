// import Component1 from "./Component1";
// import Component2 from "./Component2";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch rounded-11xl bg-cadetblue flex flex-col items-end justify-start pt-[2.812rem] px-[0rem] pb-[1.875rem] box-border gap-[2.5rem] max-w-full text-left text-[1.125rem] text-gray-100 font-poppins mq450:pt-[1.25rem] mq450:box-border mq925:gap-[1.25rem] mq925:pt-[1.813rem] mq925:pb-[1.25rem] mq925:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[9.387rem] max-w-full mq925:gap-[2.375rem] mq1350:gap-[4.688rem]">
        <div className="w-[118.575rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[79.681rem] flex flex-row items-start justify-start relative max-w-full">
            <div className="w-[14.638rem] !m-[0] absolute right-[30.669rem] bottom-[-9.469rem] flex flex-col items-start justify-start pt-[0.781rem] px-[0rem] pb-[0.7rem] box-border gap-[1.487rem]">
              {/* <Component1 variant={1} text="HOME" />
              <Component1 variant={1} text="ABOUT" />
              <Component1 variant={1} text="MOTOR INSURANCE" />
              <Component1 variant={1} text="CROP INSURANCE" />
              <Component1 variant={1} text="SELL INSURANCE" />
              <Component1 variant={1} text="REINSURANCE" />
              <Component1 variant={1} text="CONTACT" />
              <Component1 variant={1} text="PRIVACY POLICY" /> */}
            </div>
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-[4.063rem] text-rosybrown mq1350:flex-wrap">
              <div className="flex flex-row items-start justify-start min-w-[32.969rem] max-w-full mq925:min-w-full mq1350:flex-1">
                <h1 className="m-0 relative text-inherit tracking-[1.04px] leading-[4.563rem] capitalize font-semibold font-[inherit] mq450:text-[2.438rem] mq450:leading-[2.75rem] mq925:text-[3.25rem] mq925:leading-[3.625rem]">
                  <p className="m-0">De-Risking</p>
                  <p className="m-0">Rural India</p>
                </h1>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.468rem] max-w-full text-[1.406rem] text-gray-100 mq925:min-w-full mq1350:flex-1">
                <div className="relative leading-[1.688rem] font-semibold mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                  GET IN TOUCH
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.887rem] max-w-full">
                  <div className="relative leading-[2.113rem] mq450:text-[1.125rem] mq450:leading-[1.688rem]">
                    We are looking forward to hear from you!
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.062rem] pr-[0rem] box-border max-w-full text-[0.938rem]">
                    <div className="flex-1 flex flex-row items-end justify-start gap-[2.462rem] max-w-full mq450:gap-[1.25rem] mq450:flex-wrap">
                      <div className="flex flex-col items-start justify-start gap-[2.781rem]">
                        <div className="overflow-hidden flex flex-row items-start justify-start relative max-w-[5.347rem]">
                          <div className="overflow-hidden flex flex-col items-start justify-start max-w-[1.821rem]">
                            <div className="w-[1.819rem] h-[1.875rem] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                              <div className="w-[1.819rem] h-[1.875rem] relative overflow-hidden shrink-0 hidden" />
                            </div>
                          </div>
                          <img
                            className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                            alt=""
                            src="/image-17@2x.png"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[1.343rem]">
                          <div className="overflow-hidden flex flex-row items-start justify-start relative max-w-[5.347rem]">
                            <div className="overflow-hidden flex flex-col items-start justify-start max-w-[1.821rem]">
                              <div className="w-[1.819rem] h-[1.875rem] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                <div className="w-[1.819rem] h-[1.875rem] relative overflow-hidden shrink-0 hidden" />
                              </div>
                            </div>
                            <img
                              className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                              alt=""
                              src="/image-18@2x.png"
                            />
                          </div>
                          <div className="overflow-hidden flex flex-row items-start justify-start relative max-w-[5.347rem]">
                            <div className="overflow-hidden flex flex-col items-start justify-start max-w-[1.821rem]">
                              <div className="w-[1.819rem] h-[1.875rem] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                <div className="w-[1.819rem] h-[1.875rem] relative overflow-hidden shrink-0 hidden" />
                              </div>
                            </div>
                            <img
                              className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                              alt=""
                              src="/image-19@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[1.856rem] min-w-[15.563rem] max-w-full">
                        <div className="relative leading-[1.406rem]">
                          <p className="m-0">
                            Address: GramCover Insurance Brokers Private
                          </p>
                          <p className="m-0">{`Limited Plot No. 10 & 11, Prius Heights, 1st Floor, Sector`}</p>
                          <p className="m-0">125, Noida - 201301</p>
                        </div>
                        <div className="relative leading-[1.406rem]">
                          Phone: +91 9311672463
                        </div>
                        <div className="relative leading-[1.406rem]">
                          General Queries: info@gramcover.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/footer3png@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.312rem] pr-[1.25rem] box-border max-w-full text-[0.938rem]">
        <div className="flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.893rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] pl-[4rem] pr-[4.062rem] mq1350:pl-[2rem] mq1350:pr-[2rem] mq1350:box-border">
              <div className="relative leading-[1.406rem]">
                License No. 634, IRDA Composite Broker Code: IRDA/ CB 691/17,
                Valid till: 10/12/2023, CIN: U66000DL2016PTC292037, Principal
                Officer: PK Bhagat
              </div>
            </div>
            <div className="self-stretch relative leading-[1.406rem] text-center">{`Disclaimer: Insurance is the Subject matter of Solicitation. For more details on risk factors, Terms & Conditions please read the sales brochure carefully before`}</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.312rem] box-border max-w-full text-center">
            <div className="flex flex-col items-start justify-start gap-[0.906rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[3.375rem] box-border max-w-full mq925:pl-[1.688rem] mq925:pr-[1.688rem] mq925:box-border">
                <div className="flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start py-[0rem] px-[0rem] box-border min-w-[13.688rem] max-w-full">
                    <div className="mr-[-0.05rem] self-stretch relative leading-[1.406rem] shrink-0 z-[1]">{`purchasing the policy. To get NOC certificate `}</div>
                  </div>
                  {/* <Component2 variant={1} text="click here" /> */}
                </div>
              </div>
              <div className="relative leading-[1.406rem] text-left">
                © GramCover Insurance Brokers Pvt Ltd 2016-2023. All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
