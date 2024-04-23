import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import { Inter as FontSans } from "next/font/google";
import styled from "styled-components";

import { CoinSearchContextProvider } from "../contexts/CoinSearchContext.js";
import SelectedCoinDisplay from "../components/SelectedCoinDisplay.js";
import CoinSearch from "../components/CoinSearch.js";
import Charts from "../components/Charts.js";

const Home: NextPage = () => {
  return (
    <CoinSearchContextProvider>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background:
            "linear-gradient(to bottom left, #04373A 0%, black 40%, black 60%, #04373A 80%)",
          color: "#d6d6d6",
          padding: "0",
          margin: "0",
        }}
      >
        <Head>
          <title>RainbowKit App</title>
          <meta
            content="Generated by @rainbow-me/create-rainbowkit"
            name="description"
          />
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <div style={{ height: "100%" }}>
          <div style={{ position: "fixed", top: "0px", right: "0px" }}>
            <ConnectButton />
          </div>
          <Heading>
            Welcome to Ammalgam!<br></br>
            Select a coin to search!
          </Heading>
          <HorizontalContainer>
            <MainContainer>
              <Charts />
            </MainContainer>
            <MainContainer>
              <SelectedCoinDisplay />
              <CoinSearch />
            </MainContainer>
          </HorizontalContainer>
        </div>
      </div>
    </CoinSearchContextProvider>
  );
};

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const HorizontalContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Heading = styled.h1`
  height: 20%;
  width: 100%;
  line-height: 1;
  font-size: 2.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
`;

export default Home;
