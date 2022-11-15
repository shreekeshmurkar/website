import Header from "./Header/header";
import Footer from "./Footer/footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout