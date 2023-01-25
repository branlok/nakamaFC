import styled from "styled-components";

import { IM_Fell_Double_Pica } from '@next/font/google'

const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})



let StyledGeneralBlock = styled.div<{ color?: string }>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    padding-bottom: 200px;
    flex-direction: column;
    position: relative;
    background-color: ${props => props.theme.colors.primary};
    z-index: 2;
    overflow: hidden;
    .content {

        svg {
            width: 100%;
            height: 100%;
            border: 1px solid white;
            display: block;
            margin: 0 auto;
        }
        img {
            width: 100%;
            margin-bottom: 0px;
            padding: 10px;
     
            border: 25px solid #B88846;
            border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E") 25;
    
        }
        color: ${props => props.color ? props.color : "#ebebeb"};
        /* text-align: center; */
        font-size: ${props => props.theme.fontSize.xxxl};
        font-family: ${IM.style.fontFamily};
        display: flex;
        max-width: 900px;
        flex-direction: column;
        
        // X-Large devices (large desktops, less than 1400px)
        @media (max-width: 1399.98px) { 
            font-size: ${props => props.theme.fontSize.xxl};
            max-width: 700px;
        }
        // Large devices (desktops, less than 1200px)
        @media (max-width: 1199.98px) { 
            font-size: ${props => props.theme.fontSize.xl};
            max-width: 600px;
        }
        // Medium devices (tablets, less than 992px)
        @media (max-width: 991.98px) { 
            font-size: ${props => props.theme.fontSize.lg};
            max-width: 500px;
         }
         // Small devices (landscape phones, less than 768px)
        @media (max-width: 767.98px) { 
            font-size: ${props => props.theme.fontSize.lg};
            max-width: 450px;
         }
         @media (max-width: 575.98px) { 
            font-size: ${props => props.theme.fontSize.base};
            max-width: 350px;
          }
    }
    /* // X-Small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) { ... }

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) { ... }

    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) { ... }

    // Large devices (desktops, less than 1200px)
    @media (max-width: 1199.98px) { ... } */


`
export default StyledGeneralBlock;