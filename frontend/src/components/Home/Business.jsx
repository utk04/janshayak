import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const TechnologyContainer = ({ className = "" }) => {
  const [articles, setArticles] = useState([]);

  const fetchBusinessNews = async () => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8da3df7ec8194dda978073b4acd06e25"
      );

      const data = await response.json();
      console.log("data ->", data);

      if (data.articles && data.articles.length > 0) {
        const shuffledArticles = data.articles.sort(() => 0.5 - Math.random());
        const randomFiveArticles = shuffledArticles.slice(0, 5);
        setArticles(randomFiveArticles);
      } else {
        console.warn("No articles found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBusinessNews();
  }, []);

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
            background-color: #5F9EA0; /* Original Theme */
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
            background-color: #2F4F4F; /* Dark Gray Background */
            border-radius: 10px;
            padding: 1rem;
            max-width: 300px;
            text-align: left;
            color: #F5F5F5;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Smooth Shadow */
            transition: transform 0.3s ease-in-out;
          }

          .news-item:hover {
            transform: translateY(-5px); /* Subtle Hover Effect */
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
            color: #00CED1; /* Teal Accent */
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
          <h2 className="flex-1 relative leading-[2.813rem] font-medium inline-block max-w-full mq450:text-[1.375rem] mq450:leading-[1.688rem] mq925:text-[1.875rem] mq925:leading-[2.25rem]">Real-Time Business Insights</h2>
          <p className="section-description">
            Stay informed with the latest business trends, insights, and updates from trusted sources.
          </p>

          <div className="news-container">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <div className="news-item" key={index}>
                  {article.urlToImage && (
                    <img src={article.urlToImage} alt={article.title} />
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
