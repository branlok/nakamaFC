
import React from 'react'
import Moogle from '../../assets/moogle'
import StyledNoticePost from './styled'

function NoPost({ data }: any) {


    return (
        <StyledNoticePost>
            <div className="wrapper">
                <Moogle />
                <h1>
                    Posts Coming Soon
                </h1>
            </div>
        </StyledNoticePost >
    )
}

export default NoPost