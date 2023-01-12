import StyledTab from "./styled";

export default function Navigator({ name }: { name: string }) {
    return (
        <StyledTab>
            {name}
        </StyledTab>
    )
}