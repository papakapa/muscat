import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Uploader from '../../module/upload/Uploader';
import TrackList from "../../module/track/list/TrackList";
import Player from '../../module/player/Player';

const HomePage = () => {
  return (
    <div>
      <nav>
        <NavLink to='/home/upload'>To upload</NavLink>
        <NavLink to='/home/music'>Music List</NavLink>
      </nav>
      Home Page, you authorized
      <Switch>
        <Route path='/home/upload'>
          <Uploader />
        </Route>
        <Route path='/home/music'>
          <TrackList />
        </Route>
      </Switch>
      <Player />
    </div>
  );
};

export default HomePage;
