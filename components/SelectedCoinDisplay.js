import { useState, useEffect } from 'react';
import { useRootContext } from '../contexts/RootContext';
import styled from 'styled-components';
import { useReadContract, useAccount, erc20ABI, wagmiContractConfig } from 'wagmi';
import fetchTokenAddressGecko from '../utils/fetchTokenAddressGecko.js';

// import { WagmiConfig, createClient, configureChains, defaultChains } from 'wagmi';
// import { publicProvider } from 'wagmi/providers/public';
// const { provider } = configureChains(defaultChains, [publicProvider()]);
// const client = createClient({
//   autoConnect: true,
//   provider,
// })

export const SelectedCoinDisplay = (coin) => {
  const { selectedCoin } = useRootContext();
  // const { coinBalance, setCoinBalance } = useState();
  // const { tokenAddress, setTokenAddress } = useState();


  const address = useAccount().address;
  const result = useReadContract({
    ...wagmiContractConfig,
    // abi: erc20ABI,
    functionName: 'balanceOf',
    args: [address]
  });
  console.log('RESULT', result, result.data);

  // useEffect(() => {
  //   const tokenAddressResHandler = (data) => {
  //     console.log('TOKEN ADDRESS RESPONSE', data);
  //   };
  //   const tokenAddressErrHandler = e => console.log('tokenAddressError', e); // chankwontodo
  //   console.log('selectedCoin', selectedCoin);
  //   if(selectedCoin && selectedCoin.id) fetchTokenAddressGecko(selectedCoin.id, tokenAddressResHandler, tokenAddressErrHandler);


  // },[selectedCoin]);

  return selectedCoin ? (
      <SelectedCoinContainer>
        <CoinImage src={selectedCoin.large} alt={selectedCoin.name}/>
        <CoinName>{selectedCoin.name}</CoinName>
        <Balance>100$</Balance>
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