export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

interface SET_RESULTS {
  type: typeof SET_SEARCH_RESULTS;
  payload: any;
}

export interface SearchState {
  results: any;
}

export type SearchTypes = SET_RESULTS;
