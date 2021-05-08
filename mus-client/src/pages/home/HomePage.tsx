import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Uploader from '../../module/upload/Uploader';
import TrackList from "../../module/track/list/TrackList";
import Player from '../../module/player/Player';
import PlaylistList from "../../module/playlists/PlaylistList";
import CreatePlaylist from "../../module/playlists/CreatePlaylist";
import ArtistList from "../../module/artist/ArtistList";
import ArtistInfo from "../../module/artist/ArtistInfo";
import AlbumInfo from "../../module/album/AlbumInfo";
import Search from "../../module/search/Search";
import Profile from "../../module/profile/Profile";
import { HomeFooter } from './StyledHome';

const HomePage = () => {
  return (
    <div>
      <nav>
        <NavLink to='/home/upload'>To upload</NavLink>
        <NavLink to='/home/music'>Music List</NavLink>
        <NavLink to='/home/playlists'>Playlists</NavLink>
        <NavLink to='/home/artists'>Artists</NavLink>
        <NavLink to='/home/search'>Search</NavLink>
        <NavLink to='/home/profile'>Profile</NavLink>
      </nav>
      Home Page, you authorized
      <Switch>
        <Route path='/home/upload'>
          <Uploader />
        </Route>
        <Route path='/home/music'>
          <TrackList />
        </Route>
        <Route path='/home/playlists'>
          <PlaylistList />
        </Route>
        <Route path='/home/createPlaylist'>
          <CreatePlaylist />
        </Route>
        <Route path='/home/artists'>
          <ArtistList />
        </Route>
        <Route path='/home/search'>
          <Search />
        </Route>
        <Route path='/home/profile'>
          <Profile />
        </Route>
        <Route path='/home/artist/:id' component={ArtistInfo} />
        <Route path='/home/album/:id' component={AlbumInfo} />
      </Switch>
      <HomeFooter><Player /></HomeFooter>
    </div>
  );
};

export default HomePage;
