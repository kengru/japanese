import { useEffect, useMemo } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { GetKanas } from "../../utils/objects/hiragana";

import styles from "../../styles/Home.module.css";
import { useGameState } from "../../contexts/GameState";
import { GuessCard } from "../../components/UI/GuessCard";
import {
  PresentGuessCard,
  PresentGuessCardHolder
} from "../../components/UI/PresentGuessCard";
import { FooterResults } from "../../components/UI/Footer";

const Kanas: NextPage = () => {
  const { asPath } = useRouter();
  const { guesses, changeGuesses, setGuessState } = useGameState();
  const path = asPath.split("/")[2];
  const newKanas = GetKanas(path);

  useEffect(() => {
    changeGuesses(newKanas);
  }, []);

  const presentCards = useMemo(
    () =>
      guesses.map((guess) => {
        return guess.state !== "untouched" ? (
          <PresentGuessCard key={guess.answer} guess={guess} />
        ) : null;
      }),
    [guesses]
  );

  const focusedCard = guesses.find((g) => g.state === "untouched");

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {`${path.charAt(0).toLocaleUpperCase()}${path.slice(1)}`} Kanas
        </title>
        <meta name="description" content="Practicing kanas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${styles.mainType}`}>
        <AnimatePresence>
          <PresentGuessCardHolder>{presentCards}</PresentGuessCardHolder>
        </AnimatePresence>
      </main>

      {focusedCard && (
        <GuessCard guess={focusedCard} changeState={setGuessState} />
      )}

      <FooterResults />
    </div>
  );
};

export default Kanas;
