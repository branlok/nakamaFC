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
    z-index: 1;
    @media (max-width: 575.98px) { 
        width: 70px;
          }
    .link-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #141414; */
    font-weight: bold; 
    }
    .dropdown-menu {
    position: absolute;
    width:calc(100% + 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    color: white;
    box-shadow: 0px 0px 0px 0px black;
    border-radius: 0px 0px 5px 5px;
    padding: 10px;
    padding-top:15px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.52);
    z-index: 1;
    border: 1px solid  rgba(255,255,255,0.1);
    border-radius: 3px;
    @media (max-width: 575.98px) { 
            left: -100px;
          }
    ::before {
        content: "";
        width: 10px;
        height: 10px;
        background-color: black;
        transform: rotate(45deg);
        position: absolute;
        top: -6px;
        left: calc(50% - 5px);
        z-index: 1;
        border-left: 1.5px solid rgba(255,255,255,0.1);
        border-top: 1.5px solid  rgba(255,255,255,0.1);
        border-radius: 2px;
        @media (max-width: 575.98px) { 
            left: calc(50% + 50px);
          }
    }
    .wrapper {
        border: 2px solid #392D10;
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
        color: ${props => props.theme.fontColors.primary};
        width: 100%;
        padding: 5px;
        font-size: ${props => props.theme.fontSize.base};
    }
    }
`

export default StyledNavItem;
