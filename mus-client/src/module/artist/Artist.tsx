import React from "react";
import { NavLink } from "react-router-dom";
import {IArtist} from "../../core/interfaces/IArtist";
import { StyledArtist, StyledArtistPoster, StyledArtistPosterWrapper, StyledArtistTitle } from "./StyledArtist";

interface ArtistProps {
  artist: IArtist;
}

const Artist = ({artist}: ArtistProps) => {
  return (
    <StyledArtist>
      <StyledArtistPosterWrapper>
        <StyledArtistPoster src={artist.avatar} alt={`avatar of ${artist.nickName}`}/>
      </StyledArtistPosterWrapper>
      <StyledArtistTitle>
        <NavLink to={`/home/artist/${artist._id}`}>{artist.nickName}</NavLink>
      </StyledArtistTitle>
    </StyledArtist>
  );
};

export default Artist;
