import Link from "next/link";
import Info from "../assets/Info";
import PixelGallery from "../assets/PixelGallery";
import PixelJournal from "../assets/pixelJournal";
import Ship from "../assets/ship";
import NavItem from "./NavItem";
import StyledNav from "./styled";

type props = {
    subPath?: string
    blogCategories?: any
}

const ABOUT_US_MENU = [
    {
        name: 'About Us',
        path: 'aboutus'
    },
    {
        name: 'FAQs',
        path: 'faq'
    }
]

const GALLERY_MENU = [
    {
        name: 'Monthly Submissions',
        path: 'gallery'
    }
]


const BLOG_MENU = [
    {
        name: 'General Posts',
        path: 'blog'
    },
    {
        name: 'Announcements',
        path: 'blog/categories/Announcements'
    }
]

export default function Navigator({ subPath, blogCategories = [] }: props) {
    let blogCat = blogCategories.map((i: any) => i.blogCategoryName);



    return (
        <StyledNav color={'red'}>
            <nav>
                <div className="logo"><Link href={"/"}> <Ship />Nakama <span>{subPath}</span></Link></div>
                <div className="links">
                    <NavItem icon={<PixelJournal />} name={"Blog"} basePath={'blog'} subMenu={BLOG_MENU} />
                    {/* <NavItem name={"Content"} subMenu={['Guides', 'Lore']} /> */}
                    <NavItem icon={<PixelGallery />} name={"Gallery"} basePath={'gallery'} subMenu={GALLERY_MENU} />
                    <NavItem icon={<Info />} name={"About Us"} basePath={'aboutus'} subMenu={ABOUT_US_MENU} />
                </div>
            </nav>
        </StyledNav>
    )
}