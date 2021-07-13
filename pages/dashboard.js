import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import withAuth from "../helpers/withAuth";
import firebase from "firebase/app";

function Dashboard() {
  function signOut() {
    // [START auth_sign_out]
    firebase
      .auth()
      .signOut()
      .then(() => {
        currentUser();
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    // [END auth_sign_out]
  }
  return (
    <div>
      <Head>
        <title>Babtiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1
          style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "150%" }}
        >
          Dashboard
        </h1>

        <p style={{ fontSize: "30px", lineHeight: "150%" }}>
          Order, Eat, Repeat
        </p>
        <button onClick={signOut}>Sign Out</button>
      </main>
    </div>
  );
}

export default withAuth(Dashboard);
