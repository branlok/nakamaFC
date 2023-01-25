import { IM_Fell_Double_Pica } from "@next/font/google";
import styled, { keyframes } from "styled-components";
const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})

let scroll = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }

`

let scrollHorizontal = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }

`

let translateIn = keyframes`
  0% { transform: translateX(-100%); opacity: 0 }
  100% { transform: translateX(0%); opacity: 1 }

`

let fadeIn = keyframes`
  0% { opacity:0; }
  100% { opacity: 1; }

`
let StyledAboutUsWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 45px);
    color: white;
    display: flex;
    .presentation {
        width: 45%;
        background-color:#190934;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100%;
        font-family: ${IM.style.fontFamily};
        padding: 0px 5.5%;
        border-right: 1px solid rgba(255,255,255,0.2);
        
        svg {
            .a{fill:#fff}
            .b{fill:#fff}
            position: absolute;
            bottom: 50px;
            right: 50px;
            height: 100px;
            width: 100px;
            z-index: 5;
        }

        .content-wrapper {
            overflow: scroll;
            height: 100%;
            width: 100%;
            scrollbar-width: none;
            ::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* make scrollbar transparent */
            }
           > h1 {
            width: 100%;
            margin-top: 50px;
        }
        .presentation-wrapper {
            text-align: left;
            overflow: hidden;
            width: 100%;
            z-index: 2;
            
            > * {
                animation: ${translateIn} 1.5s ease forwards;
            }
            p {
                line-height: 22px;
            }
        }
        }

    }
    .gallery {
        width: 65%;
        overflow: hidden;
        animation: ${fadeIn} 5s ease;
        img {
            width: 100%;
        }
        .marquee-1 {
            animation: ${scroll} 60s linear infinite;
        }
        .marquee-2 {
            animation: ${scroll} 60s linear infinite;
        }
    }
    .switcher {
        align-self :flex-start;
        border: none;
        background-color: transparent;
        color: white;
        font-weight: bold;
        padding: 5px 20px;
        background-color: black;
        :hover {

            color: white;
        }
    }
    // X-Large devices (large desktops, less than 1400px)
    // Large devices (desktops, less than 1200px)
    @media (max-width: 1199.98px) { 
        flex-direction: column-reverse;
        overflow: hidden;
        .presentation {
            width: 100%;
            height: calc(100% - 150px);
            padding: 20px;
        }
        .content-wrapper {
            max-width: 500px;
        }
        .gallery {
            width: 100%;
            overflow: hidden;
            animation: ${fadeIn} 5s ease;
            height: 150px;
            img {
                width: 100%;
            }
            /* .marquee-1 {
                animation: ${scrollHorizontal} 2s linear infinite;
            }
            .marquee-2 {
                animation: ${scrollHorizontal} 2s linear infinite;
            } */
    }
    @media (max-width: 575.98px) { 
                .content-wrapper {
                    max-width: 360px;
                }
          }
          svg {
            display: none;
          }
}

`
export default StyledAboutUsWrapper;