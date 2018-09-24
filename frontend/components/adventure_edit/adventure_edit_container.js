import { connect } from 'react-redux';

import AdventureEdit from './adventure_edit';
import { fetchAdventure, editAdventure } from '../../actions/adventure_actions';
import { fetchPages } from '../../actions/page_actions';
import { selectAdventure, asArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const adventureId = parseInt(ownProps.match.params.adventureId);
  const adventure = selectAdventure(state.adventures, adventureId);
  const pages = asArray(state.pages);
  const currentUser = state.session.currentUser;
  return {
    adventure,
    adventureId,
    pages,
    currentUser
  };
}

const mapDispatchToProps = dispatch => ({
  fetchAdventure: (id, callback) => dispatch(fetchAdventure(id, callback)),
  editAdventure: (id, callback) => dispatch(editAdventure(id, callback)),
  fetchPages: (id) => dispatch(fetchPages(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdventureEdit);
