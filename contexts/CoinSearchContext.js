import React, { createContext, useContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';
import { useBalance, useAccount } from 'wagmi';

import fetchTokenAddressGecko from '../utils/fetchTokenAddressGecko.js';

const CoinSearchContext = createContext();

export const CoinSearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', 'no previous searches');
  const [selectedCoin, setSelectedCoin] = useState();
  const [selectedTokenAddress, setSelectedTokenAddress] = useState();
  const [tokenBalance, setTokenBalance] = useState();
  const [priceHistory, setPriceHistory] = useState();
  const [walletAddress, setWalletAddress] = useState(useAccount().address);
  // chantodo selectedCoin doesnt work with local storage unless you parse/string json
  
  // tokenAddress
  // chantodo delete this
  // ethereumNameServiceAddress 
  const dummyAddress = "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72";
  useEffect(() => {
    const tokenAddressResHandler = (data) => {
      console.log('TOKEN ADDRESS RESPONSE', data.platforms[0], data);
      setSelectedTokenAddress(data.platforms[0]);
    };
    const tokenAddressErrHandler = e => console.log('tokenAddressError', e); // chankwontodo
    console.log('selectedCoin', selectedCoin);
    if(selectedCoin && selectedCoin.id) fetchTokenAddressGecko(selectedCoin.id, tokenAddressResHandler, tokenAddressErrHandler);
  },[selectedCoin]);

  // balance
  const result = useBalance({
    address: walletAddress,
    token: dummyAddress,
  }, [selectedCoin]);
  console.log('BALANCE', result, result.data);

  const value = {
    searchTerm,
    setSearchTerm,
    selectedCoin,
    setSelectedCoin,
    selectedTokenAddress,
    setSelectedTokenAddress,
    tokenBalance,
    setTokenBalance,
    priceHistory,
    setPriceHistory,
  };

  return (
    <CoinSearchContext.Provider value={value}>{children}</CoinSearchContext.Provider>
  )
};

export const useCoinSearchContext = () => useContext(CoinSearchContext);