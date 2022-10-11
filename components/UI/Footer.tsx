import { useGameState } from "../../contexts/GameState";

import styles from "./UI.module.css";

export function FooterResults() {
  const { results } = useGameState();

  return results ? (
    <div className={styles.fRDiv}>
      <span>{results.total}</span>
      <span>{results.failed}</span>
      <span>{results.successful}</span>
    </div>
  ) : null;
}
