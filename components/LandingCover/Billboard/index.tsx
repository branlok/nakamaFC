import { config, useSpring } from "@react-spring/web"
import StyledHeader from "./styled"

export default function Billboard({ title, tagline }: any) {

    // let [spring, api] = useSpring(() => {
    //     return {
    //         from: { transform: 'translateY(-400px) rotate(3.5deg)' },
    //         to: {
    //             transform: 'translateY(0px) rotate(0deg) '
    //         },
    //         config: {
    //             mass: 5,
    //             stiffness: 40,
    //             tension: 500
    //         }
    //     }
    // })

    return (
        <>
            <StyledHeader>
                <h1>{title}</h1>
                <h2 className='sub-heading'>●{' '}{tagline}{' '} ●</h2>
                <div className='levitate-wrapper-left '>
                    <img className='moogle-image moogle' src="/moogleredpirate.png" />
                </div>
                <div className='levitate-wrapper-right'>
                    <img className='moogle-image-mirrored moogle' src="/priateMoogle.png" />
                </div>
                <div className='ropee'></div>
            </StyledHeader >
        </>
    )
}

