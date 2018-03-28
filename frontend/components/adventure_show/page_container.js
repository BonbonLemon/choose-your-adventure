import { connect } from 'react-redux';

import Page from './page';
import { fetchAdventure } from '../../actions/adventure_actions';
import { selectAdventure } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const adventureId = parseInt(ownProps.match.params.adventureId);
  const adventure = selectAdventure(state.adventures, adventureId);
  return {
    adventure: adventure,
    adventureId: adventureId
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAdventure: (id, callback) => dispatch(fetchAdventure(id, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
