import styled from "styled-components";
import { IM_Fell_Double_Pica } from '@next/font/google'

const IM = IM_Fell_Double_Pica({
    subsets: ['latin'], weight: ['400'], display: 'swap'
})


let StyledForm = styled.form`
    width: 100%;
    height: 300px;
    color: white;
    margin-top: 50px;
    position: relative;
    
    .textarea-wrapper {
        width: 100%;
        height: 200px;
        position:relative;
        svg {
        width: 50px;
        fill: rgba(255,255,255,0.95);
        height: 50px;
        position: absolute;
        right: 20px;
        bottom: 20px;
    }
    }
    textarea {
        resize: none;
        width: 100%;
        height: 200px;
        padding: 10px;
        border-radius: 5px;
        border:none;
        border: 4px solid grey;
        background-color: black;
        color: whitesmoke;
        transition: 0.2s;
        font-size: ${props => props.theme.fontSize.lg};
        font-family: ${IM.style.fontFamily};
        :focus {
            border: 4px solid whitesmoke;
            outline: none;
        }

    }
    .result {
        width: 100%;
        height: 200px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 4px solid whitesmoke;
        flex-direction: column;
        background-color: black;
        color: whitesmoke;
    }
    button {
        border: none;
        margin-top: 10px;
        padding: 5px 20px;

        color: black;
        border-radius: 2px;
        transition: 0.2s;
        cursor: pointer;
        color: white;
        font-weight: bold;
        border-radius:4px;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: grey;
        svg {
            display: block;
            margin-left:10px;
            height: 12px;
            width:12px;
            fill: black;
        }
        :hover {
            background-color: orange;
        }
        :active {
            background-color: darkorange;
        }
    }
    .cta {
        width: 100%;
        margin-top: 5px;
        display: flex;
        justify-content: flex-end;
    }
    margin-bottom: 10px;
    .form-cover {
        border: 1px double rgba(255,255,255,0.1);
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export default StyledForm