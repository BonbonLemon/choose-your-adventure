import { connect } from 'react-redux';

import AdventureEdit from './adventure_edit';
import { fetchAdventure } from '../../actions/adventure_actions';
import { selectAdventure } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const adventureId = parseInt(ownProps.match.params.adventureId);
  const adventure = selectAdventure(state.adventures, adventureId);
  return {
    adventure: adventure,
    adventureId: adventureId
  };
}

const mapDispatchToProps = dispatch => ({
  fetchAdventure: (id) => dispatch(fetchAdventure(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdventureEdit);
