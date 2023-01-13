import styled from "styled-components";

import { IM_Fell_Double_Pica } from '@next/font/google'

const IM = IM_Fell_Double_Pica({
    weight: '400'
})


let StyledBlockWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    padding: 50px;
    background-color: ${props => props.theme.colors.primary};
    .content {
        color: white;
        text-align: center;
        font-size: 5rem;
        font-family: ${IM.style.fontFamily};
        display: flex;
        max-width: 1000px;
        @media (max-width: 575.98px) { 
        font-size: ${props => props.theme.fontSize.xl};
        }
    }
`
export default StyledBlockWrapper;