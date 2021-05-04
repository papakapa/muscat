import {ITrackToCreate} from "../../core/interfaces/ITrack";
import {ThunkAction} from "redux-thunk";
import axios from "axios";
import {backRoutes} from "../../core/constants/back.routes";

export const addTrackToDb = (track: ITrackToCreate): ThunkAction<any, any, any, any> => async () => {
  const res = await axios.post(backRoutes.createTrack, { track });
  if (res.data) {
    console.log(res.data);
  }
};
