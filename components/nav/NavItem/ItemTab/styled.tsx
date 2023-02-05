import styled from 'styled-components';

let StyledTab = styled.div`
    color: ${props => props.theme.fontColors.secondary};
    margin-top: 2px;
    margin-bottom: 2px;
    background-color: ${props => props.theme.colors['background']};
    border: 1px solid rgba(0,0,0,0.4);
    font-size: ${(props) => props.theme.fontSize.base};
    width: 100%;
    border-radius: 2px;

    transition: 0.2s;

    a {
        display: inline-block;
        display: flex;
        justify-content: center;
        text-decoration: none ;
        color: white;
        text-align: center;
        height: 100%;
        padding-top: 10px;
    padding-bottom: 10px;
    z-index: 10;
    }
    :hover {
        color: ${props => props.theme.fontColors.primary};
        background-color: ${props => props.theme.colors['background-contrast']};
        border-bottom: 2px solid ${props => props.theme.colors['secondary-accent']};
        transform: translateY(-1px);
    }
    :active {
        transition: 0.2s;
        transform: translateY(0px);
        border-bottom: 0px solid ${props => props.theme.colors['secondary-accent']};
        background:  ${props => props.theme.colors['secondary-accent']};
        opacity: 0.95;
        margin-top: 4px;
    }
    
`

export default StyledTab;
