import { useEffect, useMemo } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetKanas } from "../../utils/objects/hiragana";

import styles from "../../styles/Home.module.css";
import { useGameState } from "../../contexts/GameState";
import { GuessCardHolder } from "../../components/UI/GuessCard";
import { GuessCard } from "../../components/UI/GuessCard";

const Kanas: NextPage = () => {
  const { asPath } = useRouter();
  const { guesses, changeGuesses } = useGameState();
  const path = useMemo(() => asPath.split("/")[2], []);
  const kanas = useMemo(() => GetKanas(path), [path]);

  useEffect(() => {
    changeGuesses(kanas);
  }, []);

  const cards = guesses.map((guess) => {
    return <GuessCard key={guess.character} {...guess} />;
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {`${path.charAt(0).toLocaleUpperCase()}${path.slice(1)}`} Kanas
        </title>
        <meta name="description" content="Practicing main kanas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <GuessCardHolder>{cards}</GuessCardHolder>
      </main>
    </div>
  );
};

export default Kanas;
