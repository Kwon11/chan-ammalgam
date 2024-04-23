## Notes from Chan:
Hi, this is my submission for the tech assessment. Check it out at [https://google.com](https://google.com)

Theres some low hanging and medium hanging fruit I would pick with another day(s) time.

In approximate order of "juice worth the squeeze" factor:
- date ranges -> in a real scenario this would probably be a must-have, coinGecko supports it
- styling -> styling is not my strong suit, but if I had more time I would copy another trading platform. I chose this assessment to try and learn shadCN and put myself in a weird no mans land.
- I think it makes sense to pre-fetch all the list of coins, and make no calls to coinGecko while the user searches tokens and have a non-debounced, local search that updates immediately.
- currency -> coinGecko offers multiple currencies for price. Itd be nice to use the users local currency, alongside a dropdown next to the rainbowkit UI to select the currency for users VPN'ing away from their actual locale
- cached coin information would probably make sense, though Id want to confirm how most users would use this site. If they're using this functionality over a direct "compare 2 coins" type of page, they are probably cycling between 3+ currencies and even on fast internet that can get annoying.
- Alongside that feature ^, a "last updated @ XYZ" button that refreshes the charts would be nice.
- rate limit -> the free API key has a limit 30 calls per minute, and I had some double renders that I was not able to get to
- A "quick look" list of coins on the sidebar, though in a real world scenario that functionality would probably be on a dashboard type of page with all the users owned coins.

## Getting Started

Running the dev server will serve the page on [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```
