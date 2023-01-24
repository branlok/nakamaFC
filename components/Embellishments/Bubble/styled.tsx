import styled from "styled-components";
import localFont from '@next/font/local'
import { a } from "@react-spring/web";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../../../utils/HandjetFlowerDouble-Medium.woff2', display: 'swap' })

let StyledBubble = styled(a.div) <{ width: number }>`
z-Index: 10;
background-color: ${props => props.theme.colors['secondary-accent']};
padding: 5px 30px;
text-align: center;
border-radius: 5px;
font-family: ${myFont.style.fontFamily};
font-size: ${props => props.theme.fontSize.base};
margin-bottom: 2px;
position: absolute;
width: 140px;
left: ${props => (props.width / 2 + 10 + "px")};
top: -40px;
box-shadow: 0 5px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.22);
border:1px solid rgba(255,255,255,0.2);

:after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    display: block;
    transform: rotate(45deg);
    background-color: ${props => props.theme.colors['secondary-accent']};
    bottom: -2.5px;
    left: calc(50% - 2.5px);
    z-index: 5;
}
`

export let StyledBubbleWrapper = styled.div`
display: inline;
span {
                    border:1px solid rgba(255,255,255,0.2);
                display: inline-block;
                text-align: center;
                position: relative;
                border-radius:5px;
                /* padding: 1px 10px; */
                background-color: rgba(0,0,0,0.5);
                padding: 1px 10px;
                margin-left: 5px;
                :hover {
                    background-color: white;
                    color: black;

                }
            }

`
export default StyledBubble;