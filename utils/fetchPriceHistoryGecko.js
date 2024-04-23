import apiKey from "./common.js";

const fetchPriceHistoryGecko = (tokenId, resHandler, errHandler) => {
  fetch(
    `https://api.coingecko.com/api/v3/coins/${tokenId}/market_chart?days=${30}&vs_currency=${"usd"}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-api-key": apiKey,
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      resHandler(data);
    })
    .catch((err) => errHandler(err));
};

export default fetchPriceHistoryGecko;
