import { useSpring, config } from '@react-spring/web';

import React, { useRef, useState } from 'react'
import StyledBubble, { StyledBubbleWrapper } from './styled'
//config is tied to our devloper experience for variance.
//data is what it supports
type Props = {
    message: string;
}

function Bubble({ widthOfBottom, message, name }: any) {
    let [hovered, setHover] = useState(false);
    let [spring, api] = useSpring(() => {
        return {
            opacity: hovered ? 1 : 0,
            translateY: hovered ? 0 : 5,
            rotateZ: hovered ? '0deg' : '5deg',
            transformOrigin: 'center right%',
            reverse: !hovered,
            config: config.stiff
        }
    }, [hovered])
    let ref = useRef<HTMLSpanElement>(null);
    return (
        <StyledBubbleWrapper>
            {<StyledBubble style={spring} width={ref.current ? ref.current?.clientWidth : 0}>{message}</StyledBubble>}
            <span ref={ref} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>{name}</span>
        </StyledBubbleWrapper>
    )
}

export default Bubble