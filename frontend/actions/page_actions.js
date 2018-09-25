import * as APIUtil from '../util/page_api_util';
import { fetchAdventure } from './adventure_actions';

export const RECEIVE_PAGES = 'RECEIVE_PAGES';

export const RECEIVE_PAGE = 'RECEIVE_PAGE';

export const REMOVE_PAGE = 'REMOVE_PAGE';

export const receivePages = (pages) => ({
  type: RECEIVE_PAGES,
  pages
});

export const receivePage = (page) => ({
  type: RECEIVE_PAGE,
  page
});

export const removePage = (pageId) => ({
  type: REMOVE_PAGE,
  pageId: pageId
});

export const fetchPages = (adventureId) => dispatch => (
  APIUtil.fetchPages(adventureId).then(pages => {
    dispatch(receivePages(pages));
  })
);

export const createPage = (page, callback) => dispatch => (
  APIUtil.createPage(page).then(page => (
    dispatch(receivePage(page))
  ))
);

export const editPage = (page, callback) => dispatch => (
  APIUtil.editPage(page).then(page => {
    if (callback) { callback(page); }
    dispatch(receivePage(page));
  })
);

export const deletePage = (id) => dispatch => (
  APIUtil.deletePage(id).then(page => {
    dispatch(removePage(page.id));
  })
);
