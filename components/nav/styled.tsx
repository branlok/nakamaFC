import styled, { keyframes } from 'styled-components';
import { IM_Fell_Double_Pica } from '@next/font/google'

const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})

let fadeIn = keyframes`
from {
    opacity: 0
}
to {
    opacity: 1
}
`

let fallIn = keyframes`
from {
    transform: translateY(-10px);
}to {
    transform: translateY(2px);
}
`

let StyledNav = styled.div`
    height: 45px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:sticky;
    top: 0;
    z-index: 10;

    nav {
        display: flex;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        padding-left: 70px;
        padding-right: 100px;
        z-index: 1;
        position: relative;
        background-color: ${props => props.theme.colors['background']};
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='8.8' stroke-opacity='0.07'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
        .logo{
            svg {
                .a{fill:black}
                .b{fill:#ffc700}
                height: 20px;
                width: 20px;
                margin-right: 5px;
                background-color: orange;
                border-radius: 50%;
                animation: ${fallIn} 1s ease forwards;
            }
        color: ${props => props.theme.fontColors.primary};
        font-size:  ${props => props.theme.fontSize.lg};
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: ${IM.style.fontFamily};
    }
    @media (max-width: 575.98px) { 
        padding: 0px 30px;
          }
    span {  
            padding-left: 2px;
            font-size:  ${props => props.theme.fontSize.sm};
            color: #dcdcdc;
            opacity: 0;
            animation: ${fadeIn} 1.5s ease forwards;
            animation-delay: 0.5s;
        }
    a {
        text-decoration: none;
        color: white;
        display: flex;
        align-items: top;

        
    }
    .links {
        display: flex;
        justify-content: space-between;

    }
    }
`

export default StyledNav;
