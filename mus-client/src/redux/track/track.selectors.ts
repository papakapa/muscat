import { RootState } from '../index';
import {TrackState} from "./track.types";

const trackState = (state: RootState): TrackState => state.tracks;

export const getAllTracks = (state: RootState) => trackState(state).tracks;

export const getLikedTracks = (state: RootState) => trackState(state).likedTracks;
