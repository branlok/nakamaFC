import { a, config, useSpring } from '@react-spring/web';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import LeftArrow from '../../../assets/leftArrow';
import RightArrow from '../../../assets/rightArrow';
import StyledGallery from './styled'

type Props = {}

function GalleryMore({ data }: any) {
    let ref = useRef<HTMLDivElement>(null);
    let intersectRef = useRef(null);
    let [visible, setVisible] = useState(false);

    let [spring, api] = useSpring(() => {
        return {
            to: {
                opacity: visible ? 1 : 0,
            },
            config: config.gentle
        }
    }, [visible])


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible(entry.isIntersecting);
        })
        observer.observe(intersectRef.current as any);
    }, [])

    return (
        <StyledGallery>
            <div className='observable' ref={intersectRef}></div>
            <div className="wrapper">
                <div className='title'>
                    <h1>Captured in Janurary!</h1>
                    <nav>
                        <ul>
                            <li>Janurary</li>
                        </ul>
                    </nav>
                </div>
                <div ref={ref} className='image-container'>
                    {data.items.map((item: any) => (<div key={item.id} className="image-wrapper">
                        <Image alt='' width="500" height={500 / item.metadata.aspectRatio} src={item.url} />
                    </div>)
                    )}
                </div>
                <a.button style={spring} className='left-btn' onClick={() => {
                    ref?.current?.scrollBy({
                        left: -500,
                        behavior: 'smooth'
                    });
                }}><LeftArrow /></a.button>
                <a.button style={spring} className='right-btn' onClick={() => {
                    ref?.current?.scrollBy({
                        left: 500,
                        behavior: 'smooth'
                    });
                }}><RightArrow /></a.button>
            </div>
        </StyledGallery>
    )
}

export default GalleryMore