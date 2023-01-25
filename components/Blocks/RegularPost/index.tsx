import React from 'react'
import StyledRegularPost from './styled'
import TimeAgo from 'react-timeago'
import Link from 'next/link'
import ExternalLink from '../../assets/externalLink'
type Props = { author: string, title: string, content: string, createdOn: string, tags: string[], coverImage: string }

function RegularPost({ title, author, createdOn, slug, avgColor, categories }: any) {
    let rgb = categories[0] ? "rgb(" + categories[0].color.r + "," + categories[0].color.g + "," + categories[0].color.b + ");" : 'rgba(255,255,255, 1)'
    let secondRGB = categories[1] ? "rgb(" + categories[1].color.r + "," + categories[1].color.g + "," + categories[1].color.b + ");" : rgb
    let thirdRGB = categories[2] ? "rgb(" + categories[2].color.r + "," + categories[2].color.g + "," + categories[2].color.b + ");" : rgb
    return (
        <StyledRegularPost bgColor={avgColor} primaryCategoryColor={rgb} secondaryCategoryColor={secondRGB} thirdCategoryColor={thirdRGB}>
            <div className="wrapper">
                <div className="meta">
                    <div className="left">
                        Written by {author}
                    </div>
                    {slug && <Link className='external-link' scroll={false} href={`/blog/posts/${slug}`}><ExternalLink /></Link>}
                </div>
                <div className="main-wrapper">
                    <h1>
                        {title}
                    </h1>
                    <h2>
                        <TimeAgo date={createdOn} />
                        {" "}  {categories.map((i: any, idx: number) => <span key={idx}> | {" "}{i.blogCategoryName}</span>)}
                    </h2>
                </div>
            </div>
        </StyledRegularPost>
    )
}

export default RegularPost