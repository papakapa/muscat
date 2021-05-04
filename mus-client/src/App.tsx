import React, { useEffect } from 'react';
import './core/styles/app.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from './pages/auth/AuthPage';
import { useDispatch, useSelector } from 'react-redux';
import { validateToken } from './redux/auth/auth.actions';
import HomePage from './pages/home/HomePage';
import { getAuthStage } from './redux/auth/auth.selectors';
import { AuthStages } from './core/constants/auth-stages.constants';
import { clientRoutes } from './core/constants/client.routes';
import {getAllTrackFromDb} from "./redux/track/track.actions";

function App() {
  const dispatch = useDispatch();
  const authStage = useSelector(getAuthStage);
  useEffect(() => {
    dispatch(validateToken());
  },[dispatch]);

  useEffect(() => {
    dispatch(getAllTrackFromDb());
  },[dispatch]);

  return (
    <div >
      {authStage === AuthStages.NOT_AUTHORIZED && <Redirect to={clientRoutes.AUTH_PAGE}/>}
      {authStage === AuthStages.AUTHORIZED && <Redirect to={clientRoutes.HOME_PAGE}/>}
      <Switch>
        <Route path={clientRoutes.AUTH_PAGE}>
          <AuthPage />
        </Route>
        <Route path={clientRoutes.HOME_PAGE}>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
