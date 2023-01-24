import styled, { keyframes } from "styled-components";
import { IM_Fell_Double_Pica } from '@next/font/google'
import { Mukta } from "@next/font/google";

const ROBOTO = Mukta({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})

const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})

let hover = keyframes`
from {
    transform : translateY(0px);
}
to {
    transform : translateY(-3px);
}
`


let entrance = keyframes`
from {
    opacity : 0;
}
to {
    opacity : 1;
}
`


let StyledNoticePost = styled.div`
    width: 100%;
    color: white;
    font-family: ${IM.style.fontFamily};
    box-shadow: inset 0 40px 60px 30px #000000, 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);;
    transform:translate3d(0,0,0);
    position: relative;
    height: 400px;
    display: flex;
        flex-direction: column;
        align-items: center;
    .wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-left: 15.5%;
        padding-right: 15.5%;
        padding-top: 15px;
        padding-bottom: 15px;
        position: relative;
        z-index: 1;
        background-color: rgba(0,0,0,0.5);
        background-color: ${props => props.theme.colors.primary};
        width: 100%;
        padding: 50px;
        h1 {
            margin: 10px;
            font-size: ${props => props.theme.fontSize.xxl};
            text-align: center;
        }
        svg {
            width: 100%;
            height: 100%;
        }
    }

    
`
export default StyledNoticePost;