import styled, { keyframes } from "styled-components";
import { IM_Fell_Double_Pica } from '@next/font/google'
import { url } from "inspector";

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


let StyledPresentationImage = styled.div`
   width: 100%;
   height: 100%;
   padding: 0px;

   flex-direction: column;
   position: relative;
   img {
    width: 100%;   
    height: 100%;
    object-position: center;
    object-fit: cover;
   }
   .filter {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    backdrop-filter: blur(10px);
    background-color: rgba(0,0,0,0.7);
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15%;
   }
   h1 {
    color: white;
    padding: 0px;
    margin: 0px;
    font-size: 4rem !important;
    font-family: ${IM.style.fontFamily};
    z-index: 5;
    padding-bottom: 30px;
    text-align: center;
   }
   button {
    border: none;
    margin:20px;
    padding: 15px 25px;
    font-weight: bold;
    color: white;
    box-shadow:  0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    cursor: pointer;
    background-color: black;
   }
   span {
    display: flex;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    text-align: center;
    justify-content: center;
    display: flex;
    color: white;
    font-size: ${props => props.theme.fontSize.xl};
    padding: 20px;
   }


`
export default StyledPresentationImage;