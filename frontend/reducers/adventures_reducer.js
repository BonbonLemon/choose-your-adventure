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
      const newPages = newState[action.adventureId].pages;
      const indexOfPageToRemove = newPages.findIndex(page => {
        return page.id == action.pageId
      });
      newPages.splice(indexOfPageToRemove, 1);
      return newState;
    case REMOVE_OPTION:
      newState[action.adventureId].pages
      // state[adventureId].pages.findIndex(page => { return page.id == action.pageId})
    default:
      return state;
  }
};

export default adventuresReducer;
