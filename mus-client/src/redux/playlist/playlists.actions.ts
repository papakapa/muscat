import {IPlaylist, IPlaylistToCreate} from "../../core/interfaces/IPlaylist";
import {ADD_TRACK_TO_PLAYLIST, DELETE_TRACK_FROM_PLAYLIST, PlaylistsTypes, SET_PLAYLISTS} from "./playlists.types";
import {ThunkAction} from "redux-thunk";
import axios from "axios";
import {backRoutes} from "../../core/constants/back.routes";
import {ITrack} from "../../core/interfaces/ITrack";

export const setPlaylists = (playlists: IPlaylist[]): PlaylistsTypes => ({type: SET_PLAYLISTS, payload: playlists});

export const getPlaylistsAPI = (): ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.get(backRoutes.getPlaylists);
  res.data && dispatch(setPlaylists(res.data));
};

export const createPlaylist = (playlist: IPlaylistToCreate): ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.post(backRoutes.createPlaylist, {playlist});
  res.data && console.log(res.data);
};

export const addTrackToPlaylist = (track: ITrack): PlaylistsTypes => ({type: ADD_TRACK_TO_PLAYLIST, payload: track});

export const deleteTrackFromPlaylist = (track: string): PlaylistsTypes => ({type: DELETE_TRACK_FROM_PLAYLIST, payload: track});
