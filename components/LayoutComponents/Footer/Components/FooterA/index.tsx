import Link from 'next/link'
import React from 'react'
import StyledFooterListWrapper from './styled'

type Props = {}

function index({ blogLinks = null, aboutUsLinks = [] }: any) {


  return (
    <StyledFooterListWrapper>
      <div className="brand">
        More Links
      </div>
      <div className='link-container'>
        <div className="link-wrapper">
          <h1>Blog</h1>
          {blogLinks && blogLinks.map((item: any) => <Link key={item.blogCategoryName} href={`/blog/categories/${item.blogCategoryName}`}>{item.blogCategoryName}</Link>)}
          {/* {blogLinks.map((link: any) => <Link key={link} href={`/blog/categories/${link}`}>{link}</Link>)} */}
        </div>
        <div className="link-wrapper">
          <h1>About Us</h1>
          {aboutUsLinks.length === 0 ? <Link key={'aboutLink'} href={`/aboutus`}>About Us</Link> : aboutUsLinks.map((link: any) => <Link key={link} href={`/blog/aboutus/${link}`}>{link}</Link>)}
        </div>

      </div>
    </StyledFooterListWrapper>
  )
}

export default index