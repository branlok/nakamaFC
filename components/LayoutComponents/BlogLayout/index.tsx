import { a, config, useSpring, useTrail, useTransition } from '@react-spring/web'
import React, { useEffect, useRef, useState } from 'react'
import RegularPost from '../../Blocks/RegularPost'
import StyledBlogLayout from './styled'

type Props = {
    mainPosts: any,
}

function BlogLayout({categoryNav, mainPosts, secondaryColumnData }: any) {
    let [focus, setFocus] = useState('main')
    // width: ${props => props.focus === 'main' ? 'calc(100% - 50px)' : 'calc(50% - 50px)'};
    let [spring, api] = useSpring(() => {
        return {
            width: 'calc(100% - 50px)',
        }
    }, [focus])

    let [spring2, api2] = useSpring(() => {
        return {
            width: focus !== 'main' ? '400px' : '50px',
            left: focus !== 'main' ? 'calc(100% - 400px)' : 'calc(100% - 50px)',
        }
    }, [focus])

    const [trails, api3] = useTrail(
        secondaryColumnData.length,
        () => ({
            from: { opacity: 0, translateY: -50 },
            to: { opacity: 1, translateY: 0 },
            // config: config.molasses,
            // pause:  focus === 'secondary' ? false : true
            reverse: focus === 'secondary' ? false : true
        }),
        [focus]
    )

    return (
        <StyledBlogLayout style={spring} focus={focus}>

            <a.div className="main-column">
                {categoryNav}
                {mainPosts}
            </a.div>
            <a.div style={spring2} className="secondary-column">
                <div onClick={() => setFocus((prev) => prev === "main" ? 'secondary' : 'main')} className="tab-title"><span> &gt; &nbsp; &gt; &nbsp; &gt; &nbsp; &gt;&nbsp;  &gt; &nbsp; &nbsp; </span>{focus === 'main' ? 'SEE OUR OLDER POSTS' : 'CLOSE'}<span>&nbsp; &nbsp; &lt; &nbsp; &lt; &nbsp; &lt; &nbsp; &lt; &nbsp; &lt; </span></div>
                {<div className='secondary-main' > <h1>Our Posts</h1> {trails.map((props, index) => (
                    <a.div style={props} key={index}><RegularPost categories={secondaryColumnData[index].blogCategories} title={secondaryColumnData[index].title} slug={secondaryColumnData[index].slug} createdOn={secondaryColumnData[index].createdOn} author={secondaryColumnData[index].author.name} avgColor={secondaryColumnData[index].blogpostImage.averageColor} /></a.div>
                ))}</div>}
                {/* {columnPosts} */}
            </a.div>
        </StyledBlogLayout >
    )
}

export default BlogLayout 