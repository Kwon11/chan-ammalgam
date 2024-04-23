import { apiKey } from './common.js';
const searchGecko = async (searchInput, resHandler, errHandler) => {
  fetch(`https://api.coingecko.com/api/v3/search?query=${searchInput}`, {
    method: 'GET',
    headers: {
     accept: 'application/json',
     'x-cg-api-key': apiKey,
    },
  })
  .then(res => {
    return res.json();
  })
  .then(data => {
    resHandler(data);
  })
  .catch(err => errHandler(err));
};

export default searchGecko;