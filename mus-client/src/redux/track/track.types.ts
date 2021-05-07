import { ITrack } from '../../core/interfaces/ITrack';

export const ADD_TRACK = 'ADD_TRACK';
export const SET_TRACKS = 'SET_TRACKS';
export const SET_LIKED_TRACKS = 'SET_LIKED_TRACKS';

interface ADD_SONG {
  type: typeof ADD_TRACK;
  payload: ITrack;
}

interface SET_TRACK {
  type: typeof SET_TRACKS;
  payload: ITrack[];
}

interface SET_LIKED_SONGS {
  type: typeof SET_LIKED_TRACKS;
  payload: ITrack[];
}

export interface TrackState {
  tracks: ITrack[];
  likedTracks: ITrack[];
}

export type TrackTypes = ADD_SONG | SET_TRACK | SET_LIKED_SONGS;
