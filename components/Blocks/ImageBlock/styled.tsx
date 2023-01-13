import styled from "styled-components";

import { IM_Fell_Double_Pica } from '@next/font/google'

const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'],  display: 'swap'
})


let StyledImageBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};
    img {
        width: 100%;
        object-fit: cover;
        max-height: 600px;
    }
`
export default StyledImageBlock;