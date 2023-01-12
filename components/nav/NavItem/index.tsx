
import { a, config, useSpring } from "@react-spring/web";
import { useState } from "react";
import ItemTab from "./ItemTab";
import NavLink from "./NavLink";
import StyledNavItem from "./styled";


export default function NavItem({ name, subMenu }: { name: string, subMenu: string[] }) {
    let [onHover, setOnHover] = useState(false);

    let [styles, api] = useSpring(() => (
        {
            from: { top: 105, opacity: 0 },
            to: onHover ? { top: 45, opacity: 1 } : { top: 105, opacity: 0 },
            config: config.stiff
        }
    ), [onHover])
        console.log(subMenu)
    return (
        <StyledNavItem onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
            <div className="link-wrapper">
                <NavLink name={name} hovered={onHover} />
            </div>
            {onHover && <a.div style={styles} className="dropdown-menu">
                <div className="wrapper">
                    <div className="title">{name}</div>
                    {subMenu.map((item) => {
                        return <ItemTab name={item} />
                    })}
                </div>
            </a.div>}

        </StyledNavItem>
    )
}