import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';
import TrackList from '../../module/track/list/TrackList';
import PlaylistList from '../../module/playlists/PlaylistList';
import ArtistList from '../../module/artist/ArtistList';
import {MainPageContent, MainPageWrapper } from './StyledMainPage';

const MainPage = () => {
  return (
    <MainPageWrapper>
      <div>
        <Navigation />
      </div>
      <MainPageContent>
        <Switch>
          <Route path='/home/music'>
            <TrackList/>
          </Route>
          <Route path='/home/playlists'>
            <PlaylistList/>
          </Route>
          <Route path='/home/artists'>
            <ArtistList/>
          </Route>
        </Switch>
      </MainPageContent>
    </MainPageWrapper>
  );
};

export default MainPage;