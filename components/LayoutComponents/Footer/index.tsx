import React from 'react'
import Wave from '../../assets/wave'
import StyledFooter from './styled'

type Props = {
    primaryBlock: any,
    secondaryBlock: any
}

function FooterLayout({ primaryBlock, secondaryBlock }: Props) {
    return (
        <StyledFooter>
            <div className="svg-wrapper">            <Wave /></div>
            <div className="block-a">{primaryBlock}</div>
            <div className="block-b">{secondaryBlock}</div>
        </StyledFooter>
    )
}

export default FooterLayout 