import styled from 'styled-components';

export const StyledSignUp = styled.div`
  position: relative;
  min-height: 100%;
  min-width: 30rem;
  display: flex;
  
`;

export const StyledSignUpWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledSignUpBlock = styled.div`
  width: 400px;
  padding: 30px 0;
  margin-top: 86px;
  margin-bottom: 30px;
  border-radius: 4px;
  box-shadow: 0 15px 30px 0 rgb(0 0 0 / 10%);
`;

export const StyledSignUpHeader = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
  
`;

export const StyledSignUpPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  text-align: center;
  padding: 116px 40px 0;
`;

export const SignUpForm = styled.form`
  width: 75%;
  margin: 0 auto;
`;

export const StyledSignUpLink = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  text-align: right;
  margin-bottom: 25px;

  font: 13px/1.5em;
  color: #999;
  
  & a {
    text-decoration: none;
    cursor: pointer;
  }
`;
