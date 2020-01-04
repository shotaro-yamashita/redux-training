import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from './index';

const rootReducer = combineReducers(reducers);

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
}
