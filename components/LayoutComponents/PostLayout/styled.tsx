import styled, { keyframes } from "styled-components";


let falldown = keyframes`
from {
    transform: translateY(-100%);
}to {
    transform: translateY(0);
}
`


let fadeIn = keyframes`
from {
    opacity: 0;
}to {
    opacity: 1;
}
`

let StyledBlogPost = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    header {
        height: calc(100vh - 45px);
        overflow: hidden;
        width: 100%;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        transform: translateY(-100%);
        animation: ${falldown} 3s ease forwards;
        animation-delay: 0.5s;
        background-color: ${props => props.theme.colors.primary};
        padding-bottom: 50px;
        /* :after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: -1;
            opacity: 0.25;
            background: rgb(10,14,27);
            background: linear-gradient(178deg, rgba(10,14,27,1) 15%, rgba(16,17,108,0.7273503151260504) 65%, rgba(120,33,184,0.6937368697478992) 79%, #66141486 90%, #44582939 100%);
        } */

    }
    .main-wrapper {
        padding-top: 55px;
        align-self: center;
        width: 600px;
        opacity: 0;
        animation: ${fadeIn} 2s ease forwards;
        animation-delay: 2s;
        
        > h1 {
            color: white;

            /* text-align: center; */
        }
        .content {
            width: 100%;

        }
        > div{
            padding: 0px;
        }
        p {
            font-size: ${props => props.theme.fontSize.lg} !important;
        }

        @media (max-width: 767.98px) { 
            //compensate the postnav width constraint;
            padding: 30px;
            width: 100%;

            .post-nav {
                flex-wrap: wrap;
                height: 60px;
                margin-bottom: 10px;
                > div {
                    margin: 10px;
                }
            }
         }
    }
`
export default StyledBlogPost;