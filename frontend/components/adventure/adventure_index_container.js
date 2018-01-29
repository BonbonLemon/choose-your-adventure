import { connect } from 'react-redux';

import AdventureIndex from './adventure_index';
import { fetchAdventures } from '../../actions/adventure_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
  adventures: asArray(state.adventures)
});

const mapDispatchToProps = dispatch => ({
  fetchAdventures: () => dispatch(fetchAdventures())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdventureIndex);
