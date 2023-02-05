import Link from "next/link";
import StyledTab from "./styled";

export default function Navigator({ name, path }: { name: string, path: string }) {
    // let url = belongTo === 'categories' ? `/blog/categories/${name}` : `/${belongTo}`
    return (
        <StyledTab>
            <Link href={`\/${path}`}>{name}</Link>
        </StyledTab>
    )
}