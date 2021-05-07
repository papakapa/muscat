import { IArtist, IArtistToCreate } from '../../core/interfaces/IArtist';

export const ADD_ARTIST  = 'ADD_ARTIST';
export const SET_ARTISTS = 'SET_ARTISTS';

interface ADD_NEW_ARTIST {
  type: typeof ADD_ARTIST;
  payload: IArtistToCreate;
}

interface SET_ARTIST {
  type: typeof SET_ARTISTS;
  payload: IArtist[];
}

export interface ArtistState {
  artists: IArtist[]
}

export type ArtistTypes = ADD_NEW_ARTIST | SET_ARTIST;
