import Header from "./Header/header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";

const Layout = (props) => {
  const brandname="Kiprosh America";
  return (
    <div>
      <Header brandname={brandname}/>
      <div className={styles["page-container"]}>{props.children}</div>
      <Footer brandname={brandname}/>
    </div>
  );
};
export default Layout