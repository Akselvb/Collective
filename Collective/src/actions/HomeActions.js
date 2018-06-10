import {
  SELECT_LIBRARY,
  SET_MODAL_VISIBILITY_NOTIFICATIONS
} from './types';

/*
  Select tab to open in events tab
*/
export const selectLibrary = (libraryId) => {
  return {
    type: SELECT_LIBRARY,
    payload: libraryId
  };
};

/*
  Open and close visibility of notifications modal
*/
export const setModalVisibilityNotifications = (isVisible) => {
  return {
    type: SET_MODAL_VISIBILITY_NOTIFICATIONS,
    payload: isVisible
  };
};
