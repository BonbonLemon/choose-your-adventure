import * as APIUtil from '../util/option_api_util';
import { fetchAdventure } from './adventure_actions';
import { fetchPage } from './page_actions';

export const REMOVE_OPTION = 'REMOVE_OPTION';

export const removeOption = (option) => ({
  type: REMOVE_OPTION,
  option
});

export const createOption = (option, callback) => dispatch => (
  APIUtil.createOption(option).then(option => {
    if (callback) { callback(option); }
    dispatch(fetchPage(option.page_id));
  })
);

export const editOption = (option, callback) => dispatch => (
  APIUtil.editOption(option).then(option => {
    if (callback) { callback(option); }
    dispatch(fetchPage(option.page_id));
  })
);

export const deleteOption = (id) => dispatch => (
  APIUtil.deleteOption(id).then(option => {
    dispatch(removeOption(option));
  })
);
