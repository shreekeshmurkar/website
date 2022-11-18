import { Fragment } from "react";
import Link from "next/link";
import withRouter from "next/dist/client/with-router";
import styles from "./Header.module.css";

const NavItem = (props) => {
  const activeClass = props.isActive ? styles.isActiveRoute : "";
  return (
    <Link href={props.href} className={activeClass}>
      {props.title}
    </Link>
  );
};
const NavList = ({ router, items }) => {
  return (
    <Fragment>
      {items.map((item) => {
        return (
          <NavItem
            key={item.id}
            isActive={router.pathname === item.href}
            href={item.href}
            title={item.title}
          />
        );
      })}
    </Fragment>
  );
};

export default withRouter(NavList);
