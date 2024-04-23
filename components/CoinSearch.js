import React, { useState } from "react";
import { useCoinSearchContext } from "../contexts/CoinSearchContext";
import useDebouncedSearch from "../hooks/useDebouncedSearch.js";
import searchGecko from "../utils/searchGecko.js";
import styled from "styled-components";

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
  const [searchResults, setSearchResults] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const searchResHandler = (result) => {
    result && setSearchResults(result.coins);
  };
  const searchErrHandler = (err) => console.log(err);
  useDebouncedSearch(
    searchTerm,
    searchGecko,
    searchResHandler,
    searchErrHandler
  );

  return (
    <Command>
      <CommandInput
        placeholder={searchTerm || "Search for an ERC20 Token"}
        type="text"
        onChangeCapture={handleChange}
        id="coinSearchInput"
        name="coinSearchInput"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {searchResults && searchResults.length && (
          <CommandGroup heading="results">
            {searchResults &&
              searchResults.map((coin) => {
                const { id, name, symbol, thumb } = coin;
                return (
                  <CommandItem key={id} onSelect={() => setSelectedCoin(coin)}>
                    <CoinName>{name}</CoinName>
                    <IconAndSymbolContainer>
                      <CoinSymbol>{symbol}</CoinSymbol>
                      <CoinIcon src={thumb} alt={name} />
                    </IconAndSymbolContainer>
                  </CommandItem>
                );
              })}
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  );
};

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
