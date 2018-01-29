import { connect } from 'react-redux';

import AdventureShow from './adventure_show';
import { fetchAdventure } from '../../actions/adventure_actions';

const mapStateToProps = state => ({
  adventure: state.adventure
});

const mapDispatchToProps = dispatch => ({
  fetchAdventure: () => dispatch(fetchAdventure())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdventureShow);
