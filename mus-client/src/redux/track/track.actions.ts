import {ITrack, ITrackToCreate} from "../../core/interfaces/ITrack";
import {ThunkAction} from "redux-thunk";
import axios from "axios";
import {backRoutes} from "../../core/constants/back.routes";
import {SET_LIKED_TRACKS, SET_TRACKS, TrackTypes} from "./track.types";

export const addTrackToDb = (track: ITrackToCreate): ThunkAction<any, any, any, any> => async () => {
  const res = await axios.post(backRoutes.createTrack, { track });
  if (res.data) {
    console.log(res.data);
  }
};

export const setTracks = (tracks: ITrack[]): TrackTypes => ({type: SET_TRACKS, payload: tracks});

export const getAllTrackFromDb = (): ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.get(backRoutes.getTracks);
  res.data && dispatch(setTracks(res.data));
};

export const setLikedTracks = (tracks: ITrack[]): TrackTypes => ({type: SET_LIKED_TRACKS, payload: tracks});

export const addLikeTrack = (track: ITrack, login: string, tracks: ITrack[]): ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.post(backRoutes.addLikedTrack, {login: login, track: track});
  res.data && dispatch(setLikedTracks([...tracks, track]));
};

export const deleteLikedTrack = (track: ITrack, login: string, tracks: ITrack[]): ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.post(backRoutes.deleteLikedTrack, {login, track});
  if (res.data) {
   const resultTracks = tracks.filter(el => el._id !== track._id);
   dispatch(setLikedTracks(resultTracks));
  }
};
