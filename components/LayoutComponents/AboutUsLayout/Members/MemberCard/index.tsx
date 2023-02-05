import Image from 'next/image'
import React from 'react'
import Crown from '../../../../assets/crown'
import Member from '../../../../assets/member'
import StyledMemberCard from './styled'
Image
type Props = {}

function index({ name, role, profileImage, description }: any) {
    return (
        <StyledMemberCard>
            <Image alt='' width={80} height={80} src={profileImage} />
            <div className='wrapper'>
                <h1 className="name"> <span className='status'>{role === 'leader' ? <Crown /> : <Member />}</span> {name}</h1>
                <p className="about">{description}</p>
            </div>
        </StyledMemberCard>
    )
}

export default index