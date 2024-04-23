import { apiKey } from './common.js';
import { geckoSearchResults } from './queries.js';
const searchGecko = async (searchInput, resHandler, errHandler) => {
  // MOCK:
  resHandler(geckoSearchResults);
  return null;

  fetch(`https://api.coingecko.com/api/v3/search?query=${searchInput}`, {
    method: 'GET',
    headers: {
     accept: 'application/json',
     'x-cg-api-key': apiKey,
     // ChANTODO: hide api key
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