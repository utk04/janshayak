import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const TechnologyContainer = ({ className = "" }) => {
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState([]);

  const fetchBusinessNews = async () => {
    try {
      const response = await fetch(
  `${import.meta.env.VITE_API_URL}/api/news`
);

      const data = await response.json();
      console.log("data ->", data);

      if (data.articles && data.articles.length > 0) {
        setArticles(data.articles);
        setDisplayedArticles(data.articles.slice(0, 5)); // Initial 5 articles
      } else {
        console.warn("No articles found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Shuffle logic
  useEffect(() => {
    fetchBusinessNews();
  }, []);

  useEffect(() => {
    const shuffleArticles = () => {
      if (articles.length > 0) {
        const shuffled = [...articles].sort(() => 0.5 - Math.random()).slice(0, 5);
        setDisplayedArticles(shuffled);
      }
    };

    const interval = setInterval(shuffleArticles, 7000); // Shuffle every 10 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [articles]);

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
            background-color: #5F9EA0;
            padding: 3rem 1.5rem;
            border-radius: 20px;
            text-align: center;
            width: 100vw;
          }

          .news-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
            margin-top: 2rem;
          }

          .news-item {
            background-color: #2F4F4F;
            border-radius: 10px;
            padding: 1rem;
            max-width: 300px;
            text-align: left;
            color: #F5F5F5;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease-in-out;
          }

          .news-item:hover {
            transform: translateY(-5px);
          }

          .news-item img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 1rem;
          }

          .news-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #00CED1;
          }

          .news-description {
            font-size: 1rem;
            opacity: 0.9;
          }

          .news-link {
            display: block;
            margin-top: 0.5rem;
            color: #00CED1;
            text-decoration: underline;
            font-weight: 600;
          }
        `}
      </style>

      <div className={`section-container ${className}`}>
        <div className="section-content">
          <h2 className="text-slategray font-poppins relative leading-[2.813rem] font-medium inline-block max-w-full mq450:text-[1.375rem] mq450:leading-[1.688rem] mq925:text-[1.875rem] mq925:leading-[2.25rem]">
            Real-Time Business Insights
          </h2>
          <p className="m-0 relative text-[1.2rem] leading-[1.688rem] font-normal font-[inherit] text-gray-100 mq450:text-[1.063rem] mq450:leading-[1.375rem]">
            Stay informed with the latest business trends, insights, and updates from trusted sources.
          </p>

          <div className="news-container">
            {displayedArticles.length > 0 ? (
              displayedArticles.map((article, index) => (
                <div className="news-item" key={index}>
                  {article.image && (
                    <img src={article.image} alt={article.title} />
                  )}
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-description">
                    {article.description || "No description available."}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-link"
                  >
                    Read more
                  </a>
                </div>
              ))
            ) : (
              <p>No articles found. Try again later.</p>
            )}
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
