import React from 'react';
import ReactDOM from 'react-dom';
import store, { history } from './store.js';
import {Provider} from 'react-redux';
import { Router, Route } from 'react-router';

import './index.css';

import App from './containers/App.js';
import SignIn from './containers/SignIn.js';
import NotFound from './containers/NotFound.js';

import Mobile from './containers/Mobile.js';

function requireAuth(store, nextState, replace, next) {
  if (!('isSignedIn' in store.getState().auth)) {
    replace('/login');
  }
  next();
}

function alreadyLogged(store, nextState, replace, next) {
  if ('isSignedIn' in store.getState().auth) {
    replace('/mobile');
  }
  next();
}

function logout(store, nextState, replace, next) {
  // TODO: store.dispatch(logout()); // Remove isSignedIn
  replace('/login');
  next();
}

function test(props) {
  console.log(props);
  console.log(props.params)

  return <p>pain in my ass</p>
}

/*<Route> // onEnter={requireAuth.bind(this, store)}>
</Route>*/

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>

      <Route
        path="/login"
        onEnter={alreadyLogged.bind(this, store)}
        component={SignIn}/>

      <Route
        path="/logout"
        onEnter={logout.bind(this, store)}/>

      <Route path="/mobile" component={App}>
        <Route path=":userId" component={Mobile}/>
      </Route>

      <Route path="*" component={NotFound} status={404} />
    </Router>
  </Provider>  
  ,
  document.getElementById('root')
);
