import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import User from './user';

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const user = state.user || {};
  return {
    user: user,
    username: username
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
