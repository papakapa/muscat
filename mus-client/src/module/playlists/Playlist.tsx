import React from "react";
import {IPlaylist} from "../../core/interfaces/IPlaylist";

interface PlaylistProps {
  playlist: IPlaylist;
}

const Playlist = ({playlist}: PlaylistProps) => {
  return (
    <div>
      <div>
        <img src={playlist.poster} alt={`poster of ${playlist.title}`}/>
      </div>
      <div>
        <h1>{playlist.title}</h1>
      </div>
    </div>
  );
};

export default Playlist;
