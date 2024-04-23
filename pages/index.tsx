import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Inter as FontSans } from "next/font/google";

import { cn } from "../@/lib/utils";
// chantodo: fix this importing
// font is not fonting
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

import styles from '../styles/Home.module.css';

import { CoinSearchContextProvider } from '../contexts/CoinSearchContext.js';
import SelectedCoinDisplay from '../components/SelectedCoinDisplay.js';
import CoinSearch from '../components/CoinSearch.js';

const Home: NextPage = () => {
  return (
    <CoinSearchContextProvider>
      <div className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Head>
          <title>RainbowKit App</title>
          <meta
            content="Generated by @rainbow-me/create-rainbowkit"
            name="description"
          />
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <div>
          <ConnectButton />
          <h1 className={styles.title}>
            Welcome to <a href="">Ammalgam</a>!<br></br>
            Select a coin to search!
          </h1>
          <SelectedCoinDisplay />
          <CoinSearch />
        </div>
      </div>
    </CoinSearchContextProvider>
  );
};

export default Home;
