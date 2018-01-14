import { connect } from 'react-redux';

import { fetchAdventures } from '../../actions/adventure_actions';
import AdventureIndex from './adventure_index.jsx';

const mapStateToProps = state => ({
  adventures: state.adventures
});

const mapDispatchToProps = dispatch => ({
  fetchAdventures: () => dispatch(fetchAdventures())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdventureIndex);
