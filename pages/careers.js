import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Careers.module.css";
export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="description" content="Careers at KA" />
      </Head>
      <h2>Join our team</h2>

      <>
        <div className={styles.card}>
          <h2> Software Engineer DotNet</h2>
          <p> Looking for DotNet , Mvc ,.NetCore, SQL expertise individual </p>
          <Link
            className={styles.applyLink}
            href="https://airtable.com/shrd8wffs2FpB1J8h"
          >
            Apply
          </Link>
        </div>
        <div className={styles.card}>
          <h2> Software Engineer JAVA</h2>
          <p> Technologies Needed: Java, Angular , MVC & SQL </p>
          <Link
            className={styles.applyLink}
            href="https://airtable.com/shrd8wffs2FpB1J8h"
          >
            Apply
          </Link>
        </div>
        <div className={styles.card}>
          <h2> Software Engineer REACT</h2>
          <p> Technologies Needed: JS, React , NextJs & Vue Js </p>
          <Link
            className={styles.applyLink}
            href="https://airtable.com/shrd8wffs2FpB1J8h"
          >
            Apply
          </Link>
        </div>
      </>
    </>
  );
}
