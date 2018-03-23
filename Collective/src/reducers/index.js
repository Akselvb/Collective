import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import AuthReducer from './AuthReducer';
import HomeReducer from './HomeReducer';
import CollectiveManagerReducer from './CollectiveManagerReducer';

export default combineReducers({
  form,
  auth: AuthReducer,
  manager: CollectiveManagerReducer,
  home: HomeReducer
});
