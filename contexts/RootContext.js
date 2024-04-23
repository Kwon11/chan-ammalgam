import React, { createContext, useContext, useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const RootContext = createContext();

export const RootContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', 'no previous searches');
  const [selectedCoin, setSelectedCoin] = useLocalStorage('selectedCoin', null);
  // chantodo selectedCoin doesnt work with local storage unless you parse/string json

  const value = {
    searchTerm,
    setSearchTerm,
    selectedCoin,
    setSelectedCoin,
  };

  return (
    <RootContext.Provider value={value}>{children}</RootContext.Provider>
  )
};

export const useRootContext = () => useContext(RootContext);