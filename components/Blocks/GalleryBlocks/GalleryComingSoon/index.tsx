import React from 'react'
import Telescope from '../../../assets/telescope'
import StyledRowContainer from './styled'

type Props = {}

function GalleryComingSoon({ }: Props) {
    return (
        <StyledRowContainer>

            <div className="notice">                    <Telescope />More Pictures Coming Soon</div>
        </StyledRowContainer>
    )
}

export default GalleryComingSoon