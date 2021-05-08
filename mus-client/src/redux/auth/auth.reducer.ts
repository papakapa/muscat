import { AuthState, AuthTypes } from './auth.types';

const initialState: AuthState = {
  authStage: '',
  currentLogin: '',
  currentUser: {
    _id: '',
    email: '',
    firstName: '',
    login: '',
    password: '',
    secondName: ''
  },
  signInStage: 1,
  signStage: 'signIn'
};

const authReducer = (state = initialState, action: AuthTypes) => {
  switch (action.type) {
    case 'SET_AUTH_STAGE':
      return {
        ...state,
        authStage: action.payload
      }
    case 'SET_CURRENT_LOGIN':
      return {
        ...state,
        currentLogin: action.payload,
      }
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    case 'SET_SIGN_IN_STAGE':
      return {
        ...state,
        signInStage: action.payload
      }
    case 'SET_SIGN_STAGE':
      return {
        ...state,
        signStage: action.payload
      }
    default:
      return state
  }
};

export default authReducer;
