import React, { createContext, useContext, useState, useEffect } from "react";

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
  const [selectedTokenAddress, setSelectedTokenAddress] = useState(
    ethDefaultTokenAddress
  );
  const [priceHistory, setPriceHistory] = useState(ethDefaultPriceHistory);

  useEffect(() => {
    if (selectedCoin && selectedCoin.id) {
      // chantodo make real error handler with UI
      fetchTokenAddressGecko(
        selectedCoin.id,
        (res) => setSelectedTokenAddress(res.platforms.ethereum),
        (e) => console.log(e)
      );
      fetchPriceHistoryGecko(selectedCoin.id, setPriceHistory, (e) =>
        console.log(e)
      );
    }
  }, [selectedCoin]);

  const value = {
    searchTerm,
    setSearchTerm,
    selectedCoin,
    setSelectedCoin,
    selectedTokenAddress,
    setSelectedTokenAddress,
    priceHistory,
    setPriceHistory,
  };

  return (
    <CoinSearchContext.Provider value={value}>
      {children}
    </CoinSearchContext.Provider>
  );
};

export const useCoinSearchContext = () => useContext(CoinSearchContext);
