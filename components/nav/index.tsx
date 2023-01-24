import Link from "next/link";
import Ship from "../assets/ship";
import NavItem from "./NavItem";
import StyledNav from "./styled";

type props = {
    subPath?: string
    blogCategories?: any
}

export default function Navigator({ subPath, blogCategories = [] }: props) {
    let blogCat = blogCategories.map((i: any) => i.blogCategoryName);
    return (
        <StyledNav color={'red'}>
            <nav>
                <div className="logo"><Link href={"/"}> <Ship />Nakama <span>{subPath}</span></Link></div>
                <div className="links">
                    <NavItem name={"Blog"} belongTo={'categories'} subMenu={blogCat} />
                    {/* <NavItem name={"Content"} subMenu={['Guides', 'Lore']} /> */}
                    <NavItem name={"Aboutus"} belongTo={'aboutus'} subMenu={['AboutUs']} />
                </div>
            </nav>
        </StyledNav>
    )
}