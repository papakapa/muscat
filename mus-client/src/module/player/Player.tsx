import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  getCurrentIndex,
  getCurrentOrder,
  getCurrentTrack, getIsFirst,
  getIsLast,
  getIsPlaying,
  getPlayerTrackState
} from "../../redux/player/player.selectors";
import {setCurrentTrack, setIsPlaying, setPLayerTrackState} from "../../redux/player/player.actions";
import {PlayerStateEnum} from "../../core/enums/player-state.enum";

let audio = new Audio();

const Player = () => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);
  const track = useSelector(getCurrentTrack);
  const trackState = useSelector(getPlayerTrackState);
  const order = useSelector(getCurrentOrder);
  const isPlaying = useSelector(getIsPlaying);
  const isLast = useSelector(getIsLast);
  const isFirst = useSelector(getIsFirst);
  const currentIndex= useSelector(getCurrentIndex);

  const onPlay = useCallback(() => {
    if (track) {
      audio.src = track.link;
      trackState === PlayerStateEnum.STARTED ? (audio.currentTime = 0) : (audio.currentTime = time);
      !isPlaying && dispatch(setIsPlaying(true));
      audio.play();
    }
  },[track,isPlaying, dispatch, time, trackState]);

  const onStop = useCallback(() => {
    audio.pause();
    trackState === PlayerStateEnum.STARTED && dispatch(setPLayerTrackState(PlayerStateEnum.PLAYING));
    setTime(audio.currentTime);
    dispatch(setIsPlaying(false));
  }, [dispatch, trackState]);

  const onNext = useCallback(() => {
    if (!isLast) {
      dispatch(setCurrentTrack(order[currentIndex + 1]));
    } else {
      dispatch(setCurrentTrack(order[0]));
    }
    dispatch(setIsPlaying(true));
    dispatch(setPLayerTrackState(PlayerStateEnum.STARTED));
  },[dispatch, order, currentIndex, isLast]);

  const onPrev = useCallback(() => {
    if (isFirst) {
      dispatch(setCurrentTrack(order[order.length - 1]))
    } else {
      dispatch(setCurrentTrack(order[currentIndex - 1]));
    }
    dispatch(setIsPlaying(true));
    dispatch(setPLayerTrackState(PlayerStateEnum.STARTED));
  },[dispatch, order, currentIndex, isFirst]);

  useEffect(() => {
    isPlaying ? onPlay() : onStop();
  }, [track,isPlaying, onPlay, onStop]);

  if (!track) return null;

  return (
    <div>
     <div>

     </div>
      <div>
        <div>
          <button onClick={onPrev}>prev</button>
          {isPlaying ? <button onClick={onStop}>stop</button>
                     : <button onClick={onPlay}>play</button>}
          <button onClick={onNext}>next</button>
        </div>
        <div>
          <div />
        </div>
      </div>
    </div>
  );

};

export default Player;