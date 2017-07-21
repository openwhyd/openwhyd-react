import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { reducer as formReducer } from 'redux-form';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

const store = createStoreWithMiddleware(combineReducers({
  ...reducers,
  routing: routerReducer,
  form: formReducer
}));

// Create an enhanced history that syncs navigation events with the store
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
