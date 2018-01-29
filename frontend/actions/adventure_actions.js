import * as APIUtil from '../util/adventure_api_util';

export const RECEIVE_ADVENTURES = 'RECEIVE_ADVENTURES';
export const RECEIVE_ADVENTURE = 'RECEIVE_ADVENTURE';

export const receiveAdventures = adventures => ({
  type: RECEIVE_ADVENTURES,
  adventures
});

export const receiveAdventure = adventure => ({
  type: RECEIVE_ADVENTURE,
  adventure
});

export const fetchAdventures = filters => dispatch => (
  APIUtil.fetchAdventures(filters).then(adventures => (
    dispatch(receiveAdventures(adventures))
  ))
);

export const fetchAdventure = id => dispatch => (
  APIUtil.fetchAdventure(id).then(adventure => (
    dispatch(receiveAdventure(adventure))
  ))
);

export const createAdventure = (adventure, callback) => dispatch => (
  APIUtil.createAdventure(adventure).then(adventure => {
    callback(adventure);
    dispatch(receiveAdventure(adventure));
  })
);
