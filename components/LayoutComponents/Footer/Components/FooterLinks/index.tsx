import React from 'react'
import Aethernet from '../../../../assets/aethernet'
import StyledFooterListWrapper from './styled'

type Props = {}

function index({ }: Props) {
    return (
        <StyledFooterListWrapper>
            <div className="link-wrapper">
            <Aethernet />
                Discord?
            </div>
        </StyledFooterListWrapper>
    )
}

export default index