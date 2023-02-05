import { animated, config, useSprings, useTransition } from '@react-spring/web'
import Image from 'next/image'
import React, { useState } from 'react'
import StyledGallery from './styled'

type Props = {}

function GalleryHeader({ data }: any) {

    let [index, setIndex] = useState(0);
    let rotations = [1, -10, 5, -3, 12, 3, -9]
    const [springs, api] = useSprings(
        data.length,
        (i, controller) => {
            return {
                from: { opacity: 0, scale: 1, translateY: 40, rotateZ: 0 },
                to: { opacity: (index % data.length) >= i ? 1 : 0, rotateZ: rotations[i], scale: 1, translateY: (index % data.length) >= i ? 0 : 40 },
                config: config.gentle
            }
        },
        [index]
    )

    return (
        <StyledGallery>
            <div className="wrapper">
                <div className="left">
                    <h1>
                        Gallery
                    </h1>
                    <div className='content'>
                        The gallery is a place for our communtiy to post iamges freely. Selfexpression..
                    </div>
                    <div className='cta-wrapper'>
                        <label>Control</label>
                        <div className='cta'>
                            <button onClick={() => setIndex(prev => --prev)}>Prev</button>
                            <button onClick={() => setIndex(prev => ++prev)}>Next</button>

                        </div>
                    </div>
                </div>
                <div className="right">
                    {springs.map((style, i) => (
                        <animated.div key={data[i]._id} style={{ transformOrigin: 'center center', ...style }}><Image placeholder={'blur'} blurDataURL={data[i].metadata.lqip} alt='' width="900" height="600" src={data[i].url} /></animated.div>
                    ))
                    }
                </div>
            </div>
        </StyledGallery>
    )
}

export default GalleryHeader