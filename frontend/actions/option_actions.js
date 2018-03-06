import * as APIUtil from '../util/option_api_util';

export const RECEIVE_OPTION = 'RECEIVE_OPTION';

export const receiveOption = option => ({
  type: RECEIVE_OPTION,
  option
});

export const createOption = (option, callback) => dispatch => (
  APIUtil.createOption(option).then(option => {
    if (callback) {callback(option); }
    dispatch(receiveOption(option));
  })
)
