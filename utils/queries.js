/*
curl --request GET \
     --url https://api.coingecko.com/api/v3/search?query=ethereum \
     --header 'accept: application/json' \
     --header 'x-cg-api-key: CG-k46PPZyfQTDgq3QHe3csTvAG'
*/

// response.data.coins is an array of
const coinResponse = {
  id: "bitcoin",
  name: "Bitcoin",
  api_symbol: "bitcoin",
  symbol: "BTC",
  market_cap_rank: 1,
  thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
  large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
};

// export const geckoSearchResults = {
//   coins: [
//     {
//       id: "bitcoin",
//       name: "Bitcoin",
//       api_symbol: "bitcoin",
//       symbol: "BTC",
//       market_cap_rank: 1,
//       thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
//       large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
//     },
//     {
//       id: "MOCK-bitcoin",
//       name: "Wrapped Bitcoin",
//       api_symbol: "wrapped-bitcoin",
//       symbol: "WBTC",
//       market_cap_rank: 14,
//       thumb:
//         "https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png",
//       large:
//         "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png",
//     },
//     {
//       id: "bitcoin-cash",
//       name: "Bitcoin Cash",
//       api_symbol: "bitcoin-cash",
//       symbol: "BCH",
//       market_cap_rank: 15,
//       thumb:
//         "https://assets.coingecko.com/coins/images/780/thumb/bitcoin-cash-circle.png",
//       large:
//         "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png",
//     },
//     {
//       id: "bitcoin-cash-sv",
//       name: "Bitcoin SV",
//       api_symbol: "bitcoin-cash-sv",
//       symbol: "BSV",
//       market_cap_rank: 75,
//       thumb: "https://assets.coingecko.com/coins/images/6799/thumb/BSV.png",
//       large: "https://assets.coingecko.com/coins/images/6799/large/BSV.png",
//     },
//     {
//       id: "bitcoin-gold",
//       name: "Bitcoin Gold",
//       api_symbol: "bitcoin-gold",
//       symbol: "BTG",
//       market_cap_rank: 139,
//       thumb:
//         "https://assets.coingecko.com/coins/images/1043/thumb/bitcoin-gold-logo.png",
//       large:
//         "https://assets.coingecko.com/coins/images/1043/large/bitcoin-gold-logo.png",
//     },
//     {
//       id: "bitcoin-avalanche-bridged-btc-b",
//       name: "Bitcoin Avalanche Bridged (BTC.b)",
//       api_symbol: "bitcoin-avalanche-bridged-btc-b",
//       symbol: "BTC.B",
//       market_cap_rank: 296,
//       thumb: "https://assets.coingecko.com/coins/images/26115/thumb/btcb.png",
//       large: "https://assets.coingecko.com/coins/images/26115/large/btcb.png",
//     },
//     {
//       id: "bitcoin-wizards",
//       name: "Bitcoin Wizards",
//       api_symbol: "bitcoin-wizards",
//       symbol: "WZRD",
//       market_cap_rank: 463,
//       thumb:
//         "https://assets.coingecko.com/coins/images/33425/thumb/78e454a7f80334c3e2ac89a314e79e0.jpg",
//       large:
//         "https://assets.coingecko.com/coins/images/33425/large/78e454a7f80334c3e2ac89a314e79e0.jpg",
//     },
//     {
//       id: "harrypotterobamasonic10in",
//       name: "HarryPotterObamaSonic10Inu (ETH)",
//       api_symbol: "harrypotterobamasonic10in",
//       symbol: "BITCOIN",
//       market_cap_rank: 507,
//       thumb:
//         "https://assets.coingecko.com/coins/images/30323/thumb/hpos10i_logo_casino_night-dexview.png",
//       large:
//         "https://assets.coingecko.com/coins/images/30323/large/hpos10i_logo_casino_night-dexview.png",
//     },
//     {
//       id: "bitcoin-diamond",
//       name: "Bitcoin Diamond",
//       api_symbol: "bitcoin-diamond",
//       symbol: "BCD",
//       market_cap_rank: 1123,
//       thumb:
//         "https://assets.coingecko.com/coins/images/1254/thumb/bitcoin-diamond.png",
//       large:
//         "https://assets.coingecko.com/coins/images/1254/large/bitcoin-diamond.png",
//     },
//     {
//       id: "bitcoin-2",
//       name: "Bitcoin 2",
//       api_symbol: "bitcoin-2",
//       symbol: "BTC2",
//       market_cap_rank: 1641,
//       thumb:
//         "https://assets.coingecko.com/coins/images/5925/thumb/bitcoin2_logo256.png",
//       large:
//         "https://assets.coingecko.com/coins/images/5925/large/bitcoin2_logo256.png",
//     },
//     {
//       id: "bitcoin-pro",
//       name: "Bitcoin Pro",
//       api_symbol: "bitcoin-pro",
//       symbol: "BTCP",
//       market_cap_rank: 2155,
//       thumb:
//         "https://assets.coingecko.com/coins/images/3545/thumb/DSiD9ZhWsAE_8cS.png",
//       large:
//         "https://assets.coingecko.com/coins/images/3545/large/DSiD9ZhWsAE_8cS.png",
//     },
//     {
//       id: "bitcoinbam",
//       name: "BitcoinBam",
//       api_symbol: "bitcoinbam",
//       symbol: "BTCBAM",
//       market_cap_rank: 2182,
//       thumb: "https://assets.coingecko.com/coins/images/12854/thumb/logo.png",
//       large: "https://assets.coingecko.com/coins/images/12854/large/logo.png",
//     },
//     {
//       id: "oxbitcoin",
//       name: "0xBitcoin",
//       api_symbol: "oxbitcoin",
//       symbol: "0XBTC",
//       market_cap_rank: 2647,
//       thumb: "https://assets.coingecko.com/coins/images/4454/thumb/0xbtc.png",
//       large: "https://assets.coingecko.com/coins/images/4454/large/0xbtc.png",
//     },
//     {
//       id: "bitcoinz",
//       name: "BitcoinZ",
//       api_symbol: "bitcoinz",
//       symbol: "BTCZ",
//       market_cap_rank: 2665,
//       thumb:
//         "https://assets.coingecko.com/coins/images/1004/thumb/BTCZ_LOGO-1.png",
//       large:
//         "https://assets.coingecko.com/coins/images/1004/large/BTCZ_LOGO-1.png",
//     },
//     {
//       id: "bitcointry-token",
//       name: "Bitcointry Token",
//       api_symbol: "bitcointry-token",
//       symbol: "BTTY",
//       market_cap_rank: 2944,
//       thumb:
//         "https://assets.coingecko.com/coins/images/28641/thumb/bitcointry_token_logo_100x100.png",
//       large:
//         "https://assets.coingecko.com/coins/images/28641/large/bitcointry_token_logo_100x100.png",
//     },
//     {
//       id: "bitcoin-plus",
//       name: "Bitcoin Plus",
//       api_symbol: "bitcoin-plus",
//       symbol: "XBC",
//       market_cap_rank: 2973,
//       thumb:
//         "https://assets.coingecko.com/coins/images/469/thumb/bitcoin_plus.png",
//       large:
//         "https://assets.coingecko.com/coins/images/469/large/bitcoin_plus.png",
//     },
//     {
//       id: "bitcoinpos",
//       name: "BitcoinPoS",
//       api_symbol: "bitcoinpos",
//       symbol: "BTCS",
//       market_cap_rank: 3201,
//       thumb:
//         "https://assets.coingecko.com/coins/images/12978/thumb/BTCS_%281%29.png",
//       large:
//         "https://assets.coingecko.com/coins/images/12978/large/BTCS_%281%29.png",
//     },
//     {
//       id: "bitcoin-scrypt",
//       name: "Bitcoin Scrypt",
//       api_symbol: "bitcoin-scrypt",
//       symbol: "BTCS",
//       market_cap_rank: 3639,
//       thumb:
//         "https://assets.coingecko.com/coins/images/296/thumb/bitcoin-scrypt.png",
//       large:
//         "https://assets.coingecko.com/coins/images/296/large/bitcoin-scrypt.png",
//     },
//     {
//       id: "bitcoinsov",
//       name: "BitcoinSoV",
//       api_symbol: "bitcoinsov",
//       symbol: "BSOV",
//       market_cap_rank: 3808,
//       thumb: "https://assets.coingecko.com/coins/images/9205/thumb/bsov.png",
//       large: "https://assets.coingecko.com/coins/images/9205/large/bsov.png",
//     },
//     {
//       id: "bitcoin-subsidium",
//       name: "Bitcoin Subsidium",
//       api_symbol: "bitcoin-subsidium",
//       symbol: "XBTX",
//       market_cap_rank: 4254,
//       thumb: "https://assets.coingecko.com/coins/images/9539/thumb/coin.jpg",
//       large: "https://assets.coingecko.com/coins/images/9539/large/coin.jpg",
//     },
//     {
//       id: "bitcoiva",
//       name: "Bitcoiva",
//       api_symbol: "bitcoiva",
//       symbol: "BCA",
//       market_cap_rank: null,
//       thumb:
//         "https://assets.coingecko.com/coins/images/13016/thumb/Untitled-design-6-removebg-preview.png",
//       large:
//         "https://assets.coingecko.com/coins/images/13016/large/Untitled-design-6-removebg-preview.png",
//     },
//     {
//       id: "bitcoinv",
//       name: "BitcoinV",
//       api_symbol: "bitcoinv",
//       symbol: "BTCV",
//       market_cap_rank: null,
//       thumb: "https://assets.coingecko.com/coins/images/8030/thumb/btc.png",
//       large: "https://assets.coingecko.com/coins/images/8030/large/btc.png",
//     },
//     {
//       id: "bitcoinx",
//       name: "BitcoinX",
//       api_symbol: "bitcoinx",
//       symbol: "BCX",
//       market_cap_rank: null,
//       thumb:
//         "https://assets.coingecko.com/coins/images/1351/thumb/bitcoinx.png",
//       large:
//         "https://assets.coingecko.com/coins/images/1351/large/bitcoinx.png",
//     },
//     {
//       id: "bloxies-coin",
//       name: "BitcoinX",
//       api_symbol: "bloxies-coin",
//       symbol: "BXC",
//       market_cap_rank: null,
//       thumb: "https://assets.coingecko.com/coins/images/31400/thumb/BXC.jpg",
//       large: "https://assets.coingecko.com/coins/images/31400/large/BXC.jpg",
//     },
//     {
//       id: "bitcoinvb",
//       name: "BitcoinVB",
//       api_symbol: "bitcoinvb",
//       symbol: "BTCVB",
//       market_cap_rank: null,
//       thumb:
//         "https://assets.coingecko.com/coins/images/29436/thumb/bitcoinvb.png",
//       large:
//         "https://assets.coingecko.com/coins/images/29436/large/bitcoinvb.png",
//     },
//   ],
// };

