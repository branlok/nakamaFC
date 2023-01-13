import React, { useEffect } from 'react'
import Wave from '../assets/wave'
import StyledWrapper from './styled'

type Props = {}


function HomeLayout({ }: Props) {
    useEffect(() => {

    })
    return (
        <StyledWrapper>
            <Wave />
            <div className="content">
                asdto
            </div>
        </StyledWrapper >
    )
}

export default HomeLayout