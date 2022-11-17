import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getOpenings } from "./api/utils/airtable";
import styles from "../styles/Careers.module.css";
export default function Careers({ openings }) {
  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="description" content="Careers at KA" />
      </Head>
      <WhyUsSection />
      <GetStartedSection />
      <div className={styles["section-container"]}>
        <div className={styles["title-container"]}> Current Openings</div>
        {openings.map((opening) => {
          return (
            <div key={opening.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <span className={styles["opening-title"]}>
                    {opening.fields.Title}
                  </span>
                </div>
                <div className={styles.applyBtn}>
                  <Link                   
                    href={`https://airtable.com/shrd8wffs2FpB1J8h?prefill_Job Role=${opening.fields.Title}`}
                  >
                    Apply
                  </Link>
                </div>
              </div>
              <div className={styles.cardBody}></div>
              <p>
                <b>Description :</b> {opening.fields.Description}
              </p>
              <p><b>Experience :</b> {opening.fields.Experience}</p>
              <p><b>Location :</b> {opening.fields.Location}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

function GetStartedSection() {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["title-container"]}> How do you get started?</div>
      <div className={styles["children-container"]}>
        <div>
          <Image width="100" height="100" alt="Apply" src="/apply.svg" />
          <h3>1. Apply</h3>
          <p>
            Look for the current openings and apply for the best fit job role.
          </p>
        </div>
        <div>
          <Image width="100" height="100" alt="Apply" src="/interview.svg" />
          <h3>2. Interview</h3>
          <p>We will line up a interview call with our technical team.</p>
        </div>
        <div>
          <Image width="100" height="100" alt="Join" src="/join.svg" />
          <h3>3. Join</h3>
          <p>That’s it, you’re all set and you can dive right in!</p>
        </div>
      </div>
    </div>
  );
}

function WhyUsSection() {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["title-container"]}> Why Us?</div>
      <div className={styles["children-container"]}>
        <div className={styles["flex-col"]}>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className={styles["flex-col"]}>
          <Image
            width="300"
            height="300"
            alt="Career"
            src="/CareerWhyUs.jpg"
          ></Image>
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
