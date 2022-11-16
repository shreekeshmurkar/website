import Header from "./Header/header";
import Footer from "./Footer/footer";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <Header brandname="Kiprosh America"/>
      <div className={styles["page-container"]}>{props.children}</div>
      <Footer />
    </div>
  );
};
export default Layout