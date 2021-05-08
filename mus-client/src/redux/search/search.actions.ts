import {SearchTypes, SET_SEARCH_RESULTS} from "./search.types";
import {ThunkAction} from "redux-thunk";
import axios from "axios";
import {backRoutes} from "../../core/constants/back.routes";

export const setSearch = (data: any): SearchTypes => ({type: SET_SEARCH_RESULTS, payload: data});

export const startSearch = (search: string): ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.post(backRoutes.search, {searchString: search});
  res.data && dispatch(setSearch(res.data));
};
