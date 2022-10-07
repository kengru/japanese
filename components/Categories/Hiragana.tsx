import Link from "next/link";
import styles from "./Category.module.css";

export function Hiragana() {
  return (
    <div>
      <h1>Hiragana</h1>
      <div className={styles.buttonList}>
        <Link href="/hiragana/main" className={styles.startButtons}>
          Main Kanas
        </Link>
        <Link href="/hiragana/dakuten" className={styles.startButtons}>
          Dakuten Kanas
        </Link>
        <Link href="/hiragana/combination" className={styles.startButtons}>
          Combination Kanas
        </Link>
        <Link href="/hiragana/all" className={styles.startButtons}>
          All Kanas
        </Link>
      </div>
    </div>
  );
}
