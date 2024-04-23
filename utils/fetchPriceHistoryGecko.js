import apiKey from "./common.js";

const fetchPriceHistoryGecko = (tokenId, resHandler, errHandler) => {
  fetch(
    `https://api.coingecko.com/api/v3/coins/${tokenId}/market_chart?days=${7}&vs_currency=${"usd"}`,
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

// ChanTodo: time range endpoint available

// curl --request GET \
//      --url https://api.coingecko.com/api/v3/coins/ethereum/market_chart?days=7&vs_currency=usd \
//      --header 'accept: application/json' \
//      --header 'x-cg-api-key': 'CG-k46PPZyfQTDgq3QHe3csTvAG'


// curl --request GET \
//      --url https://api.coingecko.com/api/v3/coins/ethereum \
//      --header 'accept: application/json' \
//      --header 'x-cg-api-key': 'CG-k46PPZyfQTDgq3QHe3csTvAG' | pbcopy

