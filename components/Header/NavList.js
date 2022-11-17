import { Fragment } from "react";
import Link from "next/link";

const NavItem =  (props) => {
    return (
      <Link href={props.href}>
        {props.title}
      </Link>
    );
}
const NavList = (props) => {
    return <Fragment>
        {props.items.map((item) => {
            return <NavItem href={item.href} title={item.title} />
        })}
    </Fragment>
}


export default NavList;