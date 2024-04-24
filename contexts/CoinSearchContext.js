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
  const [tokenAddressError, setTokenAddressError] = useState(false);
  const [priceHistoryError, setPriceHistoryError] = useState(false);

  const createSuccessHandler = (successHandlerCb, setErrorCb) => {
    return (res) => {
      setErrorCb(false);
      successHandlerCb(res);
    };
  };
  const createErrorHandler = (setErrorCb) => {
    return (e) => {
      setErrorCb(true);
      console.log("error fetching", e);
    };
  };

  useEffect(() => {
    if (selectedCoin && selectedCoin.id) {
      fetchTokenAddressGecko(
        selectedCoin.id,
        (res) =>
          createSuccessHandler(
            setSelectedTokenAddress,
            setTokenAddressError
          )(res.platforms.ethereum), // we have to call the created callback with res.platforms.ethereum
        createErrorHandler(setTokenAddressError)
      );
      fetchPriceHistoryGecko(
        selectedCoin.id,
        createSuccessHandler(setPriceHistory, setPriceHistoryError),
        createErrorHandler(setPriceHistoryError)
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
    tokenAddressError,
    priceHistoryError,
  };

  return (
    <CoinSearchContext.Provider value={value}>
      {children}
    </CoinSearchContext.Provider>
  );
};

export const useCoinSearchContext = () => useContext(CoinSearchContext);
