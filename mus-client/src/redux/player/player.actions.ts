import {ITrack} from "../../core/interfaces/ITrack";
import {
  PlayerTypes,
  SET_CURRENT_ORDER,
  SET_CURRENT_TRACK,
  SET_CURRENT_TRACK_STATE,
  SET_IS_PLAYING
} from "./player.types";

export const setCurrentTrack = (track: ITrack): PlayerTypes => ({type: SET_CURRENT_TRACK, payload: track});

export const setCurrentOrder = (tracks: ITrack[]): PlayerTypes => ({type: SET_CURRENT_ORDER, payload: tracks});

export const setIsPlaying = (isPlaying: boolean): PlayerTypes => ({type: SET_IS_PLAYING, payload: isPlaying});

export const setPLayerTrackState = (state: string): PlayerTypes => ({type: SET_CURRENT_TRACK_STATE, payload: state});
