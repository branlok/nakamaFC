import styled, { keyframes } from "styled-components";
import { IM_Fell_Double_Pica } from '@next/font/google'

const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})

const fadeIn = keyframes`
from {
    opacity: 0;
    transform: scale(1.1) translateY(-0px);
}
to {
    opacity: 1;
    transform: scale(1) translateY(0px);
}
`


let StyledFeatureBlock = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    color: white;
    font-family: ${IM.style.fontFamily};
    padding-left: 12.5%;
    justify-content:center ;
    background-color: ${props => props.theme.colors.primary};
   
`
export default StyledFeatureBlock;