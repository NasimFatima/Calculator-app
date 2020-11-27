import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducers';
import logger from 'redux-logger';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
