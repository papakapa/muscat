import { RootState } from '../index';
import { AuthState } from './auth.types';

const authState = (state: RootState): AuthState => state.auth;

export const getAuthStage = (state: RootState) => authState(state).authStage;
export const getSignStage = (state: RootState) => authState(state).signStage;
export const getSignInStage = (state: RootState) => authState(state).signInStage;
export const getCurrentLogin = (state: RootState) => authState(state).currentLogin;
export const getCurrentUser = (state: RootState) => authState(state).currentUser;
