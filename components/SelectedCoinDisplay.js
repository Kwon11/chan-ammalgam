import { useState, useEffect } from 'react';
import { useCoinSearchContext } from '../contexts/CoinSearchContext';
import styled from 'styled-components';

export const SelectedCoinDisplay = (coin) => {
  const { selectedCoin } = useCoinSearchContext();
  const { coinBalance } = useCoinSearchContext();
  const { tokenAddress } = useCoinSearchContext();

  return selectedCoin ? (
      <SelectedCoinContainer>
        <CoinImage src={selectedCoin.large} alt={selectedCoin.name}/>
        <CoinName>{selectedCoin.name}</CoinName>
        {coinBalance && <Balance>{`${coinBalance.formatted}${coinBalance.symbol}`}</Balance>}
      </SelectedCoinContainer>
  ): 'SELECT A COIN FOOL';
};

const SelectedCoinContainer = styled.div`
  width: 300px; 
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const CoinImage = styled.img`
  width: 150px;
  height: 150px;
`;
const CoinName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Balance = styled.div`
  height: 20px;
`;

export default SelectedCoinDisplay;