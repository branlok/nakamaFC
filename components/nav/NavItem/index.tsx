
import { a, config, useSpring } from "@react-spring/web";
import { ReactComponentElement, useState } from "react";
import ItemTab from "./ItemTab";
import NavLink from "./NavLink";
import StyledNavItem from "./styled";

type SubMenu = {
    name: string,
    path: string
}

export default function NavItem({ icon, name, subMenu, basePath }: { icon: any, name: string, subMenu: SubMenu[], basePath: string }) {
    let [onHover, setOnHover] = useState(false);

    let [styles, api] = useSpring(() => (
        {
            from: { top: 65, opacity: 0 },
            to: onHover ? { top: 45, opacity: 1 } : { top: 65, opacity: 0 },
            config: config.stiff
        }
    ), [onHover])

    return (
        <StyledNavItem onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
            <div className="link-wrapper">
                <NavLink icon={icon} name={name} path={basePath} hovered={onHover} />
            </div>
            {onHover && <a.div style={styles} className="dropdown-menu">
                <div className="wrapper">

                    <div className="title">{name}</div>
                    {subMenu.map((item, index) => {
                        return <ItemTab name={item.name} key={index} path={item.path} />
                    })}
                </div>
            </a.div>}

        </StyledNavItem>
    )
}