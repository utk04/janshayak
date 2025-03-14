import PropTypes from "prop-types";

const TechnologyContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2.831rem] box-border max-w-full text-center text-[2.344rem] text-gray-100 font-poppins mq925:pb-[1.25rem] mq925:box-border mq1350:pb-[1.813rem] mq1350:box-border ${className}`}
    >
      <style>
        {`
          .section-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #5F9EA0; /* CadetBlue */
            padding: 3rem 1.5rem;
            border-radius: 20px;
            text-align: center;
            width: 100vw; /* Full Width */
          }

          .section-content {
            max-width: 70rem;
            width: 100%;
            padding: 2rem;
          }

          .section-title {
            font-size: 2.5rem;
            color: #2F4F4F; /* SlateGray */
            font-weight: 600;
            margin-bottom: 1rem;
          }

          .section-description {
            font-size: 1.5rem;
            color: #F5F5F5; /* Light Gray */
            line-height: 2rem;
            margin-bottom: 2rem;
          }

          /* Features Grid */
          .features-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            width: 100%;
          }

          .feature-row {
            display: flex;
            justify-content: center;
            gap: 2rem;
            width: 100%;
          }

          .feature {
            text-align: center;
            color: white;
            max-width: 180px;
            cursor: pointer;
          }

          .feature img {
            width: 100px;
            height: 100px;
            border-radius: 10px;
            transition: transform 0.3s ease-in-out;
          }

          .feature:hover img {
            transform: scale(1.2);
          }

          .feature-text {
            margin-top: 10px;
            font-size: 1rem;
            opacity: 0.8;
            transition: opacity 0.3s ease-in-out;
          }

          .feature:hover .feature-text {
            opacity: 1;
          }
        `}
      </style>

      <div className={`section-container ${className}`}>
        <div className="section-content">
          <h2 className="section-title">Real-Time Business Insights</h2>
          <p className="section-description">
            Policies are issued instantly with a seamless digital experience. 
            Our technology platform supports multiple premium collection options, 
            making it convenient for all users, including rural customers.
          </p>

          <div className="features-container">
            <div className="feature-row">
              <div className="feature">
                <img src="/component-1-4@2x.png" alt="Feature 1" />
                <p className="feature-text">Enhanced data accuracy through Aadhaar scan.</p>
              </div>
              <div className="feature">
                <img src="/component-1-5@2x.png" alt="Feature 2" />
                <p className="feature-text">Automatic premium calculation based on the selected product.</p>
              </div>
              <div className="feature">
                <img src="/component-1-6@2x.png" alt="Feature 3" />
                <p className="feature-text">Seamless data portability with export options.</p>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature">
                <img src="/component-1-7@2x.png" alt="Feature 4" />
                <p className="feature-text">Real-time monitoring via an interactive portal.</p>
              </div>
              <div className="feature">
                <img src="/component-1-8@2x.png" alt="Feature 5" />
                <p className="feature-text">Quality assurance checks before submission.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TechnologyContainer.propTypes = {
  className: PropTypes.string,
};

export default TechnologyContainer;
