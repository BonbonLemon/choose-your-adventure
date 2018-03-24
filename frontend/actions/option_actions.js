import * as APIUtil from '../util/option_api_util';
import { fetchAdventure } from './adventure_actions';

export const RECEIVE_OPTION = 'RECEIVE_OPTION';

export const receiveOption = option => ({
  type: RECEIVE_OPTION,
  option
});

export const createOption = (option, callback) => dispatch => (
  APIUtil.createOption(option).then(option => {
    if (callback) { callback(option); }
    dispatch(fetchAdventure(option.page.adventure.id));
  })
);

export const editOption = (option, callback) => dispatch => (
  APIUtil.editOption(option).then(option => {
    if (callback) { callback(option) ;}
    dispatch(fetchAdventure(option.page.adventure.id));
  })
);

export const deleteOption = (id) => dispatch => (
  APIUtil.deleteOption(id).then(option => {
    debugger;
    dispatch(fetchAdventure(option.page.adventure.id));
  })
)
