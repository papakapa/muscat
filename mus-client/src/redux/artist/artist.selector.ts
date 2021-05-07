import {RootState} from "../index";
import {ArtistState} from "./artist.types";

const getArtistState = (state: RootState): ArtistState => state.artist;

export const getAllArtists = (state: RootState) => getArtistState(state).artists;
