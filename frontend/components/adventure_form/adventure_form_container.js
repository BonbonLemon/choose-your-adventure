import { connect } from 'react-redux';

import { createAdventure } from '../../actions/adventure_actions';
import AdventureForm from './adventure_form';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  createAdventure: adventure => dispatch(createAdventure(adventure))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdventureForm);
