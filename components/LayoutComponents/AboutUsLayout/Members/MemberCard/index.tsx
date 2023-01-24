import React from 'react'
import parseAssetId from '../../../../../utils/composeUrl'
import StyledMemberCard from './styled'

type Props = {}

function index({ name, role, profileImage, description }: any) {
    return (
        <StyledMemberCard>
            <img src={profileImage} />
            <div className='wrapper'>
                <h1 className="name">{name}</h1>
                <p className="about">{description}</p>
            </div>
        </StyledMemberCard>
    )
}

export default index