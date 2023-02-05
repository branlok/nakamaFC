import Link from "next/link";
import StyledLink from "./styled";

export default function Navigator({ icon, name, hovered, path }: { icon: any, name: string, hovered: boolean, path: string }) {
    return (
        <StyledLink hovered={hovered}>
            <Link href={`/${path}`}><span className='icon'>{icon}</span> <span className='text'>{name}</span></Link>
        </StyledLink>
    )
}