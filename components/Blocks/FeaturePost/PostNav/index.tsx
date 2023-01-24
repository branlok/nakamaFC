import Link from 'next/link'
import React from 'react'
import Crown from '../../../assets/crown'
import ExternalLink from '../../../assets/externalLink'
import Bubble from '../../../Embellishments/Bubble'
import { StyledTag } from '../styled'
import StyledPostNav from './styled'
type Props = {}

function PostNav({ author, blogCategories, slug, disable3d, role }: any) {
    return (
        <StyledPostNav className='post-nav'>
            <div className="left">
                <Crown /> Written by  {<Bubble name={author} message={`Our ${role.charAt(0).toUpperCase() + role.slice(1)}`} />}
            </div>
            <div className="right">
                {slug && <Link className='external-link' scroll={true} href={`/blog/posts/${slug}`}><ExternalLink /></Link>}
                {blogCategories && blogCategories.map((tag: any, i: number) => <StyledTag disable3d={disable3d} className='custom-tag' rgb={"rgb(" + tag.color.r + "," + tag.color.g + "," + tag.color.b + ");"} key={i} ><Link className='category-link' href={`/blog/categories/${tag.blogCategoryName}`}>{tag.blogCategoryName}</Link></StyledTag>)}
            </div>
        </StyledPostNav>
    )
}

export default PostNav