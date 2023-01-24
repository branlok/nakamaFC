import styled from "styled-components";

let StyledFooterListWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
svg {
    .b{fill:#364043}
    .c{fill:#08090a}
    .d{fill:#8dfaff}
    .e{fill:#8efbff}
    .f{fill:#67eaeb}
    .h{fill:#202223}
    width: 20px;
    height: 30px;
    margin-right: 10px;
}
.link-wrapper {
    /* height: 100%;
    width: 100%; */
    padding: 10px 20px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 5px;
    margin:4px;
    transition: 0.2s;
    cursor: pointer;
    :hover {
        background-color: rgba(255,255,255,0.2);
    }
    /* :hover {
        background-color: white;
        color: black;
    } */
}
`

export default StyledFooterListWrapper;