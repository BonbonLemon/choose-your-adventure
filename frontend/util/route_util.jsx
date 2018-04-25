import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

const OwnerProtected = ({ component: Component, path, isOwner, }) => (
  <Route path={path} render={(props) => (
      isOwner(props) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
  )} />
)

const mapStateToProps = state => (
  {
    loggedIn: Boolean(state.session.currentUser),
    // isOwner: props => {
    //   return Boolean(state.session.currentUser && state.session.currentUser.adventures.find(function (adventure) {
    //     return adventure.id == parseInt(props.match.params.adventureId);
    //   }));
    // }
    // state.adventures[props.match.params.adventureId].author.id == state.session.currentUser.id;
    // Boolean(state.session.currentUser && state.session.currentUser.adventures.find(function (adventure) {
    //   debugger;
    //   return adventure.id === a;
    // }.bind(state)))
  }
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

// export const OwnerProtectedRoute = withRouter(connect(mapStateToProps, null)(OwnerProtected));
