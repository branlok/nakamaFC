import React from 'react'
import Sad from '../../assets/sad'
import Smiley from '../../assets/smiley'
import StyledPollWrapper from './styled'

type Props = {}

function index({ }: Props) {
    return (
        <StyledPollWrapper><p>Was this post helpful?</p>
            <div className="option-wrapper">
                <Smiley />
                <Sad />
            </div></StyledPollWrapper>
    )
}

export default index