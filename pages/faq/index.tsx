import { GetStaticPropsContext } from 'next/types'
import React from 'react'
import Nav from '../../components/nav'
import getPrebuiltCategories from '../../prebuildResources/prebuildScripts/getPrebuiltCategories'
import FaqLayout from '../../components/LayoutComponents/FaqLayout'
import getPrebuiltJSON from '../../prebuildResources/prebuildScripts/getPrebuiltJson'



type Props = any

function Gallery({ faqData, categories }: any) {
    return (
        <>
            <Nav subPath={'FAQs'} blogCategories={categories} />
            <main>
                <FaqLayout data={faqData} />
            </main>
        </>
    )
}

export default Gallery

export async function getStaticProps(context: GetStaticPropsContext) {
    //0. top navigator - 
    let categoryData = await getPrebuiltCategories();
    let faqData = await getPrebuiltJSON('faq');

    return {
        props: { categories: categoryData, faqData: faqData }
    }
}

