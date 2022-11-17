import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getOpenings } from "./api/utils/airtable";
import styles from "../styles/Careers.module.css";
import Section from "../components/section/Section";
export default function Careers({ openings }) {
  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="description" content="Careers at KA" />
      </Head>
      <GetStartedSection />
      <Section title="Current Openings">
        {openings.map((opening) => {
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

function GetStartedSection(){
   return (
    
    <div className={styles["section-container"]}>
    <div className={styles["title-container"]}> How do you get started?</div>
    <div className={styles["children-container"]}>
    <div>
    <Image
        width="100"
        height="100"
        alt="Apply"            
        src="/apply.svg"
      />
      <h3>1. Apply</h3>
      <p>Look for the current openings and apply for the best fit job role.</p>
    </div>
    <div >
    <Image
        width="100"
        height="100"
        alt="Apply"            
        src="/interview.svg"
      />
      <h3>2. Interview</h3>
      <p>We will line up a interview call with our technical team.</p>
    </div>
    <div>
    <Image
        width="100"
        height="100"
        alt="Join"            
        src="/join.svg"
      />
      <h3>3. Join</h3>
      <p>That’s it, you’re all set and you can dive right in!</p>
    </div>
    </div>
  </div>
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
