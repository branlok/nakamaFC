import React from 'react'
import StyledFeatureBlock from './styled'


function CenteredPost({ nobg, coverImage }: any) {

let title='announcemnts'
    return (
        <StyledFeatureBlock>
            <div className="wrapper">
                <div className="main-wrapper">
                    <h1>{title}</h1>
                </div>
            </div>
        </StyledFeatureBlock>
    )
}

export default CenteredPost