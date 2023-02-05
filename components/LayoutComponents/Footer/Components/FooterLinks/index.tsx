import React from 'react'
import Aethernet from '../../../../assets/aethernet'
import Discord from '../../../../assets/Discord'
import StyledFooterListWrapper from './styled'

type Props = {}

function index({ }: Props) {
    return (
        <StyledFooterListWrapper>
            <div className="link-wrapper">
                <Discord /> Discord
            </div>
        </StyledFooterListWrapper>
    )
}

export default index