import { a, config, useSpring } from '@react-spring/web'
import React, { useEffect, useRef, useState } from 'react'
import Wave from '../../assets/wave'
import StyledFooter from './styled'

type Props = {
    primaryBlock: any,
    secondaryBlock: any
}

function FooterLayout({ primaryBlock, secondaryBlock }: Props) {



    return (
        <StyledFooter>
            {/* <a.div style={spring} className="svg-wrapper">            <Wave /></a.div> */}
            <div className="footer-section-wrapper">
                <div className="block-a">{primaryBlock}</div>
                <div className="block-b">{secondaryBlock}</div>
            </div>
            <div className="legal-footer">
                bruh the relic grind is painful ©
            </div>
        </StyledFooter>
    )
}

export default FooterLayout 