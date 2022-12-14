import type { NextPage } from "next";
import Head from "next/head";
import { Hiragana } from "../components/Categories/Hiragana";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>JPractice</title>
        <meta
          name="description"
          content="Practicing japanese with excercises"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>J. Practice</h1>

        <div className={styles.grid}>
          <Hiragana />
        </div>
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

export default Home;
