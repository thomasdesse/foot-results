/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import ajax from '../middlewares/api';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ajax),
);

const store = createStore(reducer, enhancers);

export default store;

