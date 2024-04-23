import React, { createContext, useContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';
import { useBalance, useAccount } from 'wagmi';

import fetchTokenAddressGecko from '../utils/fetchTokenAddressGecko.js';
import fetchPriceHistoryGecko from '../utils/fetchPriceHistoryGecko.js';

const CoinSearchContext = createContext();

const ethereum = {
  "id": "ethereum-classic",
  "name": "Ethereum Classic",
  "api_symbol": "ethereum-classic",
  "symbol": "ETC",
  "market_cap_rank": 28,
  "thumb": "https://assets.coingecko.com/coins/images/453/thumb/ethereum-classic-logo.png",
  "large": "https://assets.coingecko.com/coins/images/453/large/ethereum-classic-logo.png"
};

export const CoinSearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('searchTerm', 'no previous searches');
  const [selectedCoin, setSelectedCoin] = useState(ethereum);
  const [selectedTokenAddress, setSelectedTokenAddress] = useState();
  const [priceHistory, setPriceHistory] = useState();
  const [walletAddress, setWalletAddress] = useState(useAccount().address);
  // chantodo selectedCoin doesnt work with local storage unless you parse/string json
  
  // tokenAddress
  useEffect(() => {
    // tokenAddress
    if(selectedCoin && selectedCoin.id) {
      // chankwontodo make real error handler
      fetchTokenAddressGecko(selectedCoin.id, res => setSelectedTokenAddress(res.platforms.ethereum), console.log)
      fetchPriceHistoryGecko(selectedCoin.id, setPriceHistory, console.log)
    };
    
  },[selectedCoin]);

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

  return (
    <CoinSearchContext.Provider value={value}>{children}</CoinSearchContext.Provider>
  )
};

export const useCoinSearchContext = () => useContext(CoinSearchContext);