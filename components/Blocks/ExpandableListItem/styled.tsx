import styled from "styled-components";

let StyledLi = styled.li<{ open: boolean}>`
    list-style: none;
    width: 100%;
    border-radius: 5px;
    color: black;
    border: 2px solid #ffffff4c;
    font-size: ${props => props.theme.fontSize.base};
    color: white;
    min-height: ${props => props.open ? 'auto' : "60px"};//;50px;
    overflow: hidden;
    transition: 0.2s;
    padding: 5px;
    background-color: ${props => props.open ? ' rgba(0,0,0,0.2)' : "transparent"};//;50px;
    margin: 10px;
    :hover {
        border: 2px solid #f0f0f0;
        transform: translateY(-2px);
        
    }
    .question {
        width: 100%;
        padding: 10px;
        font-size: ${props => props.theme.fontSize.xxl};
        border-radius: 5px;
        transition: 0.2s;
        display: flex;
        align-items: center;
    }
    .answer {
        min-height: 50px;
        padding: 10px;
        width: 100%;
        font-size: ${props => props.theme.fontSize.base};
    }

`

export default StyledLi;