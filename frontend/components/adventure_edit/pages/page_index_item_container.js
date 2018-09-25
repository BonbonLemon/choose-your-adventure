import { connect } from 'react-redux';

import { editPage, deletePage } from '../../../actions/page_actions';
import PageIndexItem from './page_index_item';

const mapStateToProps = (state, ownProps) => {
  return {
    page: state.pages[ownProps.pageId]
  };
}

const mapDispatchToProps = dispatch => ({
  editPage: (page, callback) => dispatch(editPage(page, callback)),
  deletePage: (page) => dispatch(deletePage(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageIndexItem);
