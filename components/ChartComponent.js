import { createChart, ColorType } from "lightweight-charts";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const ChartComponent = (props) => {
  const {
    data,
    colors: {
      backgroundColor = "#081B44",
      lineColor = "#009580",
      textColor = "white",
      areaTopColor = "#043235",
      areaBottomColor = "#043235",
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 230,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return (
    <ChartContainer showOnMobile={props.label === "Price"}>
      {props.label}
      <Chart ref={chartContainerRef} />
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  margin-bottom: 20px;
  height: 29%;
  width: 100%;
  padding: 0 3%;
  border-radius: 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    ${({showOnMobile}) => showOnMobile ? '' : 'display: none'};
  }
`;
const Chart = styled.div`
  width: 100%;
  max-height: 60%;
`;

export default ChartComponent;
