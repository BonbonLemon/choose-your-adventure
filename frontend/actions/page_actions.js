import * as APIUtil from '../util/page_api_util';

export const RECEIVE_PAGE = 'RECEIVE_PAGE';

export const receivePage = page => ({
  type: RECEIVE_PAGE,
  page
});

export const createPage = (page) => dispatch => (
  APIUtil.createPage(page).then(page => {
    dispatch(receivePage(page));
  })
);
