import {TrackState, TrackTypes} from "./track.types";

const initialState: TrackState = {
  tracks: [],
  likedTracks: [],
};

const trackReducer = (state = initialState, action: TrackTypes) => {
  switch (action.type) {
    case "ADD_TRACK":
      return {
        ...state,
        tracks: [...state.tracks, action.payload]
      }
    case "SET_TRACKS":
      return {
        ...state,
        tracks: action.payload
      }
    case "SET_LIKED_TRACKS":
      return {
        ...state,
        likedTracks: action.payload
      }
    default:
      return state
  }
};

export default trackReducer;
