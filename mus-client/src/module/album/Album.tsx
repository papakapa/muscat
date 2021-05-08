import React from "react";
import {IAlbum} from "../../core/interfaces/IAlbum";
import {NavLink} from "react-router-dom";
import {StyledAlbum, StyledAlbumPoster, StyledAlbumPosterWrapper, StyledAlbumTitle} from "./StyledAlbum";

interface AlbumProps {
  album: IAlbum;
}

const Album = ({album}: AlbumProps) => {
  return (
    <StyledAlbum>
      <StyledAlbumPosterWrapper>
        <StyledAlbumPoster src={album.poster} alt={`poster of ${album.title}`}/>
      </StyledAlbumPosterWrapper>
      <StyledAlbumTitle>
        <NavLink to={`/home/album/${album._id}`}>{album.title}</NavLink>
      </StyledAlbumTitle>
    </StyledAlbum>
  );
};

export default Album;
