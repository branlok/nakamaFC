import styled, { keyframes } from 'styled-components';
import { IM_Fell_Double_Pica } from '@next/font/google'
import { a } from '@react-spring/web';

const IM = IM_Fell_Double_Pica({
    weight: '400'
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

let StyledHeader = styled(a.div)`
    width: 100%;
    height: 100%;
    border-radius: 100px;
    background-color: ${props => props.theme.colors.primary};
    border: 10px solid ${props => props.theme.colors.accent};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.fontColors.primary};
    transform-origin: top center;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='916' height='109.9' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='19.6' stroke-opacity='0.47'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
    flex-direction: column;
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 0 60px 30px #000000;
    ::before {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
        opacity: 0.15;
        z-index: 0;
        pointer-events: none;
    }
    h1 {
        text-align: center;
        padding: 25px;
        font-family: ${IM.style.fontFamily};
    }
    @media screen and (min-width: 1201px) {
    h1 {
        font-size: 9rem;
    }
    }

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 3rem;
    }
  }
  .sub-heading {
    padding: 5px 70px;
    background-color:  ${props => props.theme.colors.accent};
    color: white;
    border: 4px solid rgba(255,255,255,0.5);
    border-radius :50px;
    margin: 0px;
    display: flex;
    font-size: ${props => props.theme.fontSize.base};
    justify-content: center;
    align-items: center;
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
    height: 450px;
    transform: rotateZ(-10deg) translateX(50px);
  }
  .moogle-image-mirrored {
    height: 400px;
    position: absolute;
    left: 7%;
    top: 10%;
    transform: rotateY(180deg);
  }
  .hide {
    border-style: none;
    padding: 10px;
    border-radius: 50px;
    background-color: white;
  }
`

export default StyledHeader;
