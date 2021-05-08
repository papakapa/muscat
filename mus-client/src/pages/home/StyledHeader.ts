import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  top: 0;
  background: #fff;
  border-bottom: 1px solid #B8ABC4;
  box-shadow: 0 2px 5px 2px rgba(60, 64, 67, 0.15);
  z-index: 1000;
`;

export const StyledHeaderLogo = styled.div`
  margin: 0 20px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const StyledLogoPrimary = styled.h1`
  font-size: 26px;
  color: black;
`;

export const StyledLogoSecondary = styled.h1`
  font-size: 26px;
  color: #B8ABC4;
`;

export const StyledHeaderNavigation = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  
  & a {
    text-decoration: none;
    font-size: 22px;
    padding: 0 10px 12px 10px;
    color: #B8ABC4;
    
    &:hover {
      color: black;
    }
  }
  
  & .active-link {
    color: black;
    border-bottom: 2px solid #14F014;
  }
`;

export const StyledHeaderControls = styled.div`
  align-self: center;
  order: 8;
  margin-left: auto;
  margin-right: 20px;
`;