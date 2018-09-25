import { connect } from 'react-redux';

import { fetchPages, createPage, editPage, deletePage } from '../../../actions/page_actions';
import { asArray } from '../../../reducers/selectors';
import Pages from './pages';

const mapStateToProps = (state, ownProps) => {
  const pages = ownProps.pages || [];
  return {
    pages
  };
}

const mapDispatchToProps = dispatch => ({
  fetchPages: (adventureId) => dispatch(fetchPages(adventureId)),
  createPage: page => dispatch(createPage(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages);
