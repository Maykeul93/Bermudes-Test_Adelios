import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(),
);

const store = configureStore({reducer}, enhancers);

export default store;