import * as APIUtil from '../util/page_api_util';
import { fetchAdventure } from './adventure_actions';

export const REMOVE_PAGE = 'REMOVE_PAGE';

export const removePage = (adventureId, pageId) => ({
  type: REMOVE_PAGE,
  adventureId: adventureId,
  pageId: pageId
});

export const createPage = (page, callback) => dispatch => (
  APIUtil.createPage(page).then(page => {
    dispatch(fetchAdventure(page.adventure.id));
  })
);

export const editPage = (page, callback) => dispatch => (
  APIUtil.editPage(page).then(page => {
    if (callback) { callback(page); }
    dispatch(fetchAdventure(page.adventure.id));
  })
);

export const deletePage = (id) => dispatch => (
  APIUtil.deletePage(id).then(page => {
    dispatch(removePage(page.adventure.id, page.id));
  })
);
