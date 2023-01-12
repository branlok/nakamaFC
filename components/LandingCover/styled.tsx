import styled from 'styled-components';

let StyledCover = styled.div`
    height: calc(100% - 120px);
    width: 100%;
    overflow: hidden;
    position: relative;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        overflow: hidden;
        overflow: hidden;
        filter: brightness(0.85) contrast(1.1);
    }
`

export default StyledCover;
