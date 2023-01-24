import React from 'react'
import AboutUsLayout from '../../components/LayoutComponents/AboutUsLayout'
import Nav from '../../components/nav'
import getPrebuiltCategories from '../../prebuildResources/prebuildScripts/getPrebuiltCategories'
import getPrebuiltMemberDetails from '../../prebuildResources/prebuildScripts/getPrebuiltMemberDetails'
import client from '../../utils/sanityAPI'

type Props = {}

function AboutUs({ apiPackage, categories, members }: any) {

    return (
        <>
            <Nav subPath='info' blogCategories={categories} />
            <AboutUsLayout data={apiPackage} members={members} />
        </>
    )
}

export async function getStaticProps() {
    let query = `*[_type == 'aboutUs' ][0]{
        title,
          content,
        images[] {
          'imageData': asset-> {
            url
          }
        }
  
}
`
    let apiRequest = await client.fetch(query).then((data: any) => {
        return data;
    }).then((r: any) => {
        //replace url to our local CDN
        const reg = /(https\:\/\/cdn.sanity.io\/images\/([^]*?)\/production\/)/g
        const newStr = JSON.stringify(r).replace(reg, "https://testing.bobhere.workers.dev/");
        return JSON.parse(newStr);
    })

    //0. top navigator - 
    let categoryData = await getPrebuiltCategories();

    // const query3 = `*[_type == 'member'&& !(_id in path("drafts.**"))] {
    //     'profileImage':  profileImage.asset._ref,
    //     description,
    //     name,
    //     role
    // }`

    // let member = await client.fetch(query3).then((data: any) => {
    //     return data;
    // })

    let memberData = await getPrebuiltMemberDetails();

    return {
        props: { apiPackage: apiRequest, categories: categoryData, members: memberData }
    }
}

export default AboutUs