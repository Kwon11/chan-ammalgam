import React from 'react';
import { useRootContext } from '../contexts/RootContext';
import { Input } from '../styles/StyledComponents.js';

const CoinSearch = () => {
  const { searchTerm, setSearchTerm } = useRootContext();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value)
  };

  return (
    <CoinSearchContainer>
      <Input
        value={searchTerm}
        type="text"
        onChange={handleChange}
        id="coinSearchInput"
        name="coinSearchInput"
      />
    </CoinSearchContainer>
  )
};

// CHANTODO: move this somewhere intelligent
import styled from 'styled-components';
const CoinSearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default CoinSearch;