import styled, { keyframes } from "styled-components";

let StyledWrapper = styled.div`
    width: 100%;
    position: relative;
    transform: translateY(-100px);
    svg {
        width: 100%;
        transform: translateX(-100%);
        height: fit-content;
        display: block;
        fill: ${props => props.theme.colors['primary-contrast']};
        background-color: transparent;
        position: absolute;
        left: 0px;
        top: -20px;
        border: none;
    }
    .content {
        transform: translateY(99px);
        height: 100px;
        overflow: hidden;
        border: none;
        background-color: ${props => props.theme.colors['primary-contrast']};
    }
`
export default StyledWrapper;