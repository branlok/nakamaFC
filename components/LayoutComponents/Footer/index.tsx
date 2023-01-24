import React, { useEffect, useRef, useState } from 'react'
import StyledFooter from './styled'

type Props = {
    primaryBlock: any,
    secondaryBlock: any
}

function FooterLayout({ primaryBlock, secondaryBlock }: Props) {



    return (
        <StyledFooter>
            <div className="footer-section-wrapper">
                <div className="block-a">{primaryBlock}</div>
                <div className="block-b">{secondaryBlock}</div>
            </div>
            <div className="legal-footer">
                NakamaFC
            </div>
        </StyledFooter>
    )
}

export default FooterLayout 