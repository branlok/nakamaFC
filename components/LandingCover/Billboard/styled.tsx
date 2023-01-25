import styled, { keyframes } from 'styled-components';
import { IM_Fell_Double_Pica } from '@next/font/google'
import { a } from '@react-spring/web';
import localFont from '@next/font/local';
const myFont = localFont({ src: '../../../utils/HandjetFlowerDouble-Medium.woff2', display: 'swap' })

const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})


let levitate = keyframes`
from {
    transfrom: translateY(10px);
}
to {
    transform: translateY(10px);
}
`

let levitate2 = keyframes`
from {
    transfrom: translateY(5px);
}
to {
    transform: translateY(15px);
}
`


let levitate3 = keyframes`
from {
    transform: rotateZ(-0.5deg);
}
to {
    transform: rotateZ(1.5deg);
}
`

let fadeIn = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}

`



export let StyledHeaderWrapper = styled(a.div)`
    min-height: 100%;
    display: flex;
    align-items: flex-end;
    height: 100%;
    overflow: hidden;
    background-color: ${props => props.theme.colors['primary']};
    position: relative;
    z-index: 2;
    /* border: 20px solid #7a0907d0; */
    /* border-radius: 50px 50px 50px 50px; */
    :after {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
        /* background-image: linear-gradient(to right top, #0f0843, #261160, #3f177d, #5c1c9a, #7c1eb6); */
        background-color: #000000;
        opacity: 0.28;
        z-index: -1;
        pointer-events: none;
        transition: 2s;
    }
    :before {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.3;
        z-index: 0;
        pointer-events: none;
        background-color: #171717;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1259' height='151.1' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23000000' stroke-width='7.9' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");  
transition: 2s;
}
:hover:before {
            opacity: 0.28;

}
:hover:after {
            opacity: 0.58;


}
background: transparent;
background-color: black;
@media (max-width: 767.98px) { 
        background: transparent;
        height: 100%;
        width: 100%;
        /* border: none; */
        }    
    @media (max-width: 575.98px) { 
        border: none;
        }

`


let StyledHeader = styled(a.div)`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors['primary']};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.fontColors.primary};
    transform-origin: top center;
    background-position: center center;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='916' height='109.9' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='19.6' stroke-opacity='0.47'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
    flex-direction: column;
    position: relative;
    overflow: hidden;
    /* animation: ${levitate3} 3s ease infinite alternate; */
    padding: 90px;
    background: transparent; 
    box-shadow: inset 0 0px 200px 20px #000000;
    .rope {
        position: fixed;
        width: 1000px;
        height: 100%;
        background-color: white;
        top: 150px;
        left: 150px;
    }
    h1 {
        text-align: center;
        padding: 25px;
        font-family: ${IM.style.fontFamily};
        font-size: 8rem;
        margin: 0px;
        transition: 0.2s;
        margin: 10px;
        animation:${fadeIn} 2.5s ease forwards;
        opacity:0;
        animation-delay: 2.7s;
        @media (max-width: 1399.98px) { 
            font-size: 6rem;
        }
        @media (max-width: 1199.98px) { 
            font-size: 5rem;
        }
        @media (max-width: 991.98px) { 
            font-size: 4rem;
         }
        @media (max-width: 767.98px) { 
            font-size: 3rem;
        }
    }
   
  .sub-heading {
    padding: 5px 20px;
    background-color:  ${props => props.theme.colors.accent};
    color: white;
    border: 2px solid rgba(0,0,0,0.2);
    border-radius :50px;
    margin: 0px;
    display: flex;
    font-size: ${props => props.theme.fontSize.base};
    font-family: Arial, Helvetica, sans-serif;
    justify-content: center;
    font-family: ${myFont.style.fontFamily};
    align-items: center;
    animation:${fadeIn} 2s ease forwards;
    opacity:0;
    animation-delay: 2.7s;
    @media (max-width: 767.98px) { 
        font-size: ${props => props.theme.fontSize.xs};
    }
  }

  .levitate-wrapper-left {
    position: absolute;
    left: 50px;
    /* top: 50%; */
    top: 40px;
    animation: ${levitate} 1s ease-in-out infinite alternate;
    pointer-events: none;
    .moogle-image {
    height: 300px;
    /* border:1px solid white; */
    transform: scale(1.3) rotateZ(15deg);
    animation:${fadeIn} 2.5s ease forwards;
    opacity:0;
    animation-delay: 1s;
  }
  }
  .levitate-wrapper-right {
    position: absolute;
    right: 40px;
    bottom: 40px;
    pointer-events: none;
    /* border:1px solid white; */
    animation: ${levitate2} 1s ease-in-out infinite alternate;
    .moogle-image-mirrored {
        height: 300px;
        /* position: absolute; */
        opacity:0;
        transform-origin: center;
        transform: rotateZ(12deg) scale(1.3);
        animation:${fadeIn} 2.5s ease forwards;
        animation-delay: 1.5s;
        pointer-events: none;
    /* transform: rotateY(180deg); */
  }}
    .moogle {
        pointer-events: none;
        @media (max-width: 1399.98px) { 
            max-height: 300px;
        }
        // Large devices (desktops, less than 1200px)
        @media (max-width: 1199.98px) { 
            font-size: ${props => props.theme.fontSize.xl};
            max-height: 225px;
        }
        // Medium devices (tablets, less than 992px)
        @media (max-width: 991.98px) { 
            font-size: ${props => props.theme.fontSize.lg};
            max-height: 200px;
         }
         @media (max-width: 767.98px) { 
            max-height: 120px;
         }
  }
  /* .levitate-wrapper-left, .levitate-wrapper-right {


  } */

  .hide {
    border-style: none;
    padding: 10px;
    border-radius: 50px;
  }
`

export default StyledHeader;
