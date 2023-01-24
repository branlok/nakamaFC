import React from 'react'
import StyledImageBlock from './styled'

type Props = {}


// limit the amount of text, since this is a hook that takes rendesr large fonts.

function ImageBlock({ url, alt }: any) {
    return (
        <StyledImageBlock>
            <img src={url} />
        </StyledImageBlock>
    )
}

export default ImageBlock