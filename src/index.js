import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import store from './store.js';
import {Provider} from 'react-redux';

import './index.css';

// FIXME : Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>  
  ,
  document.getElementById('root')
);
