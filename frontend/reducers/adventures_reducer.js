import merge from 'lodash/merge';

import {
  RECEIVE_ADVENTURES,
  RECEIVE_ADVENTURE
} from '../actions/adventure_actions';

import {
  REMOVE_PAGE
} from '../actions/page_actions';

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
      newState = merge({}, state);
      const indexOfPageToRemove = newState[action.adventureId].pages.findIndex(page => {
        return page.id == action.pageId
      });
      newState[action.adventureId].pages.splice(indexOfPageToRemove, 1);
      return newState;
    default:
      return state;
  }
};

export default adventuresReducer;
