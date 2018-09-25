import merge from 'lodash/merge';

import {
	RECEIVE_PAGES,
	RECEIVE_PAGE,
	REMOVE_PAGE
} from '../actions/page_actions';

import {
	REMOVE_OPTION
} from '../actions/option_actions';

const pagesReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = merge({}, state);

	switch (action.type) {
		case RECEIVE_PAGES:
			return merge({}, state, action.pages);
		case RECEIVE_PAGE:
      const newPage = {[action.page.id]: action.page};
			return merge({}, state, newPage);
		case REMOVE_PAGE:
      delete newState[action.pageId];
      return newState;
    case REMOVE_OPTION:
    	const pageToDeleteFrom = newState[action.option.page_id];
    	const indexOfOptionToDelete = pageToDeleteFrom.options.findIndex(option => (
				option.id == action.option.id
  		));
    	pageToDeleteFrom.options.splice(indexOfOptionToDelete, 1);
    	return newState;
		default:
			return state;
	}
};

export default pagesReducer;