export const geckoSearchResults = {
  coins: [
    {
      id: "ethereum",
      name: "Ethereum",
      api_symbol: "ethereum",
      symbol: "ETH",
      market_cap_rank: 2,
      thumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
      large: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
    {
      id: "ethereum-classic",
      name: "Ethereum Classic",
      api_symbol: "ethereum-classic",
      symbol: "ETC",
      market_cap_rank: 28,
      thumb:
        "https://assets.coingecko.com/coins/images/453/thumb/ethereum-classic-logo.png",
      large:
        "https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png",
    },
    {
      id: "sweth",
      name: "Swell Ethereum",
      api_symbol: "sweth",
      symbol: "SWETH",
      market_cap_rank: 134,
      thumb:
        "https://assets.coingecko.com/coins/images/30326/thumb/_lB7zEtS_400x400.jpg",
      large:
        "https://assets.coingecko.com/coins/images/30326/large/_lB7zEtS_400x400.jpg",
    },
    {
      id: "ethereum-name-service",
      name: "Ethereum Name Service",
      api_symbol: "ethereum-name-service",
      symbol: "ENS",
      market_cap_rank: 167,
      thumb:
        "https://assets.coingecko.com/coins/images/19785/thumb/acatxTm8_400x400.jpg",
      large:
        "https://assets.coingecko.com/coins/images/19785/large/acatxTm8_400x400.jpg",
    },
    {
      id: "ethereum-pow-iou",
      name: "EthereumPoW",
      api_symbol: "ethereum-pow-iou",
      symbol: "ETHW",
      market_cap_rank: 191,
      thumb:
        "https://assets.coingecko.com/coins/images/26997/thumb/logo-clear.png",
      large:
        "https://assets.coingecko.com/coins/images/26997/large/logo-clear.png",
    },
    {
      id: "ethereum-meta",
      name: "Ethereum Meta",
      api_symbol: "ethereum-meta",
      symbol: "ETHM",
      market_cap_rank: 1188,
      thumb:
        "https://assets.coingecko.com/coins/images/6586/thumb/ethereum-meta.png",
      large:
        "https://assets.coingecko.com/coins/images/6586/large/ethereum-meta.png",
    },
    {
      id: "harrypottertrumphomersimpson777inu",
      name: "HarryPotterTrumpHomerSimpson777Inu",
      api_symbol: "harrypottertrumphomersimpson777inu",
      symbol: "ETHEREUM",
      market_cap_rank: 2560,
      thumb:
        "https://assets.coingecko.com/coins/images/31320/thumb/hp777_%281%29.jpg",
      large:
        "https://assets.coingecko.com/coins/images/31320/large/hp777_%281%29.jpg",
    },
    {
      id: "tethereum",
      name: "Tethereum",
      api_symbol: "tethereum",
      symbol: "T99",
      market_cap_rank: 2957,
      thumb:
        "https://assets.coingecko.com/coins/images/30864/thumb/200x200.png",
      large:
        "https://assets.coingecko.com/coins/images/30864/large/200x200.png",
    },
    {
      id: "ketaicoin",
      name: "Ketaicoin",
      api_symbol: "ketaicoin",
      symbol: "ETHEREUM",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/31326/thumb/photo_2023-08-15_21-35-43.jpg",
      large:
        "https://assets.coingecko.com/coins/images/31326/large/photo_2023-08-15_21-35-43.jpg",
    },
    {
      id: "ethereumx",
      name: "EthereumX",
      api_symbol: "ethereumx",
      symbol: "ETX",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/7018/thumb/EthereumX.png",
      large:
        "https://assets.coingecko.com/coins/images/7018/large/EthereumX.png",
    },
    {
      id: "iethereum",
      name: "iEthereum",
      api_symbol: "iethereum",
      symbol: "IETH",
      market_cap_rank: null,
      thumb: "https://assets.coingecko.com/coins/images/1065/thumb/ieth.png",
      large: "https://assets.coingecko.com/coins/images/1065/large/ieth.png",
    },
    {
      id: "ethereummax",
      name: "EthereumMax",
      api_symbol: "ethereummax",
      symbol: "EMAX",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/15540/thumb/EMAX-Coin-Final2000x.png",
      large:
        "https://assets.coingecko.com/coins/images/15540/large/EMAX-Coin-Final2000x.png",
    },
    {
      id: "ethereum-inu",
      name: "Ethereum Inu",
      api_symbol: "ethereum-inu",
      symbol: "ETHINU",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/34875/thumb/1000024435.jpg",
      large:
        "https://assets.coingecko.com/coins/images/34875/large/1000024435.jpg",
    },
    {
      id: "ethereum-gold-2",
      name: "Ethereum Gold",
      api_symbol: "ethereum-gold-2",
      symbol: "ETHG",
      market_cap_rank: null,
      thumb: "https://assets.coingecko.com/coins/images/32280/thumb/ETHG.jpg",
      large: "https://assets.coingecko.com/coins/images/32280/large/ETHG.jpg",
    },
    {
      id: "huobi-ethereum",
      name: "Huobi Ethereum",
      api_symbol: "huobi-ethereum",
      symbol: "HETH",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/14104/thumb/ETH.a13273b3.png",
      large:
        "https://assets.coingecko.com/coins/images/14104/large/ETH.a13273b3.png",
    },
    {
      id: "mai-ethereum",
      name: "MAI (Ethereum)",
      api_symbol: "mai-ethereum",
      symbol: "MIMATIC",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/35521/thumb/mimatic-red.png",
      large:
        "https://assets.coingecko.com/coins/images/35521/large/mimatic-red.png",
    },
    {
      id: "ethereum-express",
      name: "Ethereum Express",
      api_symbol: "ethereum-express",
      symbol: "ETE",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/31600/thumb/200X200.png",
      large:
        "https://assets.coingecko.com/coins/images/31600/large/200X200.png",
    },
    {
      id: "chain-key-ethereum",
      name: "Chain-key Ethereum",
      api_symbol: "chain-key-ethereum",
      symbol: "CKETH",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/33819/thumb/01_ckETH_Token_HEX__4x.png",
      large:
        "https://assets.coingecko.com/coins/images/33819/large/01_ckETH_Token_HEX__4x.png",
    },
    {
      id: "arch-ethereum-web3",
      name: "Arch Ethereum Web3",
      api_symbol: "arch-ethereum-web3",
      symbol: "WEB3",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/26562/thumb/WEB3-TOKEN.png",
      large:
        "https://assets.coingecko.com/coins/images/26562/large/WEB3-TOKEN.png",
    },
    {
      id: "ethereum-wormhole",
      name: "Ethereum (Wormhole)",
      api_symbol: "ethereum-wormhole",
      symbol: "ETH",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/22990/thumb/ETH_wh_small.png",
      large:
        "https://assets.coingecko.com/coins/images/22990/large/ETH_wh_small.png",
    },
    {
      id: "voucher-ethereum-2-0",
      name: "Voucher Ethereum 2.0",
      api_symbol: "voucher-ethereum-2-0",
      symbol: "VETH",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/29683/thumb/vETH_200.png",
      large:
        "https://assets.coingecko.com/coins/images/29683/large/vETH_200.png",
    },
    {
      id: "ethereum-overnight",
      name: "Ethereum+ (Overnight)",
      api_symbol: "ethereum-overnight",
      symbol: "ETH+",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/32326/thumb/ETH__200x200.png",
      large:
        "https://assets.coingecko.com/coins/images/32326/large/ETH__200x200.png",
    },
    {
      id: "ethereum-message-service",
      name: "Ethereum Message Service",
      api_symbol: "ethereum-message-service",
      symbol: "EMS",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/29812/thumb/LogoEMS200x200.png",
      large:
        "https://assets.coingecko.com/coins/images/29812/large/LogoEMS200x200.png",
    },
    {
      id: "arch-ethereum-div-yield",
      name: "Arch Ethereum Div. Yield",
      api_symbol: "arch-ethereum-div-yield",
      symbol: "AEDY",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/30483/thumb/AEDY-512x512.png",
      large:
        "https://assets.coingecko.com/coins/images/30483/large/AEDY-512x512.png",
    },
    {
      id: "wrapped-ethereum-sollet",
      name: "Wrapped Ethereum (Sollet)",
      api_symbol: "wrapped-ethereum-sollet",
      symbol: "SOETH",
      market_cap_rank: null,
      thumb:
        "https://assets.coingecko.com/coins/images/24918/thumb/6250754.png",
      large:
        "https://assets.coingecko.com/coins/images/24918/large/6250754.png",
    },
  ],
};
