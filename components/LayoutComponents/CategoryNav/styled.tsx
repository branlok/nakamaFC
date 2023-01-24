import Link from "next/link";
import styled from "styled-components";
export let StyledItem = styled(Link)<{selected: boolean}>`
  text-decoration: none;
   color: white;
    min-width: 150px;
    border: 1px solid rgba(255,255,255,0.5);
    padding: 5px 0px;
    border-radius: 5px;
    transition: 0.2s;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    margin: 10px;
    background-color: ${props => props.selected ? 'white' : 'transparent'};
    color: ${props => props.selected ? 'black' : 'white'};
    :hover {
      background-color: white;
      color: black;
    }
    /* :before {
      content: '';
      position: absolute;
      left: 3px;
      top: 1;
      width: 5px;
      height: calc(100% - 10px);
      background-color: white;
      border-radius: 5px;
    } */
`
let StyledCategoryNav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 5px;
  flex-wrap: wrap;
    width: 100%;
  div:first-child {
    /* border-left: 10px solid white; */
  }

  }
`;

export default StyledCategoryNav;
