import {PlayerState, PlayerTypes} from "./player.types";

const initialState: PlayerState = {
  currentTrack: null,
  currentOrder: [],
  isPlaying: false,
  trackState: '',
};

const playerReducer = (state = initialState, action: PlayerTypes) => {
  switch (action.type) {
    case "SET_CURRENT_ORDER":
      return {
        ...state,
        currentOrder: action.payload
      }
    case "SET_CURRENT_TRACK":
      return {
        ...state,
        currentTrack: action.payload
      }
    case "SET_IS_PLAYING":
      return {
        ...state,
        isPlaying: action.payload,
      }
    case "SET_CURRENT_TRACK_STATE":
      return {
        ...state,
        trackState: action.payload,
      }
    default:
      return state;
  }
};

export default playerReducer;
