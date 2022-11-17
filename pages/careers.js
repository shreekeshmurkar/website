import Head from "next/head";
import Link from "next/link";
import { getOpenings } from "./api/utils/airtable";
import styles from "../styles/Careers.module.css";
import Section from "../components/section/Section";
export default function Careers({openings}) {
  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="description" content="Careers at KA" />
      </Head>
      <Section title="Current Openings">
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
      </Section>      
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