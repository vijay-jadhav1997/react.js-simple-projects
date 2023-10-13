import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        setData(response[currency]);
      })
      .catch((err) => {
        setError(err);
      });
  }, [currency]);

  // You can log data inside this effect
  useEffect(() => {
    console.log(data);
  }, [data]);

  return { data, error };
}

export default useCurrencyInfo;
