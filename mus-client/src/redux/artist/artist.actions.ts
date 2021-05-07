import {IArtist, IArtistToCreate} from '../../core/interfaces/IArtist';
import {ADD_ARTIST, ArtistTypes, SET_ARTISTS} from './artist.types';
import {ThunkAction} from 'redux-thunk';
import axios from 'axios';
import {backRoutes} from '../../core/constants/back.routes';

export const addArtist = (artist: IArtistToCreate): ArtistTypes => ({type: ADD_ARTIST, payload: artist});

export const addArtistToDb = (artist: IArtistToCreate): ThunkAction<any, any, any, any> => async () => {
  const res = await axios.post(backRoutes.createArtist, {artist: {
      nickName: artist.nickName,
      avatar: artist.avatar,
    }});
  if (res.data) {
    console.log(res.data);
  }
};

export const setArtists = (artists: IArtist[]): ArtistTypes => ({type: SET_ARTISTS, payload: artists});

export const getArtistAPI = ():ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.get(backRoutes.getArtists);
  res.data && dispatch(setArtists(res.data));
};
