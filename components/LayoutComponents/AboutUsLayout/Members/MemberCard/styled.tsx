import styled, { keyframes } from "styled-components";
let fade = keyframes`
from {
    opacity: 0.5;
}
to {
    opacity: 1;
}
`
let StyledMemberCard = styled.div`
width: 100%;
display: flex;
border: 2px solid #95959519;
border-radius: 5px;
display: flex;
margin-bottom: 10px;
transition: 0.2s;
position: relative;
background-color: ${props => props.theme.colors['primary-contrast']};
overflow: hidden;
box-shadow:  0 4px 28px rgba(0,0,0,0.25);
:after {
    content: '→';
    position: absolute;
    opacity :0;
    right: -50px; 
    top: calc(50% - 10px);

}
:hover {
    border: 2px solid #9595953d;
    /* transform: translateX(5px); */
}
:hover:after {
    opacity: 1;
    animation: ${fade} 1s ease-in-out infinite alternate;
}
:hover img {
    /* border-right: 1px solid rgba(255,255,255,0.5); */
}
img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    padding:10px;
    background-color: rgba(0,0,0,0.2);
    border-right: 1px solid rgba(0,0,0,0.5);
    
}
.wrapper {
    height: 100px;
    padding: 0px 10px;
    overflow-y: scroll;
    width: 100%;
    scrollbar-width: none;
    padding: 10px;
    ::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* make scrollbar transparent */
            
            }
}
.name {
    font-size: ${props => props.theme.fontSize.lg};
    padding: 0px;
    margin: 0px;
    font-weight: bold;
    padding-bottom: 2px;
    margin-bottom: 2px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    height: 30px;
    text-align: center;
    svg {
        display: block;
        height: 100%;
        fill: white;
        padding: 3px;
        margin-right: 5px;
        border-radius: 50px;
        background-color: rgba(255,255,255,0.2);
        border:2px solid rgba(255,255,255,0.5);
     }
}
p {
    padding: 0px;
    margin: 0px;
    font-size: ${props => props.theme.fontSize.sm};
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #e9e9e9;
}

`
export default StyledMemberCard;