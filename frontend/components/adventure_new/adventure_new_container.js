import { connect } from 'react-redux';

import { createAdventure } from '../../actions/adventure_actions';
import AdventureNew from './adventure_new';

const mapStateToProps = (state) => ({
  adventure: state.adventure
});

const mapDispatchToProps = dispatch => ({
  createAdventure: (adventure, callback) => dispatch(createAdventure(adventure, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdventureNew);
