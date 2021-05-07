import {RootState} from "../index";
import {PlaylistState} from "./playlists.types";

const getPlaylistState = (state: RootState): PlaylistState => state.playlists;

export const getAllPlaylists = (state: RootState) => getPlaylistState(state).playlists;

export const getCreatePlaylistTracks = (state: RootState) => getPlaylistState(state).tracksToPlaylist;
