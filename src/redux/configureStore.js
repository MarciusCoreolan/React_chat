import { applyMiddleware, combineReducers, createStore } from 'redux';
import { application, messages, contacts } from '../../../react_chat1/src/redux/ducks';
import thunk from 'redux-thunk';

export const store = createStore(
  combineReducers({ application, messages, contacts }),
  applyMiddleware(thunk),
);
