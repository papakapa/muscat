import {IAlbum} from "../../core/interfaces/IAlbum";

export const SET_ALBUMS = 'SET_ALBUMS';

interface SET_ALBUM {
  type: typeof SET_ALBUMS;
  payload: IAlbum[];
}

export interface AlbumState {
  albums: IAlbum[];
}

export type AlbumTypes = SET_ALBUM;
