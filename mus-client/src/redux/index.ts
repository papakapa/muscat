import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './auth/auth.reducer';
import artistReducer from './artist/artist.reducer';
import trackReducer from './track/track.reducer';
import playerReducer from "./player/player.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  artist: artistReducer,
  tracks: trackReducer,
  player: playerReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
