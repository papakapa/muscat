import {IAlbum} from "../../core/interfaces/IAlbum";
import {AlbumTypes, SET_ALBUMS} from "./album.types";
import {ThunkAction} from "redux-thunk";
import axios from "axios";
import {backRoutes} from "../../core/constants/back.routes";

export const setAlbums = (albums: IAlbum[]): AlbumTypes => ({type: SET_ALBUMS, payload: albums});

export const getAlbumAPI = (): ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.get(backRoutes.getAlbums);
  res.data && dispatch(setAlbums(res.data));
};
