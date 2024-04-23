import styled from 'styled-components';
import ChartComponent from './ChartComponent.js';

import { useCoinSearchContext } from "../contexts/CoinSearchContext";

const Charts = () => {
  const { priceHistory, selectedCoin } = useCoinSearchContext();
  const convertPriceHistory = (input) => {
    return input.map((dataPoint) => {
      const [unixTime, price] = dataPoint;
      return {
        time: (dataPoint[0] / 1000),
        value: dataPoint[1],
      }
    });
  };

  return (
    <ChartContainer>
      {priceHistory && <ChartComponent label={"Price"} data={convertPriceHistory(priceHistory.prices)}/>}
      {priceHistory && <ChartComponent label={"Volume"} data={convertPriceHistory(priceHistory.total_volumes)}/>}
      {priceHistory && <ChartComponent label={"Market Cap"} data={convertPriceHistory(priceHistory.market_caps)}/>}
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Charts;
