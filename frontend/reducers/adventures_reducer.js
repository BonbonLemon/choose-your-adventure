import merge from 'lodash/merge';

import {
  RECEIVE_ADVENTURES
} from '../actions/adventure_actions';

const adventuresReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ADVENTURES:
      return action.adventures;
    default:
      return state;
  }
};

export default adventuresReducer;
