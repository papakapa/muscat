import {AlbumState, AlbumTypes} from "./album.types";

const initialState: AlbumState = {
  albums: []
};

const albumReducer = (state = initialState, action: AlbumTypes) => {
  switch (action.type) {
    case "SET_ALBUMS":
      return {
        ...state,
        albums: action.payload
      }
    default:
      return state;
  }
};

export default albumReducer;
