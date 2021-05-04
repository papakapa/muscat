import { ITrack } from '../../core/interfaces/ITrack';

export const ADD_TRACK = 'ADD_TRACK';

interface ADD_SONG {
  type: typeof ADD_TRACK;
  payload: ITrack;
}

export interface TrackState {
  tracks: ITrack[];
}

export type TrackTypes = ADD_SONG;
