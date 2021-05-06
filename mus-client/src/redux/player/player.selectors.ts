import {RootState} from "../index";
import {PlayerState} from "./player.types";

const getPlayerState = (state: RootState): PlayerState => state.player;

export const getCurrentTrack = (state: RootState) => getPlayerState(state).currentTrack;

export const getCurrentTrackId = (state: RootState) => getPlayerState(state).currentTrack?._id;

export const getCurrentOrder = (state: RootState) => getPlayerState(state).currentOrder;

export const getIsPlaying = (state: RootState) => getPlayerState(state).isPlaying;

export const getPlayerTrackState = (state: RootState) => getPlayerState(state).trackState;

export const getIsLast = (state: RootState) => {
  const order = getCurrentOrder(state);
  return order.length ? order[order.length - 1]._id === getCurrentTrackId(state) : false;
};

export const getIsFirst = (state: RootState) => {
  const order = getCurrentOrder(state);
  return order.length ? order[0]._id === getCurrentTrackId(state) : false;
};

export const getCurrentIndex = (state: RootState) => {
  const order = getCurrentOrder(state);
  return order.length ? order.findIndex(el => el._id === getCurrentTrackId(state)) : -1;
};
