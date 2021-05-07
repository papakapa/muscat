import React from "react";
import {IAlbum} from "../../core/interfaces/IAlbum";
import {NavLink} from "react-router-dom";

interface AlbumProps {
  album: IAlbum;
}

const Album = ({album}: AlbumProps) => {
  return (
    <div>
      <div>
        <img src={album.poster} alt={`poster of ${album.title}`}/>
      </div>
      <div>
        <NavLink to={`/home/album/${album._id}`}>{album.title}</NavLink>
      </div>
    </div>
  );
};

export default Album;
