import { connect } from 'react-redux';

// import { fetchAdventure } from '../../../actions/adventure_actions';
import { fetchPages, createPage, editPage, deletePage } from '../../../actions/page_actions';
import Pages from './pages';

const mapStateToProps = (state, ownProps) => {
  // TODO: how does deep component get its state?
  // const adventure = ownProps.adventure;
  // const pages = state.pages
  // debugger;
  return {
    // pages: pages
    // adventure: adventure
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPages: (adventureId) => dispatch(fetchPages(adventureId)),
  createPage: page => dispatch(createPage(page)),
  editPage: (page, callback) => dispatch(editPage(page, callback)),
  deletePage: (page, callback) => dispatch(deletePage(page, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages);
