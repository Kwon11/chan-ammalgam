import styled from "styled-components";
import ChartComponent from "./ChartComponent.js";
import ErrorDisplay from './ErrorDisplay.js';

import { useCoinSearchContext } from "../contexts/CoinSearchContext";

const Charts = () => {
  const { priceHistoryError, priceHistory, selectedCoin } =
    useCoinSearchContext();
  const convertPriceHistory = (input) => {
    return input.map((dataPoint) => {
      const [unixTime, price] = dataPoint;
      return {
        time: dataPoint[0] / 1000,
        value: dataPoint[1],
      };
    });
  };

  return (
    <ChartContainer>
      <ErrorDisplay show={priceHistoryError} style={{ padding: "0 3%" }}>
        Error fetching chart data, results may not be updated.
      </ErrorDisplay>
      {priceHistory && (
        <ChartComponent
          label={`${selectedCoin.name} Price History`}
          showOnMobile
          data={convertPriceHistory(priceHistory.prices)}
        />
      )}
      {priceHistory && (
        <ChartComponent
          label={`${selectedCoin.name} Volume History`}
          data={convertPriceHistory(priceHistory.total_volumes)}
        />
      )}
      {priceHistory && (
        <ChartComponent
          label={`${selectedCoin.name} Market Cap History`}
          data={convertPriceHistory(priceHistory.market_caps)}
        />
      )}
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Charts;
