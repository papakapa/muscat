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
import {StyledPlayer, StyledPlayerControls,
  StyledPlayerIcon,
  StyledPlayerMainControls, StyledPlayerTools, StyledProgress, StyledProgressBar, StyledTrackWrapper } from "./StyledPlayer";
import PlayerTrack from "./PlayerTrack";

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

  const rerenderTrack = useCallback(() => {
    if (track) {
      return <PlayerTrack track={track} key={track._id + 'player'}/>
    }
    return null;
  }, [track]);

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

  const onProgressClick = (event: any) => {
    let line = document.getElementById('pb');
    if (line) {
      let x = event.pageX - line.offsetLeft;
      let progress = x / line.offsetWidth * 100;
      audio.currentTime = audio.duration * (progress / 100);
    }
  };

  useEffect(() => {
    isPlaying ? onPlay() : onStop();
  }, [track,isPlaying, onPlay, onStop]);

  useEffect(() => {
    trackState === PlayerStateEnum.ENDED && onNext();
  }, [trackState, onNext]);

  audio.addEventListener('timeupdate', () => {
    let pos = audio.currentTime / audio.duration;
    const progress = document.getElementById('pg');
    if (progress) {
      progress.style.width = pos * 100 + '%';
    }
    if (audio.ended) {
      dispatch(setPLayerTrackState(PlayerStateEnum.ENDED));
    }
  });

  if (!track) return null;

  return (
    <StyledPlayer>
     <StyledTrackWrapper>
       {rerenderTrack()}
     </StyledTrackWrapper>
      <StyledPlayerControls>
        <StyledPlayerMainControls>
          <StyledPlayerIcon  className='material-icons' onClick={onPrev}>skip_previous</StyledPlayerIcon>
          {isPlaying ? <StyledPlayerIcon  className='material-icons' onClick={onStop}>pause_circle_filled</StyledPlayerIcon>
            : <StyledPlayerIcon className="material-icons" onClick={onPlay}>play_circle_filled</StyledPlayerIcon>}
          <StyledPlayerIcon  className='material-icons' onClick={onNext}>skip_next</StyledPlayerIcon>
        </StyledPlayerMainControls>
        <StyledProgressBar id='pb' onClick={onProgressClick}>
          <StyledProgress id='pg'/>
        </StyledProgressBar>
      </StyledPlayerControls>
      <StyledPlayerTools>
        Tools
      </StyledPlayerTools>
    </StyledPlayer>
  );

};

export default Player;
