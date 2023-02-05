import styled from "styled-components";

let StyledGallery = styled.div`
   width: 100%;
   height: 100%;
   background-color:black;
   color: white;
   padding: 50px 0px;
   display: flex;
   flex-direction: column;
   /* transform: translateY(-400px); */
   margin-top: 10px;
   border-top: 5px solid orange;
   background-color: ${props => props.theme.colors.primary};
    position: relative;
   @media (max-width: 767.98px) { 
   transform: translateY(-50px);
   }
   box-shadow: inset 0 0px 20px 0px #000000;
   background-size: cover;
   background-image: url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80');
   margin-top:80px;
   .observable {
    position: absolute;
    left: 0px;
    bottom: 40px;
    z-index: 10;
    width: 1px;
    height: 1px;
    border: 1px solid transparent;
    color: white;
   }
   .title {
    margin-top: 50px;
    h1 {
            border-top: 5px solid rgba(255,255,255,0.2);
            border-bottom: 5px solid rgba(255,255,255,0.2);
            background: rgba(0,0,0,0.2);
            /* margin-top: 10px; */
            font-size: ${props => props.theme.fontSize.xxxl};
            padding: 15px;
            border-radius: 5px 5px 0px 0px;
            margin: 0px;
            padding-left: 60px;
            margin-bottom: 15px;
            }
            overflow: hidden;
            ul {
                display: flex;
                /* background-color: rgba(0,0,0,0.3); */
                margin: 0px;
                padding: 10px;
                border-bottom: 1px solid rgba(255,255,255,0.1);
                li {
                    list-style: none;
                    padding: 5px 30px;
                    margin: 0px 5px;
                    background-color: rgba(0,0,0,0.5);
                    border: 1px solid rgba(255,255,255,0.1);
                    font-size: ${props => props.theme.fontSize.sm};
                    border-radius: 20px;
                    transition: 0.5s;
                    cursor: pointer;
                    :hover {
                        background-color: rgba(255,255,255,0.1);
                    }
                }
            }
   }

   .image-container {
    /* height: 100%; */
    
    overflow-x: scroll;
    display: flex;
    transform: rotate(1deg);
    scrollbar-width: none;
    padding: 40px 50px;
    overflow-y: hidden;
    margin-top: 30px;
    /* background-color: #230a0a; */
    backdrop-filter: blur(20px);
    background: rgba(0,0,0,0.5);
    /* background-image: linear-gradient(to right top, #1e0614, #200810, #220a0c, #220c07, #220f04, #230e04, #240e05, #250d06, #25090f, #230617, #1d061e, #110825); */
    border-bottom: 1px solid rgba(255,255,255,0.15);
    border-top: 1px solid rgba(255,255,255,0.15);
    ::-webkit-scrollbar {
            width: 0px;
            background: transparent; /* make scrollbar transparent */
            }
    .image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #dddddd;
        border: 1px solid rgba(255,255,255,0.1);
        margin: 5px;
            img {
            height: 200px;
            width: auto;
            margin: 2px;
            border: 2px solid #4e4e4e18;

        }
    }


   }
   .wrapper {
    position: relative;
    border-top: 1px solid grey;
    button {
                position: absolute;
                background-color: #232323a2;
                box-shadow: 0px 0px 10px 0px black;
                width: 120px;
                padding: 10px 10px;
                backdrop-filter: blur(10px);
                color: white;
                border: 1px solid #6f6f6f7e;
                transition: 0.5s;
                cursor: pointer;
                border-radius: 4px;
                font-weight: bold;
                font-size: ${props => props.theme.fontSize.sm};
                z-index: 5;
                :hover {
                    background-color: #b11515;
                }
                svg {
                    fill: white;
                    width: 100%;
                    height: 20px;
                }
                :active {
                    transform: scale(0.98);
                }
            }
            .left-btn {
                right: 160px;
                top: 80%;
                transform: rotate(1deg) translateY(-2px);
        
            }
            .right-btn {
                right: 30px;
                top: 80%;
                transform: rotate(1deg);
            }

   }

`
export default StyledGallery;