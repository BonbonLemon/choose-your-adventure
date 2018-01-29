import { connect } from 'react-redux';

import { createAdventure } from '../../actions/adventure_actions';
import AdventureForm from './adventure_form';

const mapStateToProps = (state) => ({
  adventure: state.adventure
});

const mapDispatchToProps = dispatch => ({
  createAdventure: (adventure, callback) => dispatch(createAdventure(adventure, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdventureForm);
