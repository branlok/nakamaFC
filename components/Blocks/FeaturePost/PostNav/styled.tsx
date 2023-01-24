import styled from "styled-components"
import { IM_Fell_Double_Pica } from '@next/font/google'

import { Mukta } from "@next/font/google";

const MUKTA = Mukta({
    subsets: ['latin'], weight: ['500'], display: 'swap'
})

const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})

let StyledPostNav = styled.div`
        width: 100%;
        height: 40px;
        border-bottom: 0px solid rgba(255,255,255,0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 2;
        color: white;
        font-family: ${IM.style.fontFamily};
        padding: 0px 100px;
        h1 {
            font-size: ${props => props.theme.fontSize.sm};

        }
        .left {
            font-size: ${props => props.theme.fontSize.sm};
            position: relative;
            width: 100%;
            svg {
                display: inline-block;
                fill:white;
                transform: rotate(-20deg);
                margin-right: 5px;
                transition: 0.3s;
            }
            svg:hover{
                transform: rotate(0deg);
            }
            
            
        }
        .right {
            display: flex;
            width: 100%;
            justify-content: flex-end;
            .external-link {
            text-decoration:none ;
            color: white;
            padding: 4px;
            transition: 0.2s;
            height: 100%;
            border-radius:2px;
            :hover {
                background-color: rgba(0,0,0,0.3);
            }
            svg {
                stroke: white;
            }
        }
            span {
                /* width: 100%; */
                flex-grow: none;
                margin-left: 10px;
                margin-right: 10px;
                /* padding :5px 25px; */
                background-color: black;
                border: 1px solid white;
                border-radius: 30px;
                font-size: ${props => props.theme.fontSize.base};
                font-weight: bold;
                font-family: Arial, Helvetica, sans-serif;
            }
            .category-link {
                text-decoration:none ;
                color: white;
                font-size: ${props => props.theme.fontSize.sm};
                padding-bottom: 4px;
                white-space: nowrap;
            }
        }
        @media (max-width: 767.98px) { 
            font-size: ${props => props.theme.fontSize.xs};
            padding: 5px 35px;
            height: 80px;
            align-items: center;
            display: flex;
            flex-wrap: wrap;
          }
    
`

export default StyledPostNav;