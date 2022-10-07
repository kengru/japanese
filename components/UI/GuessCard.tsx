import { FunctionComponent, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { Guess, GuessState } from "../../contexts/GameState";

import styles from "./UI.module.css";

type Props = {
  children: JSX.Element[];
};

type GuessCardProps = {
  guess: Guess;
  changeState?: (char: string, gs: GuessState) => void;
};

export function GuessCard({ guess, changeState }: GuessCardProps) {
  const handleKeyDown = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      if (changeState) {
        changeState(
          guess.character,
          ev.currentTarget.value === guess.answer ? "solved" : "failed"
        );
      }
    }
  };

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h2>{guess.character}</motion.h2>
      <motion.input type="text" onKeyDown={(ev) => handleKeyDown(ev)} />
    </motion.div>
  );
}
