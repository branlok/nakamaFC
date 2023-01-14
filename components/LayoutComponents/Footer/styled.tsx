import styled from "styled-components";

import { IM_Fell_Double_Pica } from '@next/font/google'

const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})


let StyledFooter = styled.div`
    background-color: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    height: 230px;
    width: 100%;
    color: white;
    padding: 20px;
    .footer-section-wrapper {
        display: flex;
        height: 100%;
    }
    div {
        display: flex;
        justify-content: center;
        align-items:center;
    }
    .block-a {
        height: 100%;
        width: 60%;
        padding: 10px;
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 5px;
        transition: 0.2s;
        :hover {
            background-color:rgba(255,255,255,0.10);
        }

    }
    .block-b {
        height: 100%;
        width: 40%;
        padding: 10px;
        margin-left: 10px;
        background-color:rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 5px;
        transition: 0.2s;
        :hover {
            background-color:rgba(255,255,255,0.10);
        }
    }
    .legal-footer {
        width: 100%;
        height: 25px;
        margin-top: 10px;
        background-color:black;
        font-size: ${props => props.theme.fontSize.sm};
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export default StyledFooter;