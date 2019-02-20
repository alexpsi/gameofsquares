import { combineReducers } from 'redux';
import { RootState } from './state';
import { highScoreReducer } from './high-score';
import { gameReducer } from './game';
import { settingsReducer } from './settings';

import { connectRouter } from 'connected-react-router'
export { RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = (history: any) => combineReducers<RootState>({
  router: connectRouter(history),
  highScores: highScoreReducer,
  game: gameReducer,
  settings: settingsReducer,
} as any);
