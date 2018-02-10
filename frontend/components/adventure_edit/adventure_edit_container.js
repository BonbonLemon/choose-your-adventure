import { connect } from 'react-redux';

import AdventureEdit from './adventure_edit';
import { fetchAdventure, editAdventure } from '../../actions/adventure_actions';
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
  fetchAdventure: (id) => dispatch(fetchAdventure(id)),
  editAdventure: (id) => dispatch(editAdventure(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdventureEdit);
