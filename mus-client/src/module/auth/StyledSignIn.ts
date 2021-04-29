import styled from 'styled-components';

export const StyledSignIn = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const StyledSignInBackGround = styled.div`
  background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/SDMAAOSwmv1e2NJH/$_57.JPG?set_id=8800005007');
  position: fixed;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
`;

export const StyledSignWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSignContent = styled.div`
  flex: 1 0 auto;
  flex-direction: column;
  width: 360px;
  margin: 0 auto;
`;

export const StyledSignAuth = styled.div`
  position: relative;
  width: 100%;
  margin: 70px 0;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 16px;
`;

export const StyledSignOverlay = styled.div`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: hsla(0,0%,100%,.4);
  border-radius: 16px;
`;

export const StyledSignAuthContent = styled.div`
  margin-top: 0;
  overflow: hidden;
  box-sizing: border-box;
  padding: 32px;
`;

export const StyledSignHeader = styled.div`
  padding: 0 0 16px;
  text-align: center;
  & span {
    font-size: 18px;
  }
`;
