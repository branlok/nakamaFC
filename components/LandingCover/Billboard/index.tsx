import { config, useSpring } from "@react-spring/web"
import StyledHeader from "./styled"

export default function Billboard() {
    let [spring, api] = useSpring(() => (
        {
            from: { rotateX: 20, translateY: -1000, opacity: 0 },
            to: { rotateX: 0, translateY: 0, opacity: 1 },
            delay: 0,
            config: {
                tension: 180,
                friction: 40,
            }
        }
    ))


    return (
        <StyledHeader style={{ ...spring }}>
            <h1>WELCOME TO <br /> NAKAMA</h1>
            <h2 className='sub-heading'>A Final Fantasy 14 Free Company</h2>
            <div className='levitate-wrapper-left '>
                <img className='moogle-image moogle' src="/moogle.png" />
            </div>
            <div className='levitate-wrapper-right'>
                <img className='moogle-image-mirrored moogle' src="/moogle.png" />
            </div>
        </StyledHeader >
    )
}

