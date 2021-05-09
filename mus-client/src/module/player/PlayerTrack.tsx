import React from "react";
import {ITrack} from "../../core/interfaces/ITrack";
import {StyledPlayerTrack, StyledPlayerTrackArtist, StyledPlayerTrackPoster, StyledPlayerTrackTitle, StyledPoster} from "./StyledPlayerTrack";

interface PlayerTrackProps {
  track: ITrack;
}

const PlayerTrack = ({track}: PlayerTrackProps) => {
  return (
    <StyledPlayerTrack>
      <StyledPlayerTrackPoster>
        <StyledPoster src={track.poster} alt={'trackPoster'}/>
      </StyledPlayerTrackPoster>
      <div>
        <StyledPlayerTrackTitle>{track.title}</StyledPlayerTrackTitle>
        <StyledPlayerTrackArtist>{track.artist}</StyledPlayerTrackArtist>
      </div>
    </StyledPlayerTrack>
  );
};

export default PlayerTrack;
