import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// TODO: remove after testing
// import * as fart from './actions/adventure_actions';
import fetchAdventures from './util/adventure_api_util'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TODO: remove testing stuff
  window.store = store;
  // window.fart = fart;
  window.fetchAdventures = fetchAdventures;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
