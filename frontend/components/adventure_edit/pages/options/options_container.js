import { connect } from 'react-redux';

import { createOption } from '../../../../actions/option_actions';
import { fetchPage } from '../../../../actions/page_actions';
import Options from './options';

const mapStateToProps = (state, ownProps) => {
  // const adventure = ownProps.adventure;
  debugger;
  return {
    // adventure: adventure
  };
};

const mapDispatchToProps = dispatch => ({
  createOption: (option, callback) => dispatch(createOption(option, callback)),
  fetchPage: (id, callback) => dispatch(fetchPage(id, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
