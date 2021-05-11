import {
  AuthTypes,
  SET_AUTH_STAGE,
  SET_CURRENT_LOGIN,
  SET_CURRENT_USER,
  SET_SIGN_IN_STAGE,
  SET_SIGN_STAGE,
} from './auth.types';
import {IUser, IUserToCreate} from '../../core/interfaces/IUser';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../index';
import axios from 'axios';
import { AuthStages } from '../../core/constants/auth-stages.constants';
import { SignStages } from '../../core/enums/sign-stages.enum';
import { backRoutes } from '../../core/constants/back.routes';
import {setLikedTracks} from "../track/track.actions";

export const setAuthStage = (authStage: string): AuthTypes => ({type: SET_AUTH_STAGE, payload: authStage});
export const setSignStage = (signStage: string): AuthTypes => ({type: SET_SIGN_STAGE, payload: signStage});
export const setSignInStage = (signInStage: number): AuthTypes => ({type: SET_SIGN_IN_STAGE, payload: signInStage});
export const setCurrentLogin = (login: string): AuthTypes => ({type: SET_CURRENT_LOGIN, payload: login});
export const setCurrentUser = (user: IUser): AuthTypes => ({type: SET_CURRENT_USER, payload: user});

export const signUp = (user: IUserToCreate): ThunkAction<any, RootState, any, any> => async dispatch => {
  console.log(user);
  const res = await axios.post(backRoutes.signUp, {
    user: {
      firstName: user.firstName,
      secondName: user.secondName,
      login: user.login,
      email: user.email,
      password: user.password
    }
  });
  if (res.status !== 500) {
   dispatch(setSignStage(SignStages.SIGN_IN));
  }
};

export const updateUserAPI = (user: IUser):ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.post(backRoutes.updateUser, {user});
  res.data && dispatch(setCurrentUser(user));
};

export const checkLogin = (login: string): ThunkAction<any, RootState, any, any> => async dispatch => {
  const res = await axios.post(backRoutes.validateLogin, {login: login});
  if (res.data) {
    if (res.data.isExist) {
      dispatch(setCurrentLogin(login));
      dispatch(setSignInStage(2));
    }
  }
};

export const  signIn = (login: string, password: string): ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.post(backRoutes.signIn,{login: login, password: password});
  if (res.data.access_token) {
    localStorage.setItem('token', res.data.access_token);
    dispatch(setSignInStage(1));
    dispatch(setAuthStage(AuthStages.AUTHORIZED));
    const response  = await axios.post(backRoutes.getLikedTracks, {login: login});
    response.data ? dispatch(setLikedTracks(response.data)): dispatch(setLikedTracks([]));
  }
  console.log(res);
  console.log(res.data);
}

export const validateToken = (): ThunkAction<any, RootState, any, any> => async dispatch => {
  dispatch(setAuthStage(AuthStages.PENDING));
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(setAuthStage(AuthStages.NOT_AUTHORIZED));
  } else {
    try {
      const res = await axios.get(backRoutes.validateToken, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.status === 200 && res.data.login) {
        dispatch(setCurrentLogin(res.data.login));
        dispatch(setAuthStage(AuthStages.AUTHORIZED));
        const response  = await axios.post(backRoutes.getLikedTracks, {login: res.data.login});
        response.data ? dispatch(setLikedTracks(response.data)): dispatch(setLikedTracks([]));
      } else {
        localStorage.removeItem('token');
        dispatch(setCurrentLogin(''));
        dispatch(setAuthStage(AuthStages.NOT_AUTHORIZED));
      }
    } catch (e) {
      localStorage.removeItem('token');
      dispatch(setCurrentLogin(''));
      dispatch(setAuthStage(AuthStages.NOT_AUTHORIZED));
    }
  }
};

export const getUserAPI = (login: string): ThunkAction<any, any, any, any> => async dispatch => {
  const res = await axios.post(backRoutes.getUser, {login});
  res.data && dispatch(setCurrentUser(res.data));
};
