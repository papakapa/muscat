import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import TrackUploader from './TrackUploader';
import ArtistUploader from './ArtistUploader';

const Uploader = () => {
  return (
    <div>
      <div>
        <NavLink to='/home/upload/track'>Track</NavLink>
        <NavLink to='/home/upload/artist'>Artist</NavLink>
      </div>
      <div>
        <Switch>
          <Route path='/home/upload/track'>
            <TrackUploader />
          </Route>
          <Route path='/home/upload/artist'>
            <ArtistUploader />
          </Route>
        </Switch>
      </div>
    </div>

  );
};

export default Uploader;
