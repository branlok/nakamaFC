import styled from 'styled-components';

let StyledLink = styled.div<{ hovered: boolean }>`
    position: relative;
    border: 1.5px solid rgba(40,40,40,1);
    width: 115px;
    height: 25px;
    border-radius: 40px;
    transition: 0.2s;
    background: linear-gradient(0deg, rgba(0,0,0,0.91614583333333337) 0%, #00000019 32%, rgba(0,0,0,0) 82%);
    background-color: ${props => props.theme.colors.background};
    a {
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${(props => props.theme.fontSize.sm)};
    }
    :hover {
    background: linear - gradient(0deg, rgba(0, 0, 0, 0.51614583333333337) 0%, #00000019 32%, rgba(0, 0, 0, 0) 82%);
    border: 1.5px solid rgba(255, 255, 255, 0.2);

}
    &:before {
    content: "";
    width: 4px;
    height: 6px;
    border-radius: 5px;
    transform: rotate(-45deg);
    background-color: ${props => props.hovered ? "orange" : "grey"};
    position: absolute;
    left: 6px;
    bottom: 4px;
    font-size: 10px;
    transition: 0.3s;
}


`

export default StyledLink;
