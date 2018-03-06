import { connect } from 'react-redux';

import { fetchAdventure } from '../../../actions/adventure_actions';
import { createPage, editPage } from '../../../actions/page_actions';
import Options from './options';

const mapStateToProps = (state, ownProps) => {
  // TODO: how does deep component get its state?
  // const adventure = ownProps.adventure;
  return {
    // adventure: adventure
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);
