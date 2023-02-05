import { a, config, useSpring } from '@react-spring/web';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import StyledPresentationImage from './styled'
import TimeAgo from 'react-timeago'

function FullScreenPostCover({ blurHash, coverImage, title, createdOn }: { blurHash: string, coverImage: string, title: string, createdOn: any }) {
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
            config: config.molasses
        }
    })

    const [windowDimensions, setWindowDimensions] = useState<any>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount


    return (
        <StyledPresentationImage >
            <Image alt='' placeholder='blur' blurDataURL={blurHash} width={windowDimensions.width ?? 0} height={windowDimensions.height ?? 0} src={coverImage} />
            <div className="filter">
                <a.h1 style={spring} >{title}</a.h1>
                <TimeAgo className='time' date={createdOn} />
                <span>Scroll down</span>
            </div>
        </StyledPresentationImage>
    )
}

export default FullScreenPostCover