import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SignIn from '../../module/auth/SignIn';
import SignUp from '../../module/auth/SignUp';
import { useSelector } from 'react-redux';
import { getSignStage } from '../../redux/auth/auth.selectors';
import { SignStages } from '../../core/enums/sign-stages.enum';
import { clientRoutes } from '../../core/constants/client.routes';

const AuthPage = () => {
  const signStage = useSelector(getSignStage);

  return (
    <>
    {signStage === SignStages.SIGN_UP && <Redirect to={clientRoutes.AUTH_SIGN_UP} /> }
    {signStage === SignStages.SIGN_IN && <Redirect to={clientRoutes.AUTH_SIGN_IN} /> }
    <Switch>
      <Route path={clientRoutes.AUTH_SIGN_IN}>
        <SignIn />
      </Route>
      <Route path={clientRoutes.AUTH_SIGN_IN}>
        <SignUp />
      </Route>
    </Switch>
    </>
  );
};

export default AuthPage;