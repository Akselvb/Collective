import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import AuthReducer from './AuthReducer';
import HomeReducer from './HomeReducer';
import CollectiveManagerReducer from './CollectiveManagerReducer';
import ChatReducer from './ChatReducer';
import LibraryReducer from './LibraryReducer';
import EventSelectionReducer from './EventSelectionReducer';

export default combineReducers({
  form,
  auth: AuthReducer,
  manager: CollectiveManagerReducer,
  home: HomeReducer,
  chat: ChatReducer,
  libraries: LibraryReducer,
  selectedLibraryId: EventSelectionReducer
});
