import * as APIUtil from '../util/page_api_util';
import { fetchAdventure } from './adventure_actions';

export const RECEIVE_PAGES = 'RECEIVE_PAGES';

export const RECEIVE_PAGE = 'RECEIVE_PAGE';

export const receivePages = pages => ({
  type: RECEIVE_PAGES,
  pages
});

export const receivePage = page => ({
  type: RECEIVE_PAGE,
  page
});

export const fetchPages = () => dispatch => (
  APIUtil.fetchPages().then(pages => (
    dispatch(receivePages(pages))
  ))
);

export const fetchPage = (id, callback) => dispatch => (
  APIUtil.fetchPage(id).then(page => {
    if (callback) { callback(page); }
    dispatch(receivePage(page));
  })
);

export const createPage = (page, callback) => dispatch => (
  APIUtil.createPage(page).then(page => {
    dispatch(fetchAdventure(page.adventure.id));
    // fetchAdventure(page.adventure.id);
  })
);

export const editPage = (page, callback) => dispatch => (
  APIUtil.editPage(page).then(page => {
    if (callback) { callback(page); }
    dispatch(receivePage(page));
  })
);

export const deletePage = (id) => dispatch => (
  APIUtil.deletePage(id).then(page => {
    dispatch(fetchAdventure(page.adventure.id));
  })
);
