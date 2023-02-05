import { useSpring, config } from "@react-spring/web"

import parseAssetId from "../../utils/composeUrl"
import Billboard from "./Billboard"
import StyledCover from "./styled"

export default function LandingCover({ title, tagline, image, photo1, photo2, blurHash1, blurHash2 }: any) {
    let [spring, api] = useSpring(() => {
        return {
            from: { transform: 'translateY(-40px)', opacity: 0 },
            to: {
                transform: 'translateY(0px)', opacity: 1
            },
            config: config.slow
        }
    })
    return (
        <StyledCover style={spring}>
            <Billboard blurHash1={blurHash1} blurHash2={blurHash2} title={title} tagline={tagline} photo1={photo1} photo2={photo2} />
        </StyledCover >
    )
}

