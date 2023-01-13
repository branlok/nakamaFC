import React from 'react'
import StyledBlockWrapper from './styled'

type Props = {}


// limit the amount of text, since this is a hook that takes rendesr large fonts.

function HookBlock({ }: Props) {
    return (
        <StyledBlockWrapper><div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget volutpat tortor.
        </div></StyledBlockWrapper>
    )
}

export default HookBlock