import { connect } from 'react-redux';

import { logOut } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: (e) => {
    e.preventDefault();
    dispatch(logOut());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
