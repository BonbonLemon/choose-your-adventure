import { connect } from 'react-redux';

import AdventureShow from './adventure_show';
import { fetchAdventure } from '../../actions/adventure_actions';
import { fetchPages } from '../../actions/page_actions';
import { selectAdventure, asArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const adventureId = parseInt(ownProps.match.params.adventureId);
  const adventure = selectAdventure(state.adventures, adventureId);
  const pageId = parseInt(ownProps.match.params.pageId);
  const pages = state.pages;
  const currentUser = state.session.currentUser;
  return {
    adventureId,
    adventure,
    pageId,
    pages,
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAdventure: (id, callback) => dispatch(fetchAdventure(id, callback)),
  fetchPages: (adventureId) => dispatch(fetchPages(adventureId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdventureShow);
