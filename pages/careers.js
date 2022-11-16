import Head from "next/head";
import Link from "next/link";
import { getOpenings } from "./api/utils/airtable";
export default function Careers({openings}) {
  console.log(openings);
  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="description" content="Careers at KA" />
      </Head>
      <div>
        <h1>Current Openings</h1>
        {openings.map(opening => {
          return <div key={opening.id}>
            <h3>{opening.fields.Title}</h3>
            <p>Desciption : {opening.fields.Desciption}</p>
            <p>Experience : {opening.fields.Experience}</p>
            <p>Location : {opening.fields.Location}</p>
          </div>
        })}
      </div>
      <Link href="/">Back to Home</Link>
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