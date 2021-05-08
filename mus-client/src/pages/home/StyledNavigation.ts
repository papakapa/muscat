import styled from "styled-components";

export const StyledNavigation = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #B8ABC4;
  
  & a {
    text-decoration: none;
    font-size: 26px;
    padding: 10px 10px 16px 10px;
    color: #B8ABC4;
    
    &:hover {
      color: black;
    }
  }
  
  & .active-nav {
    color: black;
    border-bottom: 2px solid #14F014;
  }
  
`;