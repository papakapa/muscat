import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignIn from '../../module/auth/SignIn';
import SignUp from '../../module/auth/SignUp';
import { useSelector } from 'react-redux';
import { getSignStage } from '../../redux/auth/auth.selectors';

const AuthPage = () => {
  const signStage = useSelector(getSignStage);

  return (
    <>
    {signStage === 'signUp' && <Redirect to='/auth/signUp' /> }
    {signStage === 'signIn' && <Redirect to='/auth/signIn' /> }
    <Switch>
      <Route path='/auth/signIn'>
        <SignIn />
      </Route>
      <Route path='/auth/signUp'>
        <SignUp />
      </Route>
    </Switch>
    </>
  );
};

export default AuthPage;