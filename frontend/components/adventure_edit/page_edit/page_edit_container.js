import { connect } from 'react-redux';

import { createPage } from '../../../actions/page_actions';
import PageEdit from './page_edit';

const mapStateToProps = (state, ownProps) => {
  // TODO: how does deep component get its state?
  const adventureId = ownProps.adventureId;
  return {
    adventureId: adventureId
  };
};

const mapDispatchToProps = dispatch => ({
  createPage: (page) => dispatch(createPage(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEdit);
