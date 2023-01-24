import Billboard from "./Billboard"
import StyledCover from "./styled"

export default function LandingCover({ title, tagline }: any) {
    return (
        <StyledCover>
            <Billboard title={title} tagline={tagline} />
        </StyledCover >
    )
}

