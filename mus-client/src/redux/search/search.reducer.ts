import {SearchState, SearchTypes} from "./search.types";

const initialState: SearchState = {
  results: {}
}

const searchReducer = (state = initialState, action: SearchTypes) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        results: action.payload
      }
    default:
      return state;
  }
};

export default searchReducer;
