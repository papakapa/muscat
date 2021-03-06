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
import {getPlaylistsAPI} from "./redux/playlist/playlists.actions";
import {getArtistAPI} from "./redux/artist/artist.actions";
import {getAlbumAPI} from "./redux/album/album.actions";

function App() {
  const dispatch = useDispatch();
  const authStage = useSelector(getAuthStage);
  useEffect(() => {
    dispatch(validateToken());
  },[dispatch]);

  useEffect(() => {
    dispatch(getAllTrackFromDb());
  },[dispatch]);

  useEffect(() => {
    dispatch(getPlaylistsAPI());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getArtistAPI());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAlbumAPI());
  }, [dispatch])

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
