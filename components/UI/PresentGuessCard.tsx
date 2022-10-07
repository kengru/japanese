import { FunctionComponent, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { Guess, GuessState } from "../../contexts/GameState";

import styles from "./UI.module.css";

type Props = {
  children: (JSX.Element | null)[];
};

type PresentGuessCardProps = {
  guess: Guess;
};

export const PresentGuessCardHolder: FunctionComponent<Props> = ({
  children
}) => {
  return <div className={styles.cardsHolder}>{children}</div>;
};

export function PresentGuessCard({ guess }: PresentGuessCardProps) {
  return (
    <motion.div
      className={`${styles.card} ${
        guess.state === "solved"
          ? styles.cardRight
          : guess.state === "failed"
          ? styles.cardWrong
          : ""
      }`}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h2>{guess.character}</motion.h2>
      <motion.h4>{guess.answer}</motion.h4>
    </motion.div>
  );
}
