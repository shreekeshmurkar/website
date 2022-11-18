import Link from "next/link";
import Head from "next/head";
import { attributes } from "../content/about.md";
import styles from "../styles/About.module.css";
import ReactMarkdown from "react-markdown";
export default function About({ attr }) {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="We build amazing things" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>{attr.title}</h1>
        <div className={styles.content}><ReactMarkdown children={attr.aboutContent}/></div>
      </div>
      <div className={styles["process-container"]}>
        <h1 className={styles.title}>{attr.processTitle}</h1>
        <div className={styles.content}><ReactMarkdown children={attr.processContent}/></div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>{attr.domainTitle}</h1>
        {attr.domainContent.map(content => {
          return (
            <div key={content.id} className={styles["domain-container"]}>
              <h3>{content.title}</h3>
              <div><ReactMarkdown children={content.info} /></div>
            </div>
          ); 
        })}
        </div>
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      attr: attributes,
    },
  };
}
