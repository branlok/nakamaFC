import styled from "styled-components";

import { IM_Fell_Double_Pica } from '@next/font/google'

const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'],  display: 'swap'
})



let StyledGeneralBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    padding-bottom: 200px;
    background-color: ${props => props.theme.colors.primary};

    .content {
        color: white;
        /* text-align: center; */
        font-size: ${props => props.theme.fontSize.xxxl};
        font-family: ${IM.style.fontFamily};
        display: flex;
        max-width: 1000px;
        // X-Large devices (large desktops, less than 1400px)
        @media (max-width: 1399.98px) { 
            font-size: ${props => props.theme.fontSize.xxl};
            max-width: 800px;
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
            font-size: ${props => props.theme.fontSize.base};
            max-width: 450px;
         }
         @media (max-width: 575.98px) { 
            font-size: ${props => props.theme.fontSize.sm};
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