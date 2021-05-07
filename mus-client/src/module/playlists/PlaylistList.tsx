import React, {useCallback} from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import {getAllPlaylists} from "../../redux/playlist/playlists.selector";
import Playlist from "./Playlist";

const PlaylistList = () => {
  const playlists = useSelector(getAllPlaylists);

  const rerenderPlaylists = useCallback(() => {
    if (playlists.length) {
      return playlists.map(el => <Playlist playlist={el} key={el._id}/>)
    }
    return null;
  }, [playlists]);

  return (
    <div>
      <NavLink to={'/home/createPlaylist'}>Create Playlist</NavLink>
      <div>
        {rerenderPlaylists()}
      </div>
    </div>
  );
};

export default PlaylistList;
