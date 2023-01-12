import styled from 'styled-components';

let StyledCover = styled.div`
    height: calc(100% - 120px);
    width: 100vw;
    img {
        height: 100%;
        width: 100%;
        object-fit:cover;
        filter: brightness(0.7);
    }
`

export default StyledCover;
