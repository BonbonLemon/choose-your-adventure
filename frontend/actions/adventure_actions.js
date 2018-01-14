import * as APIUtil from '../util/adventure_api_util';

export const RECEIVE_ADVENTURES = 'RECEIVE_ADVENTURES';

export const receiveAdventures = adventures => ({
  type: RECEIVE_ADVENTURES,
  adventures
});

export const fetchAdventures = filters => dispatch => (
  APIUtil.fetchAdventures(filters).then(adventures => (
    dispatch(receiveAdventures(adventures))
  ))
);
