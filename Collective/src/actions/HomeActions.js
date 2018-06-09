import {
  SELECT_LIBRARY,
  SET_MODAL_VISIBILITY_NOTIFICATIONS
} from './types';

export const selectLibrary = (libraryId) => {
  return {
    type: SELECT_LIBRARY,
    payload: libraryId
  };
};

export const setModalVisibilityNotifications = (isVisible) => {
  return {
    type: SET_MODAL_VISIBILITY_NOTIFICATIONS,
    payload: isVisible
  };
};
