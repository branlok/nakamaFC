import { a, config, useSpring } from "@react-spring/web"
import StyledHeader, { StyledHeaderWrapper } from "./styled"

export default function Billboard({ title, tagline }: any) {
    return (
        <StyledHeaderWrapper>
            <StyledHeader>
                <h1>{title}</h1>
                <h2 className='sub-heading'>●{' '}{tagline}{' '} ●</h2>
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

