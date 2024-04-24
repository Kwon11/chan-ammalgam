import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import { CoinSearchContextProvider } from "../contexts/CoinSearchContext.js";
import SelectedCoinDisplay from "../components/SelectedCoinDisplay.js";
import CoinSearch from "../components/CoinSearch.js";
import Charts from "../components/Charts.js";

const Home: NextPage = () => {
  return (
    <CoinSearchContextProvider>
      <RootContainer>
        <Head>
          <title>RainbowKit App</title>
          <meta
            content="Generated by @rainbow-me/create-rainbowkit"
            name="description"
          />
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <div style={{ height: "100%" }}>
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <ConnectButton />
          </div>
          <Heading>
            Welcome to Ammalgam!<br></br>
            Search and select a coin!
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
      </RootContainer>
    </CoinSearchContextProvider>
  );
};

const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  color: #d6d6d6;
  padding: 0;
  margin: 0;
  background: linear-gradient(to bottom left, #04373A 0%, black 40%, black 60%, #04373A 80%);
  @media (max-width: 768px) {
    background: linear-gradient(to left, #04373A 0%, black 40%, black 60%, #04373A 100%);
    height: fit-content;
  }
`;
const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;
  box-sizing: border-box;
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
  margin: 0;
  @media (max-width: 768px) {
    padding: 50px 0px 20px 0px;
  }
`;

export default Home;
