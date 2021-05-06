import {ITrack} from "../../core/interfaces/ITrack";

export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';
export const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER';
export const SET_IS_PLAYING = 'SET_IS_PLAYING';
export const SET_CURRENT_TRACK_STATE = 'SET_CURRENT_TRACK_STATE';

interface SET_TRACK {
  type: typeof SET_CURRENT_TRACK;
  payload: ITrack;
}

interface SET_IS_PLAY {
  type: typeof SET_IS_PLAYING;
  payload: boolean;
}

interface SET_ORDER {
  type: typeof SET_CURRENT_ORDER;
  payload: ITrack[];
}

interface SET_TRACK_STATE {
  type: typeof SET_CURRENT_TRACK_STATE;
  payload: string;
}

export interface PlayerState {
  currentTrack: ITrack | null;
  currentOrder: ITrack[];
  isPlaying: boolean;
  trackState: string;
}

export type PlayerTypes = SET_TRACK | SET_ORDER | SET_IS_PLAY | SET_TRACK_STATE;
