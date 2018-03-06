import * as APIUtil from '../util/page_api_util';

export const RECEIVE_PAGE = 'RECEIVE_PAGE';

export const receivePage = page => ({
  type: RECEIVE_PAGE,
  page
});

export const createPage = (page, callback) => dispatch => (
  APIUtil.createPage(page).then(page => {
    if (callback) { callback(page); }
    dispatch(receivePage(page));
  })
);

export const editPage = (page, callback) => dispatch => (
  APIUtil.editPage(page).then(page => {
    if (callback) { callback(page); }
    dispatch(receivePage(page));
  })
)
