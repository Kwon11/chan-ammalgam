import React, { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";
import { useBalance, useAccount } from "wagmi";

import fetchTokenAddressGecko from "../utils/fetchTokenAddressGecko.js";
import fetchPriceHistoryGecko from "../utils/fetchPriceHistoryGecko.js";
import {
  ethDefaultSelectedCoin,
  ethDefaultPriceHistory,
  ethDefaultTokenAddress,
} from "../utils/ethereumDefaults.js";

const CoinSearchContext = createContext();

export const CoinSearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [selectedCoin, setSelectedCoin] = useState(ethDefaultSelectedCoin);
  const [selectedTokenAddress, setSelectedTokenAddress] = useState(ethDefaultTokenAddress);
  const [priceHistory, setPriceHistory] = useState(ethDefaultPriceHistory);
  const [walletAddress, setWalletAddress] = useState(useAccount().address);
  // chantodo selectedCoin doesnt work with local storage unless you parse/string json

  // tokenAddress
  useEffect(() => {
    // tokenAddress
    if (selectedCoin && selectedCoin.id) {
      // chankwontodo make real error handler
      fetchTokenAddressGecko(
        selectedCoin.id,
        (res) => setSelectedTokenAddress(res.platforms.ethereum),
        e => console.log(e)
      );
      fetchPriceHistoryGecko(selectedCoin.id, setPriceHistory, (e) => console.log(e));
    }
  }, [selectedCoin]);

  const value = {
    searchTerm,
    setSearchTerm,
    selectedCoin,
    setSelectedCoin,
    selectedTokenAddress,
    setSelectedTokenAddress,
    walletAddress,
    priceHistory,
    setPriceHistory,
  };
  console.log('values', value);

  return (
    <CoinSearchContext.Provider value={value}>
      {children}
    </CoinSearchContext.Provider>
  );
};

export const useCoinSearchContext = () => useContext(CoinSearchContext);
