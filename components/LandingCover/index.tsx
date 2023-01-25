import { useSpring, config } from "@react-spring/web"

import parseAssetId from "../../utils/composeUrl"
import Billboard from "./Billboard"
import StyledCover from "./styled"

export default function LandingCover({ title, tagline, image }: any) {
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
        <StyledCover style={spring} bgImage={parseAssetId(image)}>
            <Billboard title={title} tagline={tagline} />
        </StyledCover >
    )
}

