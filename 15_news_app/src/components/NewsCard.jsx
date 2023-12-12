import "./NewsCard.css";

const NewsCard = () => {
  return (
    <div className="newsCard">
      <img src="..." alt="..." />
      <div className="newsCard_body">
        <h5 className="newsTitle">News Title</h5>
        <p className="newsDescription">
          Here is a brief summary of current news. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ea, libero!
        </p>
        <a href="/" className="newsArticle_Link">
          Go to news Article
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
