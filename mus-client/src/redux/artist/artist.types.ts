import { IArtist, IArtistToCreate } from '../../core/interfaces/IArtist';

export const ADD_ARTIST  = 'ADD_ARTIST';

interface ADD_NEW_ARTIST {
  type: typeof ADD_ARTIST;
  payload: IArtistToCreate;
}

export interface ArtistState {
  artists: IArtist[]
}

export type ArtistTypes = ADD_NEW_ARTIST;
