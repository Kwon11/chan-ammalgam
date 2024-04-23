import React, { useState, useEffect, useCallback } from "react";
import { useCoinSearchContext } from "../contexts/CoinSearchContext";
import useDebouncedSearch from "../hooks/useDebouncedSearch.js";
import searchGecko from "../utils/searchGecko.js";
import styled from "styled-components";
import { ethDefaultSearchResults } from "@/utils/ethereumDefaults";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const CoinSearch = () => {
  const { searchTerm, setSearchTerm, setSelectedCoin } = useCoinSearchContext();
  const [searchResults, setSearchResults] = useState(ethDefaultSearchResults);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const searchResHandler = useCallback(
    (result) => {
      result && setSearchResults(result.coins);
    },
    [setSearchResults]
  );
  const searchErrHandler = useCallback((err) => console.log(err), []);
  useDebouncedSearch(
    searchTerm,
    searchGecko,
    searchResHandler,
    searchErrHandler
  );

  useEffect(() => {
    console.log("new search results", searchResults);
  }, [searchResults]);

  console.log("searchResults", searchResults);

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
      <List style={{ overflow: "visible", height: "100%" }}>
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
  height: 66%;
  overflow: hidden;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  padding: 0 10px;
  background-color: #131313;
  color: #9b9b9b;
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
