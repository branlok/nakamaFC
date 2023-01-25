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

let StyledHeader = styled(a.div)`
    width: 100%;
    height: 100%;
    border-radius: 70px;
    background-color: ${props => props.theme.colors['primary']};
    border: 15px solid rgb(237, 28, 36,0.2);
    /* border: 20px solid  ${props => props.theme.colors['primary-contrast']};; */
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
    box-shadow: inset 0 0 60px 30px #000000, 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);;
    animation: ${levitate3} 3s ease infinite alternate;
    :before {
        /* content: ''; */
        /* position: absolute;
        min-width: 2000px;
        transform: rotate(120deg); */
    }
    @media (max-width: 575.98px) { 
        border: none;
        }
    ::before {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
        /* background-image: linear-gradient(to right top, #0f0843, #261160, #3f177d, #5c1c9a, #7c1eb6); */
        opacity: 0.14;
        z-index: -1;
        pointer-events: none;
    }
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
        transition: 0.2s;
        /* animation:${levitate3} 2s ease-in-out infinite alternate; */
        animation-delay: 2s;
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
        @media (max-width: 575.98px) { 
            height: 150px;
        }
    }
    @media (max-width: 1399.98px) { 
        border-radius: 50px;
        }
        @media (max-width: 1199.98px) { 
            border-radius: 40px;
        }
        @media (max-width: 991.98px) { 
            border-radius: 30px;
         }
        @media (max-width: 767.98px) { 
            border-radius: 15px;
        }
        @media (max-width: 575.98px) { 
            animation: none;
            border-radius: 0;
        }
  .sub-heading {
    padding: 5px 70px;
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
        @media (max-width: 1399.98px) { 
        }
        @media (max-width: 1199.98px) { 
        }
        @media (max-width: 991.98px) { 
            font-size: ${props => props.theme.fontSize.sm};
            border: 1px solid rgba(0,0,0,0.2);
            padding: 5px 30px;
         }
        @media (max-width: 767.98px) { 
        }
        @media (max-width: 575.98px) { 
        }
  }
  .levitate-wrapper-left {
    position: absolute;
    right: 8%;
    top: 50%;
    animation: ${levitate} 1s ease-in-out infinite alternate;
  }
  .levitate-wrapper-right {
    position: absolute;
    left: 3%;
    top: 10%;
    animation: ${levitate2} 1s ease-in-out infinite alternate;
  }
  .moogle-image {
    height: 300px;
    transform: scale(1.7) rotateZ(-40deg) translateX(100px) translateY(-30%);
    animation:${fadeIn} 2s ease forwards;
    opacity:0;
    animation-delay: 0.5s;
  }
  .moogle-image-mirrored {
    height: 300px;
    position: absolute;
    left: 7%;
    top: 10%;
    opacity:0;
    transform: scale(1.7) translateX(30px) translateY(50%);
    animation:${fadeIn} 2s ease forwards;
    animation-delay: 0.5s;
    /* transform: rotateY(180deg); */
    @media (max-width: 767.98px) { 
        margin-top: -50px;
        }
  }

  .moogle {
    transition: 0.2s;
pointer-events: none;
        @media (max-width: 1399.98px) { 
            height: 300px;
        }
        // Large devices (desktops, less than 1200px)
        @media (max-width: 1199.98px) { 
            font-size: ${props => props.theme.fontSize.xl};
            height: 225px;
        }
        // Medium devices (tablets, less than 992px)
        @media (max-width: 991.98px) { 
            font-size: ${props => props.theme.fontSize.lg};
            height: 200px;
         }
         // Small devices (landscape phones, less than 768px)
        @media (max-width: 767.98px) { 
            font-size: ${props => props.theme.fontSize.base};
            height: 200px;
         }
         @media (max-width: 575.98px) { 
            height: 150px;
          }
  }

  .hide {
    border-style: none;
    padding: 10px;
    border-radius: 50px;
    background-color: white;
  }
`

export default StyledHeader;
