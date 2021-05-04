import React from "react";
import {useSelector} from "react-redux";
import {getAllTracks} from "../../../redux/track/track.selectors";
import Track from "../components/Track";
import { StyledTrackList, StyledTracksRender } from "./StyledTrackList";

const TrackList = () => {
  const tracks = useSelector(getAllTracks);

  const rerenderTracks = () => {
    if (tracks.length) {
      return tracks.map(el => <Track track={el} key={el._id}/>)
    }
    return null;
  };

  return (
    <StyledTrackList>
      <div>
      </div>
      <StyledTracksRender>
        {rerenderTracks()}
      </StyledTracksRender>
    </StyledTrackList>
  );

};

export default TrackList;