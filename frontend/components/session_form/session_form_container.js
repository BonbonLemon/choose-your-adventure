import { connect } from 'react-redux';

import { logIn, signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session || []
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    logIn: user => dispatch(logIn(user)),
    signUp: user => dispatch(signUp(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
