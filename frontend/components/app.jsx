import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import AdventureIndex from './adventure/adventure_index_container';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>

    <Route path="/" component={AdventureIndex} />
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
