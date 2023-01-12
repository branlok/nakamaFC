import NavItem from "./NavItem";
import StyledNav from "./styled";

export default function Navigator() {
    return (
        <StyledNav>
            <nav>
                <div className="logo">Nakama</div>
                <div className="links">
                    <NavItem name={"Blog"} />
                    <NavItem name={"Content"} />
                    <NavItem name={"About us"} />
                </div>
            </nav>
        </StyledNav>
    )
}