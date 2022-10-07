import "../styles/globals.css";
import type { AppProps } from "next/app";

import { GameStateProvider } from "../contexts/GameState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GameStateProvider>
      <Component {...pageProps} />
    </GameStateProvider>
  );
}

export default MyApp;

// Here goes some kind of context between pages.
