import React from 'react'
import StyledImageBlock from './styled'

type Props = {}


// limit the amount of text, since this is a hook that takes rendesr large fonts.

function ImageBlock({ }: Props) {
    return (
        <StyledImageBlock>
            <img src='https://external-preview.redd.it/CUYJ8LWjmrBNYWZYUzA5VXGea13aubSOHjRx4JTdzrQ.jpg?auto=webp&s=ab26157947e17264fa8ca13c246865a54c780c34' />
        </StyledImageBlock>
    )
}

export default ImageBlock