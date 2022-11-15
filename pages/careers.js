import Head from "next/head";
import Link from "next/link";
export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers</title>
        <meta
          name="description"
          content="Careers at KA"
        />
      </Head>
      <h1>Careers Page</h1>
      <Link href="/">Back to Home</Link>
    </>
  );
}
