import styled, { keyframes } from 'styled-components';
import localFont from '@next/font/local'
import { a } from '@react-spring/web';
const myOhterFont = localFont({ src: '../../utils/IMFellDoublePica-Regular.ttf', display: 'swap' })

let StyledCover = styled(a.div) <{ bgImage: string }>`
    padding: 0;
    border-bottom: 10px solid black;
    background-image: ${props => 'url(' + props.bgImage + ')'};
    background-size: cover;
    background-position: center center;
    height: 750px;
    background-color: ${props => props.theme.colors['primary']};
    box-shadow: inset 0 10px 50px 30px #000000;
    @media (max-width: 767.98px) { 
        padding: 0px;
        border: 0px;
        height: 500px;
        }    
    
`

export default StyledCover;
