import React, { useEffect, useRef, useState } from 'react'
import Ship from '../../assets/ship';
import AboutPortableText from '../../Blocks/AboutPortableText';
import ImagePanel from '../../Blocks/ImagePanel';
import Members from './Members';
import MemberCard from './Members/MemberCard';
import StyledAboutUsWrapper from './styled'

type Props = {}

function AboutUsLayout({ data, members }: any) {
    let { title, content } = data;
    let [page, setPage] = useState('About Us');




    return (
        <StyledAboutUsWrapper>
            <div className="presentation">
                <div className='content-wrapper'>
                    <h1>{page}</h1>
                    <div className="presentation-wrapper">
                        {page == 'About Us' &&
                            <AboutPortableText data={content} />
                        }
                        <hr />
                        <h1>Members</h1>
                        {members.map((i: any, idx: number) => <MemberCard key={idx} name={i.name} role={i.role} description={i.description} profileImage={i.profileImage.url} />)}
                    </div>
                </div>

            </div>
            <div className='gallery' >
                {<ImagePanel images={data.images} />}

            </div>
            {/* <Ship /> */}
        </StyledAboutUsWrapper >
    )
}

export default AboutUsLayout