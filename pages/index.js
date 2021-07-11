import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Babtiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 style={{fontSize:'60px', fontWeight:'bold', lineHeight:'150%'}}>Babitz</h1>

        <p style={{fontSize:'30px', lineHeight:'150%'}}>Order, Eat, Repeat</p>
        <button type="button" className="btn btn-primary" style={{border:'none', borderRadius:'34px', marginTop:'30px', width:'100px', outline:'none'}}>
          Start Now
        </button>
      </main>

    </div>
  );
}
