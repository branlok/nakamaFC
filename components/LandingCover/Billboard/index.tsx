import { a, config, useSpring } from "@react-spring/web"
import Image from "next/image"
import StyledHeader, { StyledHeaderWrapper } from "./styled"

export default function Billboard({ title, tagline, photo1, photo2, blurHash1, blurHash2 }: any) {
    return (
        <StyledHeaderWrapper>
            <StyledHeader>
                <h1>{title}</h1>
                <h2 className='sub-heading'>●{' '}{tagline}{' '} ●</h2>
                <Image placeholder='blur' blurDataURL={blurHash1} alt='' width={500} height={500} className="photo-left photo" src={photo1}></Image>
                <Image placeholder='blur' blurDataURL={blurHash2} alt='' width={500} height={500} className="photo-right photo" src={photo2}></Image>
                <div className='levitate-wrapper-left '>
                    <img className='moogle-image moogle' src="/priateMoogle.png" />
                </div>
                <div className='levitate-wrapper-right'>
                    <img className='moogle-image-mirrored moogle' src="/moogleredpirate.png" />
                </div>
                <div className='ropee'></div>
            </StyledHeader >
        </StyledHeaderWrapper>
    )
}

