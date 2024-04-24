import { useBalance } from "wagmi";
import { useCoinSearchContext } from "../contexts/CoinSearchContext";
import styled from "styled-components";
import { useAccount } from "wagmi";

export const SelectedCoinDisplay = (coin) => {
  const { selectedCoin, selectedTokenAddress} =
    useCoinSearchContext();

  const walletAddress = useAccount().address;
  const balanceResponse = useBalance({
    address: walletAddress,
    token: selectedTokenAddress,
  });
  const coinBalance = balanceResponse.data;

  return (
    <SelectedCoinContainer>
      <CoinImage src={selectedCoin.large} alt={selectedCoin.name} />
      <CoinName>{selectedCoin.name}</CoinName>
      {coinBalance && (
        <Balance>{`Your Balance: ${coinBalance.formatted}${coinBalance.symbol}`}</Balance>
      )}
    </SelectedCoinContainer>
  );
};

const SelectedCoinContainer = styled.div`
  width: 300px;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    margin: 20px 0px;
  }
`;
const CoinImage = styled.img`
  width: 150px;
  height: 150px;
`;
const CoinName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 20px 0px;
  }
`;
const Balance = styled.div`
  height: 20px;
`;

export default SelectedCoinDisplay;
