import { IUserToCreate } from '../../core/interfaces/IUser';

export const SET_SIGN_STAGE = 'SET_SIGN_STAGE';
export const SET_AUTH_STAGE = 'SET_AUTH_STAGE';
export const SET_SIGN_IN_STAGE = 'SET_SIGN_IN_STAGE';
export const SET_CURRENT_LOGIN = 'SET_CURRENT_LOGIN';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

interface SET_STAGE_SIGN {
  type: typeof SET_SIGN_STAGE;
  payload: string;
}

interface SET_STAGE_AUTH {
  type: typeof SET_AUTH_STAGE;
  payload: string;
}

interface SET_STAGE_SIGN_IN {
  type: typeof SET_SIGN_IN_STAGE;
  payload: number;
}

interface SET_LOGIN {
  type: typeof SET_CURRENT_LOGIN;
  payload: string;
}

interface SET_USER {
  type: typeof SET_CURRENT_USER,
  payload: IUserToCreate
}

export interface AuthState {
  signStage: string;
  signInStage: number;
  authStage: string;
  currentLogin: string;
  currentUser: IUserToCreate | {};
}

export type AuthTypes = SET_LOGIN | SET_STAGE_AUTH | SET_STAGE_SIGN | SET_STAGE_SIGN_IN | SET_USER;
