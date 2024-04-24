import React, { useState, useEffect, useCallback } from "react";
import { useCoinSearchContext } from "../contexts/CoinSearchContext";
import useDebouncedSearch from "../hooks/useDebouncedSearch.js";
import searchGecko from "../utils/searchGecko.js";
import styled from "styled-components";
import ErrorDisplay from './ErrorDisplay.js';
import { ethDefaultSearchResults } from "@/utils/ethereumDefaults";

const CoinSearch = () => {
  const { searchTerm, setSearchTerm, setSelectedCoin } = useCoinSearchContext();
  const [searchResults, setSearchResults] = useState(ethDefaultSearchResults);
  const [searchError, setSearchError] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const searchResHandler = useCallback(
    (result) => {
      setSearchError(false);
      result && setSearchResults(result.coins);
    },
    [setSearchResults]
  );
  const searchErrHandler = useCallback((err) => {
    setSearchError(true);
    console.log("fetch error chan 1", err);
  }, []);
  useDebouncedSearch(
    searchTerm,
    searchGecko,
    searchResHandler,
    searchErrHandler
  );

  return (
    <Container>
      <Input
        placeholder={searchTerm || "Search for an ERC20 Token"}
        value={searchTerm}
        type="text"
        onChangeCapture={handleChange}
        id="coinSearchInput"
        name="coinSearchInput"
      />
      <List>
        <ErrorDisplay show={searchError} style={{ justifyContent: "center" }}>
          The search ran into an error, results may not update. Please try later
        </ErrorDisplay>
        {searchResults.map((coin) => {
          const { id, name, symbol, thumb } = coin;
          return (
            <CoinItem key={id} onClick={() => setSelectedCoin(coin)}>
              <CoinName>{name}</CoinName>
              <IconAndSymbolContainer>
                <CoinSymbol>{symbol}</CoinSymbol>
                <CoinIcon src={thumb} alt={name} />
              </IconAndSymbolContainer>
            </CoinItem>
          );
        })}
      </List>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 65%;
  overflow: hidden;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #131313;
  color: #9b9b9b;
  outline: none;
  border: none;
  box-shadow: none;
  margin: 0;
  &:inactive,
  &:hover,
  &:active,
  &:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;
const List = styled.div`
  width: 100%;
  padding: 0 0 0 5px;
  box-sizing: border-box;
  overflow: visible;
  height: 100%;
  @media (max-width: 768px) {
    height: 450px;
    overflow: hidden;
  }
`;
const CoinItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`;
const CoinName = styled.div`
  height: 20px;
  width: 70%;
`;
const IconAndSymbolContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
`;
const CoinSymbol = styled.div`
  height: 20px;
`;
const CoinIcon = styled.img`
  height: 20px;
`;
export default CoinSearch;
