import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import AuthReducer from './AuthReducer';
import HomeReducer from './HomeReducer';

export default combineReducers({
  form,
  auth: AuthReducer,
  home: HomeReducer
});
