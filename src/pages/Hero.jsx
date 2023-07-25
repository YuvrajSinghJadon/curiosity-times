import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getNews } from "../services/index";
import NewsCard from "../components/NewsCard";
import { Link } from "react-router-dom";
const Hero = () => {
  const [news, setNews] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    if (query) {
      fetchQueryNews(query);
    } else {
      fetchWorldNews();
    }
  }, [query]);
  const fetchWorldNews = () => {
    getNews("world")
      .then((result) => {
        setNews(result);
      })
      .catch((error) => console.error("Error fetching news:", error));
  };
  const fetchQueryNews = (query) => {
    getNews(query)
      .then((result) => {
        setNews(result);
      })
      .catch((error) => console.error("Error fetching news:", error));
  };
  const gradientBackground =
    "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500";

  return (
    <div>
      <div
        className={` ${gradientBackground} grid sm:grid-col-2 md:grid-cols-3 gap-4 p-5 place-items-center`}
      >
        {/* Render each news article as a NewsCard */}
        {news.map((article) => (
          <Link
            to={article.url}
            target="_blank"
            rel="noopener noreferrer"
            key={`${article.id}-${article.title}`}
          >
            <NewsCard
              key={article.id}
              title={article.title}
              image_url={article.urlToImage}
              description={article.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Hero;
