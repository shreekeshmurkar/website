import Link from "next/link";
import Head from "next/head";

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
}