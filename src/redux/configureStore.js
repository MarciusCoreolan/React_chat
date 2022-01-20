import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { application, contacts, messages } from './ducks';

export const store = createStore(
  combineReducers({ application, messages, contacts }),
  applyMiddleware(thunk),
);
