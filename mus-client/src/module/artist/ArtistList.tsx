import React, {useCallback} from "react";
import {useSelector} from "react-redux";
import {getAllArtists} from "../../redux/artist/artist.selector";
import Artist from "./Artist";
import { StyledArtistList } from "./StyledArtistList";

const ArtistList = () => {
  const artists = useSelector(getAllArtists);

  const rerenderArtists = useCallback(() => {
    if (artists.length) {
     return artists.map(el => <Artist artist={el} key={el._id}/>)
    }
    return null;
  }, [artists]);

  return (
    <StyledArtistList>
      {rerenderArtists()}
    </StyledArtistList>
  );
};

export default ArtistList;
