import Head from 'next/head'
import Image from 'next/image'
import client from '../utils/sanityAPI'
import { GetStaticPropsContext } from 'next/types'
import Nav from '../components/nav'
import LandingCover from '../components/LandingCover'

import GeneralTextBlock from '../components/Blocks/GeneralTextBlock'
import HookBlock from '../components/Blocks/HookBlock'
import ImageBlock from '../components/Blocks/ImageBlock'
import FooterLayout from '../components/LayoutComponents/Footer'
import parseAssetId from '../utils/composeUrl'
import FooterLinks from '../components/LayoutComponents/Footer/Components/FooterLinks'
import FooterA from '../components/LayoutComponents/Footer/Components/FooterA'
import getPrebuiltCategories from '../prebuildResources/prebuildScripts/getPrebuiltCategories'



export default function Home({ apiPackage, categories }: { apiPackage: any, categories: any }) {
  console.log(apiPackage)
  let ComponentBuilder = (resource: any) => {
    let ComponentBuilder = resource.map((item: any, i: number) => {
      switch (item._type) {
        case 'cover':
          return <LandingCover key={i} title={item.heading} tagline={item.tagline} image={item.landingImage.asset._ref} />;
          break;
        case 'landingHook':
          return <HookBlock key={i} hookContent={item.hookContent} hookHeading={item.hookHeading} wavesIncluded={item.transitionWaves} />;
          break;
        case 'imagePresentation':
          // return null;
          return <ImageBlock key={i} url={parseAssetId(item.landingSectionImage.asset._ref)} alt={item.alt} />;
          break;
        case 'landingParagraph':
          return <GeneralTextBlock key={i} data={item.content} extensibleFooter={undefined} />;
          break;
      }
    })

    return ComponentBuilder
  }

  let x = ComponentBuilder(apiPackage);

  return (
    <>
      <Head>
        <title>NakamaFC</title>
        <meta name="description" content="A Final Fantasy 14 Free Company" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* <link rel="icon" href="/favicon.ico" /> */}

      </Head>
      <main>
        <Nav blogCategories={categories} />
        {x}
        <FooterLayout primaryBlock={<FooterA blogLinks={categories} />} secondaryBlock={<FooterLinks />} />
      </main>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {

  const query = '*[_type == "homePage" && !(_id in path("drafts.**"))][0]';
  let apiRequest = await client.fetch(query).then((data: any) => {
    return data.pageBuilder;
  }).then((r: any) => {
    //replace url to our local CDN

    const reg = /(https\:\/\/cdn.sanity.io\/images\/([^]*?)\/production\/)/g
    const newStr = JSON.stringify(r).replace(reg, "https://testing.bobhere.workers.dev/");
    return JSON.parse(newStr);

  })

  let categoryData = await getPrebuiltCategories();

  return {
    props: { apiPackage: apiRequest, categories: categoryData }
    // props: { name }, // will be passed to the page component as props
  }
}