import Image from "next/image";
import NavList from "./NavList";
import styles from "./Header.module.css";
import Link from "next/link";
const Header = (props) => {

    const items = [{
        id:"1",
        route:"/about",
        value:"About"
    },
    {
        id:"2",
        route:"/careers",
        value:"Careers"
    }]

    return (
      <div className={styles["header-container"]}>
        <Link href="/">  <div className={styles["brand-container"]}>
          <Image
            width="50"
            height="50"
            alt="Kiprosh America"
            href="/"
            src="/Logo.svg"
          />
          <div className={styles.brandname}>{props.brandname}</div>
        </div>
       </Link>
        <div className={styles.menu}>
          <NavList items={items} />
        </div>
      </div>
    );
}
export default Header;