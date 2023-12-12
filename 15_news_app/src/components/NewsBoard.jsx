import { useEffect, useState } from "react";
import "./NewsBoard.css";
import NewsCard from "./NewsCard";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      let newsUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await fetch(newsUrl);
      const newsData = await response.json();
      setArticles(newsData?.articles);
      console.log(newsData?.articles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="newsBoard">
      <h2 className="heading">
        Latest <span>News</span>
      </h2>
      <div className="newsCard_container">
        {articles.map((newsInfo) => (
          <NewsCard
            key={newsInfo?.title.substring(0, 10)}
            newsInfo={newsInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
