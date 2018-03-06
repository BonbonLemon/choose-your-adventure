import { connect } from 'react-redux';

import { fetchAdventure } from '../../../actions/adventure_actions';
import { createPage, editPage } from '../../../actions/page_actions';
import Pages from './pages';

const mapStateToProps = (state, ownProps) => {
  // TODO: how does deep component get its state?
  const adventure = ownProps.adventure;
  return {
    adventure: adventure
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAdventure: (id, callback) => dispatch(fetchAdventure(id, callback)),
  createPage: (page, callback) => dispatch(createPage(page, callback)),
  editPage: (page, callback) => dispatch(editPage(page, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages);
