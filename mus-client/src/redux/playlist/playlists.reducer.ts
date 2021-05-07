import {PlaylistState, PlaylistsTypes} from "./playlists.types";

const initialState: PlaylistState = {
  playlists: [],
  tracksToPlaylist: [],
};

const playlistReducer = (state = initialState, action: PlaylistsTypes) => {
  switch (action.type) {
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.payload
      }
    case "ADD_TRACK_TO_PLAYLIST":
      return {
        ...state,
        tracksToPlaylist: [...state.tracksToPlaylist, action.payload]
      }
    case "DELETE_TRACK_FROM_PLAYLIST":
      return {
        ...state,
        tracksToPlaylist: state.tracksToPlaylist.filter(el => el._id !== action.payload)
      }
    default:
      return state
  }
};

export default playlistReducer;
