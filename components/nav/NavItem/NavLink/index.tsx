import Link from "next/link";
import StyledLink from "./styled";

export default function Navigator({ name, hovered }: { name: string, hovered: boolean }) {
    return (
        <StyledLink hovered={hovered}>
            <Link href="/">{name}</Link>
        </StyledLink>
    )
}