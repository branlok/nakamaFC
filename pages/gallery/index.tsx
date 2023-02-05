import { GetStaticPropsContext } from 'next/types'
import React, { useEffect } from 'react'
import Nav from '../../components/nav'
import getPrebuiltCategories from '../../prebuildResources/prebuildScripts/getPrebuiltCategories'
import getPrebuiltBlogPosts from '../../prebuildResources/prebuildScripts/getPrebuiltBlogPosts'
import GalleryHeader from '../../components/Blocks/GalleryBlocks/GalleryHeader'
import GalleryMore from '../../components/Blocks/GalleryBlocks/GalleryMore'
import getPrebuiltFeaturedGallery from '../../prebuildResources/prebuildScripts/getPrebuiltFeaturedGallery'
import getPrebuiltMonthlyGallery from '../../prebuildResources/prebuildScripts/getPrebuiltMonthlyGallery'
import GalleryComingSoon from '../../components/Blocks/GalleryBlocks/GalleryComingSoon'
import FooterLayout from '../../components/LayoutComponents/Footer'
import FooterA from '../../components/LayoutComponents/Footer/Components/FooterA'
import FooterLinks from '../../components/LayoutComponents/Footer/Components/FooterLinks'



type Props = any

function Gallery({ galleryData, monthlyGallery, categories }: any) {
    // return 
    useEffect(() => {
        globalThis.document.body.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Nav subPath={'Gallery'} blogCategories={categories} />
            <main>
                <GalleryHeader data={galleryData} />
                <GalleryMore data={monthlyGallery} />
                <GalleryComingSoon />
                <FooterLayout primaryBlock={<FooterA blogLinks={categories} />} secondaryBlock={<FooterLinks />} />
            </main>
        </>
    )
}

export default Gallery

export async function getStaticProps(context: GetStaticPropsContext) {
    //0. top navigator - 
    let categoryData = await getPrebuiltCategories();
    //1. category posts -

    //2. list posts -
    let monthlyData = await getPrebuiltMonthlyGallery();
    let galleryData = await getPrebuiltFeaturedGallery();

    return {
        props: { galleryData: galleryData.items, monthlyGallery: monthlyData, categories: categoryData }
    }
}

