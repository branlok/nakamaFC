import styled, { keyframes } from "styled-components";
import { IM_Fell_Double_Pica } from '@next/font/google'
import { Mukta } from "@next/font/google";

const ROBOTO = Mukta({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})

const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})

let hover = keyframes`
from {
    transform : translateY(0px);
}
to {
    transform : translateY(-3px);
}
`


let entrance = keyframes`
from {
    opacity : 0;
}
to {
    opacity : 1;
}
`

export let StyledTag = styled.div<{ rgb: string, disable3d: any }>`
    display: inline-block;
    color: rgba(255,255,255,0.85);
    margin-left: 20px;
    padding :0px 20px;
    border-radius: 50px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    border: ${props => props.disable3d ? '' : '1.5px solid ' + props.rgb};
    position: relative;
    overflow: hidden;
    flex-grow: none;
    
    :hover:after {
        background-color: ${props => props.rgb};

    }
    :hover {
        box-shadow: 0 0px 13px ${props => props.rgb}, 0 0px 13px ${props => props.rgb};
    }
    a {
        display: inline-block;
        width: 100%;
    }
    cursor: pointer;
        transition: 0.3s;
        background-color: ${props => props.disable3d ? props.rgb : props.theme.colors['background']};
        border-bottom: ${props => props.disable3d ? '' : '2px solid ' + props.rgb};
    :active {
        transition: 0.2s;
        transform: translateY(4px);
        background: ${props => props.rgb};
    }
`


let StyledFeatureBlock = styled.div<{ openViewer: boolean, avgColor: string }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    font-family: ${IM.style.fontFamily};
    box-shadow: inset 0 40px 60px 30px #000000, 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);;
    transform:translate3d(0,0,0);
    position: relative;
    background-color: ${props => props.avgColor};
    .nav-wrapper {
        padding: 0px 10%;
        border-top: 1px solid #242424;
        box-shadow:0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        /* background-color: #000000; */
        position: relative;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23222' stroke-width='10' stroke-opacity='0.33'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
        @media (max-width: 991.98px) { 
            padding: 0px 0px;
         }
        @media (max-width: 575.98px) { 
        }
    }
    .cover-image {
        width: 100%;
        height: 500px;
        padding-left: 10%;
        padding-right: 10%;
        object-fit: cover;
        margin-bottom: 50px;
        margin-top: 50px;
        /* border: 1px solid white; */
    }
    .wrapper {

        min-height: 500px;
        background-color: rgba(0,0,0,0.5);
        padding-left: 15.5%;
        padding-right: 15.5%;
        position: relative;
        z-index: 1;
        padding-top: 15px;
        padding-bottom: 15px;
        background-color: ${props => props.theme.colors.primary};
        width: 100%;
    }
    .main-wrapper {
        min-height: 450px;
        display: flex;
        z-index: 2;
        display: flex;
        flex-direction: row;
        position: relative;
        
        .left {
            width: 55%;
            position: relative;
            display: flex;
            flex-direction: column;
            
            h1 {
            font-size: ${props => props.theme.fontSize.xxxl};
            border-bottom: 1px solid white;
            padding-bottom: 25px;
            margin-bottom: 0px;
            padding-right: 60px;   

            }
            .date-slot {
                font-size: ${props => props.theme.fontSize.sm};
                margin: 0px;
                padding: 5px 0px;
                font-family: ${ROBOTO.style.fontFamily};
            }
            
            overflow: hidden;
            a {
                text-decoration: underline ;
                color: white;
                font-weight: bold;
            }
            .preview-box {
                /* padding: 15px; */
                padding-top: 0px;
                border-radius: 5px;
                overflow: hidden;
                color: #d7d7d7;
                transition: 0.2s;
                img {
                width: 100%;
                border-radius: 5px;
                object-fit: cover;
                border: 5px solid black;
                border-bottom: 25px solid black;
            }
            }
            .cta {
                padding: 20px;
                color: #e7e7e7;
                margin: 0px;
                width: 100%;
                text-align: center;
                border-bottom: 1px solid rgba(255,255,255,0.1);
                /* font-family: Arial, Helvetica, sans-serif; */
                font-size: ${props => props.theme.fontSize.sm};
                position: relative;
                :after {
                content: '';
                top: 0px;
                left: 0px;
                width: 100%;
                height: 10px;
                position: absolute;
                z-index: 50;
                box-shadow:  ${props => !props.openViewer ? '0px -4px 5px 0px rgba(0,0,0,0.15)' : '0px 0px rgba(0,0,0,0)'};
                @media (max-width: 1399.98px) { 
                    background: ${props => props.openViewer ? 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)' : ' linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,15) 100%)'};//100%;
                }
        }
                button {
                    border: none;
                    background: transparent;
                    color: white;
                    font-weight: bold;  
                    text-decoration: none ;
                    border-bottom: 1px solid transparent;
                    transition: 0.2s;
                    position: relative;
                    text-align: center;
                    padding: 10px;
                    cursor: pointer;
                    :before {
                        content: '';
                        transform: rotate(45deg);
                        position: absolute;
                        opacity:0;
                        bottom: -3px;
                        left: -3px;
                        width: 5px;
                        height: 5px;
                        background-color: white;
                        z-index:5;
                        transition:0.2s;
                    }
                    :after {
                        content: '';
                        transform: rotate(45deg);
                        opacity:0;
                        position: absolute;
                        bottom: -3px;
                        left: calc(100% - 2px);
                        width: 5px;
                        height: 5px;
                        background-color: white;
                        z-index:5;
                        transition:0.2s;
                    }
                    :hover {
                        animation:${hover} 1s ease-in-out infinite alternate;
                        border-bottom: 1px solid white;
                        :before, :after {
                            opacity: 1;
                        }
                    }
                }
            }
        }
        .right {
            width: 45%;
            padding: 20px;
            padding-right: 0px;
            padding-bottom: 0px;
            /* min-width: 550px; */
            img {
                width: 100%;
                height: 100%;
                border-radius: 2px;
                max-height: 330px;
                object-fit: cover;
                border: 4px solid rgba(0,0,0,0.4);
                transition: 0.2s;
              
            }
        }
        @media (max-width: 1399.98px) { 
            flex-direction: column-reverse;
            .left {
                width: 100%;
            }
            .right {
                width: 100%;
                padding: 10px 0px;
                img {
                    max-height: 450px;
                    
                }
            }
        }
    }
    .blur-filter {
        z-index: -9;
        height: 100%;
        width: calc(100% + 5%);
        position: absolute;
        object-fit: cover;
        top: 0px;
        backdrop-filter: ${props => props.openViewer ? 'blur(15px)' : 'blur(15px)'};
        left: -5%;
        background-color: rgba(0,0,0,0.45);
        transition: 0.5s;
        :after {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            bottom: 0px;
            left: 0px;
            background-color: black;
            background: ${props => props.openViewer ? 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 35%)' : ' linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,1) 85%)'};
        }
        
    }
    .bg-image {
        z-index: -10;
        height: 100%;
        max-height: 800px;
        width: calc(100% + 10%);
        position: absolute;
        object-fit: cover;
        top: 0px;
        left: -10%;
        object-position: center;

    }
    
`
export default StyledFeatureBlock;