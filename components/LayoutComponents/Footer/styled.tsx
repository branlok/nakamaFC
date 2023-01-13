import styled from "styled-components";

import { IM_Fell_Double_Pica } from '@next/font/google'

const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})


let StyledFooter = styled.div`
    background-color: ${props => props.theme.colors.background};
    display: flex;
    height: 300px;
    width: 100%;
    transform: translateY(-50px);
    position: relative;
    color: white;
    .svg-wrapper {
    display: block;
    position: absolute;
    top: -50px;
    left: 0px;
    height: 0px;
    width: 100%;
    svg {
        fill: ${props => props.theme.colors.background};
        height: 50px;
        width: 100%;
    }  
}

    .block-a {
        height: 100%;
        width: 60%;
        padding: 10px;
    }
    .block-b {
        height: 100%;
        width: 40%;
        padding: 10px;
    }
`
export default StyledFooter;