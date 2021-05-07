import { ArtistState, ArtistTypes } from './artist.types';

const initialState: ArtistState = {
  artists: []
};

const artistReducer = (state = initialState, action: ArtistTypes) => {
  switch (action.type) {
    case 'ADD_ARTIST':
      return {
        ...state,
        artists: [...state.artists, action.payload]
      }
    case "SET_ARTISTS":
      return {
        ...state,
        artists: action.payload
      }
    default:
      return state
  }
};

export default artistReducer;
