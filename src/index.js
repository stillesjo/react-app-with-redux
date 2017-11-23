import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {initializeCurrentLocation} from 'redux-little-router';
import {routerForBrowser} from 'redux-little-router';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import './typography';

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer
} = routerForBrowser({routes});

const appReducer = combineReducers({
  router: routerReducer
});

const composedMiddleware = [
  applyMiddleware(thunk, routerMiddleware)
];
const store = createStore(
  appReducer, 
  {},
  compose(routerEnhancer, ...composedMiddleware)
);


const initialLocation = store.getState().router;
if(initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
};

ReactDOM.render(
  <Provider store={store}>
    <App routes={routes} />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
