import latestNews from "../assets/latestNews.png";
import "./NewsCard.css";

const NewsCard = (props) => {
  const {
    source,
    title,
    author,
    publishedAt,
    content,
    description,
    url,
    urlToImage,
  } = props?.newsInfo;
  return (
    <div className="newsCard">
      <img
        src={urlToImage === null || urlToImage === "" ? latestNews : urlToImage}
        alt="..."
      />
      <span className="newsSource">{source?.name}</span>
      <div className="newsCard_body">
        <p className="newsDate">{publishedAt.split("T")[0]}</p>
        <h3 className="newsTitle">{title?.substring(0, 45) + "...."}</h3>
        <p className="newsDescription">
          {description === null || description === ""
            ? title?.substring(0, 90) + "...."
            : description?.substring(0, 90) + "...."}
        </p>
        <a href={url} className="newsArticle_Link">
          Read More...
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
