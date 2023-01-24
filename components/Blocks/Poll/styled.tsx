import styled from "styled-components";

let StyledPollWrapper = styled.div`
width: 100%;
height: 250px;
border-radius: 5px;
background-color: rgba(255,255,255,0.1);
color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-size: ${props => props.theme.fontSize.xl};
margin-bottom: 30px;
.option-wrapper {
    display: flex;
    svg {
        margin: 0px 5px;
        fill: white;
    }
}
`
export default StyledPollWrapper;