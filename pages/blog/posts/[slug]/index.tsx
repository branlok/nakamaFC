
import React, { useEffect } from 'react'
import PostNav from '../../../../components/Blocks/FeaturePost/PostNav'
import FullScreenPostCover from '../../../../components/Blocks/FullScreenPostCover'
import GeneralTextBlock from '../../../../components/Blocks/GeneralTextBlock'
import { getBlogPostData } from '../../../../components/helpers/getBlogPostData'
import FooterLayout from '../../../../components/LayoutComponents/Footer'
import FooterA from '../../../../components/LayoutComponents/Footer/Components/FooterA'
import FooterLinks from '../../../../components/LayoutComponents/Footer/Components/FooterLinks'
import PostLayout from '../../../../components/LayoutComponents/PostLayout'
import Nav from '../../../../components/nav'
import Poll from '../../../../components/Widgets/Poll/Poll'
import getPrebuiltCategories from '../../../../prebuildResources/prebuildScripts/getPrebuiltCategories'
import getPrebuiltSpecificPost from '../../../../prebuildResources/prebuildScripts/getPrebuiltSpecificPost'
import client from '../../../../utils/sanityAPI'


function Post({ apiPackage, categories }: any) {
    let { author, blogCategories, blogpostImage, content, tags, title, createdOn } = getBlogPostData(apiPackage);


    useEffect(() => {
        globalThis.document.body.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Nav subPath={'Blog'} blogCategories={categories} />
            <main>
                <PostLayout heading={title} head={<FullScreenPostCover blurHash={apiPackage.blogpostImage.lqip} createdOn={createdOn} coverImage={blogpostImage} title={title} />} body={[<PostNav disable3d={true} key={'postnav'} author={apiPackage.author.name} role={apiPackage.author.role} blogCategories={apiPackage.blogCategories} />, <GeneralTextBlock key={'GeneralTextBlock'} config={{ color: '#ddddea' }} data={apiPackage.content} extensibleFooter={null} />, apiPackage.interactives ? <Poll key='poll' question={apiPackage.interactives} /> : null]} footer={<FooterLayout key={'footer'} primaryBlock={<FooterA blogLinks={categories} />} secondaryBlock={<FooterLinks />} />} />
            </main>
        </>
    )
}

export default Post

export async function getStaticPaths() {
    const query = "*[_type == 'blog' && !(_id in path('drafts.**'))] {      'id': _id,'slug': slug.current   } | order(createdOn desc)"

    let apiRequest = await client.fetch(query).then((data: any) => {
        return data;
    }).then((result: any[]) => {
        return result.map(item => {
            return {
                params: {
                    slug: item.slug
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
    let categoryData = await getPrebuiltCategories();
    let postData = await getPrebuiltSpecificPost(paths.params.slug);

    return {
        props: { apiPackage: postData, categories: categoryData }
    }
}

