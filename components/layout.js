import Header from "./Header/header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";
import {attributes} from "../content/menu.md";

const Layout = (props) => {
  const brandname="Kiprosh America";
  return (
    <div>
      <Header brandname={brandname} menuItems={attributes.menuItems}/>
      <div className={styles["page-container"]}>{props.children}</div>
      <Footer brandname={brandname}/>
    </div>
  );
};
export default Layout