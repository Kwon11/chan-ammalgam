## Notes from Chan:
Hi, this is my submission for the tech assessment. Check it out at [https://chan-ammalgam.vercel.app/](https://chan-ammalgam.vercel.app/)

Note: I'm running into the rate limiter after a minute or so of running the app. The demo API key is limited to 30 calls per minute. I have hard coded ethereum values to demo the UI. If the chart/balance stop updating, please check the console to see if there is an "ERROR 429 (Too Many Requests)". The coin selection from a list of results will still fetch the thumbnail but wallet balance and chart data will not update when coinGecko is blocked.

I didn't have time to test it extensively, but only one call for token address and one call for price history goes to the coinGecko API on each coinSelect, so I dont think I am making superfluous calls. I left console logs on each fetch to support my innocence.

Theres some low hanging and medium hanging fruit I would pick with another day(s) time.

In approximate order of "juice worth the squeeze" factor:
- date ranges -> in a real scenario this would probably be a must-have, coinGecko supports it
- styling -> styling is not my strong suit, but if I had more time I would copy another trading platform. I chose this assessment to try and learn shadCN and put myself in a weird no mans land.
- I think it makes sense to pre-fetch all the list of coins, and have the coins update immediately as you type.
- currency -> coinGecko offers multiple currencies for price. Itd be nice to use the users local currency, while making a dropdown next to the rainbowkit UI available to select the currency for users VPN'ing away from their actual locale
- cached coin information would probably make sense, though Id want to confirm how most users would use this site. If they're using this functionality over a direct "compare 2 coins" type of page, they are probably cycling between 3+ currencies and even on fast internet it could hitch and get annoying.
- Alongside that feature ^, a "last updated @ XYZ" button that refreshes the charts would be nice.
- A "quick look" list of coins on the sidebar would be cool, though in a real world scenario that functionality would probably be on a dashboard type page with all the users owned coins.

## Getting Started

Running the dev server will serve the page on [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```
