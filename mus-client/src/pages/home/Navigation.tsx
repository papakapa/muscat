import React from "react";
import {NavLink} from "react-router-dom";
import { StyledNavigation } from "./StyledNavigation";

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink to='/home/music' activeClassName='active-nav'>Tracks</NavLink>
      <NavLink to='/home/playlists' activeClassName='active-nav'>Playlists</NavLink>
      <NavLink to='/home/artists' activeClassName='active-nav'>Artists</NavLink>
    </StyledNavigation>
  )
};

export default Navigation;
