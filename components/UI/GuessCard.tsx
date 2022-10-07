import { FunctionComponent } from "react";
import { Guess } from "../../contexts/GameState";

import styles from "./UI.module.css";

type Props = {
  children: JSX.Element[];
};

export const GuessCardHolder: FunctionComponent<Props> = ({ children }) => {
  return <div className={styles.cardsHolder}>{children}</div>;
};

export function GuessCard(guess: Guess) {
  return (
    <div className={styles.card}>
      <h2>{guess.character}</h2>
      <input type="text" />
    </div>
  );
}
