import {RootState} from "../index";
import {AlbumState} from "./album.types";

const getAlbumState = (state: RootState): AlbumState =>  state.albums;

export const getAllAlbums = (state: RootState) => getAlbumState(state).albums;
