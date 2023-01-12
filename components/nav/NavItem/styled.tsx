import styled from 'styled-components';

let StyledNavItem = styled.div`
    color: white;
    height: 100%;
    width: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    position: relative;
    margin-left: 5px;
    margin-right: 5px;
    .link-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #141414;
    font-weight: bold; 
    z-index: 2;
    }
    .dropdown-menu {
    position: absolute;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0F0E0E;
    color: white;
    box-shadow: 0px 0px 0px 0px black;
    border-radius: 0px 0px 5px 5px;
    padding: 5px;
    padding-top:30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    .wrapper {
        border: 1px solid #392D10;
        height: 100%;
        width: 100%;
        padding: 5px;
        display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    }
    .title {
        text-align: start;
        width: 100%;
    }
    }
`

export default StyledNavItem;
