import React from 'react';
import {
  StyledSignAuth,
  StyledSignAuthContent,
  StyledSignContent, StyledSignHeader, StyledSignIn, StyledSignInBackGround, StyledSignOverlay, StyledSignWrapper,
} from './StyledSignIn';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignInFirstStep from './SignInFirstStep';
import SignInSecondStep from './SignInSecondStep';
import { useSelector } from 'react-redux';
import { getSignInStage } from '../../redux/auth/auth.selectors';
import { clientRoutes } from '../../core/constants/client.routes';

const SignIn = () => {
  const signInStage = useSelector(getSignInStage);

  return (
    <>
      {signInStage === 1 && <Redirect to={clientRoutes.AUTH_SIGN_IN_FIRST} />}
      {signInStage === 2 && <Redirect to={clientRoutes.AUTH_SIGN_IN_SECOND} />}
      <StyledSignIn>
        <StyledSignInBackGround/>
        <StyledSignWrapper>
          <StyledSignContent>
            <StyledSignAuth>
              <StyledSignOverlay/>
              <StyledSignAuthContent>
                <StyledSignHeader>
                  <span>MusCat</span>
                </StyledSignHeader>
                <Switch>
                  <Route path={clientRoutes.AUTH_SIGN_IN_FIRST}>
                    <SignInFirstStep />
                  </Route>
                  <Route path={clientRoutes.AUTH_SIGN_IN_SECOND}>
                    <SignInSecondStep />
                  </Route>
                </Switch>
              </StyledSignAuthContent>
            </StyledSignAuth>
          </StyledSignContent>
        </StyledSignWrapper>
      </StyledSignIn>
    </>
  );
};

export default SignIn;
