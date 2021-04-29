import React, { useEffect } from 'react';
import './core/styles/app.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from './pages/auth/AuthPage';
import { useDispatch, useSelector } from 'react-redux';
import { validateToken } from './redux/auth/auth.actions';
import HomePage from './pages/home/HomePage';
import { getAuthStage } from './redux/auth/auth.selectors';

function App() {
  const dispatch = useDispatch();
  const authStage = useSelector(getAuthStage);
  useEffect(() => {
    dispatch(validateToken());
  },[dispatch]);

  return (
    <div >
      {authStage === 'NOT_AUTHORIZED' && <Redirect to='/auth'/>}
      {authStage === 'AUTHORIZED' && <Redirect to='/home'/>}
      <Switch>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/home'>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
