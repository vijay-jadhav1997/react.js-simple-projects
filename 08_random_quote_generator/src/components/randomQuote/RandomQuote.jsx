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
  };

  const twitterFn = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.q} - ${quote.a}`
    );
  };

  return (
    <div className="randomQuoteBox">
      <div className="quote">{quote.q}</div>
      <div className="box">
        <div className="author">- {quote.a}</div>
        <div className="icons">
          <img
            src={refresh}
            alt=""
            onClick={() => {
              randomQuoteFn();
            }}
          />
          <img
            src={twitter}
            alt=""
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
