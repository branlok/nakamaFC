import { a, config, useSpring } from '@react-spring/web';
import React, { useEffect, useRef, useState } from 'react'
import StyledPresentationImage from './styled'


function FullScreenPostCover({ coverImage, title }: { coverImage: string, title: string }) {
    let [spring, api] = useSpring(() => {
        return {
            from: {
                opacity: 0,
                translateY: 50
            },
            to: {
                opacity: 1,
                translateY: 0
            },
            delay: 500,
            config: config.molasses
        }
    })


    return (
        <StyledPresentationImage >
            <img src={coverImage} />
            <div className="filter">
                <a.h1 style={spring} >{title}</a.h1>
                {/* <div>
                    <a.button style={spring}>Read Here</a.button>
                </div> */}
                <span>or scroll down</span>
            </div>
        </StyledPresentationImage>
    )
}

export default FullScreenPostCover