import {TrackState, TrackTypes} from "./track.types";

const initialState: TrackState = {
  tracks: []
};

const trackReducer = (state = initialState, action: TrackTypes) => {
  switch (action.type) {
    case "ADD_TRACK":
      return {
        ...state,
        tracks: [...state.tracks, action.payload]
      }
    default:
      return state
  }
};

export default trackReducer;
