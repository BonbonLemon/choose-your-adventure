import merge from 'lodash/merge';

import {
  RECEIVE_ADVENTURES,
  RECEIVE_ADVENTURE
} from '../actions/adventure_actions';

import {
  REMOVE_PAGE
} from '../actions/page_actions';

import {
  REMOVE_OPTION
} from '../actions/option_actions';

const adventuresReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ADVENTURES:
      return action.adventures;
    case RECEIVE_ADVENTURE:
      const newAdventure = {[action.adventure.id]: action.adventure};
      return merge({}, state, newAdventure);
    case REMOVE_PAGE:
      delete newState[action.adventureId].pages[action.pageId];
      return newState;
    case REMOVE_OPTION:
      delete newState[action.adventureId].pages[action.pageId].options[action.optionId];
      return newState;
    default:
      return state;
  }
};

export default adventuresReducer;
