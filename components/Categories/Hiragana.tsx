import Link from "next/link";
import styles from "./Category.module.css";

export function Hiragana() {
  return (
    <div>
      <h1 className={styles.title}>Hiragana</h1>
      <ul className={styles.buttonList}>
        <li>
          <Link href="/hiragana/main" className={styles.startButtons}>
            Main Kanas
          </Link>
        </li>
        <li>
          <Link href="/hiragana/dakuten" className={styles.startButtons}>
            Dakuten Kanas
          </Link>
        </li>
        <li>
          <Link href="/hiragana/combination" className={styles.startButtons}>
            Combination Kanas
          </Link>
        </li>
        <li>
          <Link href="/hiragana/all" className={styles.startButtons}>
            All Kanas
          </Link>
        </li>
      </ul>
    </div>
  );
}
