import React from 'react';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import reducers from './reducers';

const PRODUCTION = (process.env.NODE_ENV == 'production');

function getDevToolsExtension() {
  return !PRODUCTION && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : noop => noop;
}

export default function configureStore() {
  const reducer = combineReducers({
    ...reducers,
  });

  const enhancer = compose(
    getDevToolsExtension(),
  );

  return createStore(reducer, enhancer);
}
