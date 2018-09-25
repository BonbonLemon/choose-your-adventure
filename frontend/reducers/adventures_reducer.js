import merge from 'lodash/merge';

import {
  RECEIVE_ADVENTURES,
  RECEIVE_ADVENTURE
} from '../actions/adventure_actions';

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
    case REMOVE_OPTION:
      const pageToDeleteFrom = newState[action.adventureId].pages.find(function (page) {
        return page.id == action.pageId;
      });
      const indexOfOptionToDelete = pageToDeleteFrom.options.findIndex(function (option) {
        return option.id == action.optionId;
      });
      pageToDeleteFrom.options.splice(indexOfOptionToDelete, 1);
      return newState;
    default:
      return state;
  }
};

export default adventuresReducer;
