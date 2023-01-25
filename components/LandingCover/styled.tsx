import styled from 'styled-components';
import localFont from '@next/font/local'
const myOhterFont = localFont({ src: '../../utils/IMFellDoublePica-Regular.ttf', display: 'swap' })
let StyledCover = styled.div`
    height: calc(98vh - 120px);
    font-family: ${myOhterFont.style.fontFamily};
    width: 100%;
    overflow: hidden;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-image: url('https://media.discordapp.net/attachments/1004935837441593544/1057422892029202542/Screenshot_2022-12-27_at_5.20.44_PM.png?width=2140&height=1326');
    padding: 50px;
    perspective: 500;
    /* padding-bottom: 120px; */
    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) { 
    height: calc(65vh - 120px);
        min-height: 500px;
    }
    @media (max-width: 575.98px) { 
        padding: 0px;
        }
`

export default StyledCover;
