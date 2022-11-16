import { Fragment } from "react";
import Link from "next/link";
import withRouter from "next/dist/client/with-router";
import styles from "./Header.module.css";

const NavItem =  (props) => {
  const activeClass= props.isActive? styles.isActiveRoute
    :"";  
    return (
      <Link href={props.route} className = {activeClass}>
        {props.value}
      </Link>
    );
}
const NavList = ({router, items}) => {
    return <Fragment>
        {items.map((item) => {
            return <NavItem isActive={router.pathname === item.route} key={item.id} route={item.route} value={item.value} />
        })}
    </Fragment>
}


export default withRouter(NavList);