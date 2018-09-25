import { connect } from 'react-redux';

import { createOption, editOption, deleteOption } from '../../../../actions/option_actions';
import { asArray } from '../../../../reducers/selectors';
import Options from './options';

const mapStateToProps = (state, ownProps) => {
	const page = ownProps.page;
	const pages = state.pages;
  const options = ownProps.page.options;
  return {
  	pages,
  	page,
    options
  };
};

const mapDispatchToProps = dispatch => ({
  createOption: (option, callback) => dispatch(createOption(option, callback)),
  editOption: (option, callback) => dispatch(editOption(option, callback)),
  deleteOption: (id) => dispatch(deleteOption(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
