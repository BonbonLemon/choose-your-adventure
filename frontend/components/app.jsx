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
import Footer from './footer/footer';
import About from './footer/links/about';
import ReleaseNotes from './footer/links/release_notes';

import SessionFormContainer from './session_form/session_form_container';
import AdventureIndexContainer from './adventure/adventure_index_container';
import AdventureNewContainer from './adventure_new/adventure_new_container';
import AdventureShowContainer from './adventure_show/adventure_show_container';
import AdventureEditContainer from './adventure_edit/adventure_edit_container';
import UserContainer from './users/user_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div id="root-container">
    <div className="wrapper">
      <header>
        <NavbarContainer />
      </header>

      <Switch>
        <Route exact path="/" component={AdventureIndexContainer} />
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path="/adventures/new" component={AdventureNewContainer} />
        <Route path="/adventures/:adventureId" component={AdventureShowContainer} />
        <Route path="/adventureeditor/:adventureId" component={AdventureEditContainer} />
        <Route path="/users/:username" component={UserContainer} />

        <Route path="/about" component={About} />
        <Route path="/release-notes" component={ReleaseNotes} />
      </Switch>
    </div>

    <Footer />
  </div>
);

export default App;
