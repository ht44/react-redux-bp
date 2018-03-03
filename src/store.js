import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

export const history = createHistory();

const initialState = {};

const middleware = [
  thunk,
  routerMiddleware(history)
];

const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, initialState, composeEnhancers(
  applyMiddleware(...middleware)
));

export default store