import merge from 'lodash/merge';

import {
	RECEIVE_PAGES,
} from '../actions/page_actions';

const pagesReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState = merge({}, state);

	switch (action.type) {
		case RECEIVE_PAGES:
			return merge({}, state, action.pages);
		default:
			return state;
	}
};

export default pagesReducer;