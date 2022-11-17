import Image from "next/image";
import styles from "../styles/Product.module.css";
import { attributes } from "../content/product.md";
import Link from "next/link";
export default function Product(props) {
    return (
    <>
        <Features {...props} />
        <h1 className={styles.title}>{props.attr.productTitle}</h1>
        <div className={styles["product-description"]}>{props.attr.productDescription}</div>
        <div className={styles["product-container"]}>
        {
            props.attr.productImages.map(image => {
                return <Image className={styles["product-image"]} height="300" width="400" src={image.src} alt="logo"></Image>
            })
        }
        </div>
        <Link href={props.attr.productLink}><div className={styles["product-link"]}>Explore</div></Link>
    </>
    )
}

const Features = (props) => {
    return <>
        <h1 className={styles.title}>{props.attr.featureSectionTitile}</h1>
        <div className={styles["feature-container"]}>
        {
            props.attr.features.map(feature => {
                return <div className={styles.feature}>
                <div className={styles["feature-image"]}><Image height="50" width="50" src={feature.image} alt="logo"></Image></div>
                <div className={styles["feature-title"]}><span>{feature.title}</span></div>
                <div className={styles["feature-description"]}><span>{feature.description}</span></div>
            </div>
            })
        }
        </div> 
    </>
}

export async function getStaticProps() {
    return {
        props: {
           attr: attributes,
        },
      };
} 