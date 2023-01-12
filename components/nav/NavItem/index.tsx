
import { a, config, useSpring } from "@react-spring/web";
import { useState } from "react";
import ItemTab from "./ItemTab";
import NavLink from "./NavLink";
import StyledNavItem from "./styled";


export default function NavItem({ name }: { name: string }) {
    let [onHover, setOnHover] = useState(false);

    let [styles, api] = useSpring(() => (
        {
            from: { top: 0, opacity: 0 },
            to: onHover ? { top: 30, opacity: 1 } : { top: 0, opacity: 0 },
            config: config.wobbly
        }
    ), [onHover])

    return (
        <StyledNavItem onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
            <div className="link-wrapper">
                <NavLink name={name} hovered={onHover} />
            </div>
            <a.div style={styles} className="dropdown-menu">
                <div className="wrapper">
                    <div className="title">{name}</div>
                    <ItemTab name="bob" />
                    <ItemTab name="bob" /></div>
            </a.div>

        </StyledNavItem>
    )
}