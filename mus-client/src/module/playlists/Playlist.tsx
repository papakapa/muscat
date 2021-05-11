import React from "react";
import { NavLink } from "react-router-dom";
import {IPlaylist} from "../../core/interfaces/IPlaylist";
import {StyledPlaylist, StyledPlaylistPoster, StyledPlaylistPosterWrapper, StyledPlaylistTitle} from "./StyledPlaylist";

interface PlaylistProps {
  playlist: IPlaylist;
}

const Playlist = ({playlist}: PlaylistProps) => {
  return (
    <StyledPlaylist>
      <StyledPlaylistPosterWrapper>
        <StyledPlaylistPoster src={playlist.poster} alt={`poster of ${playlist.title}`}/>
      </StyledPlaylistPosterWrapper>
      <StyledPlaylistTitle>
        <NavLink to={`/home/playlist/${playlist._id}`}>{playlist.title}</NavLink>
      </StyledPlaylistTitle>
    </StyledPlaylist>
  );
};

export default Playlist;
