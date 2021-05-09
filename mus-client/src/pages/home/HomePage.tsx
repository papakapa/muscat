import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Uploader from '../../module/upload/Uploader';
import Player from '../../module/player/Player';
import CreatePlaylist from "../../module/playlists/CreatePlaylist";
import ArtistInfo from "../../module/artist/ArtistInfo";
import AlbumInfo from "../../module/album/AlbumInfo";
import Search from "../../module/search/Search";
import Profile from "../../module/profile/Profile";
import {HomeContent, HomeFooter, HomeWrapper} from './StyledHome';
import Header from "./Header";
import MainPage from "./MainPage";

const HomePage = () => {
  return (
    <HomeWrapper>
      <Header />
      <HomeContent>
        <Switch>
          <Route exact path={['/home', '/home/music', '/home/playlists', '/home/artists']}>
            <MainPage />
          </Route>
          <Route path='/home/upload'>
            <Uploader/>
          </Route>
          <Route path='/home/createPlaylist'>
            <CreatePlaylist/>
          </Route>
          <Route path='/home/search'>
            <Search/>
          </Route>
          <Route path='/home/profile'>
            <Profile/>
          </Route>
          <Route path='/home/artist/:id' component={ArtistInfo}/>
          <Route path='/home/album/:id' component={AlbumInfo}/>
        </Switch>
      </HomeContent>
      <HomeFooter>
        <Player/>
      </HomeFooter>
    </HomeWrapper>
  );
};

export default HomePage;
