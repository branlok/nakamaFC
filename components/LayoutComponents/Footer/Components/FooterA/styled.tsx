import styled from "styled-components";

let StyledFooterListWrapper = styled.div`
height: 100%;
width: 100%;
position: relative;
display: flex;
align-items: flex-start;
justify-content: flex-start;
/* flex-direction: column; */
overflow: hidden;
padding: 0px 8%;
@media (max-width: 575.98px) { 
    padding: 0px;
    }
.brand {
    font-size: ${props => props.theme.fontSize.xl};
    /* border-right: 3px solid rgba(255,255,255,0.2); */
    background-color: rgba(255,255,255,0.2);
    /* padding: 15px; */
    width:120px;
    flex-shrink: none;
    margin: 10px;
    height: 100%;
    background-color: ${props => props.theme.colors['primary-contrast']};
    @media (max-width: 575.98px) { 
    display: none;
    }
}
.link-container {
    width: 100%;
    display: flex;
    margin: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    
    @media (max-width: 575.98px) { 
    justify-content: center;
          }
    }

.link-wrapper{
    display: flex;
    flex-direction: column;
    margin: 10px;
    
    h1 {
        font-size: ${props => props.theme.fontSize.lg}; 
        text-align:center;
        width: 100%;
        margin: 0px;
        margin-bottom: 10px;
        @media (max-width: 575.98px) { 
            text-align: center;
          }
    }
    a {
        text-decoration:none ;
        color: white;
        width: 100%;
        border: 3px solid rgba(255,255,255,0.1);
        border-radius: 50px;
        padding: 5px;
        margin-bottom: 5px;
        text-align: center;
        width: 140px;
        background-color: ${props => props.theme.colors['primary']};
        :hover {
            background-color: white;
            color: black;
        }
    }
}
.link {

}
`

export default StyledFooterListWrapper;