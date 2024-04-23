import React, { useState } from 'react';
import { useCoinSearchContext } from '../contexts/CoinSearchContext';
import { Input } from '../styles/StyledComponents.js';
import useDebouncedSearch from '../hooks/useDebouncedSearch.js';
import searchGecko from '../utils/searchGecko.js';
import CoinsDisplay from './CoinsDisplay.js';

const CoinSearch = () => {
  const { searchTerm, setSearchTerm } = useCoinSearchContext();
  const [ searchResults, setSearchResults ] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value)
  };

  const searchResHandler = (result) => {
    setSearchResults(result.coins);
  };
  const searchErrHandler = err => console.log(err);
  useDebouncedSearch(searchTerm, searchGecko, searchResHandler, searchErrHandler);

  return (
    <CoinSearchContainer>
      <Input
        value={searchTerm}
        type="text"
        onChange={handleChange}
        id="coinSearchInput"
        name="coinSearchInput"
      />
      <CoinsDisplay coins={searchResults} />
    </CoinSearchContainer>
  )
};

// CHANTODO: move this somewhere intelligent
import styled from 'styled-components';
const CoinSearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default CoinSearch;
