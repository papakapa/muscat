import {IPlaylist} from "../../core/interfaces/IPlaylist";
import {ITrack} from "../../core/interfaces/ITrack";

export const SET_PLAYLISTS = 'SET_PLAYLISTS';
export const ADD_TRACK_TO_PLAYLIST = 'ADD_TRACK_TO_PLAYLIST';
export const DELETE_TRACK_FROM_PLAYLIST = 'DELETE_TRACK_FROM_PLAYLIST';

interface SET_LISTS {
  type: typeof SET_PLAYLISTS;
  payload: IPlaylist[];
}

interface ADD_PLAYLIST_TRACK {
  type: typeof ADD_TRACK_TO_PLAYLIST;
  payload: ITrack;
}

interface DELETE_PLAYLIST_TRACK {
  type: typeof DELETE_TRACK_FROM_PLAYLIST;
  payload: string;
}

export interface PlaylistState {
  playlists: IPlaylist[];
  tracksToPlaylist: ITrack[];
}

export type PlaylistsTypes = SET_LISTS | ADD_PLAYLIST_TRACK | DELETE_PLAYLIST_TRACK;
