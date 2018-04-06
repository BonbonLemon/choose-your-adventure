import { connect } from 'react-redux';

import User from './user';
// import { fetchAdventure } from '../../actions/adventure_actions';

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  return {
    username: username
  };
};

const mapDispatchToProps = dispatch => ({
  // fetchAdventure: (id, callback) => dispatch(fetchAdventure(id, callback))
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
