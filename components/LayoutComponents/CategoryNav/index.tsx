import { useRouter } from 'next/router'
import React from 'react'
import StyledCategoryNav, { StyledItem } from './styled'

type Props = {}

function CategoryNav({ categories }: any) {
    let router = useRouter();

    return (
        <div className='tab'>
            <h1>
                Welcome to The Blog
            </h1>
            <StyledCategoryNav>

                <StyledItem href={'/blog'} selected={router.pathname === '/blog'}>Most Recent</StyledItem>
                {categories.map((item: any) => <StyledItem key={item.blogCategoryName} selected={router.query.category == item.blogCategoryName} href={`/blog/categories/${item.blogCategoryName}`}>{item.blogCategoryName}</StyledItem>)}
            </StyledCategoryNav>
        </div>
    )
}

export default CategoryNav