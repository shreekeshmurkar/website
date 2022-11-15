import { Fragment } from "react";
import Link from "next/link";

const NavItem =  (props) => {
    return (
      <Link href={props.route}>
        {props.value}
      </Link>
    );
}
const NavList = (props) => {
    return <Fragment>
        {props.items.map((item) => {
            return <NavItem key={item.id} route={item.route} value={item.value} />
        })}
    </Fragment>
}


export default NavList;