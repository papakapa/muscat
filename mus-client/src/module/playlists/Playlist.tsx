import React from "react";
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
        <h1>{playlist.title}</h1>
      </StyledPlaylistTitle>
    </StyledPlaylist>
  );
};

export default Playlist;
