import NavItem from "./NavItem";
import StyledNav from "./styled";

export default function Navigator() {
    return (
        <StyledNav>
            <nav>
                <div className="logo">Nakama</div>
                <div className="links">
                    <NavItem name={"Blog"} subMenu={['FC Announcements', 'Community', 'General Awareness']} />
                    <NavItem name={"Content"} subMenu={['Guides', 'Lore']} />
                    <NavItem name={"About us"} subMenu={['Nakama', 'Members', 'Support']} />
                </div>
            </nav>
        </StyledNav>
    )
}