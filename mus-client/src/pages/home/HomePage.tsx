import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Uploader from '../../module/upload/Uploader';

const HomePage = () => {
  return (
    <div>
      <nav>
        <NavLink to='/home/upload'>To upload</NavLink>
      </nav>
      Home Page, you authorized
      <Switch>
        <Route path='/home/upload'>
          <Uploader />
        </Route>
      </Switch>
    </div>
  );
};

export default HomePage;
