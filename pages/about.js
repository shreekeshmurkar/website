import Link from "next/link";
import Head from "next/head";
import { attributes } from '../content/about.md';

<<<<<<< HEAD
export default function About({ attr }) {
    return ( <
        >
        <
        Head >
        <
        title > About Us < /title> <
        meta name = "description"
        content = "We build amazing things" / >
        <
        /Head> <
        h1 > { attr.metaTitle } < /h1> <
        h2 > { attr.metaDescription } < /h2> <
        Link href = "/" > Back to Hpme < /Link> <
        />
    );
}
export async function getStaticProps() {
    return {
        props: {
            attr: attributes,
        },
    };
=======
export default function About() {
    return (
      <>
        <Head>
          <title>About</title>
          <meta name="description" content="We build amazing things" />
        </Head>
        <h1>About Page</h1>
        <Link href="/">Back to Home</Link>
      </>
    ); 
>>>>>>> b683fed118003ababe810ecac24873f90a6a6d41
}