import React, { createContext, useContext, useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const RootContext = createContext();

export const RootContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useLocalStorage('searchTerm', 'no previous searches');

  const value = {
    searchTerm,
    setSearchTerm,
  };

  return (
    <RootContext.Provider value={value}>{children}</RootContext.Provider>
  )
};

export const useRootContext = () => useContext(RootContext);