import React, {useCallback} from 'react';
import {ITrack} from '../../../core/interfaces/ITrack';
import {StyledTrack, StyledTrackAuthor, StyledTrackInfo, StyledTrackName, StyledTrackPoster, StyledTrackTitle} from './StyledTrack';

interface TrackProps {
  track: ITrack;
}

const Track: React.FC<TrackProps> = ({track}) => {
  const getPoster = useCallback(() => track.poster, [track]);
  const getName = useCallback(() => track.title, [track]);
  const getAuthor = useCallback(() => track.artist, [track]);


  return (
    <StyledTrack>
      <StyledTrackInfo>
        <StyledTrackPoster src={getPoster()} alt='posterTrack'/>
        <StyledTrackTitle>
          <StyledTrackAuthor>{getName()}</StyledTrackAuthor>
          <StyledTrackName>{getAuthor()}</StyledTrackName>
        </StyledTrackTitle>
      </StyledTrackInfo>
      <div></div>
    </StyledTrack>
  );
};

export default Track;
