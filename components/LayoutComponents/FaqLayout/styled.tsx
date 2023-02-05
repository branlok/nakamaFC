import styled, { keyframes } from "styled-components";

let hover = keyframes`
from {
    transform: translateY(20px);

}
to {
    transform: translateY(0px);
}
`

let StyledFaqLayout = styled.div`
display: flex;
align-items: center;
justify-content :center;
width: 100%;
height: calc(100vh - 45px);
color: white;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1220' height='800' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23822' stroke-width='12.6' stroke-opacity='0.87'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
transform-origin: top center;
background-position: center center;
.left-wrapper {
    width: 500px;
    background-color: rgba(0,0,0,0.5);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
svg {
    height: 500px;
    width: 200px;
    animation: ${hover} 1s ease alternate infinite;
}
}
.wrapper {
    display: flex;
align-items: center;
flex-direction: column;
backdrop-filter: blur(10px);
border: 5px solid orange;
box-shadow: 0px 10px 0px black;
color: white;
background-color: #ffa600a2;
height: 100%;
width: 100%;
border:none;
border-left: 1px solid rgba(255,255,255,0.2);
overflow-y: scroll;
scrollbar-width:none;
::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent;
}
ul {
    padding: 20px;
    width: 100%;
    margin: 0px;
    padding-top: 0px;
    padding-left: 0px;
    background: rgb(0,0,0,0.05);
background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%);
}
 h1 {
    font-size: ${props => props.theme.fontSize.xxxl};
    color: white;
    border-bottom: 0px solid rgba(255,255,255,0.5);
    width: 100%;
    padding: 10px;
    margin: 0px;
    background-color: rgba(0,0,0,0.15);
    background-color: #b96e12;
    position: sticky;
    top: 0;
}
}

@media (max-width: 575.98px) { 
    flex-direction: column;
            .left-wrapper {
                display: none;
            }
            .wrapper > h1 {
                position: sticky;
                top: 0px;
                left: 0px;
                background-color: #b96e12;
                z-index: 5;
            }


        }
`
export default StyledFaqLayout;