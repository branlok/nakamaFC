import { GetStaticPropsContext } from 'next/types'
import React from 'react'
import FeaturePost from '../../components/Blocks/FeaturePost'
import BlogLayout from '../../components/LayoutComponents/BlogLayout'
import FooterLayout from '../../components/LayoutComponents/Footer'
import FooterA from '../../components/LayoutComponents/Footer/Components/FooterA'
import FooterLinks from '../../components/LayoutComponents/Footer/Components/FooterLinks'
import Nav from '../../components/nav'
import getPrebuiltCategories from '../../prebuildResources/prebuildScripts/getPrebuiltCategories'
import getPrebuiltBlogPosts from '../../prebuildResources/prebuildScripts/getPrebuiltBlogPosts'
import CategoryNav from '../../components/LayoutComponents/CategoryNav'



type Props = any

function Blog({ apiPackage, postList, categories }: any) {
    let items = apiPackage.map((item: any, index: React.Key | null | undefined) => {
        return <FeaturePost key={index} data={item} />
    })


    return (
        <div className='main-content'>
            <Nav subPath={'Blog'} blogCategories={categories} />
            <BlogLayout categoryNav={<CategoryNav categories={categories} />} secondaryColumnData={postList} mainPosts={[...items, <FooterLayout key={'footer'} primaryBlock={<FooterA blogLinks={categories} />} secondaryBlock={<FooterLinks />} />]}>
            </BlogLayout>
        </div>
    )
}

export default Blog

export async function getStaticProps(context: GetStaticPropsContext) {
    //0. top navigator - 
    let categoryData = await getPrebuiltCategories();
    //1. category posts -

    //2. list posts -
    let postsData = await getPrebuiltBlogPosts();
    return {
        props: { apiPackage: postsData, postList: postsData, categories: categoryData }
    }
}

