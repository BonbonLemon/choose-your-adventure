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
import AdventureForm from './adventure_form/adventure_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>

    <Route exact path="/" component={AdventureIndex} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/adventures/new" component={AdventureForm} />
  </div>
);

export default App;
