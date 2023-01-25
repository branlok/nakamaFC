import Link from "next/link";
import StyledTab from "./styled";

export default function Navigator({ belongTo, name }: { name: string, belongTo: any }) {
    let url = belongTo === 'categories' ? `/blog/categories/${name}` : `/${belongTo}`
    return (
        <StyledTab>
            <Link href={url}>{name}</Link>
        </StyledTab>
    )
}