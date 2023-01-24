import React, { useEffect } from 'react'
import CenteredPost from '../../Blocks/CenteredPost'
import FullScreenPostCover from '../../Blocks/FullScreenPostCover';
import { getBlogPostData } from '../../helpers/getBlogPostData';
import WaveCap from '../../TransitionalComponents/Wave';
import StyledBlogPost from './styled';

type Props = {}

function PostLayout({ head, body, footer, heading }: any) {
    useEffect(() => {
        globalThis.document.body.scrollTo(0, 0);
    }, [])


    return (
        <StyledBlogPost>
            <header>
                {head}
            </header>
            <div className='wrapper'>
                <WaveCap heading={''} intersectPosition={'top'} overrideIntialVisibility={true} configuration={{ titleSize: 'lg' }} />
                <div className="main-wrapper">
                    <h1>{heading}</h1>
                    {body}
                </div>
            </div>
            {footer}
        </StyledBlogPost>
    )
}

export default PostLayout