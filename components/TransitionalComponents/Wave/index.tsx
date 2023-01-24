import { a, useSpring, config } from '@react-spring/web'
import React, { useEffect, useRef, useState } from 'react'
import Wave from '../../assets/wave';
import StyledAnimatedCap, { StyledAnimatedSvg } from './styled';

type Props = {
    heading: string,
    intersectPosition: 'top' | 'middle' | 'bottom'
    height?: number
    overrideIntialVisibility?: boolean     //for front-page stuff
    configuration: {
        titleSize: 'sm' | 'md' | 'lg'
    }
}

function WaveCap({ heading, intersectPosition = 'top', height = 50, overrideIntialVisibility = false, configuration = { titleSize: 'lg' } }: Props) {


    let [visible, setVisible] = useState(overrideIntialVisibility);

    let intersectRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible(entry.isIntersecting);
        })
        observer.observe(intersectRef.current as any);
    }, [])
    
    //configurables
    let intersectables: {
        top: string,
        middle: string,
        bottom: string
    } = {
        top: '0%',
        middle: '-50%',
        bottom: '-100%'
    }

    let [spring2, api2] = useSpring(() => (
        {
            from: {
                height: 0
            },
            to: {
                height: visible ? 0 : 150
            },
            config: config.molasses
        }
    ), [visible])


    let [spring, api] = useSpring(() => (
        {
            from: {
                top: -height * 1.2 + 1,
                x: '-50%',
                width: "400%",
                height: height * 1.2,
            },
            to: {
                top: -height * 1.2 + 1,
                x: '0%',
                width: "400%",
                height: (height * 1.2),
            },
            loop: true,
            // reset: true,
            config: {
                duration: 12000
            }
        }
    ), [visible])


    return (
        <StyledAnimatedCap textSize={configuration.titleSize} style={spring2} show={visible} top={intersectables[intersectPosition]} className="svg-wrapper">
            <StyledAnimatedSvg style={spring} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1031.842 42.5"
                width="1em"
                height="1em">
                <path
                    className="a"
                    d="M515.921 19.391c-16.671 7.281-46.056 11.486-78.265 13.443C374.07 36.697 385.557 3.22 326.252 3.22c-75.445 0-80.014 42.04-153.71 31.683-19.743-2.774-38.55-26.36-68.394-31.729C65.55-3.77 48.446 3.22.5 19.391V42h515.421Z"
                />
                <path
                    className="a"
                    d="M1031.342 19.391c-16.671 7.281-46.056 11.486-78.265 13.443C889.491 36.697 900.98 3.22 841.673 3.22c-75.445 0-80.014 42.04-153.71 31.683-19.743-2.774-38.55-26.36-68.394-31.729-38.598-6.944-55.702.046-103.648 16.217V42h515.421Z"
                />
            </StyledAnimatedSvg>
            <div ref={intersectRef} className='observer'></div>
            <div className='hidden-text'> {heading}</div>
        </StyledAnimatedCap>
    )
}

export default WaveCap