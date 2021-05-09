import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import TrackUploader from './TrackUploader';
import ArtistUploader from './ArtistUploader';
import { StyledUploader, StyledUploaderNavigation } from './StyledUploader';

const Uploader = () => {
  return (
    <StyledUploader>
      <StyledUploaderNavigation>
        <NavLink to='/home/upload/track' activeClassName='active-upl'>Track</NavLink>
        <NavLink to='/home/upload/artist' activeClassName='active-upl'>Artist</NavLink>
      </StyledUploaderNavigation>
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
    </StyledUploader>

  );
};

export default Uploader;
