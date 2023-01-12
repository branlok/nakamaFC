import styled from 'styled-components';

let StyledNav = styled.div`
    height: 45px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #141414;
    nav {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    z-index: 2;
    .logo{
        width: 100px;
        border: 1px solid white;
    }
    .links {
        display: flex;
        justify-content: space-between;
    }
    }
`

export default StyledNav;
