import styled, { keyframes } from "styled-components";

import { IM_Fell_Double_Pica } from '@next/font/google'
import { a } from "@react-spring/web";
const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})

let pulsating = keyframes`
from {
    opacity: 0.5
}
to {
    opacity: 1
}
`


let StyledBlogLayout = styled(a.div) <{ focus: string }>`
   display: flex;
   width: 100%;
   height: 100%;
   .tab {
    /* position: fixed;
    left: 0;
    top: 100px;
    height: 120px;
    width: 30px;
    border:1px solid white; */
    /* z-index: 20; */
    
    color: white;
    background-color: black;
    text-align: center;
    padding: 5%;
    background: url('/anchor50.png');
        background-size: 30%;
        background-repeat: repeat;
        display: flex;
        flex-direction: column;
        h1 {
            font-size: ${props => props.theme.fontSize.lg};
        }
   }
    .main-column {
        border-top:30px solid black;
        width: 100%;
    }
    .secondary-column {
        height: calc(100% - 40px);
        background-color: #632323;
        background-color: rgba(0,0,0,0.5);
        /* backdrop-filter: blur(10px); */
        display: flex;
        flex-direction: row;
        position: fixed;
        
        /* left: ${props => props.focus === 'main' ? 'calc(100% - 50px)' : 'calc(50% - 50px)'}; */
        top: 40px;
        overflow-y: scroll;
        border-left: 2px solid ${props => props.theme.colors["secondary-accent"]};
        z-index: 5;
        overflow: hidden;
        background-color: #000000;
        background-image:  radial-gradient(#a9a9a9 0.5px, transparent 0.5px), radial-gradient(#a9a9a9 0.5px, #000000 0.5px);
        background-size: 20px 20px;
        background-position: 0 0,10px 10px;
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* make scrollbar transparent */
        }
        .tab-title {   
            color: white;
            min-width: 45px;
            font-size: ${props => props.theme.fontSize.lg};
            writing-mode: vertical-rl;
            height: 100%;
            justify-content: center;
            display: flex;
            transform: rotate(-180deg);
            align-items: center;
            z-index: 5;
            border-right: 5px solid rgba(0,0,0,0.5); 

            cursor: pointer;
            transition: 0.5s;
            background-color: #000000;
            span {
                animation: ${pulsating} 2s ease-in-out infinite alternate;
            }
            :active {
                background-color:${props => props.theme.colors["secondary-accent"]};
            }
        }
        .secondary-main {
            min-width: 350px;
            padding: 15px;
            overflow-y: scroll;
            background-color: rgba(0,0,0,0.3);
            position: relative;
            > h1 {
                margin-top: -15px;
                padding: 10px;
                color: white;
                text-align: center;
                position: sticky;
                top: 0;
                color: white;
                z-index: 1000;
                text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
                
            }
        }
    }
    
    
`
export default StyledBlogLayout;