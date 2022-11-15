import Link from "next/link";
import Head from "next/head";
import { attributes } from '../content/about.md';

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
}