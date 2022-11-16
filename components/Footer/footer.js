import Image from "next/image";
import styles from "./Footer.module.css";
const Footer = (props) => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-box"]}>
        <div className={styles["brand-container"]}>
          <Image
            width="20"
            height="20"
            alt="Kiprosh America"
            href="/"
            src="/Logo.svg"
          />
          <div className={styles.brandname}>{props.brandname}</div>
        </div>
        <div>
          A company that develops software and makes scalable internet product.
        </div>
      </div>
      <div className={styles["footer-box"]}>
        <div>
          <h4>Get In touch</h4>
          <p>+1 000 000 0000</p>
          <p>hello@kiproshamerica.com</p>
        </div>
        <div>
          <h4>Customer support</h4>
          <p>support@kiproshamerica.com</p>
        </div>
      </div>
      <div className={styles["footer-box"]}>
        <div>
          <h4>Location</h4>
          <p>support@kiproshamerica.com</p>
        </div>
        <div>
          <h4>Follow Us</h4>
          <p>support@kiproshamerica.com</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
