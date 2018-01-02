import React from 'react';
import ReactDOM from 'react-dom';

// import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // we don't put the store directly on the window because
  // it can be confusing when debugging, sometimes giving you access to state
  // when you shouldn't
  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!
  
  console.log('hello');
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to the site</h1>, root);
});
