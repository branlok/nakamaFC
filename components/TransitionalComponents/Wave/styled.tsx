import { a } from "@react-spring/web";
import styled from "styled-components";

let StyledAnimatedCap = styled(a.div)<{ revealing: boolean, textSize: string, top: string }>`
width: 100%;
margin-bottom: -2px;
height: 0px;
position: relative;
background-color: ${props => props.theme.colors.primary};
.observer {
    width:1px;
    height:1px;
    background-color: transparent ;
    position: absolute;
    left: 0px;
    top: -70vh;
    color: white;
    border:1px solid rebeccapurple;
    
}
.hidden-text {
    position: absolute;
    bottom: 0px;
    color: ${props => props.revealing ? 'transparent' : 'white'}; //white;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    font-size: ${props => props.theme.fontSize[props.textSize]};
    width: 100%;
    transition: 1s;
    /* border: 1px solid white; */
}
`

export let StyledAnimatedSvg = styled(a.svg) <{ customFill?: string }>`
    /* height: 100%; */
    position: absolute;
    transform: translateY(-99%);
    width: 100%;
    fill: ${props => props.customFill ? props.customFill : props.theme.colors.primary};

`


export default StyledAnimatedCap;
