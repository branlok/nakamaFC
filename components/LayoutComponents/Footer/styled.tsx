import styled from "styled-components";


import localFont from '@next/font/local';
const myFont = localFont({ src: '../../../utils/HandjetFlowerDouble-Medium.woff2', display: 'swap' })


let StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 230px;
    width: 100%;
    color: white;
    background-color: rgba(255,255,255,0.01);
    border-top: 5px solid rgba(255,255,255,0.2);
    overflow: hidden;
    position: relative;
  
    h1 {
        font-family: ${myFont.style.fontFamily};
    }
    .footer-section-wrapper {
        display: flex;
        height: 100%;
        width: 100%;
        padding: 15px;
        background-position: center center;
        background: url('/anchor50.png');
        background-size: 55%;
        background-repeat: repeat;
        > div {
            width: 100% !important;
            margin: 10px;
        }
                 // Small devices (landscape phones, less than 768px)
        @media (max-width: 767.98px) { 
            flex-direction: column;
        width: 100%;
        }
        @media (max-width: 575.98px) { 
        flex-direction: column;
        width: 100%;
            }
    }
    div {
        display: flex;
        justify-content: center;
        align-items:center;
    
    }
    .block-a {
        height: 100%;
        width: 70%;
        flex-shrink: 1;
        padding: 10px;
        border-right: 1px solid rgba(255,255,255,0.15);
        /* border-radius: 5px; */
        transition: 0.2s;
        /* background-color: rgba(0,0,0,0.85); */
        @media (max-width: 575.98px) { 
            border-right: none;
    }

    }
    .block-b {
        height: 100%;
        width: 30%;
        flex-shrink: 2;
        padding: 10px;
        margin-left: 10px;
        transition: 0.2s;

    }
    .announcement-footer {
        height: 10px;
        color: white;
        background-color: rgba(255,255,255,0.5);
        z-index: 5;
    }
    .legal-footer {
        width: calc(100% + 30px);
        height: 50px;
        /* height: 25px; */
        background-color: rgba(0,0,0,1);
        margin-left: -15px;
        margin-top: 10px;
        padding: 10px;
        font-size: ${props => props.theme.fontSize.base};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`
export default StyledFooter;