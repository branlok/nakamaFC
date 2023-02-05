import styled from "styled-components";

let StyledFooterListWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
svg{
    margin-right: 10px;
}
.link-wrapper {
    padding: 10px 20px;
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 5px;
    margin:4px;
    transition: 0.2s;
    cursor: pointer;
    :hover {
        background-color: rgba(255,255,255,0.15);
    }
    /* :hover {
        background-color: white;
        color: black;
    } */
}
`

export default StyledFooterListWrapper;