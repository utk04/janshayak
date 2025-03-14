import PropTypes from "prop-types";

const InvestorLogos1 = ({ className = "" }) => {
  const logos = [
    "/image-11@2x.png",
    "/image-12@2x.png",
    "/image-13@2x.png",
    "/image-14@2x.png",
    "/image-15@2x.png",
    "/image-16@2x.png"
  ];

  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center pt-[2rem] pb-[2.793rem] px-[1.25rem] box-border max-w-full ${className}`}
    >
      <h2 className="text-3xl font-semibold text-center mb-4">Our Trusted Partners</h2>
      <p className="text-lg text-center mb-8 max-w-[80%] mx-auto">
        We are proud to collaborate with leading companies who share our vision and values.
      </p>
      
      {/* Marquee Container */}
      <div className="w-full overflow-hidden relative">
        <div className="flex gap-[2rem] animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => ( // Duplicate logos for seamless looping
            <div
              key={index}
              className="relative min-w-[12.125rem] max-w-[13.75rem] transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
            >
              <img
                className="h-[4.113rem] w-auto object-cover z-[1] rounded-xl transition-all duration-300"
                alt={`Investor Logo ${index + 1}`}
                src={logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

InvestorLogos1.propTypes = {
  className: PropTypes.string,
};

export default InvestorLogos1;
