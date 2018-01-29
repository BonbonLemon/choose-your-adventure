import merge from 'lodash/merge';

import {
  RECEIVE_ADVENTURES,
  RECEIVE_ADVENTURE
} from '../actions/adventure_actions';

const adventuresReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ADVENTURES:
      return action.adventures;
    case RECEIVE_ADVENTURE:
    // debugger;
      const newAdventure = {[action.adventure.id]: action.adventure};
      return merge({}, state, newAdventure);
    default:
      return state;
  }
};

export default adventuresReducer;
