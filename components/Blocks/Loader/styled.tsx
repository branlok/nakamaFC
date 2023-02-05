import styled from "styled-components";

let StyledLoaderWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.colors.primary};
color: white;
`
export default StyledLoaderWrapper;