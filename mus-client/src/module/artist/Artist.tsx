import React from "react";
import { NavLink } from "react-router-dom";
import {IArtist} from "../../core/interfaces/IArtist";

interface ArtistProps {
  artist: IArtist;
}

const Artist = ({artist}: ArtistProps) => {
  return (
    <div>
      <div>
        <img src={artist.avatar} alt={`avatar of ${artist.nickName}`}/>
      </div>
      <div>
        <NavLink to={`/home/artist/${artist._id}`}>{artist.nickName}</NavLink>
      </div>
    </div>
  );
};

export default Artist;
