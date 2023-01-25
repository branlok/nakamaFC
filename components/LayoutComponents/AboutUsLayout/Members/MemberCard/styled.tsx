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
padding: 5px;
display: flex;
border: 1px solid rgba(255,255,255,0.5);
border-radius: 5px;
display: flex;
margin-bottom: 10px;
transition: 0.2s;
position: relative;
background-color: rgba(0,0,0,0.2);
overflow: hidden;
:after {
    content: '→';
    position: absolute;
    opacity :0;
    right: -50px; 
    top: calc(50% - 10px);

}
:hover {
    border: 1px solid rgba(255,255,255,1);
}
:hover:after {
    opacity: 1;
    animation: ${fade} 1s ease-in-out infinite alternate;
}
img {
    width: 120px;
    height: 120px;
    border-radius: 3px;
    object-fit: cover;
}
.wrapper {
    height: 100px;
    padding: 0px 10px;
    overflow-y: scroll;
    width: 100%;
    scrollbar-width: none;
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
}
p {
    padding: 0px;
    margin: 0px;
    font-size: ${props => props.theme.fontSize.base};
    color: #e9e9e9;
}

`
export default StyledMemberCard;