import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const MainKanas: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Main Kanas</title>
        <meta name="description" content="Practicing main kanas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>J. Practice</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/kengru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <time>2022</time> © kengru.
        </a>
      </footer>
    </div>
  );
};

export default MainKanas;
