import { connect } from 'react-redux';

import AdventureShow from './adventure_show';
import { fetchAdventure } from '../../actions/adventure_actions';
import { selectAdventure } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const adventureId = parseInt(ownProps.match.params.adventureId);
  const adventure = selectAdventure(state.adventures, adventureId);
  const currentUser = state.session.currentUser;
  return {
    adventure: adventure,
    adventureId: adventureId,
    currentUser: currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAdventure: (id, callback) => dispatch(fetchAdventure(id, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdventureShow);
