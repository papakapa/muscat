import { ITrack } from '../../core/interfaces/ITrack';

export const ADD_TRACK = 'ADD_TRACK';
export const SET_TRACKS = 'SET_TRACKS';

interface ADD_SONG {
  type: typeof ADD_TRACK;
  payload: ITrack;
}

interface SET_TRACK {
  type: typeof SET_TRACKS;
  payload: ITrack[];
}

export interface TrackState {
  tracks: ITrack[];
}

export type TrackTypes = ADD_SONG | SET_TRACK;
