import Head from "next/head";
import Link from "next/link";
import { getOpenings } from "./api/utils/airtable";
import styles from "../styles/Careers.module.css";
export default function Careers({openings}) {
  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="description" content="Careers at KA" />
      </Head>
      <div>
        <h1>Current Openings</h1>
        {openings.map(opening => {
          return (
            <div key={opening.id} className={styles.card}>
              <h3>{opening.fields.Title}</h3>
              <p>Description : {opening.fields.Description}</p>
              <p>Experience : {opening.fields.Experience}</p>
              <p>Location : {opening.fields.Location}</p>
              <Link
                className={styles.applyLink}
                href={`https://airtable.com/shrd8wffs2FpB1J8h?prefill_Job Role=${opening.fields.Title}`}
              >
                Apply
              </Link>
            </div>
          );
        })}
      </div>      
    </>
  );
}

export async function getServerSideProps(context) {
  const jobOpenings = await getOpenings(); 
  return {
    props: {
      openings: jobOpenings,
    },
  };
}