import FormShipping from "./FormShipping";
import PropTypes from "prop-types";

const Section3 = ({ className = "" }) => {
  return (
    <section
      className={`ml-[-0.75rem] mb-[1.406rem] w-[120rem] rounded-11xl bg-cadetblue flex flex-row items-start justify-start pt-[2.375rem] px-[7.5rem] pb-[19.125rem] box-border gap-[16.875rem] max-w-full text-center text-[2.344rem] text-slategray font-poppins mq450:gap-[2.125rem] mq925:gap-[4.188rem] mq925:pt-[1.25rem] mq925:px-[1.875rem] mq925:pb-[8.063rem] mq925:box-border mq1350:gap-[8.438rem] mq1350:pt-[1.563rem] mq1350:px-[3.75rem] mq1350:pb-[12.438rem] mq1350:box-border mq1800:flex-wrap mq1800:justify-center ${className}`}
    >
      <div className="h-[39.313rem] flex flex-col items-start justify-start pt-[16.812rem] px-[0rem] pb-[0rem] box-border max-w-full mq925:pt-[10.938rem] mq925:box-border mq925:min-w-full mq1800:flex-1">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq1800:self-stretch mq1800:w-auto"
          loading="lazy"
          alt=""
          src="/pinterestdownloadercom1734716747746281-1@2x.png"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[10.312rem] min-w-[39.375rem] max-w-full mq450:gap-[2.563rem] mq925:gap-[5.125rem] mq925:min-w-full mq1800:flex-1">
        <div className="w-[26.25rem] flex flex-row items-start justify-start py-[0rem] px-[3.562rem] box-border max-w-[82.5rem] mq450:gap-[1.188rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq1350:max-w-full">
          <div className="flex-1 relative leading-[2.813rem] font-medium mq450:text-[1.375rem] mq450:leading-[1.688rem] mq925:text-[1.875rem] mq925:leading-[2.25rem]">
            Expanse Trekker
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="flex flex-col items-start justify-start gap-[2.187rem] max-w-full mq450:gap-[1.063rem]">
            <div className="w-full flex flex-row items-start justify-start max-w-[82.5rem] mq450:gap-[1.188rem] mq1350:max-w-full">
              <div className="flex-1 relative leading-[2.813rem] font-medium mq450:text-[1.375rem] mq450:leading-[1.688rem] mq925:text-[1.875rem] mq925:leading-[2.25rem]">
                today’s expenditure--
              </div>
            </div>
            <div className="w-[23.125rem] flex flex-row items-start justify-start py-[0rem] pl-[3.125rem] pr-[0rem] box-border max-w-full mq450:pl-[1.25rem] mq450:box-border">
              <FormShipping />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Section3.propTypes = {
  className: PropTypes.string,
};

export default Section3;
