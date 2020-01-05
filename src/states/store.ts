import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './index';
import { todoSagas } from './todo/operations';

const rootReducer = combineReducers(reducers);

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
  sagaMiddleware.run(todoSagas);

  return store;
}
