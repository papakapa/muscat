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

const SignIn = () => {
  const signInStage = useSelector(getSignInStage);

  return (
    <>
      {signInStage === 1 && <Redirect to={'/auth/signIn/firstStep'} />}
      {signInStage === 2 && <Redirect to={'/auth/signIn/secondStep'} />}
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
                  <Route path='/auth/signIn/firstStep'>
                    <SignInFirstStep />
                  </Route>
                  <Route path='/auth/signIn/secondStep'>
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
