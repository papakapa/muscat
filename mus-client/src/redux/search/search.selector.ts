import {RootState} from "../index";
import {SearchState} from "./search.types";

const getSearchState = (state: RootState): SearchState => state.search;

export const getSearchResults = (state: RootState) => getSearchState(state).results;
