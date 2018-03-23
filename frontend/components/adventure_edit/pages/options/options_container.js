import { connect } from 'react-redux';

import { createOption, editOption } from '../../../../actions/option_actions';
import Options from './options';

const mapStateToProps = (state, ownProps) => {
  // const adventure = ownProps.adventure;
  return {
    // adventure: adventure
  };
};

const mapDispatchToProps = dispatch => ({
  createOption: (option, callback) => dispatch(createOption(option, callback)),
  editOption: (option, callback) => dispatch(editOption(option,callback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
