import React, {useCallback, useMemo} from 'react';
import {ITrack} from '../../../core/interfaces/ITrack';
import {StyledTrack, StyledTrackAuthor, StyledTrackInfo, StyledTrackName, StyledTrackPoster, StyledTrackTitle} from './StyledTrack';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentTrackId, getIsPlaying} from "../../../redux/player/player.selectors";
import {
  setCurrentOrder,
  setCurrentTrack,
  setIsPlaying,
  setPLayerTrackState
} from "../../../redux/player/player.actions";
import {PlayerStateEnum} from "../../../core/enums/player-state.enum";
import {getLikedTracks} from "../../../redux/track/track.selectors";
import {getCurrentLogin} from "../../../redux/auth/auth.selectors";
import {addLikeTrack, deleteLikedTrack} from "../../../redux/track/track.actions";

interface TrackProps {
  track: ITrack;
  order: ITrack[];
}

const Track: React.FC<TrackProps> = ({track, order}) => {
  const dispatch = useDispatch();
  const currentId = useSelector(getCurrentTrackId);
  const isCurrentPlaying = useSelector(getIsPlaying);
  const likedTracks = useSelector(getLikedTracks);
  const currentLogin = useSelector(getCurrentLogin);

  const getPoster = useCallback(() => track.poster, [track]);
  const getName = useCallback(() => track.title, [track]);
  const getAuthor = useCallback(() => track.artist, [track]);

  const isEqualCurrent = useMemo(() => track._id === currentId, [currentId, track]);
  const isPlaying = useMemo(() => {
    if (isEqualCurrent) {
      return isCurrentPlaying;
    }
    return false;
  },[isEqualCurrent, isCurrentPlaying]);
  const isLiked = useMemo(() => likedTracks.findIndex(el => el._id === track._id) !== -1, [likedTracks, track]);
  const onPlay = () => {
    if (!isEqualCurrent) {
      console.log('here', isEqualCurrent);
      dispatch(setCurrentTrack(track));
      dispatch(setPLayerTrackState(PlayerStateEnum.STARTED));
    } else {
      console.log('here2', isEqualCurrent, track._id, currentId);
      dispatch(setPLayerTrackState(PlayerStateEnum.PLAYING));
    }
    dispatch(setCurrentOrder(order));
    dispatch(setIsPlaying(true));
  };
  const onStop = () => {
    dispatch(setIsPlaying(false));
  };
  const onLike = () => {
    dispatch(addLikeTrack(track, currentLogin, likedTracks));
  };

  const onUnLike = () => dispatch(deleteLikedTrack(track, currentLogin, likedTracks));

  return (
    <StyledTrack>
      <div>
        {!isPlaying &&  <button onClick={onPlay}>play</button>}
        {isPlaying && <button onClick={onStop}>stop</button>}
      </div>
      <StyledTrackInfo>
        <StyledTrackPoster src={getPoster()} alt='posterTrack'/>
        <StyledTrackTitle>
          <StyledTrackAuthor>{getName()}</StyledTrackAuthor>
          <StyledTrackName>{getAuthor()}</StyledTrackName>
        </StyledTrackTitle>
      </StyledTrackInfo>
      <div>
        {!isLiked && <button onClick={onLike}>like</button>}
        {isLiked && <button onClick={onUnLike}>unlike</button>}
      </div>
    </StyledTrack>
  );
};

export default Track;
