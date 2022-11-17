import Image from "next/image";
import NavList from "./NavList";
import styles from "./Header.module.css";
const Header = (props) => {
    return (
      <div className={styles["header-container"]}>
        <div className={styles["brand-container"]}>
          <Image
            width="50"
            height="50"
            alt="Kiprosh America"
            href="/"
            src="/Logo.svg"
          />
          <div className={styles.brandname}>{props.brandname}</div>
        </div>
        <div className={styles.menu}>
          <NavList items={props.menuItems} />
        </div>
      </div>
    );
}
export default Header;

export async function getStaticProps() {
  return {
    props: {
      attr: attributes,
    },
  };
}