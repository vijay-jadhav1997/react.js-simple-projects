import { useEffect, useState } from "react";
import "../randomQuote/RandomQuote.css";
import refresh from "../assets/refresh.png";
import twitter from "../assets/twitter.png";
const RandomQuote = () => {
  const [quote, setQuote] = useState({
    q: "If four things are followed - having a great aim, acquiring knowledge, hard work, and perseverance - then anything can be achieved.",
    a: "APJ Abdul Kalam",
  });
  const [quotes, setQuotes] = useState([]);
  const [colorCode, setColorCode] = useState("rgb(2, 159, 154)");

  useEffect(() => {
    fetchQuotes();
  }, []);

  async function fetchQuotes() {
    const quotesData = await fetch("https://zenquotes.io/api/quotes");
    // console.log(quotesData);
    const quotesJson = await quotesData.json();
    // console.log(quotesJson);
    setQuotes(quotesJson);
  }

  const randomQuoteFn = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    if (colorCode === "rgb(2, 159, 154)") {
      setColorCode("rgb(125, 2, 159)");
    } else if (colorCode === "rgb(125, 2, 159)") {
      setColorCode("rgb(149, 159, 2)");
    } else if (colorCode === "rgb(149, 159, 2)") {
      setColorCode("rgb(181, 98, 3)");
    } else if (colorCode === "rgb(181, 98, 3)") {
      setColorCode("rgb(2, 68, 159)");
    } else if (colorCode === "rgb(2, 68, 159)") {
      setColorCode("rgb(111, 111, 111)");
    } else {
      setColorCode("rgb(2, 159, 154)");
    }
  };

  const twitterFn = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.q} - ${quote.a}`
    );
  };

  return (
    <div className="randomQuoteBox">
      <div
        className="quote"
        style={{ boxShadow: `inset 0 0 15px ${colorCode}` }}
      >
        {quote.q}
      </div>
      <div
        className="underline"
        style={{ backgroundColor: ` ${colorCode}` }}
      ></div>
      <div className="box">
        <div className="author">- {quote.a}</div>
        <div className="icons">
          <img
            src={refresh}
            alt=""
            title="click to get another 'Quote'."
            onClick={() => {
              randomQuoteFn();
            }}
          />
          <img
            src={twitter}
            alt=""
            title="click to read this 'Quote' on Twitter!"
            onClick={() => {
              twitterFn();
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default RandomQuote;
