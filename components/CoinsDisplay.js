import styled from "styled-components";
import { useCoinSearchContext } from '../contexts/CoinSearchContext';

const CoinsDisplay = ({ coins }) => {
  return (
    <CoinsDisplayContainer>
      {coins && coins.map((coin) => <CoinDisplay key={coin.id} coin={coin} />)}
    </CoinsDisplayContainer>
  );
};

const CoinDisplay = ({ coin }) => {
  const { setSelectedCoin } = useCoinSearchContext();
  const { name, symbol, thumb } = coin;
  return (
    <CoinDisplayContainer onClick={() => setSelectedCoin(coin)}>
      <CoinName>{name}</CoinName>
      <IconAndSymbolContainer>
        <CoinSymbol>{symbol}</CoinSymbol>
        <CoinIcon src={thumb} alt={name}/>
      </IconAndSymbolContainer>
    </CoinDisplayContainer>
  );
};

const CoinsDisplayContainer = styled.div`
  width: 100%;
  max-width: 500px;
  max-height: 500px;
`;
const CoinDisplayContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

export default CoinsDisplay;
