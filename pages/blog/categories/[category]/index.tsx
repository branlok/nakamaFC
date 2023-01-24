import { GetStaticProps } from 'next'
import React from 'react'
import CenteredPost from '../../../../components/Blocks/CenteredPost'
import FeaturePost from '../../../../components/Blocks/FeaturePost'
import NoPost from '../../../../components/Blocks/NoPost'
import BlogLayout from '../../../../components/LayoutComponents/BlogLayout'
import CategoryNav from '../../../../components/LayoutComponents/CategoryNav'
import FooterLayout from '../../../../components/LayoutComponents/Footer'
import FooterA from '../../../../components/LayoutComponents/Footer/Components/FooterA'
import FooterLinks from '../../../../components/LayoutComponents/Footer/Components/FooterLinks'
import Nav from '../../../../components/nav'
import getPrebuiltBlogCategoryPosts from '../../../../prebuildResources/prebuildScripts/getPrebuiltBlogCategoryPosts'
import getPrebuiltBlogPosts from '../../../../prebuildResources/prebuildScripts/getPrebuiltBlogPosts'
import getPrebuiltCategories from '../../../../prebuildResources/prebuildScripts/getPrebuiltCategories'
import client from '../../../../utils/sanityAPI'


function Post({ apiPackage, postList, category, categories }: any) {

    let items = apiPackage.map((item: any, index: React.Key | null | undefined) => {
        return <FeaturePost key={index} data={item} />
    })

    if (items.length === 0) {
        items.push(<NoPost />)
    }

    return (
        <div>
            <Nav subPath={`${category}`} blogCategories={categories} />
            <BlogLayout categoryNav={<CategoryNav categories={categories} />} secondaryColumnData={postList} mainPosts={[...items, <FooterLayout key={'footer'} primaryBlock={<FooterA  blogLinks={categories}/>} secondaryBlock={<FooterLinks />} />]} />
        </div>
    )
}

export default Post

export async function getStaticPaths() {
    const query = "*[_type == 'blogCategories' && !(_id in path('drafts.**'))]{'name': blogCategoryName}"

    let apiRequest = await client.fetch(query).then((data: any) => {
        return data;
    }).then((result: any[]) => {
        return result.map(item => {
            return {
                params: {
                    category: item.name
                }
            }
        })
    })

    return {
        paths: apiRequest,
        fallback: false
    }

}

export async function getStaticProps(paths: any) {
    let categoryPosts = await getPrebuiltBlogCategoryPosts(paths.params.category)
    let postsData = await getPrebuiltBlogPosts();
    let categoryData = await getPrebuiltCategories();

    return {
        props: { apiPackage: categoryPosts, postList: postsData, category: paths.params.category, categories: categoryData }
    }
}

