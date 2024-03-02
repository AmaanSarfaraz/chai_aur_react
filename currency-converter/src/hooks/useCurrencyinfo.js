import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response[currency])); //to access an object we can can use dot"." but we can also use square brackets [currency]
    console.log(data);
  }, [currency]);
  console.log(data);

  return data;
}
export default useCurrencyInfo;
