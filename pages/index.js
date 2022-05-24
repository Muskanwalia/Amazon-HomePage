import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Amazhomepage from "./amazhomepage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon HomePage</title>
        <Amazhomepage/>
      </Head>
    </div>
  );
}