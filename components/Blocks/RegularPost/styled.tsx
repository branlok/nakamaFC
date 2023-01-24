import styled from "styled-components";
import { IM_Fell_Double_Pica } from '@next/font/google'

import { Mukta } from "@next/font/google";

const MUKTA = Mukta({
    subsets: ['latin'], weight: ['500'], display: 'swap'
})
const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})



let StyledRegularPost = styled.div<any>`
    width: 100%;
    /* height: 180px; */
    display: flex;
    flex-direction: column;
    color: white;
    font-family: ${IM.style.fontFamily};
    border: 1px solid ${props => props.primaryCategoryColor};
    border-radius: 5px;
    overflow: hidden;
    transition: 0.2s;
    margin-bottom: 10px;
    background-color: black;
    span {
        transition: 0.2s;
    }
    span:nth-child(2) {
        color: ${props => props.primaryCategoryColor};
    }
    span:nth-child(3) {
        color: ${props => props.secondaryCategoryColor};
    }
    span:nth-child(4) {
        color: ${props => props.thirdCategoryColor};
    }
    :hover span {
        color: white;
    }
    :hover {
        background-color: ${props => props.theme.colors["secondary-accent"]};
        background-color: ${props => props.primaryCategoryColor};
        transform: translateY(0px) translateX(4px);
        /* border-right: 5px solid black;
        border-bottom: 5px solid black; */
    }
    .cover-image {
        width: 100%;
        height: 100px;
        padding-left: 10%;
        padding-right: 10%;
        object-fit: cover;
        margin-bottom: 50px;
        margin-top: 50px;
        /* border: 1px solid white; */
        
    }
    /* background-image: url('https://www.denofgeek.com/wp-content/uploads/2021/12/Endwalker.jpg?fit=1920%2C1080'); */
    .wrapper {
        /* min-height: 450px; */
        padding-left: 10%;
        padding-right: 10%;
        position: relative;
        z-index: 1;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .meta {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 2;
        margin-bottom: 10px;
        h1 {
            font-size: ${props => props.theme.fontSize.sm};
        }
        .left {
            font-size: ${props => props.theme.fontSize.sm};
        }
        .right {
            span {
                margin-left: 10px;
                margin-right: 10px;
                padding :5px 20px;
                background-color: black;
                border: 1px solid white;
                border-radius: 30px;
                font-size: ${props => props.theme.fontSize.sm};
                font-weight: bold;
                font-family: Arial, Helvetica, sans-serif;
            }
        }
    }
    .main-wrapper {
        display: flex;
        z-index: 2;
        height: 180px;
        flex-direction: column;
        
        h1 {
            font-size: ${props => props.theme.fontSize.lg};
            margin: 0px;
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(255,255,255,1);
            
        }
        h2 {
                font-size: ${props => props.theme.fontSize.sm};
                margin: 0px;
                margin-top: 10px;
                font-family: ${MUKTA.style.fontFamily};
            }
    }
    .blur-filter {
        background-color: rgba(0,0,0,0.5);
        z-index: -1;
        height: 100%;
        width: calc(100% + 5%);
        position: absolute;
        object-fit: cover;
        /* filter: brightness(0.5); */
        top: 0px;
        backdrop-filter: blur(10px);
        left: -5%;
    }
    .bg-image {
        z-index: -2;
        height: 100%;
        width: calc(100% + 10%);
        position: absolute;
        object-fit: cover;
        /* filter: brightness(0.5); */
        top: 0px;
        left: -10%;
        
    }
`
export default StyledRegularPost;