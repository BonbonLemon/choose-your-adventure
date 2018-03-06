import { connect } from 'react-redux';

import { createOption } from '../../../../actions/option_actions';
import Options from './options';

const mapStateToProps = (state, ownProps) => {
  // TODO: how does deep component get its state?
  // const adventure = ownProps.adventure;
  return {
    // adventure: adventure
  };
};

const mapDispatchToProps = dispatch => ({
  createOption: (option, callback) => dispatch(createOption(option, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
