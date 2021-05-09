import styled from "styled-components";

export const StyledUploader = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const StyledUploaderNavigation = styled.div`

  width: 80%;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #B8ABC4;
  
  & a {
    text-decoration: none;
    font-size: 22px;
    padding: 10px 10px 16px 10px;
    color: #B8ABC4;
    
    &:hover {
      color: black;
    }
  }
  
  & .active-upl {
    color: black;
    border-bottom: 2px solid #14F014;
  }
`;

export const StyledUploaderForm = styled.div`
  width: 60%;
  margin: 0 auto;
`;