import { useGameState } from "../../contexts/GameState";

import styles from "./UI.module.css";

export function FooterResults() {
  const { results } = useGameState();

  return results ? (
    <div className={styles.fRDiv}>
      <span>Total: {results.total}</span>
      <span>Failed: {results.failed}</span>
      <span>Sucessful: {results.successful}</span>
    </div>
  ) : null;
}
