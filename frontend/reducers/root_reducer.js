import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import user from './user_reducer';
import adventures from './adventures_reducer';
import pages from './pages_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  user,
  adventures,
  pages
});

export default rootReducer;
